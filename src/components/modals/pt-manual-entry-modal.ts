import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { Instrument } from '../../types';
import { commonStyles } from '../../styles/shared-styles';

@customElement('pt-manual-entry-modal')
export class PtManualEntryModal extends LitElement {
  static styles = [
    commonStyles,
    css`
      .preset-durations {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 6px;
        margin-bottom: 12px;
      }
      .preset-btn {
        background: #E1E1DB;
        border: none;
        border-radius: 8px;
        padding: 8px 0;
        font-size: 13px;
        font-weight: 700;
        cursor: pointer;
        color: #23241F;
      }
      .preset-btn.active {
        background: #23241F;
        color: #F5F2F6;
      }
      .inst-radio-group {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        margin-bottom: 14px;
      }
      .inst-radio {
        padding: 8px 12px;
        border-radius: 10px;
        font-size: 12px;
        font-weight: 700;
        cursor: pointer;
        border: 1px solid #E4E3DC;
        background: #FFF;
        display: flex;
        align-items: center;
        gap: 6px;
      }
      .inst-radio.selected {
        border-color: #23241F;
        background: #23241F;
        color: #FFF;
      }
      .inst-dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
      }
    `,
  ];

  @property({ type: Array }) instruments: Instrument[] = [];
  @property({ type: Boolean }) open = false;

  @state() private selectedInstrumentId = '';
  @state() private durationMinutes = 20;
  @state() private sessionDate = new Date().toISOString().slice(0, 10);
  @state() private notes = '';

  connectedCallback() {
    super.connectedCallback();
    if (this.instruments.length > 0 && !this.selectedInstrumentId) {
      this.selectedInstrumentId = this.instruments[0].id;
    }
  }

  willUpdate(changedProperties: Map<string, unknown>) {
    if (changedProperties.has('instruments') && this.instruments.length > 0 && !this.selectedInstrumentId) {
      this.selectedInstrumentId = this.instruments[0].id;
    }
  }

  private setPreset(min: number) {
    this.durationMinutes = min;
  }

  private handleSave() {
    if (!this.selectedInstrumentId || this.durationMinutes <= 0) return;

    const dateParts = this.sessionDate.split('-');
    const sessionTime = new Date();
    if (dateParts.length === 3) {
      sessionTime.setFullYear(parseInt(dateParts[0]), parseInt(dateParts[1]) - 1, parseInt(dateParts[2]));
    }

    this.dispatchEvent(
      new CustomEvent('save-manual-session', {
        detail: {
          instrumentId: this.selectedInstrumentId,
          start: sessionTime,
          duration: this.durationMinutes,
          notes: this.notes,
        },
        bubbles: true,
        composed: true,
      })
    );
    this.close();
  }

  private close() {
    this.dispatchEvent(new CustomEvent('close-modal', { bubbles: true, composed: true }));
  }

  render() {
    if (!this.open) return html``;

    return html`
      <div class="modal-overlay" @click=${(e: Event) => e.target === e.currentTarget && this.close()}>
        <div class="modal-card">
          <div class="modal-title">
            <span>Log Practice Session</span>
            <button class="close-btn" @click=${this.close}>&times;</button>
          </div>

          <div class="form-group">
            <label class="form-label">Select Instrument</label>
            <div class="inst-radio-group">
              ${this.instruments.map(
                (inst) => html`
                  <div
                    class="inst-radio ${this.selectedInstrumentId === inst.id ? 'selected' : ''}"
                    @click=${() => (this.selectedInstrumentId = inst.id)}
                  >
                    <span class="inst-dot" style="background: ${inst.color}"></span>
                    ${inst.name}
                  </div>
                `
              )}
            </div>
          </div>

          <div class="form-group">
            <label class="form-label">Duration (Minutes)</label>
            <div class="preset-durations">
              ${[15, 30, 45, 60].map(
                (min) => html`
                  <button
                    type="button"
                    class="preset-btn ${this.durationMinutes === min ? 'active' : ''}"
                    @click=${() => this.setPreset(min)}
                  >
                    ${min}m
                  </button>
                `
              )}
            </div>
            <input
              type="number"
              min="1"
              max="600"
              class="form-input"
              .value=${String(this.durationMinutes)}
              @input=${(e: Event) =>
                (this.durationMinutes = parseInt((e.target as HTMLInputElement).value) || 0)}
            />
          </div>

          <div class="form-group">
            <label class="form-label">Date</label>
            <input
              type="date"
              class="form-input"
              .value=${this.sessionDate}
              @input=${(e: Event) => (this.sessionDate = (e.target as HTMLInputElement).value)}
            />
          </div>

          <div class="form-group">
            <label class="form-label">Notes (Optional)</label>
            <input
              type="text"
              placeholder="e.g. Scales, arpeggios, song practice..."
              class="form-input"
              .value=${this.notes}
              @input=${(e: Event) => (this.notes = (e.target as HTMLInputElement).value)}
            />
          </div>

          <button class="btn btn-primary" style="margin-top: 10px;" @click=${this.handleSave}>
            Save Practice Log
          </button>
        </div>
      </div>
    `;
  }
}
