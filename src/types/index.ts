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
  userEmail?: string;
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

export interface AuthUser {
  id: string;
  email?: string;
}

export interface AuthState {
  user: AuthUser | null;
  accessToken: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
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

export type InstrumentHeatStatus = 'new' | 'due' | 'hot' | 'warm' | 'cool' | 'cold' | 'overdue';

export interface InstrumentRepetitionState {
  instrumentId: string;
  step: number; // 0 (unpracticed), 1 (1d), 2 (3d), 3 (7d), 4 (14d), 5 (30d)
  maxSteps: number; // 5
  intervalDays: number; // current target interval: 1, 3, 7, 14, or 30
  lastPracticedAt: string | null; // ISO string of most recent session
  nextDueAt: string | null; // ISO string of next due date
  daysRemaining: number; // >0: due in N days, 0: due today, <0: overdue by N days
  status: InstrumentHeatStatus;
  isDueToday: boolean;
  isOverdue: boolean;
  cycleCount: number; // number of completed 30d loops
  label: string; // e.g. "Step 2/5 (3d)"
}

