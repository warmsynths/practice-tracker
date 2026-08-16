import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { Instrument, Session, InstrumentTier } from '../../types';
import { commonStyles } from '../../styles/shared-styles';
import { arcGradient, SWATCH_COLORS } from '../../utils/chart-utils';
import { addDays, fmtDuration, startOfDay } from '../../utils/date-utils';
import {
  calculateAllInstrumentsRepetition,
  REPETITION_INTERVALS,
} from '../../utils/repetition-utils';


@customElement('pt-kit-view')
export class PtKitView extends LitElement {
  static styles = [
    commonStyles,
    css`
      :host {
        display: flex;
        flex-direction: column;
      }

      .kit-header {
        padding: 26px 24px 4px;
        display: flex;
        justify-content: space-between;
        align-items: baseline;
      }

      .kit-title {
        font-size: 22px;
        font-weight: 700;
        letter-spacing: -0.02em;
      }

      .kit-subtitle {
        font-size: 11px;
        color: #767668;
        margin-top: 3px;
      }

      .add-toggle-btn {
        font-size: 12px;
        font-weight: 700;
        color: #23241F;
        cursor: pointer;
        background: transparent;
        border: none;
        padding: 4px 8px;
        border-radius: 6px;
      }

      .add-toggle-btn.cancel {
        color: #767668;
      }

      .add-card {
        margin: 14px 24px 0;
        background: #FFF;
        border-radius: 16px;
        padding: 16px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
        animation: fadeIn 0.15s ease-out;
      }

      .swatches-row {
        display: flex;
        gap: 8px;
        margin-bottom: 12px;
        flex-wrap: wrap;
      }

      .swatch-btn {
        width: 26px;
        height: 26px;
        border-radius: 50%;
        cursor: pointer;
        border: none;
        transition: transform 0.1s ease;
      }

      .swatch-btn.selected {
        box-shadow: 0 0 0 2px #FFF, 0 0 0 4px #23241F;
        transform: scale(1.1);
      }

      .tier-segment {
        display: flex;
        background: #E1E1DB;
        border-radius: 10px;
        padding: 3px;
        margin-bottom: 14px;
      }

      .tier-option {
        flex: 1;
        text-align: center;
        padding: 7px 0;
        border-radius: 8px;
        font-size: 12px;
        font-weight: 700;
        cursor: pointer;
        border: none;
        background: transparent;
        color: #767668;
      }

      .tier-option.active {
        background: #FFF;
        color: #23241F;
      }

      .primary-group {
        padding: 20px 24px 4px;
        display: flex;
        justify-content: center;
        gap: 22px;
        flex-wrap: wrap;
      }

      .secondary-group {
        padding: 16px 24px 24px;
        display: flex;
        justify-content: center;
        gap: 16px;
        flex-wrap: wrap;
      }

      .ring-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
        position: relative;
        cursor: pointer;
      }

      .remove-chip {
        position: absolute;
        top: -4px;
        right: 4px;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: #FFF;
        color: #767668;
        font-size: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        z-index: 1;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }

      .primary-ring {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .primary-inner {
        width: 78px;
        height: 78px;
        border-radius: 50%;
        background: #EDEDE9;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        font-weight: 700;
      }

      .secondary-ring {
        width: 76px;
        height: 76px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .secondary-inner {
        width: 58px;
        height: 58px;
        border-radius: 50%;
        background: #EDEDE9;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        font-weight: 700;
      }

      .ring-name {
        font-size: 13px;
        font-weight: 700;
        text-align: center;
      }

      .secondary-name {
        font-size: 12px;
        font-weight: 700;
        text-align: center;
      }

      .ring-total {
        font-size: 11px;
        color: #767668;
        text-align: center;
      }

      .secondary-total {
        font-size: 10px;
        color: #767668;
        text-align: center;
      }

      .ring-step-track {
        display: flex;
        gap: 3px;
        align-items: center;
        margin-top: 2px;
      }

      .step-dot {
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background: #D4D3CB;
        transition: all 0.2s ease;
      }

      .step-dot.completed {
        background: #23241F;
      }

      .step-dot.current {
        transform: scale(1.25);
      }

      .ring-heat-status {
        font-size: 10px;
        font-weight: 700;
        letter-spacing: 0.02em;
        color: #767668;
        display: inline-flex;
        align-items: center;
        gap: 3px;
        padding: 2px 6px;
        border-radius: 6px;
        background: rgba(0, 0, 0, 0.04);
        max-width: 100%;
        white-space: nowrap;
      }

      .ring-heat-status.due,
      .ring-heat-status.overdue {
        background: #FEECE8;
        color: #E05D44;
      }

      .heat-schedule-section {
        margin: 12px 24px 32px;
        background: #FFF;
        border-radius: 18px;
        padding: 18px 20px;
        box-shadow: 0 4px 14px rgba(0, 0, 0, 0.04);
      }

      .schedule-header {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        margin-bottom: 14px;
      }

      .schedule-title {
        font-size: 14px;
        font-weight: 700;
        color: #23241F;
      }

      .schedule-subtitle {
        font-size: 11px;
        font-weight: 600;
        color: #767668;
      }

      .schedule-list {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }

      .schedule-row {
        display: flex;
        flex-direction: column;
        gap: 6px;
        padding: 10px 12px;
        border-radius: 12px;
        background: #F8F7F4;
        border: 1px solid #ECEBE4;
        cursor: pointer;
        transition: transform 0.1s ease, border-color 0.15s ease;
      }

      .schedule-row:hover {
        border-color: #D4D3CB;
      }

      .schedule-row:active {
        transform: scale(0.99);
      }

      .schedule-row-top {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .schedule-inst-info {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 13px;
        font-weight: 700;
      }

      .schedule-color-dot {
        width: 10px;
        height: 10px;
        border-radius: 50%;
      }

      .schedule-status-badge {
        font-size: 11px;
        font-weight: 700;
        padding: 3px 8px;
        border-radius: 8px;
        display: inline-flex;
        align-items: center;
        gap: 4px;
      }

      .schedule-status-badge.due {
        background: #E05D44;
        color: #FFF;
      }

      .schedule-status-badge.overdue {
        background: #D94838;
        color: #FFF;
      }

      .schedule-status-badge.hot,
      .schedule-status-badge.warm {
        background: #FDF3E5;
        color: #B57D1E;
      }

      .schedule-status-badge.cool {
        background: #EFF4EE;
        color: #556B58;
      }

      .schedule-status-badge.cold,
      .schedule-status-badge.new {
        background: #EAE9E2;
        color: #767668;
      }

      .milestone-track {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 4px;
        margin-top: 2px;
      }

      .milestone-step {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 4px 0;
        border-radius: 6px;
        background: #E5E4DC;
        font-size: 9px;
        font-weight: 700;
        color: #767668;
        transition: all 0.2s ease;
      }

      .milestone-step.completed {
        background: #23241F;
        color: #F5F2F6;
      }

      .milestone-step.active {
        box-shadow: 0 0 0 2px #23241F;
      }

      .milestone-step.active.due,
      .milestone-step.active.overdue {
        background: #E05D44;
        color: #FFF;
        box-shadow: 0 0 0 2px #E05D44;
      }

      .empty-kit-notice {
        text-align: center;
        padding: 30px 20px;
        font-size: 13px;
        color: #767668;
      }
    `,
  ];

  @property({ type: Array }) instruments: Instrument[] = [];
  @property({ type: Array }) sessions: Session[] = [];

  @state() private addOpen = false;
  @state() private addName = '';
  @state() private addColor = SWATCH_COLORS[0];
  @state() private addTier: InstrumentTier = 'secondary';

  private toggleAdd() {
    this.addOpen = !this.addOpen;
    if (this.addOpen) {
      this.addName = '';
      this.addColor = SWATCH_COLORS[0];
      this.addTier = 'secondary';
    }
  }

  private handleAddConfirm() {
    const trimmed = this.addName.trim();
    if (!trimmed) return;

    this.dispatchEvent(
      new CustomEvent('add-instrument', {
        detail: {
          name: trimmed,
          color: this.addColor,
          tier: this.addTier,
        },
        bubbles: true,
        composed: true,
      })
    );

    this.addOpen = false;
    this.addName = '';
  }

  private handleEdit(inst: Instrument) {
    this.dispatchEvent(
      new CustomEvent('open-edit-instrument', {
        detail: { instrument: inst },
        bubbles: true,
        composed: true,
      })
    );
  }

  private handleRemove(e: Event, instId: string) {
    e.stopPropagation();
    this.dispatchEvent(
      new CustomEvent('remove-instrument', {
        detail: { instrumentId: instId },
        bubbles: true,
        composed: true,
      })
    );
  }

  render() {
    const today = startOfDay(new Date());
    const cutoff42d = addDays(today, -42);

    // Filter sessions in last 42 days
    const recentSessions = this.sessions.filter((s) => new Date(s.start) >= cutoff42d);

    const activeInstruments = this.instruments.filter((i) => !i.archived);
    const repetitionMap = calculateAllInstrumentsRepetition(activeInstruments, this.sessions, today);

    // Compute totals per instrument
    const durationByInst: Record<string, number> = {};
    let totalAllMinutes = 0;

    recentSessions.forEach((s) => {
      durationByInst[s.instrumentId] = (durationByInst[s.instrumentId] || 0) + s.duration;
      totalAllMinutes += s.duration;
    });

    const grandTotal = Math.max(1, totalAllMinutes);
    const removable = activeInstruments.length > 1;

    const primaryList = activeInstruments.filter((i) => i.tier === 'primary');
    const secondaryList = activeInstruments.filter((i) => i.tier === 'secondary');

    return html`
      <div class="kit-header">
        <div>
          <div class="kit-title">Kit</div>
          <div class="kit-subtitle">Share of practice time, last 42 days</div>
        </div>
        <button
          class="add-toggle-btn ${this.addOpen ? 'cancel' : ''}"
          @click=${this.toggleAdd}
        >
          ${this.addOpen ? 'Cancel' : '+ Add'}
        </button>
      </div>

      <!-- Add Instrument Form -->
      ${this.addOpen
        ? html`
            <div class="add-card">
              <input
                type="text"
                class="form-input"
                style="margin-bottom: 12px;"
                placeholder="Instrument name (e.g., Drums, Vocals)"
                .value=${this.addName}
                @input=${(e: Event) => (this.addName = (e.target as HTMLInputElement).value)}
                @keydown=${(e: KeyboardEvent) => e.key === 'Enter' && this.handleAddConfirm()}
              />
              <div class="swatches-row">
                ${SWATCH_COLORS.map(
                  (c) => html`
                    <button
                      type="button"
                      class="swatch-btn ${this.addColor === c ? 'selected' : ''}"
                      style="background: ${c};"
                      @click=${() => (this.addColor = c)}
                    ></button>
                  `
                )}
              </div>
              <div class="tier-segment">
                <button
                  type="button"
                  class="tier-option ${this.addTier === 'primary' ? 'active' : ''}"
                  @click=${() => (this.addTier = 'primary')}
                >
                  Primary
                </button>
                <button
                  type="button"
                  class="tier-option ${this.addTier === 'secondary' ? 'active' : ''}"
                  @click=${() => (this.addTier = 'secondary')}
                >
                  Secondary
                </button>
              </div>
              <button class="btn btn-primary" @click=${this.handleAddConfirm}>
                Add to kit
              </button>
            </div>
          `
        : html``}

      <!-- Primary Instruments -->
      <div class="primary-group">
        ${primaryList.map((inst) => {
          const min = durationByInst[inst.id] || 0;
          const pct = totalAllMinutes > 0 ? Math.round((min / grandTotal) * 100) : 0;
          const ringBg = arcGradient(inst.color, pct);
          const rep = repetitionMap.get(inst.id);

          return html`
            <div class="ring-item" @click=${() => this.handleEdit(inst)}>
              ${removable
                ? html`
                    <span
                      class="remove-chip"
                      title="Remove"
                      @click=${(e: Event) => this.handleRemove(e, inst.id)}
                    >
                      &times;
                    </span>
                  `
                : html``}
              <div class="primary-ring" style="background: ${ringBg};">
                <div class="primary-inner" style="color: ${inst.color};">
                  ${pct}%
                </div>
              </div>
              <div class="ring-name">${inst.name}</div>
              <div class="ring-total">${fmtDuration(min)}</div>
              ${rep
                ? html`
                    <div class="ring-step-track" title="${rep.label}">
                      ${REPETITION_INTERVALS.map((_, idx) => {
                        const stepNum = idx + 1;
                        const isCompleted = rep.step > stepNum;
                        const isCurrent = rep.step === stepNum;
                        return html`
                          <span
                            class="step-dot ${isCompleted ? 'completed' : ''} ${isCurrent ? 'current' : ''}"
                            style="${isCurrent ? `background: ${rep.isDueToday || rep.isOverdue ? '#E05D44' : inst.color};` : ''}"
                          ></span>
                        `;
                      })}
                    </div>
                    <div class="ring-heat-status ${rep.status}">
                      ${rep.isDueToday
                        ? html`🔥 Due Today`
                        : rep.isOverdue
                        ? html`⚠️ Overdue`
                        : rep.step > 0
                        ? html`Step ${rep.step}/5 · ${rep.intervalDays}d`
                        : html`Ready · 1d`}
                    </div>
                  `
                : html``}
            </div>
          `;
        })}
      </div>

      <!-- Secondary Instruments -->
      <div class="secondary-group">
        ${secondaryList.map((inst) => {
          const min = durationByInst[inst.id] || 0;
          const pct = totalAllMinutes > 0 ? Math.round((min / grandTotal) * 100) : 0;
          const ringBg = arcGradient(inst.color, pct);
          const rep = repetitionMap.get(inst.id);

          return html`
            <div class="ring-item" @click=${() => this.handleEdit(inst)}>
              ${removable
                ? html`
                    <span
                      class="remove-chip"
                      title="Remove"
                      @click=${(e: Event) => this.handleRemove(e, inst.id)}
                    >
                      &times;
                    </span>
                  `
                : html``}
              <div class="secondary-ring" style="background: ${ringBg};">
                <div class="secondary-inner" style="color: ${inst.color};">
                  ${pct}%
                </div>
              </div>
              <div class="secondary-name">${inst.name}</div>
              <div class="secondary-total">${fmtDuration(min)}</div>
              ${rep
                ? html`
                    <div class="ring-step-track" title="${rep.label}">
                      ${REPETITION_INTERVALS.map((_, idx) => {
                        const stepNum = idx + 1;
                        const isCompleted = rep.step > stepNum;
                        const isCurrent = rep.step === stepNum;
                        return html`
                          <span
                            class="step-dot ${isCompleted ? 'completed' : ''} ${isCurrent ? 'current' : ''}"
                            style="${isCurrent ? `background: ${rep.isDueToday || rep.isOverdue ? '#E05D44' : inst.color};` : ''}"
                          ></span>
                        `;
                      })}
                    </div>
                    <div class="ring-heat-status ${rep.status}">
                      ${rep.isDueToday
                        ? html`🔥 Due Today`
                        : rep.isOverdue
                        ? html`⚠️ Overdue`
                        : rep.step > 0
                        ? html`Step ${rep.step}/5 · ${rep.intervalDays}d`
                        : html`Ready · 1d`}
                    </div>
                  `
                : html``}
            </div>
          `;
        })}
      </div>

      <!-- Spaced Repetition Heat Matrix Section -->
      ${activeInstruments.length > 0
        ? html`
            <div class="heat-schedule-section">
              <div class="schedule-header">
                <div>
                  <div class="schedule-title">Heat Retention Schedule</div>
                  <div class="schedule-subtitle">1 → 3 → 7 → 14 → 30 day intervals</div>
                </div>
              </div>

              <div class="schedule-list">
                ${activeInstruments.map((inst) => {
                  const rep = repetitionMap.get(inst.id);
                  if (!rep) return html``;

                  return html`
                    <div class="schedule-row" @click=${() => this.handleEdit(inst)}>
                      <div class="schedule-row-top">
                        <div class="schedule-inst-info">
                          <span class="schedule-color-dot" style="background: ${inst.color};"></span>
                          <span>${inst.name}</span>
                          ${rep.cycleCount > 0
                            ? html`<span style="font-size: 10px; color: #767668; font-weight: 600;">(Cycle ${rep.cycleCount + 1})</span>`
                            : html``}
                        </div>
                        <span class="schedule-status-badge ${rep.status}">
                          ${rep.isDueToday
                            ? html`🔥 Due Today`
                            : rep.isOverdue
                            ? html`⚠️ Overdue by ${Math.abs(rep.daysRemaining)}d`
                            : rep.step > 0
                            ? html`In ${rep.daysRemaining}d`
                            : html`Ready for Step 1`}
                        </span>
                      </div>

                      <div class="milestone-track">
                        ${REPETITION_INTERVALS.map((intDays, idx) => {
                          const stepNum = idx + 1;
                          const isCompleted = rep.step > stepNum;
                          const isCurrent = rep.step === stepNum;

                          return html`
                            <div
                              class="milestone-step ${isCompleted ? 'completed' : ''} ${isCurrent ? `active ${rep.status}` : ''}"
                            >
                              <span>Step ${stepNum}</span>
                              <span>${intDays}d</span>
                            </div>
                          `;
                        })}
                      </div>
                    </div>
                  `;
                })}
              </div>
            </div>
          `
        : html``}
    `;
  }
}
