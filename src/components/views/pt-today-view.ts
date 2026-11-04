import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { Instrument, Session, AppSettings } from '../../types';
import { commonStyles } from '../../styles/shared-styles';
import { calculateBenchStats, BenchDataCalculations, fmtMin } from '../../utils/bench-metrics';
import { isSameDay, weekToDateMinutes } from '../../utils/date-utils';
import { glyphKindFor } from '../../utils/glyph-utils';
import '../common/pt-glyph';

@customElement('pt-today-view')
export class PtTodayView extends LitElement {
  @property({ type: Array }) instruments: Instrument[] = [];
  @property({ type: Array }) sessions: Session[] = [];
  @property({ type: Object }) settings: AppSettings = { soundEnabled: true, hapticsEnabled: true };
  @property({ type: Number }) now: number = Date.now();

  @state() private quickLogOpen: boolean = false;
  @state() private selectedRetargetId: string | null = null;
  @state() private recentEndedSession: { session: Session; name: string } | null = null;
  @state() private toastTimeout: any = null;
  @state() private pastSessionNote: string = '';

  static styles = [
    commonStyles,
    css`
      :host {
        display: block;
        animation: fadeIn 220ms ease-out both;
        font-family: 'Manrope', sans-serif;
        color: var(--ink);
      }

      .wrap {
        display: flex;
        flex-direction: column;
        gap: 14px;
        width: 100%;
      }

      .top-grid {
        display: grid;
        grid-template-columns: 340px minmax(0, 1fr);
        gap: 12px;
        align-items: start;
      }

      @media (max-width: 859px) {
        .top-grid {
          grid-template-columns: minmax(0, 1fr);
        }
      }

      /* Hero card */
      .hero-card {
        background: var(--card);
        border-radius: 28px;
        border: 2px solid var(--accent);
        padding: 14px;
        display: flex;
        flex-direction: column;
        gap: 14px;
      }

      @media (max-width: 859px) {
        .hero-card {
          flex-direction: row;
          align-items: flex-start;
        }
      }

      .hero-info {
        display: flex;
        flex-direction: column;
        gap: 6px;
        min-width: 0;
        flex: 1;
      }

      .hero-glyph-box {
        width: 280px;
        height: 347px;
        overflow: hidden;
        border-radius: 18px;
        flex-shrink: 0;
      }

      @media (max-width: 859px) {
        .hero-glyph-box {
          width: 120px;
          height: 149px;
        }
      }

      .hero-glyph-scale {
        transform: scale(1.12);
        transform-origin: 0 0;
      }

      @media (max-width: 859px) {
        .hero-glyph-scale {
          transform: scale(0.48);
        }
      }

      .hero-tag {
        display: inline-flex;
        align-self: flex-start;
        background: var(--bg);
        border-radius: 999px;
        padding: 5px 10px;
        font-size: 11.5px;
        font-weight: 800;
      }

      .hero-name {
        font-family: 'Gabarito', sans-serif;
        font-weight: 800;
        font-size: 28px;
        letter-spacing: -0.02em;
        line-height: 1.05;
      }

      @media (max-width: 859px) {
        .hero-name {
          font-size: 21px;
        }
      }

      .hero-reason {
        font-size: 13px;
        color: var(--muted);
        line-height: 1.45;
      }

      .hero-spacer {
        flex: 1;
      }

      .play-btn {
        height: 56px;
        border-radius: 999px;
        border: none;
        background: var(--accent);
        color: var(--bg);
        font-family: 'Gabarito', sans-serif;
        font-size: 17px;
        font-weight: 800;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        cursor: pointer;
        width: 100%;
      }

      .play-btn:hover {
        background: var(--accentHi);
      }

      /* Solid CSS-triangle play glyph (matches the prototype's border-trick
         icon) instead of an outlined arrow. */
      .play-triangle {
        width: 0;
        height: 0;
        border-left: 12px solid var(--bg);
        border-top: 8px solid transparent;
        border-bottom: 8px solid transparent;
        flex-shrink: 0;
      }

      .tile-play-triangle {
        border-left-width: 9px;
        border-top-width: 6px;
        border-bottom-width: 6px;
        border-left-color: var(--ink);
      }

      .tile-play-btn:hover .tile-play-triangle {
        border-left-color: var(--bg);
      }

      .play-btn:active {
        transform: scale(0.97);
      }

      .back-to-suggestion {
        background: transparent;
        border: none;
        color: var(--muted);
        font-size: 12px;
        font-weight: 800;
        text-align: center;
        cursor: pointer;
        padding: 6px;
      }

      .back-to-suggestion:hover {
        color: var(--accent);
      }

      /* Other instrument tiles — 2 columns, except the 860–1039px "wide but
         narrower than 1040" zone where the sidebar-width second grid track
         is too tight for 2 tiles, so it drops to 1 column there only. */
      .tiles-grid {
        display: grid;
        grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
        gap: 10px;
      }

      @media (min-width: 860px) and (max-width: 1039px) {
        .tiles-grid {
          grid-template-columns: minmax(0, 1fr);
        }
      }

      .tile {
        background: var(--card);
        border-radius: 22px;
        padding: 10px;
        display: flex;
        align-items: center;
        gap: 12px;
        cursor: pointer;
        border: 2px solid transparent;
        transition: border-color 160ms ease-out;
      }

      .tile:hover {
        border-color: var(--line);
      }

      .tile-glyph-box {
        width: 92px;
        height: 114px;
        overflow: hidden;
        border-radius: 12px;
        flex-shrink: 0;
      }

      @media (max-width: 859px) {
        .tile-glyph-box {
          width: 48px;
          height: 60px;
        }
      }

      .tile-glyph-scale {
        transform: scale(0.368);
        transform-origin: 0 0;
      }

      @media (max-width: 859px) {
        .tile-glyph-scale {
          transform: scale(0.192);
        }
      }

      .tile-info {
        flex: 1;
        min-width: 0;
        display: flex;
        flex-direction: column;
        gap: 4px;
      }

      .tile-name-row {
        display: flex;
        align-items: center;
        gap: 7px;
      }

      .tile-dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        flex-shrink: 0;
      }

      .tile-name {
        font-family: 'Gabarito', sans-serif;
        font-size: 15px;
        font-weight: 800;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .tile-sub {
        font-size: 12px;
        color: var(--muted);
      }

      .tile-play-btn {
        width: 44px;
        height: 44px;
        border-radius: 50%;
        border: none;
        background: var(--raised);
        color: var(--ink);
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        flex-shrink: 0;
      }

      .tile-play-btn:hover {
        background: var(--accent);
        color: var(--bg);
      }

      /* Today summary card */
      .summary-card {
        background: var(--card);
        border-radius: 24px;
        padding: 14px 16px;
        display: flex;
        flex-direction: column;
        gap: 12px;
      }

      .summary-header {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
        font-family: 'Gabarito', sans-serif;
        font-weight: 800;
        font-size: 15px;
      }

      .summary-chips {
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
      }

      .summary-chip {
        display: flex;
        align-items: center;
        gap: 6px;
        background: var(--raised);
        border-radius: 999px;
        padding: 7px 12px;
        font-size: 12px;
        font-weight: 700;
      }

      .summary-chip-add {
        border: 2px dashed var(--line);
        background: transparent;
        color: var(--muted);
        border-radius: 999px;
        padding: 8px 13px;
        font-size: 12.5px;
        font-weight: 800;
        cursor: pointer;
      }

      .summary-chip-add:hover {
        background: var(--raised);
      }

      .summary-empty {
        font-size: 13px;
        color: var(--muted);
      }

      .progress-row {
        display: flex;
        align-items: center;
        gap: 12px;
      }

      .progress-track {
        flex: 1;
        height: 8px;
        border-radius: 999px;
        background: var(--bg);
        overflow: hidden;
      }

      .progress-fill {
        height: 100%;
        border-radius: 999px;
        background: var(--chart);
        transition: width 400ms ease-out;
      }

      .progress-caption {
        font-size: 12px;
        font-weight: 700;
        color: var(--muted);
        white-space: nowrap;
      }

      /* Quick log drawer */
      .quick-log-panel {
        background: var(--card);
        border-radius: 18px;
        padding: 16px 20px;
        display: flex;
        flex-direction: column;
        gap: 14px;
        animation: riseIn 240ms ease-out both;
      }

      .quick-log-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 12px;
        font-weight: 800;
        color: var(--muted);
      }

      .quick-log-header button {
        background: transparent;
        border: none;
        color: var(--accent);
        font-size: 12px;
        font-weight: 700;
        cursor: pointer;
      }

      .quick-log-rows {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }

      .quick-log-row {
        display: flex;
        align-items: center;
        gap: 10px;
        flex-wrap: wrap;
      }

      .quick-log-row-label {
        font-size: 12.5px;
        font-weight: 700;
        color: var(--muted);
        min-width: 90px;
      }

      .quick-chip {
        background: var(--raised);
        border-radius: 999px;
        padding: 6px 14px;
        font-size: 12px;
        font-weight: 700;
        color: var(--ink);
        cursor: pointer;
        border: none;
      }

      .quick-chip:hover {
        background: var(--accent);
        color: var(--bg);
      }

      /* Post-session draft sheet */
      .draft-sheet {
        background: var(--card);
        border-radius: 20px;
        padding: 16px 18px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        animation: sheetIn 420ms cubic-bezier(0.2, 0.8, 0.2, 1) both;
      }

      .draft-title {
        font-family: 'Gabarito', sans-serif;
        font-weight: 800;
        font-size: 16px;
      }

      .draft-sub {
        font-size: 12.5px;
        color: var(--muted);
      }

      .draft-row {
        display: flex;
        gap: 10px;
      }

      .draft-note-input {
        flex: 1;
        background: var(--raised);
        border: 1px solid var(--line);
        border-radius: 12px;
        padding: 10px 12px;
        font-size: 13px;
        color: var(--ink);
        outline: none;
        font-family: 'Manrope', sans-serif;
      }

      .draft-note-input:focus {
        border-color: var(--accent);
      }

      .draft-actions {
        display: flex;
        gap: 8px;
      }

      .draft-save {
        background: var(--accent);
        color: var(--bg);
        border: none;
        border-radius: 999px;
        padding: 10px 18px;
        font-size: 13px;
        font-weight: 800;
        cursor: pointer;
        font-family: 'Gabarito', sans-serif;
      }

      .draft-dismiss {
        background: transparent;
        border: none;
        color: var(--muted);
        cursor: pointer;
        font-size: 13px;
      }
    `,
  ];

  private dispatch(name: string, detail?: any) {
    this.dispatchEvent(new CustomEvent(name, { detail, bubbles: true, composed: true }));
  }

  private handleStart(instrumentId: string) {
    this.selectedRetargetId = null;
    this.dispatch('start-session', { instrumentId });
  }

  private handleQuickPastLog(instId: string, duration: number, daysAgo: number) {
    this.dispatch('quick-log-session', { instrumentId: instId, duration, daysAgo });
  }

  private handleSaveDraftNotes() {
    if (this.recentEndedSession) {
      this.dispatch('update-session', {
        session: { ...this.recentEndedSession.session, notes: this.pastSessionNote.trim() },
      });
    }
    this.dismissDraft();
  }

  private dismissDraft() {
    this.recentEndedSession = null;
    this.pastSessionNote = '';
    if (this.toastTimeout) clearTimeout(this.toastTimeout);
  }

  private hhmm(d: Date): string {
    let h = d.getHours();
    const ap = h >= 12 ? 'pm' : 'am';
    h = h % 12 || 12;
    return `${h}:${String(d.getMinutes()).padStart(2, '0')}${ap}`;
  }

  /** Detects a freshly-added session (new id at the front of the list) to surface the
   * post-session notes draft sheet, without guessing from elapsed wall-clock time. */
  willUpdate(changed: Map<PropertyKey, unknown>) {
    if (!changed.has('sessions')) return;
    const previous = (changed.get('sessions') as Session[] | undefined) || [];
    const previousIds = new Set(previous.map((s) => s.id));
    const latest = this.sessions.filter((s) => !s.deletedAt)[0];
    if (!latest || previousIds.has(latest.id) || previous.length === 0) return;
    const inst = this.instruments.find((i) => i.id === latest.instrumentId);
    this.recentEndedSession = { session: latest, name: inst?.name || 'Session' };
    this.pastSessionNote = latest.notes || '';
    if (this.toastTimeout) clearTimeout(this.toastTimeout);
    this.toastTimeout = setTimeout(() => this.dismissDraft(), 12000);
  }

  render() {
    const stats: BenchDataCalculations = calculateBenchStats(this.sessions, this.instruments, {
      range: 'week',
      now: new Date(this.now),
      selectedInstrumentId: this.selectedRetargetId,
      weeklyGoalMinutes: this.settings.weeklyGoalMinutes,
    });

    const heroInst = this.instruments.find((i) => i.id === stats.nextUp.selectedId) || null;
    const isUserPick = stats.nextUp.selectedId !== stats.pick.id;
    const heroKind = glyphKindFor(heroInst);
    // `nextUp.line` is a longer "Last played Xd ago · Y% of your last six
    // weeks" string meant for a dense list row; keep the hero tag pill short
    // (just the "last played" half) so it stays on one line like the design.
    const heroGapText = stats.nextUp.line.split(' · ')[0].replace(/^Last /, '').toLowerCase();

    const todaySessions = this.sessions.filter(
      (s) => !s.deletedAt && isSameDay(new Date(s.start), new Date(this.now))
    );
    const todayTotal = todaySessions.reduce((sum, s) => sum + s.duration, 0);
    const weekSoFar = weekToDateMinutes(this.sessions, new Date(this.now));
    const goal = this.settings.weeklyGoalMinutes || 420;
    const weekPct = Math.min(100, Math.round((weekSoFar / goal) * 100));

    return html`
      <div class="wrap">
        <div class="top-grid">
          <div class="hero-card">
            <div class="hero-glyph-box">
              <div class="hero-glyph-scale">
                <pt-glyph .kind=${heroKind} .live=${this.settings.heroGlyphAnimated !== false}></pt-glyph>
              </div>
            </div>
            <div class="hero-info">
              <div class="hero-tag" style="color:${isUserPick ? 'var(--ink)' : 'var(--accent)'}">
                ${isUserPick ? 'Your pick' : `Play next · ${heroGapText}`}
              </div>
              <div class="hero-name">${stats.nextUp.name}</div>
              <div class="hero-reason">${stats.nextUp.reason}</div>
              <div class="hero-spacer"></div>
              ${isUserPick
                ? html`<button class="back-to-suggestion" @click=${() => (this.selectedRetargetId = null)}>
                    Back to the suggestion
                  </button>`
                : ''}
              <button class="play-btn" @click=${() => this.handleStart(stats.nextUp.selectedId)}>
                <span class="play-triangle"></span>
                Play ${stats.nextUp.name}
              </button>
            </div>
          </div>

          <div class="tiles-grid">
            ${stats.nextUp.queue
              .filter((q) => q.id !== stats.nextUp.selectedId)
              .map((q) => {
                const inst = this.instruments.find((i) => i.id === q.id) || null;
                return html`
                  <div class="tile" @click=${() => (this.selectedRetargetId = q.id)}>
                    <div class="tile-glyph-box">
                      <div class="tile-glyph-scale">
                        <pt-glyph .kind=${glyphKindFor(inst)} .live=${false}></pt-glyph>
                      </div>
                    </div>
                    <div class="tile-info">
                      <div class="tile-name-row">
                        <span class="tile-dot" style="background:${q.color}"></span>
                        <span class="tile-name">${q.name}</span>
                      </div>
                      <div class="tile-sub">${q.ago}</div>
                    </div>
                    <button
                      class="tile-play-btn"
                      @click=${(e: Event) => {
                        e.stopPropagation();
                        this.handleStart(q.id);
                      }}
                    >
                      <span class="play-triangle tile-play-triangle"></span>
                    </button>
                  </div>
                `;
              })}
          </div>
        </div>

        <div class="summary-card">
          <div class="summary-header">
            <span>Today</span>
            <span>${todayTotal > 0 ? fmtMin(todayTotal) : ''}</span>
          </div>
          ${todaySessions.length > 0
            ? html`
                <div class="summary-chips">
                  ${todaySessions.map((s) => {
                    const inst = this.instruments.find((i) => i.id === s.instrumentId);
                    return html`
                      <span class="summary-chip">
                        <span style="width:6px;height:6px;border-radius:50%;background:${inst?.color || 'var(--muted)'}"></span>
                        ${inst?.name || 'Session'} · ${fmtMin(s.duration)}
                      </span>
                    `;
                  })}
                  <button class="summary-chip-add" @click=${() => this.dispatch('open-manual-log')}>+ past session</button>
                </div>
              `
            : html`
                <div class="summary-empty">Nothing yet today.</div>
                <button class="summary-chip-add" style="align-self:flex-start" @click=${() => this.dispatch('open-manual-log')}>+ past session</button>
              `}
          <div class="progress-row">
            <div class="progress-track">
              <div class="progress-fill" style="width:${weekPct}%"></div>
            </div>
            <div class="progress-caption">${fmtMin(weekSoFar)} of ${fmtMin(goal)} this week</div>
          </div>
        </div>

        ${this.quickLogOpen
          ? html`
              <div class="quick-log-panel">
                <div class="quick-log-header">
                  <span>1-tap past log for ${stats.nextUp.name}</span>
                  <button
                    @click=${() => {
                      this.quickLogOpen = false;
                      this.dispatch('open-manual-log');
                    }}
                  >
                    Custom date & notes →
                  </button>
                </div>
                <div class="quick-log-rows">
                  <div class="quick-log-row">
                    <span class="quick-log-row-label">Yesterday:</span>
                    ${[15, 20, 30, 45, 60].map(
                      (m) => html`
                        <button
                          class="quick-chip"
                          @click=${() => {
                            this.handleQuickPastLog(stats.nextUp.selectedId, m, 1);
                            this.quickLogOpen = false;
                          }}
                        >
                          ${m}m
                        </button>
                      `
                    )}
                  </div>
                  <div class="quick-log-row">
                    <span class="quick-log-row-label">2 days ago:</span>
                    ${[15, 20, 30, 45, 60].map(
                      (m) => html`
                        <button
                          class="quick-chip"
                          @click=${() => {
                            this.handleQuickPastLog(stats.nextUp.selectedId, m, 2);
                            this.quickLogOpen = false;
                          }}
                        >
                          ${m}m
                        </button>
                      `
                    )}
                  </div>
                </div>
              </div>
            `
          : html`
              <button
                class="summary-chip-add"
                style="align-self:flex-start"
                @click=${() => (this.quickLogOpen = true)}
              >
                + 1-tap past log
              </button>
            `}

        ${this.recentEndedSession
          ? html`
              <div class="draft-sheet">
                <div class="draft-title">Nice session.</div>
                <div class="draft-sub">
                  ${this.hhmm(new Date(this.recentEndedSession.session.start))} →
                  ${this.hhmm(new Date(this.recentEndedSession.session.end))}
                </div>
                <div class="draft-row">
                  <input
                    class="draft-note-input"
                    type="text"
                    placeholder="What did you work on?"
                    .value=${this.pastSessionNote}
                    @input=${(e: InputEvent) => (this.pastSessionNote = (e.target as HTMLInputElement).value)}
                  />
                </div>
                <div class="draft-actions">
                  <button class="draft-save" @click=${this.handleSaveDraftNotes}>Save session</button>
                  <button class="draft-dismiss" @click=${() => this.dismissDraft()}>Discard</button>
                </div>
              </div>
            `
          : ''}
      </div>
    `;
  }
}
