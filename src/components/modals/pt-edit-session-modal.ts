import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { Instrument, Session } from '../../types';
import { commonStyles } from '../../styles/shared-styles';

@customElement('pt-edit-session-modal')
export class PtEditSessionModal extends LitElement {
  static styles = [
    commonStyles,
    css`
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
      .actions-row {
        display: flex;
        gap: 8px;
        margin-top: 16px;
      }
    `,
  ];

  @property({ type: Array }) instruments: Instrument[] = [];
  @property({ type: Object }) session: Session | null = null;
  @property({ type: Boolean }) open = false;

  @state() private instrumentId = '';
  @state() private duration = 0;
  @state() private sessionDate = '';
  @state() private notes = '';

  willUpdate(changedProperties: Map<string, unknown>) {
    if (changedProperties.has('session') && this.session) {
      this.instrumentId = this.session.instrumentId;
      this.duration = this.session.duration;
      this.sessionDate = new Date(this.session.start).toISOString().slice(0, 10);
      this.notes = this.session.notes || '';
    }
  }

  private handleSave() {
    if (!this.session || !this.instrumentId || this.duration <= 0) return;

    const dateParts = this.sessionDate.split('-');
    const newStart = new Date(this.session.start);
    if (dateParts.length === 3) {
      newStart.setFullYear(parseInt(dateParts[0]), parseInt(dateParts[1]) - 1, parseInt(dateParts[2]));
    }
    const newEnd = new Date(newStart.getTime() + this.duration * 60000);

    const updatedSession: Session = {
      ...this.session,
      instrumentId: this.instrumentId,
      start: newStart.toISOString(),
      end: newEnd.toISOString(),
      duration: Math.round(this.duration),
      notes: this.notes.trim() || undefined,
    };

    this.dispatchEvent(
      new CustomEvent('update-session', {
        detail: { session: updatedSession },
        bubbles: true,
        composed: true,
      })
    );
    this.close();
  }

  private handleDelete() {
    if (!this.session) return;
    if (confirm('Are you sure you want to delete this practice session?')) {
      this.dispatchEvent(
        new CustomEvent('delete-session', {
          detail: { sessionId: this.session.id },
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
    if (!this.open || !this.session) return html``;

    return html`
      <div class="modal-overlay" @click=${(e: Event) => e.target === e.currentTarget && this.close()}>
        <div class="modal-card">
          <div class="modal-title">
            <span>Edit Practice Session</span>
            <button class="close-btn" @click=${this.close}>&times;</button>
          </div>

          <div class="form-group">
            <label class="form-label">Instrument</label>
            <div class="inst-radio-group">
              ${this.instruments.map(
                (inst) => html`
                  <div
                    class="inst-radio ${this.instrumentId === inst.id ? 'selected' : ''}"
                    @click=${() => (this.instrumentId = inst.id)}
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
            <input
              type="number"
              min="1"
              max="600"
              class="form-input"
              .value=${String(this.duration)}
              @input=${(e: Event) =>
                (this.duration = parseInt((e.target as HTMLInputElement).value) || 0)}
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
            <label class="form-label">Notes</label>
            <input
              type="text"
              class="form-input"
              .value=${this.notes}
              @input=${(e: Event) => (this.notes = (e.target as HTMLInputElement).value)}
            />
          </div>

          <div class="actions-row">
            <button class="btn btn-danger" style="flex: 1;" @click=${this.handleDelete}>
              Delete
            </button>
            <button class="btn btn-primary" style="flex: 2;" @click=${this.handleSave}>
              Save
            </button>
          </div>
        </div>
      </div>
    `;
  }
}
