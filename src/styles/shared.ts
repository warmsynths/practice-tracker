import { css } from 'lit';

/** Shared typographic building blocks, included via `static styles` on components. */
export const sharedStyles = css`
  :host {
    font-family: var(--font-body);
    color: var(--ink);
  }

  .label {
    font-family: var(--font-mono);
    font-size: 0.7rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--ink-dim);
  }

  .display {
    font-family: var(--font-display);
    font-weight: 400;
    letter-spacing: -0.01em;
  }

  .mono {
    font-family: var(--font-mono);
  }

  .rule {
    border: none;
    border-top: 1px solid var(--rule);
    margin: 0;
  }

  .stat {
    font-family: var(--font-display);
    font-weight: 400;
    font-variant-numeric: tabular-nums;
    line-height: 1;
  }

  input,
  textarea,
  select {
    font: inherit;
    color: var(--ink);
    background: transparent;
    border: 1px solid var(--rule-strong);
    padding: 0.55em 0.7em;
    border-radius: 0;
  }

  input:focus,
  textarea:focus,
  select:focus {
    outline: none;
    border-color: var(--accent);
  }

  textarea {
    resize: vertical;
    min-height: 3.5em;
  }

  label {
    display: flex;
    flex-direction: column;
    gap: 0.35em;
  }

  button {
    font-family: var(--font-mono);
    font-size: 0.78rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    background: var(--ink);
    color: var(--paper);
    border: 1px solid var(--ink);
    padding: 0.7em 1.1em;
    cursor: pointer;
    border-radius: 0;
  }

  button:hover {
    background: var(--accent);
    border-color: var(--accent);
  }

  button.ghost {
    background: transparent;
    color: var(--ink);
  }

  button.ghost:hover {
    background: transparent;
    color: var(--accent);
    border-color: var(--accent);
  }

  button.quiet {
    background: transparent;
    color: var(--ink-dim);
    border: none;
    padding: 0.2em 0.4em;
  }

  button.quiet:hover {
    background: transparent;
    color: var(--accent);
  }

  fieldset {
    border: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 0.6em 1.2em;
  }

  fieldset .check {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5em;
    font-family: var(--font-mono);
    font-size: 0.85rem;
  }

  fieldset .check input {
    width: auto;
    accent-color: var(--accent);
  }
`;
