export interface Env {
  SUPABASE_URL?: string;
  SUPABASE_ANON_KEY?: string;
  SUPABASE_SERVICE_ROLE_KEY?: string;
  SUPABASE_SECRET_KEY?: string;
  PT_PASSCODE?: string;
  ENVIRONMENT?: string;
  UNSPLASH_ACCESS_KEY?: string;
}

export type InstrumentTier = 'primary' | 'secondary';

export interface ClientInstrument {
  id: string;
  name: string;
  color: string;
  tier: InstrumentTier;
  archived?: boolean;
  updatedAt?: string;
  deletedAt?: string;
}

export interface ClientSession {
  id: string;
  instrumentId: string;
  start: string;
  end: string;
  duration: number;
  notes?: string;
  updatedAt?: string;
  deletedAt?: string;
}

export interface Tombstone {
  id: string;
  type: 'session' | 'instrument';
  deletedAt: string;
}

export interface SyncRequestPayload {
  lastSyncedAt: string | null;
  instruments?: ClientInstrument[];
  sessions?: ClientSession[];
  tombstones?: Tombstone[];
}

export interface SyncResponsePayload {
  syncedAt: string;
  instruments: ClientInstrument[];
  sessions: ClientSession[];
  tombstones: Tombstone[];
}

export interface SupabaseInstrumentRow {
  user_id?: string;
  id: string;
  name: string;
  color: string;
  tier: string;
  archived: boolean;
  deleted_at: string | null;
  updated_at: string;
}

export interface SupabaseSessionRow {
  user_id?: string;
  id: string;
  instrument_id: string;
  start_time: string;
  end_time: string;
  duration: number;
  notes: string | null;
  deleted_at: string | null;
  updated_at: string;
}

export interface JwtClaims {
  sub?: string;
  email?: string;
  exp?: number;
  role?: string;
  aud?: string;
}

export function parseJwtClaims(token: string): JwtClaims | null {
  try {
    const parts = token.split('.');
    if (parts.length !== 3) return null;
    const base64Url = parts[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join('')
    );
    return JSON.parse(jsonPayload) as JwtClaims;
  } catch {
    return null;
  }
}
