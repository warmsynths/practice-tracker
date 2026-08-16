import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { Instrument, Session, ActiveSession } from '../../types';
import { commonStyles } from '../../styles/shared-styles';
import { arcGradient } from '../../utils/chart-utils';
import { calculateStreak, formatTimer, isSameDay, startOfDay } from '../../utils/date-utils';
import { calculateAllInstrumentsRepetition, getHeatColor } from '../../utils/repetition-utils';


@customElement('pt-main-view')
export class PtMainView extends LitElement {
  static styles = [
    commonStyles,
    css`
      :host {
        display: flex;
        flex-direction: column;
        height: 100%;
      }

      .streak-container {
        display: flex;
        justify-content: center;
        padding: 18px 0 4px;
      }

      .streak-outer-ring {
        width: 168px;
        height: 168px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background 0.3s ease;
      }

      .streak-inner-circle {
        width: 134px;
        height: 134px;
        border-radius: 50%;
        background: #EDEDE9;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      .streak-number {
        font-size: 42px;
        font-weight: 700;
        letter-spacing: -0.02em;
        line-height: 1;
      }

      .streak-label {
        font-size: 10px;
        color: #767668;
        letter-spacing: 0.08em;
        margin-top: 4px;
        font-weight: 700;
      }

      .dots-container {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 6px;
        padding: 14px 0 6px;
        min-height: 24px;
      }

      .dot {
        width: 9px;
        height: 9px;
        border-radius: 50%;
      }

      .no-dots-text {
        font-size: 11px;
        color: #A3A297;
      }

      .active-card-wrap {
        padding: 20px 24px 0;
      }

      .active-card {
        border-radius: 22px;
        padding: 26px 24px 22px;
        color: #F5F2F6;
        transition: background-color 0.2s ease;
        box-shadow: 0 10px 24px rgba(0, 0, 0, 0.08);
      }

      .active-badge {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 11px;
        letter-spacing: 0.1em;
        font-weight: 700;
        opacity: 0.9;
        margin-bottom: 18px;
      }

      .active-pulse-dot {
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background: #F5F2F6;
        animation: pulse 1.4s infinite ease-in-out;
      }

      .active-title {
        font-size: 32px;
        font-weight: 700;
        letter-spacing: -0.02em;
        margin-bottom: 6px;
      }

      .active-timer {
        font-size: 40px;
        font-weight: 700;
        letter-spacing: -0.01em;
        font-variant-numeric: tabular-nums;
        margin-bottom: 22px;
      }

      .btn-end {
        background: #F5F2F6;
        color: #3C3444;
        border-radius: 16px;
        height: 56px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        font-weight: 700;
        cursor: pointer;
        user-select: none;
      }

      .discard-link {
        text-align: center;
        margin-top: 12px;
        font-size: 12px;
        color: #F5F2F6;
        opacity: 0.75;
        cursor: pointer;
        text-decoration: underline;
        font-weight: 500;
      }

      .idle-launcher {
        padding: 18px 24px 0;
      }

      .launcher-caption {
        font-size: 11px;
        color: #767668;
        text-align: center;
        margin-bottom: 14px;
        font-weight: 500;
      }

      .chips-grid {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 8px;
      }

      .inst-chip {
        border-radius: 14px;
        padding: 10px 14px;
        font-size: 13px;
        font-weight: 700;
        cursor: pointer;
        transition: transform 0.12s ease, opacity 0.15s ease, box-shadow 0.15s ease;
        user-select: none;
        display: inline-flex;
        align-items: center;
        gap: 7px;
      }

      .inst-chip:active {
        transform: scale(0.96);
      }

      .inst-chip.primary {
        color: #F5F2F6;
        border: none;
      }

      .inst-chip.secondary {
        background: #FFF;
        color: #23241F;
        border: 1px solid #E4E3DC;
      }

      .chip-heat-pill {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        padding: 2px 6px;
        border-radius: 8px;
        font-size: 10px;
        font-weight: 700;
        letter-spacing: 0.02em;
        line-height: 1.2;
      }

      .inst-chip.primary .chip-heat-pill {
        background: rgba(0, 0, 0, 0.2);
        color: #F5F2F6;
      }

      .inst-chip.secondary .chip-heat-pill {
        background: #ECEBE4;
        color: #4C4B44;
      }

      .chip-heat-pill.due,
      .chip-heat-pill.overdue {
        background: #E05D44 !important;
        color: #FFF !important;
      }

      .chip-heat-dot {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        display: inline-block;
        flex-shrink: 0;
      }

      .manual-log-trigger {
        display: flex;
        justify-content: center;
        margin-top: 24px;
        padding-bottom: 12px;
      }

      .manual-log-btn {
        background: transparent;
        border: 1px dashed #C3C1B7;
        color: #767668;
        font-size: 12px;
        font-weight: 600;
        border-radius: 10px;
        padding: 8px 16px;
        cursor: pointer;
      }

      .manual-log-btn:hover {
        background: rgba(255, 255, 255, 0.4);
        color: #23241F;
        border-color: #767668;
      }

      @keyframes pulse {
        0%, 100% { transform: scale(1); opacity: 1; }
        50% { transform: scale(1.35); opacity: 0.6; }
      }
    `,
  ];

  @property({ type: Array }) instruments: Instrument[] = [];
  @property({ type: Array }) sessions: Session[] = [];
  @property({ type: Object }) activeSession: ActiveSession | null = null;
  @property({ type: Number }) now: number = Date.now();

  private handleStart(instrumentId: string) {
    this.dispatchEvent(
      new CustomEvent('start-session', {
        detail: { instrumentId },
        bubbles: true,
        composed: true,
      })
    );
  }

  private handleEnd() {
    this.dispatchEvent(new CustomEvent('end-session', { bubbles: true, composed: true }));
  }

  private handleDiscard() {
    this.dispatchEvent(new CustomEvent('discard-session', { bubbles: true, composed: true }));
  }

  private handleOpenManual() {
    this.dispatchEvent(new CustomEvent('open-manual-log', { bubbles: true, composed: true }));
  }

  render() {
    const today = startOfDay(new Date());
    const { currentStreak, consistency30d } = calculateStreak(this.sessions);
    const ringStreakBg = arcGradient('#6B7F6E', consistency30d);

    const todaySessions = this.sessions.filter((s) => isSameDay(new Date(s.start), today));
    const instMap = new Map(this.instruments.map((i) => [i.id, i]));
    const repetitionMap = calculateAllInstrumentsRepetition(this.instruments, this.sessions, today);

    const activeInstrument = this.activeSession
      ? instMap.get(this.activeSession.instrumentId) || {
          id: this.activeSession.instrumentId,
          name: 'Instrument',
          color: '#6B7F6E',
          tier: 'primary' as const,
        }
      : null;

    const elapsedMs = this.activeSession ? Math.max(0, this.now - this.activeSession.startedAt) : 0;
    const elapsedLabel = formatTimer(elapsedMs);

    return html`
      <!-- Streak Section -->
      <div class="streak-container">
        <div class="streak-outer-ring" style="background: ${ringStreakBg};">
          <div class="streak-inner-circle">
            <div class="streak-number">${currentStreak}</div>
            <div class="streak-label">DAY STREAK</div>
          </div>
        </div>
      </div>

      <!-- Today Dots -->
      <div class="dots-container">
        ${todaySessions.length > 0
          ? todaySessions.map((s) => {
              const inst = instMap.get(s.instrumentId);
              return html`<span class="dot" style="background: ${inst?.color || '#A3A297'}"></span>`;
            })
          : html`<span class="no-dots-text">nothing logged yet today</span>`}
      </div>

      <!-- Active Session or Idle Launcher -->
      ${this.activeSession && activeInstrument
        ? html`
            <div class="active-card-wrap">
              <div class="active-card" style="background: ${activeInstrument.color};">
                <div class="active-badge">
                  <span class="active-pulse-dot"></span>
                  SESSION IN PROGRESS
                </div>
                <div class="active-title">${activeInstrument.name}</div>
                <div class="active-timer">${elapsedLabel}</div>
                <div class="btn btn-end" @click=${this.handleEnd}>End session</div>
                <div class="discard-link" @click=${this.handleDiscard}>Discard timer</div>
              </div>
            </div>
          `
        : html`
            <div class="idle-launcher">
              <div class="launcher-caption">tap an instrument to start</div>
              <div class="chips-grid">
                ${this.instruments.map((inst) => {
                  const rep = repetitionMap.get(inst.id);
                  const heatDotColor = rep ? getHeatColor(rep.status) : '#A3A297';

                  return html`
                    <div
                      class="inst-chip ${inst.tier}"
                      style="${inst.tier === 'primary' ? `background: ${inst.color};` : ''}"
                      title="${rep ? rep.label : inst.name}"
                      @click=${() => this.handleStart(inst.id)}
                    >
                      <span>${inst.name}</span>
                      ${rep && rep.step > 0
                        ? html`
                            <span class="chip-heat-pill ${rep.status}">
                              ${rep.isDueToday
                                ? html`🔥 Due`
                                : rep.isOverdue
                                ? html`⚠️ Overdue`
                                : html`
                                    <span class="chip-heat-dot" style="background: ${heatDotColor}"></span>
                                    ${rep.step}/5
                                  `}
                            </span>
                          `
                        : html`
                            <span class="chip-heat-pill new">
                              <span class="chip-heat-dot" style="background: #A3A297"></span>
                              1d
                            </span>
                          `}
                    </div>
                  `;
                })}
              </div>
              <div class="manual-log-trigger">
                <button class="manual-log-btn" @click=${this.handleOpenManual}>
                  + Log past practice
                </button>
              </div>
            </div>
          `}
    `;
  }
}
