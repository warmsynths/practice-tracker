import {
  Instrument,
  Session,
  ActiveSession,
  AppSettings,
  InstrumentTier,
} from '../types';
import { slug } from '../utils/chart-utils';
import { addDays, startOfDay } from '../utils/date-utils';
import { playStartSound, playEndSound, playClickSound, triggerHaptic } from '../utils/audio-utils';

export const DEFAULT_INSTRUMENTS: Instrument[] = [
  { id: 'guitar', name: 'Guitar', color: '#6B7F6E', tier: 'primary' },
  { id: 'piano', name: 'Piano', color: '#8A7B94', tier: 'primary' },
  { id: 'acoustic', name: 'Acoustic Guitar', color: '#9FAF95', tier: 'secondary' },
  { id: 'bass', name: 'Bass', color: '#7D6E7F', tier: 'secondary' },
  { id: 'drumming', name: 'Finger Drumming', color: '#A98F72', tier: 'secondary' },
];

export const FALLBACK_INSTRUMENT: Instrument = {
  id: '_removed',
  name: 'Archived Instrument',
  color: '#C3C1B7',
  tier: 'secondary',
  archived: true,
};

const STORAGE_KEYS = {
  SESSIONS: 'ptSessionsV2',
  INSTRUMENTS: 'ptInstrumentsV1',
  ACTIVE: 'ptActiveSessionV1',
  SETTINGS: 'ptSettingsV1',
};

class PracticeStore {
  private instruments: Instrument[] = [];
  private sessions: Session[] = [];
  private activeSession: ActiveSession | null = null;
  private settings: AppSettings = { soundEnabled: true, hapticsEnabled: true };
  private listeners: Set<() => void> = new Set();

  constructor() {
    this.loadFromStorage();
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

  private loadFromStorage(): void {
    try {
      const savedInst = localStorage.getItem(STORAGE_KEYS.INSTRUMENTS);
      if (savedInst) {
        const parsed = JSON.parse(savedInst);
        if (Array.isArray(parsed) && parsed.length > 0) {
          this.instruments = parsed;
        } else {
          this.instruments = [...DEFAULT_INSTRUMENTS];
        }
      } else {
        this.instruments = [...DEFAULT_INSTRUMENTS];
        this.persistInstruments();
      }

      const savedSessions = localStorage.getItem(STORAGE_KEYS.SESSIONS);
      if (savedSessions) {
        const parsed = JSON.parse(savedSessions);
        if (Array.isArray(parsed)) {
          this.sessions = parsed;
        } else {
          this.sessions = [];
        }
      } else {
        this.sessions = [];
      }

      const savedActive = localStorage.getItem(STORAGE_KEYS.ACTIVE);
      if (savedActive) {
        const parsed = JSON.parse(savedActive);
        if (parsed && parsed.instrumentId && parsed.startedAt) {
          this.activeSession = parsed;
        }
      }

      const savedSettings = localStorage.getItem(STORAGE_KEYS.SETTINGS);
      if (savedSettings) {
        this.settings = { ...this.settings, ...JSON.parse(savedSettings) };
      }
    } catch (e) {
      console.error('Error loading practice store from storage:', e);
      this.instruments = [...DEFAULT_INSTRUMENTS];
      this.sessions = [];
    }
  }

  private persistInstruments(): void {
    try {
      localStorage.setItem(STORAGE_KEYS.INSTRUMENTS, JSON.stringify(this.instruments));
    } catch (e) {
      console.error('Error saving instruments:', e);
    }
  }

  private persistSessions(): void {
    try {
      localStorage.setItem(STORAGE_KEYS.SESSIONS, JSON.stringify(this.sessions));
    } catch (e) {
      console.error('Error saving sessions:', e);
    }
  }

  private persistActive(): void {
    try {
      if (this.activeSession) {
        localStorage.setItem(STORAGE_KEYS.ACTIVE, JSON.stringify(this.activeSession));
      } else {
        localStorage.removeItem(STORAGE_KEYS.ACTIVE);
      }
    } catch (e) {
      console.error('Error saving active session:', e);
    }
  }

  private persistSettings(): void {
    try {
      localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(this.settings));
    } catch (e) {
      console.error('Error saving settings:', e);
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

    const newSession: Session = {
      id: 's-' + Math.random().toString(36).slice(2, 9) + '-' + Date.now().toString(36),
      instrumentId: this.activeSession.instrumentId,
      start: new Date(this.activeSession.startedAt).toISOString(),
      end: new Date(now).toISOString(),
      duration: elapsedMinutes,
    };

    this.sessions = [newSession, ...this.sessions];
    this.activeSession = null;
    this.persistSessions();
    this.persistActive();

    playEndSound(this.settings.soundEnabled);
    triggerHaptic([30, 50, 30], this.settings.hapticsEnabled);
    this.notify();
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
    const newSession: Session = {
      id: 'm-' + Math.random().toString(36).slice(2, 9) + '-' + Date.now().toString(36),
      instrumentId,
      start: start.toISOString(),
      end: end.toISOString(),
      duration: Math.max(1, Math.round(durationMinutes)),
      notes: notes?.trim() || undefined,
    };

    this.sessions = [newSession, ...this.sessions];
    this.persistSessions();
    playEndSound(this.settings.soundEnabled);
    triggerHaptic(25, this.settings.hapticsEnabled);
    this.notify();
    return newSession;
  }

  public updateSession(updated: Session): void {
    this.sessions = this.sessions.map((s) => (s.id === updated.id ? updated : s));
    this.persistSessions();
    playClickSound(this.settings.soundEnabled);
    this.notify();
  }

  public deleteSession(sessionId: string): void {
    this.sessions = this.sessions.filter((s) => s.id !== sessionId);
    this.persistSessions();
    playClickSound(this.settings.soundEnabled);
    this.notify();
  }

  // --- Instrument Management ---
  public addInstrument(name: string, color: string, tier: InstrumentTier): Instrument {
    const trimmed = name.trim();
    const id = slug(trimmed) + '-' + Math.random().toString(36).slice(2, 6);
    const newInst: Instrument = {
      id,
      name: trimmed,
      color,
      tier,
    };
    this.instruments = [...this.instruments, newInst];
    this.persistInstruments();
    playClickSound(this.settings.soundEnabled);
    this.notify();
    return newInst;
  }

  public updateInstrument(updated: Instrument): void {
    this.instruments = this.instruments.map((i) => (i.id === updated.id ? updated : i));
    this.persistInstruments();
    playClickSound(this.settings.soundEnabled);
    this.notify();
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

    // Check if there are sessions for this instrument
    const hasHistory = this.sessions.some((s) => s.instrumentId === id);
    if (hasHistory) {
      // Soft-delete per ADR 0002 to preserve history
      this.instruments = this.instruments.map((i) =>
        i.id === id ? { ...i, archived: true } : i
      );
    } else {
      this.instruments = this.instruments.filter((i) => i.id !== id);
    }

    this.persistInstruments();
    playClickSound(this.settings.soundEnabled);
    this.notify();
  }

  // --- Settings & Data Portability ---
  public updateSettings(partial: Partial<AppSettings>): void {
    this.settings = { ...this.settings, ...partial };
    this.persistSettings();
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
        this.instruments = parsed.instruments;
        this.persistInstruments();
      }

      if (Array.isArray(parsed.sessions)) {
        this.sessions = parsed.sessions;
        this.persistSessions();
      }

      if (parsed.settings) {
        this.settings = { ...this.settings, ...parsed.settings };
        this.persistSettings();
      }

      this.activeSession = null;
      this.persistActive();

      this.notify();
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
    });

    const pStart = new Date(today);
    pStart.setHours(8, 15, 0, 0);
    generated.unshift({
      id: 'seed-today-piano',
      instrumentId: 'piano',
      start: pStart.toISOString(),
      end: new Date(pStart.getTime() + 18 * 60000).toISOString(),
      duration: 18,
    });

    this.sessions = generated;
    this.activeSession = null;
    this.persistSessions();
    this.persistActive();
    this.notify();
  }

  public clearAllData(): void {
    this.instruments = [...DEFAULT_INSTRUMENTS];
    this.sessions = [];
    this.activeSession = null;
    this.persistInstruments();
    this.persistSessions();
    this.persistActive();
    this.notify();
  }
}

export const practiceStore = new PracticeStore();
