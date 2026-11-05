import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { Instrument, Session } from '../../types';
import { commonStyles } from '../../styles/shared-styles';
import { fmtMin, dayStart, addDays } from '../../utils/bench-metrics';
import { glyphKindFor } from '../../utils/glyph-utils';

function toLocalDateStr(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

function toLocalTimeStr(d: Date): string {
  const h = String(d.getHours()).padStart(2, '0');
  const min = String(d.getMinutes()).padStart(2, '0');
  return `${h}:${min}`;
}

type RowFamily = 'strings' | 'keys' | 'pads' | 'air';

function familyFor(instrument: Instrument | null | undefined): RowFamily {
  const kind = glyphKindFor(instrument);
  if (kind === 'piano') return 'keys';
  if (kind === 'pads') return 'pads';
  if (kind === 'wind' || kind === 'voice') return 'air';
  return 'strings'; // acoustic, electric, bass
}

const DOW_SHORT = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const DOW_NAMES = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const MONTH_SHORT = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

@customElement('pt-log-view')
export class PtLogView extends LitElement {
  @property({ type: Array }) instruments: Instrument[] = [];
  @property({ type: Array }) sessions: Session[] = [];

  @state() private openRowId: string | null = null;
  @state() private editInstIdDraft: string = '';
  @state() private editDateDraft: string = '';
  @state() private editTimeDraft: string = '';
  @state() private editDurationDraft: number = 30;
  @state() private editNoteDraft: string = '';

  // Presentational-only filters — no store/event involvement.
  @state() private selectedDayFilter: number | null = null; // dayStart() timestamp, or null = no day filter
  @state() private selectedInstFilter: string | null = null; // instrument id, or null = "All"

  static styles = [
    commonStyles,
    css`
      :host {
        display: block;
        animation: fadeIn 220ms ease-out both;
        color: var(--ink);
        font-family: 'Manrope', system-ui, sans-serif;
      }

      .log-wrap {
        display: flex;
        flex-direction: column;
        gap: 12px;
        width: 100%;
        max-width: 1000px;
        margin: 0 auto;
      }

      /* 7-day strip — a bare row, not a card (matches the source exactly:
         each day cell carries its own background, nothing wraps the row). */
      .week-strip-row {
        display: flex;
        align-items: center;
        gap: 12px;
        flex-wrap: wrap;
      }

      .week-strip-grid {
        flex: 1;
        min-width: 260px;
        display: grid;
        grid-template-columns: repeat(7, minmax(0, 1fr));
        gap: 5px;
      }

      .day-cell {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 4px;
        padding: 7px 0 8px;
        border-radius: 16px;
        border: 2px solid transparent;
        cursor: pointer;
        user-select: none;
        transition: background-color 160ms ease-out, border-color 160ms ease-out;
        background: var(--card);
      }

      .day-cell:hover {
        filter: brightness(1.08);
      }

      .day-cell.today {
        border-color: var(--line);
      }

      .day-cell.selected {
        background: var(--ink);
        border-color: transparent;
      }

      .day-cell.selected .day-dow,
      .day-cell.selected .day-num {
        color: var(--bg);
      }

      .day-dow {
        font-family: 'Manrope', sans-serif;
        font-size: 10.5px;
        font-weight: 800;
        opacity: 0.75;
        color: var(--ink);
      }

      .day-num {
        font-family: 'Gabarito', sans-serif;
        font-size: 17px;
        font-weight: 800;
        line-height: 1;
        color: var(--ink);
      }

      .day-dots {
        display: flex;
        gap: 3px;
        height: 6px;
      }

      .day-dot {
        width: 6px;
        height: 6px;
        border-radius: 50%;
      }

      .week-strip-total {
        text-align: right;
        flex-shrink: 0;
      }

      .week-strip-total-num {
        font-family: 'Gabarito', sans-serif;
        font-size: 22px;
        font-weight: 900;
        line-height: 1;
        color: var(--ink);
      }

      .week-strip-total-label {
        font-size: 11.5px;
        color: var(--muted);
        margin-top: 3px;
      }

      /* Filter chip row */
      .filter-row {
        display: flex;
        align-items: center;
        gap: 6px;
        flex-wrap: wrap;
      }

      .filter-chip {
        display: flex;
        align-items: center;
        gap: 7px;
        border-radius: 999px;
        padding: 8px 13px;
        font-family: 'Manrope', sans-serif;
        font-size: 12.5px;
        font-weight: 800;
        cursor: pointer;
        border: none;
        user-select: none;
        transition: background-color 160ms ease-out, color 160ms ease-out;
        background: var(--card);
        color: var(--muted);
      }

      .filter-chip.active {
        background: var(--ink);
        color: var(--bg);
      }

      .filter-chip-dot {
        width: 7px;
        height: 7px;
        border-radius: 50%;
        flex-shrink: 0;
      }

      .filter-row-spacer {
        flex: 1;
      }

      .btn-past-session {
        border: 2px dashed var(--line);
        border-radius: 999px;
        padding: 7px 13px;
        font-size: 12.5px;
        font-weight: 800;
        color: var(--muted);
        cursor: pointer;
        background: none;
        white-space: nowrap;
      }

      .btn-past-session:hover {
        border-color: var(--accent);
        color: var(--accent);
      }

      /* Empty state */
      .empty-state-card {
        text-align: center;
        color: var(--muted);
        padding: 26px;
        background: var(--card);
        border-radius: 22px;
        font-size: 14px;
      }

      .empty-clear-link {
        color: var(--accent);
        cursor: pointer;
        font-weight: 800;
        border: none;
        background: transparent;
        font-family: inherit;
        font-size: inherit;
        padding: 0;
      }

      /* Grouped list */
      .log-groups-list {
        display: flex;
        flex-direction: column;
        gap: 6px;
      }

      .day-group {
        display: flex;
        flex-direction: column;
        gap: 6px;
      }

      .group-header {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 6px 4px 0;
      }

      .group-day-title {
        font-family: 'Gabarito', sans-serif;
        font-size: 16px;
        font-weight: 800;
      }

      .group-date-sub {
        font-size: 12px;
        color: var(--muted);
      }

      .group-header-spacer {
        flex: 1;
      }

      .group-duration-bar {
        width: 100px;
        height: 8px;
        border-radius: 999px;
        overflow: hidden;
        display: none;
        gap: 2px;
      }

      @media (min-width: 640px) {
        .group-duration-bar {
          display: flex;
        }
      }

      .group-duration-seg {
        height: 100%;
      }

      .group-total-num {
        font-family: 'Gabarito', sans-serif;
        font-size: 14px;
        font-weight: 800;
        min-width: 52px;
        text-align: right;
      }

      /* Session row */
      .log-row {
        background: var(--card);
        border-radius: 20px;
        border: 2px solid transparent;
        padding: 8px 12px 8px 8px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        transition: border-color 160ms ease-out;
      }

      .log-row.open {
        border-color: var(--accent);
      }

      .row-main {
        display: grid;
        grid-template-columns: 40px minmax(0, 1fr) 60px 22px;
        gap: 12px;
        align-items: center;
        cursor: pointer;
      }

      @media (min-width: 640px) {
        .row-main {
          grid-template-columns: 40px minmax(0, 1fr) 100px 60px 22px;
        }
      }

      .row-family-icon {
        width: 40px;
        height: 40px;
        border-radius: 13px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }

      .icon-strings {
        display: flex;
        gap: 3px;
        height: 18px;
      }

      .icon-strings span {
        width: 2px;
        background: var(--bg);
        border-radius: 1px;
      }

      .icon-keys {
        display: flex;
        gap: 2px;
        height: 16px;
        margin-top: 4px;
      }

      .icon-keys span {
        width: 5px;
        background: var(--bg);
        border-radius: 0 0 2px 2px;
      }

      .icon-pads {
        display: grid;
        grid-template-columns: 6px 6px;
        gap: 3px;
      }

      .icon-pads span {
        height: 6px;
        border-radius: 50%;
        background: var(--bg);
      }

      .icon-air {
        width: 16px;
        height: 16px;
        border-radius: 50%;
        border: 3px solid var(--bg);
      }

      .row-info {
        min-width: 0;
      }

      .row-name-line {
        font-size: 14px;
        font-weight: 800;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .row-time-tag {
        font-size: 12px;
        font-weight: 600;
        color: var(--muted);
        margin-left: 4px;
      }

      .row-note-line {
        font-size: 12.5px;
        color: var(--muted);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-top: 1px;
      }

      .row-mini-bar {
        display: none;
        height: 8px;
        border-radius: 999px;
        background: var(--bg);
        overflow: hidden;
      }

      @media (min-width: 640px) {
        .row-mini-bar {
          display: block;
        }
      }

      .row-mini-bar-fill {
        height: 100%;
        border-radius: 999px;
      }

      .row-duration {
        font-family: 'Gabarito', sans-serif;
        font-size: 16px;
        font-weight: 800;
        text-align: right;
      }

      .row-sync-dot {
        width: 22px;
        height: 22px;
        border-radius: 50%;
        background: #2E3B2F;
        color: #9BD49B;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 11px;
        font-weight: 900;
      }

      /* Inline editor drawer */
      .row-editor {
        padding: 2px 0 4px 4px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        animation: fadeIn 180ms ease-out both;
      }

      .editor-chips-row {
        display: flex;
        gap: 6px;
        flex-wrap: wrap;
      }

      .editor-chip {
        display: flex;
        align-items: center;
        gap: 6px;
        border-radius: 999px;
        padding: 8px 12px;
        font-size: 12px;
        font-weight: 800;
        cursor: pointer;
        border: none;
      }

      .editor-chip-dot {
        width: 7px;
        height: 7px;
        border-radius: 50%;
      }

      .editor-actions-row {
        display: flex;
        gap: 8px;
        align-items: center;
        flex-wrap: wrap;
      }

      .editor-stepper {
        display: flex;
        align-items: center;
        gap: 6px;
        background: var(--bg);
        border-radius: 999px;
        padding: 4px;
      }

      .editor-stepper-btn {
        width: 38px;
        height: 38px;
        border-radius: 50%;
        background: var(--raised);
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 800;
        font-size: 18px;
        color: var(--ink);
        cursor: pointer;
      }

      .editor-stepper-value {
        font-family: 'Gabarito', sans-serif;
        font-weight: 800;
        font-size: 15px;
        min-width: 52px;
        text-align: center;
      }

      .editor-note-input {
        flex: 1;
        min-width: 180px;
        height: 46px;
        border-radius: 999px;
        background: var(--bg);
        border: 2px solid var(--bg);
        color: var(--ink);
        padding: 0 16px;
        font-size: 13.5px;
        outline: none;
        transition: border-color 140ms ease-out;
      }

      .editor-note-input:focus {
        border-color: var(--line);
      }

      .editor-delete-btn {
        height: 46px;
        padding: 0 16px;
        border-radius: 999px;
        background: none;
        border: none;
        display: flex;
        align-items: center;
        font-size: 12.5px;
        font-weight: 800;
        color: var(--accent);
        cursor: pointer;
      }

      .editor-done-btn {
        height: 46px;
        padding: 0 18px;
        border-radius: 999px;
        background: var(--ink);
        color: var(--bg);
        border: none;
        display: flex;
        align-items: center;
        font-size: 13px;
        font-weight: 800;
        cursor: pointer;
      }

      @media (max-width: 640px) {
        .week-strip-total {
          text-align: left;
        }
      }
    `,
  ];

  private handleOpenManualLog() {
    this.dispatchEvent(new CustomEvent('open-manual-log', { bubbles: true, composed: true }));
  }

  private handleToggleRow(r: { id: string; instrumentId: string; t: Date; min: number; notes?: string; start: string; duration: number }) {
    if (this.openRowId === r.id) {
      this.openRowId = null;
    } else {
      this.openRowId = r.id;
      this.editInstIdDraft = r.instrumentId;
      this.editDateDraft = toLocalDateStr(r.t);
      this.editTimeDraft = toLocalTimeStr(r.t);
      this.editDurationDraft = r.duration || r.min;
      this.editNoteDraft = r.notes || '';
    }
  }

  private handleSaveRow(session: Session) {
    const [year, month, day] = (this.editDateDraft || toLocalDateStr(new Date(session.start)))
      .split('-')
      .map(Number);
    const [hours, minutes] = (this.editTimeDraft || toLocalTimeStr(new Date(session.start)))
      .split(':')
      .map(Number);

    const newStart = new Date(year, month - 1, day, hours || 0, minutes || 0, 0, 0);
    const duration = Math.max(1, Math.round(this.editDurationDraft || session.duration || 1));
    const newEnd = new Date(newStart.getTime() + duration * 60000);

    this.dispatchEvent(
      new CustomEvent('update-session', {
        detail: {
          session: {
            ...session,
            instrumentId: this.editInstIdDraft || session.instrumentId,
            start: newStart.toISOString(),
            end: newEnd.toISOString(),
            duration: duration,
            notes: this.editNoteDraft.trim() || undefined,
          },
        },
        bubbles: true,
        composed: true,
      })
    );
    this.openRowId = null;
  }

  private handleDelete(sessionId: string) {
    this.dispatchEvent(
      new CustomEvent('delete-session', {
        detail: { sessionId },
        bubbles: true,
        composed: true,
      })
    );
    this.openRowId = null;
  }

  private adjustDuration(delta: number) {
    this.editDurationDraft = Math.max(1, this.editDurationDraft + delta);
  }

  private toggleDayFilter(key: number) {
    this.selectedDayFilter = this.selectedDayFilter === key ? null : key;
  }

  private clearFilters() {
    this.selectedDayFilter = null;
    this.selectedInstFilter = null;
  }

  private renderFamilyIcon(family: RowFamily) {
    if (family === 'keys') {
      return html`<div class="icon-keys"><span></span><span></span><span></span></div>`;
    }
    if (family === 'pads') {
      return html`<div class="icon-pads"><span></span><span></span><span></span><span></span></div>`;
    }
    if (family === 'air') {
      return html`<div class="icon-air"></div>`;
    }
    return html`<div class="icon-strings"><span></span><span></span><span></span><span></span></div>`;
  }

  render() {
    const activeInstruments = this.instruments.filter((i) => !i.archived);
    const instMap = new Map<string, Instrument>();
    this.instruments.forEach((i) => instMap.set(i.id, i));
    const inst = (id: string): Instrument =>
      instMap.get(id) || { id, name: 'Instrument', color: '#6B7F6E', tier: 'primary' };

    const allParsed = this.sessions
      .filter((s) => !s.deletedAt)
      .map((s) => ({
        ...s,
        t: new Date(s.start),
        min: Math.max(1, s.duration),
      }))
      .sort((a, b) => b.t.getTime() - a.t.getTime());

    const today = dayStart(new Date());

    // --- 7-day strip data ---
    const last7Days = Array.from({ length: 7 }, (_, i) => addDays(today, -(6 - i)));
    const weekStripTotal = allParsed
      .filter((s) => dayStart(s.t).getTime() >= last7Days[0].getTime())
      .reduce((sum, s) => sum + s.min, 0);

    // --- Apply filters (presentational only) ---
    const parsedSessions = allParsed.filter((s) => {
      if (this.selectedDayFilter != null && dayStart(s.t).getTime() !== this.selectedDayFilter) return false;
      if (this.selectedInstFilter && s.instrumentId !== this.selectedInstFilter) return false;
      return true;
    });

    const totalCount = allParsed.length;

    const dAgo = (t: Date) => Math.round((today.getTime() - dayStart(t).getTime()) / 86400000);
    const hhmm = (t: Date) => {
      let h = t.getHours();
      const ap = h >= 12 ? 'pm' : 'am';
      h = h % 12 || 12;
      return `${h}:${String(t.getMinutes()).padStart(2, '0')}${ap}`;
    };

    // Group by day
    const groupMap = new Map<number, { key: number; t: Date; rows: typeof parsedSessions; min: number }>();
    parsedSessions.forEach((s) => {
      const k = dayStart(s.t).getTime();
      let g = groupMap.get(k);
      if (!g) {
        g = { key: k, t: s.t, rows: [], min: 0 };
        groupMap.set(k, g);
      }
      g.min += s.min;
      g.rows.push(s);
    });

    const groups = Array.from(groupMap.values());
    const DURATION_STEP = 5;

    return html`
      <div class="log-wrap">
        <!-- 7-day strip (bare row, no card wrapper) -->
        <div class="week-strip-row">
          <div class="week-strip-grid">
            ${last7Days.map((d) => {
              const key = d.getTime();
              const isToday = key === today.getTime();
              const isSelected = this.selectedDayFilter === key;
              const dayInstColors = Array.from(
                new Set(allParsed.filter((s) => dayStart(s.t).getTime() === key).map((s) => s.instrumentId))
              )
                .slice(0, 2)
                .map((id) => inst(id).color);
              return html`
                <div
                  class="day-cell ${isToday ? 'today' : ''} ${isSelected ? 'selected' : ''}"
                  @click=${() => this.toggleDayFilter(key)}
                >
                  <div class="day-dow">${DOW_SHORT[d.getDay()]}</div>
                  <div class="day-num">${d.getDate()}</div>
                  <div class="day-dots">
                    ${dayInstColors.map((c) => html`<span class="day-dot" style="background:${c}"></span>`)}
                  </div>
                </div>
              `;
            })}
          </div>
          <div class="week-strip-total">
            <div class="week-strip-total-num">${fmtMin(weekStripTotal)}</div>
            <div class="week-strip-total-label">last 7 days</div>
          </div>
        </div>

        <!-- Filter row -->
        <div class="filter-row">
          <button
            class="filter-chip ${this.selectedInstFilter === null ? 'active' : ''}"
            @click=${() => (this.selectedInstFilter = null)}
          >
            All
          </button>
          ${activeInstruments.map(
            (i) => html`
              <button
                class="filter-chip ${this.selectedInstFilter === i.id ? 'active' : ''}"
                @click=${() => (this.selectedInstFilter = this.selectedInstFilter === i.id ? null : i.id)}
              >
                <span class="filter-chip-dot" style="background:${i.color}"></span>
                ${i.name}
              </button>
            `
          )}
          <span class="filter-row-spacer"></span>
          <button class="btn-past-session" @click=${this.handleOpenManualLog}>+ past session</button>
        </div>

        <!-- Groups List -->
        <div class="log-groups-list">
          ${totalCount === 0
            ? html`
                <div class="empty-state-card">
                  No practice sessions logged yet. Use <strong>+ past session</strong> above or start a live timer from
                  <strong>Today</strong>.
                </div>
              `
            : groups.length > 0
            ? groups.map((g) => {
                const daysAgo = dAgo(g.t);
                const dayTitle = daysAgo === 0 ? 'Today' : daysAgo === 1 ? 'Yesterday' : `${DOW_NAMES[g.t.getDay()]} ${g.t.getDate()} ${MONTH_SHORT[g.t.getMonth()]}`;
                const dateSub = daysAgo <= 1 ? `${DOW_NAMES[g.t.getDay()]} ${g.t.getDate()} ${MONTH_SHORT[g.t.getMonth()]}` : '';
                const segTotal = g.min || 1;

                return html`
                  <div class="day-group">
                    <div class="group-header">
                      <span class="group-day-title">${dayTitle}</span>
                      ${dateSub ? html`<span class="group-date-sub">${dateSub}</span>` : ''}
                      <span class="group-header-spacer"></span>
                      <div class="group-duration-bar">
                        ${g.rows.map(
                          (r) => html`
                            <span
                              class="group-duration-seg"
                              style="width:${(r.min / segTotal) * 100}%;background:${inst(r.instrumentId).color}"
                            ></span>
                          `
                        )}
                      </div>
                      <span class="group-total-num">${fmtMin(g.min)}</span>
                    </div>

                    ${g.rows.map((r) => {
                      const instrument = inst(r.instrumentId);
                      const isOpen = this.openRowId === r.id;
                      const family = familyFor(instrument);
                      const dayMax = Math.max(...g.rows.map((row) => row.min), 1);

                      return html`
                        <div class="log-row ${isOpen ? 'open' : ''}">
                          <div class="row-main" @click=${() => this.handleToggleRow(r)}>
                            <div class="row-family-icon" style="background:${instrument.color}">
                              ${this.renderFamilyIcon(family)}
                            </div>
                            <div class="row-info">
                              <div class="row-name-line">
                                ${instrument.name}<span class="row-time-tag">${hhmm(r.t)}</span>
                              </div>
                              <div class="row-note-line">${r.notes || 'No note'}</div>
                            </div>
                            <div class="row-mini-bar">
                              <div class="row-mini-bar-fill" style="width:${(r.min / dayMax) * 100}%;background:${instrument.color}"></div>
                            </div>
                            <div class="row-duration">${fmtMin(r.min)}</div>
                            <div class="row-sync-dot">✓</div>
                          </div>

                          ${isOpen
                            ? html`
                                <div class="row-editor">
                                  <div class="editor-chips-row">
                                    ${activeInstruments.map((i) => {
                                      const isSel = (this.editInstIdDraft || r.instrumentId) === i.id;
                                      return html`
                                        <div
                                          class="editor-chip"
                                          style="background:${isSel ? i.color : 'var(--raised)'};color:${isSel ? 'var(--bg)' : 'var(--ink)'}"
                                          @click=${() => (this.editInstIdDraft = i.id)}
                                        >
                                          <span class="editor-chip-dot" style="background:${isSel ? 'var(--bg)' : i.color}"></span>
                                          ${i.name}
                                        </div>
                                      `;
                                    })}
                                  </div>

                                  <div class="editor-actions-row">
                                    <div class="editor-stepper">
                                      <button class="editor-stepper-btn" @click=${() => this.adjustDuration(-DURATION_STEP)}>−</button>
                                      <span class="editor-stepper-value">${this.editDurationDraft}m</span>
                                      <button class="editor-stepper-btn" @click=${() => this.adjustDuration(DURATION_STEP)}>+</button>
                                    </div>
                                    <input
                                      type="text"
                                      class="editor-note-input"
                                      placeholder="Add a note"
                                      .value=${this.editNoteDraft}
                                      @input=${(e: Event) => (this.editNoteDraft = (e.target as HTMLInputElement).value)}
                                      @keydown=${(e: KeyboardEvent) => {
                                        if (e.key === 'Enter') this.handleSaveRow(r);
                                      }}
                                    />
                                    <button class="editor-delete-btn" @click=${() => this.handleDelete(r.id)}>Delete</button>
                                    <button class="editor-done-btn" @click=${() => this.handleSaveRow(r)}>Done</button>
                                  </div>
                                </div>
                              `
                            : ''}
                        </div>
                      `;
                    })}
                  </div>
                `;
              })
            : html`
                <div class="empty-state-card">
                  No sessions match. <button class="empty-clear-link" @click=${this.clearFilters}>Clear filters</button>
                </div>
              `}
        </div>
      </div>
    `;
  }
}
