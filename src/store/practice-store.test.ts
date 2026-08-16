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

  describe('Ticket 02: Instrument Kit Cloud Sync & Palette Propagation', () => {
    it('assigns updatedAt timestamp when adding, editing, and archiving instruments', () => {
      practiceStore.updateSettings({ workerUrl: 'https://practice-sync.worker.dev', syncPasscode: 'test' });
      const syncSpy = vi.spyOn(syncEngine, 'sync');

      // Add instrument
      const newInst = practiceStore.addInstrument('Mandolin', '#A98F72', 'secondary');
      expect(newInst.updatedAt).toBe('2026-08-16T10:00:00.000Z');
      expect(practiceStore.getAllInstruments().some((i) => i.id === newInst.id)).toBe(true);
      expect(syncSpy).toHaveBeenCalled();

      // Edit instrument
      vi.advanceTimersByTime(60000);
      practiceStore.updateInstrument({ ...newInst, color: '#6B7F6E', tier: 'primary' });
      const updated = practiceStore.getInstrument(newInst.id);
      expect(updated.color).toBe('#6B7F6E');
      expect(updated.tier).toBe('primary');
      expect(updated.updatedAt).toBe('2026-08-16T10:01:00.000Z');

      // Archive instrument with history
      practiceStore.logManualSession(newInst.id, new Date('2026-08-16T10:00:00.000Z'), 15);
      vi.advanceTimersByTime(60000);
      practiceStore.removeInstrument(newInst.id);
      const archived = practiceStore.getInstrument(newInst.id);
      expect(archived.archived).toBe(true);
      expect(archived.updatedAt).toBe('2026-08-16T10:02:00.000Z');
      expect(practiceStore.getActiveInstruments().some((i) => i.id === newInst.id)).toBe(false);
    });

    it('creates an instrument tombstone when removing an instrument without history', () => {
      const tempInst = practiceStore.addInstrument('Temporary Banjo', '#7D6E7F', 'secondary');
      expect(practiceStore.getAllInstruments().some((i) => i.id === tempInst.id)).toBe(true);

      practiceStore.removeInstrument(tempInst.id);
      expect(practiceStore.getAllInstruments().some((i) => i.id === tempInst.id)).toBe(false);

      const savedTombstones = JSON.parse(localStorage.getItem('ptTombstonesV1') || '[]');
      expect(savedTombstones.some((t: any) => t.id === tempInst.id && t.type === 'instrument')).toBe(true);
    });

    it('reconciles remote instruments and applies remote instrument tombstones', async () => {
      vi.spyOn(syncEngine, 'sync').mockResolvedValue({
        syncedAt: '2026-08-16T12:00:00.000Z',
        instruments: [
          {
            id: 'synthesizer',
            name: 'Synthesizer',
            color: '#4A5568',
            tier: 'primary',
            archived: false,
            updatedAt: '2026-08-16T11:00:00.000Z',
          },
        ],
        sessions: [],
        tombstones: [
          {
            id: 'drumming',
            type: 'instrument',
            deletedAt: '2026-08-16T11:30:00.000Z',
          },
        ],
      });

      await practiceStore.syncWithCloud(true);

      // Verify remote synthesizer added
      const synth = practiceStore.getInstrument('synthesizer');
      expect(synth.name).toBe('Synthesizer');
      expect(synth.tier).toBe('primary');

      // Verify remote tombstone removed drumming
      expect(practiceStore.getAllInstruments().some((i) => i.id === 'drumming')).toBe(false);
    });
  });

  describe('Ticket 03: Live Timer Completion, Session Deletions & Tombstones', () => {
    it('finishing a live stopwatch timer creates a session and triggers cloud sync', () => {
      practiceStore.updateSettings({ workerUrl: 'https://practice-sync.worker.dev', syncPasscode: 'test' });
      const syncSpy = vi.spyOn(syncEngine, 'sync');

      // Start live timer
      practiceStore.startSession('guitar');
      expect(practiceStore.getActiveSession()).toEqual({
        instrumentId: 'guitar',
        startedAt: new Date('2026-08-16T10:00:00.000Z').getTime(),
      });

      // Advance by 32 minutes
      vi.advanceTimersByTime(32 * 60000);

      // End session
      const completed = practiceStore.endSession();
      expect(completed).not.toBeNull();
      expect(completed?.duration).toBe(32);
      expect(completed?.instrumentId).toBe('guitar');
      expect(completed?.updatedAt).toBe('2026-08-16T10:32:00.000Z');
      expect(practiceStore.getActiveSession()).toBeNull();
      expect(syncSpy).toHaveBeenCalled();
    });

    it('discarding a live timer resets active session without saving or syncing', () => {
      practiceStore.updateSettings({ workerUrl: 'https://practice-sync.worker.dev', syncPasscode: 'test' });
      const syncSpy = vi.spyOn(syncEngine, 'sync');

      practiceStore.startSession('piano');
      expect(practiceStore.getActiveSession()).not.toBeNull();

      practiceStore.discardSession();
      expect(practiceStore.getActiveSession()).toBeNull();
      expect(syncSpy).not.toHaveBeenCalled();
    });

    it('holds offline changes locally and pushes all pending changes upon reconnection', async () => {
      practiceStore.updateSettings({ workerUrl: 'https://practice-sync.worker.dev', syncPasscode: 'test' });
      
      // Simulate offline network failure
      vi.spyOn(syncEngine, 'sync').mockRejectedValue(new Error('Network error: Failed to fetch'));

      const offlineSession = practiceStore.logManualSession('bass', new Date('2026-08-16T10:00:00.000Z'), 45, 'Offline practice');
      practiceStore.deleteSession('guitar'); // deleted guitar

      // Sync fails while offline
      const failedSync = await practiceStore.syncWithCloud(true);
      expect(failedSync.success).toBe(false);
      expect(practiceStore.getSyncStatus()).toBe('error');

      // Check that data remains locally
      expect(practiceStore.getSessions().some((s) => s.id === offlineSession.id)).toBe(true);

      // Restore sync connectivity
      let capturedPayload: any = null;
      vi.spyOn(syncEngine, 'sync').mockImplementation(async (_url, _secret, payload) => {
        capturedPayload = payload;
        return {
          syncedAt: '2026-08-16T10:15:00.000Z',
          instruments: [],
          sessions: [],
          tombstones: [],
        };
      });

      const recoverySync = await practiceStore.syncWithCloud(false);
      expect(recoverySync.success).toBe(true);
      expect(practiceStore.getSyncStatus()).toBe('synced');
      expect(capturedPayload).not.toBeNull();
      expect(capturedPayload.sessions.some((s: any) => s.id === offlineSession.id)).toBe(true);
      expect(capturedPayload.tombstones.some((t: any) => t.id === 'guitar')).toBe(true);
    });
  });
});
