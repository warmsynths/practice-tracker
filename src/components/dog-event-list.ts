import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { sharedStyles } from '../styles/shared';
import { DOG_EVENT_TYPES, type DogEvent } from '../data/types';
import { dogStore } from '../data/dog-store';

function formatTimestamp(ts: number): string {
  const d = new Date(ts);
  return d.toLocaleString(undefined, {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  });
}

@customElement('dog-event-list')
export class DogEventList extends LitElement {
  static styles = [
    sharedStyles,
    css`
      :host {
        display: block;
      }

      ul {
        list-style: none;
        margin: 0;
        padding: 0;
      }

      li {
        display: flex;
        align-items: baseline;
        gap: 1rem;
        padding: 0.85rem 0;
        border-bottom: 1px solid var(--rule);
      }

      .when {
        font-family: var(--font-mono);
        font-size: 0.85rem;
        color: var(--ink-dim);
        min-width: 9rem;
      }

      .type {
        font-family: var(--font-mono);
        font-size: 0.85rem;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        min-width: 5rem;
      }

      .type.poop,
      .type.pee {
        color: var(--ink);
      }

      .type.medicine {
        color: var(--accent);
      }

      .detail {
        color: var(--ink-dim);
        font-size: 0.9rem;
      }

      .notes {
        flex: 1;
        min-width: 8rem;
        color: var(--ink-dim);
        font-size: 0.9rem;
      }

      .empty {
        color: var(--ink-dim);
        padding: 1rem 0;
      }
    `,
  ];

  @property({ attribute: false }) events: DogEvent[] = [];

  private deleteEvent(id: string) {
    dogStore.remove(id);
  }

  render() {
    const sorted = [...this.events].sort((a, b) => b.timestamp - a.timestamp);
    if (sorted.length === 0) {
      return html`<p class="empty label">No events logged yet.</p>`;
    }

    return html`
      <ul>
        ${sorted.map((event) => {
          const label = DOG_EVENT_TYPES.find((t) => t.value === event.type)?.label ?? event.type;
          const detail = event.type === 'medicine' ? event.medicineName : event.location;
          return html`
            <li>
              <span class="when">${formatTimestamp(event.timestamp)}</span>
              <span class="type ${event.type}">${label}</span>
              <span class="detail">${detail ?? ''}</span>
              <span class="notes">${event.notes ?? ''}</span>
              <button class="quiet" @click=${() => this.deleteEvent(event.id)} aria-label="Delete event">✕</button>
            </li>
          `;
        })}
      </ul>
    `;
  }
}
