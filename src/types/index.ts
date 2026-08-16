export type InstrumentTier = 'primary' | 'secondary';

export interface Instrument {
  id: string;
  name: string;
  color: string;
  tier: InstrumentTier;
  archived?: boolean;
  updatedAt?: string;
  deletedAt?: string;
}

export interface Session {
  id: string;
  instrumentId: string;
  start: string; // ISO string
  end: string;   // ISO string
  duration: number; // in minutes (rounded integer)
  notes?: string;
  updatedAt?: string;
  deletedAt?: string;
}

export interface Tombstone {
  id: string;
  type: 'session' | 'instrument';
  deletedAt: string;
}

export interface ActiveSession {
  instrumentId: string;
  startedAt: number; // Epoch timestamp ms
}

export type SyncStatus = 'synced' | 'syncing' | 'offline' | 'error' | 'local';

export interface AppSettings {
  soundEnabled: boolean;
  hapticsEnabled: boolean;
  workerUrl?: string;
  syncPasscode?: string;
  lastSyncedAt?: string;
}

export interface SyncRequestPayload {
  lastSyncedAt: string | null;
  instruments?: Instrument[];
  sessions?: Session[];
  tombstones?: Tombstone[];
}

export interface SyncResponsePayload {
  syncedAt: string;
  instruments: Instrument[];
  sessions: Session[];
  tombstones: Tombstone[];
}

export type TabType = 'main' | 'kit' | 'data';
export type DataPeriodType = 'day' | 'week' | 'month';

export interface DonutSegment {
  color: string;
  pct: number;
}

export interface WeekDayBar {
  date: Date;
  label: string;
  isToday: boolean;
  totalDuration: number;
  segments: {
    color: string;
    heightPct: number;
    duration: number;
    instrumentName: string;
  }[];
}

export interface MonthGridCell {
  date: Date;
  color: string;
  totalDuration: number;
  hasPractice: boolean;
}

export interface KitMetric {
  id: string;
  name: string;
  color: string;
  tier: InstrumentTier;
  totalMinutes: number;
  percentage: number;
  pctLabel: string;
  totalLabel: string;
  ringBg: string;
  removable: boolean;
}
