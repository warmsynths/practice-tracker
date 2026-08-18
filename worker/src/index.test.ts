import { describe, it, expect, vi, beforeEach } from 'vitest';
import worker from './index';
import { Env } from './types';

function createMockJwt(sub: string, expOffsetSec = 3600): string {
  const header = btoa(JSON.stringify({ alg: 'HS256', typ: 'JWT' }));
  const exp = Math.floor(Date.now() / 1000) + expOffsetSec;
  const payload = btoa(JSON.stringify({ sub, exp, email: 'musician@example.com' }));
  const signature = btoa('mock-sig');
  return `${header}.${payload}.${signature}`;
}

describe('Cloudflare Worker BFF API Endpoints with Supabase Auth', () => {
  const baseEnv: Env = {
    SUPABASE_URL: 'https://example.supabase.co',
    SUPABASE_ANON_KEY: 'test-anon-key',
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
    expect(res.headers.get('Access-Control-Allow-Headers')).toContain('Authorization');
  });

  it('returns health check status on GET /api/health', async () => {
    const req = new Request('https://worker.dev/api/health', {
      method: 'GET',
    });
    const res = await worker.fetch(req, baseEnv);
    expect(res.status).toBe(200);
    const data = (await res.json()) as { status: string; timestamp: string };
    expect(data.status).toBe('ok');
    expect(data.timestamp).toBeDefined();
  });

  it('rejects expired JWT on sync', async () => {
    const expiredToken = createMockJwt('user-1234-uuid', -3600); // expired 1h ago
    const req = new Request('https://worker.dev/api/sync', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${expiredToken}`,
      },
      body: JSON.stringify({ lastSyncedAt: null }),
    });

    const res = await worker.fetch(req, baseEnv);
    expect(res.status).toBe(401);
    const data = (await res.json()) as { error: string };
    expect(data.error).toContain('expired');
  });

  it('rejects unauthorized request on /api/sync when no auth header is provided', async () => {
    const req = new Request('https://worker.dev/api/sync', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ lastSyncedAt: null }),
    });
    const res = await worker.fetch(req, { ...baseEnv, ENVIRONMENT: 'production' });
    expect(res.status).toBe(401);
  });

  it('handles POST /api/sync with valid Supabase JWT and returns user scoped deltas', async () => {
    const token = createMockJwt('user-guitar-pro-uuid');
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
      expect(init?.headers).toBeDefined();
      if (urlStr.includes('/rest/v1/sessions') && init?.method === 'GET') {
        expect(urlStr).toContain('user_id=eq.user-guitar-pro-uuid');
        return new Response(JSON.stringify(mockDbSessions), { status: 200 });
      }
      if (urlStr.includes('/rest/v1/instruments') && init?.method === 'GET') {
        expect(urlStr).toContain('user_id=eq.user-guitar-pro-uuid');
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
        Authorization: `Bearer ${token}`,
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

describe('GET /api/background', () => {
  const envWithUnsplash: Env = {
    UNSPLASH_ACCESS_KEY: 'test-unsplash-key',
  };

  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it('returns 200 with image URL on Unsplash success', async () => {
    globalThis.fetch = vi.fn().mockResolvedValue(
      new Response(
        JSON.stringify({
          urls: { regular: 'https://images.unsplash.com/photo-abc?w=1080', full: 'https://images.unsplash.com/photo-abc' },
        }),
        { status: 200 }
      )
    );

    const req = new Request('https://worker.dev/api/background', { method: 'GET' });
    const res = await worker.fetch(req, envWithUnsplash);

    expect(res.status).toBe(200);
    const body = (await res.json()) as { url: string };
    expect(body.url).toBe('https://images.unsplash.com/photo-abc?w=1080');
    expect(res.headers.get('Cache-Control')).toBe('public, max-age=86400');
  });

  it('returns CORS headers on the response', async () => {
    globalThis.fetch = vi.fn().mockResolvedValue(
      new Response(JSON.stringify({ urls: { regular: 'https://example.com/photo.jpg' } }), { status: 200 })
    );

    const req = new Request('https://worker.dev/api/background', { method: 'GET' });
    const res = await worker.fetch(req, envWithUnsplash);

    expect(res.headers.get('Access-Control-Allow-Origin')).toBe('*');
  });

  it('does not require authentication', async () => {
    globalThis.fetch = vi.fn().mockResolvedValue(
      new Response(JSON.stringify({ urls: { regular: 'https://example.com/photo.jpg' } }), { status: 200 })
    );

    const req = new Request('https://worker.dev/api/background', { method: 'GET' });
    // No auth headers at all
    const res = await worker.fetch(req, envWithUnsplash);

    expect(res.status).toBe(200);
  });

  it('returns 503 when Unsplash API returns an error', async () => {
    globalThis.fetch = vi.fn().mockResolvedValue(
      new Response('Rate limit exceeded', { status: 403 })
    );

    const req = new Request('https://worker.dev/api/background', { method: 'GET' });
    const res = await worker.fetch(req, envWithUnsplash);

    expect(res.status).toBe(503);
    const body = (await res.json()) as { error: string };
    expect(body.error).toContain('Unsplash API error');
  });

  it('returns 503 when Unsplash API is unreachable', async () => {
    globalThis.fetch = vi.fn().mockRejectedValue(new Error('Network error'));

    const req = new Request('https://worker.dev/api/background', { method: 'GET' });
    const res = await worker.fetch(req, envWithUnsplash);

    expect(res.status).toBe(503);
    const body = (await res.json()) as { error: string };
    expect(body.error).toContain('Failed to reach Unsplash API');
  });

  it('returns 503 when UNSPLASH_ACCESS_KEY is not configured', async () => {
    const req = new Request('https://worker.dev/api/background', { method: 'GET' });
    const res = await worker.fetch(req, {}); // No env vars at all

    expect(res.status).toBe(503);
    const body = (await res.json()) as { error: string };
    expect(body.error).toContain('not configured');
  });
});
