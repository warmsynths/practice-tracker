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

  static styles = [
    commonStyles,
    css`
      :host {
        display: block;
        animation: fadeOnly 200ms ease-out both;
        color: #23241F;
        font-family: 'DM Sans', system-ui, sans-serif;
      }

      .log-wrap {
        display: flex;
        flex-direction: column;
        gap: 14px;
        width: 100%;
        max-width: 1000px;
        margin: 0 auto;
      }

      .log-summary-card {
        background: #FAFAF7;
        border-radius: 20px;
        padding: 22px;
        border: 1px solid #EBEAE3;
        box-shadow: 0 4px 16px rgba(35, 36, 31, 0.03);
      }

      .log-header-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        flex-wrap: wrap;
      }

      .log-tag {
        font-size: 9.5px;
        letter-spacing: 0.13em;
        color: #A3A297;
        font-weight: 700;
        text-transform: uppercase;
      }

      .log-total-title {
        font-size: 24px;
        font-weight: 700;
        letter-spacing: -0.02em;
        margin-top: 6px;
        color: #23241F;
      }

      .log-count-sub {
        font-size: 12px;
        color: #767668;
        margin-top: 3px;
      }

      .btn-toggle-new {
        background: #23241F;
        color: #F2F1EC;
        border-radius: 12px;
        height: 44px;
        padding: 0 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 13px;
        font-weight: 700;
        cursor: pointer;
        border: none;
        transition: background 150ms ease, transform 150ms ease;
      }

      .btn-toggle-new:hover {
        background: #3A3B35;
        transform: translateY(-1px);
      }

      /* New Past Practice Form */
      .new-panel {
        background: #FFFFFF;
        border: 1px solid #E7E6DF;
        border-radius: 16px;
        padding: 18px;
        margin-top: 16px;
        display: flex;
        flex-direction: column;
        gap: 14px;
        animation: riseIn 220ms cubic-bezier(0.16, 1, 0.3, 1) both;
      }

      .form-section-title {
        font-size: 9.5px;
        letter-spacing: 0.13em;
        color: #A3A297;
        font-weight: 700;
        text-transform: uppercase;
      }

      .pills-wrap {
        display: flex;
        flex-wrap: wrap;
        gap: 7px;
      }

      .inst-select-pill {
        border-radius: 11px;
        padding: 9px 14px;
        font-size: 12.5px;
        font-weight: 700;
        cursor: pointer;
        transition: all 140ms ease;
        border: 1px solid #E7E6DF;
        user-select: none;
      }

      .chip-btn {
        border-radius: 11px;
        padding: 8px 14px;
        font-size: 12.5px;
        font-weight: 700;
        cursor: pointer;
        transition: all 140ms ease;
        border: none;
        user-select: none;
      }

      .chip-btn.active {
        background: #23241F;
        color: #F2F1EC;
      }

      .chip-btn.inactive {
        background: #F0EFEA;
        color: #4A4945;
      }

      .chip-btn.inactive:hover {
        background: #E5E4DC;
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
        font-size: 9.5px;
        letter-spacing: 0.13em;
        color: #A3A297;
        font-weight: 700;
        text-transform: uppercase;
      }

      .date-time-input {
        font-family: inherit;
        font-size: 12.5px;
        font-weight: 600;
        color: #23241F;
        background: #F7F6F1;
        border: 1px solid #E7E6DF;
        border-radius: 10px;
        height: 36px;
        padding: 0 10px;
        outline: none;
        transition: border-color 140ms ease;
      }

      .date-time-input:focus {
        border-color: #23241F;
      }

      .new-inputs-row {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
      }

      .note-text-input {
        flex: 1;
        min-width: 200px;
        font-family: inherit;
        font-size: 13.5px;
        color: #23241F;
        background: #F7F6F1;
        border: 1px solid #E7E6DF;
        border-radius: 12px;
        height: 44px;
        padding: 0 14px;
        outline: none;
        transition: border-color 140ms ease;
      }

      .note-text-input:focus {
        border-color: #23241F;
      }

      .btn-add-log {
        background: #4F6353;
        color: #F7F6F1;
        border-radius: 12px;
        height: 44px;
        padding: 0 22px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 13px;
        font-weight: 700;
        cursor: pointer;
        border: none;
        white-space: nowrap;
        transition: background 150ms ease, transform 150ms ease;
      }

      .btn-add-log:hover {
        background: #435447;
        transform: translateY(-1px);
      }

      /* Grouped List */
      .log-groups-list {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }

      .log-group-card {
        background: #FAFAF7;
        border-radius: 20px;
        padding: 16px 18px;
        border: 1px solid #EBEAE3;
      }

      .group-header {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
        padding-bottom: 6px;
      }

      .group-date-title {
        font-size: 13px;
        font-weight: 700;
        color: #23241F;
      }

      .group-rel-tag {
        color: #A3A297;
        font-weight: 400;
      }

      .group-total-num {
        font-size: 12px;
        font-weight: 700;
        color: #767668;
      }

      .log-row-container {
        border-top: 1px solid #EDECE6;
        border-radius: 12px;
        transition: background-color 140ms ease;
      }

      .log-row-container.open {
        background: #F2F0EA;
      }

      .log-row-main {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 6px 12px;
        padding: 13px 8px;
        cursor: pointer;
        user-select: none;
      }

      .row-time {
        width: 62px;
        flex-shrink: 0;
        font-size: 12.5px;
        color: #767668;
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
        font-size: 13.5px;
        font-weight: 700;
        color: #23241F;
      }

      .row-duration {
        width: 60px;
        flex-shrink: 0;
        font-size: 13px;
        font-weight: 700;
        color: #4A4945;
        font-variant-numeric: tabular-nums;
      }

      .row-note {
        flex: 2 1 180px;
        min-width: 0;
        font-family: 'Instrument Serif', serif;
        font-style: italic;
        font-size: 15px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      /* Inline Editor Drawer */
      .inline-editor-drawer {
        padding: 8px 12px 14px;
        display: flex;
        flex-direction: column;
        gap: 12px;
        animation: riseIn 180ms ease-out both;
      }

      .btn-del-row {
        border: 1px solid #E2CFC9;
        color: #B4543C;
        background: transparent;
        border-radius: 12px;
        height: 42px;
        padding: 0 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12.5px;
        font-weight: 700;
        cursor: pointer;
        transition: background 140ms ease;
      }

      .btn-del-row:hover {
        background: #FDF4F2;
      }

      .btn-done-row {
        background: #23241F;
        color: #F2F1EC;
        border-radius: 12px;
        height: 42px;
        padding: 0 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12.5px;
        font-weight: 700;
        cursor: pointer;
        border: none;
        transition: background 140ms ease;
      }

      .btn-done-row:hover {
        background: #3A3B35;
      }

      /* Mobile Phone Mode (< 640px) */
      @media (max-width: 640px) {
        .log-summary-card {
          padding: 16px 14px;
          border-radius: 18px;
        }

        .btn-toggle-new {
          width: 100%;
          height: 42px;
        }

        .new-panel {
          padding: 14px 12px;
          border-radius: 14px;
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
          font-size: 13.5px;
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

  render() {
    const activeInstruments = this.instruments.filter((i) => !i.archived);
    const instMap = new Map<string, Instrument>();
    this.instruments.forEach((i) => instMap.set(i.id, i));
    const inst = (id: string): Instrument =>
      instMap.get(id) || { id, name: 'Instrument', color: '#6B7F6E', tier: 'primary' };

    const parsedSessions = this.sessions
      .filter((s) => !s.deletedAt)
      .map((s) => ({
        ...s,
        t: new Date(s.start),
        min: Math.max(1, s.duration),
      }))
      .sort((a, b) => b.t.getTime() - a.t.getTime());

    const totalMinutes = parsedSessions.reduce((sum, s) => sum + s.min, 0);
    const totalCount = parsedSessions.length;

    const today = dayStart(new Date());
    const dAgo = (t: Date) => Math.round((today.getTime() - dayStart(t).getTime()) / 86400000);
    const DOW_NAMES = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const MONTH_SHORT = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
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
        <!-- Summary & Toggle Bar -->
        <div class="log-summary-card">
          <div class="log-header-row">
            <div>
              <div class="log-tag">The Log</div>
              <div class="log-total-title">${fmtMin(totalMinutes)}</div>
              <div class="log-count-sub">${totalCount} sessions logged in total</div>
            </div>
            <button class="btn-toggle-new" @click=${this.handleToggleNew}>
              ${this.newOpen ? '✕ Cancel' : '+ Log a past session'}
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
                          style="background: ${isSel ? i.color : '#FBFBF9'}; color: ${isSel ? '#FBFBF9' : '#23241F'}; border-color: ${isSel ? i.color : '#E7E6DF'};"
                          @click=${() => (this.newInstId = i.id)}
                        >
                          ${i.name}
                        </div>
                      `;
                    })}
                  </div>

                  <div class="form-section-title">When & How Long?</div>
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
                        <span class="mini-label">DATE</span>
                        <input
                          type="date"
                          class="date-time-input"
                          .value=${this.newDate}
                          @input=${this.handleDateInput}
                        />
                      </div>
                      <div class="labeled-input">
                        <span class="mini-label">TIME</span>
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
                    <span class="mini-label">DURATION</span>
                    <div class="duration-chips-wrap">
                      ${DURATION_OPTS.map(
                        (m) => html`
                          <button
                            class="chip-btn ${this.newMin === m ? 'active' : 'inactive'}"
                            @click=${() => (this.newMin = m)}
                          >
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
                      placeholder="Note / what did you work on? (optional)"
                      .value=${this.newNote}
                      @input=${(e: Event) => (this.newNote = (e.target as HTMLInputElement).value)}
                      @keydown=${(e: KeyboardEvent) => {
                        if (e.key === 'Enter') this.handleAddPastSession();
                      }}
                    />
                    <button class="btn-add-log" @click=${this.handleAddPastSession}>
                      Add to the log
                    </button>
                  </div>
                </div>
              `
            : ''}
        </div>

        <!-- Groups List -->
        <div class="log-groups-list">
          ${groups.length > 0
            ? groups.map((g) => {
                const daysAgo = dAgo(g.t);
                const relLabel = daysAgo === 0 ? 'today' : daysAgo === 1 ? 'yesterday' : `${daysAgo}d ago`;
                const dateLabel = `${DOW_NAMES[g.t.getDay()]} ${g.t.getDate()} ${MONTH_SHORT[g.t.getMonth()]}`;

                return html`
                  <div class="log-group-card">
                    <div class="group-header">
                      <div class="group-date-title">
                        ${dateLabel} <span class="group-rel-tag">· ${relLabel}</span>
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
                              <div
                                class="row-note"
                                style="color: ${r.notes ? '#4A4945' : '#B0AFA4'};"
                              >
                                ${r.notes || 'add a note'}
                              </div>
                            </div>

                            ${isOpen
                              ? html`
                                  <div class="inline-editor-drawer">
                                    <div style="display: flex; flex-direction: column; gap: 6px;">
                                      <span class="mini-label">INSTRUMENT</span>
                                      <div class="pills-wrap">
                                        ${activeInstruments.map((i) => {
                                          const isSel = (this.editInstIdDraft || r.instrumentId) === i.id;
                                          return html`
                                            <div
                                              class="inst-select-pill"
                                              style="padding: 6px 12px; font-size: 12px; background: ${isSel ? i.color : '#FFFFFF'}; color: ${isSel ? '#FBFBF9' : '#23241F'}; border-color: ${isSel ? i.color : '#E7E6DF'};"
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
                                        <span class="mini-label">DATE</span>
                                        <input
                                          type="date"
                                          class="date-time-input"
                                          style="background: #FFFFFF;"
                                          .value=${this.editDateDraft}
                                          @input=${(e: Event) => (this.editDateDraft = (e.target as HTMLInputElement).value)}
                                        />
                                      </div>
                                      <div class="labeled-input">
                                        <span class="mini-label">TIME</span>
                                        <input
                                          type="time"
                                          class="date-time-input"
                                          style="background: #FFFFFF;"
                                          .value=${this.editTimeDraft}
                                          @input=${(e: Event) => (this.editTimeDraft = (e.target as HTMLInputElement).value)}
                                        />
                                      </div>
                                      <div style="display: flex; align-items: center; gap: 6px; flex-wrap: wrap;">
                                        <span class="mini-label" style="margin-right: 2px;">LENGTH</span>
                                        ${DURATION_OPTS.map(
                                          (m) => html`
                                            <button
                                              class="chip-btn ${this.editDurationDraft === m ? 'active' : 'inactive'}"
                                              style="${this.editDurationDraft === m ? '' : 'background: #FFFFFF;'}"
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
                                        style="background: #FFFFFF;"
                                        placeholder="What did you work on?"
                                        .value=${this.editNoteDraft}
                                        @input=${(e: Event) =>
                                          (this.editNoteDraft = (e.target as HTMLInputElement).value)}
                                        @keydown=${(e: KeyboardEvent) => {
                                          if (e.key === 'Enter') this.handleSaveRow(r);
                                        }}
                                      />
                                      <button class="btn-del-row" @click=${() => this.handleDelete(r.id)}>
                                        Delete
                                      </button>
                                      <button class="btn-done-row" @click=${() => this.handleSaveRow(r)}>
                                        Save Changes
                                      </button>
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
                <div class="log-summary-card" style="text-align: center; color: #767668; padding: 36px 20px;">
                  No practice sessions logged yet. Use <strong>+ Log a past session</strong> above or start a live timer in <strong>Practice</strong>.
                </div>
              `}
        </div>
      </div>
    `;
  }
}

