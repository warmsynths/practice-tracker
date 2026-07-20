import { LitElement, css, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { sharedStyles } from '../styles/shared';
import { DOG_EVENT_TYPES, type DogEvent, type DogEventType } from '../data/types';
import { makeId } from '../data/store';
import { dogStore } from '../data/dog-store';

function nowLocalInputValue(): string {
  const d = new Date();
  d.setSeconds(0, 0);
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
  return d.toISOString().slice(0, 16);
}

@customElement('dog-event-form')
export class DogEventForm extends LitElement {
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

  @state() private type: DogEventType = 'poop';
  @state() private timestamp = nowLocalInputValue();
  @state() private location = '';
  @state() private medicineName = '';
  @state() private notes = '';

  private submit(e: Event) {
    e.preventDefault();

    const event: DogEvent = {
      id: makeId(),
      type: this.type,
      timestamp: new Date(this.timestamp).getTime(),
      location: this.location || undefined,
      medicineName: this.type === 'medicine' ? this.medicineName || undefined : undefined,
      notes: this.notes || undefined,
      createdAt: Date.now(),
    };
    dogStore.add(event);

    this.location = '';
    this.medicineName = '';
    this.notes = '';
    this.timestamp = nowLocalInputValue();
  }

  render() {
    return html`
      <form @submit=${this.submit}>
        <fieldset>
          ${DOG_EVENT_TYPES.map(
            (t) => html`
              <label class="check">
                <input
                  type="radio"
                  name="type"
                  .checked=${this.type === t.value}
                  @change=${() => (this.type = t.value)}
                />
                ${t.label}
              </label>
            `
          )}
        </fieldset>

        <div class="row">
          <label>
            <span class="label">When</span>
            <input
              type="datetime-local"
              .value=${this.timestamp}
              @input=${(e: Event) => (this.timestamp = (e.target as HTMLInputElement).value)}
            />
          </label>
          ${this.type === 'medicine'
            ? html`
                <label>
                  <span class="label">Medicine</span>
                  <input
                    type="text"
                    placeholder="e.g. Heartgard"
                    .value=${this.medicineName}
                    @input=${(e: Event) => (this.medicineName = (e.target as HTMLInputElement).value)}
                  />
                </label>
              `
            : html`
                <label>
                  <span class="label">Where</span>
                  <input
                    type="text"
                    placeholder="e.g. back yard"
                    .value=${this.location}
                    @input=${(e: Event) => (this.location = (e.target as HTMLInputElement).value)}
                  />
                </label>
              `}
        </div>

        <label>
          <span class="label">Notes</span>
          <textarea
            placeholder="Anything worth noting?"
            .value=${this.notes}
            @input=${(e: Event) => (this.notes = (e.target as HTMLTextAreaElement).value)}
          ></textarea>
        </label>

        <div class="actions">
          <button type="submit">Log event</button>
        </div>
      </form>
    `;
  }
}
