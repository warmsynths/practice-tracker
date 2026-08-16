import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { SyncStatus } from '../../types';
import { formatRelativeTime } from '../../utils/date-utils';
import { practiceStore } from '../../store/practice-store';

@customElement('pt-sync-pill')
export class PtSyncPill extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
      position: relative;
      font-family: 'DM Sans', system-ui, -apple-system, sans-serif;
    }

    .pill-trigger {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 4px 10px;
      border-radius: 12px;
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 0.02em;
      cursor: pointer;
      user-select: none;
      transition: all 0.2s ease;
      border: 1px solid transparent;
      outline: none;
    }

    .pill-trigger:hover {
      transform: translateY(-1px);
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);
    }

    .pill-trigger:active {
      transform: translateY(0);
    }

    /* State variants */
    .status-synced {
      background: #E6EFE6;
      color: #2D5A34;
      border-color: #D3E4D3;
    }
    .status-synced .status-dot {
      background: #40916C;
    }

    .status-syncing {
      background: #E8EFF5;
      color: #1E3A5F;
      border-color: #D2E0EC;
    }
    .status-syncing .status-dot {
      background: #3A86C8;
      animation: pulse-dot 1.2s infinite ease-in-out;
    }

    .status-offline {
      background: #F7EFE8;
      color: #7D4F27;
      border-color: #EBDEC2;
    }
    .status-offline .status-dot {
      background: #D4A373;
    }

    .status-error {
      background: #FAEAE8;
      color: #9C2A2A;
      border-color: #F3CECA;
    }
    .status-error .status-dot {
      background: #E63946;
    }

    .status-local {
      background: #EAE9E4;
      color: #767668;
      border-color: #DCDAD2;
    }
    .status-local .status-dot {
      background: #A3A297;
    }

    .status-dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      flex-shrink: 0;
    }

    .spin-icon {
      animation: spin 1s linear infinite;
    }

    @keyframes spin {
      100% {
        transform: rotate(360deg);
      }
    }

    @keyframes pulse-dot {
      0%, 100% {
        opacity: 1;
        transform: scale(1);
      }
      50% {
        opacity: 0.4;
        transform: scale(1.4);
      }
    }

    /* Popover */
    .popover-backdrop {
      position: fixed;
      inset: 0;
      z-index: 100;
    }

    .popover-card {
      position: absolute;
      top: calc(100% + 8px);
      right: 0;
      width: 250px;
      background: #FFFFFF;
      border-radius: 16px;
      padding: 16px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.08);
      z-index: 101;
      color: #23241F;
      animation: popin 0.18s cubic-bezier(0.16, 1, 0.3, 1);
    }

    @keyframes popin {
      from {
        opacity: 0;
        transform: translateY(-4px) scale(0.96);
      }
      to {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
    }

    .popover-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 10px;
    }

    .popover-title {
      font-size: 13px;
      font-weight: 700;
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .popover-body {
      font-size: 12px;
      color: #767668;
      line-height: 1.4;
      margin-bottom: 14px;
    }

    .timestamp-detail {
      font-size: 11px;
      color: #929084;
      margin-top: 4px;
    }

    .error-box {
      background: #FAEAE8;
      border-radius: 8px;
      padding: 8px 10px;
      font-size: 11px;
      color: #9C2A2A;
      margin-top: 8px;
      word-break: break-word;
    }

    .popover-actions {
      display: flex;
      gap: 8px;
    }

    .btn-sync-now {
      flex: 1;
      padding: 8px 12px;
      background: #23241F;
      color: #FFFFFF;
      border: none;
      border-radius: 10px;
      font-size: 12px;
      font-weight: 600;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      transition: opacity 0.15s ease;
    }

    .btn-sync-now:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    .btn-sync-now:not(:disabled):hover {
      opacity: 0.9;
    }

    .btn-settings-shortcut {
      padding: 8px 10px;
      background: #EDEDE9;
      color: #23241F;
      border: none;
      border-radius: 10px;
      font-size: 12px;
      font-weight: 600;
      cursor: pointer;
      transition: background 0.15s ease;
    }

    .btn-settings-shortcut:hover {
      background: #E1E1DB;
    }
  `;

  @property({ type: String }) syncStatus: SyncStatus = 'local';
  @property({ type: String }) lastSyncedAt: string | null = null;
  @property({ type: String }) errorMessage: string | null = null;

  @state() private popoverOpen = false;
  @state() private isManualSyncing = false;

  private togglePillPopover(e: Event) {
    e.stopPropagation();
    this.popoverOpen = !this.popoverOpen;
  }

  private closePopover() {
    this.popoverOpen = false;
  }

  private async handleSyncNow() {
    if (this.isManualSyncing) return;
    this.isManualSyncing = true;
    try {
      await practiceStore.syncWithCloud(true);
    } finally {
      this.isManualSyncing = false;
    }
  }

  private handleOpenSettings() {
    this.closePopover();
    this.dispatchEvent(
      new CustomEvent('open-settings', {
        bubbles: true,
        composed: true,
      })
    );
  }

  render() {
    const isSyncing = this.syncStatus === 'syncing' || this.isManualSyncing;
    const statusLabel =
      this.syncStatus === 'synced'
        ? 'Synced'
        : isSyncing
        ? 'Syncing...'
        : this.syncStatus === 'offline'
        ? 'Offline'
        : this.syncStatus === 'error'
        ? 'Sync Error'
        : 'Local Only';

    const relativeTime = formatRelativeTime(this.lastSyncedAt);

    return html`
      <div
        class="pill-trigger status-${this.syncStatus}"
        title="Sync status: ${statusLabel}"
        @click=${this.togglePillPopover}
      >
        ${isSyncing
          ? html`
              <svg class="spin-icon" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2"/>
              </svg>
            `
          : html`<span class="status-dot"></span>`}
        <span>${statusLabel}</span>
      </div>

      ${this.popoverOpen
        ? html`
            <div class="popover-backdrop" @click=${this.closePopover}></div>
            <div class="popover-card" @click=${(e: Event) => e.stopPropagation()}>
              <div class="popover-header">
                <div class="popover-title">
                  <span class="status-dot" style="background: currentColor"></span>
                  <span>${statusLabel}</span>
                </div>
              </div>

              <div class="popover-body">
                ${this.syncStatus === 'local'
                  ? html`Cloud sync is not configured. Your practice data is saved locally on this device.`
                  : html`
                      <div>Last cloud update: <strong>${relativeTime}</strong></div>
                      ${this.lastSyncedAt
                        ? html`<div class="timestamp-detail">${new Date(this.lastSyncedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}</div>`
                        : html``}
                    `}

                ${this.errorMessage && this.syncStatus === 'error'
                  ? html`<div class="error-box">${this.errorMessage}</div>`
                  : html``}
              </div>

              <div class="popover-actions">
                ${this.syncStatus === 'local'
                  ? html`
                      <button class="btn-sync-now" @click=${this.handleOpenSettings}>
                        Configure Sync
                      </button>
                    `
                  : html`
                      <button
                        class="btn-sync-now"
                        ?disabled=${isSyncing}
                        @click=${this.handleSyncNow}
                      >
                        ${isSyncing
                          ? html`
                              <svg class="spin-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                                <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2"/>
                              </svg>
                              <span>Syncing...</span>
                            `
                          : html`
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                                <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2"/>
                              </svg>
                              <span>Sync Now</span>
                            `}
                      </button>
                      <button
                        class="btn-settings-shortcut"
                        title="Sync Settings"
                        @click=${this.handleOpenSettings}
                      >
                        ⚙
                      </button>
                    `}
              </div>
            </div>
          `
        : html``}
    `;
  }
}
