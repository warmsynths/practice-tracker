import { css } from 'lit';

export const designTokens = {
  bgApp: '#EDEDE9',
  bgOuter: '#8F8D88',
  textPrimary: '#23241F',
  textMuted: '#767668',
  textLight: '#F5F2F6',
  borderLight: '#E1E1DB',
  borderInput: '#E4E3DC',
  inputBg: '#FBFBF9',
  cardBg: '#FFFFFF',
  trackBg: '#E1E1DB',
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

  .btn {
    border: none;
    border-radius: 12px;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.1s ease, opacity 0.15s ease;
  }

  .btn:active {
    transform: scale(0.97);
  }

  .btn-primary {
    background: #23241F;
    color: #F2F1EC;
    height: 46px;
    width: 100%;
  }

  .btn-secondary {
    background: #E1E1DB;
    color: #23241F;
    height: 42px;
  }

  .btn-danger {
    background: #C95A54;
    color: #FFF;
    height: 42px;
  }

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
    border-radius: 10px;
    padding: 10px 12px;
    font-size: 14px;
    background: #FBFBF9;
    color: #23241F;
    outline: none;
    transition: border-color 0.15s ease;
  }

  .form-input:focus {
    border-color: #23241F;
  }

  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(35, 36, 31, 0.45);
    backdrop-filter: blur(4px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    padding: 20px;
    animation: fadeIn 0.15s ease-out;
  }

  .modal-card {
    background: #EDEDE9;
    border-radius: 24px;
    width: 100%;
    max-width: 340px;
    padding: 22px;
    box-shadow: 0 16px 36px rgba(0, 0, 0, 0.18);
    color: #23241F;
    max-height: 85vh;
    overflow-y: auto;
    animation: slideUp 0.18s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .modal-title {
    font-size: 18px;
    font-weight: 700;
    letter-spacing: -0.02em;
    margin-bottom: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .close-btn {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: #E1E1DB;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    color: #767668;
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes slideUp {
    from { transform: translateY(12px) scale(0.98); opacity: 0; }
    to { transform: translateY(0) scale(1); opacity: 1; }
  }
`;
