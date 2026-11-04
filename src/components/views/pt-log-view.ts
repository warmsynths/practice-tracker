import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { Instrument, Session } from '../../types';
import { commonStyles } from '../../styles/shared-styles';
import { fmtMin, dayStart, addDays } from '../../utils/bench-metrics';

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

const DOW_SHORT = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const DOW_NAMES = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const MONTH_SHORT = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

@customElement('pt-log-view')
export class PtLogView extends LitElement {
  @property({ type: Array }) instruments: Instrument[] = [];
  @property({ type: Array }) sessions: Session[] = [];

  @state() private newOpen: boolean = false;
  @state() private newInstId: string = '';
  @state() private newMin: number = 30;
  @state() private newDayBack: number = 0; // 0=today, 1=yesterday, 2=2d, 3=3d, -1=custom
  @state() private newDate: string = toLocalDateStr(new Date());
  @state() private newTime: string = toLocalTimeStr(new Date());
  @state() private newNote: string = '';

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
        gap: 14px;
        width: 100%;
        max-width: 1000px;
        margin: 0 auto;
      }

      /* 7-day strip */
      .week-strip-card {
        display: flex;
        align-items: center;
        gap: 14px;
        background: var(--card);
        border-radius: 22px;
        padding: 14px;
      }

      .week-strip-grid {
        flex: 1;
        display: grid;
        grid-template-columns: repeat(7, minmax(0, 1fr));
        gap: 5px;
        min-width: 0;
      }

      .day-cell {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 4px;
        padding: 8px 2px;
        border-radius: 16px;
        border: 2px solid transparent;
        cursor: pointer;
        user-select: none;
        transition: background-color 160ms ease-out, border-color 160ms ease-out;
        background: var(--raised);
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
        font-size: 10px;
        font-weight: 700;
        color: var(--muted);
      }

      .day-num {
        font-family: 'Gabarito', sans-serif;
        font-size: 17px;
        font-weight: 800;
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
        flex-shrink: 0;
        text-align: right;
        padding-left: 10px;
        border-left: 1px solid var(--line);
      }

      .week-strip-total-num {
        font-family: 'Gabarito', sans-serif;
        font-size: 22px;
        font-weight: 900;
        color: var(--ink);
      }

      .week-strip-total-label {
        font-family: 'Manrope', sans-serif;
        font-size: 11px;
        color: var(--muted);
      }

      /* Filter chip row */
      .filter-row {
        display: flex;
        align-items: center;
        gap: 7px;
        flex-wrap: wrap;
      }

      .filter-chip {
        display: flex;
        align-items: center;
        gap: 6px;
        border-radius: 999px;
        padding: 8px 14px;
        font-family: 'Manrope', sans-serif;
        font-size: 12.5px;
        font-weight: 700;
        cursor: pointer;
        border: none;
        user-select: none;
        transition: background-color 140ms ease-out, color 140ms ease-out;
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

      .filter-chip-spacer {
        flex: 1;
      }

      .btn-toggle-new {
        background: transparent;
        color: var(--muted);
        border: 2px dashed var(--line);
        border-radius: 999px;
        height: 38px;
        padding: 0 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'Manrope', sans-serif;
        font-size: 12.5px;
        font-weight: 700;
        cursor: pointer;
        transition: border-color 140ms ease-out, color 140ms ease-out;
        white-space: nowrap;
      }

      .btn-toggle-new:hover {
        border-color: var(--accent);
        color: var(--accent);
      }

      /* New Past Practice Form */
      .new-panel {
        background: var(--card);
        border-radius: 20px;
        padding: 18px;
        display: flex;
        flex-direction: column;
        gap: 14px;
        animation: riseIn 220ms cubic-bezier(0.2, 0.8, 0.2, 1) both;
      }

      .form-section-title {
        font-size: 10.5px;
        color: var(--muted);
        font-weight: 800;
      }

      .pills-wrap {
        display: flex;
        flex-wrap: wrap;
        gap: 7px;
      }

      .inst-select-pill {
        border-radius: 999px;
        padding: 9px 14px;
        font-family: 'Manrope', sans-serif;
        font-size: 12.5px;
        font-weight: 700;
        cursor: pointer;
        transition: all 140ms ease-out;
        border: 1px solid var(--line);
        user-select: none;
        background: var(--raised);
        color: var(--ink);
      }

      .chip-btn {
        border-radius: 999px;
        padding: 8px 14px;
        font-family: 'Manrope', sans-serif;
        font-size: 12.5px;
        font-weight: 700;
        cursor: pointer;
        transition: all 140ms ease-out;
        border: none;
        user-select: none;
      }

      .chip-btn.active {
        background: var(--ink);
        color: var(--bg);
      }

      .chip-btn.inactive {
        background: var(--raised);
        color: var(--muted);
      }

      .chip-btn.inactive:hover {
        filter: brightness(1.1);
      }

      .when-row {
        display: flex;
        gap: 14px;
        flex-wrap: wrap;
        align-items: center;
      }

      .day-chips-wrap {
        display: flex;
        gap: 6px;
        flex-wrap: wrap;
      }

      .datetime-inputs-wrap {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
        align-items: center;
      }

      .duration-row {
        display: flex;
        align-items: center;
        gap: 12px;
        flex-wrap: wrap;
      }

      .duration-chips-wrap {
        display: flex;
        gap: 6px;
        flex-wrap: wrap;
      }

      .labeled-input {
        display: flex;
        align-items: center;
        gap: 6px;
      }

      .mini-label {
        font-size: 10.5px;
        color: var(--muted);
        font-weight: 800;
      }

      .date-time-input {
        font-family: 'Manrope', sans-serif;
        font-size: 12.5px;
        font-weight: 600;
        color: var(--ink);
        background: var(--raised);
        border: 1px solid var(--line);
        border-radius: 999px;
        height: 36px;
        padding: 0 12px;
        outline: none;
        transition: border-color 140ms ease-out;
      }

      .date-time-input:focus {
        border-color: var(--accent);
      }

      .new-inputs-row {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
      }

      .note-text-input {
        flex: 1;
        min-width: 200px;
        font-family: 'Manrope', sans-serif;
        font-size: 13.5px;
        color: var(--ink);
        background: var(--raised);
        border: 1px solid var(--line);
        border-radius: 14px;
        height: 44px;
        padding: 0 14px;
        outline: none;
        transition: border-color 140ms ease-out;
      }

      .note-text-input:focus {
        border-color: var(--accent);
      }

      .btn-add-log {
        background: var(--accent);
        color: var(--bg);
        border-radius: 999px;
        height: 44px;
        padding: 0 22px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'Gabarito', sans-serif;
        font-size: 13px;
        font-weight: 800;
        cursor: pointer;
        border: none;
        white-space: nowrap;
        transition: background-color 150ms ease-out;
      }

      .btn-add-log:hover {
        background: var(--accentHi);
      }

      /* Empty state */
      .empty-state-card {
        text-align: center;
        color: var(--muted);
        padding: 36px 20px;
        background: var(--card);
        border-radius: 20px;
        font-family: 'Manrope', sans-serif;
        font-size: 13.5px;
      }

      .empty-clear-link {
        color: var(--accent);
        cursor: pointer;
        text-decoration: underline;
        border: none;
        background: transparent;
        font-family: inherit;
        font-size: inherit;
        padding: 0;
      }

      /* Grouped List */
      .log-groups-list {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }

      .log-group-card {
        background: var(--card);
        border-radius: 20px;
        padding: 16px 18px;
      }

      .group-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        padding-bottom: 8px;
      }

      .group-header-text {
        display: flex;
        flex-direction: column;
        gap: 2px;
        min-width: 0;
      }

      .group-date-title {
        font-family: 'Gabarito', sans-serif;
        font-size: 14px;
        font-weight: 800;
        color: var(--ink);
      }

      .group-rel-tag {
        color: var(--muted);
        font-weight: 400;
        font-family: 'Manrope', sans-serif;
      }

      .group-duration-bar {
        flex: 1;
        display: none;
        height: 4px;
        border-radius: 2px;
        overflow: hidden;
        background: var(--line);
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
        font-size: 13px;
        font-weight: 800;
        color: var(--muted);
        flex-shrink: 0;
      }

      .log-row-container {
        border-radius: 16px;
        transition: background-color 140ms ease-out, border-color 140ms ease-out;
        border: 2px solid transparent;
        margin-top: 2px;
      }

      .log-row-container.open {
        background: var(--raised);
        border-color: var(--accent);
      }

      .log-row-main {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 6px 12px;
        padding: 10px 10px;
        cursor: pointer;
        user-select: none;
      }

      .row-time {
        width: 62px;
        flex-shrink: 0;
        font-family: 'Manrope', sans-serif;
        font-size: 12.5px;
        color: var(--muted);
        font-variant-numeric: tabular-nums;
      }

      .row-dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        flex-shrink: 0;
      }

      .row-inst-name {
        flex: 1 1 130px;
        min-width: 0;
        font-family: 'Manrope', sans-serif;
        font-size: 13.5px;
        font-weight: 700;
        color: var(--ink);
      }

      .row-duration {
        width: 60px;
        flex-shrink: 0;
        font-family: 'Gabarito', sans-serif;
        font-size: 13px;
        font-weight: 800;
        color: var(--ink);
        font-variant-numeric: tabular-nums;
      }

      .row-note {
        flex: 2 1 180px;
        min-width: 0;
        font-family: 'Manrope', sans-serif;
        font-size: 13px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: var(--muted);
      }

      /* Inline Editor Drawer */
      .inline-editor-drawer {
        padding: 6px 12px 14px;
        display: flex;
        flex-direction: column;
        gap: 12px;
        animation: fadeIn 180ms ease-out both;
      }

      .btn-del-row {
        border: none;
        color: var(--accent);
        background: transparent;
        border-radius: 999px;
        height: 42px;
        padding: 0 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'Manrope', sans-serif;
        font-size: 12.5px;
        font-weight: 700;
        cursor: pointer;
        transition: opacity 140ms ease-out;
      }

      .btn-del-row:hover {
        opacity: 0.75;
      }

      .btn-done-row {
        background: var(--ink);
        color: var(--bg);
        border-radius: 999px;
        height: 42px;
        padding: 0 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'Gabarito', sans-serif;
        font-size: 12.5px;
        font-weight: 800;
        cursor: pointer;
        border: none;
        transition: opacity 140ms ease-out;
      }

      .btn-done-row:hover {
        opacity: 0.88;
      }

      /* Mobile Phone Mode (< 640px) */
      @media (max-width: 640px) {
        .week-strip-card {
          flex-direction: column;
          align-items: stretch;
          gap: 10px;
        }

        .week-strip-total {
          border-left: none;
          border-top: 1px solid var(--line);
          text-align: left;
          padding: 8px 0 0;
        }

        .btn-toggle-new {
          width: 100%;
        }

        .new-panel {
          padding: 14px 12px;
          border-radius: 16px;
        }

        .when-row {
          flex-direction: column;
          align-items: flex-start;
          gap: 10px;
        }

        .datetime-inputs-wrap {
          width: 100%;
          justify-content: space-between;
        }

        .new-inputs-row {
          flex-direction: column;
        }

        .btn-add-log {
          width: 100%;
          height: 44px;
        }

        .log-group-card {
          padding: 14px 12px;
          border-radius: 16px;
        }

        .log-row-main {
          padding: 10px 4px;
          gap: 6px 8px;
        }

        .row-time {
          width: 52px;
          font-size: 11.5px;
        }

        .row-inst-name {
          font-size: 13px;
        }

        .row-duration {
          width: 48px;
          font-size: 12px;
        }

        .row-note {
          flex-basis: 100%;
          margin-top: 2px;
        }
      }
    `,
  ];

  private handleToggleNew() {
    this.newOpen = !this.newOpen;
    if (this.newOpen) {
      if (!this.newInstId && this.instruments.length > 0) {
        this.newInstId = this.instruments.filter((i) => !i.archived)[0]?.id || this.instruments[0].id;
      }
      const now = new Date();
      this.newDayBack = 0;
      this.newDate = toLocalDateStr(now);
      this.newTime = toLocalTimeStr(now);
      this.newNote = '';
    }
  }

  private handleSelectDayBack(d: number) {
    this.newDayBack = d;
    const targetDate = addDays(dayStart(new Date()), -d);
    this.newDate = toLocalDateStr(targetDate);
  }

  private handleDateInput(e: Event) {
    const val = (e.target as HTMLInputElement).value;
    this.newDate = val;
    const today = toLocalDateStr(new Date());
    const yesterday = toLocalDateStr(addDays(dayStart(new Date()), -1));
    const twoDaysAgo = toLocalDateStr(addDays(dayStart(new Date()), -2));
    const threeDaysAgo = toLocalDateStr(addDays(dayStart(new Date()), -3));

    if (this.newDate === today) this.newDayBack = 0;
    else if (this.newDate === yesterday) this.newDayBack = 1;
    else if (this.newDate === twoDaysAgo) this.newDayBack = 2;
    else if (this.newDate === threeDaysAgo) this.newDayBack = 3;
    else this.newDayBack = -1;
  }

  private handleAddPastSession() {
    if (!this.newInstId || !this.newDate) return;
    const [year, month, day] = this.newDate.split('-').map(Number);
    const [hours, minutes] = (this.newTime || '12:00').split(':').map(Number);
    const sessionStart = new Date(year, month - 1, day, hours || 0, minutes || 0, 0, 0);

    this.dispatchEvent(
      new CustomEvent('save-manual-session', {
        detail: {
          instrumentId: this.newInstId,
          start: sessionStart,
          duration: this.newMin,
          notes: this.newNote.trim() || undefined,
        },
        bubbles: true,
        composed: true,
      })
    );

    this.newOpen = false;
    this.newNote = '';
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

  private toggleDayFilter(key: number) {
    this.selectedDayFilter = this.selectedDayFilter === key ? null : key;
  }

  private clearFilters() {
    this.selectedDayFilter = null;
    this.selectedInstFilter = null;
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

    // Group by Day
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
    const DURATION_OPTS = [15, 30, 45, 60, 90];
    const currentSelectedInst = this.newInstId || activeInstruments[0]?.id;

    return html`
      <div class="log-wrap">
        <!-- 7-day strip -->
        <div class="week-strip-card">
          <div class="week-strip-grid">
            ${last7Days.map((d) => {
              const key = d.getTime();
              const isToday = key === today.getTime();
              const isSelected = this.selectedDayFilter === key;
              const dayInstColors = Array.from(
                new Set(allParsed.filter((s) => dayStart(s.t).getTime() === key).map((s) => s.instrumentId))
              )
                .slice(0, 3)
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
          <span class="filter-chip-spacer"></span>
          <button class="btn-toggle-new" @click=${this.handleToggleNew}>
            ${this.newOpen ? '✕ Cancel' : '+ past session'}
          </button>
        </div>

        <!-- New Past Session Collapsible Form -->
        ${this.newOpen
          ? html`
              <div class="new-panel">
                <div class="form-section-title">What did you play?</div>
                <div class="pills-wrap">
                  ${activeInstruments.map((i) => {
                    const isSel = currentSelectedInst === i.id;
                    return html`
                      <div
                        class="inst-select-pill"
                        style="background: ${isSel ? i.color : 'var(--raised)'}; color: ${isSel ? 'var(--bg)' : 'var(--ink)'}; border-color: ${isSel ? i.color : 'var(--line)'};"
                        @click=${() => (this.newInstId = i.id)}
                      >
                        ${i.name}
                      </div>
                    `;
                  })}
                </div>

                <div class="form-section-title">When &amp; How Long?</div>
                <div class="when-row">
                  <div class="day-chips-wrap">
                    ${[
                      { d: 0, label: 'Today' },
                      { d: 1, label: 'Yesterday' },
                      { d: 2, label: '2 days ago' },
                      { d: 3, label: '3 days ago' },
                    ].map(
                      (item) => html`
                        <button
                          class="chip-btn ${this.newDayBack === item.d ? 'active' : 'inactive'}"
                          @click=${() => this.handleSelectDayBack(item.d)}
                        >
                          ${item.label}
                        </button>
                      `
                    )}
                  </div>

                  <div class="datetime-inputs-wrap">
                    <div class="labeled-input">
                      <span class="mini-label">Date</span>
                      <input type="date" class="date-time-input" .value=${this.newDate} @input=${this.handleDateInput} />
                    </div>
                    <div class="labeled-input">
                      <span class="mini-label">Time</span>
                      <input
                        type="time"
                        class="date-time-input"
                        .value=${this.newTime}
                        @input=${(e: Event) => (this.newTime = (e.target as HTMLInputElement).value)}
                      />
                    </div>
                  </div>
                </div>

                <div class="duration-row">
                  <span class="mini-label">Duration</span>
                  <div class="duration-chips-wrap">
                    ${DURATION_OPTS.map(
                      (m) => html`
                        <button class="chip-btn ${this.newMin === m ? 'active' : 'inactive'}" @click=${() => (this.newMin = m)}>
                          ${m}m
                        </button>
                      `
                    )}
                  </div>
                </div>

                <div class="new-inputs-row">
                  <input
                    type="text"
                    class="note-text-input"
                    placeholder="What did you work on? (optional)"
                    .value=${this.newNote}
                    @input=${(e: Event) => (this.newNote = (e.target as HTMLInputElement).value)}
                    @keydown=${(e: KeyboardEvent) => {
                      if (e.key === 'Enter') this.handleAddPastSession();
                    }}
                  />
                  <button class="btn-add-log" @click=${this.handleAddPastSession}>Add session</button>
                </div>
              </div>
            `
          : ''}

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
                const relLabel = daysAgo === 0 ? 'today' : daysAgo === 1 ? 'yesterday' : `${daysAgo}d ago`;
                const dateLabel = `${DOW_NAMES[g.t.getDay()]} ${g.t.getDate()} ${MONTH_SHORT[g.t.getMonth()]}`;
                const segTotal = g.min || 1;

                return html`
                  <div class="log-group-card">
                    <div class="group-header">
                      <div class="group-header-text">
                        <div class="group-date-title">
                          ${dateLabel} <span class="group-rel-tag">· ${relLabel}</span>
                        </div>
                      </div>
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
                      <div class="group-total-num">${fmtMin(g.min)}</div>
                    </div>

                    <div style="display: flex; flex-direction: column;">
                      ${g.rows.map((r) => {
                        const instrument = inst(r.instrumentId);
                        const isOpen = this.openRowId === r.id;

                        return html`
                          <div class="log-row-container ${isOpen ? 'open' : ''}">
                            <div class="log-row-main" @click=${() => this.handleToggleRow(r)}>
                              <div class="row-time">${hhmm(r.t)}</div>
                              <span class="row-dot" style="background: ${instrument.color};"></span>
                              <div class="row-inst-name">${instrument.name}</div>
                              <div class="row-duration">${fmtMin(r.min)}</div>
                              <div class="row-note">${r.notes || 'No note'}</div>
                            </div>

                            ${isOpen
                              ? html`
                                  <div class="inline-editor-drawer">
                                    <div style="display: flex; flex-direction: column; gap: 6px;">
                                      <span class="mini-label">Instrument</span>
                                      <div class="pills-wrap">
                                        ${activeInstruments.map((i) => {
                                          const isSel = (this.editInstIdDraft || r.instrumentId) === i.id;
                                          return html`
                                            <div
                                              class="inst-select-pill"
                                              style="padding: 6px 12px; font-size: 12px; background: ${isSel ? i.color : 'var(--card)'}; color: ${isSel ? 'var(--bg)' : 'var(--ink)'}; border-color: ${isSel ? i.color : 'var(--line)'};"
                                              @click=${() => (this.editInstIdDraft = i.id)}
                                            >
                                              ${i.name}
                                            </div>
                                          `;
                                        })}
                                      </div>
                                    </div>

                                    <div style="display: flex; gap: 14px; flex-wrap: wrap; align-items: center;">
                                      <div class="labeled-input">
                                        <span class="mini-label">Date</span>
                                        <input
                                          type="date"
                                          class="date-time-input"
                                          .value=${this.editDateDraft}
                                          @input=${(e: Event) => (this.editDateDraft = (e.target as HTMLInputElement).value)}
                                        />
                                      </div>
                                      <div class="labeled-input">
                                        <span class="mini-label">Time</span>
                                        <input
                                          type="time"
                                          class="date-time-input"
                                          .value=${this.editTimeDraft}
                                          @input=${(e: Event) => (this.editTimeDraft = (e.target as HTMLInputElement).value)}
                                        />
                                      </div>
                                      <div style="display: flex; align-items: center; gap: 6px; flex-wrap: wrap;">
                                        <span class="mini-label" style="margin-right: 2px;">Length</span>
                                        ${DURATION_OPTS.map(
                                          (m) => html`
                                            <button
                                              class="chip-btn ${this.editDurationDraft === m ? 'active' : 'inactive'}"
                                              @click=${() => (this.editDurationDraft = m)}
                                            >
                                              ${m}m
                                            </button>
                                          `
                                        )}
                                      </div>
                                    </div>

                                    <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                                      <input
                                        type="text"
                                        class="note-text-input"
                                        placeholder="What did you work on?"
                                        .value=${this.editNoteDraft}
                                        @input=${(e: Event) => (this.editNoteDraft = (e.target as HTMLInputElement).value)}
                                        @keydown=${(e: KeyboardEvent) => {
                                          if (e.key === 'Enter') this.handleSaveRow(r);
                                        }}
                                      />
                                      <button class="btn-del-row" @click=${() => this.handleDelete(r.id)}>Delete</button>
                                      <button class="btn-done-row" @click=${() => this.handleSaveRow(r)}>Save Changes</button>
                                    </div>
                                  </div>
                                `
                              : ''}
                          </div>
                        `;
                      })}
                    </div>
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
