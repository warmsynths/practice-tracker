import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { AppSettings, SyncStatus } from '../../types';
import { commonStyles } from '../../styles/shared-styles';
import { practiceStore } from '../../store/practice-store';

@customElement('pt-settings-modal')
export class PtSettingsModal extends LitElement {
  static styles = [
    commonStyles,
    css`
      .modal-overlay {
        position: fixed;
        inset: 0;
        background: rgba(35, 36, 31, 0.34);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
        z-index: 100;
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

      .modal-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
      }

      .modal-title-text {
        font-size: 19px;
        font-weight: 700;
        letter-spacing: -0.02em;
      }

      .modal-close-round {
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
        transition: background-color 140ms ease;
      }

      .modal-close-round:hover {
        background: #E1E1DB;
        color: #23241F;
      }

      .section-heading {
        font-size: 10px;
        letter-spacing: 0.12em;
        color: #A3A297;
        font-weight: 700;
        text-transform: uppercase;
        margin: 20px 0 10px;
      }

      .section-heading:first-of-type {
        margin-top: 0;
      }

      .sync-box {
        border: 1px solid #E7E6DF;
        border-radius: 16px;
        padding: 14px;
        display: flex;
        align-items: center;
        gap: 12px;
        background: #FFFFFF;
      }

      .sync-box-content {
        flex: 1;
        min-width: 0;
      }

      .user-email-text {
        font-size: 13px;
        font-weight: 700;
        overflow-wrap: anywhere;
      }

      .sync-indicator-row {
        display: flex;
        align-items: center;
        gap: 6px;
        font-size: 12px;
        color: #767668;
        margin-top: 4px;
      }

      .sync-status-dot {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: #6B7F6E;
      }

      .sync-status-dot.syncing {
        background: #D4A340;
        animation: softPulse 1.2s ease-in-out infinite;
      }

      .sync-status-dot.error {
        background: #B4543C;
      }

      .sync-time-sub {
        font-size: 11px;
        color: #A3A297;
        margin-top: 2px;
      }

      .btn-box-sync {
        border: 1px solid #DDDCD4;
        border-radius: 12px;
        padding: 9px 14px;
        font-size: 12px;
        font-weight: 700;
        cursor: pointer;
        white-space: nowrap;
        background: #FBFBF9;
        color: #23241F;
        border: 1px solid #DDDCD4;
        transition: transform 140ms ease, background-color 140ms ease;
      }

      .btn-box-sync:hover {
        background: #23241F;
        color: #F2F1EC;
      }

      .btn-signout-link {
        border: 1px solid #DDDCD4;
        border-radius: 12px;
        padding: 9px 16px;
        font-size: 12px;
        font-weight: 700;
        cursor: pointer;
        display: inline-block;
        margin-top: 10px;
        background: transparent;
        color: #767668;
        transition: color 140ms ease, border-color 140ms ease;
      }

      .btn-signout-link:hover {
        color: #B4543C;
        border-color: #B4543C;
      }

      /* Toggles */
      .toggle-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 14px;
        padding: 13px 0;
        border-bottom: 1px solid #EAE9E2;
      }

      .toggle-row:last-child {
        border-bottom: none;
      }

      .toggle-info-title {
        font-size: 14px;
        font-weight: 700;
      }

      .toggle-info-desc {
        font-size: 12px;
        color: #767668;
        margin-top: 2px;
      }

      .switch-pill {
        width: 46px;
        height: 27px;
        border-radius: 999px;
        flex-shrink: 0;
        cursor: pointer;
        display: flex;
        align-items: center;
        padding: 3px;
        background: #D9D8D0;
        transition: background-color 200ms ease-out;
        user-select: none;
      }

      .switch-pill.checked {
        background: #23241F;
      }

      .switch-knob {
        width: 21px;
        height: 21px;
        border-radius: 50%;
        background: #FFF;
        transform: translateX(0);
        transition: transform 220ms cubic-bezier(0.32, 0.72, 0, 1);
      }

      .switch-pill.checked .switch-knob {
        transform: translateX(19px);
      }

      /* Action Buttons */
      .actions-vertical {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }

      .btn-sheet-action {
        background: #EFEEE9;
        color: #23241F;
        border-radius: 14px;
        height: 46px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        font-weight: 700;
        cursor: pointer;
        border: none;
        width: 100%;
        transition: transform 140ms ease, background-color 140ms ease;
      }

      .btn-sheet-action:hover {
        background: #E4E3DD;
      }

      .btn-sheet-action:active {
        transform: scale(0.98);
      }

      .btn-sheet-danger {
        background: #B4543C;
        color: #FBF6F3;
        border-radius: 14px;
        height: 46px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        font-weight: 700;
        cursor: pointer;
        border: none;
        width: 100%;
        transition: transform 140ms ease, opacity 140ms ease;
      }

      .btn-sheet-danger:hover {
        opacity: 0.92;
      }

      .btn-sheet-danger:active {
        transform: scale(0.98);
      }

      .file-hidden {
        display: none;
      }
    `,
  ];

  @property({ type: Object }) settings: AppSettings = { soundEnabled: true, hapticsEnabled: true };
  @property({ type: String }) syncStatus: SyncStatus = 'local';
  @property({ type: Boolean }) open = false;

  @state() private isSyncing = false;

  private handleSoundToggle() {
    this.dispatchEvent(
      new CustomEvent('update-settings', {
        detail: { soundEnabled: !this.settings.soundEnabled },
        bubbles: true,
        composed: true,
      })
    );
  }

  private handleHapticsToggle() {
    this.dispatchEvent(
      new CustomEvent('update-settings', {
        detail: { hapticsEnabled: !this.settings.hapticsEnabled },
        bubbles: true,
        composed: true,
      })
    );
  }

  private async handleSyncNow() {
    this.isSyncing = true;
    try {
      await practiceStore.syncWithCloud(false);
    } finally {
      this.isSyncing = false;
    }
  }

  private handleOpenAuth() {
    this.dispatchEvent(new CustomEvent('open-auth-modal', { bubbles: true, composed: true }));
  }

  private async handleSignOut() {
    if (confirm('Sign out of your account? Your local data will remain cached on this device.')) {
      await practiceStore.signOut();
    }
  }

  private triggerExport() {
    this.dispatchEvent(new CustomEvent('export-backup', { bubbles: true, composed: true }));
  }

  private triggerImport() {
    const fileInput = this.shadowRoot?.querySelector('#import-file') as HTMLInputElement;
    fileInput?.click();
  }

  private handleFileChange(e: Event) {
    const input = e.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (re) => {
      const content = re.target?.result as string;
      if (content) {
        this.dispatchEvent(
          new CustomEvent('import-backup', {
            detail: { jsonString: content },
            bubbles: true,
            composed: true,
          })
        );
      }
      input.value = '';
    };
    reader.readAsText(file);
  }

  private triggerDemoData() {
    if (confirm('Load demo practice history? This will add ~33 days of sample sessions to preview charts.')) {
      this.dispatchEvent(new CustomEvent('load-demo-data', { bubbles: true, composed: true }));
      this.close();
    }
  }

  private triggerClearData() {
    if (confirm('Reset all practice history? This will delete all sessions and cannot be undone.')) {
      this.dispatchEvent(new CustomEvent('clear-all-data', { bubbles: true, composed: true }));
      this.close();
    }
  }

  private close() {
    this.dispatchEvent(new CustomEvent('close-modal', { bubbles: true, composed: true }));
  }

  private formatLastSync(isoString?: string): string {
    if (!isoString) return 'Never synced';
    const date = new Date(isoString);
    if (isNaN(date.getTime())) return 'Never synced';

    const now = Date.now();
    const diffSec = Math.floor((now - date.getTime()) / 1000);

    if (diffSec < 60) return 'Just now';
    if (diffSec < 3600) return `${Math.floor(diffSec / 60)}m ago`;
    if (diffSec < 86400) return `${Math.floor(diffSec / 3600)}h ago`;

    return date.toLocaleDateString([], { month: 'short', day: 'numeric' });
  }

  render() {
    if (!this.open) return html``;

    const userEmail = practiceStore.getUserEmail();
    const isAuthenticated = practiceStore.isAuthenticated();
    const isCloudActive = isAuthenticated && userEmail;

    return html`
      <div class="modal-overlay" @click=${(e: Event) => e.target === e.currentTarget && this.close()}>
        <div class="modal-card">
          <div class="modal-header">
            <span class="modal-title-text">Settings & backups</span>
            <button class="modal-close-round" @click=${this.close}>&times;</button>
          </div>

          <!-- Account & Cloud Backup -->
          <div class="section-heading">Account & Cloud Backup</div>
          <div class="sync-box">
            <div class="sync-box-content">
              <div class="user-email-text">
                ${isCloudActive ? userEmail : 'Guest Mode (Local Only)'}
              </div>
              <div class="sync-indicator-row">
                <span
                  class="sync-status-dot ${this.syncStatus === 'syncing' ? 'syncing' : this.syncStatus === 'error' ? 'error' : ''}"
                ></span>
                <span>${isCloudActive ? 'Cloud backup active' : 'Local storage only'}</span>
              </div>
              <div class="sync-time-sub">
                Last synced: ${this.formatLastSync(this.settings.lastSyncedAt)}
              </div>
            </div>

            ${isCloudActive
              ? html`
                  <button
                    type="button"
                    class="btn-box-sync"
                    ?disabled=${this.isSyncing}
                    @click=${this.handleSyncNow}
                  >
                    ${this.isSyncing ? 'Syncing...' : 'Sync now'}
                  </button>
                `
              : html`
                  <button
                    type="button"
                    class="btn-box-sync"
                    @click=${this.handleOpenAuth}
                  >
                    Sign In
                  </button>
                `}
          </div>

          ${isCloudActive
            ? html`
                <button type="button" class="btn-signout-link" @click=${this.handleSignOut}>
                  Sign out
                </button>
              `
            : ''}

          <!-- Feedback & Sound -->
          <div class="section-heading">Feedback & Sound</div>
          <div class="toggle-row">
            <div>
              <div class="toggle-info-title">Audio chimes</div>
              <div class="toggle-info-desc">Acoustic tones on start and completion</div>
            </div>
            <div
              class="switch-pill ${this.settings.soundEnabled ? 'checked' : ''}"
              @click=${this.handleSoundToggle}
            >
              <div class="switch-knob"></div>
            </div>
          </div>

          <div class="toggle-row">
            <div>
              <div class="toggle-info-title">Haptic vibration</div>
              <div class="toggle-info-desc">Tactile mobile feedback</div>
            </div>
            <div
              class="switch-pill ${this.settings.hapticsEnabled ? 'checked' : ''}"
              @click=${this.handleHapticsToggle}
            >
              <div class="switch-knob"></div>
            </div>
          </div>

          <!-- Data Portability -->
          <div class="section-heading">Data Portability</div>
          <div class="actions-vertical">
            <button class="btn-sheet-action" @click=${this.triggerExport}>
              Export practice data (JSON)
            </button>
            <button class="btn-sheet-action" @click=${this.triggerImport}>
              Import practice data (JSON)
            </button>
            <input
              type="file"
              id="import-file"
              class="file-hidden"
              accept=".json,application/json"
              @change=${this.handleFileChange}
            />
          </div>

          <!-- Demo & Clean Slate -->
          <div class="section-heading">Demo & Clean Slate</div>
          <div class="actions-vertical">
            <button class="btn-sheet-action" @click=${this.triggerDemoData}>
              Load sample practice data
            </button>
            <button class="btn-sheet-danger" @click=${this.triggerClearData}>
              Clear all data
            </button>
          </div>
        </div>
      </div>
    `;
  }
}

