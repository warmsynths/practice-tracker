import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { commonStyles } from '../../styles/shared-styles';
import { authService } from '../../services/auth-service';
import { playClickSound, playEndSound } from '../../utils/audio-utils';
import { practiceStore } from '../../store/practice-store';

export type AuthTab = 'signin' | 'create' | 'magic' | 'reset-password';

@customElement('pt-auth-modal')
export class PtAuthModal extends LitElement {
  static styles = [
    commonStyles,
    css`
      :host {
        display: block;
      }

      .modal-backdrop {
        position: fixed;
        inset: 0;
        z-index: 1000;
        background: rgba(35, 36, 31, 0.44);
        backdrop-filter: blur(4px);
        -webkit-backdrop-filter: blur(4px);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 24px;
        overflow-y: auto;
        animation: fadeOnly 180ms ease-out both;
      }

      .modal-card {
        width: 380px;
        max-width: 100%;
        background: #FBFBF9;
        border-radius: 24px;
        padding: 24px;
        display: flex;
        flex-direction: column;
        gap: 18px;
        box-shadow: 0 30px 70px -32px rgba(35, 36, 31, 0.55);
        animation: riseIn 260ms cubic-bezier(0.2, 0.8, 0.2, 1) both;
        color: #23241F;
        box-sizing: border-box;
      }

      /* Header */
      .modal-header {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 16px;
      }

      .title-main {
        font-size: 20px;
        font-weight: 700;
        letter-spacing: -0.02em;
        line-height: 1.2;
        color: #23241F;
      }

      .subtitle-italic {
        font-family: 'Instrument Serif', serif;
        font-style: italic;
        font-size: 16px;
        color: #767668;
        margin-top: 3px;
        line-height: 1.2;
      }

      .close-round-btn {
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
        flex-shrink: 0;
        border: none;
        transition: background-color 150ms ease-out, color 150ms ease-out;
      }

      .close-round-btn:hover {
        background: #E4E3DD;
        color: #23241F;
      }

      /* Segmented 3-Tab Control */
      .segmented-tabs-track {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 3px;
        background: #EFEEE9;
        border-radius: 13px;
        padding: 3px;
      }

      .tab-choice-btn {
        border: none;
        border-radius: 10px;
        height: 34px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        font-weight: 700;
        cursor: pointer;
        white-space: nowrap;
        background: transparent;
        color: #767668;
        transition: background-color 160ms ease-out, color 160ms ease-out, box-shadow 160ms ease-out;
        user-select: none;
      }

      .tab-choice-btn.active {
        background: #FFFFFF;
        color: #23241F;
        box-shadow: 0 2px 7px -3px rgba(35, 36, 31, 0.3);
      }

      /* Form Fields */
      .fields-stack {
        display: flex;
        flex-direction: column;
        gap: 14px;
      }

      .field-block {
        display: flex;
        flex-direction: column;
        gap: 7px;
      }

      .field-label {
        font-size: 9.5px;
        letter-spacing: 0.13em;
        color: #A3A297;
        font-weight: 700;
        text-transform: uppercase;
      }

      .label-row {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
        gap: 12px;
      }

      .forgot-action {
        font-size: 11.5px;
        color: #4F6353;
        font-weight: 700;
        cursor: pointer;
        background: none;
        border: none;
        padding: 0;
        transition: opacity 140ms ease;
      }

      .forgot-action:hover {
        opacity: 0.8;
        text-decoration: underline;
      }

      .text-input {
        font-family: inherit;
        font-size: 14px;
        color: #23241F;
        background: #FFFFFF;
        border: 1px solid #E7E6DF;
        border-radius: 12px;
        height: 48px;
        padding: 0 15px;
        outline: none;
        width: 100%;
        box-sizing: border-box;
        transition: border-color 140ms ease, box-shadow 140ms ease;
      }

      .text-input.pw {
        letter-spacing: 0.08em;
      }

      .text-input:focus {
        border-color: #4F6353;
        box-shadow: 0 0 0 1px #4F6353;
      }

      .helper-copy {
        font-size: 13px;
        line-height: 1.6;
        color: #767668;
        text-wrap: pretty;
      }

      .adopt-callout {
        display: flex;
        gap: 10px;
        align-items: flex-start;
        background: #F1F0EA;
        border-radius: 13px;
        padding: 12px 13px;
      }

      .adopt-dot {
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background: #8A7B94;
        margin-top: 6px;
        flex-shrink: 0;
      }

      .adopt-text {
        font-size: 12.5px;
        line-height: 1.55;
        color: #4A4945;
        text-wrap: pretty;
      }

      /* Actions Stack */
      .actions-stack {
        display: flex;
        flex-direction: column;
        gap: 14px;
      }

      .primary-forest-btn {
        background: #4F6353;
        color: #F7F6F1;
        border-radius: 14px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        font-weight: 700;
        cursor: pointer;
        border: none;
        width: 100%;
        transition: background-color 160ms ease-out, transform 120ms ease;
      }

      .primary-forest-btn:hover {
        background: #445646;
      }

      .primary-forest-btn:active {
        transform: scale(0.985);
      }

      .primary-forest-btn:disabled {
        opacity: 0.6;
        cursor: not-allowed;
        transform: none;
      }

      .or-divider {
        display: flex;
        align-items: center;
        gap: 12px;
      }

      .or-line {
        flex: 1;
        height: 1px;
        background: #E7E6DF;
      }

      .or-text {
        font-size: 10.5px;
        letter-spacing: 0.1em;
        color: #A3A297;
        font-weight: 700;
      }

      .google-btn {
        background: #FFFFFF;
        border: 1px solid #DDDCD4;
        border-radius: 14px;
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        font-size: 13.5px;
        font-weight: 700;
        color: #23241F;
        cursor: pointer;
        width: 100%;
        transition: background-color 150ms ease-out, transform 120ms ease;
      }

      .google-btn:hover {
        background: #F4F3EE;
      }

      .google-btn:active {
        transform: scale(0.985);
      }

      .google-btn:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }

      .google-icon-circle {
        width: 19px;
        height: 19px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .switch-row {
        display: flex;
        justify-content: center;
        gap: 6px;
        font-size: 12.5px;
        color: #767668;
        text-align: center;
      }

      .switch-action {
        color: #4F6353;
        font-weight: 700;
        cursor: pointer;
        text-decoration: underline;
        text-underline-offset: 3px;
        background: none;
        border: none;
        padding: 0;
        font-size: 12.5px;
      }

      .switch-action:hover {
        opacity: 0.85;
      }

      /* Alerts */
      .alert-banner {
        border-radius: 12px;
        padding: 10px 14px;
        font-size: 12.5px;
        line-height: 1.45;
      }

      .alert-error {
        background: #FBEAE8;
        border: 1px solid #F2B8B5;
        color: #B3261E;
      }

      .alert-success {
        background: #EBF3EC;
        border: 1px solid #B8DCBE;
        color: #2E6930;
      }
    `,
  ];

  @property({ type: Boolean }) open = false;
  @property({ type: String }) initialTab: AuthTab = 'signin';

  @state() private activeTab: AuthTab = 'signin';
  @state() private email = '';
  @state() private password = '';
  @state() private confirmPassword = '';
  @state() private isLoading = false;
  @state() private errorMessage: string | null = null;
  @state() private successMessage: string | null = null;

  willUpdate(changedProps: Map<string, unknown>) {
    if (changedProps.has('open') && this.open) {
      if (this.initialTab) {
        this.activeTab = this.initialTab;
      }
      this.errorMessage = null;
      this.successMessage = null;
    }
  }

  private close() {
    this.errorMessage = null;
    this.successMessage = null;
    this.password = '';
    this.confirmPassword = '';
    this.dispatchEvent(new CustomEvent('close-modal', { bubbles: true, composed: true }));
  }

  private setTab(tab: AuthTab) {
    this.activeTab = tab;
    this.errorMessage = null;
    this.successMessage = null;
    playClickSound(practiceStore.getSettings().soundEnabled);
  }

  private handleKeyDown(e: KeyboardEvent) {
    if (e.key === 'Escape') {
      this.close();
    }
  }

  private async handleForgotPassword() {
    if (!this.email.trim() || !this.email.includes('@')) {
      this.errorMessage = 'Please enter your email address first to reset password.';
      return;
    }

    this.isLoading = true;
    this.errorMessage = null;
    this.successMessage = null;

    try {
      const res = await authService.resetPasswordForEmail(this.email);
      if (res.success) {
        playEndSound(practiceStore.getSettings().soundEnabled);
        this.successMessage = res.message || 'Password reset link sent to your email!';
      } else {
        this.errorMessage = res.message || 'Failed to send password reset email.';
      }
    } finally {
      this.isLoading = false;
    }
  }

  private async handleGoogleSignIn() {
    this.isLoading = true;
    this.errorMessage = null;
    this.successMessage = null;

    try {
      const res = await authService.signInWithOAuth('google');
      if (res.success) {
        playEndSound(practiceStore.getSettings().soundEnabled);
        this.close();
      } else {
        this.errorMessage = res.message || 'Google sign in failed.';
      }
    } finally {
      this.isLoading = false;
    }
  }

  private async handleSubmit(e: Event) {
    e.preventDefault();
    this.errorMessage = null;
    this.successMessage = null;

    if (this.activeTab === 'reset-password') {
      if (!this.password || this.password.length < 6) {
        this.errorMessage = 'Password must be at least 6 characters long.';
        return;
      }
      if (this.password !== this.confirmPassword) {
        this.errorMessage = 'Passwords do not match.';
        return;
      }

      this.isLoading = true;
      try {
        const res = await authService.updateUserPassword(this.password);
        if (res.success) {
          playEndSound(practiceStore.getSettings().soundEnabled);
          this.successMessage = 'Password updated successfully!';
          this.password = '';
          this.confirmPassword = '';
          if (typeof window !== 'undefined' && window.history) {
            window.history.replaceState(null, '', window.location.pathname + window.location.search);
          }
          setTimeout(() => {
            this.close();
          }, 1500);
        } else {
          this.errorMessage = res.message || 'Failed to update password.';
        }
      } finally {
        this.isLoading = false;
      }
      return;
    }

    const emailTrimmed = this.email.trim();
    if (!emailTrimmed || !emailTrimmed.includes('@')) {
      this.errorMessage = 'Please enter a valid email address.';
      return;
    }

    if (this.activeTab === 'magic') {
      this.isLoading = true;
      try {
        const res = await authService.signInWithOtp(emailTrimmed);
        if (res.success) {
          playEndSound(practiceStore.getSettings().soundEnabled);
          this.successMessage = res.message || "We've sent a magic login link to your inbox!";
          this.dispatchEvent(
            new CustomEvent('magic-link-sent', {
              detail: { email: emailTrimmed },
              bubbles: true,
              composed: true,
            })
          );
        } else {
          this.errorMessage = res.message || 'Failed to send magic link.';
        }
      } finally {
        this.isLoading = false;
      }
      return;
    }

    if (!this.password) {
      this.errorMessage = 'Please enter your password.';
      return;
    }

    if (this.activeTab === 'create') {
      if (this.password.length < 6) {
        this.errorMessage = 'Password must be at least 6 characters long.';
        return;
      }
      if (this.password !== this.confirmPassword) {
        this.errorMessage = 'Passwords do not match.';
        return;
      }

      this.isLoading = true;
      try {
        const res = await authService.signUp(emailTrimmed, this.password);
        if (res.success) {
          playEndSound(practiceStore.getSettings().soundEnabled);
          if (res.user && !res.user.confirmed_at && authService.getUser() === null) {
            this.successMessage = 'Account created! Please check your email to confirm your account.';
          } else {
            this.close();
          }
        } else {
          this.errorMessage = res.message || 'Sign up failed.';
        }
      } finally {
        this.isLoading = false;
      }
      return;
    }

    if (this.activeTab === 'signin') {
      this.isLoading = true;
      try {
        const res = await authService.signInWithPassword(emailTrimmed, this.password);
        if (res.success) {
          playEndSound(practiceStore.getSettings().soundEnabled);
          this.close();
        } else {
          this.errorMessage = res.message || 'Invalid email or password.';
        }
      } finally {
        this.isLoading = false;
      }
    }
  }

  render() {
    if (!this.open) return html``;

    const isReset = this.activeTab === 'reset-password';
    const ctaText =
      this.isLoading
        ? 'Please wait...'
        : isReset
        ? 'Update password'
        : this.activeTab === 'signin'
        ? 'Sign in'
        : this.activeTab === 'create'
        ? 'Create account'
        : 'Send magic link';

    const titleMain = isReset ? 'Set new password' : 'Musician account';
    const subtitle = isReset ? 'Enter a new password for your account' : 'so your hours follow you';

    return html`
      <div
        class="modal-backdrop"
        @click=${(e: Event) => e.target === e.currentTarget && this.close()}
        @keydown=${this.handleKeyDown}
      >
        <div class="modal-card">
          <!-- Header -->
          <div class="modal-header">
            <div>
              <div class="title-main">${titleMain}</div>
              <div class="subtitle-italic">${subtitle}</div>
            </div>
            <button
              type="button"
              class="close-round-btn"
              @click=${this.close}
              aria-label="Close modal"
            >
              &times;
            </button>
          </div>

          <!-- 3-Tab Segmented Track (hidden in reset-password mode) -->
          ${!isReset
            ? html`
                <div class="segmented-tabs-track">
                  <button
                    type="button"
                    class="tab-choice-btn ${this.activeTab === 'signin' ? 'active' : ''}"
                    @click=${() => this.setTab('signin')}
                  >
                    Sign in
                  </button>
                  <button
                    type="button"
                    class="tab-choice-btn ${this.activeTab === 'create' ? 'active' : ''}"
                    @click=${() => this.setTab('create')}
                  >
                    Create account
                  </button>
                  <button
                    type="button"
                    class="tab-choice-btn ${this.activeTab === 'magic' ? 'active' : ''}"
                    @click=${() => this.setTab('magic')}
                  >
                    Magic link
                  </button>
                </div>
              `
            : ''}

          ${this.errorMessage
            ? html`<div class="alert-banner alert-error">${this.errorMessage}</div>`
            : ''}
          ${this.successMessage
            ? html`<div class="alert-banner alert-success">${this.successMessage}</div>`
            : ''}

          <!-- Form Body -->
          <form @submit=${this.handleSubmit}>
            <div class="fields-stack">
              <!-- Reset Password Fields -->
              ${isReset
                ? html`
                    <div class="field-block">
                      <div class="field-label">NEW PASSWORD</div>
                      <input
                        type="password"
                        class="text-input pw"
                        required
                        minlength="6"
                        placeholder="At least 6 characters"
                        autocomplete="new-password"
                        .value=${this.password}
                        @input=${(e: Event) => (this.password = (e.target as HTMLInputElement).value)}
                      />
                    </div>
                    <div class="field-block">
                      <div class="field-label">CONFIRM NEW PASSWORD</div>
                      <input
                        type="password"
                        class="text-input pw"
                        required
                        minlength="6"
                        placeholder="Repeat new password"
                        autocomplete="new-password"
                        .value=${this.confirmPassword}
                        @input=${(e: Event) =>
                          (this.confirmPassword = (e.target as HTMLInputElement).value)}
                      />
                    </div>
                  `
                : html`
                    <!-- Email Address -->
                    <div class="field-block">
                      <div class="field-label">EMAIL ADDRESS</div>
                      <input
                        type="email"
                        class="text-input"
                        placeholder="you@example.com"
                        required
                        autocomplete="email"
                        .value=${this.email}
                        @input=${(e: Event) => (this.email = (e.target as HTMLInputElement).value)}
                      />
                    </div>

                    <!-- Tab: Magic Link helper -->
                    ${this.activeTab === 'magic'
                      ? html`
                          <div class="helper-copy">
                            We'll email you a passwordless one-time login link. Click the link on any device to log in instantly.
                          </div>
                        `
                      : ''}

                    <!-- Tab: Sign In Password -->
                    ${this.activeTab === 'signin'
                      ? html`
                          <div class="field-block">
                            <div class="label-row">
                              <div class="field-label">PASSWORD</div>
                              <button
                                type="button"
                                class="forgot-action"
                                @click=${this.handleForgotPassword}
                              >
                                Forgot?
                              </button>
                            </div>
                            <input
                              type="password"
                              class="text-input pw"
                              required
                              autocomplete="current-password"
                              .value=${this.password}
                              @input=${(e: Event) => (this.password = (e.target as HTMLInputElement).value)}
                            />
                          </div>
                        `
                      : ''}

                    <!-- Tab: Create Account Passwords -->
                    ${this.activeTab === 'create'
                      ? html`
                          <div class="field-block">
                            <div class="field-label">PASSWORD</div>
                            <input
                              type="password"
                              class="text-input pw"
                              required
                              autocomplete="new-password"
                              .value=${this.password}
                              @input=${(e: Event) => (this.password = (e.target as HTMLInputElement).value)}
                            />
                          </div>
                          <div class="field-block">
                            <div class="field-label">CONFIRM PASSWORD</div>
                            <input
                              type="password"
                              class="text-input pw"
                              required
                              autocomplete="new-password"
                              .value=${this.confirmPassword}
                              @input=${(e: Event) =>
                                (this.confirmPassword = (e.target as HTMLInputElement).value)}
                            />
                          </div>
                          <div class="adopt-callout">
                            <span class="adopt-dot"></span>
                            <div class="adopt-text">
                              Your practice history from this browser will be automatically adopted into your new account.
                            </div>
                          </div>
                        `
                      : ''}
                  `}
            </div>

            <!-- Actions Stack -->
            <div class="actions-stack" style="margin-top: 18px;">
              <button
                type="submit"
                class="primary-forest-btn"
                ?disabled=${this.isLoading}
              >
                ${ctaText}
              </button>

              ${isReset
                ? html`
                    <div class="switch-row">
                      <button
                        type="button"
                        class="switch-action"
                        @click=${() => this.setTab('signin')}
                      >
                        Back to sign in
                      </button>
                    </div>
                  `
                : this.activeTab === 'signin'
                ? html`
                    <div class="or-divider">
                      <span class="or-line"></span>
                      <span class="or-text">OR</span>
                      <span class="or-line"></span>
                    </div>

                    <button
                      type="button"
                      class="google-btn"
                      ?disabled=${this.isLoading}
                      @click=${this.handleGoogleSignIn}
                    >
                      <svg class="google-icon-circle" viewBox="0 0 24 24">
                        <path
                          fill="#4285F4"
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        />
                        <path
                          fill="#34A853"
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        />
                        <path
                          fill="#FBBC05"
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                        />
                        <path
                          fill="#EA4335"
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                        />
                      </svg>
                      Continue with Google
                    </button>

                    <div class="switch-row">
                      <span>No account yet?</span>
                      <button
                        type="button"
                        class="switch-action"
                        @click=${() => this.setTab('create')}
                      >
                        Create one
                      </button>
                    </div>
                  `
                : this.activeTab === 'create'
                ? html`
                    <div class="switch-row">
                      <span>Already have an account?</span>
                      <button
                        type="button"
                        class="switch-action"
                        @click=${() => this.setTab('signin')}
                      >
                        Sign in
                      </button>
                    </div>
                  `
                : html`
                    <div class="switch-row">
                      <span>Prefer a password?</span>
                      <button
                        type="button"
                        class="switch-action"
                        @click=${() => this.setTab('signin')}
                      >
                        Sign in
                      </button>
                    </div>
                  `}
            </div>
          </form>
        </div>
      </div>
    `;
  }
}
