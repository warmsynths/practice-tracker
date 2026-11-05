import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { AppSettings, AuthState, SyncStatus, Instrument, Session, GlyphKind } from '../../types';
import { commonStyles } from '../../styles/shared-styles';
import { THEMES, INSTRUMENT_TINTS } from '../../styles/theme';
import { GLYPH_KINDS, glyphKindFor } from '../../utils/glyph-utils';
import { practiceStore } from '../../store/practice-store';
import '../common/pt-glyph';

type BoolSetting = 'soundEnabled' | 'hapticsEnabled' | 'weekStartsOnSunday' | 'celebrateGoal' | 'heroGlyphAnimated' | 'reduceMotion';

// The real app only stores one weekly total (AppSettings.weeklyGoalMinutes);
// the design shows a "Daily goal" stepper, so we display/edit that value in
// daily terms (÷7) and convert back to the stored weekly total (×7) on change
// — same underlying number, just expressed the way the design does.
const DAILY_STEP = 5;
const DAILY_MIN = 5;
const DAILY_MAX = 240;

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

  @state() private magicSentEmail: string | null = null;

  // Instrument edit screen (a separate sub-view within Settings, not a modal
  // and not inlined into the list — matches the prototype's isEdit state).
  @state() private editingId: string | 'new' | null = null;
  @state() private editName: string = '';
  @state() private editColor: string = INSTRUMENT_TINTS[0];
  @state() private editKind: GlyphKind = 'acoustic';

  static styles = [
    commonStyles,
    css`
      :host {
        display: block;
        animation: fadeIn 220ms ease-out both;
        color: var(--ink);
        font-family: 'Manrope', sans-serif;
      }

      .settings-grid {
        display: grid;
        grid-template-columns: minmax(0, 1fr);
        gap: 12px;
        align-items: start;
      }

      @media (min-width: 860px) {
        .settings-grid {
          grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
        }
      }

      .col {
        display: flex;
        flex-direction: column;
        gap: 10px;
        min-width: 0;
      }

      .card {
        background: var(--card);
        border-radius: 22px;
        padding: 14px 16px;
      }

      .row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 12px;
      }

      .row-title {
        font-size: 14.5px;
        font-weight: 800;
      }

      .row-sub {
        font-size: 12px;
        color: var(--muted);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .btn-pill {
        background: var(--raised);
        color: var(--ink);
        border-radius: 999px;
        padding: 11px 16px;
        font-size: 12.5px;
        font-weight: 800;
        cursor: pointer;
        border: none;
        white-space: nowrap;
      }

      .btn-pill:hover {
        filter: brightness(1.08);
      }

      .btn-pill-accent {
        background: var(--accent);
        color: var(--bg);
      }

      .btn-pill-accent:hover {
        background: var(--accentHi);
      }

      /* Account */
      .acct-guest {
        border: 2px solid var(--accent);
      }

      .acct-guest-row {
        display: flex;
        align-items: center;
        gap: 7px;
        font-size: 12px;
        color: var(--muted);
        margin-top: 2px;
      }

      .acct-guest-dot {
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background: var(--accent);
      }

      /* Daily goal */
      .stepper {
        display: flex;
        align-items: center;
        gap: 6px;
        background: var(--bg);
        border-radius: 999px;
        padding: 4px;
      }

      .stepper-btn {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        background: var(--raised);
        border: none;
        color: var(--ink);
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 800;
        font-size: 16px;
        cursor: pointer;
      }

      .stepper-btn:disabled {
        opacity: 0.4;
        cursor: default;
      }

      .stepper-value {
        font-family: 'Gabarito', sans-serif;
        font-weight: 800;
        font-size: 15px;
        min-width: 56px;
        text-align: center;
      }

      /* Toggles */
      .toggle-track {
        width: 46px;
        height: 28px;
        border-radius: 999px;
        display: flex;
        align-items: center;
        padding: 3px;
        flex-shrink: 0;
        border: none;
        cursor: pointer;
        transition: background-color 180ms ease-out;
      }

      .toggle-knob {
        width: 22px;
        height: 22px;
        border-radius: 50%;
        background: var(--ink);
        transition: transform 200ms cubic-bezier(0.2, 0.8, 0.2, 1);
      }

      /* Theme */
      .section-label {
        font-size: 12px;
        font-weight: 800;
        color: var(--muted);
        padding: 0 4px 2px;
      }

      .theme-grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 8px;
        margin-bottom: 8px;
      }

      .theme-ring {
        border-radius: 18px;
        padding: 4px;
        background: transparent;
        cursor: pointer;
        transition: background-color 160ms ease-out;
      }

      .theme-ring.selected {
        background: var(--accent);
      }

      .theme-inner {
        border-radius: 15px;
        padding: 9px;
        display: flex;
        flex-direction: column;
        gap: 6px;
      }

      .theme-chip-row {
        display: flex;
        gap: 4px;
        align-items: center;
      }

      .theme-chip-stage {
        width: 18px;
        height: 22px;
        border-radius: 5px;
      }

      .theme-chip-card {
        flex: 1;
        height: 22px;
        border-radius: 6px;
      }

      .theme-accent-bar {
        height: 14px;
        border-radius: 999px;
      }

      .theme-name {
        font-family: 'Gabarito', sans-serif;
        font-weight: 800;
        font-size: 12px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      /* Instruments */
      .inst-pill {
        display: flex;
        align-items: center;
        gap: 10px;
        background: var(--bg);
        border-radius: 999px;
        padding: 9px 14px;
        cursor: pointer;
        margin-bottom: 6px;
      }

      .inst-pill:hover {
        background: var(--deep);
      }

      .inst-dot {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        flex-shrink: 0;
      }

      .inst-name {
        font-size: 13.5px;
        font-weight: 800;
        flex: 1;
        min-width: 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .inst-kind-label {
        font-size: 11.5px;
        color: var(--muted);
      }

      .inst-edit-link {
        font-size: 12px;
        font-weight: 800;
        color: var(--accent);
        background: none;
        border: none;
        cursor: pointer;
      }

      .add-inst-pill {
        border: 2px dashed var(--line);
        border-radius: 999px;
        padding: 9px 14px;
        font-size: 13px;
        font-weight: 800;
        color: var(--muted);
        cursor: pointer;
        background: none;
        width: 100%;
        text-align: left;
      }

      .retired-row {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 6px 14px;
        font-size: 12.5px;
        color: var(--dim);
      }

      .retired-row span:first-child {
        flex: 1;
      }

      .retired-restore {
        font-weight: 800;
        color: var(--muted);
        cursor: pointer;
        background: none;
        border: none;
      }

      /* Data */
      .data-row {
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
      }

      .btn-util {
        flex: 1;
        min-width: 120px;
        height: 46px;
        border-radius: 999px;
        background: var(--bg);
        color: var(--ink);
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 13px;
        font-weight: 800;
        cursor: pointer;
      }

      .data-links-row {
        display: flex;
        gap: 14px;
        padding: 4px 6px 0;
        font-size: 12px;
        font-weight: 800;
      }

      .data-link {
        color: var(--muted);
        cursor: pointer;
        background: none;
        border: none;
      }

      .data-link:hover {
        color: var(--accent);
      }

      .file-hidden {
        display: none;
      }

      /* Edit-instrument sub-view */
      .edit-wrap {
        max-width: 760px;
        display: flex;
        flex-direction: column;
        gap: 14px;
      }

      .edit-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 13px;
        font-weight: 800;
      }

      .edit-back {
        color: var(--muted);
        cursor: pointer;
        padding: 8px 0;
        background: none;
        border: none;
      }

      .edit-retire {
        color: var(--accent);
        cursor: pointer;
        padding: 8px 0;
        background: none;
        border: none;
      }

      .edit-name-input {
        height: 56px;
        border-radius: 999px;
        background: var(--card);
        border: 2px solid var(--card);
        color: var(--ink);
        padding: 0 22px;
        font-family: 'Gabarito', sans-serif;
        font-weight: 800;
        font-size: 20px;
        outline: none;
      }

      .edit-name-input:focus {
        border-color: var(--accent);
      }

      .edit-swatches {
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
      }

      .edit-swatch {
        width: 34px;
        height: 34px;
        border-radius: 50%;
        cursor: pointer;
        border: none;
      }

      .edit-swatch.selected {
        box-shadow: 0 0 0 3px var(--bg), 0 0 0 5px var(--ink);
      }

      .edit-section-label {
        font-size: 12.5px;
        font-weight: 800;
        color: var(--muted);
      }

      .kind-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(96px, 1fr));
        gap: 10px;
      }

      .kind-thumb-wrap {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
        padding: 10px 0 12px;
        border-radius: 22px;
        background: var(--card);
        border: 2px solid transparent;
        cursor: pointer;
      }

      .kind-thumb-wrap.selected {
        border-color: var(--accent);
      }

      .kind-thumb-scale {
        width: 70px;
        height: 87px;
        overflow: hidden;
        border-radius: 10px;
      }

      .kind-thumb-inner {
        width: 250px;
        height: 310px;
        transform: scale(0.28);
        transform-origin: 0 0;
      }

      .kind-label {
        font-size: 12.5px;
        font-weight: 800;
      }

      .edit-actions {
        display: flex;
        gap: 10px;
        margin-top: 6px;
      }

      .edit-save {
        height: 56px;
        padding: 0 34px;
        border-radius: 999px;
        background: var(--accent);
        color: var(--bg);
        border: none;
        display: flex;
        align-items: center;
        font-family: 'Gabarito', sans-serif;
        font-weight: 800;
        font-size: 16px;
        cursor: pointer;
      }

      .edit-cancel {
        height: 56px;
        padding: 0 24px;
        border-radius: 999px;
        background: var(--card);
        color: var(--ink);
        border: none;
        display: flex;
        align-items: center;
        font-weight: 800;
        font-size: 14px;
        cursor: pointer;
      }
    `,
  ];

  public setMagicLinkSent(email: string) {
    this.magicSentEmail = email;
  }

  private handleOpenAuthModal(tab?: 'signin' | 'create' | 'magic' | 'reset-password') {
    this.dispatchEvent(
      new CustomEvent('open-auth-modal', { detail: { tab: tab || 'signin' }, bubbles: true, composed: true })
    );
  }

  private emitSettings(partial: Partial<AppSettings>) {
    this.dispatchEvent(
      new CustomEvent('update-settings', { detail: { ...this.settings, ...partial }, bubbles: true, composed: true })
    );
  }

  private handleToggle(key: BoolSetting) {
    const current = key === 'heroGlyphAnimated' ? this.settings[key] !== false : !!this.settings[key];
    this.emitSettings({ [key]: !current } as Partial<AppSettings>);
  }

  private handleAdjustGoal(delta: number) {
    const currentDaily = Math.round((this.settings.weeklyGoalMinutes || 420) / 7);
    const next = Math.min(DAILY_MAX, Math.max(DAILY_MIN, currentDaily + delta));
    this.emitSettings({ weeklyGoalMinutes: next * 7 });
  }

  private handleSetTheme(id: AppSettings['theme']) {
    this.emitSettings({ theme: id });
  }

  private handleSignOut() {
    this.dispatchEvent(new CustomEvent('sign-out', { bubbles: true, composed: true }));
    this.magicSentEmail = null;
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

  private handleFileSelected(e: Event) {
    const input = e.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (re) => {
      const content = re.target?.result as string;
      if (content) practiceStore.importBackup(content);
      input.value = '';
    };
    reader.readAsText(file);
  }

  private handleResetDemo() {
    if (confirm('Load sample practice history? This will generate demonstration sessions to preview all charts and milestones.')) {
      practiceStore.loadDemoData();
    }
  }

  private handleStartEmpty() {
    if (confirm('Clear all practice history from this device? This cannot be undone.')) {
      practiceStore.clearAllData();
    }
  }

  // --- Instrument edit sub-view ---

  private openNewInstrument() {
    this.editingId = 'new';
    this.editName = '';
    this.editColor = INSTRUMENT_TINTS[0];
    this.editKind = 'acoustic';
  }

  private openEditInstrument(inst: Instrument) {
    this.editingId = inst.id;
    this.editName = inst.name;
    this.editColor = inst.color;
    this.editKind = glyphKindFor(inst);
  }

  private closeEdit() {
    this.editingId = null;
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
        this.dispatchEvent(
          new CustomEvent('update-instrument', {
            detail: { instrument: { ...match, glyphKind: kind } },
            bubbles: true,
            composed: true,
          })
        );
      }
    }
  }

  private handleSaveInstrument() {
    const trimmed = this.editName.trim();
    if (!trimmed) return;

    if (this.editingId === 'new') {
      // New instruments default to secondary tier (the design has no tier
      // picker); existing instruments keep whatever tier they already have.
      this.dispatchEvent(
        new CustomEvent('add-instrument', {
          detail: { name: trimmed, color: this.editColor, tier: 'secondary' },
          bubbles: true,
          composed: true,
        })
      );
      this.pendingGlyphKindForName = { name: trimmed, kind: this.editKind };
    } else if (this.editingId) {
      const inst = this.instruments.find((i) => i.id === this.editingId);
      if (inst) {
        this.dispatchEvent(
          new CustomEvent('update-instrument', {
            detail: { instrument: { ...inst, name: trimmed, color: this.editColor, glyphKind: this.editKind } },
            bubbles: true,
            composed: true,
          })
        );
      }
    }
    this.closeEdit();
  }

  private handleRetireFromEdit() {
    if (this.editingId && this.editingId !== 'new') {
      this.dispatchEvent(new CustomEvent('retire-instrument', { detail: { id: this.editingId }, bubbles: true, composed: true }));
    }
    this.closeEdit();
  }

  private handleRestore(id: string) {
    this.dispatchEvent(new CustomEvent('restore-instrument', { detail: { id }, bubbles: true, composed: true }));
  }

  private renderEditScreen() {
    const canRetire = this.editingId !== 'new';
    const canSave = this.editName.trim().length > 0;

    return html`
      <div class="edit-wrap">
        <div class="edit-header">
          <button class="edit-back" @click=${() => this.closeEdit()}>‹ Settings</button>
          ${canRetire ? html`<button class="edit-retire" @click=${() => this.handleRetireFromEdit()}>Retire</button>` : ''}
        </div>
        <input
          class="edit-name-input"
          placeholder="Instrument name"
          .value=${this.editName}
          @input=${(e: Event) => (this.editName = (e.target as HTMLInputElement).value)}
        />
        <div class="edit-swatches">
          ${INSTRUMENT_TINTS.map(
            (c) => html`
              <button
                class="edit-swatch ${c === this.editColor ? 'selected' : ''}"
                style="background:${c}"
                @click=${() => (this.editColor = c)}
              ></button>
            `
          )}
        </div>
        <div class="edit-section-label">Plays as</div>
        <div class="kind-grid">
          ${GLYPH_KINDS.map(
            (g) => html`
              <div
                class="kind-thumb-wrap ${g.id === this.editKind ? 'selected' : ''}"
                @click=${() => (this.editKind = g.id)}
              >
                <div class="kind-thumb-scale">
                  <div class="kind-thumb-inner">
                    <pt-glyph .kind=${g.id} .live=${g.id === this.editKind}></pt-glyph>
                  </div>
                </div>
                <div class="kind-label">${g.label}</div>
              </div>
            `
          )}
        </div>
        <div class="edit-actions">
          <button class="edit-save" style="opacity:${canSave ? 1 : 0.4}" @click=${() => this.handleSaveInstrument()}>Save</button>
          <button class="edit-cancel" @click=${() => this.closeEdit()}>Cancel</button>
        </div>
      </div>
    `;
  }

  render() {
    if (this.editingId) return this.renderEditScreen();

    const isAuthed = this.authState.isAuthenticated;
    const userEmail = this.authState.user?.email || this.settings.userEmail || '';
    const currentDailyGoal = Math.round((this.settings.weeklyGoalMinutes || 420) / 7);
    const currentTheme = this.settings.theme || 'plum';

    const activeKit = this.instruments
      .filter((i) => !i.archived && !i.deletedAt)
      .slice()
      .sort((a, b) => {
        const rA = a.rank ?? 99;
        const rB = b.rank ?? 99;
        if (rA !== rB) return rA - rB;
        if (a.tier !== b.tier) return a.tier === 'primary' ? -1 : 1;
        return a.name.localeCompare(b.name);
      });
    const retiredKit = this.instruments.filter((i) => i.archived);

    const toggles: { key: BoolSetting; title: string; sub: string; on: boolean }[] = [
      { key: 'celebrateGoal', title: 'Goal celebration', sub: 'badge and confetti at your goal', on: !!this.settings.celebrateGoal },
      { key: 'soundEnabled', title: 'Audio chimes', sub: 'tones on start, stop and goal', on: !!this.settings.soundEnabled },
      { key: 'hapticsEnabled', title: 'Haptics', sub: 'vibration on phones that support it', on: !!this.settings.hapticsEnabled },
      { key: 'heroGlyphAnimated', title: 'Play next glyph moves', sub: 'the suggested instrument plays on Today', on: this.settings.heroGlyphAnimated !== false },
      { key: 'reduceMotion', title: 'Reduce motion', sub: 'keep every glyph still', on: !!this.settings.reduceMotion },
    ];

    return html`
      <div class="settings-grid">
        <div class="col">
          <div class="card ${!isAuthed && !this.magicSentEmail ? 'acct-guest' : ''}">
            ${isAuthed
              ? html`
                  <div class="row">
                    <div style="min-width:0;">
                      <div class="row-title">Signed in</div>
                      <div class="row-sub">${userEmail}</div>
                    </div>
                    <button class="btn-pill" @click=${this.handleSignOut}>Sign out</button>
                  </div>
                `
              : this.magicSentEmail
              ? html`
                  <div class="row-title">Check your inbox</div>
                  <div class="row-sub" style="white-space:normal;margin-top:4px;">Magic link sent to ${this.magicSentEmail}</div>
                  <div style="display:flex;gap:10px;margin-top:12px;flex-wrap:wrap;">
                    <button class="btn-pill btn-pill-accent" @click=${() => (this.magicSentEmail = null)}>Done</button>
                  </div>
                `
              : html`
                  <div class="row">
                    <div>
                      <div class="row-title">Guest mode</div>
                      <div class="acct-guest-row"><span class="acct-guest-dot"></span><span>Sessions live on this device only</span></div>
                    </div>
                    <button class="btn-pill btn-pill-accent" @click=${() => this.handleOpenAuthModal()}>Sign in</button>
                  </div>
                `}
          </div>

          <div class="card">
            <div class="row">
              <div>
                <div class="row-title">Daily goal</div>
                <div class="row-sub" style="white-space:normal;">when the goal badge plays</div>
              </div>
              <div class="stepper">
                <button class="stepper-btn" @click=${() => this.handleAdjustGoal(-DAILY_STEP)} ?disabled=${currentDailyGoal <= DAILY_MIN}>−</button>
                <span class="stepper-value">${currentDailyGoal} min</span>
                <button class="stepper-btn" @click=${() => this.handleAdjustGoal(DAILY_STEP)} ?disabled=${currentDailyGoal >= DAILY_MAX}>+</button>
              </div>
            </div>
          </div>

          ${toggles.map(
            (t) => html`
              <div class="card row" style="cursor:pointer;" @click=${() => this.handleToggle(t.key)}>
                <div>
                  <div class="row-title">${t.title}</div>
                  <div class="row-sub" style="white-space:normal;">${t.sub}</div>
                </div>
                <button class="toggle-track" style="background:${t.on ? 'var(--accent)' : 'var(--line)'}">
                  <span class="toggle-knob" style="transform:translateX(${t.on ? '18px' : '0px'})"></span>
                </button>
              </div>
            `
          )}
        </div>

        <div class="col">
          <div class="card">
            <div class="section-label">Theme</div>
            <div class="theme-grid">
              ${THEMES.map(
                (t) => html`
                  <div class="theme-ring ${t.id === currentTheme ? 'selected' : ''}" @click=${() => this.handleSetTheme(t.id)}>
                    <div class="theme-inner" style="background:${t.bg}">
                      <div class="theme-chip-row">
                        <span class="theme-chip-stage" style="background:${t.stage}"></span>
                        <span class="theme-chip-card" style="background:${t.card}"></span>
                      </div>
                      <div class="theme-accent-bar" style="background:${t.accent}"></div>
                      <div class="theme-name" style="color:${t.ink}">${t.name}</div>
                    </div>
                  </div>
                `
              )}
            </div>

            <div class="section-label">Instruments</div>
            ${activeKit.map((k) => {
              const kind = glyphKindFor(k);
              const label = GLYPH_KINDS.find((g) => g.id === kind)?.label || '';
              return html`
                <div class="inst-pill" @click=${() => this.openEditInstrument(k)}>
                  <span class="inst-dot" style="background:${k.color}"></span>
                  <span class="inst-name">${k.name}</span>
                  <span class="inst-kind-label">${label}</span>
                  <button class="inst-edit-link" @click=${(e: Event) => { e.stopPropagation(); this.openEditInstrument(k); }}>Edit</button>
                </div>
              `;
            })}
            <button class="add-inst-pill" @click=${() => this.openNewInstrument()}>+ Add instrument</button>

            ${retiredKit.length > 0
              ? html`
                  ${retiredKit.map(
                    (k) => html`
                      <div class="retired-row">
                        <span>${k.name} · retired</span>
                        <button class="retired-restore" @click=${() => this.handleRestore(k.id)}>Restore</button>
                      </div>
                    `
                  )}
                `
              : ''}
          </div>

          <div class="card">
            <div class="section-label">Your data</div>
            <div class="data-row">
              <button class="btn-util" @click=${this.handleExportBackup}>Export JSON</button>
              <label class="btn-util" style="cursor:pointer;">
                Import JSON
                <input type="file" id="import-file-input" class="file-hidden" accept=".json,application/json" @change=${this.handleFileSelected} />
              </label>
            </div>
            <div class="data-links-row">
              <button class="data-link" @click=${this.handleResetDemo}>Reset demo data</button>
              <button class="data-link" @click=${this.handleStartEmpty}>Start empty (first run)</button>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
