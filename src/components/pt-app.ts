import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { TabType, Instrument, Session, ActiveSession, AppSettings, SyncStatus, AuthState } from '../types';
import { practiceStore } from '../store/practice-store';
import { authService } from '../services/auth-service';
import { getBackgroundUrl } from '../services/background-service';
import { commonStyles } from '../styles/shared-styles';

import './views/pt-main-view';
import './views/pt-log-view';
import './views/pt-kit-view';
import './views/pt-settings-view';
import './modals/pt-manual-entry-modal';
import './modals/pt-edit-session-modal';
import './modals/pt-auth-modal';

@customElement('pt-app')
export class PtApp extends LitElement {
  static styles = [
    commonStyles,
    css`
      :host {
        display: block;
        width: 100%;
        min-height: 100vh;
        min-height: 100dvh;
        background: #DEDDD7;
        font-family: 'DM Sans', system-ui, -apple-system, sans-serif;
        color: #23241F;
        position: relative;
        overflow-x: hidden;
      }

      .app-page-wrap {
        min-height: 100vh;
        min-height: 100dvh;
        background: #DEDDD7;
        color: #23241F;
        padding: 22px 16px 60px;
        display: flex;
        justify-content: center;
      }

      @media (min-width: 768px) {
        .app-page-wrap {
          padding: 26px 24px 70px;
        }
      }

      .app-layout-col {
        width: 100%;
        max-width: 1080px;
        min-width: 0;
        display: flex;
        flex-direction: column;
        gap: 14px;
      }

      /* Top Header Bar */
      .top-navbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px 20px;
        padding: 0 6px;
        flex-wrap: wrap;
      }

      .brand-date-box {
        display: flex;
        align-items: baseline;
        gap: 12px;
      }

      .brand-title {
        font-size: 19px;
        font-weight: 700;
        letter-spacing: -0.03em;
        color: #23241F;
      }

      .date-italic-line {
        font-family: 'Instrument Serif', serif;
        font-style: italic;
        font-size: 16px;
        color: #767668;
      }

      .top-actions-box {
        display: flex;
        align-items: center;
        gap: 10px;
        flex-wrap: wrap;
      }

      .tabs-pill-track {
        display: flex;
        background: #E4E3DD;
        border-radius: 14px;
        padding: 4px;
        gap: 4px;
        flex-wrap: wrap;
      }

      .nav-tab-btn {
        padding: 9px 16px;
        border-radius: 10px;
        font-size: 12.5px;
        font-weight: 700;
        cursor: pointer;
        border: none;
        background: transparent;
        color: #767668;
        transition: background-color 180ms ease-out, color 180ms ease-out, transform 120ms ease;
        user-select: none;
      }

      .nav-tab-btn.active {
        background: #FBFBF9;
        color: #23241F;
        box-shadow: 0 2px 6px rgba(35, 36, 31, 0.05);
      }

      .nav-tab-btn:hover:not(.active) {
        color: #23241F;
      }

      .sync-status-pill {
        display: flex;
        align-items: center;
        gap: 7px;
        background: #DFE9DE;
        color: #4F6353;
        border-radius: 999px;
        padding: 7px 13px;
        font-size: 12px;
        font-weight: 700;
        cursor: pointer;
        border: none;
        user-select: none;
        transition: filter 150ms ease;
      }

      .sync-status-pill:hover {
        filter: brightness(0.97);
      }

      .sync-dot {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: #6B7F6E;
      }

      .sync-dot.syncing {
        background: #D4A340;
        animation: softPulse 1.2s ease-in-out infinite;
      }

      .sync-dot.offline {
        background: #A3A297;
      }

      /* Main Card Container */
      .main-content-card {
        background: #EDEDE9;
        border-radius: 26px;
        padding: 16px;
        display: flex;
        flex-direction: column;
        gap: 14px;
        min-height: calc(100vh - 120px);
        min-width: 0;
        max-width: 100%;
      }

      @media (min-width: 768px) {
        .main-content-card {
          padding: 26px;
        }
      }

      /* Mobile Phone Mode (< 640px) */
      @media (max-width: 640px) {
        .app-page-wrap {
          padding: 12px 8px 48px;
        }

        .app-layout-col {
          gap: 10px;
        }

        .top-navbar {
          padding: 0 2px;
          gap: 8px 12px;
        }

        .brand-title {
          font-size: 18px;
        }

        .date-italic-line {
          font-size: 14.5px;
        }

        .top-actions-box {
          width: 100%;
          justify-content: space-between;
          gap: 8px;
        }

        .tabs-pill-track {
          flex: 1;
          justify-content: space-between;
          padding: 3px;
          gap: 2px;
        }

        .nav-tab-btn {
          flex: 1;
          text-align: center;
          padding: 7px 6px;
          font-size: 11.5px;
        }

        .sync-status-pill {
          padding: 5px 9px;
          font-size: 11px;
          flex-shrink: 0;
        }

        .main-content-card {
          padding: 14px 10px;
          border-radius: 20px;
          gap: 12px;
        }
      }

      /* Ambient Background Support */
      .ambient-bg {
        position: fixed;
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
        opacity: 0.85;
      }
    `,
  ];

  @state() private tab: TabType = 'practice';
  @state() private instruments: Instrument[] = [];
  @state() private sessions: Session[] = [];
  @state() private activeSession: ActiveSession | null = null;
  @state() private settings: AppSettings = practiceStore.getSettings();
  @state() private syncStatus: SyncStatus = 'synced';
  @state() private authState: AuthState = authService.getAuthState();
  @state() private backgroundUrl: string | null = null;
  @state() private backgroundVisible: boolean = false;
  @state() private now: number = Date.now();

  @state() private manualLogModalOpen: boolean = false;
  @state() private editSessionModalOpen: boolean = false;
  @state() private sessionToEdit: Session | null = null;
  @state() private authModalOpen: boolean = false;
  @state() private authInitialTab: 'signin' | 'create' | 'magic' | 'reset-password' = 'signin';

  private unsubscribeStore?: () => void;
  private unsubscribeAuth?: () => void;
  private unsubscribeRecovery?: () => void;
  private timerInterval?: any;

  connectedCallback() {
    super.connectedCallback();
    this.refreshState();

    this.unsubscribeStore = practiceStore.subscribe(() => {
      this.refreshState();
    });

    this.unsubscribeAuth = authService.subscribe((state) => {
      this.authState = state;
    });

    this.unsubscribeRecovery = authService.onPasswordRecovery(() => {
      this.authInitialTab = 'reset-password';
      this.authModalOpen = true;
    });

    if (authService.hasRecoveryInUrl()) {
      this.authInitialTab = 'reset-password';
      this.authModalOpen = true;
    }

    this.timerInterval = setInterval(() => {
      this.now = Date.now();
    }, 1000);

    this.checkBackground();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (this.unsubscribeStore) this.unsubscribeStore();
    if (this.unsubscribeAuth) this.unsubscribeAuth();
    if (this.unsubscribeRecovery) this.unsubscribeRecovery();
    if (this.timerInterval) clearInterval(this.timerInterval);
  }

  private refreshState() {
    this.instruments = practiceStore.getAllInstruments();
    this.sessions = practiceStore.getSessions();
    this.activeSession = practiceStore.getActiveSession();
    this.settings = practiceStore.getSettings();
    this.syncStatus = practiceStore.getSyncStatus();
    this.checkBackground();
  }

  private async checkBackground() {
    const active = this.activeSession;
    if (active) {
      const inst = this.instruments.find((i) => i.id === active.instrumentId);
      if (inst) {
        const bg = await getBackgroundUrl();
        if (bg) {
          this.backgroundUrl = bg;
          this.backgroundVisible = true;
          return;
        }
      }
    }
    this.backgroundVisible = false;
  }

  // --- Handlers ---
  private handleStartSession(e: CustomEvent<{ instrumentId: string }>) {
    practiceStore.startSession(e.detail.instrumentId);
  }

  private handleEndSession(e?: CustomEvent<{ notes?: string }>) {
    practiceStore.endSession(e?.detail?.notes);
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

  private handleRetireInstrument(e: CustomEvent<{ id: string }>) {
    practiceStore.retireInstrument(e.detail.id);
  }

  private handleRestoreInstrument(e: CustomEvent<{ id: string }>) {
    practiceStore.restoreInstrument(e.detail.id);
  }

  private handleUpdateSettings(e: CustomEvent<Partial<AppSettings>>) {
    practiceStore.updateSettings(e.detail);
  }

  private handleOpenAuthModal(e?: CustomEvent<{ tab?: 'signin' | 'create' | 'magic' | 'reset-password' }>) {
    this.authInitialTab = e?.detail?.tab || 'signin';
    this.authModalOpen = true;
  }

  private handleMagicLinkSent(e: CustomEvent<{ email: string }>) {
    this.authModalOpen = false;
    const settingsView = this.shadowRoot?.querySelector('pt-settings-view') as any;
    if (settingsView && settingsView.setMagicLinkSent) {
      settingsView.setMagicLinkSent(e.detail.email);
    }
  }

  private async handleSignOut() {
    await authService.signOut();
  }

  private async handleSyncNow() {
    await practiceStore.syncWithCloud(true);
  }

  render() {
    const today = new Date(this.now);
    const DAY_NAMES = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const MONTH_NAMES = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const todayLine = `${DAY_NAMES[today.getDay()]} ${today.getDate()} ${MONTH_NAMES[today.getMonth()]}`;

    const TABS: { id: TabType; label: string }[] = [
      { id: 'practice', label: 'Practice' },
      { id: 'log', label: 'Log' },
      { id: 'kit', label: 'Kit' },
      { id: 'settings', label: 'Settings' },
    ];

    const activeTab = this.tab === 'main' ? 'practice' : this.tab === 'data' ? 'log' : this.tab;
    const isAuthed = this.authState.isAuthenticated;
    const syncLabel = this.syncStatus === 'syncing' ? 'Syncing...' : isAuthed ? 'Synced' : 'On this device';

    return html`
      ${this.backgroundUrl
        ? html`<div
            class="ambient-bg ${this.backgroundVisible ? 'visible' : ''}"
            style="background-image: url('${this.backgroundUrl}')"
          ></div>`
        : ''}

      <div class="app-page-wrap">
        <div class="app-layout-col">
          <!-- Top Navigation Bar -->
          <header class="top-navbar">
            <div class="brand-date-box">
              <div class="brand-title">Practice</div>
              <div class="date-italic-line">${todayLine}</div>
            </div>

            <div class="top-actions-box">
              <nav class="tabs-pill-track">
                ${TABS.map(
                  (t) => html`
                    <button
                      class="nav-tab-btn ${activeTab === t.id ? 'active' : ''}"
                      @click=${() => (this.tab = t.id)}
                    >
                      ${t.label}
                    </button>
                  `
                )}
              </nav>

              <button
                class="sync-status-pill"
                @click=${() => (this.tab = 'settings')}
                title="Sync status · click to open settings"
              >
                <span
                  class="sync-dot ${this.syncStatus === 'syncing'
                    ? 'syncing'
                    : !isAuthed
                    ? 'offline'
                    : ''}"
                ></span>
                <span>${syncLabel}</span>
              </button>
            </div>
          </header>

          <!-- Main Container Card -->
          <main class="main-content-card">
            ${activeTab === 'practice'
              ? html`
                  <pt-main-view
                    .instruments=${this.instruments}
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
            ${activeTab === 'log'
              ? html`
                  <pt-log-view
                    .instruments=${this.instruments}
                    .sessions=${this.sessions}
                    @save-manual-session=${this.handleSaveManualSession}
                    @update-session=${this.handleUpdateSession}
                    @delete-session=${this.handleDeleteSession}
                  ></pt-log-view>
                `
              : ''}
            ${activeTab === 'kit'
              ? html`
                  <pt-kit-view
                    .instruments=${this.instruments}
                    .sessions=${this.sessions}
                    @add-instrument=${this.handleAddInstrument}
                    @update-instrument=${this.handleUpdateInstrument}
                    @retire-instrument=${this.handleRetireInstrument}
                    @restore-instrument=${this.handleRestoreInstrument}
                  ></pt-kit-view>
                `
              : ''}
            ${activeTab === 'settings'
              ? html`
                  <pt-settings-view
                    .settings=${this.settings}
                    .authState=${this.authState}
                    .syncStatus=${this.syncStatus}
                    .sessionCount=${this.sessions.filter((s) => !s.deletedAt).length}
                    @update-settings=${this.handleUpdateSettings}
                    @open-auth-modal=${this.handleOpenAuthModal}
                    @sign-out=${this.handleSignOut}
                    @sync-now=${this.handleSyncNow}
                  ></pt-settings-view>
                `
              : ''}
          </main>
        </div>
      </div>

      <!-- Modals -->
      <pt-auth-modal
        .open=${this.authModalOpen}
        .initialTab=${this.authInitialTab}
        @magic-link-sent=${this.handleMagicLinkSent}
        @close-modal=${() => (this.authModalOpen = false)}
      ></pt-auth-modal>

      <pt-manual-entry-modal
        .instruments=${this.instruments.filter((i) => !i.archived)}
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
    `;
  }
}
