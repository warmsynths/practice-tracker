import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { commonStyles } from '../../styles/shared-styles';
import { authService } from '../../services/auth-service';
import { playClickSound, playEndSound } from '../../utils/audio-utils';
import { practiceStore } from '../../store/practice-store';

type AuthTab = 'signin' | 'signup' | 'magic';

@customElement('pt-auth-modal')
export class PtAuthModal extends LitElement {
  static styles = [
    commonStyles,
    css`
      .tabs-row {
        display: flex;
        background: #E1E1DB;
        border-radius: 12px;
        padding: 3px;
        margin-bottom: 18px;
        gap: 3px;
      }
      .tab-btn {
        flex: 1;
        background: none;
        border: none;
        padding: 8px 6px;
        border-radius: 9px;
        font-size: 12px;
        font-weight: 700;
        color: #767668;
        cursor: pointer;
        transition: all 0.15s ease;
        text-align: center;
      }
      .tab-btn.active {
        background: #FFFFFF;
        color: #23241F;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
      }
      .alert-box {
        border-radius: 10px;
        padding: 10px 12px;
        font-size: 12px;
        line-height: 1.4;
        margin-bottom: 14px;
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
      .helper-text {
        font-size: 11px;
        color: #767668;
        line-height: 1.4;
        margin-top: -6px;
        margin-bottom: 14px;
      }
      .btn:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
      .switch-hint {
        font-size: 12px;
        color: #767668;
        text-align: center;
        margin-top: 14px;
      }
      .link-btn {
        background: none;
        border: none;
        color: #23241F;
        font-weight: 700;
        cursor: pointer;
        text-decoration: underline;
        font-size: 12px;
        padding: 0;
      }
    `,
  ];

  @property({ type: Boolean }) open = false;

  @state() private activeTab: AuthTab = 'signin';
  @state() private email = '';
  @state() private password = '';
  @state() private confirmPassword = '';
  @state() private isLoading = false;
  @state() private errorMessage: string | null = null;
  @state() private successMessage: string | null = null;

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

  private async handleSubmit(e: Event) {
    e.preventDefault();
    this.errorMessage = null;
    this.successMessage = null;

    if (!this.email.trim()) {
      this.errorMessage = 'Please enter your email address.';
      return;
    }

    if (this.activeTab === 'magic') {
      this.isLoading = true;
      try {
        const res = await authService.signInWithOtp(this.email);
        if (res.success) {
          playEndSound(practiceStore.getSettings().soundEnabled);
          this.successMessage = res.message || 'Magic login link sent! Check your email inbox.';
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

    if (this.activeTab === 'signup') {
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
        const res = await authService.signUp(this.email, this.password);
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
        const res = await authService.signInWithPassword(this.email, this.password);
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

    return html`
      <div class="modal-overlay" @click=${(e: Event) => e.target === e.currentTarget && this.close()}>
        <div class="modal-card">
          <div class="modal-title">
            <span>Musician Account</span>
            <button class="close-btn" @click=${this.close}>&times;</button>
          </div>

          <div class="tabs-row">
            <button
              type="button"
              class="tab-btn ${this.activeTab === 'signin' ? 'active' : ''}"
              @click=${() => this.setTab('signin')}
            >
              Sign In
            </button>
            <button
              type="button"
              class="tab-btn ${this.activeTab === 'signup' ? 'active' : ''}"
              @click=${() => this.setTab('signup')}
            >
              Create Account
            </button>
            <button
              type="button"
              class="tab-btn ${this.activeTab === 'magic' ? 'active' : ''}"
              @click=${() => this.setTab('magic')}
            >
              Magic Link
            </button>
          </div>

          ${this.errorMessage
            ? html`<div class="alert-box alert-error">${this.errorMessage}</div>`
            : html``}
          ${this.successMessage
            ? html`<div class="alert-box alert-success">${this.successMessage}</div>`
            : html``}

          <form @submit=${this.handleSubmit}>
            <div class="form-group">
              <label class="form-label">Email Address</label>
              <input
                type="email"
                class="form-input"
                required
                autocomplete="email"
                placeholder="musician@example.com"
                .value=${this.email}
                @input=${(e: Event) => (this.email = (e.target as HTMLInputElement).value)}
              />
            </div>

            ${this.activeTab === 'magic'
              ? html`
                  <div class="helper-text">
                    We'll email you a passwordless one-time login link. Click the link on any device to log in instantly.
                  </div>
                  <button type="submit" class="btn btn-primary" ?disabled=${this.isLoading}>
                    ${this.isLoading ? 'Sending Link...' : 'Send Magic Link'}
                  </button>
                `
              : html`
                  <div class="form-group">
                    <label class="form-label">Password</label>
                    <input
                      type="password"
                      class="form-input"
                      required
                      autocomplete=${this.activeTab === 'signup' ? 'new-password' : 'current-password'}
                      placeholder="••••••••"
                      .value=${this.password}
                      @input=${(e: Event) => (this.password = (e.target as HTMLInputElement).value)}
                    />
                  </div>

                  ${this.activeTab === 'signup'
                    ? html`
                        <div class="form-group">
                          <label class="form-label">Confirm Password</label>
                          <input
                            type="password"
                            class="form-input"
                            required
                            autocomplete="new-password"
                            placeholder="••••••••"
                            .value=${this.confirmPassword}
                            @input=${(e: Event) =>
                              (this.confirmPassword = (e.target as HTMLInputElement).value)}
                          />
                        </div>
                        <div class="helper-text">
                          Your practice history from this browser will be automatically adopted into your new account.
                        </div>
                        <button type="submit" class="btn btn-primary" ?disabled=${this.isLoading}>
                          ${this.isLoading ? 'Creating Account...' : 'Create Account'}
                        </button>
                      `
                    : html`
                        <button type="submit" class="btn btn-primary" ?disabled=${this.isLoading}>
                          ${this.isLoading ? 'Signing In...' : 'Sign In'}
                        </button>
                      `}
                `}
          </form>

          ${this.activeTab === 'signin'
            ? html`
                <div class="switch-hint">
                  Don't have an account?
                  <button type="button" class="link-btn" @click=${() => this.setTab('signup')}>
                    Create one
                  </button>
                </div>
              `
            : this.activeTab === 'signup'
            ? html`
                <div class="switch-hint">
                  Already have an account?
                  <button type="button" class="link-btn" @click=${() => this.setTab('signin')}>
                    Sign in
                  </button>
                </div>
              `
            : html`
                <div class="switch-hint">
                  Prefer password?
                  <button type="button" class="link-btn" @click=${() => this.setTab('signin')}>
                    Sign in with password
                  </button>
                </div>
              `}
        </div>
      </div>
    `;
  }
}
