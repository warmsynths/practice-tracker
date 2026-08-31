import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { AppSettings, AuthState, SyncStatus } from '../../types';
import { commonStyles } from '../../styles/shared-styles';
import { fmtMin } from '../../utils/bench-metrics';
import { practiceStore } from '../../store/practice-store';

const GOAL_OPTIONS = [180, 300, 420, 600];

@customElement('pt-settings-view')
export class PtSettingsView extends LitElement {
  @property({ type: Object }) settings: AppSettings = {
    soundEnabled: true,
    hapticsEnabled: true,
    weekStartsOnSunday: false,
    weeklyGoalMinutes: 420,
  };
  @property({ type: Object }) authState: AuthState = {
    user: null,
    accessToken: null,
    isAuthenticated: false,
    isLoading: false,
  };
  @property({ type: String }) syncStatus: SyncStatus = 'synced';
  @property({ type: Number }) sessionCount: number = 0;

  @state() private isSyncing: boolean = false;
  @state() private magicSentEmail: string | null = null;

  static styles = [
    commonStyles,
    css`
      :host {
        display: block;
        animation: fadeOnly 200ms ease-out both;
        color: #23241F;
        font-family: 'DM Sans', system-ui, sans-serif;
      }

      .settings-wrap {
        display: flex;
        flex-direction: column;
        gap: 14px;
        width: 100%;
        max-width: 1000px;
        margin: 0 auto;
      }

      .settings-card {
        background: #FAFAF7;
        border-radius: 20px;
        padding: 22px;
        border: 1px solid #EBEAE3;
        box-shadow: 0 4px 16px rgba(35, 36, 31, 0.03);
      }

      .settings-tag {
        font-size: 9.5px;
        letter-spacing: 0.13em;
        color: #A3A297;
        font-weight: 700;
        text-transform: uppercase;
      }

      /* Account Section */
      .acct-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 20px;
        flex-wrap: wrap;
      }

      .avatar-circle {
        width: 46px;
        height: 46px;
        border-radius: 50%;
        background: #DCDBD3;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 15px;
        font-weight: 700;
        color: #4A4945;
        flex-shrink: 0;
      }

      .acct-email-title {
        font-size: 16px;
        font-weight: 700;
        letter-spacing: -0.01em;
        color: #23241F;
      }

      .acct-sub-text {
        font-size: 12.5px;
        color: #767668;
        margin-top: 3px;
      }

      .guest-dot {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: #B4543C;
        display: inline-block;
        flex-shrink: 0;
      }

      .guest-sub-line {
        display: flex;
        align-items: center;
        gap: 6px;
        margin-top: 4px;
        font-size: 12.5px;
        color: #767668;
      }

      .btn-outline-signout {
        border: 1px solid #DDDCD4;
        border-radius: 12px;
        padding: 11px 18px;
        font-size: 12.5px;
        font-weight: 700;
        color: #767668;
        background: transparent;
        cursor: pointer;
        white-space: nowrap;
        transition: background-color 150ms ease-out, color 150ms ease-out;
      }

      .btn-outline-signout:hover {
        background: #F0EFEA;
        color: #23241F;
      }

      .btn-signin-forest-outline {
        border: 1px solid #4F6353;
        color: #4F6353;
        background: transparent;
        border-radius: 12px;
        height: 40px;
        padding: 0 18px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12.5px;
        font-weight: 700;
        cursor: pointer;
        white-space: nowrap;
        flex-shrink: 0;
        transition: background-color 150ms ease-out;
      }

      .btn-signin-forest-outline:hover {
        background: #ECEFEA;
      }

      /* Magic Link Sent Card */
      .inbox-card-stack {
        display: flex;
        flex-direction: column;
        gap: 12px;
        max-width: 440px;
      }

      .inbox-title {
        font-size: 20px;
        font-weight: 700;
        letter-spacing: -0.02em;
        color: #23241F;
      }

      .inbox-desc {
        font-size: 13.5px;
        color: #767668;
        line-height: 1.55;
      }

      .btn-primary-forest-solid {
        background: #4F6353;
        color: #F7F6F1;
        border-radius: 12px;
        height: 46px;
        padding: 0 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 13px;
        font-weight: 700;
        cursor: pointer;
        border: none;
        transition: background-color 150ms ease;
      }

      .btn-primary-forest-solid:hover {
        background: #435447;
      }

      /* Backup Section */
      .backup-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        margin-top: 14px;
        flex-wrap: wrap;
      }

      .backup-state-title {
        font-size: 15px;
        font-weight: 700;
        color: #23241F;
      }

      .backup-detail-sub {
        font-size: 12.5px;
        color: #767668;
        margin-top: 3px;
      }

      /* Preferences Section */
      .pref-rows-list {
        display: flex;
        flex-direction: column;
        margin-top: 6px;
      }

      .pref-row-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 18px;
        padding: 15px 0;
        border-top: 1px solid #EDECE6;
        cursor: pointer;
        user-select: none;
      }

      .pref-name {
        font-size: 14.5px;
        font-weight: 700;
        color: #23241F;
      }

      .pref-sub {
        font-size: 12.5px;
        color: #767668;
        margin-top: 3px;
      }

      /* Toggle Switch */
      .toggle-track {
        width: 46px;
        height: 27px;
        border-radius: 999px;
        display: flex;
        align-items: center;
        padding: 3px;
        transition: background-color 180ms ease-out;
        flex-shrink: 0;
      }

      .toggle-knob {
        width: 21px;
        height: 21px;
        border-radius: 50%;
        background: #FFFFFF;
        transition: transform 200ms cubic-bezier(0.16, 1, 0.3, 1);
        box-shadow: 0 1px 3px rgba(35, 36, 31, 0.24);
      }

      /* Goal Chips */
      .goal-chips-wrap {
        display: flex;
        gap: 7px;
        flex-wrap: wrap;
      }

      .goal-chip {
        border-radius: 11px;
        padding: 9px 13px;
        font-size: 12.5px;
        font-weight: 700;
        cursor: pointer;
        transition: background-color 140ms ease, color 140ms ease;
        border: none;
        user-select: none;
      }

      .goal-chip.active {
        background: #23241F;
        color: #F2F1EC;
      }

      .goal-chip.inactive {
        background: #F0EFEA;
        color: #4A4945;
      }

      .goal-chip.inactive:hover {
        background: #E5E4DC;
      }

      /* Data actions list */
      .portability-actions-row {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
        margin-top: 14px;
      }

      .btn-util-action {
        border: 1px solid #DDDCD4;
        border-radius: 12px;
        padding: 10px 16px;
        font-size: 12.5px;
        font-weight: 700;
        color: #4A4945;
        background: #FFFFFF;
        cursor: pointer;
        transition: background-color 140ms ease, color 140ms ease;
      }

      .btn-util-action:hover {
        background: #F0EFEA;
        color: #23241F;
      }

      .btn-util-danger {
        border: 1px solid #E2CFC9;
        border-radius: 12px;
        padding: 10px 16px;
        font-size: 12.5px;
        font-weight: 700;
        color: #B4543C;
        background: #FFFFFF;
        cursor: pointer;
        transition: background-color 140ms ease, color 140ms ease;
      }

      .btn-util-danger:hover {
        background: #FBEAE8;
      }

      .file-hidden {
        display: none;
      }

      /* Mobile Phone Mode (< 640px) */
      @media (max-width: 640px) {
        .settings-card {
          padding: 16px 14px;
          border-radius: 18px;
        }

        .acct-row {
          gap: 12px;
        }

        .pref-row-item {
          padding: 12px 0;
          gap: 12px;
        }

        .pref-name {
          font-size: 13.5px;
        }

        .pref-sub {
          font-size: 11.5px;
        }

        .goal-chips-wrap {
          gap: 5px;
        }

        .goal-chip {
          padding: 7px 11px;
          font-size: 11.5px;
        }
      }
    `,
  ];

  public setMagicLinkSent(email: string) {
    this.magicSentEmail = email;
  }

  private handleOpenAuthModal(tab?: 'signin' | 'create' | 'magic' | 'reset-password') {
    this.dispatchEvent(
      new CustomEvent('open-auth-modal', {
        detail: { tab: tab || 'signin' },
        bubbles: true,
        composed: true,
      })
    );
  }

  private handleToggle(key: 'soundEnabled' | 'hapticsEnabled' | 'weekStartsOnSunday') {
    const updated = {
      ...this.settings,
      [key]: !this.settings[key],
    };
    this.dispatchEvent(
      new CustomEvent('update-settings', {
        detail: updated,
        bubbles: true,
        composed: true,
      })
    );
  }

  private handleSetGoal(minutes: number) {
    const updated = {
      ...this.settings,
      weeklyGoalMinutes: minutes,
    };
    this.dispatchEvent(
      new CustomEvent('update-settings', {
        detail: updated,
        bubbles: true,
        composed: true,
      })
    );
  }

  private handleSignOut() {
    this.dispatchEvent(
      new CustomEvent('sign-out', {
        bubbles: true,
        composed: true,
      })
    );
    this.magicSentEmail = null;
  }

  private handleSyncNow() {
    this.isSyncing = true;
    this.dispatchEvent(
      new CustomEvent('sync-now', {
        bubbles: true,
        composed: true,
      })
    );
    setTimeout(() => {
      this.isSyncing = false;
    }, 1200);
  }

  private handleExportBackup() {
    const backup = practiceStore.exportBackup();
    const blob = new Blob([backup], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `practice-tracker-backup-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }

  private handleImportClick() {
    const fileInput = this.shadowRoot?.querySelector('#import-file-input') as HTMLInputElement;
    fileInput?.click();
  }

  private handleFileSelected(e: Event) {
    const input = e.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (re) => {
      const content = re.target?.result as string;
      if (content) {
        practiceStore.importBackup(content);
      }
      input.value = '';
    };
    reader.readAsText(file);
  }

  private handleLoadDemoData() {
    if (confirm('Load sample practice history? This will generate demonstration sessions to preview all charts and milestones.')) {
      practiceStore.loadDemoData();
    }
  }

  private handleClearAllData() {
    if (confirm('Clear all practice history from this device? This cannot be undone.')) {
      practiceStore.clearAllData();
    }
  }

  render() {
    const isAuthed = this.authState.isAuthenticated;
    const userEmail = this.authState.user?.email || this.settings.userEmail || '';
    const userInitials = (userEmail || 'PT').slice(0, 2).toUpperCase();
    const currentGoal = this.settings.weeklyGoalMinutes || 420;

    return html`
      <div class="settings-wrap">
        <!-- Account Card -->
        ${isAuthed
          ? html`
              <div class="settings-card">
                <div class="acct-row">
                  <div style="display: flex; align-items: center; gap: 16px;">
                    <span class="avatar-circle">${userInitials}</span>
                    <div>
                      <div class="acct-email-title">${userEmail}</div>
                      <div class="acct-sub-text">
                        Signed in · ${this.sessionCount} sessions synced
                      </div>
                    </div>
                  </div>
                  <div style="display: flex; gap: 8px; align-items: center; flex-wrap: wrap;">
                    <button class="btn-outline-signout" @click=${() => this.handleOpenAuthModal('reset-password')}>
                      Change password
                    </button>
                    <button class="btn-outline-signout" @click=${this.handleSignOut}>
                      Sign out
                    </button>
                  </div>
                </div>
              </div>
            `
          : this.magicSentEmail
          ? html`
              <div class="settings-card">
                <div class="inbox-card-stack">
                  <div class="settings-tag">CHECK YOUR INBOX</div>
                  <div class="inbox-title">Magic link sent to ${this.magicSentEmail}</div>
                  <div class="inbox-desc">
                    It expires in fifteen minutes. Open it on the device you want to practise on.
                  </div>
                  <div style="display: flex; gap: 10px; margin-top: 4px; flex-wrap: wrap;">
                    <button class="btn-primary-forest-solid" @click=${this.handleSyncNow}>
                      I opened the link
                    </button>
                    <button
                      class="btn-outline-signout"
                      @click=${() => (this.magicSentEmail = null)}
                    >
                      Use another address
                    </button>
                  </div>
                </div>
              </div>
            `
          : html`
              <div class="settings-card">
                <div class="acct-row">
                  <div>
                    <div style="font-size: 16px; font-weight: 700; letter-spacing: -0.01em;">
                      Guest mode
                    </div>
                    <div class="guest-sub-line">
                      <span class="guest-dot"></span>
                      <span>Local storage only · never synced</span>
                    </div>
                  </div>
                  <button
                    class="btn-signin-forest-outline"
                    @click=${this.handleOpenAuthModal}
                  >
                    Sign in
                  </button>
                </div>
              </div>
            `}

        <!-- Backup Card -->
        <div class="settings-card">
          <div class="settings-tag">BACKUP</div>
          <div class="backup-row">
            <div>
              <div class="backup-state-title">
                ${isAuthed ? 'Cloud backup active' : 'Local only'}
              </div>
              <div class="backup-detail-sub">
                ${isAuthed
                  ? `Last synced just now · ${this.sessionCount} sessions held`
                  : 'Sign in to keep this history if you lose the device'}
              </div>
            </div>
            <button
              class="btn-outline-signout"
              @click=${this.handleSyncNow}
              ?disabled=${this.isSyncing}
            >
              ${this.isSyncing ? 'Syncing...' : 'Sync now'}
            </button>
          </div>
        </div>

        <!-- Preferences Card -->
        <div class="settings-card">
          <div class="settings-tag">PREFERENCES</div>
          <div class="pref-rows-list">
            <!-- Chimes -->
            <div class="pref-row-item" @click=${() => this.handleToggle('soundEnabled')}>
              <div>
                <div class="pref-name">Chime at the end of a session</div>
                <div class="pref-sub">A soft tone when the timer runs out</div>
              </div>
              <span
                class="toggle-track"
                style="background: ${this.settings.soundEnabled ? '#4F6353' : '#DDDCD4'};"
              >
                <span
                  class="toggle-knob"
                  style="transform: translateX(${this.settings.soundEnabled ? '19px' : '0px'});"
                ></span>
              </span>
            </div>

            <!-- Haptics -->
            <div class="pref-row-item" @click=${() => this.handleToggle('hapticsEnabled')}>
              <div>
                <div class="pref-name">Haptics</div>
                <div class="pref-sub">A tap when a session starts and ends</div>
              </div>
              <span
                class="toggle-track"
                style="background: ${this.settings.hapticsEnabled ? '#4F6353' : '#DDDCD4'};"
              >
                <span
                  class="toggle-knob"
                  style="transform: translateX(${this.settings.hapticsEnabled ? '19px' : '0px'});"
                ></span>
              </span>
            </div>

            <!-- Week Start -->
            <div class="pref-row-item" @click=${() => this.handleToggle('weekStartsOnSunday')}>
              <div>
                <div class="pref-name">Weeks start on Sunday</div>
                <div class="pref-sub">Otherwise Monday, which is what the charts use now</div>
              </div>
              <span
                class="toggle-track"
                style="background: ${this.settings.weekStartsOnSunday ? '#4F6353' : '#DDDCD4'};"
              >
                <span
                  class="toggle-knob"
                  style="transform: translateX(${this.settings.weekStartsOnSunday ? '19px' : '0px'});"
                ></span>
              </span>
            </div>

            <!-- Weekly Goal -->
            <div
              style="display: flex; align-items: center; justify-content: space-between; gap: 18px; padding: 15px 0; border-top: 1px solid #EDECE6; flex-wrap: wrap;"
            >
              <div>
                <div class="pref-name">Weekly goal</div>
                <div class="pref-sub">${fmtMin(currentGoal)} a week across the whole kit</div>
              </div>
              <div class="goal-chips-wrap">
                ${GOAL_OPTIONS.map(
                  (m) => html`
                    <button
                      class="goal-chip ${currentGoal === m ? 'active' : 'inactive'}"
                      @click=${() => this.handleSetGoal(m)}
                    >
                      ${fmtMin(m)}
                    </button>
                  `
                )}
              </div>
            </div>
          </div>
        </div>

        <!-- Data Portability & Slates -->
        <div class="settings-card">
          <div class="settings-tag">DATA MANAGEMENT</div>
          <div class="portability-actions-row">
            <button class="btn-util-action" @click=${this.handleExportBackup}>
              Export practice data (JSON)
            </button>
            <button class="btn-util-action" @click=${this.handleImportClick}>
              Import practice data (JSON)
            </button>
            <button class="btn-util-action" @click=${this.handleLoadDemoData}>
              Load demo practice history
            </button>
            <button class="btn-util-danger" @click=${this.handleClearAllData}>
              Reset all practice data
            </button>
            <input
              type="file"
              id="import-file-input"
              class="file-hidden"
              accept=".json,application/json"
              @change=${this.handleFileSelected}
            />
          </div>
        </div>
      </div>
    `;
  }
}
