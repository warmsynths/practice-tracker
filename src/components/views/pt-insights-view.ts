import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { Instrument, Session, AppSettings, RangeScope } from '../../types';
import { commonStyles } from '../../styles/shared-styles';
import { calculateBenchStats, BenchDataCalculations } from '../../utils/bench-metrics';

@customElement('pt-insights-view')
export class PtInsightsView extends LitElement {
  @property({ type: Array }) instruments: Instrument[] = [];
  @property({ type: Array }) sessions: Session[] = [];
  @property({ type: Object }) settings: AppSettings = { soundEnabled: true, hapticsEnabled: true };
  @property({ type: Number }) now: number = Date.now();

  @state() private range: RangeScope = 'week';
  @state() private mutedInstruments: Record<string, boolean> = {};

  static styles = [
    commonStyles,
    css`
      :host {
        display: block;
        animation: fadeIn 220ms ease-out both;
        font-family: 'Manrope', sans-serif;
        color: var(--ink);
        padding-bottom: 20px;
      }

      .wrap {
        display: flex;
        flex-direction: column;
        gap: 12px;
      }

      .range-bar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        flex-wrap: wrap;
      }

      .range-tabs {
        display: flex;
        background: var(--card);
        border-radius: 999px;
        padding: 4px;
        gap: 2px;
      }

      .range-tab-btn {
        padding: 8px 16px;
        border-radius: 999px;
        font-family: 'Gabarito', sans-serif;
        font-size: 12.5px;
        font-weight: 800;
        cursor: pointer;
        border: none;
        background: transparent;
        color: var(--muted);
        transition: background-color 160ms ease-out, color 160ms ease-out;
      }

      .range-tab-btn.active {
        background: var(--ink);
        color: var(--bg);
      }

      .scope-summary {
        font-size: 12.5px;
        color: var(--muted);
      }

      .scope-summary strong {
        color: var(--ink);
      }

      .scope-summary .delta {
        font-weight: 800;
      }

      .grid {
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 12px;
      }

      @media (max-width: 859px) {
        .grid {
          grid-template-columns: minmax(0, 1fr);
        }
      }

      .card-half { grid-column: span 2; }
      .card-full { grid-column: span 4; }

      @media (max-width: 859px) {
        .card-half, .card-full {
          grid-column: span 1 !important;
        }
      }

      .card {
        background: var(--card);
        border-radius: 26px;
        padding: 18px;
        display: flex;
        flex-direction: column;
      }

      .card-header {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        gap: 10px;
      }

      .card-label {
        font-size: 12px;
        color: var(--muted);
        font-weight: 800;
      }

      .card-sub-label {
        font-size: 11.5px;
        color: var(--dim);
      }

      /* Day streak */
      .streak-row {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        gap: 14px;
        margin-top: 6px;
      }

      .streak-num {
        font-family: 'Gabarito', sans-serif;
        font-size: 64px;
        font-weight: 900;
        letter-spacing: -0.05em;
        line-height: 0.9;
      }

      .streak-quip {
        font-size: 13px;
        color: var(--muted);
        text-align: right;
        max-width: 20ch;
        line-height: 1.35;
      }

      .bars-14 {
        display: flex;
        gap: 4px;
        margin-top: 16px;
        height: 34px;
        align-items: flex-end;
      }

      .bar-14-fill {
        flex: 1;
        border-radius: 6px;
        transition: height 300ms ease;
      }

      /* Lifetime ring */
      .lifetime-label {
        font-size: 12px;
        font-weight: 800;
        color: var(--muted);
      }

      .banked-body {
        display: flex;
        align-items: center;
        gap: 18px;
      }

      .ring-wrap {
        width: 118px;
        height: 118px;
        flex-shrink: 0;
        position: relative;
      }

      .ring-center {
        position: absolute;
        inset: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      .ring-life-num {
        font-family: 'Gabarito', sans-serif;
        font-size: 28px;
        font-weight: 900;
        line-height: 1;
      }

      .ring-life-tag {
        font-size: 10px;
        font-weight: 800;
        color: var(--muted);
        margin-top: 2px;
      }

      .banked-info-title {
        font-family: 'Gabarito', sans-serif;
        font-size: 21px;
        font-weight: 800;
        margin-top: 6px;
        line-height: 1.2;
      }

      .banked-info-sub {
        font-size: 12.5px;
        color: var(--muted);
        margin-top: 6px;
        line-height: 1.45;
      }

      /* One session away */
      .one-away-grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 10px;
        margin-top: 12px;
      }

      @media (max-width: 640px) {
        .one-away-grid {
          grid-template-columns: minmax(0, 1fr);
        }
      }

      .one-away-item {
        background: var(--bg);
        border-radius: 20px;
        padding: 16px;
        cursor: pointer;
        border: 2px solid transparent;
        transition: border-color 160ms ease-out;
      }

      .one-away-item:hover {
        border-color: var(--accent);
      }

      .one-away-top {
        display: flex;
        align-items: baseline;
        gap: 10px;
      }

      .one-away-big {
        font-family: 'Gabarito', sans-serif;
        font-size: 32px;
        font-weight: 900;
      }

      .one-away-inst {
        display: flex;
        align-items: center;
        gap: 6px;
      }

      .one-away-desc {
        font-size: 12px;
        color: var(--muted);
        margin-top: 8px;
        line-height: 1.4;
      }

      /* Stacked bar chart */
      .stacked-chart-area {
        display: flex;
        align-items: flex-end;
        gap: 4px;
        height: 150px;
        margin-top: 14px;
      }

      .stacked-bar-col {
        flex: 1;
        min-width: 0;
        display: flex;
        flex-direction: column-reverse;
        height: 100%;
        gap: 2px;
      }

      .stacked-segment {
        display: block;
        width: 100%;
        border-radius: 6px;
        transition: height 400ms cubic-bezier(0.2, 0.8, 0.2, 1);
      }

      .stacked-labels-row {
        display: flex;
        gap: 4px;
        margin-top: 8px;
      }

      .stacked-label-item {
        flex: 1;
        min-width: 0;
        text-align: center;
        font-size: 10px;
        white-space: nowrap;
        overflow: hidden;
      }

      .heatmap-grid {
        display: grid;
        grid-template-rows: repeat(7, auto);
        grid-auto-flow: column;
        grid-auto-columns: minmax(0, 1fr);
        gap: 3px;
        margin-top: 12px;
        max-width: 1100px;
      }

      @media (max-width: 859px) {
        .heatmap-grid {
          max-width: 600px;
        }
      }

      .heat-cell {
        aspect-ratio: 1;
        border-radius: 4px;
      }

      .heat-months-row {
        display: flex;
        justify-content: space-between;
        margin-top: 6px;
        font-size: 10px;
        color: var(--muted);
      }

      .heat-legend-row {
        display: flex;
        align-items: center;
        gap: 5px;
        margin-top: 12px;
        font-size: 11px;
        color: var(--dim);
      }

      .heat-legend-swatch {
        width: 11px;
        height: 11px;
        border-radius: 3px;
      }

      /* Week vs median */
      .pace-head {
        display: flex;
        align-items: baseline;
        gap: 8px;
        margin-top: 6px;
      }

      .pace-num {
        font-family: 'Gabarito', sans-serif;
        font-size: 34px;
        font-weight: 900;
        letter-spacing: -0.03em;
      }

      .pace-svg-box {
        width: 100%;
        height: 90px;
        margin-top: 8px;
        overflow: visible;
      }

      .pace-ticks-row {
        display: flex;
        justify-content: space-between;
        font-size: 10px;
        color: var(--dim);
        margin-top: 4px;
      }

      /* Day-of-week averages / histogram (shared bar layout) */
      .dow-bars-box {
        display: flex;
        align-items: flex-end;
        gap: 8px;
        height: 110px;
        margin-top: 12px;
      }

      .dow-col {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
        gap: 6px;
        height: 100%;
      }

      .dow-bar-fill {
        width: 100%;
        border-radius: 10px;
      }

      .caption-text {
        font-size: 12.5px;
        color: var(--muted);
        margin-top: 10px;
        line-height: 1.45;
      }

      /* Records */
      .records-grid {
        display: grid;
        grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
        gap: 14px;
        margin-top: 12px;
      }

      .record-card {
        background: var(--bg);
        border-radius: 18px;
        padding: 12px 14px;
      }

      .record-k {
        display: flex;
        align-items: center;
        gap: 6px;
        font-size: 11px;
        font-weight: 800;
        color: var(--muted);
      }

      .record-new-pill {
        font-size: 9.5px;
        font-weight: 900;
        background: var(--accent);
        color: var(--bg);
        border-radius: 999px;
        padding: 2px 7px;
      }

      .record-v {
        font-family: 'Gabarito', sans-serif;
        font-size: 22px;
        font-weight: 900;
        margin-top: 4px;
      }

      .record-sub {
        font-size: 11.5px;
        color: var(--dim);
        margin-top: 2px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      /* Kit share */
      .kit-share-list {
        display: flex;
        flex-direction: column;
        gap: 4px;
        margin-top: 10px;
      }

      .kit-share-row {
        display: flex;
        align-items: center;
        gap: 12px;
        background: var(--bg);
        border-radius: 18px;
        padding: 10px 14px;
        cursor: pointer;
        transition: opacity 200ms ease-out;
      }

      .kit-share-progress-track {
        height: 6px;
        border-radius: 999px;
        background: var(--card);
        margin-top: 6px;
        overflow: hidden;
      }

      .kit-share-progress-fill {
        height: 100%;
        border-radius: 999px;
      }

      /* Rhythm curve */
      .rhythm-wrap {
        position: relative;
        margin-top: 12px;
      }

      .rhythm-now-dot {
        position: absolute;
        width: 10px;
        height: 10px;
        margin: -5px 0 0 -5px;
        border-radius: 50%;
        background: var(--accent);
        box-shadow: 0 0 0 5px rgba(255, 122, 92, 0.22);
        animation: softPulse 2.4s ease-in-out infinite;
      }

      .rhythm-ticks {
        display: flex;
        justify-content: space-between;
        margin-top: 6px;
        font-size: 10.5px;
        color: var(--dim);
      }

      /* Notes themes */
      .themes-cloud {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
      }

      .theme-pill {
        display: flex;
        align-items: center;
        gap: 8px;
        background: var(--bg);
        border-radius: 999px;
        padding: 9px 15px;
      }
    `,
  ];

  private toggleMute(instId: string) {
    this.mutedInstruments = { ...this.mutedInstruments, [instId]: !this.mutedInstruments[instId] };
  }

  render() {
    const stats: BenchDataCalculations = calculateBenchStats(this.sessions, this.instruments, {
      range: this.range,
      mutedInstruments: this.mutedInstruments,
      now: new Date(this.now),
      weeklyGoalMinutes: this.settings.weeklyGoalMinutes,
    });

    return html`
      <div class="wrap">
        <div class="range-bar">
          <div class="range-tabs">
            ${(['week', 'month', 'quarter', 'year'] as RangeScope[]).map(
              (r) => html`
                <button class="range-tab-btn ${this.range === r ? 'active' : ''}" @click=${() => (this.range = r)}>
                  ${r.charAt(0).toUpperCase() + r.slice(1)}
                </button>
              `
            )}
          </div>
          <div class="scope-summary">
            ${stats.scopeCaption} · <strong>${stats.scopeTotal}</strong> ·
            <span class="delta" style="color:${stats.scopeDeltaColor}">${stats.scopeDelta}</span>
          </div>
        </div>

        <div class="grid">
          <!-- 1. Day streak -->
          <div class="card card-half">
            <span class="card-label">Day streak</span>
            <div class="streak-row">
              <div class="streak-num">${stats.streak}</div>
              <div class="streak-quip">${stats.quip}</div>
            </div>
            <div class="bars-14">
              ${stats.last14.map((d) => html`<div class="bar-14-fill" style="height:${d.h}%;background:${d.bg}"></div>`)}
            </div>
          </div>

          <!-- 2. Lifetime hours -->
          <div class="card card-half">
            <div class="banked-body">
              <div class="ring-wrap">
                <svg viewBox="0 0 118 118" style="width:100%;height:100%;transform:rotate(-90deg)">
                  <circle cx="59" cy="59" r="52" fill="none" stroke="var(--bg)" stroke-width="10"></circle>
                  <circle cx="59" cy="59" r="52" fill="none" stroke="var(--accent)" stroke-width="10" stroke-linecap="round" stroke-dasharray="${stats.ringDash}"></circle>
                </svg>
                <div class="ring-center">
                  <div class="ring-life-num">${stats.lifeHours}</div>
                  <div class="ring-life-tag">all time</div>
                </div>
              </div>
              <div style="min-width:0">
                <div class="lifetime-label">Every hour you have logged</div>
                <div class="banked-info-title">${stats.mileGap} to ${stats.nextMile}</div>
                <div class="banked-info-sub">${stats.lifeSub}</div>
              </div>
            </div>
          </div>

          <!-- 3. One session away -->
          <div class="card card-full">
            <div class="card-header">
              <span class="card-label">One session away</span>
              <span class="card-sub-label">tap one to start it</span>
            </div>
            <div class="one-away-grid">
              ${stats.oneAway.map(
                (o) => html`
                  <div class="one-away-item" @click=${() => this.dispatchEvent(new CustomEvent('start-session', { detail: { instrumentId: o.instId }, bubbles: true, composed: true }))}>
                    <div class="one-away-top">
                      <div class="one-away-big">${o.big}</div>
                      <div class="one-away-inst">
                        <span style="width:8px;height:8px;border-radius:50%;background:${o.instColor};flex-shrink:0"></span>
                        <span style="font-size:13px;font-weight:800;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${o.instName}</span>
                      </div>
                    </div>
                    <div class="one-away-desc">${o.text}</div>
                  </div>
                `
              )}
            </div>
          </div>

          <!-- 4. Range bar chart -->
          <div class="card card-full">
            <div class="card-header">
              <span class="card-label">${stats.chartTitle}</span>
              <span class="card-sub-label">peak ${stats.peakLabel}</span>
            </div>
            <div class="stacked-chart-area">
              ${stats.buckets.map(
                (b) => html`
                  <div class="stacked-bar-col">
                    ${b.segments.map((seg) => html`<span class="stacked-segment" style="height:${seg.h}%;background:${seg.color}"></span>`)}
                  </div>
                `
              )}
            </div>
            <div class="stacked-labels-row">
              ${stats.buckets.map((b) => html`<span class="stacked-label-item" style="color:${b.labelColor};font-weight:${b.labelWeight}">${b.label}</span>`)}
            </div>
          </div>

          <!-- 5. Heatmap -->
          <div class="card card-full">
            <div class="card-header">
              <span class="card-label">Every day on record</span>
              <span class="card-sub-label">${stats.heatSince}</span>
            </div>
            <div class="heatmap-grid">
              ${stats.heatMarked.map((c) => html`<div class="heat-cell" style="background:${c.bg};opacity:${c.op};outline:${c.ring};outline-offset:1px;animation:${c.anim}"></div>`)}
            </div>
            <div class="heat-legend-row">
              <span>less</span>
              <span class="heat-legend-swatch" style="background:#33233C"></span>
              <span class="heat-legend-swatch" style="background:var(--line)"></span>
              <span class="heat-legend-swatch" style="background:#7D5E99"></span>
              <span class="heat-legend-swatch" style="background:#9C78BE"></span>
              <span class="heat-legend-swatch" style="background:var(--chart)"></span>
              <span>more</span>
            </div>
          </div>

          <!-- 6. Week vs median -->
          <div class="card card-half">
            <div class="card-header">
              <span class="card-label">This week vs your median</span>
              <span style="font-size:12px;font-weight:800;color:${stats.paceColor}">${stats.paceDelta}</span>
            </div>
            <div class="pace-head">
              <div class="pace-num">${stats.weekTotal}</div>
              <div style="font-size:12.5px;color:var(--muted)">since Monday</div>
            </div>
            <svg viewBox="0 0 320 90" class="pace-svg-box" preserveAspectRatio="none">
              <polyline points="${stats.medianPts}" fill="none" stroke="var(--line)" stroke-width="2.5" stroke-dasharray="5 6" stroke-linecap="round"></polyline>
              <polyline points="${stats.actualPts}" fill="none" stroke="var(--accent)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></polyline>
            </svg>
            <div class="pace-ticks-row"><span>Mon</span><span>Wed</span><span>Fri</span><span>Sun</span></div>
          </div>

          <!-- 7. Day-of-week averages -->
          <div class="card card-half">
            <span class="card-label">Your week, averaged</span>
            <div class="dow-bars-box">
              ${stats.dow.map(
                (d) => html`
                  <div class="dow-col">
                    <div style="font-size:10px;color:var(--muted)">${d.val}</div>
                    <div class="dow-bar-fill" style="height:${d.h}%;background:${d.bg}"></div>
                    <div style="font-size:11px;font-weight:${d.strong};color:var(--ink)">${d.label}</div>
                  </div>
                `
              )}
            </div>
            <div class="caption-text">${stats.dowBestLabel} is your strongest day. ${stats.dowWorstLabel} is where the hours go missing.</div>
          </div>

          <!-- 8. Records -->
          <div class="card card-half">
            <div class="card-header">
              <span class="card-label">Records</span>
              <span class="card-sub-label">${stats.freshCount}</span>
            </div>
            <div class="records-grid">
              ${stats.records.map(
                (r) => html`
                  <div class="record-card">
                    <div class="record-k">
                      <span>${r.k}</span>
                      ${r.fresh ? html`<span class="record-new-pill">new</span>` : ''}
                    </div>
                    <div class="record-v">${r.v}</div>
                    <div class="record-sub">${r.sub}</div>
                  </div>
                `
              )}
            </div>
          </div>

          <!-- 9. Session-length histogram -->
          <div class="card card-half">
            <span class="card-label">How long you actually play</span>
            <div class="dow-bars-box" style="gap:10px">
              ${stats.hist.map(
                (b) => html`
                  <div class="dow-col">
                    <div style="font-size:10.5px;color:var(--muted)">${b.n}</div>
                    <div class="dow-bar-fill" style="height:${b.h}%;background:${b.bg}"></div>
                    <div style="font-size:10.5px;color:var(--ink)">${b.label}</div>
                  </div>
                `
              )}
            </div>
            <div class="caption-text">Most sittings land in ${stats.modeLabel}.</div>
          </div>

          <!-- 10. Kit share -->
          <div class="card card-full">
            <div class="card-header">
              <span class="card-label">Kit share, last 6 weeks</span>
              <span class="card-sub-label">tap to hide one from the chart</span>
            </div>
            <div class="kit-share-list">
              ${stats.instRows.map(
                (r) => html`
                  <div class="kit-share-row" style="opacity:${r.opacity}" @click=${() => this.toggleMute(r.id)} title="${r.isMuted ? 'Unmute' : 'Mute'} ${r.name}">
                    <span style="width:9px;height:9px;border-radius:50%;background:${r.color};flex-shrink:0"></span>
                    <div style="flex:1;min-width:0">
                      <div style="display:flex;justify-content:space-between;gap:8px">
                        <span style="font-size:13px;font-weight:800;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${r.name}</span>
                        <span style="font-size:12px;color:var(--muted);flex-shrink:0">${r.minsLabel} · ${r.shareLabel}</span>
                      </div>
                      <div class="kit-share-progress-track">
                        <span class="kit-share-progress-fill" style="width:${r.sharePct}%;background:${r.color}"></span>
                      </div>
                    </div>
                    <svg width="60" height="24" viewBox="0 0 100 34" preserveAspectRatio="none" style="flex-shrink:0;overflow:visible">
                      <polyline points="${r.spark}" fill="none" stroke="${r.color}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></polyline>
                    </svg>
                  </div>
                `
              )}
            </div>
          </div>

          <!-- 11. Hour-of-day rhythm -->
          <div class="card card-full">
            <div class="card-header" style="flex-wrap:wrap">
              <span class="card-label">Your day, by the hour</span>
              <div style="font-size:12px;color:var(--muted)">
                <strong style="color:var(--ink)">${stats.windowShare}</strong> of your time falls between ${stats.windowLabel}
              </div>
            </div>
            <div class="rhythm-wrap">
              <svg viewBox="0 0 720 124" preserveAspectRatio="none" style="width:100%;height:124px;display:block">
                <rect x="${stats.bandX}" y="0" width="${stats.bandW}" height="124" fill="var(--accent)" opacity="0.14" rx="10"></rect>
                <path d="${stats.dayArea}" fill="var(--chart)" opacity="0.22"></path>
                <path d="${stats.dayCurve}" fill="none" stroke="var(--chart)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
              <div class="rhythm-now-dot" style="left:${stats.nowLeft};top:${stats.nowTop}"></div>
            </div>
            <div class="rhythm-ticks">${stats.dayTicks.map((t) => html`<div>${t.label}</div>`)}</div>
          </div>

          <!-- 12. Notes themes -->
          <div class="card card-full">
            <span class="card-label">From your notes · what you’ve been working on</span>
            ${stats.themes.length === 0
              ? html`<div style="font-size:13px;color:var(--dim);margin-top:10px">Add notes when you save a session and the recurring ones collect here.</div>`
              : ''}
            <div class="themes-cloud" style="margin-top:12px">
              ${stats.themes.map(
                (t) => html`
                  <div class="theme-pill">
                    <span style="width:8px;height:8px;border-radius:50%;background:${t.color};flex-shrink:0"></span>
                    <span style="font-family:'Gabarito',sans-serif;font-weight:800;font-size:${t.size};white-space:nowrap">${t.name}</span>
                    <span style="font-size:11px;color:var(--dim);white-space:nowrap">${t.mins} · ${t.ago}</span>
                  </div>
                `
              )}
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
