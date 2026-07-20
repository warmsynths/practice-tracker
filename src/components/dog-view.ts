import { LitElement, css, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { sharedStyles } from '../styles/shared';
import type { DogEvent } from '../data/types';
import { dogStore } from '../data/dog-store';
import './dog-event-form';
import './dog-event-list';

@customElement('dog-view')
export class DogView extends LitElement {
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

  @state() private events: DogEvent[] = [];
  private unsubscribe?: () => void;

  connectedCallback() {
    super.connectedCallback();
    this.events = dogStore.getAll();
    this.unsubscribe = dogStore.subscribe(() => {
      this.events = dogStore.getAll();
    });
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.unsubscribe?.();
  }

  render() {
    return html`
      <section>
        <h2 class="display">Log an event</h2>
        <dog-event-form></dog-event-form>
      </section>

      <section>
        <h2 class="display">History</h2>
        <dog-event-list .events=${this.events}></dog-event-list>
      </section>
    `;
  }
}
