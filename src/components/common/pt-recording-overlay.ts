import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { Instrument, ActiveSession, Session } from '../../types';
import { commonStyles } from '../../styles/shared-styles';
import { formatTimer, weekToDateMinutes } from '../../utils/date-utils';
import { glyphKindFor } from '../../utils/glyph-utils';
import './pt-glyph';

/**
 * Full-screen overlay shown while a session is recording — covers the whole
 * app (nav included), matching the prototype's always-on-top recording view.
 * Pause/resume is intentionally omitted: the underlying store has no pause
 * capability, and this is a restyle, not a new feature.
 */
@customElement('pt-recording-overlay')
export class PtRecordingOverlay extends LitElement {
  @property({ type: Object }) activeSession: ActiveSession | null = null;
  @property({ type: Object }) instrument: Instrument | null = null;
  @property({ type: Array }) sessions: Session[] = [];
  @property({ type: Number }) now: number = Date.now();
  @property({ type: Number }) weeklyGoalMinutes: number = 420;
  @property({ type: Boolean }) wide: boolean = false;
  @property({ type: Boolean }) reduceMotion: boolean = false;

  static styles = [
    commonStyles,
    css`
      :host {
        position: fixed;
        inset: 0;
        z-index: 60;
        display: block;
        background: var(--bg, #2B1C33);
      }

      .wrap {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 22px;
        padding: 24px;
        animation: fadeIn 220ms ease-out both;
      }

      @media (min-width: 860px) {
        .wrap {
          flex-direction: row;
          gap: 40px;
        }
      }

      .glyph-box {
        width: 250px;
        height: 310px;
        overflow: hidden;
        border-radius: 26px;
        flex-shrink: 0;
      }

      @media (min-width: 860px) {
        .glyph-box {
          width: 330px;
          height: 409px;
        }
        .glyph-scale {
          transform: scale(1.32);
        }
      }

      .glyph-scale {
        transform-origin: 0 0;
      }

      .info {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 14px;
        max-width: 360px;
        width: 100%;
      }

      @media (min-width: 860px) {
        .info {
          align-items: flex-start;
        }
      }

      .status-pill {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        background: var(--card);
        color: var(--ink);
        border-radius: 999px;
        padding: 8px 16px;
        font-family: 'Manrope', sans-serif;
        font-size: 13px;
        font-weight: 800;
      }

      .status-dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: var(--accent);
        animation: softPulse 1.4s ease-in-out infinite;
      }

      .clock {
        font-family: 'Gabarito', sans-serif;
        font-weight: 900;
        font-size: 64px;
        letter-spacing: -0.02em;
        font-variant-numeric: tabular-nums;
        color: var(--ink);
      }

      @media (min-width: 860px) {
        .clock {
          font-size: 112px;
        }
      }

      .progress-track {
        width: 100%;
        height: 14px;
        border-radius: 999px;
        background: var(--raised);
        overflow: hidden;
      }

      .progress-fill {
        height: 100%;
        border-radius: 999px;
        background: var(--accent);
        transition: width 400ms cubic-bezier(0.2, 0.8, 0.2, 1);
      }

      .progress-label {
        font-family: 'Manrope', sans-serif;
        font-size: 13px;
        color: var(--muted);
      }

      .actions {
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: 100%;
        margin-top: 8px;
      }

      .stop-btn {
        height: 60px;
        border-radius: 999px;
        border: none;
        background: var(--accent);
        color: var(--bg);
        font-family: 'Gabarito', sans-serif;
        font-size: 16px;
        font-weight: 800;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        cursor: pointer;
      }

      .stop-btn:hover {
        background: var(--accentHi);
      }

      .stop-icon {
        width: 14px;
        height: 14px;
        border-radius: 3px;
        background: var(--bg);
      }

      .discard-link {
        background: transparent;
        border: none;
        color: var(--muted);
        font-family: 'Manrope', sans-serif;
        font-size: 13px;
        text-decoration: underline;
        cursor: pointer;
        align-self: center;
      }

      .discard-link:hover {
        color: var(--accent);
      }
    `,
  ];

  private get elapsedMs(): number {
    if (!this.activeSession) return 0;
    return Math.max(0, this.now - this.activeSession.startedAt);
  }

  render() {
    if (!this.activeSession) return html``;
    const elapsedMin = Math.floor(this.elapsedMs / 60000);
    const weekSoFar = weekToDateMinutes(this.sessions, new Date(this.now));
    const projected = weekSoFar + elapsedMin;
    const goal = this.weeklyGoalMinutes || 420;
    const pct = Math.min(100, Math.round((projected / goal) * 100));
    const goalReached = projected >= goal;
    const remaining = Math.max(0, goal - projected);
    const kind = glyphKindFor(this.instrument);

    return html`
      <div class="wrap">
        <div class="glyph-box">
          <div class="glyph-scale">
            <pt-glyph .kind=${kind} .live=${!this.reduceMotion}></pt-glyph>
          </div>
        </div>
        <div class="info">
          <div class="status-pill">
            <span class="status-dot"></span>
            ${this.instrument?.name || 'Practicing'}
          </div>
          <div class="clock">${formatTimer(this.elapsedMs)}</div>
          <div class="progress-track">
            <div class="progress-fill" style="width:${pct}%"></div>
          </div>
          <div class="progress-label">
            ${goalReached
              ? `Goal reached · still going`
              : `${remaining} min to this week's ${goal}-minute goal`}
          </div>
          <div class="actions">
            <button class="stop-btn" @click=${() => this.dispatchEvent(new CustomEvent('end-session', { bubbles: true, composed: true }))}>
              <span class="stop-icon"></span>
              Stop
            </button>
            <button class="discard-link" @click=${() => this.dispatchEvent(new CustomEvent('discard-session', { bubbles: true, composed: true }))}>
              Discard session
            </button>
          </div>
        </div>
      </div>
    `;
  }
}
