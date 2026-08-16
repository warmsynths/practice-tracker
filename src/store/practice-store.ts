import {
  Instrument,
  Session,
  ActiveSession,
  AppSettings,
  InstrumentTier,
  SyncStatus,
  Tombstone,
  SyncRequestPayload,
} from '../types';
import { slug } from '../utils/chart-utils';
import { addDays, startOfDay } from '../utils/date-utils';
import { playStartSound, playEndSound, playClickSound, triggerHaptic } from '../utils/audio-utils';
import { syncEngine, TestConnectionResult } from '../services/sync-engine';
import { authService } from '../services/auth-service';

export const DEFAULT_INSTRUMENTS: Instrument[] = [
  { id: 'guitar', name: 'Guitar', color: '#6B7F6E', tier: 'primary', updatedAt: new Date(0).toISOString() },
  { id: 'piano', name: 'Piano', color: '#8A7B94', tier: 'primary', updatedAt: new Date(0).toISOString() },
  { id: 'acoustic', name: 'Acoustic Guitar', color: '#9FAF95', tier: 'secondary', updatedAt: new Date(0).toISOString() },
  { id: 'bass', name: 'Bass', color: '#7D6E7F', tier: 'secondary', updatedAt: new Date(0).toISOString() },
  { id: 'drumming', name: 'Finger Drumming', color: '#A98F72', tier: 'secondary', updatedAt: new Date(0).toISOString() },
];

export const FALLBACK_INSTRUMENT: Instrument = {
  id: '_removed',
  name: 'Archived Instrument',
  color: '#C3C1B7',
  tier: 'secondary',
  archived: true,
  updatedAt: new Date(0).toISOString(),
};

const STORAGE_KEYS = {
  SESSIONS: 'ptSessionsV2',
  INSTRUMENTS: 'ptInstrumentsV1',
  ACTIVE: 'ptActiveSessionV1',
  SETTINGS: 'ptSettingsV1',
  TOMBSTONES: 'ptTombstonesV1',
};

function getEnvSyncUrl(): string | undefined {
  try {
    return (import.meta as any).env?.VITE_SYNC_URL || undefined;
  } catch {
    return undefined;
  }
}

function getEnvSyncPasscode(): string | undefined {
  try {
    return (import.meta as any).env?.VITE_SYNC_PASSCODE || undefined;
  } catch {
    return undefined;
  }
}

function getStorage(): Storage | null {
  try {
    if (typeof window !== 'undefined' && window.localStorage) return window.localStorage;
    if (typeof localStorage !== 'undefined') return localStorage;
  } catch {
    // ignore
  }
  return null;
}

class PracticeStore {
  private instruments: Instrument[] = [];
  private sessions: Session[] = [];
  private activeSession: ActiveSession | null = null;
  private settings: AppSettings = { soundEnabled: true, hapticsEnabled: true };
  private tombstones: Tombstone[] = [];
  private syncStatus: SyncStatus = 'local';
  private syncErrorMessage: string | null = null;
  private listeners: Set<() => void> = new Set();

  constructor() {
    this.loadFromStorage();
    this.initAuth();
  }

  public subscribe(listener: () => void): () => void {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
  }

  private notify(): void {
    this.listeners.forEach((fn) => fn());
  }

  private initAuth(): void {
    authService.subscribe((authState) => {
      if (authState.isLoading) return;

      if (authState.isAuthenticated && authState.user?.email) {
        const previousEmail = this.settings.userEmail;
        this.settings.userEmail = authState.user.email;
        this.persistSettings();

        // If newly signed in or user changed, adopt local data and sync
        if (previousEmail !== authState.user.email) {
          this.syncWithCloud(true).catch((err) => {
            console.warn('Initial cloud sync error after sign-in:', err);
          });
        }
      } else if (!authState.isAuthenticated && this.settings.userEmail) {
        // User signed out -> clear local user storage to prevent data bleeding
        this.instruments = [...DEFAULT_INSTRUMENTS];
        this.sessions = [];
        this.activeSession = null;
        this.tombstones = [];
        this.settings.userEmail = undefined;
        this.settings.lastSyncedAt = undefined;
        this.syncStatus = 'local';
        this.syncErrorMessage = null;
        this.persistInstruments();
        this.persistSessions();
        this.persistActive();
        this.persistTombstones();
        this.persistSettings();
        this.notify();
      }
    });
  }

  public getEffectiveWorkerUrl(): string | undefined {
    return this.settings.workerUrl || getEnvSyncUrl();
  }

  public getEffectiveSyncPasscode(): string | undefined {
    return this.settings.syncPasscode || getEnvSyncPasscode();
  }

  public getSyncAuthHeaderSync(): string | undefined {
    const authState = authService.getAuthState();
    if (authState.accessToken) {
      return `Bearer ${authState.accessToken}`;
    }
    return this.getEffectiveSyncPasscode();
  }

  public async getEffectiveAuthHeader(): Promise<string | undefined> {
    const syncHeader = this.getSyncAuthHeaderSync();
    if (syncHeader) return syncHeader;
    const token = await authService.getAccessToken();
    if (token) {
      return `Bearer ${token}`;
    }
    return undefined;
  }

  public isCloudSyncConfigured(): boolean {
    const hasWorker = !!this.getEffectiveWorkerUrl();
    const hasAuth = authService.getAuthState().isAuthenticated || !!this.getEffectiveSyncPasscode();
    return hasWorker && hasAuth;
  }

  public getUserEmail(): string | undefined {
    return authService.getUser()?.email || this.settings.userEmail;
  }

  public isAuthenticated(): boolean {
    return authService.getAuthState().isAuthenticated;
  }

  public async signOut(): Promise<void> {
    await authService.signOut();
  }

  private loadFromStorage(): void {
    const storage = getStorage();
    if (!storage) {
      this.instruments = [...DEFAULT_INSTRUMENTS];
      this.sessions = [];
      this.syncStatus = 'local';
      return;
    }

    try {
      const savedInst = storage.getItem(STORAGE_KEYS.INSTRUMENTS);
      if (savedInst) {
        const parsed = JSON.parse(savedInst);
        if (Array.isArray(parsed) && parsed.length > 0) {
          this.instruments = parsed.map((i: Instrument) => ({
            ...i,
            updatedAt: i.updatedAt || new Date(0).toISOString(),
          }));
        } else {
          this.instruments = [...DEFAULT_INSTRUMENTS];
        }
      } else {
        this.instruments = [...DEFAULT_INSTRUMENTS];
        this.persistInstruments();
      }

      const savedSessions = storage.getItem(STORAGE_KEYS.SESSIONS);
      if (savedSessions) {
        const parsed = JSON.parse(savedSessions);
        if (Array.isArray(parsed)) {
          this.sessions = parsed.map((s: Session) => ({
            ...s,
            updatedAt: s.updatedAt || new Date(0).toISOString(),
          }));
        } else {
          this.sessions = [];
        }
      } else {
        this.sessions = [];
      }

      const savedActive = storage.getItem(STORAGE_KEYS.ACTIVE);
      if (savedActive) {
        const parsed = JSON.parse(savedActive);
        if (parsed && parsed.instrumentId && parsed.startedAt) {
          this.activeSession = parsed;
        }
      }

      const savedTombstones = storage.getItem(STORAGE_KEYS.TOMBSTONES);
      if (savedTombstones) {
        const parsed = JSON.parse(savedTombstones);
        if (Array.isArray(parsed)) {
          this.tombstones = parsed;
        }
      }

      const savedSettings = storage.getItem(STORAGE_KEYS.SETTINGS);
      if (savedSettings) {
        this.settings = { ...this.settings, ...JSON.parse(savedSettings) };
      }

      // Determine initial sync status
      if (this.isCloudSyncConfigured()) {
        this.syncStatus =
          typeof window !== 'undefined' &&
          typeof navigator !== 'undefined' &&
          navigator.onLine === false
            ? 'offline'
            : 'synced';
      } else {
        this.syncStatus = 'local';
      }
    } catch (e) {
      console.error('Error loading practice store from storage:', e);
      this.instruments = [...DEFAULT_INSTRUMENTS];
      this.sessions = [];
      this.syncStatus = 'local';
    }
  }

  private persistInstruments(): void {
    try {
      const storage = getStorage();
      storage?.setItem(STORAGE_KEYS.INSTRUMENTS, JSON.stringify(this.instruments));
    } catch (e) {
      console.error('Error saving instruments:', e);
    }
  }

  private persistSessions(): void {
    try {
      const storage = getStorage();
      storage?.setItem(STORAGE_KEYS.SESSIONS, JSON.stringify(this.sessions));
    } catch (e) {
      console.error('Error saving sessions:', e);
    }
  }

  private persistActive(): void {
    try {
      const storage = getStorage();
      if (!storage) return;
      if (this.activeSession) {
        storage.setItem(STORAGE_KEYS.ACTIVE, JSON.stringify(this.activeSession));
      } else {
        storage.removeItem(STORAGE_KEYS.ACTIVE);
      }
    } catch (e) {
      console.error('Error saving active session:', e);
    }
  }

  private persistSettings(): void {
    try {
      const storage = getStorage();
      storage?.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(this.settings));
    } catch (e) {
      console.error('Error saving settings:', e);
    }
  }

  private persistTombstones(): void {
    try {
      const storage = getStorage();
      storage?.setItem(STORAGE_KEYS.TOMBSTONES, JSON.stringify(this.tombstones));
    } catch (e) {
      console.error('Error saving tombstones:', e);
    }
  }

  // --- Getters ---
  public getActiveInstruments(): Instrument[] {
    return this.instruments.filter((i) => !i.archived);
  }

  public getAllInstruments(): Instrument[] {
    return [...this.instruments];
  }

  public getInstrument(id: string): Instrument {
    return this.instruments.find((i) => i.id === id) || FALLBACK_INSTRUMENT;
  }

  public getSessions(): Session[] {
    return [...this.sessions];
  }

  public getActiveSession(): ActiveSession | null {
    return this.activeSession;
  }

  public getSettings(): AppSettings {
    return { ...this.settings };
  }

  public getSyncStatus(): SyncStatus {
    return this.syncStatus;
  }

  public getSyncErrorMessage(): string | null {
    return this.syncErrorMessage;
  }

  public getLastSyncedAt(): string | null {
    return this.settings.lastSyncedAt || null;
  }

  // --- Active Session Actions ---
  public startSession(instrumentId: string): void {
    if (this.activeSession) return;
    this.activeSession = {
      instrumentId,
      startedAt: Date.now(),
    };
    this.persistActive();
    playStartSound(this.settings.soundEnabled);
    triggerHaptic(20, this.settings.hapticsEnabled);
    this.notify();
  }

  public endSession(): Session | null {
    if (!this.activeSession) return null;
    const now = Date.now();
    const elapsedMinutes = Math.max(1, Math.round((now - this.activeSession.startedAt) / 60000));
    const nowIso = new Date(now).toISOString();

    const newSession: Session = {
      id: 's-' + Math.random().toString(36).slice(2, 9) + '-' + Date.now().toString(36),
      instrumentId: this.activeSession.instrumentId,
      start: new Date(this.activeSession.startedAt).toISOString(),
      end: nowIso,
      duration: elapsedMinutes,
      updatedAt: nowIso,
    };

    this.sessions = [newSession, ...this.sessions];
    this.activeSession = null;
    this.persistSessions();
    this.persistActive();

    playEndSound(this.settings.soundEnabled);
    triggerHaptic([30, 50, 30], this.settings.hapticsEnabled);
    this.notify();

    // Trigger cloud sync asynchronously
    this.triggerBackgroundSync();

    return newSession;
  }

  public discardSession(): void {
    if (!this.activeSession) return;
    this.activeSession = null;
    this.persistActive();
    playClickSound(this.settings.soundEnabled);
    this.notify();
  }

  // --- Manual Session Management ---
  public logManualSession(
    instrumentId: string,
    start: Date,
    durationMinutes: number,
    notes?: string
  ): Session {
    const end = new Date(start.getTime() + Math.max(1, durationMinutes) * 60000);
    const nowIso = new Date().toISOString();
    const newSession: Session = {
      id: 'm-' + Math.random().toString(36).slice(2, 9) + '-' + Date.now().toString(36),
      instrumentId,
      start: start.toISOString(),
      end: end.toISOString(),
      duration: Math.max(1, Math.round(durationMinutes)),
      notes: notes?.trim() || undefined,
      updatedAt: nowIso,
    };

    this.sessions = [newSession, ...this.sessions];
    this.persistSessions();
    playEndSound(this.settings.soundEnabled);
    triggerHaptic(25, this.settings.hapticsEnabled);
    this.notify();

    // Trigger cloud sync asynchronously
    this.triggerBackgroundSync();

    return newSession;
  }

  public updateSession(updated: Session): void {
    const nowIso = new Date().toISOString();
    const sessionWithStamp: Session = { ...updated, updatedAt: nowIso };
    this.sessions = this.sessions.map((s) => (s.id === updated.id ? sessionWithStamp : s));
    this.persistSessions();
    playClickSound(this.settings.soundEnabled);
    this.notify();

    this.triggerBackgroundSync();
  }

  public deleteSession(sessionId: string): void {
    const nowIso = new Date().toISOString();
    this.sessions = this.sessions.filter((s) => s.id !== sessionId);
    this.tombstones = [
      ...this.tombstones.filter((t) => t.id !== sessionId),
      { id: sessionId, type: 'session', deletedAt: nowIso },
    ];
    this.persistSessions();
    this.persistTombstones();
    playClickSound(this.settings.soundEnabled);
    this.notify();

    this.triggerBackgroundSync();
  }

  // --- Instrument Management ---
  public addInstrument(name: string, color: string, tier: InstrumentTier): Instrument {
    const trimmed = name.trim();
    const id = slug(trimmed) + '-' + Math.random().toString(36).slice(2, 6);
    const nowIso = new Date().toISOString();
    const newInst: Instrument = {
      id,
      name: trimmed,
      color,
      tier,
      updatedAt: nowIso,
    };
    this.instruments = [...this.instruments, newInst];
    this.persistInstruments();
    playClickSound(this.settings.soundEnabled);
    this.notify();

    this.triggerBackgroundSync();

    return newInst;
  }

  public updateInstrument(updated: Instrument): void {
    const nowIso = new Date().toISOString();
    const instWithStamp: Instrument = { ...updated, updatedAt: nowIso };
    this.instruments = this.instruments.map((i) => (i.id === updated.id ? instWithStamp : i));
    this.persistInstruments();
    playClickSound(this.settings.soundEnabled);
    this.notify();

    this.triggerBackgroundSync();
  }

  public removeInstrument(id: string): void {
    const activeList = this.getActiveInstruments();
    if (activeList.length <= 1) {
      return; // Must have at least 1 instrument in kit
    }

    if (this.activeSession && this.activeSession.instrumentId === id) {
      this.activeSession = null;
      this.persistActive();
    }

    const nowIso = new Date().toISOString();
    const hasHistory = this.sessions.some((s) => s.instrumentId === id);
    if (hasHistory) {
      // Soft-delete per ADR 0002 to preserve history
      this.instruments = this.instruments.map((i) =>
        i.id === id ? { ...i, archived: true, updatedAt: nowIso } : i
      );
    } else {
      this.instruments = this.instruments.filter((i) => i.id !== id);
      this.tombstones = [
        ...this.tombstones.filter((t) => t.id !== id),
        { id, type: 'instrument', deletedAt: nowIso },
      ];
      this.persistTombstones();
    }

    this.persistInstruments();
    playClickSound(this.settings.soundEnabled);
    this.notify();

    this.triggerBackgroundSync();
  }

  // --- Cloud Sync Implementation ---
  public async testConnection(workerUrl?: string, authHeader?: string): Promise<TestConnectionResult> {
    const targetUrl = workerUrl !== undefined ? workerUrl : this.getEffectiveWorkerUrl() || '';
    let targetAuth = authHeader;
    if (targetAuth === undefined) {
      targetAuth = await this.getEffectiveAuthHeader();
    }
    return syncEngine.testConnection(targetUrl, targetAuth);
  }

  private currentSyncPromise: Promise<{ success: boolean; message?: string }> | null = null;

  public triggerBackgroundSync(): void {
    if (this.isCloudSyncConfigured() && !this.currentSyncPromise) {
      this.syncWithCloud().catch((err) => {
        console.warn('Background sync error:', err);
      });
    }
  }

  public async syncWithCloud(forceAll = false): Promise<{ success: boolean; message?: string }> {
    if (this.currentSyncPromise) {
      if (!forceAll) {
        return this.currentSyncPromise;
      }
      await this.currentSyncPromise.catch(() => {});
    }

    const workerUrl = this.getEffectiveWorkerUrl();

    if (!workerUrl) {
      this.syncStatus = 'local';
      this.notify();
      return { success: true, message: 'Local only mode (no worker configured)' };
    }

    if (typeof window !== 'undefined' && typeof navigator !== 'undefined' && navigator.onLine === false) {
      this.syncStatus = 'offline';
      this.notify();
      return { success: false, message: 'Device is offline' };
    }

    this.currentSyncPromise = this.performSync(workerUrl, forceAll);
    try {
      return await this.currentSyncPromise;
    } finally {
      this.currentSyncPromise = null;
    }
  }

  private async performSync(
    workerUrl: string,
    forceAll: boolean
  ): Promise<{ success: boolean; message?: string }> {
    this.syncStatus = 'syncing';
    this.syncErrorMessage = null;
    this.notify();

    try {
      const authHeader = this.getSyncAuthHeaderSync();
      const lastSynced = forceAll ? null : this.settings.lastSyncedAt || null;
      const sentTombstoneIds = new Set(this.tombstones.map((t) => t.id));

      // Gather changes to push
      const instrumentsToPush = forceAll || !lastSynced
        ? this.instruments
        : this.instruments.filter((i) => !i.updatedAt || i.updatedAt > lastSynced);

      const sessionsToPush = forceAll || !lastSynced
        ? this.sessions
        : this.sessions.filter((s) => !s.updatedAt || s.updatedAt > lastSynced);

      const payload: SyncRequestPayload = {
        lastSyncedAt: lastSynced,
        instruments: instrumentsToPush,
        sessions: sessionsToPush,
        tombstones: [...this.tombstones],
      };

      const response = await syncEngine.sync(
        workerUrl,
        authHeader,
        payload
      );

      // --- Last-Write-Wins Reconciliation ---

      // 1. Reconcile Instruments
      const currentInstMap = new Map<string, Instrument>(this.instruments.map((i) => [i.id, i]));
      for (const remoteInst of response.instruments) {
        const local = currentInstMap.get(remoteInst.id);
        if (!local) {
          currentInstMap.set(remoteInst.id, remoteInst);
        } else {
          const localUpdated = local.updatedAt ? new Date(local.updatedAt).getTime() : 0;
          const remoteUpdated = remoteInst.updatedAt ? new Date(remoteInst.updatedAt).getTime() : 0;
          if (remoteUpdated >= localUpdated) {
            currentInstMap.set(remoteInst.id, { ...local, ...remoteInst });
          }
        }
      }

      // 2. Reconcile Sessions
      const currentSessMap = new Map<string, Session>(this.sessions.map((s) => [s.id, s]));
      for (const remoteSess of response.sessions) {
        const local = currentSessMap.get(remoteSess.id);
        if (!local) {
          currentSessMap.set(remoteSess.id, remoteSess);
        } else {
          const localUpdated = local.updatedAt ? new Date(local.updatedAt).getTime() : 0;
          const remoteUpdated = remoteSess.updatedAt ? new Date(remoteSess.updatedAt).getTime() : 0;
          if (remoteUpdated >= localUpdated) {
            currentSessMap.set(remoteSess.id, { ...local, ...remoteSess });
          }
        }
      }

      // 3. Apply Remote Tombstones
      for (const tomb of response.tombstones) {
        if (tomb.type === 'instrument') {
          currentInstMap.delete(tomb.id);
        } else if (tomb.type === 'session') {
          currentSessMap.delete(tomb.id);
        }
      }

      // Update in-memory state
      this.instruments = Array.from(currentInstMap.values());
      this.sessions = Array.from(currentSessMap.values()).sort(
        (a, b) => new Date(b.start).getTime() - new Date(a.start).getTime()
      );

      // Remove successfully synced tombstones
      this.tombstones = this.tombstones.filter((t) => !sentTombstoneIds.has(t.id));

      // Update sync timestamps and status
      this.settings.lastSyncedAt = response.syncedAt;
      this.syncStatus = 'synced';
      this.syncErrorMessage = null;

      // Persist everything
      this.persistInstruments();
      this.persistSessions();
      this.persistTombstones();
      this.persistSettings();

      this.notify();
      return { success: true };
    } catch (err: unknown) {
      const errMsg = err instanceof Error ? err.message : String(err);
      console.error('PracticeStore sync failed:', errMsg);
      this.syncStatus = 'error';
      this.syncErrorMessage = errMsg;
      this.notify();
      return { success: false, message: errMsg };
    }
  }

  public disconnectCloudSync(): void {
    this.settings.workerUrl = undefined;
    this.settings.syncPasscode = undefined;
    this.settings.lastSyncedAt = undefined;
    this.syncStatus = 'local';
    this.syncErrorMessage = null;
    this.persistSettings();
    this.notify();
  }

  // --- Settings & Data Portability ---
  public updateSettings(partial: Partial<AppSettings>): void {
    this.settings = { ...this.settings, ...partial };
    this.persistSettings();

    if (this.isCloudSyncConfigured()) {
      this.syncStatus = 'synced';
    } else {
      this.syncStatus = 'local';
    }

    this.notify();
  }

  public exportBackup(): string {
    const payload = {
      version: 2,
      exportedAt: new Date().toISOString(),
      instruments: this.instruments,
      sessions: this.sessions,
      settings: this.settings,
    };
    return JSON.stringify(payload, null, 2);
  }

  public importBackup(jsonString: string): { success: boolean; message: string } {
    try {
      const parsed = JSON.parse(jsonString);
      if (!parsed || (!Array.isArray(parsed.instruments) && !Array.isArray(parsed.sessions))) {
        return { success: false, message: 'Invalid backup file format.' };
      }

      if (Array.isArray(parsed.instruments) && parsed.instruments.length > 0) {
        this.instruments = parsed.instruments.map((i: Instrument) => ({
          ...i,
          updatedAt: i.updatedAt || new Date().toISOString(),
        }));
        this.persistInstruments();
      }

      if (Array.isArray(parsed.sessions)) {
        this.sessions = parsed.sessions.map((s: Session) => ({
          ...s,
          updatedAt: s.updatedAt || new Date().toISOString(),
        }));
        this.persistSessions();
      }

      if (parsed.settings) {
        this.settings = { ...this.settings, ...parsed.settings };
        this.persistSettings();
      }

      this.activeSession = null;
      this.persistActive();

      this.notify();

      // If cloud sync configured, trigger sync
      this.triggerBackgroundSync();

      return { success: true, message: 'Backup successfully restored.' };
    } catch (e) {
      return { success: false, message: 'Failed to parse JSON file: ' + String(e) };
    }
  }

  public loadDemoData(): void {
    this.instruments = [...DEFAULT_INSTRUMENTS];
    this.persistInstruments();

    const today = startOfDay(new Date());
    const generated: Session[] = [];
    const nowIso = new Date().toISOString();

    for (let i = 33; i >= 1; i--) {
      const day = addDays(today, -i);
      const dow = day.getDay();
      if (Math.random() < 0.12) continue; // Small random rest day

      if (dow >= 1 && dow <= 5) {
        const picks =
          Math.random() < 0.7 ? ['guitar', 'piano'] : [Math.random() < 0.5 ? 'guitar' : 'piano'];
        let hour = 7;
        picks.forEach((id) => {
          const start = new Date(day);
          start.setHours(hour, 30 + Math.floor(Math.random() * 20), 0, 0);
          const dur = 12 + Math.floor(Math.random() * 25);
          const end = new Date(start.getTime() + dur * 60000);
          generated.push({
            id: 'seed-' + Math.random().toString(36).slice(2, 8),
            instrumentId: id,
            start: start.toISOString(),
            end: end.toISOString(),
            duration: dur,
            updatedAt: nowIso,
          });
          hour += 1;
        });
      } else {
        if (Math.random() < 0.75) {
          const id = ['acoustic', 'bass', 'drumming'][Math.floor(Math.random() * 3)];
          const start = new Date(day);
          start.setHours(11, Math.floor(Math.random() * 40), 0, 0);
          const dur = 20 + Math.floor(Math.random() * 30);
          const end = new Date(start.getTime() + dur * 60000);
          generated.push({
            id: 'seed-' + Math.random().toString(36).slice(2, 8),
            instrumentId: id,
            start: start.toISOString(),
            end: end.toISOString(),
            duration: dur,
            updatedAt: nowIso,
          });
        }
      }
    }

    // Today's sessions
    const gStart = new Date(today);
    gStart.setHours(7, 40, 0, 0);
    generated.unshift({
      id: 'seed-today-guitar',
      instrumentId: 'guitar',
      start: gStart.toISOString(),
      end: new Date(gStart.getTime() + 22 * 60000).toISOString(),
      duration: 22,
      updatedAt: nowIso,
    });

    const pStart = new Date(today);
    pStart.setHours(8, 15, 0, 0);
    generated.unshift({
      id: 'seed-today-piano',
      instrumentId: 'piano',
      start: pStart.toISOString(),
      end: new Date(pStart.getTime() + 18 * 60000).toISOString(),
      duration: 18,
      updatedAt: nowIso,
    });

    this.sessions = generated;
    this.activeSession = null;
    this.persistSessions();
    this.persistActive();
    this.notify();

    this.triggerBackgroundSync();
  }

  public clearAllData(): void {
    this.instruments = [...DEFAULT_INSTRUMENTS];
    this.sessions = [];
    this.activeSession = null;
    this.tombstones = [];
    this.persistInstruments();
    this.persistSessions();
    this.persistTombstones();
    this.persistActive();
    this.notify();
  }
}

export const practiceStore = new PracticeStore();
