import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { Instrument, Session, DataPeriodType } from '../../types';
import { commonStyles } from '../../styles/shared-styles';
import { addDays, dateKey, fmtDuration, startOfDay } from '../../utils/date-utils';

interface ChartBucket {
  t0: Date;
  t1: Date;
  label: string;
  strong: boolean;
  segments: {
    color: string;
    heightPct: number;
  }[];
}

interface InstrumentRowData {
  id: string;
  name: string;
  color: string;
  mins: number;
  minsLabel: string;
  sharePct: number;
  shareLabel: string;
  spark: string;
  opacity: number;
}

@customElement('pt-data-view')
export class PtDataView extends LitElement {
  static styles = [
    commonStyles,
    css`
      :host {
        display: block;
        animation: fadeOnly 180ms ease-out both;
        padding-bottom: 32px;
      }

      .data-header {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
        gap: 12px;
      }

      .data-title {
        font-size: 24px;
        font-weight: 700;
        letter-spacing: -0.02em;
        color: #23241F;
      }

      .range-label {
        font-size: 11px;
        color: #A3A297;
        font-weight: 500;
      }

      /* Period Tabs */
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

      /* Filter Chips */
      .filter-chips-wrap {
        display: flex;
        flex-wrap: wrap;
        gap: 7px;
        margin-top: 12px;
      }

      .filter-chip {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        border-radius: 12px;
        padding: 7px 12px;
        font-size: 12px;
        font-weight: 700;
        cursor: pointer;
        border: 1px solid #E1E1DB;
        background: #FBFBF9;
        color: #767668;
        transition: background-color 180ms ease-out, color 180ms ease-out, border-color 180ms ease-out;
      }

      .filter-chip.active {
        border-color: transparent;
      }

      .filter-chip-dot {
        width: 6px;
        height: 6px;
        border-radius: 50%;
      }

      /* Stat Cards */
      .stat-cards-container {
        display: flex;
        gap: 10px;
        margin-top: 14px;
      }

      .stat-card {
        background: #FFF;
        border-radius: 20px;
        padding: 17px 18px 15px;
        box-shadow: 0 2px 8px rgba(35, 36, 31, 0.03);
        animation: popIn 300ms cubic-bezier(0.2, 0.8, 0.2, 1) both;
      }

      .stat-card.main-card {
        flex: 1.35;
      }

      .stat-card.sub-card {
        flex: 1;
      }

      .stat-caption {
        font-size: 10px;
        letter-spacing: 0.12em;
        color: #A3A297;
        font-weight: 700;
      }

      .stat-value {
        font-size: 32px;
        font-weight: 700;
        letter-spacing: -0.03em;
        margin-top: 7px;
        line-height: 1;
        color: #23241F;
      }

      .stat-delta {
        font-size: 12px;
        font-weight: 500;
        margin-top: 6px;
      }

      .stat-subtext {
        font-size: 12px;
        color: #767668;
        margin-top: 6px;
      }

      /* Chart Card */
      .chart-card {
        background: #FFF;
        border-radius: 20px;
        padding: 16px 16px 12px;
        margin-top: 10px;
        box-shadow: 0 2px 8px rgba(35, 36, 31, 0.03);
      }

      .chart-header {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        margin-bottom: 12px;
      }

      .chart-title {
        font-size: 12px;
        font-weight: 700;
        color: #23241F;
      }

      .chart-peak {
        font-size: 10px;
        color: #A3A297;
      }

      .chart-bars-wrap {
        display: flex;
        align-items: flex-end;
        gap: 4px;
        height: 148px;
      }

      .chart-bar-col {
        flex: 1;
        min-width: 0;
        height: 100%;
        display: flex;
        flex-direction: column-reverse;
        justify-content: flex-start;
        gap: 2px;
      }

      .chart-bar-seg {
        display: block;
        border-radius: 5px;
        transform-origin: bottom;
        animation: barGrow 480ms cubic-bezier(0.2, 0.8, 0.2, 1) both;
      }

      .chart-labels-wrap {
        display: flex;
        gap: 4px;
        margin-top: 9px;
      }

      .chart-col-label {
        flex: 1;
        min-width: 0;
        text-align: center;
        font-size: 10px;
        white-space: nowrap;
        overflow: hidden;
      }

      /* Instrument Breakdown Card */
      .breakdown-card {
        background: #FFF;
        border-radius: 20px;
        padding: 4px 16px 6px;
        margin-top: 10px;
        box-shadow: 0 2px 8px rgba(35, 36, 31, 0.03);
      }

      .breakdown-row {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 13px 0;
        cursor: pointer;
        border-top: 1px solid #F0EFE9;
        transition: opacity 200ms ease-out;
      }

      .breakdown-row:first-child {
        border-top: none;
      }

      .breakdown-dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        flex-shrink: 0;
      }

      .breakdown-main {
        flex: 1;
        min-width: 0;
      }

      .breakdown-text {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        gap: 8px;
      }

      .breakdown-name {
        font-size: 13px;
        font-weight: 700;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: #23241F;
      }

      .breakdown-meta {
        font-size: 12px;
        color: #767668;
        flex-shrink: 0;
      }

      .breakdown-bar-track {
        height: 4px;
        border-radius: 3px;
        background: #F0EFE9;
        margin-top: 7px;
        overflow: hidden;
      }

      .breakdown-bar-fill {
        display: block;
        height: 100%;
        border-radius: 3px;
        transition: width 320ms cubic-bezier(0.16, 1, 0.3, 1);
      }

      .breakdown-sparkline {
        flex-shrink: 0;
        overflow: visible;
      }

      .no-data-msg {
        padding: 16px 0 18px;
        font-size: 12px;
        color: #A3A297;
        text-align: center;
      }

      /* Session History Section */
      .history-section {
        padding: 20px 0 12px;
        border-top: 1px solid #E1E1DB;
        margin-top: 18px;
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
        color: #23241F;
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
        color: #23241F;
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

  @state() private scale: DataPeriodType = 'week';
  @state() private instFilter: string[] = [];

  private toggleInstFilter(id: string) {
    const cur = this.instFilter || [];
    const next = cur.includes(id) ? cur.filter((x) => x !== id) : cur.concat([id]);
    this.instFilter = next.length === this.instruments.length ? [] : next;
  }

  private clearInstFilter() {
    this.instFilter = [];
  }

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

    const allFilterOn = !this.instFilter.length;
    const activeIds = allFilterOn ? activeInstruments.map((i) => i.id) : this.instFilter;
    const inFilter = (s: Session) => activeIds.includes(s.instrumentId);

    const dayLabels = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    const monthAbbr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    // 1. Build Time Buckets according to scale
    const bucketList: { t0: Date; t1: Date; label: string; strong: boolean }[] = [];

    if (this.scale === 'week') {
      for (let i = 6; i >= 0; i--) {
        const d = addDays(today, -i);
        bucketList.push({
          t0: d,
          t1: addDays(d, 1),
          label: dayLabels[d.getDay()],
          strong: i === 0,
        });
      }
    } else if (this.scale === 'month') {
      for (let i = 29; i >= 0; i--) {
        const d = addDays(today, -i);
        bucketList.push({
          t0: d,
          t1: addDays(d, 1),
          label: i === 0 || i % 7 === 1 ? String(d.getDate()) : '',
          strong: i === 0,
        });
      }
    } else if (this.scale === 'year') {
      for (let i = 11; i >= 0; i--) {
        const d = new Date(today.getFullYear(), today.getMonth() - i, 1);
        bucketList.push({
          t0: d,
          t1: new Date(d.getFullYear(), d.getMonth() + 1, 1),
          label: monthAbbr[d.getMonth()].charAt(0),
          strong: i === 0,
        });
      }
    } else {
      // 'all' scale: up to 26 weekly buckets
      const firstTs = this.sessions.length
        ? this.sessions.reduce((min, x) => Math.min(min, new Date(x.start).getTime()), Infinity)
        : Date.now();
      const fd = new Date(firstTs);
      const wNow = addDays(today, -today.getDay());
      const weeks: Date[] = [];
      for (let d = addDays(startOfDay(fd), -fd.getDay()); d.getTime() <= wNow.getTime(); d = addDays(d, 7)) {
        weeks.push(d);
      }
      const shown = weeks.slice(-26);
      shown.forEach((d, i) => {
        bucketList.push({
          t0: d,
          t1: addDays(d, 7),
          label: d.getDate() <= 7 ? monthAbbr[d.getMonth()].charAt(0) : '',
          strong: i === shown.length - 1,
        });
      });
      if (bucketList.length === 0) {
        bucketList.push({ t0: wNow, t1: addDays(wNow, 7), label: 'Now', strong: true });
      }
    }

    // 2. Aggregate minutes into buckets & calculate filtered metrics
    const bucketMin: Record<string, number>[] = bucketList.map(() => ({}));
    const minutesByInstScale: Record<string, number> = {};
    const daysInWindow: Record<string, boolean> = {};
    let scaleTotal = 0;

    this.sessions.forEach((x) => {
      if (!inFilter(x)) return;
      const t = new Date(x.start).getTime();
      for (let i = 0; i < bucketList.length; i++) {
        if (t >= bucketList[i].t0.getTime() && t < bucketList[i].t1.getTime()) {
          bucketMin[i][x.instrumentId] = (bucketMin[i][x.instrumentId] || 0) + x.duration;
          minutesByInstScale[x.instrumentId] = (minutesByInstScale[x.instrumentId] || 0) + x.duration;
          daysInWindow[dateKey(startOfDay(new Date(x.start)))] = true;
          scaleTotal += x.duration;
          break;
        }
      }
    });

    const bucketTotals = bucketMin.map((m) => Object.values(m).reduce((a, b) => a + b, 0));
    const peakMin = Math.max(1, ...bucketTotals);
    const stagger = Math.max(6, Math.round(300 / Math.max(1, bucketList.length)));

    const chartBuckets: ChartBucket[] = bucketList.map((b, i) => {
      const segs = activeInstruments
        .filter((inst) => bucketMin[i][inst.id])
        .map((inst) => ({
          color: inst.color,
          heightPct: (bucketMin[i][inst.id] / peakMin) * 100,
        }));
      return {
        t0: b.t0,
        t1: b.t1,
        label: b.label,
        strong: b.strong,
        segments: segs.length ? segs : [{ color: '#EDECE6', heightPct: 2.5 }],
      };
    });

    // 3. Comparative Delta % vs previous period
    const winStart = bucketList[0].t0.getTime();
    const winEnd = bucketList[bucketList.length - 1].t1.getTime();
    const winLen = winEnd - winStart;
    let prevTotal = 0;

    this.sessions.forEach((x) => {
      if (!inFilter(x)) return;
      const t = new Date(x.start).getTime();
      if (t >= winStart - winLen && t < winStart) {
        prevTotal += x.duration;
      }
    });

    const prevNoun: Record<DataPeriodType, string> = {
      week: 'week',
      month: '30 days',
      year: 'year',
      all: 'period',
    };
    const deltaPct = prevTotal ? Math.round(((scaleTotal - prevTotal) / prevTotal) * 100) : null;
    const deltaLabel =
      deltaPct === null
        ? scaleTotal
          ? `first ${prevNoun[this.scale]} of data`
          : 'no sessions yet'
        : `${deltaPct >= 0 ? '+' : ''}${deltaPct}% vs previous ${prevNoun[this.scale]}`;
    const deltaColor = deltaPct === null ? '#A3A297' : deltaPct >= 0 ? '#6B7F6E' : '#9A6F6F';

    // 4. Streak & Days Practiced Count
    const dayHits: Record<string, boolean> = {};
    this.sessions.forEach((x) => {
      if (inFilter(x)) {
        dayHits[dateKey(startOfDay(new Date(x.start)))] = true;
      }
    });

    let filterStreak = 0;
    let streakCursor = dayHits[dateKey(today)] ? today : addDays(today, -1);
    while (dayHits[dateKey(streakCursor)]) {
      filterStreak++;
      streakCursor = addDays(streakCursor, -1);
    }

    const daysDone = Object.keys(daysInWindow).length;
    const daysPracticedLabel =
      this.scale === 'week'
        ? `${daysDone} of 7 days`
        : this.scale === 'month'
        ? `${daysDone} of 30 days`
        : this.scale === 'year'
        ? `${daysDone} active days`
        : `${daysDone} active days`;

    // 5. 10-Week Sparkline Generator & Breakdown Rows
    const sparkWeeks = 10;
    const wkStart = addDays(today, -today.getDay());

    const instRows: InstrumentRowData[] = activeInstruments.map((inst) => {
      const vals: number[] = [];
      for (let i = sparkWeeks - 1; i >= 0; i--) {
        const a = addDays(wkStart, -7 * i).getTime();
        const b = a + 7 * 86400000;
        let v = 0;
        this.sessions.forEach((x) => {
          if (x.instrumentId !== inst.id) return;
          const t = new Date(x.start).getTime();
          if (t >= a && t < b) v += x.duration;
        });
        vals.push(v);
      }
      const mx = Math.max(1, ...vals);
      const spark = vals
        .map((v, i) => `${(i * (100 / (sparkWeeks - 1))).toFixed(1)},${(31 - (v / mx) * 28).toFixed(1)}`)
        .join(' ');
      const mins = minutesByInstScale[inst.id] || 0;
      const share = scaleTotal ? Math.round((mins / scaleTotal) * 100) : 0;
      const isSelected = allFilterOn || this.instFilter.includes(inst.id);

      return {
        id: inst.id,
        name: inst.name,
        color: inst.color,
        mins,
        minsLabel: mins ? fmtDuration(mins) : '—',
        sharePct: share,
        shareLabel: `${share}%`,
        spark,
        opacity: isSelected ? 1 : 0.32,
      };
    });

    const scaleCaptionMap: Record<DataPeriodType, string> = {
      week: 'THIS WEEK',
      month: 'LAST 30 DAYS',
      year: 'LAST 12 MONTHS',
      all: 'ALL TIME',
    };

    const chartTitleMap: Record<DataPeriodType, string> = {
      week: 'Daily minutes',
      month: 'Daily minutes',
      year: 'Monthly minutes',
      all: 'Weekly minutes',
    };

    const rangeLabel = `${bucketList[0].t0.toLocaleDateString([], {
      month: 'short',
      day: 'numeric',
    })} – ${today.toLocaleDateString([], { month: 'short', day: 'numeric' })}`;

    // 6. Recent Sessions filtered
    const recentFilteredSessions = this.sessions
      .filter((s) => inFilter(s))
      .slice(0, 8);

    return html`
      <!-- Header -->
      <div class="data-header">
        <div class="data-title">Data</div>
        <div class="range-label">${rangeLabel}</div>
      </div>

      <!-- Segmented Scale Tabs -->
      <div class="period-toggle-wrap">
        <div class="period-toggle">
          ${(['week', 'month', 'year', 'all'] as DataPeriodType[]).map(
            (tabKey) => html`
              <button
                type="button"
                class="period-tab ${this.scale === tabKey ? 'active' : ''}"
                @click=${() => (this.scale = tabKey)}
              >
                ${tabKey.charAt(0).toUpperCase() + tabKey.slice(1)}
              </button>
            `
          )}
        </div>
      </div>

      <!-- Filter Chips -->
      <div class="filter-chips-wrap">
        <button
          type="button"
          class="filter-chip ${allFilterOn ? 'active' : ''}"
          style="${allFilterOn
            ? 'background: #23241F; color: #F2F1EC; border-color: #23241F;'
            : ''}"
          @click=${() => this.clearInstFilter()}
        >
          <span
            class="filter-chip-dot"
            style="background: ${allFilterOn ? '#8C8C7E' : '#C9C8BF'};"
          ></span>
          All
        </button>

        ${activeInstruments.map((inst) => {
          const isSelected = !allFilterOn && this.instFilter.includes(inst.id);
          return html`
            <button
              type="button"
              class="filter-chip ${isSelected ? 'active' : ''}"
              style="${isSelected
                ? `background: ${inst.color}; color: #F7F5F2; border-color: ${inst.color};`
                : ''}"
              @click=${() => this.toggleInstFilter(inst.id)}
            >
              <span
                class="filter-chip-dot"
                style="background: ${isSelected ? 'rgba(255,255,255,0.7)' : inst.color};"
              ></span>
              ${inst.name}
            </button>
          `;
        })}
      </div>

      <!-- Dual Summary Cards -->
      <div class="stat-cards-container">
        <div class="stat-card main-card">
          <div class="stat-caption">${scaleCaptionMap[this.scale]}</div>
          <div class="stat-value">${scaleTotal ? fmtDuration(scaleTotal) : '0′'}</div>
          <div class="stat-delta" style="color: ${deltaColor};">${deltaLabel}</div>
        </div>

        <div class="stat-card sub-card">
          <div class="stat-caption">STREAK</div>
          <div class="stat-value">${filterStreak}</div>
          <div class="stat-subtext">${daysPracticedLabel}</div>
        </div>
      </div>

      <!-- Stacked Bar Chart Card -->
      <div class="chart-card">
        <div class="chart-header">
          <span class="chart-title">${chartTitleMap[this.scale]}</span>
          <span class="chart-peak">peak ${peakMin ? fmtDuration(peakMin) : '0′'}</span>
        </div>

        <div class="chart-bars-wrap">
          ${chartBuckets.map(
            (b, i) => html`
              <div class="chart-bar-col">
                ${b.segments.map(
                  (seg) => html`
                    <span
                      class="chart-bar-seg"
                      style="height: ${seg.heightPct}%; background: ${seg.color}; animation-delay: ${i *
                      stagger}ms;"
                    ></span>
                  `
                )}
              </div>
            `
          )}
        </div>

        <div class="chart-labels-wrap">
          ${chartBuckets.map(
            (b) => html`
              <span
                class="chart-col-label"
                style="color: ${b.strong ? '#23241F' : '#A3A297'}; font-weight: ${b.strong
                  ? '700'
                  : '400'};"
              >
                ${b.label}
              </span>
            `
          )}
        </div>
      </div>

      <!-- Per-Instrument Breakdown with 10-Week Sparklines -->
      <div class="breakdown-card">
        ${instRows.map(
          (r) => html`
            <div
              class="breakdown-row"
              style="opacity: ${r.opacity};"
              @click=${() => this.toggleInstFilter(r.id)}
            >
              <span class="breakdown-dot" style="background: ${r.color};"></span>
              <div class="breakdown-main">
                <div class="breakdown-text">
                  <span class="breakdown-name">${r.name}</span>
                  <span class="breakdown-meta">${r.minsLabel} · ${r.shareLabel}</span>
                </div>
                <div class="breakdown-bar-track">
                  <span
                    class="breakdown-bar-fill"
                    style="width: ${r.sharePct}%; background: ${r.color};"
                  ></span>
                </div>
              </div>
              <svg
                class="breakdown-sparkline"
                width="54"
                height="22"
                viewBox="0 0 100 34"
                preserveAspectRatio="none"
              >
                <polyline
                  points="${r.spark}"
                  fill="none"
                  stroke="${r.color}"
                  stroke-width="3.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  opacity="0.85"
                ></polyline>
              </svg>
            </div>
          `
        )}
        ${scaleTotal === 0
          ? html`<div class="no-data-msg">Nothing logged in this range yet.</div>`
          : ''}
      </div>

      <!-- Recent Practice Session History -->
      <div class="history-section">
        <div class="history-header">
          <div class="history-title">Recent Session Logs</div>
        </div>

        ${recentFilteredSessions.length > 0
          ? html`
              <div class="history-list">
                ${recentFilteredSessions.map((s) => {
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
                No sessions recorded in this selection. Tap an instrument on Main to start!
              </div>
            `}
      </div>
    `;
  }
}
