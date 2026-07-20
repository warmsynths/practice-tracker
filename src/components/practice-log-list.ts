import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { sharedStyles } from '../styles/shared';
import type { PracticeEntry } from '../data/types';
import { INSTRUMENTS } from '../data/types';
import { practiceStore } from '../data/practice-store';

@customElement('practice-log-list')
export class PracticeLogList extends LitElement {
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

      .date {
        font-family: var(--font-mono);
        font-size: 0.85rem;
        color: var(--ink-dim);
        min-width: 6rem;
      }

      .instruments {
        font-family: var(--font-mono);
        font-size: 0.85rem;
        letter-spacing: 0.04em;
      }

      .minutes {
        font-family: var(--font-mono);
        font-size: 0.85rem;
        color: var(--ink-dim);
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

  @property({ attribute: false }) entries: PracticeEntry[] = [];

  private deleteEntry(id: string) {
    practiceStore.remove(id);
  }

  render() {
    const sorted = [...this.entries].sort((a, b) => b.createdAt - a.createdAt);
    if (sorted.length === 0) {
      return html`<p class="empty label">No practice logged yet.</p>`;
    }

    return html`
      <ul>
        ${sorted.map(
          (entry) => html`
            <li>
              <span class="date">${entry.date}</span>
              <span class="instruments"
                >${entry.instruments
                  .map((v) => INSTRUMENTS.find((i) => i.value === v)?.label ?? v)
                  .join(' · ')}</span
              >
              ${entry.minutes ? html`<span class="minutes">${entry.minutes}m</span>` : ''}
              <span class="notes">${entry.notes ?? ''}</span>
              <button class="quiet" @click=${() => this.deleteEntry(entry.id)} aria-label="Delete entry">✕</button>
            </li>
          `
        )}
      </ul>
    `;
  }
}
