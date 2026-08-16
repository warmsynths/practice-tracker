import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { practiceStore } from './practice-store';
import { syncEngine } from '../services/sync-engine';

// Mock localStorage
const localStorageMock = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value.toString();
    },
    removeItem: (key: string) => {
      delete store[key];
    },
    clear: () => {
      store = {};
    },
  };
})();

Object.defineProperty(globalThis, 'localStorage', {
  value: localStorageMock,
});

describe('PracticeStore Cloud Sync & Timestamping', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2026-08-16T10:00:00.000Z'));
    localStorageMock.clear();
    practiceStore.clearAllData();
    practiceStore.disconnectCloudSync();
    vi.restoreAllMocks();
    vi.spyOn(syncEngine, 'sync').mockResolvedValue({
      syncedAt: '2026-08-16T10:00:00.000Z',
      instruments: [],
      sessions: [],
      tombstones: [],
    });
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('assigns an ISO updatedAt timestamp when creating a manual practice session', () => {
    const start = new Date('2026-08-16T10:00:00.000Z');
    const session = practiceStore.logManualSession('guitar', start, 25, 'Scales & Arpeggios');

    expect(session.id).toBeDefined();
    expect(session.instrumentId).toBe('guitar');
    expect(session.duration).toBe(25);
    expect(session.notes).toBe('Scales & Arpeggios');
    expect(session.updatedAt).toBe('2026-08-16T10:00:00.000Z');

    const saved = practiceStore.getSessions().find((s) => s.id === session.id);
    expect(saved?.updatedAt).toBe('2026-08-16T10:00:00.000Z');
  });

  it('updates session updatedAt timestamp on updateSession', () => {
    const start = new Date('2026-08-16T10:00:00.000Z');
    const session = practiceStore.logManualSession('guitar', start, 20);
    const originalUpdatedAt = session.updatedAt;

    // Advance time by 5 minutes
    vi.advanceTimersByTime(300000);

    const updated = { ...session, duration: 40, notes: 'Extended practice' };
    practiceStore.updateSession(updated);

    const retrieved = practiceStore.getSessions().find((s) => s.id === session.id);
    expect(retrieved?.duration).toBe(40);
    expect(retrieved?.notes).toBe('Extended practice');
    expect(retrieved?.updatedAt).toBe('2026-08-16T10:05:00.000Z');
    expect(retrieved?.updatedAt).not.toBe(originalUpdatedAt);
  });

  it('records a tombstone when a session is deleted', () => {
    const start = new Date('2026-08-16T10:00:00.000Z');
    const session = practiceStore.logManualSession('piano', start, 15);

    expect(practiceStore.getSessions().some((s) => s.id === session.id)).toBe(true);

    practiceStore.deleteSession(session.id);

    expect(practiceStore.getSessions().some((s) => s.id === session.id)).toBe(false);

    // Verify tombstones saved in localStorage
    const savedTombstones = JSON.parse(localStorage.getItem('ptTombstonesV1') || '[]');
    expect(savedTombstones).toHaveLength(1);
    expect(savedTombstones[0].id).toBe(session.id);
    expect(savedTombstones[0].type).toBe('session');
    expect(savedTombstones[0].deletedAt).toBeDefined();
  });

  it('reconciles remote changes using Last-Write-Wins and removes tombstoned items', async () => {
    const localStart = new Date('2026-08-16T08:00:00.000Z');
    const localSession = practiceStore.logManualSession('guitar', localStart, 20, 'Local version');
    const doomedSession = practiceStore.logManualSession('piano', localStart, 15, 'To be deleted');

    const remoteSyncTime = '2026-08-16T12:00:00.000Z';
    const newerUpdatedAt = '2026-08-16T11:00:00.000Z';

    vi.spyOn(syncEngine, 'sync').mockResolvedValue({
      syncedAt: remoteSyncTime,
      instruments: [],
      sessions: [
        {
          id: localSession.id,
          instrumentId: 'guitar',
          start: '2026-08-16T08:00:00.000Z',
          end: '2026-08-16T08:35:00.000Z',
          duration: 35,
          notes: 'Remote updated notes',
          updatedAt: newerUpdatedAt,
        },
        {
          id: 'remote-sess-new',
          instrumentId: 'guitar',
          start: '2026-08-16T09:00:00.000Z',
          end: '2026-08-16T09:30:00.000Z',
          duration: 30,
          notes: 'Created on other device',
          updatedAt: newerUpdatedAt,
        },
      ],
      tombstones: [
        {
          id: doomedSession.id,
          type: 'session',
          deletedAt: '2026-08-16T10:30:00.000Z',
        },
      ],
    });

    const syncResult = await practiceStore.syncWithCloud(true);
    expect(syncResult.success).toBe(true);

    const finalSessions = practiceStore.getSessions();

    // 1. Updated session merged
    const updatedLoc = finalSessions.find((s) => s.id === localSession.id);
    expect(updatedLoc?.duration).toBe(35);
    expect(updatedLoc?.notes).toBe('Remote updated notes');

    // 2. New remote session added
    const newRemote = finalSessions.find((s) => s.id === 'remote-sess-new');
    expect(newRemote).toBeDefined();
    expect(newRemote?.notes).toBe('Created on other device');

    // 3. Doomed session deleted
    expect(finalSessions.some((s) => s.id === doomedSession.id)).toBe(false);

    // 4. LastSyncedAt timestamp updated
    expect(practiceStore.getLastSyncedAt()).toBe(remoteSyncTime);
    expect(practiceStore.getSyncStatus()).toBe('synced');
  });
});
