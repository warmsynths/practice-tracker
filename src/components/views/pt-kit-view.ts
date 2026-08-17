import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { Instrument, Session, InstrumentTier } from '../../types';
import { commonStyles } from '../../styles/shared-styles';
import { arcGradient, SWATCH_COLORS } from '../../utils/chart-utils';
import { addDays, fmtDuration, startOfDay } from '../../utils/date-utils';
import { calculateAllInstrumentsRepetition, REPETITION_INTERVALS } from '../../utils/repetition-utils';

@customElement('pt-kit-view')
export class PtKitView extends LitElement {
  static styles = [
    commonStyles,
    css`
      :host {
        display: block;
        animation: fadeOnly 180ms ease-out both;
        padding-bottom: 28px;
      }

      .kit-header {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        margin-bottom: 4px;
      }

      .kit-title {
        font-size: 24px;
        font-weight: 700;
        letter-spacing: -0.02em;
      }

      .kit-subtitle {
        font-size: 12px;
        color: #767668;
        margin-top: 3px;
      }

      .add-toggle-btn {
        font-size: 13px;
        font-weight: 700;
        color: #23241F;
        cursor: pointer;
        background: transparent;
        border: none;
        padding: 4px 8px;
      }

      .add-toggle-btn.cancel {
        color: #767668;
      }

      /* Add Instrument Card */
      .add-card {
        background: #FFF;
        border-radius: 18px;
        padding: 16px;
        margin-top: 14px;
        box-shadow: 0 4px 16px rgba(35, 36, 31, 0.05);
        animation: sheetIn 240ms cubic-bezier(0.16, 1, 0.3, 1) both;
      }

      .add-input {
        width: 100%;
        border: 1px solid #E4E3DC;
        border-radius: 12px;
        padding: 11px 13px;
        font-size: 14px;
        margin-bottom: 12px;
        background: #FBFBF9;
        color: #23241F;
        outline: none;
      }

      .add-input:focus {
        border-color: #23241F;
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
        transition: transform 120ms ease;
      }

      .swatch-btn.selected {
        box-shadow: 0 0 0 2px #FFF, 0 0 0 4px #23241F;
        transform: scale(1.1);
      }

      .tier-segment {
        display: flex;
        background: #EFEEE9;
        border-radius: 12px;
        padding: 3px;
        margin-bottom: 14px;
      }

      .tier-option {
        flex: 1;
        text-align: center;
        padding: 8px 0;
        border-radius: 9px;
        font-size: 12px;
        font-weight: 700;
        cursor: pointer;
        border: none;
        background: transparent;
        color: #767668;
        transition: background-color 160ms ease, color 160ms ease;
      }

      .tier-option.active {
        background: #FFF;
        color: #23241F;
        box-shadow: 0 2px 6px rgba(35, 36, 31, 0.06);
      }

      .btn-confirm-add {
        background: #23241F;
        color: #F2F1EC;
        border-radius: 12px;
        height: 46px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        font-weight: 700;
        cursor: pointer;
        border: none;
        width: 100%;
        transition: transform 160ms cubic-bezier(0.2, 0.8, 0.2, 1), filter 160ms ease-out;
      }

      .btn-confirm-add:active {
        transform: scale(0.975);
      }

      /* Main Kit Grid */
      .kit-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 20px;
        align-items: start;
        margin-top: 20px;
      }

      @media (min-width: 900px) {
        .kit-grid {
          grid-template-columns: 1fr 1fr;
          gap: 28px;
        }
      }

      /* Rings Column */
      .rings-column {
        display: flex;
        flex-direction: column;
      }

      .primary-rings-wrap {
        display: flex;
        justify-content: center;
        gap: 26px;
        flex-wrap: wrap;
      }

      .secondary-rings-wrap {
        display: flex;
        justify-content: center;
        gap: 18px;
        flex-wrap: wrap;
        margin-top: 26px;
      }

      .ring-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
        position: relative;
        perspective: 700px;
        user-select: none;
      }

      .ring-card.primary {
        width: 128px;
      }

      .ring-card.secondary {
        width: 106px;
        gap: 7px;
        perspective: 620px;
      }

      .remove-btn {
        position: absolute;
        top: -4px;
        right: 8px;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: #FFF;
        color: #767668;
        font-size: 13px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        z-index: 2;
        border: none;
        box-shadow: 0 2px 6px rgba(35, 36, 31, 0.12);
        transition: transform 120ms ease;
      }

      .remove-btn:active {
        transform: scale(0.92);
      }

      .arc-ring-outer {
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: transform 170ms cubic-bezier(0.2, 0.8, 0.2, 1);
        transform-style: preserve-3d;
      }

      .primary .arc-ring-outer {
        width: 104px;
        height: 104px;
      }

      .secondary .arc-ring-outer {
        width: 80px;
        height: 80px;
      }

      .arc-ring-inner {
        border-radius: 50%;
        background: #EDEDE9;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 700;
      }

      .primary .arc-ring-inner {
        width: 80px;
        height: 80px;
        font-size: 17px;
      }

      .secondary .arc-ring-inner {
        width: 62px;
        height: 62px;
        font-size: 13px;
      }

      .ring-inst-name {
        font-weight: 700;
        text-align: center;
      }

      .primary .ring-inst-name {
        font-size: 14px;
      }

      .secondary .ring-inst-name {
        font-size: 12px;
      }

      .ring-inst-total {
        color: #767668;
        text-align: center;
      }

      .primary .ring-inst-total {
        font-size: 11px;
      }

      .secondary .ring-inst-total {
        font-size: 10px;
      }

      .steps-dots-row {
        display: flex;
        gap: 4px;
        align-items: center;
      }

      .step-track-dot {
        border-radius: 50%;
      }

      .primary .step-track-dot {
        width: 6px;
        height: 6px;
      }

      .secondary .step-track-dot {
        width: 5px;
        height: 5px;
      }

      .retention-pill {
        border-radius: 999px;
        font-weight: 700;
      }

      .primary .retention-pill {
        padding: 4px 10px;
        font-size: 11px;
      }

      .secondary .retention-pill {
        padding: 3px 9px;
        font-size: 10px;
      }

      /* Retention Schedule Card */
      .schedule-panel {
        background: #FFF;
        border-radius: 22px;
        padding: 20px;
        box-shadow: 0 4px 16px rgba(35, 36, 31, 0.04);
      }

      .schedule-title {
        font-size: 16px;
        font-weight: 700;
        letter-spacing: -0.01em;
      }

      .schedule-subtitle {
        font-size: 12px;
        color: #767668;
        margin-top: 3px;
      }

      .schedule-rows-wrap {
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-top: 16px;
      }

      .schedule-item-card {
        border: 1px solid #EAE9E2;
        border-radius: 16px;
        padding: 13px;
        animation: riseIn 320ms cubic-bezier(0.2, 0.8, 0.2, 1) both;
      }

      .schedule-item-top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 11px;
      }

      .schedule-inst-label {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 13px;
        font-weight: 700;
      }

      .inst-color-indicator {
        width: 8px;
        height: 8px;
        border-radius: 50%;
      }

      .schedule-grid-cells {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 5px;
      }

      .milestone-cell {
        border-radius: 10px;
        padding: 8px 0;
        text-align: center;
        border: 1px solid transparent;
        transition: background-color 200ms ease-out, color 200ms ease-out, border-color 200ms ease-out;
      }

      .cell-step-title {
        display: block;
        font-size: 10px;
        font-weight: 700;
        letter-spacing: 0.02em;
      }

      .cell-interval-desc {
        display: block;
        font-size: 10px;
        opacity: 0.7;
        margin-top: 2px;
      }
    `,
  ];

  @property({ type: Array }) instruments: Instrument[] = [];
  @property({ type: Array }) sessions: Session[] = [];

  @state() private addOpen = false;
  @state() private addName = '';
  @state() private addColor = SWATCH_COLORS[0];
  @state() private addTier: InstrumentTier = 'secondary';
  @state() private tiltMap: Record<string, { rx: number; ry: number }> = {};

  private tiltRafId: number | null = null;

  private handleCardMouseMove(id: string, e: MouseEvent) {
    if (window.innerWidth < 900) return;
    if (this.tiltRafId) return;

    const currentTarget = e.currentTarget as HTMLElement;
    const rect = currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    this.tiltRafId = requestAnimationFrame(() => {
      this.tiltRafId = null;
      this.tiltMap = {
        ...this.tiltMap,
        [id]: {
          rx: Number((-y * 12).toFixed(2)),
          ry: Number((x * 12).toFixed(2)),
        },
      };
    });
  }

  private handleCardMouseLeave(id: string) {
    if (this.tiltMap[id]) {
      const copy = { ...this.tiltMap };
      delete copy[id];
      this.tiltMap = copy;
    }
  }

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

    // Filter sessions in last 42 days for rotation breakdown
    const recentSessions = this.sessions.filter((s) => new Date(s.start) >= cutoff42d);
    const activeInstruments = this.instruments.filter((i) => !i.archived);
    const repetitionMap = calculateAllInstrumentsRepetition(activeInstruments, this.sessions, today);

    // Calculate rotation proportions
    const durationByInst: Record<string, number> = {};
    let totalAllMinutes = 0;

    recentSessions.forEach((s) => {
      durationByInst[s.instrumentId] = (durationByInst[s.instrumentId] || 0) + s.duration;
      totalAllMinutes += s.duration;
    });

    const grandTotal = Math.max(1, totalAllMinutes);
    const removable = activeInstruments.length > 1;

    const primaryInsts = activeInstruments.filter((i) => i.tier === 'primary');
    const secondaryInsts = activeInstruments.filter((i) => i.tier !== 'primary');

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

      <!-- Expandable Add Card -->
      ${this.addOpen
        ? html`
            <div class="add-card">
              <input
                class="add-input"
                placeholder="Instrument name"
                .value=${this.addName}
                @input=${(e: Event) => (this.addName = (e.target as HTMLInputElement).value)}
                @keydown=${(e: KeyboardEvent) => {
                  if (e.key === 'Enter') this.handleAddConfirm();
                }}
              />

              <div class="swatches-row">
                ${SWATCH_COLORS.map(
                  (c) => html`
                    <button
                      class="swatch-btn ${this.addColor === c ? 'selected' : ''}"
                      style="background: ${c};"
                      @click=${() => (this.addColor = c)}
                    ></button>
                  `
                )}
              </div>

              <div class="tier-segment">
                <button
                  class="tier-option ${this.addTier === 'primary' ? 'active' : ''}"
                  @click=${() => (this.addTier = 'primary')}
                >
                  Primary
                </button>
                <button
                  class="tier-option ${this.addTier === 'secondary' ? 'active' : ''}"
                  @click=${() => (this.addTier = 'secondary')}
                >
                  Secondary
                </button>
              </div>

              <button
                data-tap
                class="btn-confirm-add"
                @click=${this.handleAddConfirm}
              >
                Add to kit
              </button>
            </div>
          `
        : ''}

      <!-- Main Dual-Column Grid -->
      <div class="kit-grid">
        <!-- Left: Instrument Proportion Rings -->
        <div class="rings-column">
          <!-- Primary Tier -->
          <div class="primary-rings-wrap">
            ${primaryInsts.map((inst) => {
              const totalMin = durationByInst[inst.id] || 0;
              const pct = Math.round((totalMin / grandTotal) * 100);
              const rep = repetitionMap.get(inst.id);
              const isDue = rep ? rep.isDueToday || rep.isOverdue : false;
              const pillText = isDue ? 'Due today' : rep ? `In ${Math.max(0, rep.daysRemaining)}d` : '1d';
              const pillBg = isDue ? '#F6DED7' : '#EFEEE9';
              const pillColor = isDue ? '#B4543C' : '#767668';

              const tilt = this.tiltMap[inst.id];
              const tiltTransform = tilt ? `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)` : 'rotateX(0deg) rotateY(0deg)';

              return html`
                <div
                  class="ring-card primary"
                  @mousemove=${(e: MouseEvent) => this.handleCardMouseMove(inst.id, e)}
                  @mouseleave=${() => this.handleCardMouseLeave(inst.id)}
                >
                  ${removable
                    ? html`
                        <button
                          class="remove-btn"
                          title="Remove instrument"
                          @click=${(e: Event) => this.handleRemove(e, inst.id)}
                        >
                          &times;
                        </button>
                      `
                    : ''}
                  <div
                    class="arc-ring-outer"
                    style="background: ${arcGradient(inst.color, pct)}; transform: ${tiltTransform};"
                  >
                    <div class="arc-ring-inner" style="color: ${inst.color};">
                      ${pct}%
                    </div>
                  </div>
                  <div class="ring-inst-name">${inst.name}</div>
                  <div class="ring-inst-total">${fmtDuration(totalMin)}</div>
                  <div class="steps-dots-row">
                    ${REPETITION_INTERVALS.map((_, i) => {
                      const completed = rep ? i < rep.step : false;
                      const isCurrent = rep ? i === Math.max(0, rep.step - 1) : i === 0;
                      const dotColor = completed ? inst.color : isCurrent ? (isDue ? '#B4543C' : inst.color) : '#D9D8D0';
                      return html`
                        <span
                          class="step-track-dot"
                          style="background: ${dotColor};"
                        ></span>
                      `;
                    })}
                  </div>
                  <div
                    class="retention-pill"
                    style="background: ${pillBg}; color: ${pillColor};"
                  >
                    ${pillText}
                  </div>
                </div>
              `;
            })}
          </div>

          <!-- Secondary Tier -->
          <div class="secondary-rings-wrap">
            ${secondaryInsts.map((inst) => {
              const totalMin = durationByInst[inst.id] || 0;
              const pct = Math.round((totalMin / grandTotal) * 100);
              const rep = repetitionMap.get(inst.id);
              const isDue = rep ? rep.isDueToday || rep.isOverdue : false;
              const pillText = isDue ? 'Due today' : rep ? `In ${Math.max(0, rep.daysRemaining)}d` : '1d';
              const pillBg = isDue ? '#F6DED7' : '#EFEEE9';
              const pillColor = isDue ? '#B4543C' : '#767668';

              const tilt = this.tiltMap[inst.id];
              const tiltTransform = tilt ? `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)` : 'rotateX(0deg) rotateY(0deg)';

              return html`
                <div
                  class="ring-card secondary"
                  @mousemove=${(e: MouseEvent) => this.handleCardMouseMove(inst.id, e)}
                  @mouseleave=${() => this.handleCardMouseLeave(inst.id)}
                >
                  ${removable
                    ? html`
                        <button
                          class="remove-btn"
                          title="Remove instrument"
                          @click=${(e: Event) => this.handleRemove(e, inst.id)}
                        >
                          &times;
                        </button>
                      `
                    : ''}
                  <div
                    class="arc-ring-outer"
                    style="background: ${arcGradient(inst.color, pct)}; transform: ${tiltTransform};"
                  >
                    <div class="arc-ring-inner" style="color: ${inst.color};">
                      ${pct}%
                    </div>
                  </div>
                  <div class="ring-inst-name">${inst.name}</div>
                  <div class="ring-inst-total">${fmtDuration(totalMin)}</div>
                  <div class="steps-dots-row">
                    ${REPETITION_INTERVALS.map((_, i) => {
                      const completed = rep ? i < rep.step : false;
                      const isCurrent = rep ? i === Math.max(0, rep.step - 1) : i === 0;
                      const dotColor = completed ? inst.color : isCurrent ? (isDue ? '#B4543C' : inst.color) : '#D9D8D0';
                      return html`
                        <span
                          class="step-track-dot"
                          style="background: ${dotColor};"
                        ></span>
                      `;
                    })}
                  </div>
                  <div
                    class="retention-pill"
                    style="background: ${pillBg}; color: ${pillColor};"
                  >
                    ${pillText}
                  </div>
                </div>
              `;
            })}
          </div>
        </div>

        <!-- Right: 5-Step Leitner Retention Schedule -->
        <div class="schedule-panel">
          <div class="schedule-title">Retention schedule</div>
          <div class="schedule-subtitle">1 → 3 → 7 → 14 → 30 day intervals</div>

          <div class="schedule-rows-wrap">
            ${activeInstruments.map((inst, idx) => {
              const rep = repetitionMap.get(inst.id);
              const isDue = rep ? rep.isDueToday || rep.isOverdue : false;
              const pillText = isDue ? 'Due today' : rep ? `In ${Math.max(0, rep.daysRemaining)}d` : '1d';
              const pillBg = isDue ? '#F6DED7' : '#EFEEE9';
              const pillColor = isDue ? '#B4543C' : '#767668';

              return html`
                <div
                  class="schedule-item-card"
                  style="animation-delay: ${80 + idx * 45}ms;"
                >
                  <div class="schedule-item-top">
                    <span class="schedule-inst-label">
                      <span
                        class="inst-color-indicator"
                        style="background: ${inst.color};"
                      ></span>
                      ${inst.name}
                    </span>
                    <span
                      class="retention-pill"
                      style="background: ${pillBg}; color: ${pillColor}; padding: 4px 10px; font-size: 11px;"
                    >
                      ${pillText}
                    </span>
                  </div>

                  <div class="schedule-grid-cells">
                    ${REPETITION_INTERVALS.map((iv, i) => {
                      const current = rep ? i === Math.max(0, rep.step - 1) : i === 0;
                      const done = rep ? i < rep.step - 1 : false;

                      let cellBg = done ? '#F2F1EA' : '#F7F6F1';
                      let cellColor = done ? '#767668' : '#A3A297';
                      let cellBorder = 'transparent';

                      if (current) {
                        if (isDue) {
                          cellBg = '#B4543C';
                          cellColor = '#FBF6F3';
                          cellBorder = '#B4543C';
                        } else {
                          cellBg = '#FFFFFF';
                          cellColor = '#23241F';
                          cellBorder = '#23241F';
                        }
                      }

                      return html`
                        <div
                          class="milestone-cell"
                          style="background: ${cellBg}; color: ${cellColor}; border-color: ${cellBorder};"
                        >
                          <span class="cell-step-title">Step ${i + 1}</span>
                          <span class="cell-interval-desc">${iv}d</span>
                        </div>
                      `;
                    })}
                  </div>
                </div>
              `;
            })}
          </div>
        </div>
      </div>
    `;
  }
}

