import { css } from 'lit';

/**
 * Legacy named color export, kept for any code that still imports it directly.
 * New code should prefer the CSS custom properties set by `applyThemeVars`
 * (see ../styles/theme.ts): --bg, --card, --raised, --line, --muted, --dim,
 * --ink, --accent, --accentHi, --chart, --deep, --stage, --stageDeep,
 * --stageLine, --stageKey.
 */
export const designTokens = {
  bgApp: '#EDEDE9',
  bgPanel: '#FFFFFF',
  textPrimary: '#23241F',
  textMuted: '#767668',
  textSubtle: '#A3A297',
  textLight: '#F5F2F6',
  borderLight: '#E1E1DB',
  borderInput: '#E4E3DC',
  inputBg: '#FBFBF9',
  cardBg: '#FFFFFF',
  trackBg: '#E1E1DB',
  alert: '#B4543C',
  alertSoft: '#F6DED7',
  forest: '#6B7F6E',
  forestSoft: '#DFE9DE',
  forestDark: '#4F6353',
};

export const commonStyles = css`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -webkit-tap-highlight-color: transparent;
  }

  button, input, select, textarea {
    font-family: inherit;
  }

  [data-lift] {
    transition: transform 180ms cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 180ms ease-out;
  }

  [data-tap] {
    transition: transform 160ms cubic-bezier(0.2, 0.8, 0.2, 1), filter 160ms ease-out;
  }

  @media (hover: hover) and (pointer: fine) {
    [data-lift]:hover {
      transform: translateY(-2px);
    }
    [data-tap]:hover {
      filter: brightness(0.97);
    }
  }

  [data-lift]:active, [data-tap]:active {
    transform: scale(0.975);
  }

  @keyframes fadeOnly {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes popIn {
    0% { opacity: 0; transform: scale(0.96); }
    100% { opacity: 1; transform: scale(1); }
  }

  @keyframes riseIn {
    from { opacity: 0; transform: translateY(8px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes sheetIn {
    0% { transform: translateY(40px); opacity: 0; }
    60% { transform: translateY(-4px); opacity: 1; }
    100% { transform: translateY(0); opacity: 1; }
  }

  @keyframes toastIn {
    0% { transform: translate(-50%, 20px); opacity: 0; }
    100% { transform: translate(-50%, 0); opacity: 1; }
  }

  @keyframes stampOnce {
    0% { transform: scale(1.9) rotate(-14deg); opacity: 0; }
    12% { transform: scale(1) rotate(-6deg); opacity: 1; }
    85% { transform: scale(1) rotate(-6deg); opacity: 1; }
    100% { transform: scale(0.9) rotate(-6deg); opacity: 0; }
  }

  @keyframes fall {
    0% { transform: translateY(-80px) rotate(0); opacity: 0; }
    6% { opacity: 1; }
    100% { transform: translateY(110vh) rotate(560deg); opacity: 1; }
  }

  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  @keyframes barGrow {
    from { transform: scaleY(0); }
    to { transform: scaleY(1); }
  }

  @keyframes softPulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.42; }
  }

  @keyframes breathe {
    0%, 100% { opacity: 0.5; }
    50% { opacity: 1; }
  }

  @keyframes halo {
    0% { transform: scale(0.6); opacity: 0.45; }
    70%, 100% { transform: scale(2.1); opacity: 0; }
  }

  @keyframes tinyWobble {
    0%, 100% { transform: rotate(-2.5deg); }
    50% { transform: rotate(2.5deg); }
  }

  @keyframes drift {
    0%, 100% { transform: scale(1) translateY(0); }
    50% { transform: scale(1.007) translateY(-1px); }
  }

  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 120ms !important;
    }
    [data-lift]:hover, [data-lift]:active, [data-tap]:active {
      transform: none !important;
    }
  }

  /* Buttons — pill-shaped, theme-driven */
  .btn {
    border: none;
    border-radius: 999px;
    font-family: 'Gabarito', sans-serif;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: transform 140ms ease-out, background-color 140ms ease-out, opacity 140ms ease-out;
    user-select: none;
  }

  .btn:active {
    transform: scale(0.97);
  }

  .btn-primary {
    background: var(--accent, #FF7A5C);
    color: var(--bg, #2B1C33);
    height: 48px;
    width: 100%;
  }

  .btn-primary:hover {
    background: var(--accentHi, #FF8C72);
  }

  .btn-secondary {
    background: var(--raised, #46304F);
    color: var(--ink, #F5E9DA);
    height: 46px;
  }

  .btn-secondary:hover {
    filter: brightness(1.08);
  }

  .btn-danger {
    background: var(--accent, #FF7A5C);
    color: var(--bg, #2B1C33);
    height: 46px;
  }

  .btn-danger:hover {
    opacity: 0.9;
  }

  /* Form Elements */
  .form-group {
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin-bottom: 14px;
  }

  .form-label {
    font-family: 'Manrope', sans-serif;
    font-size: 11px;
    font-weight: 800;
    color: var(--muted, #767668);
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }

  .form-input {
    width: 100%;
    border: 1px solid var(--line, #E4E3DC);
    border-radius: 14px;
    padding: 11px 14px;
    font-family: 'Manrope', sans-serif;
    font-size: 14px;
    background: var(--raised, #FBFBF9);
    color: var(--ink, #23241F);
    outline: none;
    transition: border-color 140ms ease-out, box-shadow 140ms ease-out;
  }

  .form-input:focus {
    border-color: var(--accent, #23241F);
    box-shadow: 0 0 0 1px var(--accent, #23241F);
  }

  /* Modals */
  .modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(20, 10, 15, 0.66);
    backdrop-filter: blur(4px);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    z-index: 1000;
    animation: fadeOnly 160ms ease-out both;
  }

  .modal-card {
    width: 100%;
    max-width: 420px;
    max-height: 88vh;
    overflow-y: auto;
    background: var(--card, #FBFBF9);
    border-radius: 28px;
    padding: 24px;
    box-shadow: 0 30px 60px -20px rgba(10, 5, 15, 0.7);
    color: var(--ink, #23241F);
    animation: popIn 220ms cubic-bezier(0.2, 0.8, 0.2, 1) both;
  }

  .modal-title {
    font-family: 'Gabarito', sans-serif;
    font-size: 19px;
    font-weight: 800;
    letter-spacing: -0.02em;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .close-btn {
    width: 34px;
    height: 34px;
    border-radius: 50%;
    background: var(--raised, #EFEEE9);
    color: var(--muted, #767668);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    cursor: pointer;
    border: none;
    transition: background-color 140ms ease-out, color 140ms ease-out;
  }

  .close-btn:hover {
    filter: brightness(1.1);
    color: var(--ink, #23241F);
  }
`;
