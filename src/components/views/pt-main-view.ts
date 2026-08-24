import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { Instrument, Session, ActiveSession, RangeScope } from '../../types';
import { commonStyles } from '../../styles/shared-styles';
import {
  calculateBenchStats,
  BenchDataCalculations,
  BENCH_ICONS,
} from '../../utils/bench-metrics';

@customElement('pt-main-view')
export class PtMainView extends LitElement {
  @property({ type: Array }) instruments: Instrument[] = [];
  @property({ type: Array }) sessions: Session[] = [];
  @property({ type: Object }) activeSession: ActiveSession | null = null;
  @property({ type: Number }) now: number = Date.now();

  @state() private range: RangeScope = 'month';
  @state() private mutedInstruments: Record<string, boolean> = {};
  @state() private activeMsId: string | null = null;
  @state() private quickLogOpen: boolean = false;
  @state() private recentEndedSession: { id: string; name: string; mins: number; notes: string } | null = null;
  @state() private toastTimeout: any = null;

  static styles = [
    commonStyles,
    css`
      :host {
        display: block;
        animation: fadeOnly 220ms ease-out both;
        padding-bottom: 40px;
        color: #23241F;
        font-family: 'DM Sans', system-ui, sans-serif;
      }

      .bench-wrap {
        display: flex;
        flex-direction: column;
        gap: 20px;
        width: 100%;
        max-width: 1000px;
        margin: 0 auto;
      }


      /* Live Start Bar */
      .live-start-bar {
        background: #FAFAF7;
        border: 1px solid #E7E6DF;
        border-radius: 22px;
        padding: 14px 18px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        box-shadow: 0 4px 20px rgba(35, 36, 31, 0.04);
        transition: background-color 240ms ease, border-color 240ms ease;
      }

      .live-start-bar.running {
        background: #F1ECE6;
        border-color: #D6D0C5;
      }

      .start-chips-group {
        display: flex;
        align-items: center;
        gap: 8px;
        flex-wrap: wrap;
        min-width: 0;
      }

      .inst-chip {
        background: #EFEEE9;
        border: 1px solid #E7E6DF;
        border-radius: 12px;
        padding: 8px 14px;
        display: flex;
        align-items: center;
        gap: 8px;
        cursor: pointer;
        font-size: 13px;
        font-weight: 700;
        color: #23241F;
        transition: background-color 150ms ease, transform 150ms ease;
        user-select: none;
      }

      .inst-chip:hover {
        background: #E5E4DC;
        transform: translateY(-1px);
      }

      .inst-chip:active {
        transform: scale(0.97);
      }

      .inst-dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        flex-shrink: 0;
      }

      .btn-start-primary {
        background: #4F6353;
        color: #F7F6F1;
        border-radius: 13px;
        padding: 11px 20px;
        font-size: 13.5px;
        font-weight: 700;
        cursor: pointer;
        white-space: nowrap;
        flex-shrink: 0;
        border: none;
        display: inline-flex;
        align-items: center;
        gap: 6px;
        transition: background 180ms ease, transform 160ms ease;
      }

      .btn-start-primary:hover {
        background: #435447;
        transform: translateY(-1px);
      }

      .btn-start-primary:active {
        transform: scale(0.97);
      }

      /* Running Active State */
      .running-indicator-wrap {
        display: flex;
        align-items: center;
        gap: 14px;
        min-width: 0;
      }

      .running-pulse-dot {
        width: 9px;
        height: 9px;
        border-radius: 50%;
        background: #6B7F6E;
        animation: softPulse 2.2s ease-in-out infinite;
        flex-shrink: 0;
      }

      .running-inst-name {
        font-size: 15px;
        font-weight: 700;
        color: #23241F;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .running-timer-num {
        font-size: 26px;
        font-weight: 700;
        font-variant-numeric: tabular-nums;
        letter-spacing: -0.02em;
        color: #23241F;
      }

      .running-actions {
        display: flex;
        align-items: center;
        gap: 12px;
      }

      .btn-end-session {
        background: #4F6353;
        color: #F7F6F1;
        border-radius: 13px;
        padding: 11px 22px;
        font-size: 13.5px;
        font-weight: 700;
        border: none;
        cursor: pointer;
        transition: background 180ms ease, transform 160ms ease;
      }

      .btn-end-session:hover {
        background: #435447;
        transform: translateY(-1px);
      }

      .btn-discard-link {
        font-size: 12.5px;
        color: #767668;
        background: transparent;
        border: none;
        cursor: pointer;
        padding: 6px 8px;
        text-decoration: underline;
      }

      .btn-discard-link:hover {
        color: #B4543C;
      }

      /* Live Start Actions Group */
      .live-start-actions {
        display: flex;
        align-items: center;
        gap: 10px;
      }

      /* Quick Past Logging Drawer / Row */
      .quick-log-toggle-btn {
        background: transparent;
        border: 1px dashed #C9C8BF;
        border-radius: 12px;
        padding: 8px 12px;
        font-size: 12px;
        font-weight: 600;
        color: #767668;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 6px;
        transition: all 160ms ease;
      }

      .quick-log-toggle-btn:hover {
        border-color: #767668;
        color: #23241F;
        background: #F4F3ED;
      }

      .quick-log-panel {
        background: #FAFAF7;
        border: 1px solid #E7E6DF;
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
      }

      .quick-log-title {
        font-size: 12px;
        font-weight: 700;
        letter-spacing: 0.08em;
        color: #767668;
        text-transform: uppercase;
      }

      .quick-log-rows {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }

      .quick-log-row {
        display: flex;
        align-items: center;
        gap: 12px;
        flex-wrap: wrap;
      }

      .quick-log-row-label {
        font-size: 12.5px;
        font-weight: 700;
        color: #4A4945;
        min-width: 90px;
      }

      .quick-chip {
        background: #EFEEE9;
        border-radius: 9px;
        padding: 6px 12px;
        font-size: 12px;
        font-weight: 700;
        color: #23241F;
        cursor: pointer;
        transition: background 140ms ease, transform 140ms ease;
        border: 1px solid #E7E6DF;
      }

      .quick-chip:hover {
        background: #4F6353;
        color: #F7F6F1;
        border-color: #4F6353;
        transform: translateY(-1px);
      }

      /* Post-Session Inline Toast */
      .post-session-toast {
        background: #23241F;
        color: #F2F1EC;
        border-radius: 16px;
        padding: 14px 18px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 14px;
        animation: riseIn 260ms cubic-bezier(0.16, 1, 0.3, 1) both;
        box-shadow: 0 10px 30px rgba(35, 36, 31, 0.2);
        flex-wrap: wrap;
      }

      .toast-msg {
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 13.5px;
      }

      .toast-msg strong {
        color: #9FAF95;
      }

      .toast-notes-form {
        display: flex;
        align-items: center;
        gap: 8px;
        flex: 1;
        min-width: 200px;
        max-width: 400px;
      }

      .toast-input {
        flex: 1;
        background: rgba(255, 255, 255, 0.12);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 10px;
        padding: 8px 12px;
        font-size: 12.5px;
        color: #F2F1EC;
        outline: none;
      }

      .toast-input::placeholder {
        color: rgba(255, 255, 255, 0.45);
      }

      .toast-input:focus {
        border-color: #9FAF95;
      }

      .btn-toast-save {
        background: #9FAF95;
        color: #23241F;
        border: none;
        border-radius: 9px;
        padding: 8px 14px;
        font-size: 12.5px;
        font-weight: 700;
        cursor: pointer;
      }

      .btn-toast-close {
        background: transparent;
        border: none;
        color: rgba(255, 255, 255, 0.6);
        cursor: pointer;
        font-size: 16px;
        padding: 4px;
      }

      .btn-toast-close:hover {
        color: #F2F1EC;
      }

      /* Range Filter Header */
      .range-filter-bar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        flex-wrap: wrap;
        padding: 4px 2px;
      }

      .range-tabs {
        display: flex;
        background: #E4E3DD;
        border-radius: 14px;
        padding: 4px;
        gap: 4px;
      }

      .range-tab-btn {
        padding: 8px 18px;
        border-radius: 10px;
        font-size: 12px;
        font-weight: 700;
        cursor: pointer;
        border: none;
        background: transparent;
        color: #767668;
        transition: background-color 180ms ease-out, color 180ms ease-out;
      }

      .range-tab-btn.active {
        background: #FAFAF7;
        color: #23241F;
        box-shadow: 0 2px 6px rgba(35, 36, 31, 0.05);
      }

      .scope-summary-label {
        font-size: 12px;
        color: #767668;
      }

      .scope-summary-label strong {
        font-weight: 700;
        color: #23241F;
      }

      /* Card Grid */
      .bench-cards-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 16px;
      }

      @media (max-width: 768px) {
        .bench-cards-grid {
          grid-template-columns: 1fr;
        }
      }

      .card-span-1 { grid-column: span 1; }
      .card-span-2 { grid-column: span 2; }
      .card-span-4 { grid-column: span 4; }

      @media (max-width: 768px) {
        .card-span-1, .card-span-2, .card-span-4 {
          grid-column: span 1 !important;
        }
      }

      .bench-card {
        background: #FAFAF7;
        border-radius: 22px;
        padding: 22px;
        display: flex;
        flex-direction: column;
        border: 1px solid #EBEAE3;
        box-shadow: 0 4px 16px rgba(35, 36, 31, 0.03);
      }

      .bench-card-header {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        gap: 10px;
        margin-bottom: 12px;
      }

      .card-label {
        font-size: 9.5px;
        letter-spacing: 0.13em;
        color: #A3A297;
        font-weight: 700;
        text-transform: uppercase;
      }

      .card-sub-label {
        font-size: 11px;
        color: #A3A297;
      }

      /* Day Streak Card */
      .streak-val-row {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        gap: 16px;
        margin-top: 4px;
      }

      .streak-huge-num {
        font-size: 62px;
        font-weight: 700;
        letter-spacing: -0.05em;
        line-height: 0.9;
        color: #23241F;
      }

      .streak-quip-text {
        font-family: 'Instrument Serif', serif;
        font-style: italic;
        font-size: 17px;
        color: #767668;
        text-align: right;
        max-width: 18ch;
        line-height: 1.25;
      }

      .bars-14-row {
        display: flex;
        gap: 5px;
        margin-top: 18px;
      }

      .bar-14-col {
        flex: 1;
        height: 32px;
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

      /* Banked Hours Ring Card */
      .banked-card-body {
        display: flex;
        align-items: center;
        gap: 22px;
        margin-top: 4px;
      }

      .ring-svg-wrap {
        position: relative;
        width: 118px;
        height: 118px;
        flex-shrink: 0;
      }

      .ring-center-content {
        position: absolute;
        inset: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1px;
      }

      .ring-life-num {
        font-size: 27px;
        font-weight: 700;
        letter-spacing: -0.03em;
        line-height: 1;
      }

      .ring-life-tag {
        font-size: 9px;
        letter-spacing: 0.12em;
        color: #A3A297;
        font-weight: 700;
      }

      .banked-info-title {
        font-size: 19px;
        font-weight: 700;
        letter-spacing: -0.02em;
        line-height: 1.25;
        margin-top: 4px;
      }

      .banked-info-sub {
        font-size: 12.5px;
        color: #767668;
        margin-top: 6px;
        line-height: 1.45;
      }

      /* One Session Away */
      .one-away-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 14px;
        margin-top: 6px;
      }

      @media (max-width: 640px) {
        .one-away-grid {
          grid-template-columns: 1fr;
        }
      }

      .one-away-item {
        border: 1px solid #E7E6DF;
        border-radius: 16px;
        padding: 16px;
        cursor: pointer;
        transition: background-color 160ms ease-out, border-color 160ms ease-out, transform 160ms ease;
      }

      .one-away-item:hover {
        background: #F4F3ED;
        border-color: #D9D8CF;
        transform: translateY(-2px);
      }

      .one-away-top {
        display: flex;
        align-items: baseline;
        gap: 9px;
      }

      .one-away-big {
        font-size: 28px;
        font-weight: 700;
        letter-spacing: -0.04em;
        line-height: 1;
        color: #23241F;
      }

      .one-away-inst {
        display: flex;
        align-items: center;
        gap: 6px;
        min-width: 0;
      }

      .one-away-desc {
        font-size: 13px;
        color: #5A594F;
        margin-top: 8px;
        line-height: 1.45;
      }

      /* Drift Card (Play This Next) */
      .drift-card {
        background: #4F6353;
        color: #F2F1EC;
        border-radius: 22px;
        padding: 22px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 18px;
        position: relative;
        overflow: hidden;
      }

      .drift-top-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
      }

      .drift-tag {
        font-size: 9.5px;
        letter-spacing: 0.13em;
        font-weight: 700;
        opacity: 0.7;
      }

      .drift-num-row {
        display: flex;
        align-items: flex-end;
        gap: 10px;
        line-height: 0.84;
      }

      .drift-big-num {
        font-size: 72px;
        font-weight: 700;
        letter-spacing: -0.055em;
      }

      .drift-unit-label {
        font-size: 13px;
        font-weight: 700;
        opacity: 0.72;
        padding-bottom: 6px;
      }

      .drift-ticks-row {
        display: flex;
        align-items: flex-end;
        gap: 4px;
        height: 30px;
      }

      .drift-tick {
        flex: 1;
        border-radius: 3px;
      }

      .drift-inst-name {
        font-size: 24px;
        font-weight: 700;
        letter-spacing: -0.03em;
        line-height: 1.1;
      }

      .drift-ago-sub {
        font-size: 12.5px;
        opacity: 0.7;
        margin-top: 4px;
      }

      .btn-drift-action {
        background: #F2F1EC;
        color: #23241F;
        border-radius: 12px;
        height: 44px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        font-size: 13.5px;
        font-weight: 700;
        cursor: pointer;
        border: none;
        transition: background 180ms ease, transform 180ms ease;
      }

      .btn-drift-action:hover {
        background: #FFFFFF;
        transform: translateY(-1px);
      }

      /* Stacked Bar Chart */
      .stacked-chart-area {
        display: flex;
        align-items: flex-end;
        gap: 6px;
        height: 140px;
        margin-top: 10px;
      }

      .stacked-bar-col {
        flex: 1;
        min-width: 0;
        height: 100%;
        display: flex;
        flex-direction: column-reverse;
        justify-content: flex-start;
        gap: 2px;
      }

      .stacked-segment {
        display: block;
        border-radius: 4px;
        transition: height 240ms ease;
      }

      .stacked-labels-row {
        display: flex;
        gap: 6px;
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

      /* Kit Share & Sparks */
      .kit-share-list {
        display: flex;
        flex-direction: column;
        margin-top: 6px;
      }

      .kit-share-row {
        display: flex;
        align-items: center;
        gap: 11px;
        padding: 10px 0;
        cursor: pointer;
        border-top: 1px solid #EDECE6;
        transition: opacity 180ms ease-out;
      }

      .kit-share-row:first-child {
        border-top: none;
      }

      .kit-share-progress-track {
        height: 4px;
        border-radius: 3px;
        background: #EDECE6;
        margin-top: 5px;
        overflow: hidden;
      }

      .kit-share-progress-fill {
        display: block;
        height: 100%;
        border-radius: 3px;
        transition: width 300ms cubic-bezier(0.16, 1, 0.3, 1);
      }

      /* Heatmap & Milestones */
      .heatmap-grid {
        display: grid;
        grid-template-rows: repeat(7, 1fr);
        grid-auto-flow: column;
        gap: 3px;
        margin-top: 10px;
        overflow-x: auto;
        padding-bottom: 4px;
      }

      .heat-cell {
        aspect-ratio: 1;
        min-width: 14px;
        min-height: 14px;
        border-radius: 3px;
        position: relative;
        transition: transform 120ms ease;
      }

      .heat-cell svg {
        position: absolute;
        inset: 12%;
        width: 76%;
        height: 76%;
      }

      .heat-months-row {
        display: flex;
        justify-content: space-between;
        margin-top: 8px;
        font-size: 10px;
        color: #A3A297;
        letter-spacing: 0.06em;
      }

      .ms-preview-banner {
        display: flex;
        align-items: center;
        gap: 12px;
        margin-top: 16px;
        border-top: 1px solid #EDECE6;
        padding-top: 14px;
      }

      .ms-badge-icon-box {
        width: 36px;
        height: 36px;
        border-radius: 11px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }

      .ms-legend-wrap {
        display: flex;
        flex-wrap: wrap;
        gap: 7px;
        margin-top: 12px;
      }

      .ms-legend-pill {
        display: inline-flex;
        align-items: center;
        gap: 7px;
        border-radius: 999px;
        padding: 4px 11px 4px 5px;
        cursor: pointer;
        font-size: 11px;
        font-weight: 700;
        transition: transform 140ms ease, background 140ms ease;
        user-select: none;
      }

      .ms-legend-pill:hover {
        transform: translateY(-1px);
      }

      .ms-legend-icon-mini {
        width: 20px;
        height: 20px;
        border-radius: 6px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }

      /* Pace & Weekday Cards */
      .pace-svg-box {
        width: 100%;
        height: 80px;
        margin-top: 8px;
        overflow: visible;
      }

      .dow-bars-box {
        display: flex;
        align-items: flex-end;
        gap: 7px;
        height: 86px;
        margin-top: 10px;
      }

      .dow-col {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 6px;
        height: 100%;
        justify-content: flex-end;
      }

      .dow-bar-fill {
        width: 100%;
        border-radius: 4px;
        transition: height 240ms ease;
      }

      /* Records Grid */
      .records-2x2-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 14px 12px;
        margin-top: 10px;
      }

      .record-k-tag {
        font-size: 8.5px;
        letter-spacing: 0.12em;
        color: #A3A297;
        font-weight: 700;
        text-transform: uppercase;
        display: flex;
        align-items: center;
        gap: 5px;
      }

      .record-pill-new {
        font-size: 7.5px;
        letter-spacing: 0.1em;
        font-weight: 700;
        color: #B4543C;
        background: #F7E9E4;
        border-radius: 4px;
        padding: 2px 5px;
      }

      .record-v-val {
        font-size: 20px;
        font-weight: 700;
        letter-spacing: -0.03em;
        margin-top: 4px;
        color: #23241F;
      }

      .record-sub-text {
        font-size: 11px;
        color: #767668;
        margin-top: 2px;
      }

      .records-fresh-footer {
        display: flex;
        gap: 9px;
        margin-top: 14px;
        border-top: 1px solid #EDECE6;
        padding-top: 12px;
      }

      .records-accent-bar {
        width: 3px;
        border-radius: 2px;
        background: #B4543C;
        flex-shrink: 0;
      }

      /* 24h Rhythm Curve */
      .rhythm-svg-wrap {
        position: relative;
        margin-top: 12px;
        width: 100%;
      }

      .rhythm-now-dot {
        position: absolute;
        width: 8px;
        height: 8px;
        margin: -4px 0 0 -4px;
        border-radius: 50%;
        background: #4F6353;
        animation: breathe 5.4s ease-in-out infinite;
      }

      .rhythm-now-halo {
        position: absolute;
        width: 8px;
        height: 8px;
        margin: -4px 0 0 -4px;
        border-radius: 50%;
        background: #4F6353;
        opacity: 0.3;
        animation: halo 5.4s ease-out infinite;
      }

      /* Notes Themes */
      .themes-cloud {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        margin-top: 10px;
        align-items: baseline;
      }

      .theme-pill {
        display: flex;
        align-items: center;
        gap: 7px;
        border: 1px solid #E4E3DC;
        border-radius: 999px;
        padding: 6px 13px;
        background: #FAFAF7;
      }

      .theme-dot {
        width: 7px;
        height: 7px;
        border-radius: 50%;
        flex-shrink: 0;
      }

      /* Mobile Phone Mode (< 640px) */
      @media (max-width: 640px) {
        .bench-wrap {
          gap: 12px;
          min-width: 0;
          max-width: 100%;
        }

        .live-start-bar {
          flex-direction: column;
          align-items: stretch;
          padding: 14px 14px 12px;
          border-radius: 18px;
          gap: 10px;
          min-width: 0;
          max-width: 100%;
        }

        .live-start-bar.running {
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
        }

        .live-start-actions {
          flex-direction: column;
          align-items: stretch;
          width: 100%;
          gap: 8px;
          order: -1;
        }

        .btn-start-primary {
          width: 100%;
          height: 48px;
          justify-content: center;
          font-size: 14.5px;
        }

        .quick-log-toggle-btn {
          width: 100%;
          justify-content: center;
          height: 40px;
        }

        .start-chips-group {
          justify-content: center;
          gap: 6px;
          width: 100%;
        }

        .inst-chip {
          padding: 7px 11px;
          font-size: 11.5px;
          border-radius: 10px;
        }

        .bench-cards-grid {
          grid-template-columns: 1fr;
          gap: 12px;
          min-width: 0;
          max-width: 100%;
        }

        .bench-card {
          padding: 18px 16px;
          border-radius: 18px;
          min-width: 0;
          max-width: 100%;
        }

        .streak-huge-num {
          font-size: 46px;
        }

        .banked-card-body {
          gap: 16px;
        }

        .ring-svg-wrap {
          width: 92px !important;
          height: 92px !important;
        }

        .ring-life-num {
          font-size: 22px !important;
        }

        .banked-info-title {
          font-size: 17px;
        }

        .one-away-grid {
          grid-template-columns: 1fr;
          gap: 10px;
        }

        .one-away-item {
          padding: 12px 14px;
        }

        .one-away-big {
          font-size: 20px;
          min-width: 44px;
        }

        .stacked-chart-area {
          height: 118px;
        }

        .drift-card {
          padding: 18px 16px;
          border-radius: 18px;
        }

        .drift-big-num {
          font-size: 64px;
        }

        .pace-svg-box {
          height: 70px;
        }

        .dow-bars-box {
          height: 70px;
        }

        .rhythm-svg-wrap svg {
          height: 86px !important;
        }
      }
    `,
  ];

  private handleStart(instrumentId: string) {
    this.dispatchEvent(
      new CustomEvent('start-session', {
        detail: { instrumentId },
        bubbles: true,
        composed: true,
      })
    );
  }

  private handleEnd() {
    if (!this.activeSession) return;
    const inst = this.instruments.find((i) => i.id === this.activeSession?.instrumentId);
    const elapsedMinutes = Math.max(
      1,
      Math.round((Date.now() - this.activeSession.startedAt) / 60000)
    );

    this.dispatchEvent(
      new CustomEvent('end-session', {
        bubbles: true,
        composed: true,
      })
    );

    // Show quick notes toast for 12 seconds
    this.recentEndedSession = {
      id: 'ended-' + Date.now(),
      name: inst?.name || 'Session',
      mins: elapsedMinutes,
      notes: '',
    };

    if (this.toastTimeout) clearTimeout(this.toastTimeout);
    this.toastTimeout = setTimeout(() => {
      this.recentEndedSession = null;
      this.requestUpdate();
    }, 12000);
  }

  private handleDiscard() {
    this.dispatchEvent(
      new CustomEvent('discard-session', {
        bubbles: true,
        composed: true,
      })
    );
  }

  private handleSaveToastNotes(e: Event) {
    e.preventDefault();
    const input = this.shadowRoot?.querySelector<HTMLInputElement>('.toast-input');
    if (input && input.value.trim() && this.sessions.length > 0) {
      const lastSession = this.sessions[0];
      this.dispatchEvent(
        new CustomEvent('edit-session', {
          detail: {
            session: {
              ...lastSession,
              notes: input.value.trim(),
            },
          },
          bubbles: true,
          composed: true,
        })
      );
    }
    this.recentEndedSession = null;
  }

  private handleQuickPastLog(instId: string, duration: number, daysAgo: number) {
    this.dispatchEvent(
      new CustomEvent('quick-log-session', {
        detail: { instrumentId: instId, duration, daysAgo },
        bubbles: true,
        composed: true,
      })
    );
  }

  private toggleMute(instId: string) {
    this.mutedInstruments = {
      ...this.mutedInstruments,
      [instId]: !this.mutedInstruments[instId],
    };
  }

  render() {
    const stats: BenchDataCalculations = calculateBenchStats(this.sessions, this.instruments, {
      range: this.range,
      mutedInstruments: this.mutedInstruments,
      now: new Date(this.now),
    });

    const isRunning = !!this.activeSession;
    const activeInst = isRunning
      ? this.instruments.find((i) => i.id === this.activeSession?.instrumentId)
      : null;

    const elapsedSeconds = isRunning
      ? Math.max(0, Math.floor((this.now - (this.activeSession?.startedAt || 0)) / 1000))
      : 0;
    const mm = String(Math.floor(elapsedSeconds / 60)).padStart(2, '0');
    const ss = String(elapsedSeconds % 60).padStart(2, '0');
    const elapsedDisplay = `${mm}:${ss}`;

    const activeMs = stats.milestones.find((m) => m.id === this.activeMsId);
    const msCaptionTitle = activeMs ? activeMs.title : `${stats.milestones.filter(m => m.done && m.when > 0).length} milestones stamped on the calendar above`;
    const msCaptionDetail = activeMs
      ? activeMs.done
        ? `${activeMs.detail}${activeMs.dateLabel ? ` · ${activeMs.dateLabel}` : ''}`
        : `${activeMs.detail} · ${activeMs.pctLabel} of the way`
      : 'Hover or tap any marked calendar day or milestone pill below to view details.';
    const msCaptionIcon = activeMs ? activeMs.icon : BENCH_ICONS.star;
    const msCaptionBg = activeMs ? (activeMs.done ? activeMs.accent : '#E7E6DF') : '#E7E6DF';
    const msCaptionStroke = activeMs ? (activeMs.done ? '#FAFAF7' : '#B0AFA4') : '#B0AFA4';

    return html`
      <div class="bench-wrap">

        <!-- Live Start Bar -->
        <div class="live-start-bar ${isRunning ? 'running' : ''}">
          ${!isRunning
            ? html`
                <div class="start-chips-group">
                  ${this.instruments
                    .filter((i) => !i.archived)
                    .map(
                      (inst) => html`
                        <div
                          class="inst-chip"
                          @click=${() => this.handleStart(inst.id)}
                          title="Start ${inst.name} practice session"
                        >
                          <span class="inst-dot" style="background: ${inst.color};"></span>
                          <span>${inst.name}</span>
                        </div>
                      `
                    )}
                </div>

                <div class="live-start-actions">
                  <button
                    class="btn-start-primary"
                    @click=${() => this.handleStart(stats.pick.id)}
                  >
                    <span>Start</span>
                    <span>${stats.pick.name}</span>
                  </button>

                  <button
                    class="quick-log-toggle-btn"
                    @click=${() => (this.quickLogOpen = !this.quickLogOpen)}
                    title="Quick log past practice"
                  >
                    <span>${this.quickLogOpen ? '✕ Close log' : '+ Quick past log'}</span>
                  </button>
                </div>
              `
            : html`
                <div class="running-indicator-wrap">
                  <span class="running-pulse-dot"></span>
                  <div class="running-inst-name">${activeInst?.name || 'Instrument'}</div>
                  <div class="running-timer-num">${elapsedDisplay}</div>
                </div>

                <div class="running-actions">
                  <button class="btn-discard-link" @click=${this.handleDiscard}>
                    Discard
                  </button>
                  <button class="btn-end-session" @click=${this.handleEnd}>
                    End session
                  </button>
                </div>
              `}
        </div>

        <!-- Quick Past Logging Drawer -->
        ${this.quickLogOpen
          ? html`
              <div class="quick-log-panel">
                <div class="quick-log-header">
                  <span class="quick-log-title">1-Tap Past Practice Log for ${stats.pick.name}</span>
                  <button
                    class="btn-discard-link"
                    @click=${() => {
                      this.quickLogOpen = false;
                      this.dispatchEvent(new CustomEvent('open-manual-log', { bubbles: true, composed: true }));
                    }}
                  >
                    Custom date & notes modal →
                  </button>
                </div>

                <div class="quick-log-rows">
                  <div class="quick-log-row">
                    <span class="quick-log-row-label">Yesterday:</span>
                    ${[15, 20, 30, 45, 60].map(
                      (m) => html`
                        <span
                          class="quick-chip"
                          @click=${() => {
                            this.handleQuickPastLog(stats.pick.id, m, 1);
                            this.quickLogOpen = false;
                          }}
                        >
                          ${m}m
                        </span>
                      `
                    )}
                  </div>
                  <div class="quick-log-row">
                    <span class="quick-log-row-label">2 days ago:</span>
                    ${[15, 20, 30, 45, 60].map(
                      (m) => html`
                        <span
                          class="quick-chip"
                          @click=${() => {
                            this.handleQuickPastLog(stats.pick.id, m, 2);
                            this.quickLogOpen = false;
                          }}
                        >
                          ${m}m
                        </span>
                      `
                    )}
                  </div>
                </div>
              </div>
            `
          : ''}

        <!-- Post-Session Inline Toast -->
        ${this.recentEndedSession
          ? html`
              <div class="post-session-toast">
                <div class="toast-msg">
                  <span>✓</span>
                  <span>Session logged: <strong>${this.recentEndedSession.name}</strong> (${this.recentEndedSession.mins}m)</span>
                </div>
                <form class="toast-notes-form" @submit=${this.handleSaveToastNotes}>
                  <input
                    type="text"
                    class="toast-input"
                    placeholder="Add practice notes or tag (e.g. scales, sweep picking)..."
                    autofocus
                  />
                  <button type="submit" class="btn-toast-save">Save</button>
                  <button
                    type="button"
                    class="btn-toast-close"
                    @click=${() => (this.recentEndedSession = null)}
                  >
                    ✕
                  </button>
                </form>
              </div>
            `
          : ''}

        <!-- Range Selection Filter Bar -->
        <div class="range-filter-bar">
          <div class="range-tabs">
            ${(['week', 'month', 'quarter', 'year'] as RangeScope[]).map(
              (r) => html`
                <button
                  class="range-tab-btn ${this.range === r ? 'active' : ''}"
                  @click=${() => (this.range = r)}
                >
                  ${r.charAt(0).toUpperCase() + r.slice(1)}
                </button>
              `
            )}
          </div>
          <div class="scope-summary-label">
            ${stats.scopeCaption} · <strong>${stats.scopeTotal}</strong> ·
            <span style="color: ${stats.scopeDeltaColor}; font-weight: 700;">
              ${stats.scopeDelta}
            </span>
          </div>
        </div>

        <!-- 4-Column Card Grid -->
        <div class="bench-cards-grid">
          <!-- 1. Day Streak Card (Span 2) -->
          <div class="bench-card card-span-2">
            <div class="bench-card-header">
              <span class="card-label">Day Streak</span>
              <span class="card-sub-label">best ${stats.bestStreak}d</span>
            </div>
            <div class="streak-val-row">
              <div class="streak-huge-num">${stats.streak}</div>
              <div class="streak-quip-text">${stats.quip}</div>
            </div>
            <div class="bars-14-row">
              ${stats.last14.map(
                (d) => html`
                  <div class="bar-14-col">
                    <div
                      class="bar-14-fill"
                      style="height: ${d.h}%; background: ${d.bg};"
                    ></div>
                    <span style="font-size: 9.5px; color: ${d.labelColor}; font-weight: ${d.isToday ? 700 : 500};">
                      ${d.label}
                    </span>
                  </div>
                `
              )}
            </div>
          </div>

          <!-- 2. Lifetime Banked Hours & Ring (Span 2) -->
          <div class="bench-card card-span-2">
            <div class="bench-card-header">
              <span class="card-label">Every hour you have logged</span>
              <span class="card-sub-label">${stats.nextMile} goal</span>
            </div>
            <div class="banked-card-body">
              <div class="ring-svg-wrap">
                <svg viewBox="0 0 118 118" style="width: 100%; height: 100%; transform: rotate(-90deg);">
                  <circle cx="59" cy="59" r="52" fill="none" stroke="#E4E3DD" stroke-width="8"></circle>
                  <circle
                    cx="59"
                    cy="59"
                    r="52"
                    fill="none"
                    stroke="#6B7F6E"
                    stroke-width="8"
                    stroke-linecap="round"
                    stroke-dasharray="${stats.ringDash}"
                  ></circle>
                  <circle
                    cx="${stats.capX}"
                    cy="${stats.capY}"
                    r="5"
                    fill="#6B7F6E"
                    opacity="0.3"
                    style="transform-box: fill-box; transform-origin: center; animation: halo 6s ease-out infinite;"
                  ></circle>
                </svg>
                <div class="ring-center-content">
                  <div class="ring-life-num">${stats.lifeHours}</div>
                  <div class="ring-life-tag">BANKED</div>
                </div>
              </div>
              <div style="min-width: 0;">
                <div class="banked-info-title">${stats.mileGap} to ${stats.nextMile}</div>
                <div class="banked-info-sub">${stats.lifeSub}</div>
              </div>
            </div>
          </div>

          <!-- 3. One Session Away (Span 4) -->
          <div class="bench-card card-span-4">
            <div class="bench-card-header">
              <span class="card-label">One Session Away</span>
              <span class="card-sub-label">shortest first · tap to start</span>
            </div>
            <div class="one-away-grid">
              ${stats.oneAway.map(
                (o) => html`
                  <div class="one-away-item" @click=${() => this.handleStart(o.instId)}>
                    <div class="one-away-top">
                      <div class="one-away-big">${o.big}</div>
                      <div class="one-away-inst">
                        <span style="width: 7px; height: 7px; border-radius: 50%; background: ${o.instColor}; flex-shrink: 0;"></span>
                        <span style="font-size: 13px; font-weight: 700; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                          ${o.instName}
                        </span>
                      </div>
                    </div>
                    <div class="one-away-desc">${o.text}</div>
                  </div>
                `
              )}
            </div>
          </div>

          <!-- 4. Stacked Range Bar Chart (Span 4) -->
          <div class="bench-card card-span-4">
            <div class="bench-card-header">
              <span class="card-label">${stats.chartTitle}</span>
              <span class="card-sub-label">peak ${stats.peakLabel}</span>
            </div>
            <div class="stacked-chart-area">
              ${stats.buckets.map(
                (b) => html`
                  <div class="stacked-bar-col">
                    ${b.segments.map(
                      (seg) => html`
                        <span
                          class="stacked-segment"
                          style="height: ${seg.h}%; background: ${seg.color};"
                        ></span>
                      `
                    )}
                  </div>
                `
              )}
            </div>
            <div class="stacked-labels-row">
              ${stats.buckets.map(
                (b) => html`
                  <span
                    class="stacked-label-item"
                    style="color: ${b.labelColor}; font-weight: ${b.labelWeight};"
                  >
                    ${b.label}
                  </span>
                `
              )}
            </div>
          </div>

          <!-- 5. 26-Week Calendar Heatmap with Milestone Pins (Span 4) -->
          <div class="bench-card card-span-4">
            <div class="bench-card-header">
              <span class="card-label">Every Day on Record · Milestones Marked Where They Landed</span>
              <span class="card-sub-label">${stats.heatSince}</span>
            </div>
            <div class="heatmap-grid">
              ${stats.heatMarked.map(
                (c) => html`
                  <div
                    class="heat-cell"
                    style="background: ${c.bg}; opacity: ${c.op}; outline: ${c.ring}; outline-offset: 1px; animation: ${c.anim}; cursor: ${c.cursor};"
                    @mouseenter=${() => {
                      if (c.milestoneId) this.activeMsId = c.milestoneId;
                    }}
                    @mouseleave=${() => {
                      if (this.activeMsId === c.milestoneId) this.activeMsId = null;
                    }}
                    @click=${() => {
                      if (c.milestoneId) {
                        this.activeMsId = this.activeMsId === c.milestoneId ? null : c.milestoneId;
                      }
                    }}
                  >
                    ${c.mark
                      ? html`
                          <svg viewBox="0 0 24 24" fill="none" stroke="${c.markStroke}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="${c.icon}"></path>
                          </svg>
                        `
                      : ''}
                  </div>
                `
              )}
            </div>
            <div class="heat-months-row">
              ${stats.heatMonths.map((m) => html`<div>${m.label}</div>`)}
            </div>

            <!-- Interactive Milestone Preview Banner -->
            <div class="ms-preview-banner">
              <div class="ms-badge-icon-box" style="background: ${msCaptionBg};">
                <svg viewBox="0 0 24 24" style="width: 20px; height: 20px;" fill="none" stroke="${msCaptionStroke}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="${msCaptionIcon}"></path>
                </svg>
              </div>
              <div style="min-width: 0;">
                <div style="font-size: 14.5px; font-weight: 700; letter-spacing: -0.015em;">
                  ${msCaptionTitle}
                </div>
                <div style="font-size: 12.5px; color: #767668; margin-top: 3px;">
                  ${msCaptionDetail}
                </div>
              </div>
            </div>

            <!-- Milestone Legend Pills -->
            <div class="bench-card-header" style="margin-top: 18px; margin-bottom: 6px;">
              <span class="card-label">Milestones · Greyed Out Means Not Yet</span>
              <span class="card-sub-label">${stats.msCount}</span>
            </div>
            <div class="ms-legend-wrap">
              ${stats.milestones.map(
                (m) => html`
                  <div
                    class="ms-legend-pill"
                    style="border: ${this.activeMsId === m.id ? '1px solid #23241F' : `1px solid ${m.done ? m.accent + '3D' : '#E4E3DC'}`}; background: ${this.activeMsId === m.id ? '#F4F3ED' : 'transparent'};"
                    @mouseenter=${() => (this.activeMsId = m.id)}
                    @mouseleave=${() => {
                      if (this.activeMsId === m.id) this.activeMsId = null;
                    }}
                    @click=${() => {
                      this.activeMsId = this.activeMsId === m.id ? null : m.id;
                    }}
                  >
                    <span class="ms-legend-icon-mini" style="background: ${m.done ? m.accent : '#E7E6DF'};">
                      <svg viewBox="0 0 24 24" style="width: 12px; height: 12px;" fill="none" stroke="${m.done ? '#FAFAF7' : '#B0AFA4'}" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
                        <path d="${m.icon}"></path>
                      </svg>
                    </span>
                    <span style="font-size: 11.5px; color: ${m.done ? '#4A4945' : '#A3A297'};">
                      ${m.title}
                    </span>
                    <span style="font-size: 10px; color: #A3A297;">
                      ${m.done ? m.dateLabel || 'cleared' : m.pctLabel}
                    </span>
                  </div>
                `
              )}
            </div>
          </div>

          <!-- 6. This Week vs Your Median (Span 2) -->
          <div class="bench-card card-span-2">
            <div class="bench-card-header">
              <span class="card-label">This Week vs Your Median</span>
              <span style="font-size: 11.5px; font-weight: 700; color: ${stats.paceColor};">
                ${stats.paceDelta}
              </span>
            </div>
            <div style="display: flex; align-items: baseline; gap: 9px; margin-top: 4px;">
              <div style="font-size: 34px; font-weight: 700; letter-spacing: -0.03em;">
                ${stats.weekTotal}
              </div>
              <div style="font-size: 13px; color: #767668;">of ${stats.goalLabel} goal</div>
            </div>
            <svg viewBox="0 0 320 90" class="pace-svg-box">
              <polyline
                points="${stats.medianPts}"
                fill="none"
                stroke="#C9C8BF"
                stroke-width="2"
                stroke-dasharray="5 5"
                stroke-linecap="round"
              ></polyline>
              <polyline
                points="${stats.actualPts}"
                fill="none"
                stroke="#23241F"
                stroke-width="2.6"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></polyline>
            </svg>
          </div>

          <!-- 7. Your Week, Averaged (Weekday Fingerprint) (Span 2) -->
          <div class="bench-card card-span-2">
            <div class="bench-card-header">
              <span class="card-label">Your Week, Averaged</span>
              <span class="card-sub-label">fingerprint</span>
            </div>
            <div class="dow-bars-box">
              ${stats.dow.map(
                (d) => html`
                  <div class="dow-col">
                    <div style="font-size: 10px; color: #767668;">${d.val}</div>
                    <div class="dow-bar-fill" style="height: ${d.h}%; background: ${d.bg};"></div>
                    <div style="font-size: 11px; font-weight: ${d.strong}; color: #4A4945;">
                      ${d.label}
                    </div>
                  </div>
                `
              )}
            </div>
            <div style="font-size: 12.5px; color: #767668; margin-top: 12px; line-height: 1.45;">
              ${stats.dowBestLabel} is your strongest day. ${stats.dowWorstLabel} is where the hours go missing.
            </div>
          </div>

          <!-- 8. Records Shelf (Span 2) -->
          <div class="bench-card card-span-2">
            <div class="bench-card-header">
              <span class="card-label">Records</span>
              <span class="card-sub-label">${stats.freshCount}</span>
            </div>
            <div class="records-2x2-grid">
              ${stats.records.map(
                (r) => html`
                  <div>
                    <div class="record-k-tag">
                      <span>${r.k}</span>
                      ${r.fresh ? html`<span class="record-pill-new">NEW</span>` : ''}
                    </div>
                    <div class="record-v-val">${r.v}</div>
                    <div class="record-sub-text">${r.sub}</div>
                  </div>
                `
              )}
            </div>
            <div class="records-fresh-footer">
              <span class="records-accent-bar"></span>
              <div style="font-size: 12.5px; color: #5A594F; line-height: 1.5;">
                ${stats.freshLine}
              </div>
            </div>
          </div>

          <!-- 9. How Long You Actually Play (Session Length Histogram) (Span 2) -->
          <div class="bench-card card-span-2">
            <div class="bench-card-header">
              <span class="card-label">How Long You Actually Play</span>
              <span class="card-sub-label">distribution</span>
            </div>
            <div class="dow-bars-box">
              ${stats.hist.map(
                (b) => html`
                  <div class="dow-col">
                    <div style="font-size: 10.5px; color: #767668;">${b.n}</div>
                    <div class="dow-bar-fill" style="height: ${b.h}%; background: ${b.bg};"></div>
                    <div style="font-size: 10.5px; color: #4A4945;">${b.label}</div>
                  </div>
                `
              )}
            </div>
            <div style="font-size: 12.5px; color: #767668; margin-top: 12px; line-height: 1.45;">
              Most sittings land in ${stats.modeLabel}. A longer one is a record waiting.
            </div>
          </div>

          <!-- 10. Play This Next (Drift Card) (Span 2) -->
          <div class="drift-card card-span-2">
            <div class="drift-top-row">
              <span class="drift-tag">PLAY THIS NEXT</span>
              <span style="width: 8px; height: 8px; border-radius: 50%; background: ${stats.drift.color};"></span>
            </div>

            <div class="drift-num-row">
              <div class="drift-big-num">${stats.drift.num}</div>
              <div class="drift-unit-label">${stats.drift.unit}</div>
            </div>

            <div class="drift-ticks-row">
              ${stats.drift.ticks.map(
                (t) => html`
                  <span class="drift-tick" style="height: ${t.h}; background: ${t.bg};"></span>
                `
              )}
            </div>

            <div style="display: flex; flex-direction: column; gap: 14px;">
              <div>
                <div class="drift-inst-name">${stats.drift.name}</div>
                <div class="drift-ago-sub">${stats.drift.ago}</div>
              </div>
              <button class="btn-drift-action" @click=${() => this.handleStart(stats.drift.id)}>
                <span>Pick it up</span>
                <svg viewBox="0 0 24 24" style="width: 15px; height: 15px;" fill="none" stroke="#23241F" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M4.5 12h14M13 6.5l5.5 5.5L13 17.5"></path>
                </svg>
              </button>
            </div>
          </div>

          <!-- 11. Kit Share Breakdown & Interactive Mute (Span 2) -->
          <div class="bench-card card-span-2">
            <div class="bench-card-header">
              <span class="card-label">Kit Share · Tap to Mute One</span>
              <span class="card-sub-label">${this.range}</span>
            </div>
            <div class="kit-share-list">
              ${stats.instRows.map(
                (r) => html`
                  <div
                    class="kit-share-row"
                    style="opacity: ${r.opacity};"
                    @click=${() => this.toggleMute(r.id)}
                    title="${r.isMuted ? 'Unmute' : 'Mute'} ${r.name} in chart"
                  >
                    <span class="inst-dot" style="background: ${r.color};"></span>
                    <div style="flex: 1; min-width: 0;">
                      <div style="display: flex; justify-content: space-between; gap: 8px;">
                        <span style="font-size: 12.5px; font-weight: 700; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                          ${r.name}
                        </span>
                        <span style="font-size: 11.5px; color: #767668; flex-shrink: 0;">
                          ${r.minsLabel} · ${r.shareLabel}
                        </span>
                      </div>
                      <div class="kit-share-progress-track">
                        <span
                          class="kit-share-progress-fill"
                          style="width: ${r.sharePct}%; background: ${r.color};"
                        ></span>
                      </div>
                    </div>
                    <svg width="54" height="22" viewBox="0 0 100 34" preserveAspectRatio="none" style="flex-shrink: 0; overflow: visible;">
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
            </div>
          </div>

          <!-- 12. Your Day, By The Hour (24h Rhythm Curve) (Span 4) -->
          <div class="bench-card card-span-4" style="overflow: hidden;">
            <div class="bench-card-header">
              <span class="card-label">Your Day, By The Hour</span>
              <div style="font-size: 12px; color: #767668;">
                <strong style="color: #23241F;">${stats.windowShare}</strong> of every minute falls between ${stats.windowLabel}
              </div>
            </div>
            <div class="rhythm-svg-wrap">
              <svg viewBox="0 0 720 124" preserveAspectRatio="none" style="width: 100%; height: 124px; display: block;">
                <defs>
                  <linearGradient id="rhythmFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#6B7F6E" stop-opacity="0.34"></stop>
                    <stop offset="100%" stop-color="#6B7F6E" stop-opacity="0.03"></stop>
                  </linearGradient>
                </defs>
                <rect x="${stats.bandX}" y="0" width="${stats.bandW}" height="124" fill="#8A7B94" opacity="0.11" rx="7"></rect>
                <path d="${stats.dayArea}" fill="url(#rhythmFill)"></path>
                <path d="${stats.dayCurve}" fill="none" stroke="#4F6353" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
              <div class="rhythm-now-dot" style="left: ${stats.nowLeft}; top: ${stats.nowTop};"></div>
              <div class="rhythm-now-halo" style="left: ${stats.nowLeft}; top: ${stats.nowTop};"></div>
            </div>
            <div style="display: flex; justify-content: space-between; margin-top: 6px; font-size: 10.5px; color: #A3A297;">
              ${stats.dayTicks.map((t) => html`<div>${t.label}</div>`)}
            </div>
          </div>

          <!-- 13. From Your Notes (Themes) (Span 4) -->
          <div class="bench-card card-span-4">
            <div class="bench-card-header">
              <span class="card-label">From Your Notes · What You Have Been Working On</span>
              <span class="card-sub-label">recent tags</span>
            </div>
            <div class="themes-cloud">
              ${stats.themes.length > 0
                ? stats.themes.map(
                    (t) => html`
                      <div class="theme-pill">
                        <span class="theme-dot" style="background: ${t.color};"></span>
                        <span style="font-size: ${t.size}; font-weight: 700; letter-spacing: -0.01em; white-space: nowrap;">
                          ${t.name}
                        </span>
                        <span style="font-size: 11px; color: #A3A297; white-space: nowrap;">
                          ${t.mins} · ${t.ago}
                        </span>
                      </div>
                    `
                  )
                : html`
                    <div style="font-size: 13px; color: #767668; padding: 6px 0;">
                      Add session notes or tags when ending practice (e.g. <em>"barre chords"</em>, <em>"Bach invention"</em>) to see themes aggregate here.
                    </div>
                  `}
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
