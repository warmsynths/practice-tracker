export interface Env {
  SUPABASE_URL?: string;
  SUPABASE_SERVICE_ROLE_KEY?: string;
  SUPABASE_SECRET_KEY?: string;
  PT_PASSCODE?: string;
  ENVIRONMENT?: string;
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
  id: string;
  name: string;
  color: string;
  tier: string;
  archived: boolean;
  deleted_at: string | null;
  updated_at: string;
}

export interface SupabaseSessionRow {
  id: string;
  instrument_id: string;
  start_time: string;
  end_time: string;
  duration: number;
  notes: string | null;
  deleted_at: string | null;
  updated_at: string;
}
