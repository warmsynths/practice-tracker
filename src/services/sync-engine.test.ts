import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { SyncEngine } from './sync-engine';
import { SyncRequestPayload } from '../types';

describe('SyncEngine', () => {
  let syncEngine: SyncEngine;
  const originalFetch = globalThis.fetch;

  beforeEach(() => {
    syncEngine = new SyncEngine();
  });

  afterEach(() => {
    globalThis.fetch = originalFetch;
    vi.restoreAllMocks();
  });

  describe('testConnection', () => {
    it('returns error if worker URL is empty', async () => {
      const result = await syncEngine.testConnection('');
      expect(result.ok).toBe(false);
      expect(result.message).toContain('Worker URL cannot be empty');
    });

    it('successfully connects with 200 OK and returns timestamp', async () => {
      const mockTimestamp = '2026-08-16T12:00:00.000Z';
      globalThis.fetch = vi.fn().mockResolvedValue({
        status: 200,
        ok: true,
        json: async () => ({ status: 'ok', timestamp: mockTimestamp }),
      } as Response);

      const result = await syncEngine.testConnection('practice-tracker.workers.dev', 'secret123');

      expect(result.ok).toBe(true);
      expect(result.status).toBe(200);
      expect(result.timestamp).toBe(mockTimestamp);
      expect(globalThis.fetch).toHaveBeenCalledWith(
        'https://practice-tracker.workers.dev/api/health',
        expect.objectContaining({
          method: 'GET',
          headers: { 'X-PT-Secret': 'secret123' },
        })
      );
    });

    it('handles 401 Unauthorized for invalid passcode', async () => {
      globalThis.fetch = vi.fn().mockResolvedValue({
        status: 401,
        ok: false,
        text: async () => 'Unauthorized',
      } as Response);

      const result = await syncEngine.testConnection('https://pt.workers.dev', 'wrongpass');

      expect(result.ok).toBe(false);
      expect(result.status).toBe(401);
      expect(result.message).toContain('Unauthorized');
    });

    it('handles network errors gracefully', async () => {
      globalThis.fetch = vi.fn().mockRejectedValue(new Error('Failed to fetch'));

      const result = await syncEngine.testConnection('https://pt.workers.dev', 'secret123');

      expect(result.ok).toBe(false);
      expect(result.status).toBe(0);
      expect(result.message).toContain('Network error');
    });
  });

  describe('sync', () => {
    it('throws error if worker URL is not provided', async () => {
      await expect(syncEngine.sync('', 'secret', { lastSyncedAt: null })).rejects.toThrow(
        'Worker URL is not configured'
      );
    });

    it('sends sync payload and receives response successfully', async () => {
      const mockResponse = {
        syncedAt: '2026-08-16T13:00:00.000Z',
        instruments: [],
        sessions: [
          {
            id: 's-1',
            instrumentId: 'guitar',
            start: '2026-08-16T10:00:00.000Z',
            end: '2026-08-16T10:30:00.000Z',
            duration: 30,
            updatedAt: '2026-08-16T12:00:00.000Z',
          },
        ],
        tombstones: [],
      };

      globalThis.fetch = vi.fn().mockResolvedValue({
        status: 200,
        ok: true,
        json: async () => mockResponse,
      } as Response);

      const payload: SyncRequestPayload = {
        lastSyncedAt: null,
        instruments: [],
        sessions: [],
        tombstones: [],
      };

      const result = await syncEngine.sync('https://pt.workers.dev', 'secret123', payload);

      expect(result).toEqual(mockResponse);
      expect(globalThis.fetch).toHaveBeenCalledWith(
        'https://pt.workers.dev/api/sync',
        expect.objectContaining({
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-PT-Secret': 'secret123',
          },
          body: JSON.stringify(payload),
        })
      );
    });

    it('throws descriptive error on server error response', async () => {
      globalThis.fetch = vi.fn().mockResolvedValue({
        status: 500,
        ok: false,
        statusText: 'Internal Server Error',
        json: async () => ({ error: 'Database connection failed' }),
      } as Response);

      const payload: SyncRequestPayload = {
        lastSyncedAt: null,
      };

      await expect(syncEngine.sync('https://pt.workers.dev', 'secret123', payload)).rejects.toThrow(
        'Cloud sync failed (500): Database connection failed'
      );
    });
  });
});
