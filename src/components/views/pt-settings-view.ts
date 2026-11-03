import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { AppSettings, AuthState, SyncStatus, Instrument, Session, GlyphKind, InstrumentTier } from '../../types';
import { commonStyles } from '../../styles/shared-styles';
import { THEMES, INSTRUMENT_TINTS } from '../../styles/theme';
import { GLYPH_KINDS, glyphKindFor } from '../../utils/glyph-utils';
import { fmtMin, dayStart } from '../../utils/bench-metrics';
import { practiceStore } from '../../store/practice-store';
import '../common/pt-glyph';

type BoolSetting = 'soundEnabled' | 'hapticsEnabled' | 'weekStartsOnSunday' | 'celebrateGoal' | 'heroGlyphAnimated' | 'reduceMotion';

const GOAL_STEP = 30;
const GOAL_MIN = 60;
const GOAL_MAX = 1200;

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
  @property({ type: Array }) instruments: Instrument[] = [];
  @property({ type: Array }) sessions: Session[] = [];

  @state() private isSyncing: boolean = false;
  @state() private magicSentEmail: string | null = null;

  @state() private addName: string = '';
  @state() private addColor: string = INSTRUMENT_TINTS[0];
  @state() private addTier: InstrumentTier = 'primary';
  @state() private addGlyphKind: GlyphKind = 'acoustic';
  @state() private expandedInstId: string | null = null;

  static styles = [
    commonStyles,
    css`
      :host {
        display: block;
        animation: fadeIn 200ms ease-out both;
        color: var(--ink, #23241F);
        font-family: 'Manrope', system-ui, sans-serif;
      }

      .settings-grid {
        display: flex;
        flex-direction: column;
        gap: 12px;
        width: 100%;
        max-width: 1080px;
        margin: 0 auto;
      }

      @media (min-width: 860px) {
        .settings-grid {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
          align-items: start;
        }
      }

      .col {
        display: flex;
        flex-direction: column;
        gap: 12px;
        min-width: 0;
      }

      .full-width {
        grid-column: 1 / -1;
      }

      .card {
        background: var(--card);
        border-radius: 22px;
        padding: 20px;
      }

      .tag {
        font-family: 'Manrope', sans-serif;
        font-size: 10px;
        letter-spacing: 0.12em;
        color: var(--muted);
        font-weight: 800;
        text-transform: uppercase;
      }

      /* Account */
      .acct-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        flex-wrap: wrap;
      }

      .avatar-circle {
        width: 44px;
        height: 44px;
        border-radius: 50%;
        background: var(--raised);
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'Gabarito', sans-serif;
        font-size: 14px;
        font-weight: 800;
        flex-shrink: 0;
      }

      .acct-title {
        font-family: 'Gabarito', sans-serif;
        font-size: 16px;
        font-weight: 800;
      }

      .acct-sub {
        font-size: 12.5px;
        color: var(--muted);
        margin-top: 2px;
      }

      .guest-dot {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: var(--accent);
        display: inline-block;
      }

      .guest-ring {
        border: 2px solid var(--accent);
      }

      .guest-sub-line {
        display: flex;
        align-items: center;
        gap: 6px;
        margin-top: 4px;
        font-size: 12.5px;
        color: var(--muted);
      }

      .btn-pill-outline {
        border: 1px solid var(--line);
        border-radius: 999px;
        padding: 10px 16px;
        font-family: 'Manrope', sans-serif;
        font-size: 12.5px;
        font-weight: 700;
        color: var(--muted);
        background: transparent;
        cursor: pointer;
        white-space: nowrap;
        transition: background-color 150ms ease-out, color 150ms ease-out;
      }

      .btn-pill-outline:hover {
        background: var(--raised);
        color: var(--ink);
      }

      .btn-pill-accent {
        border: none;
        color: var(--bg);
        background: var(--accent);
        border-radius: 999px;
        height: 40px;
        padding: 0 18px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'Gabarito', sans-serif;
        font-size: 12.5px;
        font-weight: 800;
        cursor: pointer;
        white-space: nowrap;
        flex-shrink: 0;
        transition: background-color 150ms ease-out;
      }

      .btn-pill-accent:hover {
        background: var(--accentHi);
      }

      .inbox-title {
        font-family: 'Gabarito', sans-serif;
        font-size: 19px;
        font-weight: 800;
      }

      .inbox-desc {
        font-size: 13.5px;
        color: var(--muted);
        line-height: 1.55;
        margin-top: 6px;
      }

      /* Backup */
      .backup-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        margin-top: 10px;
        flex-wrap: wrap;
      }

      .backup-title {
        font-size: 15px;
        font-weight: 700;
      }

      .backup-sub {
        font-size: 12.5px;
        color: var(--muted);
        margin-top: 2px;
      }

      /* Preferences / toggles */
      .pref-list {
        display: flex;
        flex-direction: column;
        margin-top: 4px;
      }

      .pref-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 18px;
        padding: 14px 0;
        border-top: 1px solid var(--line);
        cursor: pointer;
        user-select: none;
      }

      .pref-name {
        font-size: 14px;
        font-weight: 700;
      }

      .pref-sub {
        font-size: 12px;
        color: var(--muted);
        margin-top: 2px;
      }

      .toggle-track {
        width: 46px;
        height: 28px;
        border-radius: 999px;
        display: flex;
        align-items: center;
        padding: 3px;
        transition: background-color 180ms ease-out;
        flex-shrink: 0;
      }

      .toggle-knob {
        width: 22px;
        height: 22px;
        border-radius: 50%;
        background: #FFFFFF;
        transition: transform 200ms cubic-bezier(0.2, 0.8, 0.2, 1);
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
      }

      /* Goal stepper */
      .goal-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 18px;
        padding: 14px 0;
        border-top: 1px solid var(--line);
        flex-wrap: wrap;
      }

      .stepper {
        display: flex;
        align-items: center;
        gap: 10px;
      }

      .stepper-btn {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        border: none;
        background: var(--raised);
        color: var(--ink);
        font-size: 16px;
        font-weight: 800;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .stepper-btn:hover {
        filter: brightness(1.15);
      }

      .stepper-value {
        font-family: 'Gabarito', sans-serif;
        font-size: 18px;
        font-weight: 800;
        min-width: 64px;
        text-align: center;
        font-variant-numeric: tabular-nums;
      }

      /* Theme swatches */
      .theme-grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 10px;
        margin-top: 10px;
      }

      .theme-swatch {
        border-radius: 16px;
        padding: 10px;
        cursor: pointer;
        border: 2px solid transparent;
        background: var(--raised);
        display: flex;
        flex-direction: column;
        gap: 8px;
        transition: border-color 160ms ease-out;
      }

      .theme-swatch.selected {
        border-color: var(--accent);
      }

      .theme-swatch-preview {
        height: 32px;
        border-radius: 10px;
        display: flex;
        overflow: hidden;
      }

      .theme-swatch-name {
        font-size: 11.5px;
        font-weight: 700;
      }

      /* Instrument rows */
      .inst-rows {
        display: flex;
        flex-direction: column;
        margin-top: 6px;
      }

      .inst-row {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 8px 12px;
        padding: 13px 0;
        border-top: 1px solid var(--line);
      }

      .inst-dot {
        width: 9px;
        height: 9px;
        border-radius: 50%;
        flex-shrink: 0;
      }

      .rank-controls {
        display: flex;
        align-items: center;
        gap: 4px;
      }

      .rank-btn {
        background: var(--raised);
        border: none;
        border-radius: 8px;
        width: 22px;
        height: 22px;
        font-size: 10px;
        cursor: pointer;
        color: var(--ink);
      }

      .rank-btn:disabled {
        opacity: 0.3;
        cursor: default;
      }

      .inst-name-input {
        font-family: inherit;
        font-size: 14px;
        font-weight: 700;
        color: var(--ink);
        background: transparent;
        border: 1px solid transparent;
        border-radius: 8px;
        outline: none;
        flex: 1 1 120px;
        min-width: 0;
        padding: 4px 6px;
        margin: -4px -6px;
      }

      .inst-name-input:focus {
        background: var(--raised);
        border-color: var(--accent);
      }

      .inst-meta {
        font-size: 11.5px;
        color: var(--muted);
        white-space: nowrap;
      }

      .plays-as-link {
        background: transparent;
        border: none;
        font-size: 11.5px;
        color: var(--muted);
        text-decoration: underline;
        cursor: pointer;
      }

      .kind-grid {
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
        padding: 8px 0 2px;
        width: 100%;
      }

      .kind-thumb-wrap {
        width: 44px;
        height: 54px;
        overflow: hidden;
        border-radius: 8px;
        cursor: pointer;
        border: 2px solid transparent;
        flex-shrink: 0;
      }

      .kind-thumb-wrap.selected {
        border-color: var(--accent);
      }

      .kind-thumb-scale {
        width: 250px;
        height: 310px;
        transform: scale(0.176);
        transform-origin: 0 0;
      }

      .btn-small {
        border: 1px solid var(--line);
        border-radius: 999px;
        padding: 6px 12px;
        font-size: 11px;
        font-weight: 700;
        color: var(--muted);
        background: transparent;
        cursor: pointer;
        white-space: nowrap;
      }

      .btn-small:hover {
        background: var(--raised);
        color: var(--ink);
      }

      /* Add instrument */
      .add-row {
        display: flex;
        align-items: center;
        gap: 12px;
        margin-top: 12px;
        flex-wrap: wrap;
      }

      .add-name-input {
        flex: 1 1 160px;
        min-width: 0;
        font-family: inherit;
        font-size: 14px;
        font-weight: 700;
        color: var(--ink);
        background: var(--raised);
        border: 1px solid var(--line);
        border-radius: 999px;
        height: 44px;
        padding: 0 16px;
        outline: none;
      }

      .tier-toggle {
        display: flex;
        gap: 4px;
        background: var(--raised);
        border-radius: 999px;
        padding: 3px;
      }

      .tier-btn {
        border: none;
        background: transparent;
        border-radius: 999px;
        padding: 8px 12px;
        font-size: 11.5px;
        font-weight: 700;
        color: var(--muted);
        cursor: pointer;
      }

      .tier-btn.active {
        background: var(--ink);
        color: var(--bg);
      }

      .swatches {
        display: flex;
        gap: 8px;
        align-items: center;
        flex-wrap: wrap;
      }

      .swatch {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        cursor: pointer;
        border: none;
      }

      .swatch.selected {
        box-shadow: 0 0 0 2px var(--card), 0 0 0 4px var(--accent);
      }

      /* Data management */
      .data-actions {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
        margin-top: 12px;
      }

      .btn-util {
        border: 1px solid var(--line);
        border-radius: 999px;
        padding: 10px 16px;
        font-size: 12.5px;
        font-weight: 700;
        color: var(--ink);
        background: var(--raised);
        cursor: pointer;
      }

      .btn-util:hover {
        filter: brightness(1.1);
      }

      .btn-util-danger {
        border: 1px solid var(--accent);
        border-radius: 999px;
        padding: 10px 16px;
        font-size: 12.5px;
        font-weight: 700;
        color: var(--accent);
        background: transparent;
        cursor: pointer;
      }

      .btn-util-danger:hover {
        background: var(--raised);
      }

      .file-hidden {
        display: none;
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

  private emitSettings(partial: Partial<AppSettings>) {
    this.dispatchEvent(
      new CustomEvent('update-settings', {
        detail: { ...this.settings, ...partial },
        bubbles: true,
        composed: true,
      })
    );
  }

  private handleToggle(key: BoolSetting) {
    this.emitSettings({ [key]: !this.settings[key] } as Partial<AppSettings>);
  }

  private handleAdjustGoal(delta: number) {
    const current = this.settings.weeklyGoalMinutes || 420;
    const next = Math.min(GOAL_MAX, Math.max(GOAL_MIN, current + delta));
    this.emitSettings({ weeklyGoalMinutes: next });
  }

  private handleSetTheme(id: AppSettings['theme']) {
    this.emitSettings({ theme: id });
  }

  private handleSignOut() {
    this.dispatchEvent(new CustomEvent('sign-out', { bubbles: true, composed: true }));
    this.magicSentEmail = null;
  }

  private handleSyncNow() {
    this.isSyncing = true;
    this.dispatchEvent(new CustomEvent('sync-now', { bubbles: true, composed: true }));
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

  // --- Instrument management (ported from the retired pt-kit-view) ---

  private sortedActiveKit(): Instrument[] {
    return this.instruments
      .filter((i) => !i.archived && !i.deletedAt)
      .slice()
      .sort((a, b) => {
        const rA = a.rank ?? 99;
        const rB = b.rank ?? 99;
        if (rA !== rB) return rA - rB;
        if (a.tier !== b.tier) return a.tier === 'primary' ? -1 : 1;
        return a.name.localeCompare(b.name);
      });
  }

  private handleAdd() {
    const trimmed = this.addName.trim();
    if (!trimmed) return;

    this.dispatchEvent(
      new CustomEvent('add-instrument', {
        detail: { name: trimmed, color: this.addColor, tier: this.addTier },
        bubbles: true,
        composed: true,
      })
    );
    // glyphKind can't be set on add-instrument (store generates the id), so
    // apply it via the first subsequent render once the new instrument shows up.
    this.pendingGlyphKindForName = { name: trimmed, kind: this.addGlyphKind };
    this.addName = '';
    this.addGlyphKind = 'acoustic';
  }

  private pendingGlyphKindForName: { name: string; kind: GlyphKind } | null = null;

  protected updated(): void {
    if (this.pendingGlyphKindForName) {
      const match = this.instruments.find(
        (i) => i.name === this.pendingGlyphKindForName!.name && !i.glyphKind
      );
      if (match) {
        const kind = this.pendingGlyphKindForName.kind;
        this.pendingGlyphKindForName = null;
        this.handleSetGlyphKind(match.id, kind);
      }
    }
  }

  private handleRename(id: string, newName: string) {
    const trimmed = newName.trim();
    if (!trimmed) return;
    const inst = this.instruments.find((i) => i.id === id);
    if (!inst || inst.name === trimmed) return;
    this.dispatchEvent(
      new CustomEvent('update-instrument', {
        detail: { instrument: { ...inst, name: trimmed } },
        bubbles: true,
        composed: true,
      })
    );
  }

  private handleSetGlyphKind(id: string, kind: GlyphKind) {
    const inst = this.instruments.find((i) => i.id === id);
    if (!inst) return;
    this.dispatchEvent(
      new CustomEvent('update-instrument', {
        detail: { instrument: { ...inst, glyphKind: kind } },
        bubbles: true,
        composed: true,
      })
    );
  }

  private handleRetire(id: string) {
    this.dispatchEvent(new CustomEvent('retire-instrument', { detail: { id }, bubbles: true, composed: true }));
  }

  private handleRestore(id: string) {
    this.dispatchEvent(new CustomEvent('restore-instrument', { detail: { id }, bubbles: true, composed: true }));
  }

  private handleMoveRank(instId: string, direction: 'up' | 'down') {
    const active = this.sortedActiveKit();
    const idx = active.findIndex((i) => i.id === instId);
    if (idx === -1) return;
    const targetIdx = direction === 'up' ? idx - 1 : idx + 1;
    if (targetIdx < 0 || targetIdx >= active.length) return;

    const currentInst = active[idx];
    const otherInst = active[targetIdx];

    this.dispatchEvent(
      new CustomEvent('update-instrument', {
        detail: { instrument: { ...currentInst, rank: targetIdx + 1 } },
        bubbles: true,
        composed: true,
      })
    );
    this.dispatchEvent(
      new CustomEvent('update-instrument', {
        detail: { instrument: { ...otherInst, rank: idx + 1 } },
        bubbles: true,
        composed: true,
      })
    );
  }

  private renderKindPicker(selected: GlyphKind, onPick: (k: GlyphKind) => void) {
    return html`
      <div class="kind-grid">
        ${GLYPH_KINDS.map(
          (g) => html`
            <div
              class="kind-thumb-wrap ${g.id === selected ? 'selected' : ''}"
              title=${g.label}
              @click=${() => onPick(g.id)}
            >
              <div class="kind-thumb-scale">
                <pt-glyph .kind=${g.id} .live=${false}></pt-glyph>
              </div>
            </div>
          `
        )}
      </div>
    `;
  }

  render() {
    const isAuthed = this.authState.isAuthenticated;
    const userEmail = this.authState.user?.email || this.settings.userEmail || '';
    const userInitials = (userEmail || 'PT').slice(0, 2).toUpperCase();
    const currentGoal = this.settings.weeklyGoalMinutes || 420;
    const currentTheme = this.settings.theme || 'plum';

    const activeKit = this.sortedActiveKit();
    const retiredKit = this.instruments.filter((i) => i.archived);

    const today = dayStart(new Date());
    const dAgo = (t: Date) => Math.round((today.getTime() - dayStart(t).getTime()) / 86400000);
    const agoText = (d: number) => (d === 0 ? 'today' : d === 1 ? 'yesterday' : d >= 99 ? 'never played' : `${d}d ago`);
    const getStat = (id: string) => {
      const mine = this.sessions.filter((s) => s.instrumentId === id && !s.deletedAt);
      const totalMins = mine.reduce((sum, s) => sum + Math.max(1, s.duration), 0);
      const lastSession = mine.sort((a, b) => new Date(b.start).getTime() - new Date(a.start).getTime())[0];
      const lastDate = lastSession ? new Date(lastSession.start) : null;
      return {
        hours: totalMins > 0 ? fmtMin(totalMins) : 'nothing yet',
        last: lastDate ? `last played ${agoText(dAgo(lastDate))}` : 'never played',
      };
    };

    const hasAddName = this.addName.trim().length > 0;

    return html`
      <div class="settings-grid">
        <div class="col">
          <!-- Account -->
          ${isAuthed
            ? html`
                <div class="card">
                  <div class="acct-row">
                    <div style="display:flex;align-items:center;gap:14px;">
                      <span class="avatar-circle">${userInitials}</span>
                      <div>
                        <div class="acct-title">${userEmail}</div>
                        <div class="acct-sub">Signed in · ${this.sessionCount} sessions synced</div>
                      </div>
                    </div>
                    <div style="display:flex;gap:8px;flex-wrap:wrap;">
                      <button class="btn-pill-outline" @click=${() => this.handleOpenAuthModal('reset-password')}>
                        Change password
                      </button>
                      <button class="btn-pill-outline" @click=${this.handleSignOut}>Sign out</button>
                    </div>
                  </div>
                </div>
              `
            : this.magicSentEmail
            ? html`
                <div class="card">
                  <div class="tag">Check your inbox</div>
                  <div class="inbox-title">Magic link sent to ${this.magicSentEmail}</div>
                  <div class="inbox-desc">It expires in fifteen minutes. Open it on any device.</div>
                  <div style="display:flex;gap:10px;margin-top:12px;flex-wrap:wrap;">
                    <button class="btn-pill-accent" @click=${this.handleSyncNow}>I opened the link</button>
                    <button class="btn-pill-outline" @click=${() => (this.magicSentEmail = null)}>Use another address</button>
                  </div>
                </div>
              `
            : html`
                <div class="card guest-ring">
                  <div class="acct-row">
                    <div>
                      <div class="acct-title">Guest mode</div>
                      <div class="guest-sub-line">
                        <span class="guest-dot"></span>
                        <span>Sessions live on this device only</span>
                      </div>
                    </div>
                    <button class="btn-pill-accent" @click=${() => this.handleOpenAuthModal()}>Sign in</button>
                  </div>
                </div>
              `}

          <!-- Backup -->
          <div class="card">
            <div class="tag">Backup</div>
            <div class="backup-row">
              <div>
                <div class="backup-title">${isAuthed ? 'Cloud backup active' : 'Local only'}</div>
                <div class="backup-sub">
                  ${isAuthed ? `Last synced just now · ${this.sessionCount} sessions held` : 'Sign in to keep this history if you lose the device'}
                </div>
              </div>
              <button class="btn-pill-outline" @click=${this.handleSyncNow} ?disabled=${this.isSyncing}>
                ${this.isSyncing ? 'Syncing…' : 'Sync now'}
              </button>
            </div>
          </div>

          <!-- Preferences -->
          <div class="card">
            <div class="tag">Preferences</div>
            <div class="pref-list">
              <div class="pref-row" @click=${() => this.handleToggle('soundEnabled')}>
                <div>
                  <div class="pref-name">Audio chimes</div>
                  <div class="pref-sub">Tones on start, stop and goal</div>
                </div>
                <span class="toggle-track" style="background:${this.settings.soundEnabled ? 'var(--accent)' : 'var(--line)'};">
                  <span class="toggle-knob" style="transform:translateX(${this.settings.soundEnabled ? '18px' : '0px'});"></span>
                </span>
              </div>

              <div class="pref-row" @click=${() => this.handleToggle('hapticsEnabled')}>
                <div>
                  <div class="pref-name">Haptics</div>
                  <div class="pref-sub">Vibration on phones that support it</div>
                </div>
                <span class="toggle-track" style="background:${this.settings.hapticsEnabled ? 'var(--accent)' : 'var(--line)'};">
                  <span class="toggle-knob" style="transform:translateX(${this.settings.hapticsEnabled ? '18px' : '0px'});"></span>
                </span>
              </div>

              <div class="pref-row" @click=${() => this.handleToggle('weekStartsOnSunday')}>
                <div>
                  <div class="pref-name">Weeks start on Sunday</div>
                  <div class="pref-sub">Otherwise Monday, which is what the charts use</div>
                </div>
                <span class="toggle-track" style="background:${this.settings.weekStartsOnSunday ? 'var(--accent)' : 'var(--line)'};">
                  <span class="toggle-knob" style="transform:translateX(${this.settings.weekStartsOnSunday ? '18px' : '0px'});"></span>
                </span>
              </div>

              <div class="pref-row" @click=${() => this.handleToggle('celebrateGoal')}>
                <div>
                  <div class="pref-name">Goal celebration</div>
                  <div class="pref-sub">Badge and confetti at your goal</div>
                </div>
                <span class="toggle-track" style="background:${this.settings.celebrateGoal ? 'var(--accent)' : 'var(--line)'};">
                  <span class="toggle-knob" style="transform:translateX(${this.settings.celebrateGoal ? '18px' : '0px'});"></span>
                </span>
              </div>

              <div class="pref-row" @click=${() => this.handleToggle('heroGlyphAnimated')}>
                <div>
                  <div class="pref-name">Play next glyph moves</div>
                  <div class="pref-sub">The suggested instrument plays on Today</div>
                </div>
                <span class="toggle-track" style="background:${this.settings.heroGlyphAnimated !== false ? 'var(--accent)' : 'var(--line)'};">
                  <span class="toggle-knob" style="transform:translateX(${this.settings.heroGlyphAnimated !== false ? '18px' : '0px'});"></span>
                </span>
              </div>

              <div class="pref-row" @click=${() => this.handleToggle('reduceMotion')}>
                <div>
                  <div class="pref-name">Reduce motion</div>
                  <div class="pref-sub">Keep every glyph still</div>
                </div>
                <span class="toggle-track" style="background:${this.settings.reduceMotion ? 'var(--accent)' : 'var(--line)'};">
                  <span class="toggle-knob" style="transform:translateX(${this.settings.reduceMotion ? '18px' : '0px'});"></span>
                </span>
              </div>

              <div class="goal-row">
                <div>
                  <div class="pref-name">Weekly goal</div>
                  <div class="pref-sub">${fmtMin(currentGoal)} a week across the whole kit</div>
                </div>
                <div class="stepper">
                  <button class="stepper-btn" @click=${() => this.handleAdjustGoal(-GOAL_STEP)} ?disabled=${currentGoal <= GOAL_MIN}>−</button>
                  <span class="stepper-value">${fmtMin(currentGoal)}</span>
                  <button class="stepper-btn" @click=${() => this.handleAdjustGoal(GOAL_STEP)} ?disabled=${currentGoal >= GOAL_MAX}>+</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col">
          <!-- Theme -->
          <div class="card">
            <div class="tag">Theme</div>
            <div class="theme-grid">
              ${THEMES.map(
                (t) => html`
                  <div class="theme-swatch ${t.id === currentTheme ? 'selected' : ''}" @click=${() => this.handleSetTheme(t.id)}>
                    <div class="theme-swatch-preview" style="background:${t.bg};">
                      <div style="flex:1;background:${t.card};"></div>
                      <div style="width:10px;background:${t.accent};"></div>
                    </div>
                    <div class="theme-swatch-name">${t.name}</div>
                  </div>
                `
              )}
            </div>
          </div>

          <!-- Instruments -->
          <div class="card">
            <div class="tag">Your kit · ▲ ▼ sets priority</div>
            <div class="inst-rows">
              ${activeKit.map((k, idx) => {
                const stat = getStat(k.id);
                const kind = glyphKindFor(k);
                const expanded = this.expandedInstId === k.id;
                return html`
                  <div class="inst-row">
                    <div class="rank-controls">
                      <button class="rank-btn" ?disabled=${idx === 0} @click=${() => this.handleMoveRank(k.id, 'up')}>▲</button>
                      <button class="rank-btn" ?disabled=${idx === activeKit.length - 1} @click=${() => this.handleMoveRank(k.id, 'down')}>▼</button>
                    </div>
                    <span class="inst-dot" style="background:${k.color};"></span>
                    <input
                      type="text"
                      class="inst-name-input"
                      .value=${k.name}
                      @change=${(e: Event) => this.handleRename(k.id, (e.target as HTMLInputElement).value)}
                      @keydown=${(e: KeyboardEvent) => {
                        if (e.key === 'Enter') (e.target as HTMLInputElement).blur();
                      }}
                    />
                    <span class="inst-meta">${stat.hours} · ${stat.last}</span>
                    <button class="plays-as-link" @click=${() => (this.expandedInstId = expanded ? null : k.id)}>
                      Plays as: ${GLYPH_KINDS.find((g) => g.id === kind)?.label} · change
                    </button>
                    <button class="btn-small" @click=${() => this.handleRetire(k.id)}>Retire</button>
                    ${expanded ? this.renderKindPicker(kind, (picked) => this.handleSetGlyphKind(k.id, picked)) : ''}
                  </div>
                `;
              })}
            </div>

            <div class="tag" style="margin-top:16px;">Add to the kit</div>
            <div class="add-row">
              <input
                type="text"
                class="add-name-input"
                placeholder="Instrument name…"
                .value=${this.addName}
                @input=${(e: Event) => (this.addName = (e.target as HTMLInputElement).value)}
                @keydown=${(e: KeyboardEvent) => {
                  if (e.key === 'Enter') this.handleAdd();
                }}
              />
              <div class="tier-toggle">
                <button class="tier-btn ${this.addTier === 'primary' ? 'active' : ''}" @click=${() => (this.addTier = 'primary')}>Primary</button>
                <button class="tier-btn ${this.addTier === 'secondary' ? 'active' : ''}" @click=${() => (this.addTier = 'secondary')}>Secondary</button>
              </div>
              <div class="swatches">
                ${INSTRUMENT_TINTS.map(
                  (c) => html`
                    <button class="swatch ${c === this.addColor ? 'selected' : ''}" style="background:${c};" @click=${() => (this.addColor = c)}></button>
                  `
                )}
              </div>
              <button class="btn-pill-accent" style="opacity:${hasAddName ? '1' : '0.45'};" @click=${this.handleAdd}>Add</button>
            </div>
            ${this.renderKindPicker(this.addGlyphKind, (k) => (this.addGlyphKind = k))}

            ${retiredKit.length > 0
              ? html`
                  <div class="tag" style="margin-top:16px;">Retired · history kept</div>
                  <div class="inst-rows">
                    ${retiredKit.map((k) => {
                      const stat = getStat(k.id);
                      return html`
                        <div class="inst-row" style="opacity:0.55;">
                          <span class="inst-dot" style="background:${k.color};"></span>
                          <div style="flex:1 1 120px;min-width:0;font-weight:700;">${k.name}</div>
                          <span class="inst-meta">${stat.hours} · ${stat.last}</span>
                          <button class="btn-small" @click=${() => this.handleRestore(k.id)}>Restore</button>
                        </div>
                      `;
                    })}
                  </div>
                `
              : ''}
          </div>
        </div>

        <!-- Data management -->
        <div class="card full-width">
          <div class="tag">Your data</div>
          <div class="data-actions">
            <button class="btn-util" @click=${this.handleExportBackup}>Export JSON</button>
            <button class="btn-util" @click=${this.handleImportClick}>Import JSON</button>
            <button class="btn-util" @click=${this.handleLoadDemoData}>Load demo practice history</button>
            <button class="btn-util-danger" @click=${this.handleClearAllData}>Reset all data</button>
            <input type="file" id="import-file-input" class="file-hidden" accept=".json,application/json" @change=${this.handleFileSelected} />
          </div>
        </div>
      </div>
    `;
  }
}
