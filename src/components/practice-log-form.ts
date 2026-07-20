import { LitElement, css, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { sharedStyles } from '../styles/shared';
import { INSTRUMENTS, type Instrument, type PracticeEntry } from '../data/types';
import { makeId } from '../data/store';
import { practiceStore, todayKey } from '../data/practice-store';

@customElement('practice-log-form')
export class PracticeLogForm extends LitElement {
  static styles = [
    sharedStyles,
    css`
      :host {
        display: block;
      }

      form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }

      .row {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
      }

      .row > label {
        flex: 1;
        min-width: 10rem;
      }

      .actions {
        display: flex;
        justify-content: flex-end;
      }
    `,
  ];

  @state() private date = todayKey();
  @state() private selected = new Set<Instrument>();
  @state() private minutes = '';
  @state() private notes = '';

  private toggle(instrument: Instrument) {
    const next = new Set(this.selected);
    next.has(instrument) ? next.delete(instrument) : next.add(instrument);
    this.selected = next;
  }

  private submit(e: Event) {
    e.preventDefault();
    if (this.selected.size === 0) return;

    const entry: PracticeEntry = {
      id: makeId(),
      date: this.date,
      instruments: [...this.selected],
      minutes: this.minutes ? Number(this.minutes) : undefined,
      notes: this.notes || undefined,
      createdAt: Date.now(),
    };
    practiceStore.add(entry);

    this.selected = new Set();
    this.minutes = '';
    this.notes = '';
    this.date = todayKey();
  }

  render() {
    return html`
      <form @submit=${this.submit}>
        <fieldset>
          ${INSTRUMENTS.map(
            (i) => html`
              <label class="check">
                <input
                  type="checkbox"
                  .checked=${this.selected.has(i.value)}
                  @change=${() => this.toggle(i.value)}
                />
                ${i.label}
              </label>
            `
          )}
        </fieldset>

        <div class="row">
          <label>
            <span class="label">Date</span>
            <input
              type="date"
              .value=${this.date}
              @input=${(e: Event) => (this.date = (e.target as HTMLInputElement).value)}
            />
          </label>
          <label>
            <span class="label">Minutes (optional)</span>
            <input
              type="number"
              min="0"
              placeholder="—"
              .value=${this.minutes}
              @input=${(e: Event) => (this.minutes = (e.target as HTMLInputElement).value)}
            />
          </label>
        </div>

        <label>
          <span class="label">Notes</span>
          <textarea
            placeholder="What did you work on?"
            .value=${this.notes}
            @input=${(e: Event) => (this.notes = (e.target as HTMLTextAreaElement).value)}
          ></textarea>
        </label>

        <div class="actions">
          <button type="submit" ?disabled=${this.selected.size === 0}>Log practice</button>
        </div>
      </form>
    `;
  }
}
