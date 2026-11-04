import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { Instrument, Session, AppSettings, RangeScope } from '../../types';
import { commonStyles } from '../../styles/shared-styles';
import { calculateBenchStats, BenchDataCalculations, BENCH_ICONS } from '../../utils/bench-metrics';

@customElement('pt-insights-view')
export class PtInsightsView extends LitElement {
  @property({ type: Array }) instruments: Instrument[] = [];
  @property({ type: Array }) sessions: Session[] = [];
  @property({ type: Object }) settings: AppSettings = { soundEnabled: true, hapticsEnabled: true };
  @property({ type: Number }) now: number = Date.now();

  @state() private range: RangeScope = 'week';
  @state() private mutedInstruments: Record<string, boolean> = {};
  @state() private activeMsId: string | null = null;

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
        gap: 14px;
      }

      .range-bar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        flex-wrap: wrap;
        padding: 4px 2px;
      }

      .range-tabs {
        display: flex;
        background: var(--card);
        border-radius: 999px;
        padding: 4px;
        gap: 4px;
      }

      .range-tab-btn {
        padding: 8px 16px;
        border-radius: 999px;
        font-family: 'Gabarito', sans-serif;
        font-size: 12.5px;
        font-weight: 700;
        cursor: pointer;
        border: none;
        background: transparent;
        color: var(--muted);
      }

      .range-tab-btn.active {
        background: var(--ink);
        color: var(--bg);
      }

      .scope-summary {
        font-size: 12px;
        color: var(--muted);
      }

      .scope-summary strong {
        color: var(--ink);
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
        margin-bottom: 12px;
      }

      .card-label {
        font-size: 12px;
        color: var(--muted);
        font-weight: 800;
      }

      .card-sub-label {
        font-size: 12px;
        color: var(--muted);
      }

      /* Day streak */
      .streak-row {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        gap: 16px;
      }

      .streak-num {
        font-family: 'Gabarito', sans-serif;
        font-size: 62px;
        font-weight: 900;
        letter-spacing: -0.03em;
        line-height: 0.9;
      }

      .streak-quip {
        font-size: 13px;
        color: var(--muted);
        text-align: right;
        max-width: 18ch;
        line-height: 1.3;
      }

      .bars-14 {
        display: flex;
        gap: 5px;
        margin-top: 18px;
      }

      .bar-14-col {
        flex: 1;
        height: 30px;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
        gap: 4px;
      }

      .bar-14-fill {
        width: 100%;
        border-radius: 3px;
        transition: height 300ms ease;
      }

      /* Lifetime ring */
      .banked-body {
        display: flex;
        align-items: center;
        gap: 16px;
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
        font-size: 22px;
        font-weight: 800;
      }

      .ring-life-tag {
        font-size: 9px;
        letter-spacing: 0.08em;
        color: var(--muted);
      }

      .banked-info-title {
        font-size: 14px;
        font-weight: 700;
      }

      .banked-info-sub {
        font-size: 12px;
        color: var(--muted);
        margin-top: 4px;
      }

      /* One session away */
      .one-away-grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 12px;
      }

      @media (max-width: 640px) {
        .one-away-grid {
          grid-template-columns: minmax(0, 1fr);
        }
      }

      .one-away-item {
        background: var(--raised);
        border-radius: 16px;
        padding: 12px;
        cursor: pointer;
      }

      .one-away-top {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        gap: 8px;
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
        height: 140px;
      }

      .stacked-bar-col {
        flex: 1;
        display: flex;
        flex-direction: column-reverse;
        height: 100%;
        border-radius: 3px;
        overflow: hidden;
      }

      .stacked-segment {
        width: 100%;
        transition: height 400ms cubic-bezier(0.2, 0.8, 0.2, 1);
      }

      .stacked-labels-row {
        display: flex;
        gap: 4px;
        margin-top: 6px;
      }

      .stacked-label-item {
        flex: 1;
        text-align: center;
        font-size: 10px;
        color: var(--muted);
      }

      /* Heatmap — scrolls horizontally within its card rather than
         overflowing the page when there are more weeks than fit. */
      .heatmap-grid {
        display: grid;
        grid-auto-flow: column;
        grid-template-rows: repeat(7, 1fr);
        gap: 3px;
        max-width: 1100px;
        overflow-x: auto;
        overflow-y: hidden;
        padding-bottom: 2px;
      }

      @media (max-width: 859px) {
        .heatmap-grid {
          max-width: 600px;
        }
      }

      .heat-cell {
        width: 11px;
        height: 11px;
        border-radius: 3px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .heat-cell svg {
        width: 8px;
        height: 8px;
      }

      .heat-months-row {
        display: flex;
        justify-content: space-between;
        margin-top: 6px;
        font-size: 10px;
        color: var(--muted);
      }

      .ms-preview-banner {
        display: flex;
        align-items: center;
        gap: 12px;
        margin-top: 14px;
        padding: 12px;
        background: var(--raised);
        border-radius: 14px;
      }

      .ms-badge-icon {
        width: 34px;
        height: 34px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }

      .ms-legend-wrap {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
      }

      .ms-legend-pill {
        display: flex;
        align-items: center;
        gap: 6px;
        border-radius: 999px;
        padding: 5px 10px;
        cursor: pointer;
      }

      .ms-legend-icon-mini {
        width: 18px;
        height: 18px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      /* Week vs median */
      .pace-head {
        display: flex;
        align-items: baseline;
        gap: 9px;
      }

      .pace-num {
        font-family: 'Gabarito', sans-serif;
        font-size: 34px;
        font-weight: 900;
      }

      .pace-svg-box {
        width: 100%;
        height: 90px;
        margin-top: 8px;
      }

      /* Day-of-week averages / histogram (shared bar layout) */
      .dow-bars-box {
        display: flex;
        align-items: flex-end;
        gap: 6px;
        height: 90px;
      }

      .dow-col {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
        gap: 4px;
        height: 100%;
      }

      .dow-bar-fill {
        width: 100%;
        border-radius: 3px 3px 0 0;
      }

      .caption-text {
        font-size: 12.5px;
        color: var(--muted);
        margin-top: 12px;
        line-height: 1.45;
      }

      /* Records */
      .records-grid {
        display: grid;
        grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
        gap: 14px 16px;
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
        font-size: 9px;
        font-weight: 800;
        background: var(--accent);
        color: var(--bg);
        border-radius: 6px;
        padding: 2px 5px;
      }

      .record-v {
        font-family: 'Gabarito', sans-serif;
        font-size: 22px;
        font-weight: 900;
        margin-top: 2px;
      }

      .record-sub {
        font-size: 11px;
        color: var(--muted);
      }

      /* Kit share */
      .kit-share-list {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }

      .kit-share-row {
        display: flex;
        align-items: center;
        gap: 10px;
        cursor: pointer;
      }

      .kit-share-progress-track {
        height: 5px;
        border-radius: 999px;
        background: var(--raised);
        margin-top: 4px;
        overflow: hidden;
      }

      .kit-share-progress-fill {
        height: 100%;
        border-radius: 999px;
      }

      /* Rhythm curve */
      .rhythm-wrap {
        position: relative;
      }

      .rhythm-now-dot {
        position: absolute;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: var(--accent);
        transform: translate(-50%, -50%);
        animation: softPulse 1.6s ease-in-out infinite;
      }

      .rhythm-ticks {
        display: flex;
        justify-content: space-between;
        margin-top: 6px;
        font-size: 10px;
        color: var(--muted);
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
        gap: 6px;
        background: var(--raised);
        border-radius: 999px;
        padding: 7px 12px;
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

    const activeMs = stats.milestones.find((m) => m.id === this.activeMsId);
    const msCaptionTitle = activeMs
      ? activeMs.title
      : `${stats.milestones.filter((m) => m.done && m.when > 0).length} milestones sit on the calendar above`;
    const msCaptionDetail = activeMs
      ? activeMs.done
        ? `${activeMs.detail}${activeMs.dateLabel ? ` · ${activeMs.dateLabel}` : ''}`
        : `${activeMs.detail} · ${activeMs.pctLabel} of the way`
      : 'Hover a marked day, or any icon here, to see what it was for.';
    const msCaptionIcon = activeMs ? activeMs.icon : BENCH_ICONS.star;
    const msCaptionBg = activeMs ? (activeMs.done ? activeMs.accent : 'var(--raised)') : 'var(--raised)';
    const msCaptionStroke = activeMs ? (activeMs.done ? 'var(--bg)' : 'var(--muted)') : 'var(--muted)';

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
            <span style="color:${stats.scopeDeltaColor};font-weight:700">${stats.scopeDelta}</span>
          </div>
        </div>

        <div class="grid">
          <!-- 1. Day streak -->
          <div class="card card-half">
            <div class="card-header">
              <span class="card-label">Day streak</span>
              <span class="card-sub-label">best ${stats.bestStreak}d</span>
            </div>
            <div class="streak-row">
              <div class="streak-num">${stats.streak}</div>
              <div class="streak-quip">${stats.quip}</div>
            </div>
            <div class="bars-14">
              ${stats.last14.map(
                (d) => html`
                  <div class="bar-14-col">
                    <div class="bar-14-fill" style="height:${d.h}%;background:${d.bg}"></div>
                    <span style="font-size:9.5px;color:${d.labelColor};font-weight:${d.isToday ? 700 : 500}">${d.label}</span>
                  </div>
                `
              )}
            </div>
          </div>

          <!-- 2. Lifetime hours -->
          <div class="card card-half">
            <div class="card-header">
              <span class="card-label">Every hour you have logged</span>
              <span class="card-sub-label">${stats.nextMile} goal</span>
            </div>
            <div class="banked-body">
              <div class="ring-wrap">
                <svg viewBox="0 0 118 118" style="width:100%;height:100%;transform:rotate(-90deg)">
                  <circle cx="59" cy="59" r="52" fill="none" stroke="var(--bg)" stroke-width="10"></circle>
                  <circle cx="59" cy="59" r="52" fill="none" stroke="var(--accent)" stroke-width="10" stroke-linecap="round" stroke-dasharray="${stats.ringDash}"></circle>
                  <circle cx="${stats.capX}" cy="${stats.capY}" r="5" fill="var(--accent)" opacity="0.3" style="transform-box:fill-box;transform-origin:center;animation:halo 6s ease-out infinite"></circle>
                </svg>
                <div class="ring-center">
                  <div class="ring-life-num">${stats.lifeHours}</div>
                  <div class="ring-life-tag">ALL TIME</div>
                </div>
              </div>
              <div style="min-width:0">
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
                        <span style="width:7px;height:7px;border-radius:50%;background:${o.instColor}"></span>
                        <span style="font-size:13px;font-weight:700">${o.instName}</span>
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
              ${stats.heatMarked.map(
                (c) => html`
                  <div
                    class="heat-cell"
                    style="background:${c.bg};opacity:${c.op};outline:${c.ring};outline-offset:1px;animation:${c.anim};cursor:${c.cursor}"
                    @mouseenter=${() => { if (c.milestoneId) this.activeMsId = c.milestoneId; }}
                    @mouseleave=${() => { if (this.activeMsId === c.milestoneId) this.activeMsId = null; }}
                    @click=${() => { if (c.milestoneId) this.activeMsId = this.activeMsId === c.milestoneId ? null : c.milestoneId; }}
                  >
                    ${c.mark ? html`<svg viewBox="0 0 24 24" fill="none" stroke="${c.markStroke}" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="${c.icon}"></path></svg>` : ''}
                  </div>
                `
              )}
            </div>
            <div class="heat-months-row">${stats.heatMonths.map((m) => html`<div>${m.label}</div>`)}</div>

            <div class="ms-preview-banner">
              <div class="ms-badge-icon" style="background:${msCaptionBg}">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="${msCaptionStroke}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="${msCaptionIcon}"></path></svg>
              </div>
              <div style="min-width:0">
                <div style="font-size:14px;font-weight:700">${msCaptionTitle}</div>
                <div style="font-size:12px;color:var(--muted);margin-top:3px">${msCaptionDetail}</div>
              </div>
            </div>

            <div class="card-header" style="margin-top:16px;margin-bottom:6px">
              <span class="card-label">Milestones</span>
              <span class="card-sub-label">${stats.msCount}</span>
            </div>
            <div class="ms-legend-wrap">
              ${stats.milestones.map(
                (m) => html`
                  <div
                    class="ms-legend-pill"
                    style="border:1px solid ${this.activeMsId === m.id ? 'var(--ink)' : m.done ? m.accent + '66' : 'var(--line)'};background:${this.activeMsId === m.id ? 'var(--raised)' : 'transparent'}"
                    @mouseenter=${() => (this.activeMsId = m.id)}
                    @mouseleave=${() => { if (this.activeMsId === m.id) this.activeMsId = null; }}
                    @click=${() => (this.activeMsId = this.activeMsId === m.id ? null : m.id)}
                  >
                    <span class="ms-legend-icon-mini" style="background:${m.done ? m.accent : 'var(--raised)'}">
                      <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="${m.done ? 'var(--bg)' : 'var(--muted)'}" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><path d="${m.icon}"></path></svg>
                    </span>
                    <span style="font-size:11px;font-weight:700;color:${m.done ? 'var(--ink)' : 'var(--muted)'}">${m.title}</span>
                    <span style="font-size:10px;color:var(--muted)">${m.done ? m.dateLabel || 'cleared' : m.pctLabel}</span>
                  </div>
                `
              )}
            </div>
          </div>

          <!-- 6. Week vs median -->
          <div class="card card-half">
            <div class="card-header">
              <span class="card-label">This week vs your median</span>
              <span style="font-size:11.5px;font-weight:700;color:${stats.paceColor}">${stats.paceDelta}</span>
            </div>
            <div class="pace-head">
              <div class="pace-num">${stats.weekTotal}</div>
              <div style="font-size:13px;color:var(--muted)">of ${stats.goalLabel} goal</div>
            </div>
            <svg viewBox="0 0 320 90" class="pace-svg-box" preserveAspectRatio="none">
              <polyline points="${stats.medianPts}" fill="none" stroke="var(--line)" stroke-width="2" stroke-dasharray="5 5" stroke-linecap="round"></polyline>
              <polyline points="${stats.actualPts}" fill="none" stroke="var(--accent)" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"></polyline>
            </svg>
          </div>

          <!-- 7. Day-of-week averages -->
          <div class="card card-half">
            <div class="card-header">
              <span class="card-label">Your week, averaged</span>
              <span class="card-sub-label">fingerprint</span>
            </div>
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
                  <div>
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
            <div class="caption-text">${stats.freshLine}</div>
          </div>

          <!-- 9. Session-length histogram -->
          <div class="card card-half">
            <div class="card-header">
              <span class="card-label">How long you actually play</span>
              <span class="card-sub-label">distribution</span>
            </div>
            <div class="dow-bars-box">
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
                    <span style="width:7px;height:7px;border-radius:50%;background:${r.color};flex-shrink:0"></span>
                    <div style="flex:1;min-width:0">
                      <div style="display:flex;justify-content:space-between;gap:8px">
                        <span style="font-size:12.5px;font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${r.name}</span>
                        <span style="font-size:11.5px;color:var(--muted);flex-shrink:0">${r.minsLabel} · ${r.shareLabel}</span>
                      </div>
                      <div class="kit-share-progress-track">
                        <span class="kit-share-progress-fill" style="width:${r.sharePct}%;background:${r.color}"></span>
                      </div>
                    </div>
                    <svg width="60" height="24" viewBox="0 0 100 34" preserveAspectRatio="none" style="flex-shrink:0;overflow:visible">
                      <polyline points="${r.spark}" fill="none" stroke="${r.color}" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.85"></polyline>
                    </svg>
                  </div>
                `
              )}
            </div>
          </div>

          <!-- 11. Hour-of-day rhythm -->
          <div class="card card-full">
            <div class="card-header">
              <span class="card-label">Your day, by the hour</span>
              <div style="font-size:12px;color:var(--muted)">
                <strong style="color:var(--ink)">${stats.windowShare}</strong> of every minute falls between ${stats.windowLabel}
              </div>
            </div>
            <div class="rhythm-wrap">
              <svg viewBox="0 0 720 124" preserveAspectRatio="none" style="width:100%;height:124px;display:block">
                <defs>
                  <linearGradient id="rhythmFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="var(--chart)" stop-opacity="0.34"></stop>
                    <stop offset="100%" stop-color="var(--chart)" stop-opacity="0.03"></stop>
                  </linearGradient>
                </defs>
                <rect x="${stats.bandX}" y="0" width="${stats.bandW}" height="124" fill="var(--accent)" opacity="0.14" rx="7"></rect>
                <path d="${stats.dayArea}" fill="url(#rhythmFill)"></path>
                <path d="${stats.dayCurve}" fill="none" stroke="var(--chart)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
              <div class="rhythm-now-dot" style="left:${stats.nowLeft};top:${stats.nowTop};position:absolute"></div>
            </div>
            <div class="rhythm-ticks">${stats.dayTicks.map((t) => html`<div>${t.label}</div>`)}</div>
          </div>

          <!-- 12. Notes themes -->
          <div class="card card-full">
            <div class="card-header">
              <span class="card-label">From your notes · what you've been working on</span>
              <span class="card-sub-label">recent tags</span>
            </div>
            <div class="themes-cloud">
              ${stats.themes.length > 0
                ? stats.themes.map(
                    (t) => html`
                      <div class="theme-pill">
                        <span style="width:6px;height:6px;border-radius:50%;background:${t.color}"></span>
                        <span style="font-size:${t.size};font-weight:700">${t.name}</span>
                        <span style="font-size:11px;color:var(--muted)">${t.mins} · ${t.ago}</span>
                      </div>
                    `
                  )
                : html`<div style="font-size:13px;color:var(--muted)">Add notes when you save a session and the recurring ones collect here.</div>`}
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
