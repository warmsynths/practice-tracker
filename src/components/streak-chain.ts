import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { sharedStyles } from '../styles/shared';
import type { PracticeEntry } from '../data/types';
import { INSTRUMENTS } from '../data/types';
import { computeStreak, entriesByDate, toDateKey, todayKey } from '../data/practice-store';

const DAYS_SHOWN = 98;

@customElement('streak-chain')
export class StreakChain extends LitElement {
  static styles = [
    sharedStyles,
    css`
      :host {
        display: block;
      }

      .stats {
        display: flex;
        gap: 2.5rem;
        align-items: baseline;
        margin-bottom: 1.5rem;
        flex-wrap: wrap;
      }

      .stat-block .stat {
        font-size: 3.4rem;
      }

      .stat-block.current .stat {
        color: var(--accent);
      }

      .stat-block .label {
        margin-top: 0.2rem;
      }

      .chain-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(15px, 1fr));
        gap: 3px;
      }

      .cell {
        aspect-ratio: 1;
        background: transparent;
        box-shadow: inset 0 0 0 1px var(--rule);
      }

      .cell.filled {
        background: var(--ink);
        box-shadow: none;
      }

      .cell.today.filled {
        background: var(--accent);
      }

      .cell.today.empty {
        box-shadow: inset 0 0 0 1px var(--accent);
      }

      .range {
        margin-top: 0.6rem;
      }
    `,
  ];

  @property({ attribute: false }) entries: PracticeEntry[] = [];

  render() {
    const streak = computeStreak(this.entries);
    const byDate = entriesByDate(this.entries);
    const today = todayKey();

    const cells = [];
    const cursor = new Date();
    cursor.setDate(cursor.getDate() - (DAYS_SHOWN - 1));
    let rangeStart = '';
    for (let i = 0; i < DAYS_SHOWN; i++) {
      const key = toDateKey(cursor);
      if (i === 0) rangeStart = key;
      const dayEntries = byDate.get(key);
      const filled = !!dayEntries?.length;
      const codes = dayEntries
        ?.flatMap((e) => e.instruments)
        .map((i) => INSTRUMENTS.find((x) => x.value === i)?.code ?? '')
        .join('');
      cells.push(html`<div
        class="cell ${filled ? 'filled' : 'empty'} ${key === today ? 'today' : ''}"
        title="${key}${codes ? ` — ${codes}` : ''}"
      ></div>`);
      cursor.setDate(cursor.getDate() + 1);
    }

    return html`
      <div class="stats">
        <div class="stat-block current">
          <div class="stat">${streak.current}</div>
          <div class="label">Current Chain</div>
        </div>
        <div class="stat-block">
          <div class="stat">${streak.longest}</div>
          <div class="label">Longest Chain</div>
        </div>
      </div>
      <div class="chain-grid">${cells}</div>
      <div class="range label">${rangeStart} — ${today}</div>
    `;
  }
}
