import { SupabaseClient } from './supabase';
import { Env, SyncRequestPayload, SyncResponsePayload } from './types';

const CORS_HEADERS: HeadersInit = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, X-PT-Secret',
  'Access-Control-Max-Age': '86400',
};

function jsonResponse(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json',
      ...CORS_HEADERS,
    },
  });
}

function errorResponse(message: string, status = 400): Response {
  return jsonResponse({ error: message }, status);
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const pathname = url.pathname.replace(/\/+$/, '') || '/';

    // Handle CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        status: 204,
        headers: CORS_HEADERS,
      });
    }

    // Authenticate via X-PT-Secret passcode
    const providedSecret = request.headers.get('x-pt-secret');
    const configuredSecret = env.PT_PASSCODE;

    if (configuredSecret && providedSecret !== configuredSecret) {
      return errorResponse('Unauthorized: Invalid or missing X-PT-Secret passcode', 401);
    }

    if (!configuredSecret && !providedSecret) {
      // If no passcode is set in env and none provided, warn or allow in dev
      if (env.ENVIRONMENT === 'production') {
        return errorResponse('Unauthorized: PT_PASSCODE is required on server', 401);
      }
    }

    // Route: GET /api/health
    if (pathname === '/api/health' && request.method === 'GET') {
      return jsonResponse({
        status: 'ok',
        timestamp: new Date().toISOString(),
      });
    }

    // Route: POST /api/sync
    if (pathname === '/api/sync' && request.method === 'POST') {
      const supabaseKey = env.SUPABASE_SERVICE_ROLE_KEY || env.SUPABASE_SECRET_KEY;
      if (!env.SUPABASE_URL || !supabaseKey) {
        return errorResponse('Server configuration error: Supabase credentials missing', 500);
      }

      try {
        let payload: SyncRequestPayload;
        try {
          payload = (await request.json()) as SyncRequestPayload;
        } catch {
          return errorResponse('Invalid JSON body', 400);
        }

        const supabase = new SupabaseClient(env.SUPABASE_URL, supabaseKey);

        // Step 1: Upsert incoming client records to Supabase
        if (payload.instruments && payload.instruments.length > 0) {
          await supabase.upsertInstruments(payload.instruments);
        }

        if (payload.sessions && payload.sessions.length > 0) {
          await supabase.upsertSessions(payload.sessions);
        }

        // Step 2: Apply incoming tombstones
        if (payload.tombstones && payload.tombstones.length > 0) {
          await supabase.applyTombstones(payload.tombstones);
        }

        // Step 3: Query deltas since lastSyncedAt
        const [deltaInst, deltaSess] = await Promise.all([
          supabase.getDeltaInstruments(payload.lastSyncedAt || null),
          supabase.getDeltaSessions(payload.lastSyncedAt || null),
        ]);

        const responsePayload: SyncResponsePayload = {
          syncedAt: new Date().toISOString(),
          instruments: deltaInst.active,
          sessions: deltaSess.active,
          tombstones: [...deltaInst.tombstones, ...deltaSess.tombstones],
        };

        return jsonResponse(responsePayload);
      } catch (err: unknown) {
        console.error('Sync error:', err);
        const errMsg = err instanceof Error ? err.message : String(err);
        return errorResponse(`Sync failed: ${errMsg}`, 500);
      }
    }

    return errorResponse(`Not Found: ${request.method} ${pathname}`, 404);
  },
};
