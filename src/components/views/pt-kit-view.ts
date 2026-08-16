import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { Instrument, Session, InstrumentTier } from '../../types';
import { commonStyles } from '../../styles/shared-styles';
import { arcGradient, SWATCH_COLORS } from '../../utils/chart-utils';
import { addDays, fmtDuration, startOfDay } from '../../utils/date-utils';

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
            </div>
          `;
        })}
      </div>
    `;
  }
}
