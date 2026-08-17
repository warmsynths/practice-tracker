import { css } from 'lit';

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
    scrollbar-width: none;
    -ms-overflow-style: none;
  }

  ::-webkit-scrollbar {
    display: none;
    width: 0px;
    height: 0px;
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

  @keyframes popIn {
    from { opacity: 0; transform: scale(0.94); }
    to { opacity: 1; transform: scale(1); }
  }

  @keyframes riseIn {
    from { opacity: 0; transform: translateY(8px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes sheetIn {
    from { opacity: 0; transform: translateY(12px) scale(0.985); }
    to { opacity: 1; transform: translateY(0) scale(1); }
  }

  @keyframes barGrow {
    from { transform: scaleY(0); }
    to { transform: scaleY(1); }
  }

  @keyframes softPulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.42; }
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
  /* Buttons */
  .btn {
    border: none;
    border-radius: 14px;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: transform 140ms ease, background-color 140ms ease, opacity 140ms ease;
    user-select: none;
  }

  .btn:active {
    transform: scale(0.98);
  }

  .btn-primary {
    background: #23241F;
    color: #F2F1EC;
    height: 46px;
    width: 100%;
  }

  .btn-primary:hover {
    background: #3A3B35;
  }

  .btn-secondary {
    background: #EFEEE9;
    color: #23241F;
    height: 44px;
  }

  .btn-secondary:hover {
    background: #E4E3DD;
  }

  .btn-danger {
    background: #B4543C;
    color: #FBF6F3;
    height: 44px;
  }

  .btn-danger:hover {
    opacity: 0.92;
  }

  /* Form Elements */
  .form-group {
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin-bottom: 14px;
  }

  .form-label {
    font-size: 11px;
    font-weight: 700;
    color: #767668;
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }

  .form-input {
    width: 100%;
    border: 1px solid #E4E3DC;
    border-radius: 12px;
    padding: 11px 14px;
    font-size: 14px;
    background: #FBFBF9;
    color: #23241F;
    outline: none;
    transition: border-color 140ms ease, box-shadow 140ms ease;
  }

  .form-input:focus {
    border-color: #23241F;
    box-shadow: 0 0 0 1px #23241F;
  }

  /* Modals */
  .modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(35, 36, 31, 0.34);
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
    background: #FBFBF9;
    border-radius: 24px;
    padding: 24px;
    box-shadow: 0 20px 48px rgba(35, 36, 31, 0.16);
    color: #23241F;
    animation: sheetIn 260ms cubic-bezier(0.16, 1, 0.3, 1) both;
  }

  .modal-title {
    font-size: 19px;
    font-weight: 700;
    letter-spacing: -0.02em;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .close-btn {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: #EFEEE9;
    color: #767668;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    cursor: pointer;
    border: none;
    transition: background-color 140ms ease, color 140ms ease;
  }

  .close-btn:hover {
    background: #E1E1DB;
    color: #23241F;
  }
`;

