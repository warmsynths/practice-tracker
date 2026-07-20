import { LitElement, css, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { sharedStyles } from '../styles/shared';
import './practice-view';
import './dog-view';

type Tab = 'practice' | 'dog';

const TAB_KEY = 'ledger.tab.v1';

@customElement('app-root')
export class AppRoot extends LitElement {
  static styles = [
    sharedStyles,
    css`
      :host {
        display: block;
      }

      .wrap {
        max-width: 42rem;
        margin: 0 auto;
        padding: 3rem 1.5rem 6rem;
      }

      header {
        margin-bottom: 2.5rem;
      }

      h1 {
        font-family: var(--font-display);
        font-weight: 400;
        font-size: 2.2rem;
        letter-spacing: -0.01em;
        margin: 0 0 1.4rem;
      }

      nav {
        display: flex;
        gap: 1.75rem;
        border-bottom: 1px solid var(--rule);
      }

      nav button {
        all: unset;
        cursor: pointer;
        font-family: var(--font-mono);
        font-size: 0.78rem;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: var(--ink-dim);
        padding-bottom: 0.9rem;
        border-bottom: 2px solid transparent;
      }

      nav button.active {
        color: var(--ink);
        border-bottom-color: var(--accent);
      }
    `,
  ];

  @state() private tab: Tab = (localStorage.getItem(TAB_KEY) as Tab) || 'practice';

  private setTab(tab: Tab) {
    this.tab = tab;
    localStorage.setItem(TAB_KEY, tab);
  }

  render() {
    return html`
      <div class="wrap">
        <header>
          <h1 class="display">Ledger</h1>
          <nav>
            <button class=${this.tab === 'practice' ? 'active' : ''} @click=${() => this.setTab('practice')}>
              Practice
            </button>
            <button class=${this.tab === 'dog' ? 'active' : ''} @click=${() => this.setTab('dog')}>Dog</button>
          </nav>
        </header>

        ${this.tab === 'practice' ? html`<practice-view></practice-view>` : html`<dog-view></dog-view>`}
      </div>
    `;
  }
}
