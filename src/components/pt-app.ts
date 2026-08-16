import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { TabType, Instrument, Session, ActiveSession, AppSettings, SyncStatus } from '../types';
import { practiceStore } from '../store/practice-store';
import { syncCoordinator } from '../services/sync-coordinator';
import { commonStyles } from '../styles/shared-styles';

import './views/pt-main-view';
import './views/pt-kit-view';
import './views/pt-data-view';
import './common/pt-sync-pill';
import './modals/pt-manual-entry-modal';
import './modals/pt-edit-session-modal';
import './modals/pt-edit-instrument-modal';
import './modals/pt-settings-modal';

@customElement('pt-app')
export class PtApp extends LitElement {
  static styles = [
    commonStyles,
    css`
      :host {
        display: block;
        min-height: 100vh;
        background: #8F8D88;
        font-family: 'DM Sans', system-ui, -apple-system, sans-serif;
      }

      .app-wrapper {
        min-height: 100vh;
        padding: 40px 0;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      @media (max-width: 480px) {
        .app-wrapper {
          padding: 0;
          align-items: stretch;
        }
      }

      .phone-shell {
        width: 380px;
        height: 830px;
        background: #EDEDE9;
        border-radius: 28px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        color: #23241F;
        box-shadow: 0 20px 48px rgba(0, 0, 0, 0.22);
        position: relative;
      }

      @media (max-width: 480px) {
        .phone-shell {
          width: 100%;
          height: 100vh;
          border-radius: 0;
          box-shadow: none;
        }
      }

      .top-header {
        padding: 24px 24px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-shrink: 0;
      }

      .header-date-info {
        display: flex;
        gap: 12px;
        font-size: 13px;
        color: #767668;
        font-weight: 500;
      }

      .header-actions {
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .settings-icon-btn {
        background: transparent;
        border: none;
        cursor: pointer;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #767668;
        transition: background 0.15s ease, color 0.15s ease;
      }

      .settings-icon-btn:hover {
        background: #E1E1DB;
        color: #23241F;
      }

      .main-scroll-area {
        flex: 1;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
      }

      .bottom-nav {
        padding: 14px 20px 22px;
        display: flex;
        justify-content: space-around;
        font-size: 12px;
        flex-shrink: 0;
        border-top: 1px solid #E1E1DB;
        background: #EDEDE9;
      }

      .nav-tab {
        cursor: pointer;
        user-select: none;
        padding: 6px 16px;
        border-radius: 8px;
        transition: color 0.15s ease;
      }

      .nav-tab.active {
        color: #23241F;
        font-weight: 700;
      }

      .nav-tab.inactive {
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
  @state() private syncErrorMessage: string | null = null;
  @state() private now: number = Date.now();

  // Modals
  @state() private manualLogModalOpen = false;
  @state() private settingsModalOpen = false;
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
    this.syncErrorMessage = practiceStore.getSyncErrorMessage();
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

  render() {
    const today = new Date();
    const todayDateLabel = today.toLocaleDateString([], { day: 'numeric', month: 'long' });
    const todayDayName = today.toLocaleDateString([], { weekday: 'long' });
    const activeInstruments = this.instruments.filter((i) => !i.archived);

    return html`
      <div class="app-wrapper">
        <div class="phone-shell">
          <!-- Top Header -->
          <div class="top-header">
            <div class="header-date-info">
              <span>${todayDateLabel}</span>
              <span>${todayDayName}</span>
            </div>
            <div class="header-actions">
              <pt-sync-pill
                .syncStatus=${this.syncStatus}
                .lastSyncedAt=${this.lastSyncedAt}
                .errorMessage=${this.syncErrorMessage}
                @open-settings=${() => (this.settingsModalOpen = true)}
              ></pt-sync-pill>
              <button
                class="settings-icon-btn"
                title="Settings & Backups"
                @click=${() => (this.settingsModalOpen = true)}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="3"></circle>
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                </svg>
              </button>
            </div>
          </div>

          <!-- Main Scrollable Content -->
          <div class="main-scroll-area">
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
                    @open-manual-log=${() => (this.manualLogModalOpen = true)}
                  ></pt-main-view>
                `
              : html``}
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
              : html``}
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
              : html``}
          </div>

          <!-- Bottom Navigation Bar -->
          <div class="bottom-nav">
            <span
              class="nav-tab ${this.tab === 'main' ? 'active' : 'inactive'}"
              @click=${() => (this.tab = 'main')}
            >
              Main
            </span>
            <span
              class="nav-tab ${this.tab === 'kit' ? 'active' : 'inactive'}"
              @click=${() => (this.tab = 'kit')}
            >
              Kit
            </span>
            <span
              class="nav-tab ${this.tab === 'data' ? 'active' : 'inactive'}"
              @click=${() => (this.tab = 'data')}
            >
              Data
            </span>
          </div>
        </div>
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
        @close-modal=${() => (this.settingsModalOpen = false)}
      ></pt-settings-modal>
    `;
  }
}
