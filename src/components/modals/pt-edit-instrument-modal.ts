import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { Instrument, InstrumentTier } from '../../types';
import { commonStyles } from '../../styles/shared-styles';
import { SWATCH_COLORS } from '../../utils/chart-utils';

@customElement('pt-edit-instrument-modal')
export class PtEditInstrumentModal extends LitElement {
  static styles = [
    commonStyles,
    css`
      .swatches-grid {
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
        margin-bottom: 14px;
      }
      .swatch {
        width: 28px;
        height: 28px;
        border-radius: 50%;
        cursor: pointer;
        transition: transform 0.1s ease;
      }
      .swatch.selected {
        box-shadow: 0 0 0 2px #fff, 0 0 0 4px #23241f;
        transform: scale(1.08);
      }
      .tier-toggle {
        display: flex;
        background: #e1e1db;
        border-radius: 10px;
        padding: 3px;
        margin-bottom: 16px;
      }
      .tier-btn {
        flex: 1;
        text-align: center;
        padding: 8px 0;
        border-radius: 8px;
        font-size: 12px;
        font-weight: 700;
        cursor: pointer;
        border: none;
        background: transparent;
        color: #767668;
      }
      .tier-btn.active {
        background: #fff;
        color: #23241f;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.06);
      }
      .actions-row {
        display: flex;
        gap: 8px;
        margin-top: 14px;
      }
    `,
  ];

  @property({ type: Object }) instrument: Instrument | null = null;
  @property({ type: Boolean }) canDelete = true;
  @property({ type: Boolean }) open = false;

  @state() private name = '';
  @state() private color = SWATCH_COLORS[0];
  @state() private tier: InstrumentTier = 'secondary';

  willUpdate(changedProperties: Map<string, unknown>) {
    if (changedProperties.has('instrument') && this.instrument) {
      this.name = this.instrument.name;
      this.color = this.instrument.color;
      this.tier = this.instrument.tier;
    }
  }

  private handleSave() {
    if (!this.instrument || !this.name.trim()) return;

    const updated: Instrument = {
      ...this.instrument,
      name: this.name.trim(),
      color: this.color,
      tier: this.tier,
    };

    this.dispatchEvent(
      new CustomEvent('update-instrument', {
        detail: { instrument: updated },
        bubbles: true,
        composed: true,
      })
    );
    this.close();
  }

  private handleDelete() {
    if (!this.instrument) return;
    if (confirm(`Remove "${this.instrument.name}" from kit? Past practice history will be preserved.`)) {
      this.dispatchEvent(
        new CustomEvent('remove-instrument', {
          detail: { instrumentId: this.instrument.id },
          bubbles: true,
          composed: true,
        })
      );
      this.close();
    }
  }

  private close() {
    this.dispatchEvent(new CustomEvent('close-modal', { bubbles: true, composed: true }));
  }

  render() {
    if (!this.open || !this.instrument) return html``;

    return html`
      <div class="modal-overlay" @click=${(e: Event) => e.target === e.currentTarget && this.close()}>
        <div class="modal-card">
          <div class="modal-title">
            <span>Edit Instrument</span>
            <button class="close-btn" @click=${this.close}>&times;</button>
          </div>

          <div class="form-group">
            <label class="form-label">Instrument Name</label>
            <input
              type="text"
              class="form-input"
              .value=${this.name}
              @input=${(e: Event) => (this.name = (e.target as HTMLInputElement).value)}
            />
          </div>

          <div class="form-group">
            <label class="form-label">Color Swatch</label>
            <div class="swatches-grid">
              ${SWATCH_COLORS.map(
                (c) => html`
                  <span
                    class="swatch ${this.color === c ? 'selected' : ''}"
                    style="background: ${c}"
                    @click=${() => (this.color = c)}
                  ></span>
                `
              )}
            </div>
          </div>

          <div class="form-group">
            <label class="form-label">Priority Tier</label>
            <div class="tier-toggle">
              <button
                type="button"
                class="tier-btn ${this.tier === 'primary' ? 'active' : ''}"
                @click=${() => (this.tier = 'primary')}
              >
                Primary
              </button>
              <button
                type="button"
                class="tier-btn ${this.tier === 'secondary' ? 'active' : ''}"
                @click=${() => (this.tier = 'secondary')}
              >
                Secondary
              </button>
            </div>
          </div>

          <div class="actions-row">
            ${this.canDelete
              ? html`
                  <button class="btn btn-danger" style="flex: 1;" @click=${this.handleDelete}>
                    Remove
                  </button>
                `
              : html``}
            <button class="btn btn-primary" style="flex: 2;" @click=${this.handleSave}>
              Save
            </button>
          </div>
        </div>
      </div>
    `;
  }
}
