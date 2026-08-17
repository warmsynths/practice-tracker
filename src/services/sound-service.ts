import { practiceStore } from '../store/practice-store';

class SoundService {
  private ctx: AudioContext | null = null;

  private getContext(): AudioContext | null {
    if (typeof window === 'undefined') return null;
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    return this.ctx;
  }

  private isSoundEnabled(): boolean {
    return practiceStore.getSettings().soundEnabled ?? true;
  }

  /**
   * Plays a warm, organic acoustic chime tone (fundamental + subtle harmonic overtones)
   */
  private playChime(freq: number, startTime: number, duration: number = 0.8, volume: number = 0.12) {
    const ctx = this.getContext();
    if (!ctx) return;

    // Fundamental oscillator (warm sine wave)
    const osc = ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, startTime);

    // Subtle 2nd harmonic (octave overtone for acoustic richness)
    const overtone = ctx.createOscillator();
    overtone.type = 'sine';
    overtone.frequency.setValueAtTime(freq * 2, startTime);

    // Gain envelope with soft attack and smooth exponential decay
    const gain = ctx.createGain();
    const overtoneGain = ctx.createGain();

    gain.gain.setValueAtTime(0.0001, startTime);
    gain.gain.exponentialRampToValueAtTime(volume, startTime + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

    overtoneGain.gain.setValueAtTime(0.0001, startTime);
    overtoneGain.gain.exponentialRampToValueAtTime(volume * 0.25, startTime + 0.015);
    overtoneGain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration * 0.6);

    osc.connect(gain);
    overtone.connect(overtoneGain);

    gain.connect(ctx.destination);
    overtoneGain.connect(ctx.destination);

    osc.start(startTime);
    overtone.start(startTime);

    osc.stop(startTime + duration + 0.05);
    overtone.stop(startTime + duration + 0.05);
  }

  /**
   * Triggered when a session begins: two ascending gentle marimba tones
   */
  playSessionStart() {
    if (!this.isSoundEnabled()) return;
    const ctx = this.getContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    this.playChime(523.25, now, 0.6, 0.1);       // C5
    this.playChime(659.25, now + 0.12, 0.9, 0.12); // E5
  }

  /**
   * Triggered when a session ends: uplifting 3-note harmonic triad
   */
  playSessionEnd() {
    if (!this.isSoundEnabled()) return;
    const ctx = this.getContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    this.playChime(523.25, now, 0.6, 0.1);        // C5
    this.playChime(659.25, now + 0.1, 0.6, 0.11); // E5
    this.playChime(783.99, now + 0.2, 1.2, 0.14); // G5
  }
}

export const soundService = new SoundService();
