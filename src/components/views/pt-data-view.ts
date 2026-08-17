import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { Instrument, Session, DataPeriodType, DonutSegment } from '../../types';
import { commonStyles } from '../../styles/shared-styles';
import { donutGradient } from '../../utils/chart-utils';
import { addDays, dateKey, fmtDuration, startOfDay } from '../../utils/date-utils';

@customElement('pt-data-view')
export class PtDataView extends LitElement {
  static styles = [
    commonStyles,
    css`
      :host {
        display: block;
        animation: fadeOnly 180ms ease-out both;
        padding-bottom: 28px;
      }

      .data-title {
        font-size: 24px;
        font-weight: 700;
        letter-spacing: -0.02em;
      }

      .period-toggle-wrap {
        margin-top: 16px;
        max-width: 460px;
      }

      .period-toggle {
        display: flex;
        background: #E4E3DD;
        border-radius: 14px;
        padding: 4px;
        gap: 4px;
      }

      .period-tab {
        flex: 1;
        text-align: center;
        padding: 9px 0;
        border-radius: 10px;
        font-size: 12px;
        font-weight: 700;
        cursor: pointer;
        border: none;
        background: transparent;
        color: #767668;
        transition: background-color 180ms ease-out, color 180ms ease-out;
      }

      .period-tab.active {
        background: #FFF;
        color: #23241F;
        box-shadow: 0 2px 6px rgba(35, 36, 31, 0.06);
      }

      /* Day View */
      .day-view-wrap {
        display: flex;
        justify-content: center;
        padding: 34px 0 8px;
      }

      .day-donut-outer {
        width: 200px;
        height: 200px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background 0.3s ease;
        animation: popIn 320ms cubic-bezier(0.2, 0.8, 0.2, 1) both;
      }

      .day-donut-inner {
        width: 156px;
        height: 156px;
        border-radius: 50%;
        background: #EDEDE9;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      .day-total-num {
        font-size: 32px;
        font-weight: 700;
        letter-spacing: -0.02em;
      }

      .day-total-label {
        font-size: 10px;
        color: #767668;
        letter-spacing: 0.08em;
        margin-top: 3px;
        font-weight: 700;
      }

      /* Week View */
      .metric-total-hero {
        text-align: center;
        padding: 30px 0 4px;
        font-size: 24px;
        font-weight: 700;
      }

      .metric-sub-hero {
        text-align: center;
        font-size: 12px;
        color: #767668;
        margin-bottom: 20px;
      }

      .week-bars-container {
        display: flex;
        gap: 10px;
        align-items: flex-end;
      }

      .week-bar-col {
        flex: 1;
        text-align: center;
      }

      .bar-card {
        height: 170px;
        border-radius: 14px;
        background: #FFF;
        display: flex;
        flex-direction: column-reverse;
        gap: 2px;
        padding: 5px;
        margin-bottom: 8px;
        box-shadow: 0 4px 12px rgba(35, 36, 31, 0.03);
      }

      .bar-seg {
        border-radius: 8px;
        display: block;
        transform-origin: bottom;
        animation: barGrow 520ms cubic-bezier(0.2, 0.8, 0.2, 1) both;
      }

      .bar-day-label {
        font-size: 11px;
        color: #767668;
      }

      .bar-day-label.today {
        color: #23241F;
        font-weight: 700;
      }

      /* Month View */
      .month-grid {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        gap: 6px;
        max-width: 520px;
        margin: 0 auto;
      }

      .grid-cell {
        aspect-ratio: 1;
        border-radius: 6px;
        animation: fadeOnly 300ms ease-out both;
      }

      /* Legend */
      .legend-container {
        display: flex;
        justify-content: center;
        gap: 16px;
        flex-wrap: wrap;
        padding: 26px 0 8px;
      }

      .legend-item {
        display: flex;
        align-items: center;
        gap: 6px;
        font-size: 11px;
        color: #767668;
      }

      .legend-dot {
        width: 7px;
        height: 7px;
        border-radius: 50%;
      }

      /* Session History Section */
      .history-section {
        padding: 16px 0 24px;
        border-top: 1px solid #E1E1DB;
        margin-top: 16px;
      }

      .history-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 12px;
      }

      .history-title {
        font-size: 14px;
        font-weight: 700;
        letter-spacing: -0.01em;
      }

      .history-list {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }

      .session-row {
        background: #FFF;
        border-radius: 14px;
        padding: 12px 16px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
        box-shadow: 0 2px 6px rgba(35, 36, 31, 0.03);
        transition: transform 160ms cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 160ms ease;
      }

      .session-row:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 14px rgba(35, 36, 31, 0.08);
      }

      .session-left {
        display: flex;
        align-items: center;
        gap: 10px;
      }

      .session-inst-dot {
        width: 10px;
        height: 10px;
        border-radius: 50%;
      }

      .session-inst-name {
        font-size: 13px;
        font-weight: 700;
      }

      .session-date-sub {
        font-size: 11px;
        color: #767668;
        margin-top: 1px;
      }

      .session-dur {
        font-size: 13px;
        font-weight: 700;
        color: #23241F;
      }

      .no-history-text {
        font-size: 12px;
        color: #767668;
        text-align: center;
        padding: 16px 0;
      }
    `,
  ];

  @property({ type: Array }) instruments: Instrument[] = [];
  @property({ type: Array }) sessions: Session[] = [];

  @state() private period: DataPeriodType = 'week';

  private handleEditSession(session: Session) {
    this.dispatchEvent(
      new CustomEvent('open-edit-session', {
        detail: { session },
        bubbles: true,
        composed: true,
      })
    );
  }

  render() {
    const today = startOfDay(new Date());
    const instMap = new Map(this.instruments.map((i) => [i.id, i]));
    const activeInstruments = this.instruments.filter((i) => !i.archived);

    // Group sessions by day
    const byDay: Record<string, Session[]> = {};
    this.sessions.forEach((s) => {
      const k = dateKey(startOfDay(new Date(s.start)));
      (byDay[k] = byDay[k] || []).push(s);
    });

    // --- Day Calculations ---
    const todaySessions = byDay[dateKey(today)] || [];
    const dayMinutesByInst: Record<string, number> = {};
    let dayTotalMin = 0;

    todaySessions.forEach((s) => {
      dayMinutesByInst[s.instrumentId] = (dayMinutesByInst[s.instrumentId] || 0) + s.duration;
      dayTotalMin += s.duration;
    });

    const daySegments: DonutSegment[] = Object.entries(dayMinutesByInst).map(([instId, min]) => {
      const inst = instMap.get(instId);
      return {
        color: inst?.color || '#A3A297',
        pct: (min / Math.max(1, dayTotalMin)) * 100,
      };
    });
    const dayDonutBg = donutGradient(daySegments);

    // --- Week Calculations ---
    const dayLabels = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    const weekBars = [];
    let weekTotalMin = 0;

    for (let i = 6; i >= 0; i--) {
      const d = addDays(today, -i);
      const isToday = i === 0;
      const daySessionsList = byDay[dateKey(d)] || [];

      const minutesByInst: Record<string, number> = {};
      daySessionsList.forEach((s) => {
        minutesByInst[s.instrumentId] = (minutesByInst[s.instrumentId] || 0) + s.duration;
        weekTotalMin += s.duration;
      });

      const segments = Object.entries(minutesByInst).map(([instId, min]) => {
        const inst = instMap.get(instId);
        return {
          color: inst?.color || '#A3A297',
          heightPct: Math.min(100, Math.round((min / 45) * 100)),
        };
      });

      weekBars.push({
        label: dayLabels[d.getDay()],
        isToday,
        segments: segments.length ? segments : [{ color: 'transparent', heightPct: 0 }],
      });
    }

    // --- Month (42 Days) Calculations ---
    const monthGrid = [];
    let monthTotalMin = 0;

    for (let i = 41; i >= 0; i--) {
      const d = addDays(today, -i);
      const daySessionsList = byDay[dateKey(d)] || [];

      if (!daySessionsList.length) {
        monthGrid.push({ color: '#E3E2DC' });
      } else {
        const minutesByInst: Record<string, number> = {};
        daySessionsList.forEach((s) => {
          minutesByInst[s.instrumentId] = (minutesByInst[s.instrumentId] || 0) + s.duration;
          monthTotalMin += s.duration;
        });

        // Find dominant instrument for that day
        const dominantInstId = Object.entries(minutesByInst).sort((a, b) => b[1] - a[1])[0][0];
        const inst = instMap.get(dominantInstId);
        monthGrid.push({ color: inst?.color || '#A3A297' });
      }
    }

    // Recent sessions for history list
    const recentSessionsList = [...this.sessions].slice(0, 8);

    return html`
      <div class="data-title">Data</div>

      <!-- Segmented Period Toggle -->
      <div class="period-toggle-wrap">
        <div class="period-toggle">
          <button
            type="button"
            class="period-tab ${this.period === 'day' ? 'active' : ''}"
            @click=${() => (this.period = 'day')}
          >
            Day
          </button>
          <button
            type="button"
            class="period-tab ${this.period === 'week' ? 'active' : ''}"
            @click=${() => (this.period = 'week')}
          >
            Week
          </button>
          <button
            type="button"
            class="period-tab ${this.period === 'month' ? 'active' : ''}"
            @click=${() => (this.period = 'month')}
          >
            Month
          </button>
        </div>
      </div>

      <!-- Day Period View -->
      ${this.period === 'day'
        ? html`
            <div class="day-view-wrap">
              <div class="day-donut-outer" style="background: ${dayDonutBg};">
                <div class="day-donut-inner">
                  <div class="day-total-num">${dayTotalMin ? fmtDuration(dayTotalMin) : '0′'}</div>
                  <div class="day-total-label">TODAY</div>
                </div>
              </div>
            </div>
          `
        : ''}

      <!-- Week Period View -->
      ${this.period === 'week'
        ? html`
            <div class="metric-total-hero">${fmtDuration(weekTotalMin)}</div>
            <div class="metric-sub-hero">this week</div>
            <div class="week-bars-container">
              ${weekBars.map(
                (bar, idx) => html`
                  <div class="week-bar-col">
                    <div class="bar-card">
                      ${bar.segments.map(
                        (seg) => html`
                          <span
                            class="bar-seg"
                            style="height: ${seg.heightPct}%; background: ${seg.color}; animation-delay: ${(6 - idx) * 45}ms;"
                          ></span>
                        `
                      )}
                    </div>
                    <span class="bar-day-label ${bar.isToday ? 'today' : ''}">
                      ${bar.label}
                    </span>
                  </div>
                `
              )}
            </div>
          `
        : ''}

      <!-- Month Period View -->
      ${this.period === 'month'
        ? html`
            <div class="metric-total-hero">${fmtDuration(monthTotalMin)}</div>
            <div class="metric-sub-hero">last 6 weeks</div>
            <div class="month-grid">
              ${monthGrid.map(
                (cell, idx) => html`
                  <span
                    class="grid-cell"
                    style="background: ${cell.color}; animation-delay: ${Math.round((41 - idx) * 8)}ms;"
                  ></span>
                `
              )}
            </div>
          `
        : ''}

      <!-- Legend -->
      <div class="legend-container">
        ${activeInstruments.map(
          (inst) => html`
            <span class="legend-item">
              <span class="legend-dot" style="background: ${inst.color};"></span>
              ${inst.name}
            </span>
          `
        )}
      </div>

      <!-- Recent Practice Session History -->
      <div class="history-section">
        <div class="history-header">
          <div class="history-title">Recent Session Logs</div>
        </div>

        ${recentSessionsList.length > 0
          ? html`
              <div class="history-list">
                ${recentSessionsList.map((s) => {
                  const inst = instMap.get(s.instrumentId);
                  const sessionDate = new Date(s.start);
                  const dateStr = sessionDate.toLocaleDateString([], {
                    month: 'short',
                    day: 'numeric',
                  });
                  return html`
                    <div class="session-row" @click=${() => this.handleEditSession(s)}>
                      <div class="session-left">
                        <span
                          class="session-inst-dot"
                          style="background: ${inst?.color || '#A3A297'};"
                        ></span>
                        <div>
                          <div class="session-inst-name">${inst?.name || 'Instrument'}</div>
                          <div class="session-date-sub">
                            ${dateStr}${s.notes ? ` • ${s.notes}` : ''}
                          </div>
                        </div>
                      </div>
                      <div class="session-dur">${fmtDuration(s.duration)}</div>
                    </div>
                  `;
                })}
              </div>
            `
          : html`
              <div class="no-history-text">
                No sessions recorded yet. Tap an instrument on Main to start!
              </div>
            `}
      </div>
    `;
  }
}

