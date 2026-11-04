import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { TabType, Instrument, Session, ActiveSession, AppSettings, SyncStatus, AuthState } from '../types';
import { practiceStore } from '../store/practice-store';
import { authService } from '../services/auth-service';
import { getBackgroundUrl } from '../services/background-service';
import { commonStyles } from '../styles/shared-styles';
import { applyThemeVars } from '../styles/theme';
import { formatRelativeTime, weekToDateMinutes } from '../utils/date-utils';

import './views/pt-today-view';
import './views/pt-log-view';
import './views/pt-insights-view';
import './views/pt-settings-view';
import './modals/pt-manual-entry-modal';
import './modals/pt-edit-session-modal';
import './modals/pt-auth-modal';
import './common/pt-recording-overlay';
import './common/pt-celebration-overlay';

const TABS: { id: TabType; label: string }[] = [
  { id: 'today', label: 'Today' },
  { id: 'log', label: 'Log' },
  { id: 'insights', label: 'Insights' },
  { id: 'settings', label: 'Settings' },
];

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
        background: var(--bg, #2B1C33);
        font-family: 'Manrope', system-ui, -apple-system, sans-serif;
        color: var(--ink, #F5E9DA);
        position: relative;
        overflow-x: hidden;
        transition: background-color 300ms ease-out;
      }

      .app-page-wrap {
        min-height: 100vh;
        min-height: 100dvh;
        padding: 22px 28px 40px;
        display: flex;
        justify-content: center;
        position: relative;
        z-index: 1;
      }

      .app-page-wrap.narrow {
        padding: 18px 14px 100px;
      }

      .app-layout-col {
        width: 100%;
        max-width: 1120px;
        min-width: 0;
        display: flex;
        flex-direction: column;
        gap: 16px;
      }

      /* Top bar */
      .top-bar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px 20px;
        flex-wrap: wrap;
      }

      .header-title {
        font-family: 'Gabarito', sans-serif;
        font-size: 21px;
        font-weight: 900;
        letter-spacing: -0.02em;
      }

      .top-actions {
        display: flex;
        align-items: center;
        gap: 10px;
      }

      .pill-nav {
        display: flex;
        background: var(--card);
        border-radius: 999px;
        padding: 4px;
        gap: 2px;
      }

      .pill-nav-btn {
        padding: 8px 16px;
        border-radius: 999px;
        font-family: 'Gabarito', sans-serif;
        font-size: 13px;
        font-weight: 700;
        cursor: pointer;
        border: none;
        background: transparent;
        color: var(--muted);
        transition: background-color 160ms ease-out, color 160ms ease-out;
        user-select: none;
      }

      .pill-nav-btn.active {
        background: var(--ink);
        color: var(--bg);
      }

      /* Sync pill */
      .sync-pill {
        display: flex;
        align-items: center;
        gap: 7px;
        background: var(--card);
        color: var(--ink);
        border-radius: 999px;
        height: 36px;
        padding: 0 14px;
        font-family: 'Manrope', sans-serif;
        font-size: 12px;
        font-weight: 800;
        cursor: pointer;
        border: none;
        user-select: none;
        transition: filter 150ms ease-out;
        position: relative;
      }

      .sync-pill:hover {
        filter: brightness(1.08);
      }

      .sync-dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
      }

      .sync-dot.guest { background: var(--accent); }
      .sync-dot.saving { background: #FFC2A8; animation: softPulse 1s ease-in-out infinite; }
      .sync-dot.syncing { background: var(--chart); animation: softPulse 0.7s ease-in-out infinite; }
      .sync-dot.synced { background: #9BD49B; }

      .sync-panel {
        position: absolute;
        top: 44px;
        right: 0;
        width: 300px;
        background: var(--card);
        border-radius: 20px;
        padding: 16px;
        box-shadow: 0 30px 60px -20px rgba(10, 5, 15, 0.7);
        z-index: 40;
        animation: popIn 200ms cubic-bezier(0.2, 0.8, 0.2, 1) both;
        text-align: left;
      }

      .sync-panel-title {
        font-family: 'Gabarito', sans-serif;
        font-weight: 800;
        font-size: 15px;
        margin-bottom: 6px;
      }

      .sync-panel-copy {
        font-size: 12px;
        color: var(--muted);
        line-height: 1.4;
        margin-bottom: 14px;
      }

      /* Bottom tab bar (mobile) */
      .bottom-tab-bar {
        position: fixed;
        left: 12px;
        right: 12px;
        bottom: 14px;
        height: 60px;
        border-radius: 999px;
        background: var(--card);
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        padding: 5px;
        gap: 4px;
        box-shadow: 0 10px 30px rgba(10, 5, 15, 0.5);
        z-index: 20;
      }

      .bottom-tab-btn {
        border: none;
        border-radius: 999px;
        background: transparent;
        color: var(--muted);
        font-family: 'Gabarito', sans-serif;
        font-size: 12px;
        font-weight: 700;
        cursor: pointer;
      }

      .bottom-tab-btn.active {
        background: var(--ink);
        color: var(--bg);
      }

      main {
        display: block;
        min-width: 0;
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

  @state() private tab: TabType = 'today';
  @state() private instruments: Instrument[] = [];
  @state() private sessions: Session[] = [];
  @state() private activeSession: ActiveSession | null = null;
  @state() private settings: AppSettings = practiceStore.getSettings();
  @state() private syncStatus: SyncStatus = 'synced';
  @state() private authState: AuthState = authService.getAuthState();
  @state() private backgroundUrl: string | null = null;
  @state() private backgroundVisible: boolean = false;
  @state() private now: number = Date.now();
  @state() private wide: boolean = typeof window !== 'undefined' ? window.innerWidth >= 860 : true;

  @state() private manualLogModalOpen: boolean = false;
  @state() private editSessionModalOpen: boolean = false;
  @state() private sessionToEdit: Session | null = null;
  @state() private authModalOpen: boolean = false;
  @state() private authInitialTab: 'signin' | 'create' | 'magic' | 'reset-password' = 'signin';
  @state() private syncPanelOpen: boolean = false;
  @state() private celebrating: boolean = false;

  private unsubscribeStore?: () => void;
  private unsubscribeAuth?: () => void;
  private unsubscribeRecovery?: () => void;
  private timerInterval?: any;
  private celebrationTimeout?: any;
  private resizeHandler = () => {
    this.wide = window.innerWidth >= 860;
  };

  connectedCallback() {
    super.connectedCallback();
    this.refreshState();
    applyThemeVars(this, this.settings.theme);

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

    window.addEventListener('resize', this.resizeHandler);
    this.checkBackground();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (this.unsubscribeStore) this.unsubscribeStore();
    if (this.unsubscribeAuth) this.unsubscribeAuth();
    if (this.unsubscribeRecovery) this.unsubscribeRecovery();
    if (this.timerInterval) clearInterval(this.timerInterval);
    if (this.celebrationTimeout) clearTimeout(this.celebrationTimeout);
    window.removeEventListener('resize', this.resizeHandler);
  }

  private refreshState() {
    const previousSettings = this.settings;
    this.instruments = practiceStore.getAllInstruments();
    this.sessions = practiceStore.getSessions();
    this.activeSession = practiceStore.getActiveSession();
    this.settings = practiceStore.getSettings();
    this.syncStatus = practiceStore.getSyncStatus();
    this.checkBackground();
    if (previousSettings.theme !== this.settings.theme) {
      applyThemeVars(this, this.settings.theme);
    }
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
    this.withGoalCelebrationCheck(() => practiceStore.endSession(e?.detail?.notes));
  }

  /** Runs a mutation that may add practice minutes, celebrating if it crosses the weekly goal. */
  private withGoalCelebrationCheck(mutate: () => void) {
    const goalBefore = this.isGoalReachedNow();
    mutate();
    const goalAfter = this.isGoalReachedNow();
    if (!goalBefore && goalAfter && this.settings.celebrateGoal) {
      this.triggerCelebration();
    }
  }

  private isGoalReachedNow(): boolean {
    const goal = this.settings.weeklyGoalMinutes || 420;
    return weekToDateMinutes(this.sessions, new Date(this.now)) >= goal;
  }

  private triggerCelebration() {
    this.celebrating = true;
    if (this.celebrationTimeout) clearTimeout(this.celebrationTimeout);
    this.celebrationTimeout = setTimeout(() => {
      this.celebrating = false;
    }, 4200);
  }

  private handleDiscardSession() {
    practiceStore.discardSession();
  }

  private handleSaveManualSession(
    e: CustomEvent<{ instrumentId: string; start: Date; duration: number; notes?: string }>
  ) {
    const { instrumentId, start, duration, notes } = e.detail;
    this.withGoalCelebrationCheck(() => practiceStore.logManualSession(instrumentId, start, duration, notes));
  }

  private handleQuickLog(e: CustomEvent<{ instrumentId: string; duration: number; daysAgo: number }>) {
    const { instrumentId, duration, daysAgo } = e.detail;
    const day = new Date();
    day.setDate(day.getDate() - daysAgo);
    day.setHours(18, 0, 0, 0);
    this.withGoalCelebrationCheck(() => practiceStore.logManualSession(instrumentId, day, duration));
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

  private renderSyncPill(isAuthed: boolean) {
    const dotClass = this.syncStatus === 'syncing' ? 'syncing' : !isAuthed ? 'guest' : 'synced';
    const label = this.syncStatus === 'syncing'
      ? 'syncing…'
      : !isAuthed
      ? 'this device only'
      : `synced ${this.settings.lastSyncedAt ? formatRelativeTime(this.settings.lastSyncedAt) : 'now'}`;

    return html`
      <button class="sync-pill" @click=${() => (isAuthed ? (this.syncPanelOpen = !this.syncPanelOpen) : this.handleOpenAuthModal())}>
        <span class="sync-dot ${dotClass}"></span>
        <span>${label}</span>
      </button>
      ${this.syncPanelOpen
        ? html`
            <div class="sync-panel" @click=${(e: Event) => e.stopPropagation()}>
              <div class="sync-panel-title">
                ${this.syncStatus === 'syncing' ? 'Syncing…' : `Synced ${this.settings.lastSyncedAt ? formatRelativeTime(this.settings.lastSyncedAt) : 'now'}`}
              </div>
              <div class="sync-panel-copy">
                Syncs on open, when you come back to the app, and a second after every session or edit.
              </div>
              <button class="btn btn-primary" style="height:40px" @click=${this.handleSyncNow}>Sync now</button>
            </div>
          `
        : ''}
    `;
  }

  render() {
    const isAuthed = this.authState.isAuthenticated;

    return html`
      ${this.backgroundUrl
        ? html`<div
            class="ambient-bg ${this.backgroundVisible ? 'visible' : ''}"
            style="background-image: url('${this.backgroundUrl}')"
          ></div>`
        : ''}

      ${this.activeSession
        ? html`
            <pt-recording-overlay
              .activeSession=${this.activeSession}
              .instrument=${this.instruments.find((i) => i.id === this.activeSession!.instrumentId) || null}
              .sessions=${this.sessions}
              .now=${this.now}
              .weeklyGoalMinutes=${this.settings.weeklyGoalMinutes || 420}
              .wide=${this.wide}
              .reduceMotion=${!!this.settings.reduceMotion}
              @end-session=${this.handleEndSession}
              @discard-session=${this.handleDiscardSession}
            ></pt-recording-overlay>
          `
        : html`
            <div class="app-page-wrap ${this.wide ? '' : 'narrow'}">
              <div class="app-layout-col">
                <header class="top-bar">
                  <div class="header-title">${this.wide ? 'practice' : TABS.find((t) => t.id === this.tab)?.label}</div>
                  <div class="top-actions">
                    ${this.wide
                      ? html`
                          <nav class="pill-nav">
                            ${TABS.map(
                              (t) => html`
                                <button class="pill-nav-btn ${this.tab === t.id ? 'active' : ''}" @click=${() => (this.tab = t.id)}>
                                  ${t.label}
                                </button>
                              `
                            )}
                          </nav>
                        `
                      : ''}
                    ${this.renderSyncPill(isAuthed)}
                  </div>
                </header>

                <main>
                  ${this.tab === 'today'
                    ? html`
                        <pt-today-view
                          .instruments=${this.instruments}
                          .sessions=${this.sessions}
                          .settings=${this.settings}
                          .now=${this.now}
                          @start-session=${this.handleStartSession}
                          @quick-log-session=${this.handleQuickLog}
                          @open-manual-log=${() => (this.manualLogModalOpen = true)}
                          @update-session=${this.handleUpdateSession}
                        ></pt-today-view>
                      `
                    : ''}
                  ${this.tab === 'log'
                    ? html`
                        <pt-log-view
                          .instruments=${this.instruments}
                          .sessions=${this.sessions}
                          @open-manual-log=${() => (this.manualLogModalOpen = true)}
                          @save-manual-session=${this.handleSaveManualSession}
                          @update-session=${this.handleUpdateSession}
                          @delete-session=${this.handleDeleteSession}
                        ></pt-log-view>
                      `
                    : ''}
                  ${this.tab === 'insights'
                    ? html`
                        <pt-insights-view
                          .instruments=${this.instruments}
                          .sessions=${this.sessions}
                          .settings=${this.settings}
                          .now=${this.now}
                          @start-session=${this.handleStartSession}
                        ></pt-insights-view>
                      `
                    : ''}
                  ${this.tab === 'settings'
                    ? html`
                        <pt-settings-view
                          .settings=${this.settings}
                          .authState=${this.authState}
                          .syncStatus=${this.syncStatus}
                          .sessionCount=${this.sessions.filter((s) => !s.deletedAt).length}
                          .instruments=${this.instruments}
                          .sessions=${this.sessions}
                          @update-settings=${this.handleUpdateSettings}
                          @open-auth-modal=${this.handleOpenAuthModal}
                          @sign-out=${this.handleSignOut}
                          @sync-now=${this.handleSyncNow}
                          @add-instrument=${this.handleAddInstrument}
                          @update-instrument=${this.handleUpdateInstrument}
                          @retire-instrument=${this.handleRetireInstrument}
                          @restore-instrument=${this.handleRestoreInstrument}
                        ></pt-settings-view>
                      `
                    : ''}
                </main>
              </div>
            </div>

            ${!this.wide
              ? html`
                  <nav class="bottom-tab-bar">
                    ${TABS.map(
                      (t) => html`
                        <button class="bottom-tab-btn ${this.tab === t.id ? 'active' : ''}" @click=${() => (this.tab = t.id)}>
                          ${t.label}
                        </button>
                      `
                    )}
                  </nav>
                `
              : ''}
          `}

      ${this.celebrating
        ? html`<pt-celebration-overlay .goalMinutes=${this.settings.weeklyGoalMinutes || 420}></pt-celebration-overlay>`
        : ''}

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
