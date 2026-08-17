import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { Instrument, Session, ActiveSession } from '../../types';
import { commonStyles } from '../../styles/shared-styles';
import { arcGradient } from '../../utils/chart-utils';
import { calculateStreak, isSameDay, startOfDay } from '../../utils/date-utils';
import { calculateAllInstrumentsRepetition, getRepetitionBadge } from '../../utils/repetition-utils';

@customElement('pt-main-view')
export class PtMainView extends LitElement {
  static styles = [
    commonStyles,
    css`
      :host {
        display: block;
        animation: fadeOnly 180ms ease-out both;
        padding-bottom: 28px;
      }

      .main-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 20px;
        align-items: start;
      }

      @media (min-width: 900px) {
        .main-grid {
          grid-template-columns: 300px minmax(0, 1fr);
          gap: 28px;
        }
      }

      /* Streak Panel */
      .streak-panel {
        background: transparent;
        border-radius: 24px;
        padding: 18px 0 6px;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      @media (min-width: 900px) {
        .streak-panel {
          background: #FFFFFF;
          padding: 32px 24px 26px;
          box-shadow: 0 4px 16px rgba(35, 36, 31, 0.04);
        }
      }

      .streak-outer-ring {
        width: 172px;
        height: 172px;
        border-radius: 50%;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background 0.3s ease;
      }

      .streak-inner-hole {
        width: 138px;
        height: 138px;
        border-radius: 50%;
        position: relative;
        background: #EDEDE9;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      @media (min-width: 900px) {
        .streak-inner-hole {
          background: #FFFFFF;
        }
      }

      .streak-number {
        font-size: 46px;
        font-weight: 700;
        letter-spacing: -0.03em;
        line-height: 1;
      }

      .streak-label {
        font-size: 10px;
        color: #767668;
        letter-spacing: 0.1em;
        margin-top: 5px;
        font-weight: 700;
      }

      .today-dots-row {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 6px;
        padding: 16px 0 2px;
        min-height: 14px;
      }

      .today-dot {
        width: 9px;
        height: 9px;
        border-radius: 50%;
        animation: popIn 260ms cubic-bezier(0.2, 0.8, 0.2, 1) both;
      }

      .no-sessions-label {
        font-size: 12px;
        color: #A3A297;
      }

      /* Right Section: Active Card or Launcher */
      .right-section {
        display: flex;
        flex-direction: column;
        gap: 14px;
      }

      /* Active Session Card */
      .active-card {
        border-radius: 24px;
        padding: 26px 24px;
        color: #F5F2F6;
        animation: sheetIn 280ms cubic-bezier(0.16, 1, 0.3, 1) both;
        box-shadow: 0 12px 30px rgba(35, 36, 31, 0.12);
      }

      .active-header-tag {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 11px;
        letter-spacing: 0.12em;
        font-weight: 700;
        opacity: 0.85;
        margin-bottom: 16px;
      }

      .active-pulse-dot {
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background: #F5F2F6;
        animation: softPulse 2.4s ease-in-out infinite;
      }

      .active-inst-name {
        font-size: 30px;
        font-weight: 700;
        letter-spacing: -0.02em;
        margin-bottom: 4px;
      }

      .active-timer-display {
        font-size: 44px;
        font-weight: 700;
        letter-spacing: -0.02em;
        font-variant-numeric: tabular-nums;
        margin-bottom: 22px;
      }

      .btn-end-session {
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
        border: none;
        width: 100%;
        transition: transform 160ms cubic-bezier(0.2, 0.8, 0.2, 1), filter 160ms ease-out;
      }

      .btn-end-session:active {
        transform: scale(0.975);
      }

      .active-actions-row {
        display: flex;
        justify-content: center;
        margin-top: 12px;
      }

      .discard-text-btn {
        font-size: 12px;
        color: #F5F2F6;
        opacity: 0.7;
        background: transparent;
        border: none;
        cursor: pointer;
        text-decoration: underline;
      }

      /* Idle Launcher */
      .launcher-caption {
        font-size: 12px;
        color: #767668;
        text-align: center;
        letter-spacing: 0.01em;
      }

      .chips-wrap {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 8px;
        margin-top: 2px;
      }

      .chip-btn {
        border-radius: 16px;
        padding: 11px 14px;
        font-size: 14px;
        font-weight: 700;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 9px;
        user-select: none;
        border: 1px solid #E4E3DC;
        background: #FFF;
        color: #23241F;
        transition: transform 180ms cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 180ms ease-out;
        animation: riseIn 300ms cubic-bezier(0.2, 0.8, 0.2, 1) both;
      }

      .chip-btn:hover {
        box-shadow: 0 6px 16px rgba(35, 36, 31, 0.1);
      }

      .chip-btn:active {
        transform: scale(0.975);
      }

      .chip-btn.primary {
        border: none;
        color: #F5F2F6;
      }

      .chip-btn.due-drift {
        animation: drift 3.6s ease-in-out infinite, riseIn 300ms cubic-bezier(0.2, 0.8, 0.2, 1) both;
      }

      .chip-badge {
        display: flex;
        align-items: center;
        gap: 5px;
        border-radius: 999px;
        padding: 3px 8px;
        font-size: 11px;
        font-weight: 700;
      }

      .badge-dot {
        width: 5px;
        height: 5px;
        border-radius: 50%;
      }

      .badge-dot.pulse {
        animation: softPulse 2.8s ease-in-out infinite;
      }

      .log-past-trigger-row {
        display: flex;
        justify-content: center;
        padding-top: 4px;
      }

      .log-past-btn {
        border: 1px dashed #C9C8BF;
        color: #767668;
        border-radius: 14px;
        padding: 11px 20px;
        font-size: 13px;
        font-weight: 500;
        cursor: pointer;
        white-space: nowrap;
        background: transparent;
        transition: transform 160ms cubic-bezier(0.2, 0.8, 0.2, 1), border-color 160ms ease-out, color 160ms ease-out;
      }

      .log-past-btn:hover {
        border-color: #23241F;
        color: #23241F;
      }

      .log-past-btn:active {
        transform: scale(0.975);
      }

      /* Inline Quick-Logger Sheet */
      .inline-logger-card {
        background: #FFF;
        border-radius: 20px;
        padding: 18px;
        animation: sheetIn 260ms cubic-bezier(0.16, 1, 0.3, 1) both;
        box-shadow: 0 8px 24px rgba(35, 36, 31, 0.08);
      }

      .logger-header {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        margin-bottom: 14px;
      }

      .logger-title {
        font-size: 15px;
        font-weight: 700;
      }

      .logger-cancel-btn {
        font-size: 12px;
        font-weight: 700;
        color: #767668;
        cursor: pointer;
        background: transparent;
        border: none;
      }

      .logger-inst-pills {
        display: flex;
        flex-wrap: wrap;
        gap: 7px;
        margin-bottom: 14px;
      }

      .logger-inst-pill {
        border-radius: 12px;
        padding: 8px 12px;
        font-size: 12px;
        font-weight: 700;
        cursor: pointer;
        user-select: none;
        transition: transform 120ms ease;
      }

      .logger-inst-pill:active {
        transform: scale(0.96);
      }

      .logger-pills-row {
        display: flex;
        gap: 7px;
        margin-bottom: 12px;
      }

      .logger-option-pill {
        flex: 1;
        text-align: center;
        border-radius: 12px;
        padding: 10px 0;
        font-size: 12px;
        font-weight: 700;
        cursor: pointer;
        user-select: none;
        transition: background-color 160ms ease, color 160ms ease;
      }

      .btn-save-log {
        background: #23241F;
        color: #F2F1EC;
        border-radius: 14px;
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        font-weight: 700;
        cursor: pointer;
        border: none;
        width: 100%;
        margin-top: 4px;
        transition: transform 160ms cubic-bezier(0.2, 0.8, 0.2, 1), filter 160ms ease-out;
      }

      .btn-save-log:active {
        transform: scale(0.975);
      }

      .custom-modal-link {
        text-align: center;
        margin-top: 10px;
        font-size: 11px;
        color: #767668;
        cursor: pointer;
        text-decoration: underline;
      }
    `,
  ];

  @property({ type: Array }) instruments: Instrument[] = [];
  @property({ type: Array }) sessions: Session[] = [];
  @property({ type: Object }) activeSession: ActiveSession | null = null;
  @property({ type: Number }) now: number = Date.now();

  @state() private logOpen = false;
  @state() private logInstId: string | null = null;
  @state() private logDuration = 15;
  @state() private logDayOffset = 1;

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

  private handleSaveQuickLog() {
    const instId = this.logInstId || (this.instruments[0] && this.instruments[0].id);
    if (!instId) return;

    this.dispatchEvent(
      new CustomEvent('quick-log-session', {
        detail: {
          instrumentId: instId,
          duration: this.logDuration,
          daysAgo: this.logDayOffset,
        },
        bubbles: true,
        composed: true,
      })
    );

    this.logOpen = false;
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

    let activeElapsedLabel = '0:00';
    let activeBloomBg = '#6B7F6E';

    if (this.activeSession && activeInstrument) {
      const elapsedMs = Math.max(0, this.now - this.activeSession.startedAt);
      const mm = Math.floor(elapsedMs / 60000);
      const ss = Math.floor((elapsedMs % 60000) / 1000);
      activeElapsedLabel = `${mm}:${String(ss).padStart(2, '0')}`;

      const warmth = Math.min(15, mm * 1.1).toFixed(1);
      const spread = Math.max(46, 82 - mm * 2.2).toFixed(0);
      activeBloomBg = `radial-gradient(135% 115% at 22% 0%, color-mix(in oklab, ${activeInstrument.color}, white ${warmth}%) 0%, ${activeInstrument.color} ${spread}%)`;
    }

    const selectedLogInst = this.logInstId || (this.instruments[0] && this.instruments[0].id);

    return html`
      <div class="main-grid">
        <!-- Streak Panel -->
        <div class="streak-panel">
          <div class="streak-outer-ring" style="background: ${ringStreakBg};">
            <div class="streak-inner-hole">
              <div class="streak-number">${currentStreak}</div>
              <div class="streak-label">DAY STREAK</div>
            </div>
          </div>
          <div class="today-dots-row">
            ${todaySessions.length > 0
              ? todaySessions.map((s) => {
                  const inst = instMap.get(s.instrumentId);
                  return html`<span class="today-dot" style="background: ${inst?.color || '#A3A297'}"></span>`;
                })
              : html`<span class="no-sessions-label">nothing logged yet today</span>`}
          </div>
        </div>

        <!-- Right Section: Active Session Card or Idle Launcher -->
        <div class="right-section">
          ${this.activeSession && activeInstrument
            ? html`
                <div class="active-card" style="background: ${activeBloomBg};">
                  <div class="active-header-tag">
                    <span class="active-pulse-dot"></span>
                    SESSION IN PROGRESS
                  </div>
                  <div class="active-inst-name">${activeInstrument.name}</div>
                  <div class="active-timer-display">${activeElapsedLabel}</div>
                  <button data-tap class="btn-end-session" @click=${this.handleEnd}>
                    End session
                  </button>
                  <div class="active-actions-row">
                    <button class="discard-text-btn" @click=${this.handleDiscard}>
                      Discard timer
                    </button>
                  </div>
                </div>
              `
            : html`
                <div class="launcher-caption">tap an instrument to start</div>
                <div class="chips-wrap">
                  ${this.instruments.map((inst, idx) => {
                    const rep = repetitionMap.get(inst.id);
                    const isPrimary = inst.tier === 'primary';
                    const badge = rep
                      ? getRepetitionBadge(rep, isPrimary, inst.color)
                      : {
                          badgeText: '1d',
                          badgeBg: isPrimary ? 'rgba(255, 255, 255, 0.22)' : '#EFEEE9',
                          badgeColor: isPrimary ? '#F5F2F6' : '#767668',
                          badgeDot: '#A3A297',
                          isDue: false,
                        };

                    return html`
                      <div
                        data-lift
                        class="chip-btn ${isPrimary ? 'primary' : 'secondary'} ${badge.isDue ? 'due-drift' : ''}"
                        style="${isPrimary ? `background: ${inst.color};` : ''} animation-delay: ${40 + idx * 35}ms;"
                        @click=${() => this.handleStart(inst.id)}
                      >
                        <span style="white-space: nowrap;">${inst.name}</span>
                        <span
                          class="chip-badge"
                          style="background: ${badge.badgeBg}; color: ${badge.badgeColor};"
                        >
                          <span
                            class="badge-dot ${badge.isDue ? 'pulse' : ''}"
                            style="background: ${badge.badgeDot};"
                          ></span>
                          ${badge.badgeText}
                        </span>
                      </div>
                    `;
                  })}
                </div>

                ${!this.logOpen
                  ? html`
                      <div class="log-past-trigger-row">
                        <button
                          data-tap
                          class="log-past-btn"
                          @click=${() => (this.logOpen = true)}
                        >
                          + Log past practice
                        </button>
                      </div>
                    `
                  : html`
                      <!-- Inline Quick-Log Past Practice -->
                      <div class="inline-logger-card">
                        <div class="logger-header">
                          <span class="logger-title">Log past practice</span>
                          <button
                            class="logger-cancel-btn"
                            @click=${() => (this.logOpen = false)}
                          >
                            Cancel
                          </button>
                        </div>

                        <!-- Instrument Selector Pills -->
                        <div class="logger-inst-pills">
                          ${this.instruments.map((inst) => {
                            const isSelected = inst.id === selectedLogInst;
                            return html`
                              <span
                                class="logger-inst-pill"
                                style="background: ${isSelected ? inst.color : '#FBFBF9'}; color: ${isSelected ? '#F5F2F6' : '#23241F'}; border: 1px solid ${isSelected ? inst.color : '#E7E6DF'};"
                                @click=${() => (this.logInstId = inst.id)}
                              >
                                ${inst.name}
                              </span>
                            `;
                          })}
                        </div>

                        <!-- Duration Pills -->
                        <div class="logger-pills-row">
                          ${[10, 15, 20, 30].map(
                            (m) => html`
                              <span
                                class="logger-option-pill"
                                style="background: ${this.logDuration === m ? '#23241F' : '#F2F1EA'}; color: ${this.logDuration === m ? '#F2F1EC' : '#767668'};"
                                @click=${() => (this.logDuration = m)}
                              >
                                ${m}′
                              </span>
                            `
                          )}
                        </div>

                        <!-- Day Offset Pills -->
                        <div class="logger-pills-row">
                          ${[
                            { n: 1, label: 'Yesterday' },
                            { n: 2, label: '2 days ago' },
                            { n: 3, label: '3 days ago' },
                          ].map(
                            (d) => html`
                              <span
                                class="logger-option-pill"
                                style="background: ${this.logDayOffset === d.n ? '#23241F' : '#F2F1EA'}; color: ${this.logDayOffset === d.n ? '#F2F1EC' : '#767668'};"
                                @click=${() => (this.logDayOffset = d.n)}
                              >
                                ${d.label}
                              </span>
                            `
                          )}
                        </div>

                        <button
                          data-tap
                          class="btn-save-log"
                          @click=${this.handleSaveQuickLog}
                        >
                          Save session
                        </button>

                        <div
                          class="custom-modal-link"
                          @click=${() => {
                            this.logOpen = false;
                            this.handleOpenManual();
                          }}
                        >
                          Custom date, time & notes...
                        </div>
                      </div>
                    `}
              `}
        </div>
      </div>
    `;
  }
}

