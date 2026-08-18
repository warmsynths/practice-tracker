import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { TabType, Instrument, Session, ActiveSession, AppSettings, SyncStatus } from '../types';
import { practiceStore } from '../store/practice-store';
import { syncCoordinator } from '../services/sync-coordinator';
import { getBackgroundUrl } from '../services/background-service';
import { commonStyles } from '../styles/shared-styles';

import './views/pt-main-view';
import './views/pt-kit-view';
import './views/pt-data-view';
import './common/pt-sync-pill';
import './modals/pt-manual-entry-modal';
import './modals/pt-edit-session-modal';
import './modals/pt-edit-instrument-modal';
import './modals/pt-settings-modal';
import './modals/pt-auth-modal';

@customElement('pt-app')
export class PtApp extends LitElement {
  static styles = [
    commonStyles,
    css`
      :host {
        display: block;
        width: 100%;
        height: 100%;
        height: 100dvh;
        overflow: hidden;
        background: #EDEDE9;
        font-family: 'DM Sans', system-ui, -apple-system, sans-serif;
        color: #23241F;
        position: relative;
      }

      .app-shell {
        width: 100%;
        max-width: 520px;
        height: 100%;
        height: 100dvh;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        background: transparent;
        position: relative;
        z-index: 1;
        overflow: hidden;
      }

      .ambient-bg {
        position: absolute;
        inset: 0;
        z-index: 0;
        pointer-events: none;
        background-size: cover;
        background-position: center bottom;
        background-repeat: no-repeat;
        filter: saturate(0.3) brightness(1.1);
        -webkit-mask-image: linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 30%, rgba(0,0,0,0) 55%);
        mask-image: linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 30%, rgba(0,0,0,0) 55%);
        opacity: 0;
        transition: opacity 600ms ease-out;
      }

      .ambient-bg.visible {
        opacity: 1;
      }

      .ambient-bg-noise {
        position: absolute;
        inset: 0;
        z-index: 0;
        pointer-events: none;
        opacity: 0.17;
        filter: url(#ambient-noise);
        background: transparent;
        -webkit-mask-image: linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 30%, rgba(0,0,0,0) 55%);
        mask-image: linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 30%, rgba(0,0,0,0) 55%);
      }

      @media (prefers-reduced-motion: reduce) {
        .ambient-bg {
          transition: none;
        }
      }

      @media (min-width: 900px) {
        :host {
          height: 100vh;
        }
        .app-shell {
          max-width: 1120px;
          flex-direction: row;
          height: 100vh;
          overflow: hidden;
        }
      }

      /* Desktop Sidebar */
      .desktop-sidebar {
        display: none;
        position: relative;
        z-index: 1;
      }

      @media (min-width: 900px) {
        .desktop-sidebar {
          width: 232px;
          flex-shrink: 0;
          border-right: 1px solid #E1E1DB;
          padding: 34px 22px;
          display: flex;
          flex-direction: column;
          gap: 30px;
          height: 100vh;
          overflow-y: auto;
          position: sticky;
          top: 0;
        }
      }

      .sidebar-brand {
        font-size: 17px;
        font-weight: 700;
        letter-spacing: -0.02em;
      }

      .sidebar-nav {
        display: flex;
        flex-direction: column;
        gap: 4px;
      }

      .sidebar-nav-item {
        padding: 11px 14px;
        border-radius: 12px;
        font-size: 14px;
        cursor: pointer;
        transition: background-color 180ms ease-out, color 180ms ease-out;
        user-select: none;
      }

      .sidebar-nav-item.active {
        background: #E4E3DD;
        color: #23241F;
        font-weight: 700;
      }

      .sidebar-nav-item.inactive {
        background: transparent;
        color: #767668;
        font-weight: 400;
      }

      .sidebar-nav-item.inactive:hover {
        background: rgba(228, 227, 221, 0.5);
        color: #23241F;
      }

      .sidebar-footer {
        margin-top: auto;
        display: flex;
        flex-direction: column;
        gap: 12px;
      }

      .sidebar-sync-status {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 12px;
        color: #767668;
        cursor: pointer;
      }

      .status-dot {
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background: #6B7F6E;
      }

      .status-dot.syncing {
        background: #D4A340;
        animation: softPulse 1.2s ease-in-out infinite;
      }

      .status-dot.error {
        background: #B4543C;
      }

      .sidebar-user-row {
        display: flex;
        align-items: center;
        gap: 10px;
        cursor: pointer;
      }

      .avatar-badge {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background: #DCDBD3;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        font-weight: 700;
        color: #4A4945;
        user-select: none;
      }

      /* Main Content Pane */
      .content-pane {
        flex: 1;
        display: flex;
        flex-direction: column;
        min-width: 0;
        height: 100%;
        min-height: 0;
        overflow: hidden;
        position: relative;
        z-index: 1;
      }

      @media (min-width: 900px) {
        .content-pane {
          height: 100vh;
          overflow: hidden;
        }
      }

      /* Mobile Header */
      .mobile-header {
        padding: 22px 20px 6px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 10px;
        position: relative;
        flex-shrink: 0;
      }

      @media (min-width: 900px) {
        .mobile-header {
          display: none;
        }
      }

      .mobile-date {
        display: flex;
        gap: 12px;
        font-size: 14px;
        color: #767668;
      }

      .mobile-header-actions {
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .sync-tag-btn {
        display: flex;
        align-items: center;
        gap: 6px;
        background: #DFE9DE;
        color: #4F6353;
        border-radius: 999px;
        padding: 5px 11px;
        font-size: 12px;
        font-weight: 500;
        cursor: pointer;
        border: none;
        transition: transform 160ms cubic-bezier(0.2, 0.8, 0.2, 1), filter 160ms ease-out;
      }

      .sync-tag-btn:active {
        transform: scale(0.975);
      }

      .settings-gear-btn {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        color: #767668;
        font-size: 16px;
        background: transparent;
        border: none;
      }

      .settings-gear-btn:hover {
        background: #E1E1DB;
        color: #23241F;
      }

      /* Sync Popover */
      .sync-popover {
        position: absolute;
        top: 58px;
        right: 20px;
        left: 20px;
        background: #FFF;
        border-radius: 18px;
        padding: 18px;
        box-shadow: 0 18px 40px rgba(35, 36, 31, 0.14);
        z-index: 50;
        transform-origin: top right;
        animation: popIn 180ms cubic-bezier(0.2, 0.8, 0.2, 1) both;
      }

      @media (min-width: 900px) {
        .sync-popover {
          left: auto;
          right: auto;
          bottom: 70px;
          top: auto;
          width: 280px;
          margin-left: 10px;
        }
      }

      .sync-popover-header {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 13px;
        font-weight: 700;
      }

      .sync-popover-details {
        font-size: 13px;
        color: #767668;
        margin-top: 10px;
      }

      .sync-popover-clock {
        font-size: 12px;
        color: #A3A297;
        margin-top: 2px;
      }

      .sync-popover-actions {
        display: flex;
        gap: 8px;
        margin-top: 14px;
      }

      .btn-sync-now {
        flex: 1;
        background: #23241F;
        color: #F2F1EC;
        border-radius: 12px;
        height: 44px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        font-weight: 700;
        cursor: pointer;
        border: none;
      }

      .btn-popover-gear {
        width: 44px;
        height: 44px;
        border-radius: 12px;
        background: #F0EFEA;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        color: #767668;
        border: none;
      }

      /* Scrollable Views Area */
      .views-scroll-area {
        flex: 1;
        overflow-y: auto;
        overflow-x: hidden;
        -webkit-overflow-scrolling: touch;
        padding: 10px 20px 36px;
        min-height: 0;
        overscroll-behavior-y: contain;
      }

      @media (min-width: 900px) {
        .views-scroll-area {
          padding: 38px 40px 48px;
        }
      }

      /* Mobile Bottom Navigation */
      .mobile-bottom-nav {
        padding: 12px 20px calc(14px + env(safe-area-inset-bottom, 0px));
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-size: 13px;
        flex-shrink: 0;
        border-top: 1px solid #E1E1DB;
        background: transparent;
        position: relative;
        z-index: 2;
      }

      @media (min-width: 900px) {
        .mobile-bottom-nav {
          display: none;
        }
      }

      .mobile-nav-item {
        cursor: pointer;
        user-select: none;
        padding: 6px 12px;
        border-radius: 8px;
        transition: color 180ms ease-out, transform 160ms cubic-bezier(0.2, 0.8, 0.2, 1);
      }

      .mobile-nav-item.active {
        color: #23241F;
        font-weight: 700;
      }

      .mobile-nav-item.inactive {
        color: #767668;
        font-weight: 400;
      }
    `,
  ];

  @state() private tab: TabType = 'main';
  @state() private instruments: Instrument[] = [];
  @state() private sessions: Session[] = [];
  @state() private activeSession: ActiveSession | null = null;
  @state() private settings: AppSettings = { soundEnabled: true, hapticsEnabled: true };
  @state() private syncStatus: SyncStatus = 'local';
  @state() private lastSyncedAt: string | null = null;
  @state() private userEmail?: string;
  @state() private now: number = Date.now();
  @state() private syncPopoverOpen = false;
  @state() private backgroundUrl: string | null = null;
  @state() private backgroundVisible = false;

  // Modals
  @state() private manualLogModalOpen = false;
  @state() private settingsModalOpen = false;
  @state() private authModalOpen = false;
  @state() private editSessionModalOpen = false;
  @state() private sessionToEdit: Session | null = null;
  @state() private editInstrumentModalOpen = false;
  @state() private instrumentToEdit: Instrument | null = null;

  private unsubscribeStore?: () => void;
  private timerInterval?: number;

  connectedCallback() {
    super.connectedCallback();
    this.refreshState();

    this.unsubscribeStore = practiceStore.subscribe(() => {
      this.refreshState();
    });

    syncCoordinator.start();

    getBackgroundUrl().then((url) => {
      this.backgroundUrl = url;
      if (url) {
        // Trigger fade-in after the element renders (next frame)
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            this.backgroundVisible = true;
          });
        });
      }
    });

    this.timerInterval = window.setInterval(() => {
      if (this.activeSession) {
        this.now = Date.now();
      }
    }, 1000);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (this.unsubscribeStore) this.unsubscribeStore();
    if (this.timerInterval) clearInterval(this.timerInterval);
    syncCoordinator.stop();
  }

  private refreshState() {
    this.instruments = practiceStore.getAllInstruments();
    this.sessions = practiceStore.getSessions();
    this.activeSession = practiceStore.getActiveSession();
    this.settings = practiceStore.getSettings();
    this.syncStatus = practiceStore.getSyncStatus();
    this.lastSyncedAt = practiceStore.getLastSyncedAt();
    this.userEmail = practiceStore.getUserEmail();
  }

  // --- Handlers ---
  private handleStartSession(e: CustomEvent<{ instrumentId: string }>) {
    practiceStore.startSession(e.detail.instrumentId);
  }

  private handleEndSession() {
    practiceStore.endSession();
  }

  private handleDiscardSession() {
    practiceStore.discardSession();
  }

  private handleSaveManualSession(
    e: CustomEvent<{ instrumentId: string; start: Date; duration: number; notes?: string }>
  ) {
    const { instrumentId, start, duration, notes } = e.detail;
    practiceStore.logManualSession(instrumentId, start, duration, notes);
  }

  private handleQuickLog(e: CustomEvent<{ instrumentId: string; duration: number; daysAgo: number }>) {
    const { instrumentId, duration, daysAgo } = e.detail;
    const day = new Date();
    day.setDate(day.getDate() - daysAgo);
    day.setHours(18, 0, 0, 0);
    practiceStore.logManualSession(instrumentId, day, duration);
  }

  private handleUpdateSession(e: CustomEvent<{ session: Session }>) {
    practiceStore.updateSession(e.detail.session);
  }

  private handleDeleteSession(e: CustomEvent<{ sessionId: string }>) {
    practiceStore.deleteSession(e.detail.sessionId);
  }

  private handleAddInstrument(e: CustomEvent<{ name: string; color: string; tier: 'primary' | 'secondary' }>) {
    practiceStore.addInstrument(e.detail.name, e.detail.color, e.detail.tier);
  }

  private handleUpdateInstrument(e: CustomEvent<{ instrument: Instrument }>) {
    practiceStore.updateInstrument(e.detail.instrument);
  }

  private handleRemoveInstrument(e: CustomEvent<{ instrumentId: string }>) {
    practiceStore.removeInstrument(e.detail.instrumentId);
  }

  private handleUpdateSettings(e: CustomEvent<Partial<AppSettings>>) {
    practiceStore.updateSettings(e.detail);
  }

  private handleExportBackup() {
    const jsonStr = practiceStore.exportBackup();
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `practice-tracker-backup-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }

  private handleImportBackup(e: CustomEvent<{ jsonString: string }>) {
    const res = practiceStore.importBackup(e.detail.jsonString);
    alert(res.message);
    if (res.success) {
      this.settingsModalOpen = false;
    }
  }

  private handleLoadDemoData() {
    practiceStore.loadDemoData();
  }

  private handleClearAllData() {
    practiceStore.clearAllData();
  }

  private async handleTriggerSync() {
    this.syncPopoverOpen = false;
    await practiceStore.syncWithCloud(false);
  }


  render() {
    const today = new Date();
    const todayDateLabel = today.toLocaleDateString([], { day: 'numeric', month: 'long' });
    const todayDayName = today.toLocaleDateString([], { weekday: 'long' });
    const activeInstruments = this.instruments.filter((i) => !i.archived);
    const avatarInitial = (this.userEmail || 'U').charAt(0).toUpperCase();
    const syncClock = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    return html`
      ${this.backgroundUrl
        ? html`
          <svg width="0" height="0" style="position:absolute">
            <filter id="ambient-noise">
              <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" />
            </filter>
          </svg>
          <div class="ambient-bg ${this.backgroundVisible ? 'visible' : ''}" style="background-image: url('${this.backgroundUrl}')"></div>
          <div class="ambient-bg-noise"></div>
        `
        : ''}
      <div class="app-shell">
        <!-- Desktop Sidebar -->
        <aside class="desktop-sidebar">
          <div class="sidebar-brand">Practice</div>
          <nav class="sidebar-nav">
            <div
              class="sidebar-nav-item ${this.tab === 'main' ? 'active' : 'inactive'}"
              @click=${() => {
                this.tab = 'main';
                this.syncPopoverOpen = false;
              }}
            >
              Main
            </div>
            <div
              class="sidebar-nav-item ${this.tab === 'kit' ? 'active' : 'inactive'}"
              @click=${() => {
                this.tab = 'kit';
                this.syncPopoverOpen = false;
              }}
            >
              Kit
            </div>
            <div
              class="sidebar-nav-item ${this.tab === 'data' ? 'active' : 'inactive'}"
              @click=${() => {
                this.tab = 'data';
                this.syncPopoverOpen = false;
              }}
            >
              Data
            </div>
          </nav>
          <div class="sidebar-footer">
            <div
              class="sidebar-sync-status"
              @click=${() => (this.syncPopoverOpen = !this.syncPopoverOpen)}
            >
              <span
                class="status-dot ${this.syncStatus === 'syncing' ? 'syncing' : this.syncStatus === 'error' ? 'error' : ''}"
              ></span>
              ${this.syncStatus === 'synced' ? 'Synced · just now' : this.syncStatus === 'syncing' ? 'Syncing...' : 'Local storage'}
            </div>
            <div
              class="sidebar-user-row"
              @click=${() => (this.settingsModalOpen = true)}
            >
              <span class="avatar-badge">${avatarInitial}</span>
              <span style="font-size: 13px; color: #767668;">Settings</span>
            </div>
          </div>
        </aside>

        <!-- Main Content Area -->
        <main class="content-pane">
          <!-- Mobile Header -->
          <header class="mobile-header">
            <div class="mobile-date">
              <span>${todayDateLabel}</span>
              <span>${todayDayName}</span>
            </div>
            <div class="mobile-header-actions">
              <button
                data-tap
                class="sync-tag-btn"
                @click=${() => (this.syncPopoverOpen = !this.syncPopoverOpen)}
              >
                <span
                  class="status-dot ${this.syncStatus === 'syncing' ? 'syncing' : this.syncStatus === 'error' ? 'error' : ''}"
                ></span>
                ${this.syncStatus === 'synced' ? 'Synced' : this.syncStatus === 'syncing' ? 'Syncing' : 'Local'}
              </button>
              <span
                class="avatar-badge"
                style="cursor: pointer;"
                @click=${() => (this.settingsModalOpen = true)}
              >
                ${avatarInitial}
              </span>
              <button
                class="settings-gear-btn"
                title="Settings & Backups"
                @click=${() => (this.settingsModalOpen = true)}
              >
                &#9881;
              </button>
            </div>

            <!-- Sync Popover -->
            ${this.syncPopoverOpen
              ? html`
                  <div class="sync-popover">
                    <div class="sync-popover-header">
                      <span class="status-dot"></span>
                      ${this.syncStatus === 'synced' ? 'Synced' : 'Local Database'}
                    </div>
                    <div class="sync-popover-details">
                      Last cloud update: <strong style="color: #23241F;">${this.lastSyncedAt ? 'Just now' : 'Local only'}</strong>
                    </div>
                    <div class="sync-popover-clock">${syncClock}</div>
                    <div class="sync-popover-actions">
                      <button
                        class="btn-sync-now"
                        @click=${this.handleTriggerSync}
                      >
                        Sync now
                      </button>
                      <button
                        class="btn-popover-gear"
                        @click=${() => {
                          this.syncPopoverOpen = false;
                          this.settingsModalOpen = true;
                        }}
                      >
                        &#9881;
                      </button>
                    </div>
                  </div>
                `
              : ''}
          </header>

          <!-- Scrollable Views Area -->
          <div class="views-scroll-area">
            ${this.tab === 'main'
              ? html`
                  <pt-main-view
                    .instruments=${activeInstruments}
                    .sessions=${this.sessions}
                    .activeSession=${this.activeSession}
                    .now=${this.now}
                    @start-session=${this.handleStartSession}
                    @end-session=${this.handleEndSession}
                    @discard-session=${this.handleDiscardSession}
                    @quick-log-session=${this.handleQuickLog}
                    @open-manual-log=${() => (this.manualLogModalOpen = true)}
                  ></pt-main-view>
                `
              : ''}
            ${this.tab === 'kit'
              ? html`
                  <pt-kit-view
                    .instruments=${this.instruments}
                    .sessions=${this.sessions}
                    @add-instrument=${this.handleAddInstrument}
                    @remove-instrument=${this.handleRemoveInstrument}
                    @open-edit-instrument=${(e: CustomEvent<{ instrument: Instrument }>) => {
                      this.instrumentToEdit = e.detail.instrument;
                      this.editInstrumentModalOpen = true;
                    }}
                  ></pt-kit-view>
                `
              : ''}
            ${this.tab === 'data'
              ? html`
                  <pt-data-view
                    .instruments=${this.instruments}
                    .sessions=${this.sessions}
                    @open-edit-session=${(e: CustomEvent<{ session: Session }>) => {
                      this.sessionToEdit = e.detail.session;
                      this.editSessionModalOpen = true;
                    }}
                  ></pt-data-view>
                `
              : ''}
          </div>

          <!-- Mobile Bottom Navigation -->
          <nav class="mobile-bottom-nav">
            <span
              data-tap
              class="mobile-nav-item ${this.tab === 'main' ? 'active' : 'inactive'}"
              @click=${() => (this.tab = 'main')}
            >
              Main
            </span>
            <span
              data-tap
              class="mobile-nav-item ${this.tab === 'kit' ? 'active' : 'inactive'}"
              @click=${() => (this.tab = 'kit')}
            >
              Kit
            </span>
            <span
              data-tap
              class="mobile-nav-item ${this.tab === 'data' ? 'active' : 'inactive'}"
              @click=${() => (this.tab = 'data')}
            >
              Data
            </span>
          </nav>
        </main>
      </div>

      <!-- Modals -->
      <pt-manual-entry-modal
        .instruments=${activeInstruments}
        .open=${this.manualLogModalOpen}
        @save-manual-session=${this.handleSaveManualSession}
        @close-modal=${() => (this.manualLogModalOpen = false)}
      ></pt-manual-entry-modal>

      <pt-edit-session-modal
        .instruments=${this.instruments}
        .session=${this.sessionToEdit}
        .open=${this.editSessionModalOpen}
        @update-session=${this.handleUpdateSession}
        @delete-session=${this.handleDeleteSession}
        @close-modal=${() => {
          this.editSessionModalOpen = false;
          this.sessionToEdit = null;
        }}
      ></pt-edit-session-modal>

      <pt-edit-instrument-modal
        .instrument=${this.instrumentToEdit}
        .canDelete=${activeInstruments.length > 1}
        .open=${this.editInstrumentModalOpen}
        @update-instrument=${this.handleUpdateInstrument}
        @remove-instrument=${this.handleRemoveInstrument}
        @close-modal=${() => {
          this.editInstrumentModalOpen = false;
          this.instrumentToEdit = null;
        }}
      ></pt-edit-instrument-modal>

      <pt-settings-modal
        .settings=${this.settings}
        .syncStatus=${this.syncStatus}
        .open=${this.settingsModalOpen}
        @update-settings=${this.handleUpdateSettings}
        @export-backup=${this.handleExportBackup}
        @import-backup=${this.handleImportBackup}
        @load-demo-data=${this.handleLoadDemoData}
        @clear-all-data=${this.handleClearAllData}
        @open-auth-modal=${() => {
          this.settingsModalOpen = false;
          this.authModalOpen = true;
        }}
        @close-modal=${() => (this.settingsModalOpen = false)}
      ></pt-settings-modal>

      <pt-auth-modal
        .open=${this.authModalOpen}
        @close-modal=${() => (this.authModalOpen = false)}
      ></pt-auth-modal>
    `;
  }
}

