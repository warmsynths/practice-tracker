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
      .setting-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 12px 0;
        border-bottom: 1px solid #E1E1DB;
      }
      .setting-item:last-child {
        border-bottom: none;
      }
      .setting-info {
        display: flex;
        flex-direction: column;
        gap: 2px;
      }
      .setting-title {
        font-size: 14px;
        font-weight: 700;
      }
      .setting-desc {
        font-size: 11px;
        color: #767668;
      }
      .switch {
        position: relative;
        display: inline-block;
        width: 44px;
        height: 24px;
        flex-shrink: 0;
      }
      .switch input {
        opacity: 0;
        width: 0;
        height: 0;
      }
      .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #E1E1DB;
        transition: 0.2s;
        border-radius: 24px;
      }
      .slider:before {
        position: absolute;
        content: "";
        height: 18px;
        width: 18px;
        left: 3px;
        bottom: 3px;
        background-color: white;
        transition: 0.2s;
        border-radius: 50%;
      }
      input:checked + .slider {
        background-color: #23241F;
      }
      input:checked + .slider:before {
        transform: translateX(20px);
      }
      .section-heading {
        font-size: 11px;
        font-weight: 700;
        color: #767668;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        margin-top: 18px;
        margin-bottom: 8px;
      }
      .sync-card {
        background: #F4F3EF;
        border: 1px solid #E1E1DB;
        border-radius: 12px;
        padding: 14px 16px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 12px;
        margin-bottom: 6px;
      }
      .sync-status-row {
        display: flex;
        align-items: center;
        gap: 6px;
        font-size: 11px;
        font-weight: 600;
        margin-top: 4px;
      }
      .sync-dot {
        width: 7px;
        height: 7px;
        border-radius: 50%;
        display: inline-block;
      }
      .sync-dot.synced {
        background: #3B8A44;
      }
      .sync-dot.syncing {
        background: #D48827;
        animation: pulse 1s infinite ease-in-out;
      }
      .sync-dot.offline {
        background: #8F8D88;
      }
      .sync-dot.error {
        background: #C0392B;
      }
      .sync-dot.local {
        background: #A8A69E;
      }
      @keyframes pulse {
        0%, 100% { opacity: 1; transform: scale(1); }
        50% { opacity: 0.4; transform: scale(1.2); }
      }
      .sync-timestamp {
        font-size: 11px;
        color: #767668;
        margin-top: 2px;
      }
      .user-email-label {
        font-size: 13px;
        font-weight: 700;
        color: #23241F;
        word-break: break-all;
      }
      .btn-sync {
        font-size: 12px;
        font-weight: 700;
        padding: 8px 14px;
        border-radius: 8px;
        cursor: pointer;
        border: 1px solid #D4D3CB;
        background: #FFFFFF;
        color: #23241F;
        transition: all 0.15s ease;
        flex-shrink: 0;
      }
      .btn-sync:hover:not(:disabled) {
        background: #23241F;
        color: #FFFFFF;
        border-color: #23241F;
      }
      .btn-sync:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
      .account-actions {
        display: flex;
        gap: 8px;
        margin-top: 8px;
      }
      .btn-signout {
        background: none;
        border: 1px solid #E1E1DB;
        color: #767668;
        font-size: 12px;
        font-weight: 700;
        padding: 8px 12px;
        border-radius: 8px;
        cursor: pointer;
        transition: all 0.15s ease;
      }
      .btn-signout:hover {
        background: #FBEAE8;
        border-color: #F2B8B5;
        color: #B3261E;
      }
      .btn-grid {
        display: flex;
        flex-direction: column;
        gap: 8px;
        margin-top: 8px;
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

  private handleSoundToggle(e: Event) {
    const checked = (e.target as HTMLInputElement).checked;
    this.dispatchEvent(
      new CustomEvent('update-settings', {
        detail: { soundEnabled: checked },
        bubbles: true,
        composed: true,
      })
    );
  }

  private handleHapticsToggle(e: Event) {
    const checked = (e.target as HTMLInputElement).checked;
    this.dispatchEvent(
      new CustomEvent('update-settings', {
        detail: { hapticsEnabled: checked },
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
    if (confirm('Sign out of your account? Your local cache will be cleared on this device.')) {
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

  private getSyncStatusLabel(): { label: string; dotClass: string } {
    const isAuthenticated = practiceStore.isAuthenticated();
    if (!isAuthenticated && !practiceStore.getEffectiveSyncPasscode()) {
      return { label: 'Guest Mode (Local only)', dotClass: 'local' };
    }

    switch (this.syncStatus) {
      case 'syncing':
        return { label: 'Syncing changes...', dotClass: 'syncing' };
      case 'synced':
        return { label: 'Cloud backup active', dotClass: 'synced' };
      case 'offline':
        return { label: 'Offline (will sync when online)', dotClass: 'offline' };
      case 'error':
        return { label: 'Sync paused (connection error)', dotClass: 'error' };
      default:
        return { label: 'Guest Mode (Local only)', dotClass: 'local' };
    }
  }

  render() {
    if (!this.open) return html``;

    const userEmail = practiceStore.getUserEmail();
    const isAuthenticated = practiceStore.isAuthenticated();
    const statusInfo = this.getSyncStatusLabel();

    return html`
      <div class="modal-overlay" @click=${(e: Event) => e.target === e.currentTarget && this.close()}>
        <div class="modal-card">
          <div class="modal-title">
            <span>Settings & Backups</span>
            <button class="close-btn" @click=${this.close}>&times;</button>
          </div>

          <!-- Account & Cloud Synchronization -->
          <div class="section-heading">Account & Cloud Backup</div>
          <div class="sync-card">
            <div class="setting-info">
              ${isAuthenticated && userEmail
                ? html`
                    <div class="user-email-label">${userEmail}</div>
                    <div class="sync-status-row">
                      <span class="sync-dot ${statusInfo.dotClass}"></span>
                      <span>${statusInfo.label}</span>
                    </div>
                    ${this.settings.lastSyncedAt
                      ? html`
                          <div class="sync-timestamp">
                            Last synced: ${this.formatLastSync(this.settings.lastSyncedAt)}
                          </div>
                        `
                      : html``}
                  `
                : html`
                    <div class="setting-title">Guest Mode</div>
                    <div class="sync-status-row">
                      <span class="sync-dot ${statusInfo.dotClass}"></span>
                      <span>Local storage only</span>
                    </div>
                    <div class="sync-timestamp">Sign in to sync across devices</div>
                  `}
            </div>

            ${isAuthenticated
              ? html`
                  <button
                    type="button"
                    class="btn-sync"
                    ?disabled=${this.isSyncing || this.syncStatus === 'syncing'}
                    @click=${this.handleSyncNow}
                  >
                    ${this.isSyncing || this.syncStatus === 'syncing' ? 'Syncing...' : 'Sync Now'}
                  </button>
                `
              : html`
                  <button
                    type="button"
                    class="btn btn-primary"
                    style="height: 36px; padding: 0 14px; width: auto; font-size: 12px;"
                    @click=${this.handleOpenAuth}
                  >
                    Sign In
                  </button>
                `}
          </div>

          ${isAuthenticated
            ? html`
                <div class="account-actions">
                  <button type="button" class="btn-signout" @click=${this.handleSignOut}>
                    Sign Out
                  </button>
                </div>
              `
            : html``}

          <!-- Feedback & Sound -->
          <div class="section-heading">Feedback & Sound</div>
          <div class="setting-item">
            <div class="setting-info">
              <div class="setting-title">Audio Chimes</div>
              <div class="setting-desc">Acoustic tones on start and completion</div>
            </div>
            <label class="switch">
              <input
                type="checkbox"
                .checked=${this.settings.soundEnabled}
                @change=${this.handleSoundToggle}
              />
              <span class="slider"></span>
            </label>
          </div>

          <div class="setting-item">
            <div class="setting-info">
              <div class="setting-title">Haptic Vibration</div>
              <div class="setting-desc">Tactile mobile feedback</div>
            </div>
            <label class="switch">
              <input
                type="checkbox"
                .checked=${this.settings.hapticsEnabled}
                @change=${this.handleHapticsToggle}
              />
              <span class="slider"></span>
            </label>
          </div>

          <!-- Data Portability -->
          <div class="section-heading">Data Portability</div>
          <div class="btn-grid">
            <button class="btn btn-secondary" @click=${this.triggerExport}>
              Export Practice Data (JSON)
            </button>
            <button class="btn btn-secondary" @click=${this.triggerImport}>
              Import Practice Data (JSON)
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
          <div class="btn-grid">
            <button class="btn btn-secondary" @click=${this.triggerDemoData}>
              Load Sample Practice Data
            </button>
            <button class="btn btn-danger" @click=${this.triggerClearData}>
              Clear All Data (Start Fresh)
            </button>
          </div>
        </div>
      </div>
    `;
  }
}
