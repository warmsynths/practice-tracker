import { LitElement, css, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { sharedStyles } from '../styles/shared';
import type { PracticeEntry } from '../data/types';
import { practiceStore } from '../data/practice-store';
import './streak-chain';
import './practice-log-form';
import './practice-log-list';

@customElement('practice-view')
export class PracticeView extends LitElement {
  static styles = [
    sharedStyles,
    css`
      :host {
        display: block;
      }

      section {
        margin-bottom: 2.5rem;
      }

      h2 {
        font-family: var(--font-display);
        font-weight: 400;
        font-size: 1.1rem;
        margin: 0 0 1rem;
      }
    `,
  ];

  @state() private entries: PracticeEntry[] = [];
  private unsubscribe?: () => void;

  connectedCallback() {
    super.connectedCallback();
    this.entries = practiceStore.getAll();
    this.unsubscribe = practiceStore.subscribe(() => {
      this.entries = practiceStore.getAll();
    });
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.unsubscribe?.();
  }

  render() {
    return html`
      <section>
        <streak-chain .entries=${this.entries}></streak-chain>
      </section>

      <section>
        <h2 class="display">Log today's practice</h2>
        <practice-log-form></practice-log-form>
      </section>

      <section>
        <h2 class="display">History</h2>
        <practice-log-list .entries=${this.entries}></practice-log-list>
      </section>
    `;
  }
}
