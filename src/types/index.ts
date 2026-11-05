export type InstrumentTier = 'primary' | 'secondary';

export type ThemeId = 'plum' | 'moss' | 'indigo' | 'dusk' | 'paper' | 'glacier';

export type GlyphKind = 'acoustic' | 'electric' | 'bass' | 'piano' | 'pads' | 'wind' | 'voice';

export interface Instrument {
  id: string;
  name: string;
  color: string;
  tier: InstrumentTier;
  rank?: number; // Priority rank (1 = Highest importance, 2 = 2nd, etc.)
  glyphKind?: GlyphKind; // Which animated glyph represents this instrument
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
  weekStartsOnSunday?: boolean;
  weeklyGoalMinutes?: number;
  workerUrl?: string;
  syncPasscode?: string;
  lastSyncedAt?: string;
  userEmail?: string;
  theme?: ThemeId;
  celebrateGoal?: boolean;
  heroGlyphAnimated?: boolean;
  reduceMotion?: boolean;
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

export type TabType = 'today' | 'log' | 'insights' | 'settings';
export type DataPeriodType = 'week' | 'month' | 'year' | 'all';

export interface DataBucketSegment {
  color: string;
  heightPct: number;
  duration: number;
  instrumentId: string;
}

export interface DataBucket {
  t0: Date;
  t1: Date;
  label: string;
  strong: boolean;
  segments: DataBucketSegment[];
}

export interface InstrumentBreakdownRow {
  id: string;
  name: string;
  color: string;
  duration: number;
  durationLabel: string;
  sharePct: number;
  shareLabel: string;
  sparkline: string;
  isSelected: boolean;
}

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

export type RangeScope = 'week' | 'month' | 'quarter' | 'year';

export interface MilestoneItem {
  id: string;
  done: boolean;
  accent: string;
  icon: string;
  kind: string;
  title: string;
  detail: string;
  when: number;
  dateLabel: string;
  isNew: boolean;
  pct?: number;
  pctLabel?: string;
  iconBg?: string;
  iconStroke?: string;
  labelColor?: string;
  edge?: string;
  tail?: string;
}

export interface HeatmapCell {
  bg: string;
  op: string;
  ring: string;
  anim: string;
  mark: boolean;
  icon: string;
  markStroke: string;
  cursor: string;
  date: Date;
  milestoneId?: string;
}

export interface OneAwayItem {
  big: string;
  text: string;
  instId: string;
  instName: string;
  instColor: string;
  mins: number;
}

export interface DriftMetric {
  id: string;
  name: string;
  color: string;
  days: number;
  num: string;
  unit: string;
  ago: string;
  ticks: { h: string; bg: string }[];
}

export interface RecordsItem {
  k: string;
  v: string;
  sub: string;
  fresh: boolean;
}

export interface WeekdayFingerprintItem {
  label: string;
  val: string;
  h: number;
  bg: string;
  strong: number;
}

export interface SessionLengthBucket {
  label: string;
  n: number;
  h: number;
  bg: string;
}

export interface NoteThemeItem {
  name: string;
  mins: string;
  color: string;
  ago: string;
  size: string;
}

export interface RecommendationReasonDetails {
  badge: string;       // Short badge hook, e.g. "RUST ALERT", "BRAIN RESET", "TARGET SLIPPING"
  headline: string;    // Human-readable title, e.g. "Memory retention dropped to 42%"
  explanation: string; // Contextual rationale, e.g. "Overdue by 3d. A quick 10m session locks in Step 2 memory."
  icon: string;        // Icon key, e.g. "bolt", "brain", "scale", "sparkles", "clock"
}

export interface InstrumentScoreBreakdown {
  instrumentId: string;
  name: string;
  color: string;
  tier: InstrumentTier;
  rank: number;
  score: number; // 0..100 composite urgency score
  retentionPct: number; // 0..100% memory retention
  targetSharePct: number; // target allocation % (e.g. 35%)
  actualSharePct: number; // actual rolling share % (e.g. 15%)
  shareDeficitPct: number; // target - actual (e.g. +20%)
  daysSince: number; // days elapsed since last session
  step: number; // spaced repetition step (0..5)
  status: InstrumentHeatStatus;
  reason: string; // scientific rationale explanation
  reasonDetails?: RecommendationReasonDetails;
  isPracticedToday: boolean;
}

export interface PracticeRecommendation {
  topPick: InstrumentScoreBreakdown | null;
  rankedQueue: InstrumentScoreBreakdown[];
}

export interface NextUpData {
  selectedId: string;
  name: string;
  color: string;
  num: string;
  unit: string;
  rankLabel: string;
  rank: number;
  line: string;
  reason: string;
  reasonDetails?: RecommendationReasonDetails;
  cta: string;
  ticks: { h: string; bg: string }[];
  chips: {
    id: string;
    name: string;
    color: string;
    pct: string;
    isSelected: boolean;
  }[];
  queue: {
    id: string;
    rank: string;
    name: string;
    color: string;
    pct: string;
    ago: string;
    flag: string;
    flagBg: string;
    isSelected: boolean;
    reason?: string;
  }[];
}


