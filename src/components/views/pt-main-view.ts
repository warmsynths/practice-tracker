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
  @state() private selectedRetargetId: string | null = null;

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
        gap: 14px;
        width: 100%;
        max-width: 1080px;
        margin: 0 auto;
      }

      /* Running Active State Bar */
      .running-session-bar {
        background: #EFE9F1;
        color: #23241F;
        border-radius: 20px;
        padding: 14px 18px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 18px;
        flex-wrap: wrap;
        box-shadow: 0 2px 10px rgba(35, 36, 31, 0.04);
        animation: riseIn 200ms ease-out both;
      }

      .running-info-left {
        display: flex;
        align-items: center;
        gap: 14px;
        min-width: 0;
      }

      .running-pulse-dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: #6B7F6E;
        animation: softPulse 2.4s ease-in-out infinite;
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

      .running-actions-right {
        display: flex;
        align-items: center;
        gap: 12px;
      }

      .btn-end-session {
        background: #4F6353;
        color: #F7F6F1;
        border-radius: 13px;
        padding: 12px 22px;
        font-size: 13.5px;
        font-weight: 700;
        border: none;
        cursor: pointer;
        transition: background-color 160ms ease-out, transform 140ms ease;
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

      /* Consolidated Next Choice Bento (Idle state) */
      .next-choice-bento {
        background: #4F6353;
        color: #F2F1EC;
        border-radius: 22px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        gap: 18px;
        box-shadow: 0 4px 20px rgba(35, 36, 31, 0.06);
        animation: riseIn 240ms cubic-bezier(0.2, 0.8, 0.2, 1) both;
      }

      .retarget-chips-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        flex-wrap: wrap;
      }

      .retarget-chips-list {
        display: flex;
        gap: 7px;
        flex-wrap: wrap;
        min-width: 0;
      }

      .retarget-chip {
        background: rgba(250, 250, 247, 0.10);
        border: 1px solid rgba(242, 241, 236, 0.22);
        color: #EDECE3;
        border-radius: 12px;
        padding: 8px 13px;
        display: flex;
        align-items: center;
        gap: 7px;
        cursor: pointer;
        flex-shrink: 0;
        font-family: inherit;
        font-size: 12.5px;
        font-weight: 700;
        transition: background-color 160ms ease-out, color 160ms ease-out, border-color 160ms ease-out;
        user-select: none;
      }

      .retarget-chip:hover:not(.selected) {
        background: rgba(250, 250, 247, 0.18);
        border-color: rgba(242, 241, 236, 0.35);
      }

      .retarget-chip.selected {
        background: rgba(250, 250, 247, 0.97);
        border-color: transparent;
        color: #23241F;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
      }

      .retarget-chip-dot {
        width: 7px;
        height: 7px;
        border-radius: 50%;
        flex-shrink: 0;
      }

      .retarget-chip-name {
        font-size: 12.5px;
        font-weight: 700;
        white-space: nowrap;
      }

      .retarget-chip-pct {
        font-size: 11.5px;
        color: rgba(237, 236, 227, 0.60);
        white-space: nowrap;
      }

      .retarget-chip-pct.selected {
        color: #767668;
      }

      .retarget-header-hint {
        font-size: 10.5px;
        letter-spacing: 0.1em;
        color: rgba(237, 236, 227, 0.6);
        font-weight: 700;
        flex-shrink: 0;
        text-transform: uppercase;
      }

      .bento-divider {
        height: 1px;
        background: rgba(242, 241, 236, 0.16);
      }

      .bento-two-col {
        display: grid;
        grid-template-columns: minmax(0, 1fr) 400px;
        gap: 20px;
        align-items: start;
      }

      @media (max-width: 900px) {
        .bento-two-col {
          grid-template-columns: 1fr;
          gap: 18px;
        }
      }

      .bento-col-left {
        display: flex;
        flex-direction: column;
        gap: 16px;
        min-width: 0;
      }

      .bento-stat-row {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        gap: 20px;
      }

      .bento-stat-left {
        min-width: 0;
      }

      .bento-num-line {
        display: flex;
        align-items: baseline;
        gap: 10px;
      }

      .bento-big-num {
        font-size: 62px;
        font-weight: 700;
        letter-spacing: -0.05em;
        line-height: 0.9;
        color: #F2F1EC;
      }

      .bento-unit-label {
        font-size: 13.5px;
        font-weight: 700;
        opacity: 0.7;
        color: #F2F1EC;
      }

      .bento-name-rank-line {
        display: flex;
        align-items: baseline;
        gap: 10px;
        flex-wrap: wrap;
        margin-top: 10px;
      }

      .bento-inst-name {
        font-size: 26px;
        font-weight: 700;
        letter-spacing: -0.03em;
        color: #F2F1EC;
      }

      .bento-rank-pill {
        font-size: 12.5px;
        font-weight: 700;
        background: rgba(242, 241, 236, 0.14);
        color: #F2F1EC;
        border-radius: 8px;
        padding: 3px 9px;
      }

      .bento-sub-line {
        font-size: 13px;
        opacity: 0.76;
        margin-top: 7px;
        color: #F2F1EC;
      }

      .bento-ticks-track {
        display: flex;
        align-items: flex-end;
        gap: 3px;
        height: 38px;
        flex-shrink: 0;
      }

      .bento-tick {
        width: 7px;
        border-radius: 2px;
        transition: height 220ms cubic-bezier(0.2, 0.8, 0.2, 1);
      }

      .bento-reason-italic {
        font-family: 'Instrument Serif', serif;
        font-style: italic;
        font-size: 17px;
        opacity: 0.82;
        line-height: 1.35;
        text-wrap: pretty;
        color: #F2F1EC;
      }

      .bento-actions-row {
        display: flex;
        gap: 10px;
        align-items: stretch;
        flex-wrap: wrap;
      }

      .btn-bento-start {
        flex: 1;
        min-width: 200px;
        background: #FAFAF7;
        color: #23241F;
        border: none;
        border-radius: 15px;
        height: 54px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 9px;
        font-size: 15px;
        font-weight: 700;
        cursor: pointer;
        transition: background-color 160ms ease-out, transform 140ms ease;
        font-family: inherit;
      }

      .btn-bento-start:hover {
        background: #FFFFFF;
        transform: translateY(-1px);
      }

      .btn-bento-start:active {
        transform: scale(0.98);
      }

      .btn-bento-past-log {
        border: 1px dashed rgba(242, 241, 236, 0.4);
        color: #EDECE3;
        background: transparent;
        border-radius: 15px;
        height: 54px;
        padding: 0 18px;
        display: flex;
        align-items: center;
        font-size: 12.5px;
        font-weight: 700;
        cursor: pointer;
        white-space: nowrap;
        transition: background-color 160ms ease-out;
        font-family: inherit;
      }

      .btn-bento-past-log:hover {
        background: rgba(250, 250, 247, 0.10);
      }

      .bento-col-right {
        background: rgba(35, 45, 36, 0.30);
        border-radius: 18px;
        padding: 14px;
        display: flex;
        flex-direction: column;
        gap: 7px;
        min-width: 0;
      }

      .bento-queue-header {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
        gap: 12px;
      }

      .queue-title-tag {
        font-size: 9.5px;
        letter-spacing: 0.13em;
        color: rgba(237, 236, 227, 0.66);
        font-weight: 700;
        text-transform: uppercase;
      }

      .queue-subtitle-tag {
        font-size: 11px;
        color: rgba(237, 236, 227, 0.55);
      }

      .bento-queue-list {
        display: flex;
        flex-direction: column;
        gap: 6px;
      }

      .queue-row-item {
        background: transparent;
        border: 1px solid rgba(242, 241, 236, 0.13);
        border-radius: 12px;
        padding: 9px 11px;
        display: flex;
        align-items: center;
        gap: 9px;
        cursor: pointer;
        transition: background-color 160ms ease-out, border-color 160ms ease-out;
        user-select: none;
      }

      .queue-row-item:hover:not(.selected) {
        background: rgba(250, 250, 247, 0.08);
      }

      .queue-row-item.selected {
        background: rgba(250, 250, 247, 0.16);
        border-color: rgba(242, 241, 236, 0.30);
      }

      .queue-rank-num {
        font-size: 11px;
        font-weight: 700;
        opacity: 0.58;
        width: 17px;
        flex-shrink: 0;
        color: #F2F1EC;
      }

      .queue-dot {
        width: 7px;
        height: 7px;
        border-radius: 50%;
        flex-shrink: 0;
      }

      .queue-inst-name {
        font-size: 12.5px;
        font-weight: 700;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        min-width: 0;
        color: #F2F1EC;
      }

      .queue-flag-badge {
        font-size: 8.5px;
        letter-spacing: 0.08em;
        font-weight: 700;
        border-radius: 6px;
        padding: 3px 6px;
        white-space: nowrap;
        flex-shrink: 0;
        color: #F2F1EC;
        text-transform: uppercase;
      }

      .queue-spacer {
        flex: 1;
      }

      .queue-ago-text {
        font-size: 11px;
        opacity: 0.6;
        white-space: nowrap;
        color: #F2F1EC;
      }

      .queue-pct-pill {
        font-size: 11px;
        font-weight: 700;
        background: rgba(242, 241, 236, 0.14);
        border-radius: 7px;
        padding: 3px 7px;
        white-space: nowrap;
        color: #F2F1EC;
      }

      /* Quick Past Logging Drawer / Row */
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
        gap: 12px;
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
        border-radius: 20px;
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
        font-size: 20px;
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

      @media (max-width: 760px) {
        .one-away-grid {
          grid-template-columns: 1fr;
        }
      }

      .one-away-item {
        border: 1px solid #E7E6DF;
        border-radius: 16px;
        padding: 18px;
        cursor: pointer;
        transition: background-color 160ms ease-out, border-color 160ms ease-out, transform 160ms ease;
      }

      .one-away-item:hover {
        background: #F4F3ED;
        border-color: #D9D8CF;
        transform: translateY(-1px);
      }

      .one-away-top {
        display: flex;
        align-items: baseline;
        gap: 9px;
      }

      .one-away-big {
        font-size: 32px;
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
        font-size: 13.5px;
        color: #5A594F;
        margin-top: 10px;
        line-height: 1.5;
      }

      /* Stacked Bar Chart */
      .stacked-chart-area {
        display: flex;
        align-items: flex-end;
        gap: 5px;
        height: 150px;
        margin-top: 16px;
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
        border-radius: 5px;
        transition: height 240ms ease;
      }

      .stacked-labels-row {
        display: flex;
        gap: 5px;
        margin-top: 9px;
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
      }

      .kit-share-row {
        display: flex;
        align-items: center;
        gap: 11px;
        padding: 12px 0;
        cursor: pointer;
        border-top: 1px solid #EDECE6;
        transition: opacity 200ms ease-out;
      }

      .kit-share-row:first-child {
        border-top: none;
      }

      .kit-share-progress-track {
        height: 4px;
        border-radius: 3px;
        background: #EDECE6;
        margin-top: 6px;
        overflow: hidden;
      }

      .kit-share-progress-fill {
        display: block;
        height: 100%;
        border-radius: 3px;
        transition: width 320ms cubic-bezier(0.16, 1, 0.3, 1);
      }

      /* Heatmap & Milestones */
      .heatmap-grid {
        display: grid;
        grid-template-rows: repeat(7, 1fr);
        grid-auto-flow: column;
        gap: 3px;
        margin-top: 14px;
        overflow-x: auto;
        padding-bottom: 4px;
      }

      .heat-cell {
        aspect-ratio: 1;
        border-radius: 3px;
        position: relative;
        transition: transform 120ms ease;
      }

      .heat-cell svg {
        position: absolute;
        inset: 13%;
        width: auto;
        height: auto;
      }

      .heat-months-row {
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
        font-size: 10px;
        color: #A3A297;
        letter-spacing: 0.06em;
      }

      .ms-preview-banner {
        display: flex;
        align-items: center;
        gap: 13px;
        margin-top: 18px;
        border-top: 1px solid #EDECE6;
        padding-top: 16px;
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
        gap: 8px;
        margin-top: 11px;
      }

      .ms-legend-pill {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        border-radius: 999px;
        padding: 5px 12px 5px 6px;
        cursor: pointer;
        font-size: 11.5px;
        font-weight: 700;
        transition: transform 140ms ease, background 140ms ease;
        user-select: none;
      }

      .ms-legend-pill:hover {
        transform: translateY(-1px);
      }

      .ms-legend-icon-mini {
        width: 22px;
        height: 22px;
        border-radius: 7px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }

      /* Pace & Weekday Cards */
      .pace-svg-box {
        width: 100%;
        height: 90px;
        margin-top: 10px;
        overflow: visible;
      }

      .dow-bars-box {
        display: flex;
        align-items: flex-end;
        gap: 8px;
        height: 96px;
        margin-top: 14px;
      }

      .dow-col {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 7px;
        height: 100%;
        justify-content: flex-end;
      }

      .dow-bar-fill {
        width: 100%;
        border-radius: 5px;
        transition: height 240ms ease;
      }

      /* Records Grid */
      .records-2x2-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 16px 14px;
        margin-top: 16px;
      }

      .record-k-tag {
        font-size: 8.5px;
        letter-spacing: 0.12em;
        color: #A3A297;
        font-weight: 700;
        text-transform: uppercase;
        display: flex;
        align-items: center;
        gap: 6px;
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
        font-size: 22px;
        font-weight: 700;
        letter-spacing: -0.03em;
        margin-top: 5px;
        color: #23241F;
      }

      .record-sub-text {
        font-size: 11.5px;
        color: #767668;
        margin-top: 3px;
      }

      .records-fresh-footer {
        display: flex;
        gap: 9px;
        margin-top: 16px;
        border-top: 1px solid #EDECE6;
        padding-top: 14px;
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
        margin-top: 14px;
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
        opacity: 0.28;
        animation: halo 5.4s ease-out infinite;
      }

      /* Notes Themes */
      .themes-cloud {
        display: flex;
        flex-wrap: wrap;
        gap: 9px;
        margin-top: 16px;
        align-items: baseline;
      }

      .theme-pill {
        display: flex;
        align-items: center;
        gap: 8px;
        border: 1px solid #E4E3DC;
        border-radius: 999px;
        padding: 8px 14px;
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

        .next-choice-bento {
          padding: 16px 14px;
          border-radius: 18px;
          gap: 14px;
        }

        .bento-stat-row {
          flex-direction: column;
          align-items: flex-start;
          gap: 12px;
        }

        .bento-big-num {
          font-size: 50px;
        }

        .bento-inst-name {
          font-size: 22px;
        }

        .btn-bento-start {
          min-width: 100%;
          height: 48px;
          font-size: 14px;
        }

        .btn-bento-past-log {
          width: 100%;
          justify-content: center;
          height: 44px;
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
          padding: 14px;
        }

        .one-away-big {
          font-size: 24px;
        }

        .stacked-chart-area {
          height: 120px;
        }

        .pace-svg-box {
          height: 70px;
        }

        .dow-bars-box {
          height: 75px;
        }

        .rhythm-svg-wrap svg {
          height: 90px !important;
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
      selectedInstrumentId: this.selectedRetargetId,
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
    const msCaptionTitle = activeMs
      ? activeMs.title
      : `${stats.milestones.filter((m) => m.done && m.when > 0).length} milestones sit on the calendar above`;
    const msCaptionDetail = activeMs
      ? activeMs.done
        ? `${activeMs.detail}${activeMs.dateLabel ? ` · ${activeMs.dateLabel}` : ''}`
        : `${activeMs.detail} · ${activeMs.pctLabel} of the way`
      : 'Hover a marked day, or any icon here, to see what it was for.';
    const msCaptionIcon = activeMs ? activeMs.icon : BENCH_ICONS.star;
    const msCaptionBg = activeMs ? (activeMs.done ? activeMs.accent : '#E7E6DF') : '#E7E6DF';
    const msCaptionStroke = activeMs ? (activeMs.done ? '#FAFAF7' : '#B0AFA4') : '#B0AFA4';

    return html`
      <div class="bench-wrap">
        <!-- Live Running Session Bar (When Active) -->
        ${isRunning
          ? html`
              <div class="running-session-bar">
                <div class="running-info-left">
                  <span class="running-pulse-dot"></span>
                  <div class="running-inst-name">${activeInst?.name || 'Instrument'}</div>
                  <div class="running-timer-num">${elapsedDisplay}</div>
                </div>

                <div class="running-actions-right">
                  <button class="btn-discard-link" @click=${this.handleDiscard}>
                    Discard
                  </button>
                  <button class="btn-end-session" @click=${this.handleEnd}>
                    End session
                  </button>
                </div>
              </div>
            `
          : html`
              <!-- Consolidated Next Choice Bento (When Idle) -->
              <div class="next-choice-bento">
                <!-- Top Retarget Chips Row -->
                <div class="retarget-chips-header">
                  <div class="retarget-chips-list">
                    ${stats.nextUp.chips.map(
                      (c) => html`
                        <div
                          class="retarget-chip ${c.isSelected ? 'selected' : ''}"
                          @click=${() => (this.selectedRetargetId = c.id)}
                          title="${c.name} (${c.pct})"
                        >
                          <span class="retarget-chip-dot" style="background: ${c.color};"></span>
                          <span class="retarget-chip-name">${c.name}</span>
                          <span class="retarget-chip-pct ${c.isSelected ? 'selected' : ''}">${c.pct}</span>
                        </div>
                      `
                    )}
                  </div>
                  <div class="retarget-header-hint">TAP TO RETARGET</div>
                </div>

                <div class="bento-divider"></div>

                <!-- Main Two-Column Split -->
                <div class="bento-two-col">
                  <!-- Left Column: Selected Instrument Details & Start -->
                  <div class="bento-col-left">
                    <div class="bento-stat-row">
                      <div class="bento-stat-left">
                        <div class="bento-num-line">
                          <div class="bento-big-num">${stats.nextUp.num}</div>
                          <div class="bento-unit-label">${stats.nextUp.unit}</div>
                        </div>
                        <div class="bento-name-rank-line">
                          <div class="bento-inst-name">${stats.nextUp.name}</div>
                          <div class="bento-rank-pill">${stats.nextUp.rankLabel}</div>
                        </div>
                        <div class="bento-sub-line">${stats.nextUp.line}</div>
                      </div>

                      <div class="bento-ticks-track">
                        ${stats.nextUp.ticks.map(
                          (t) => html`
                            <div class="bento-tick" style="height: ${t.h}; background: ${t.bg};"></div>
                          `
                        )}
                      </div>
                    </div>

                    <div class="bento-reason-italic">${stats.nextUp.reason}</div>

                    <div class="bento-actions-row">
                      <div
                        class="btn-bento-start"
                        @click=${() => {
                          const idToStart = stats.nextUp.selectedId;
                          this.selectedRetargetId = null;
                          this.handleStart(idToStart);
                        }}
                      >
                        <span>${stats.nextUp.cta}</span>
                        <svg viewBox="0 0 24 24" style="width: 16px; height: 16px;" fill="none" stroke="#23241F" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M4.5 12h14M13 6.5l5.5 5.5L13 17.5"></path>
                        </svg>
                      </div>

                      <div
                        class="btn-bento-past-log"
                        @click=${() => (this.quickLogOpen = !this.quickLogOpen)}
                      >
                        ${this.quickLogOpen ? '✕ Close log' : '+ Past log'}
                      </div>
                    </div>
                  </div>

                  <!-- Right Column: Priority Queue -->
                  <div class="bento-col-right">
                    <div class="bento-queue-header">
                      <div class="queue-title-tag">PRIORITY QUEUE</div>
                      <div class="queue-subtitle-tag">coldest first</div>
                    </div>

                    <div class="bento-queue-list">
                      ${stats.nextUp.queue.map(
                        (q) => html`
                          <div
                            class="queue-row-item ${q.isSelected ? 'selected' : ''}"
                            @click=${() => (this.selectedRetargetId = q.id)}
                            title="${q.name} (${q.flag}) - ${q.reason || q.ago}"
                          >
                            <span class="queue-rank-num">${q.rank}</span>
                            <span class="queue-dot" style="background: ${q.color};"></span>
                            <span class="queue-inst-name">${q.name}</span>
                            <span class="queue-flag-badge" style="background: ${q.flagBg};">${q.flag}</span>
                            <span class="queue-spacer"></span>
                            <span class="queue-ago-text">${q.ago}</span>
                            <span class="queue-pct-pill">${q.pct}</span>
                          </div>
                        `
                      )}
                    </div>
                  </div>
                </div>
              </div>
            `}

        <!-- Quick Past Logging Drawer -->
        ${this.quickLogOpen
          ? html`
              <div class="quick-log-panel">
                <div class="quick-log-header">
                  <span class="quick-log-title">1-Tap Past Practice Log for ${stats.nextUp.name}</span>
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
                            this.handleQuickPastLog(stats.nextUp.selectedId, m, 1);
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
                            this.handleQuickPastLog(stats.nextUp.selectedId, m, 2);
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
              <span class="card-label">DAY STREAK</span>
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
              <span class="card-label">EVERY HOUR YOU HAVE LOGGED</span>
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
              <span class="card-label">ONE SESSION AWAY</span>
              <span class="card-sub-label">shortest first · tap to start it</span>
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
              <span class="card-label">EVERY DAY ON RECORD · MILESTONES MARKED WHERE THEY LANDED</span>
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
              <span class="card-label">MILESTONES · GREYED OUT MEANS NOT YET</span>
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
                      <svg viewBox="0 0 24 24" style="width: 13px; height: 13px;" fill="none" stroke="${m.done ? '#FAFAF7' : '#B0AFA4'}" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
                        <path d="${m.icon}"></path>
                      </svg>
                    </span>
                    <span style="font-size: 11.5px; font-weight: 700; color: ${m.done ? '#4A4945' : '#A3A297'};">
                      ${m.title}
                    </span>
                    <span style="font-size: 10.5px; color: #A3A297;">
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
              <span class="card-label">THIS WEEK VS YOUR MEDIAN</span>
              <span style="font-size: 11.5px; font-weight: 700; color: ${stats.paceColor};">
                ${stats.paceDelta}
              </span>
            </div>
            <div style="display: flex; align-items: baseline; gap: 9px; margin-top: 8px;">
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
              <span class="card-label">YOUR WEEK, AVERAGED</span>
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
              <span class="card-label">RECORDS</span>
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
              <span class="card-label">HOW LONG YOU ACTUALLY PLAY</span>
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

          <!-- 10. Kit Share Breakdown & Interactive Mute (Span 4) -->
          <div class="bench-card card-span-4" style="padding: 20px 20px 8px;">
            <div class="bench-card-header">
              <span class="card-label">KIT SHARE · TAP TO MUTE ONE</span>
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
                    <span class="retarget-chip-dot" style="background: ${r.color};"></span>
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

          <!-- 11. Your Day, By The Hour (24h Rhythm Curve) (Span 4) -->
          <div class="bench-card card-span-4" style="overflow: hidden; padding: 22px 22px 18px;">
            <div class="bench-card-header">
              <span class="card-label">YOUR DAY, BY THE HOUR</span>
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

          <!-- 12. From Your Notes (Themes) (Span 4) -->
          <div class="bench-card card-span-4">
            <div class="bench-card-header">
              <span class="card-label">FROM YOUR NOTES · WHAT YOU HAVE BEEN WORKING ON</span>
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
