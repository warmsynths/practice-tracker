import { describe, it, expect, vi, beforeEach } from 'vitest';
import worker from './index';
import { Env } from './types';

describe('Cloudflare Worker BFF API Endpoints', () => {
  const baseEnv: Env = {
    SUPABASE_URL: 'https://example.supabase.co',
    SUPABASE_SERVICE_ROLE_KEY: 'test-service-key',
    PT_PASSCODE: 'my-super-secret-pass',
  };

  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it('handles CORS OPTIONS preflight request', async () => {
    const req = new Request('https://worker.dev/api/health', {
      method: 'OPTIONS',
    });

    const res = await worker.fetch(req, baseEnv);
    expect(res.status).toBe(204);
    expect(res.headers.get('Access-Control-Allow-Origin')).toBe('*');
    expect(res.headers.get('Access-Control-Allow-Methods')).toContain('POST');
  });

  it('rejects unauthorized request when X-PT-Secret is missing or incorrect', async () => {
    const reqNoSecret = new Request('https://worker.dev/api/health', {
      method: 'GET',
    });
    const resNoSecret = await worker.fetch(reqNoSecret, baseEnv);
    expect(resNoSecret.status).toBe(401);

    const reqWrongSecret = new Request('https://worker.dev/api/health', {
      method: 'GET',
      headers: { 'X-PT-Secret': 'wrong-passcode' },
    });
    const resWrongSecret = await worker.fetch(reqWrongSecret, baseEnv);
    expect(resWrongSecret.status).toBe(401);
  });

  it('allows GET /api/health with valid X-PT-Secret passcode', async () => {
    const req = new Request('https://worker.dev/api/health', {
      method: 'GET',
      headers: { 'X-PT-Secret': 'my-super-secret-pass' },
    });

    const res = await worker.fetch(req, baseEnv);
    expect(res.status).toBe(200);

    const data = (await res.json()) as { status: string; timestamp: string };
    expect(data.status).toBe('ok');
    expect(data.timestamp).toBeDefined();
  });

  it('returns 500 on POST /api/sync if Supabase credentials are missing', async () => {
    const req = new Request('https://worker.dev/api/sync', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-PT-Secret': 'my-super-secret-pass',
      },
      body: JSON.stringify({ lastSyncedAt: null }),
    });

    const res = await worker.fetch(req, { PT_PASSCODE: 'my-super-secret-pass' });
    expect(res.status).toBe(500);
    const data = (await res.json()) as { error: string };
    expect(data.error).toContain('Supabase credentials missing');
  });

  it('handles POST /api/sync and returns delta payload', async () => {
    const mockDbSessions = [
      {
        id: 's-db-1',
        instrument_id: 'guitar',
        start_time: '2026-08-16T09:00:00.000Z',
        end_time: '2026-08-16T09:30:00.000Z',
        duration: 30,
        notes: 'Supabase session',
        deleted_at: null,
        updated_at: '2026-08-16T09:35:00.000Z',
      },
    ];

    const mockDbInstruments = [
      {
        id: 'guitar',
        name: 'Guitar',
        color: '#6B7F6E',
        tier: 'primary',
        archived: false,
        deleted_at: null,
        updated_at: '2026-08-16T09:00:00.000Z',
      },
    ];

    globalThis.fetch = vi.fn().mockImplementation(async (url: string, init?: RequestInit) => {
      const urlStr = String(url);
      if (urlStr.includes('/rest/v1/sessions') && init?.method === 'GET') {
        return new Response(JSON.stringify(mockDbSessions), { status: 200 });
      }
      if (urlStr.includes('/rest/v1/instruments') && init?.method === 'GET') {
        return new Response(JSON.stringify(mockDbInstruments), { status: 200 });
      }
      if (init?.method === 'POST') {
        return new Response(null, { status: 201 });
      }
      return new Response('{}', { status: 200 });
    });

    const req = new Request('https://worker.dev/api/sync', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-PT-Secret': 'my-super-secret-pass',
      },
      body: JSON.stringify({
        lastSyncedAt: '2026-08-16T08:00:00.000Z',
        sessions: [
          {
            id: 's-client-1',
            instrumentId: 'guitar',
            start: '2026-08-16T08:30:00.000Z',
            end: '2026-08-16T09:00:00.000Z',
            duration: 30,
            updatedAt: '2026-08-16T09:00:00.000Z',
          },
        ],
      }),
    });

    const res = await worker.fetch(req, baseEnv);
    expect(res.status).toBe(200);

    const body = (await res.json()) as any;
    expect(body.syncedAt).toBeDefined();
    expect(body.sessions).toHaveLength(1);
    expect(body.sessions[0].id).toBe('s-db-1');
    expect(body.sessions[0].instrumentId).toBe('guitar');
    expect(body.instruments).toHaveLength(1);
    expect(body.instruments[0].name).toBe('Guitar');
  });
});
