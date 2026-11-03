import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { Instrument } from '../../types';
import { commonStyles } from '../../styles/shared-styles';

function toLocalDateStr(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

function toLocalTimeStr(d: Date): string {
  const h = String(d.getHours()).padStart(2, '0');
  const min = String(d.getMinutes()).padStart(2, '0');
  return `${h}:${min}`;
}

const MEDIA_QUERY = '(min-width: 860px)';

@customElement('pt-manual-entry-modal')
export class PtManualEntryModal extends LitElement {
  static styles = [
    commonStyles,
    css`
      :host {
        display: block;
      }

      .sheet-overlay {
        position: fixed;
        inset: 0;
        z-index: 1000;
        background: rgba(20, 10, 15, 0.66);
        display: flex;
        align-items: flex-end;
        justify-content: center;
        animation: fadeOnly 180ms ease-out both;
      }

      .sheet-overlay.wide {
        align-items: center;
        padding: 20px;
      }

      .sheet-card {
        width: 100%;
        max-width: 480px;
        max-height: 90vh;
        overflow-y: auto;
        background: var(--card, #FBFBF9);
        border-radius: 28px 28px 0 0;
        padding: 22px 20px calc(22px + env(safe-area-inset-bottom, 0px));
        box-sizing: border-box;
        color: var(--ink);
        animation: sheetIn 420ms cubic-bezier(0.2, 0.8, 0.2, 1) both;
        box-shadow: 0 -20px 50px rgba(10, 5, 15, 0.5);
      }

      .sheet-overlay.wide .sheet-card {
        border-radius: 28px;
        box-shadow: 0 30px 60px -20px rgba(10, 5, 15, 0.7);
      }

      .sheet-title-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 18px;
      }

      .sheet-title {
        font-family: 'Gabarito', sans-serif;
        font-size: 19px;
        font-weight: 800;
        letter-spacing: -0.02em;
      }

      .section-label {
        font-family: 'Manrope', sans-serif;
        font-size: 11px;
        font-weight: 800;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: var(--muted);
        margin-bottom: 8px;
      }

      .inst-chip-row {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        margin-bottom: 18px;
      }

      .inst-chip {
        padding: 9px 14px;
        border-radius: 999px;
        font-family: 'Manrope', sans-serif;
        font-size: 12.5px;
        font-weight: 700;
        cursor: pointer;
        border: 1px solid var(--line);
        background: var(--raised);
        color: var(--ink);
        display: flex;
        align-items: center;
        gap: 7px;
        transition: background-color 160ms ease-out, border-color 160ms ease-out, color 160ms ease-out;
      }

      .inst-chip.selected {
        border-color: transparent;
        background: var(--ink);
        color: var(--bg);
      }

      .inst-dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        flex-shrink: 0;
      }

      .stepper-row {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 18px;
        margin-bottom: 18px;
      }

      .stepper-btn {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        border: none;
        background: var(--raised);
        color: var(--ink);
        font-family: 'Gabarito', sans-serif;
        font-size: 20px;
        font-weight: 800;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background-color 140ms ease-out;
      }

      .stepper-btn:hover {
        background: var(--line);
      }

      .stepper-value {
        font-family: 'Gabarito', sans-serif;
        font-size: 28px;
        font-weight: 900;
        min-width: 90px;
        text-align: center;
      }

      .date-time-row {
        display: grid;
        grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
        gap: 10px;
        margin-bottom: 18px;
      }

      .notes-textarea {
        width: 100%;
        min-height: 72px;
        resize: vertical;
        border: 1px solid var(--line);
        border-radius: 16px;
        padding: 12px 14px;
        font-family: 'Manrope', sans-serif;
        font-size: 14px;
        background: var(--raised);
        color: var(--ink);
        outline: none;
        box-sizing: border-box;
        margin-bottom: 18px;
      }

      .notes-textarea:focus {
        border-color: var(--accent);
        box-shadow: 0 0 0 1px var(--accent);
      }

      .actions-row {
        display: grid;
        grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
        gap: 10px;
      }

      .btn-cancel {
        background: var(--raised);
        color: var(--ink);
        border: none;
        border-radius: 999px;
        height: 50px;
        font-family: 'Gabarito', sans-serif;
        font-size: 14px;
        font-weight: 800;
        cursor: pointer;
      }

      .btn-save {
        background: var(--accent);
        color: var(--bg);
        border: none;
        border-radius: 999px;
        height: 50px;
        font-family: 'Gabarito', sans-serif;
        font-size: 14px;
        font-weight: 800;
        cursor: pointer;
      }

      .btn-save:hover {
        background: var(--accentHi);
      }

      .date-input,
      .time-input {
        width: 100%;
        border: 1px solid var(--line);
        border-radius: 14px;
        padding: 11px 14px;
        font-family: 'Manrope', sans-serif;
        font-size: 14px;
        background: var(--raised);
        color: var(--ink);
        outline: none;
        box-sizing: border-box;
      }
    `,
  ];

  @property({ type: Array }) instruments: Instrument[] = [];
  @property({ type: Boolean }) open = false;

  @state() private selectedInstrumentId = '';
  @state() private durationMinutes = 20;
  @state() private sessionDate = toLocalDateStr(new Date());
  @state() private sessionTime = toLocalTimeStr(new Date());
  @state() private notes = '';
  @state() private wide = typeof window !== 'undefined' ? window.matchMedia(MEDIA_QUERY).matches : true;

  private mediaQueryList?: MediaQueryList;
  private mediaQueryHandler = (e: MediaQueryListEvent) => {
    this.wide = e.matches;
  };

  connectedCallback() {
    super.connectedCallback();
    if (this.instruments.length > 0 && !this.selectedInstrumentId) {
      this.selectedInstrumentId = this.instruments[0].id;
    }
    if (typeof window !== 'undefined') {
      this.mediaQueryList = window.matchMedia(MEDIA_QUERY);
      this.wide = this.mediaQueryList.matches;
      this.mediaQueryList.addEventListener('change', this.mediaQueryHandler);
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.mediaQueryList?.removeEventListener('change', this.mediaQueryHandler);
  }

  willUpdate(changedProperties: Map<string, unknown>) {
    if (changedProperties.has('instruments') && this.instruments.length > 0 && !this.selectedInstrumentId) {
      this.selectedInstrumentId = this.instruments[0].id;
    }
    if (changedProperties.has('open') && this.open) {
      const now = new Date();
      this.sessionDate = toLocalDateStr(now);
      this.sessionTime = toLocalTimeStr(now);
    }
  }

  private adjustDuration(delta: number) {
    this.durationMinutes = Math.max(5, this.durationMinutes + delta);
  }

  private handleSave() {
    if (!this.selectedInstrumentId || this.durationMinutes <= 0) return;

    const dateParts = this.sessionDate.split('-').map(Number);
    const timeParts = (this.sessionTime || '12:00').split(':').map(Number);
    const sessionTime = new Date(
      dateParts[0],
      dateParts[1] - 1,
      dateParts[2],
      timeParts[0] || 0,
      timeParts[1] || 0,
      0,
      0
    );

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
      <div class="sheet-overlay ${this.wide ? 'wide' : ''}" @click=${(e: Event) => e.target === e.currentTarget && this.close()}>
        <div class="sheet-card">
          <div class="sheet-title-row">
            <div class="sheet-title">Log a past session</div>
            <button class="close-btn" @click=${this.close}>&times;</button>
          </div>

          <div class="section-label">Instrument</div>
          <div class="inst-chip-row">
            ${this.instruments.map(
              (inst) => html`
                <div
                  class="inst-chip ${this.selectedInstrumentId === inst.id ? 'selected' : ''}"
                  @click=${() => (this.selectedInstrumentId = inst.id)}
                >
                  <span class="inst-dot" style="background: ${inst.color}"></span>
                  ${inst.name}
                </div>
              `
            )}
          </div>

          <div class="section-label">Duration</div>
          <div class="stepper-row">
            <button type="button" class="stepper-btn" @click=${() => this.adjustDuration(-5)}>−</button>
            <div class="stepper-value">${this.durationMinutes}′</div>
            <button type="button" class="stepper-btn" @click=${() => this.adjustDuration(5)}>+</button>
          </div>

          <div class="date-time-row">
            <div>
              <div class="section-label">Date</div>
              <input
                type="date"
                class="date-input"
                .value=${this.sessionDate}
                @input=${(e: Event) => (this.sessionDate = (e.target as HTMLInputElement).value)}
              />
            </div>
            <div>
              <div class="section-label">Time</div>
              <input
                type="time"
                class="time-input"
                .value=${this.sessionTime}
                @input=${(e: Event) => (this.sessionTime = (e.target as HTMLInputElement).value)}
              />
            </div>
          </div>

          <div class="section-label">Notes</div>
          <textarea
            class="notes-textarea"
            placeholder="What did you work on?"
            .value=${this.notes}
            @input=${(e: Event) => (this.notes = (e.target as HTMLTextAreaElement).value)}
          ></textarea>

          <div class="actions-row">
            <button type="button" class="btn-cancel" @click=${this.close}>Cancel</button>
            <button type="button" class="btn-save" @click=${this.handleSave}>Add session</button>
          </div>
        </div>
      </div>
    `;
  }
}
