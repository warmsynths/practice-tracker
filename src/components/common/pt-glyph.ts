import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { GlyphKind } from '../../types';

export type { GlyphKind };

const NOTE_COLORS = ['#FF7A5C', '#FFC2A8', '#B48CD9'];
const PAD_COLORS = ['var(--accent)', 'var(--ink)', 'var(--chart)', '#7FD1C1', '#FFC2A8'];
const ARC_COLORS = ['var(--accent)', 'var(--chart)', '#7FD1C1', '#FFC2A8'];

/**
 * Animated instrument glyph — a pure CSS/DOM illustration that "plays" while
 * `live` is true, and renders its static shape motionless otherwise. Only one
 * instance (the Today hero card, or the recording overlay) should ever be
 * `live` at a time; every grid/list thumbnail stays static for performance.
 */
@customElement('pt-glyph')
export class PtGlyph extends LitElement {
  @property({ type: String }) kind: GlyphKind = 'acoustic';
  @property({ type: Boolean }) live: boolean = true;

  private a(spec: string): string {
    return this.live ? spec : 'none';
  }

  static styles = css`
    :host {
      display: block;
      width: 250px;
      height: 310px;
    }

    .canvas {
      position: relative;
      width: 250px;
      height: 310px;
      overflow: hidden;
      border-radius: 18px;
    }

    .el {
      position: absolute;
    }

    @keyframes gVib {
      0% { transform: translateX(0); }
      2% { transform: translateX(2.6px); }
      4% { transform: translateX(-2.4px); }
      6% { transform: translateX(2.1px); }
      8% { transform: translateX(-1.8px); }
      10% { transform: translateX(1.5px); }
      13% { transform: translateX(-1.1px); }
      16% { transform: translateX(0.8px); }
      20% { transform: translateX(-0.5px); }
      25% { transform: translateX(0.25px); }
      30%, 100% { transform: translateX(0); }
    }

    @keyframes gGhost {
      0% { opacity: 0; transform: scaleX(1); }
      2% { opacity: 0.5; transform: scaleX(1); }
      30% { opacity: 0; transform: scaleX(0.3); }
      100% { opacity: 0; }
    }

    @keyframes gPick {
      0% { transform: translateX(0) rotate(-8deg); opacity: 1; }
      14% { transform: translateX(210px) rotate(8deg); opacity: 1; }
      22% { transform: translateX(226px) rotate(8deg); opacity: 0; }
      88% { transform: translateX(0) rotate(-8deg); opacity: 0; }
      100% { transform: translateX(0) rotate(-8deg); opacity: 1; }
    }

    @keyframes gRing {
      0% { transform: scale(1); opacity: 0.45; }
      60%, 100% { transform: scale(1.9); opacity: 0; }
    }

    @keyframes gBass {
      0% { transform: translateX(0); }
      2% { transform: translateX(5px); }
      4.5% { transform: translateX(-4.6px); }
      7% { transform: translateX(4.1px); }
      9.5% { transform: translateX(-3.6px); }
      12% { transform: translateX(3px); }
      15% { transform: translateX(-2.4px); }
      18% { transform: translateX(1.8px); }
      22% { transform: translateX(-1.2px); }
      26% { transform: translateX(0.7px); }
      31% { transform: translateX(-0.35px); }
      36%, 100% { transform: translateX(0); }
    }

    @keyframes gTap {
      0% { opacity: 0.9; transform: scale(1); }
      12% { opacity: 0; transform: scale(2.6); }
      100% { opacity: 0; transform: scale(2.6); }
    }

    @keyframes gKey {
      0% { transform: translateY(0); }
      3% { transform: translateY(4px); }
      16%, 100% { transform: translateY(0); }
    }

    @keyframes gLit {
      0% { opacity: 0; }
      3% { opacity: 1; }
      22%, 100% { opacity: 0; }
    }

    @keyframes gRise {
      0% { opacity: 0; transform: translateY(0) scale(0.6); }
      3% { opacity: 1; transform: translateY(-8px) scale(1); }
      34% { opacity: 0; transform: translateY(-170px) scale(0.8); }
      100% { opacity: 0; transform: translateY(-170px); }
    }

    @keyframes gPad {
      0% { opacity: 1; transform: scale(0.88); }
      35%, 100% { opacity: 0; transform: scale(1); }
    }

    @keyframes gHole {
      0%, 100% { background: var(--stageDeep, #2B1C33); }
      50% { background: #F5E9DA; }
    }

    @keyframes gPuff {
      0% { transform: translate(0, 0) scale(0.5); opacity: 0; }
      15% { opacity: 0.85; }
      100% { transform: translate(38px, -46px) scale(1.7); opacity: 0; }
    }

    @keyframes gArc {
      0% { transform: scale(0.5); opacity: 0; }
      20% { opacity: 0.9; }
      100% { transform: scale(2.2); opacity: 0; }
    }

    @keyframes gBar {
      from { transform: scaleY(0.25); }
      to { transform: scaleY(1); }
    }

    @media (prefers-reduced-motion: reduce) {
      * {
        animation: none !important;
      }
    }
  `;

  private renderStrings(dur: number, x0: number, gap: number, wound: string, plain: string, count = 6) {
    return Array.from({ length: count }, (_, i) => {
      const left = x0 + i * gap;
      const width = 3.2 - i * 0.42;
      const delay = ((left - 20) / 210) * 0.14 * dur;
      const color = i < count / 2 ? wound : plain;
      return html`
        <div
          class="el"
          style="left:${left}px;top:40px;width:${width}px;height:224px;background:${color};border-radius:2px;
            animation:${this.a(`gVib ${dur}s linear ${delay}s infinite`)};"
        ></div>
        <div
          class="el"
          style="left:${left}px;top:40px;width:${width}px;height:224px;background:${color};border-radius:2px;
            animation:${this.a(`gGhost ${dur}s ease-out ${delay}s infinite`)};"
        ></div>
      `;
    });
  }

  private renderAcoustic() {
    return html`
      <div class="el" style="left:33px;top:48px;width:184px;height:184px;border-radius:50%;
        border:5px solid var(--accent);box-shadow:inset 0 0 0 4px #E8A56B;"></div>
      <div class="el" style="left:45px;top:60px;width:160px;height:160px;border-radius:50%;
        background:var(--stageDeep,#2B1C33);"></div>
      ${[0.08, 0.5].map(
        (delay) => html`
          <div
            class="el"
            style="left:33px;top:48px;width:184px;height:184px;border-radius:50%;border:2px solid var(--accent);
              animation:${this.a(`gRing 2.6s ease-out ${delay}s infinite`)};"
          ></div>
        `
      )}
      <div class="el" style="left:55px;top:252px;width:140px;height:22px;background:#5A3A2A;border-radius:4px;"></div>
      ${this.renderStrings(1.4, 50, 30, '#E9CFA0', '#FBF3E4')}
      <div
        class="el"
        style="left:44px;top:144px;width:14px;height:20px;background:#F5E9DA;border-radius:3px 7px 3px 7px;
          animation:${this.a('gPick 1.4s ease-in-out infinite')};"
      ></div>
    `;
  }

  private renderElectric() {
    return html`
      ${[96, 150, 204].map(
        (top) => html`<div class="el" style="left:16px;top:${top}px;width:218px;height:1px;background:rgba(245,233,218,0.16);"></div>`
      )}
      <div class="el" style="left:30px;top:224px;width:190px;height:20px;background:var(--stageLine);border-radius:3px;"></div>
      <div class="el" style="left:30px;top:252px;width:190px;height:20px;background:var(--stageLine);border-radius:3px;"></div>
      ${this.renderStrings(1, 36, 36, '#D8C3E6', '#F5E9DA')}
      <div
        class="el"
        style="left:30px;top:134px;width:14px;height:20px;background:#F5E9DA;border-radius:3px 7px 3px 7px;
          animation:${this.a('gPick 1s ease-in-out infinite')};"
      ></div>
    `;
  }

  private renderBass() {
    const BASS: [number, number | null][] = [[0, 1.2], [1.5, null], [0.6, null], [2.1, null]];
    const positions = [60, 105, 150, 195];
    const widths = [6.5, 5.4, 4.3, 3.2];
    return html`
      ${[110, 170].map(
        (top) => html`<div class="el" style="left:16px;top:${top}px;width:218px;height:1px;background:rgba(245,233,218,0.16);"></div>`
      )}
      <div class="el" style="left:45px;top:252px;width:160px;height:22px;background:#5A3A2A;border-radius:4px;"></div>
      ${positions.map((left, i) => {
        const [delay, delay2] = BASS[i];
        return html`
          <div
            class="el"
            style="left:${left}px;top:40px;width:${widths[i]}px;height:224px;background:#D8C3E6;border-radius:2px;
              animation:${this.a(`gBass 1.6s linear ${delay}s infinite`)};"
          >
            ${delay2 != null
              ? html`<div
                  style="position:absolute;inset:0;background-image:repeating-linear-gradient(0deg,rgba(0,0,0,0.25) 0 2px,transparent 2px 5px);
                    animation:${this.a(`gBass 1.6s linear ${delay2}s infinite`)};"
                ></div>`
              : ''}
          </div>
        `;
      })}
      ${[0, 1.2, 0.6, 2.1, 1.8].map(
        (delay, i) => html`
          <div
            class="el"
            style="left:${(positions[i % 4] ?? 60) - 9}px;top:150px;width:18px;height:18px;border-radius:50%;
              border:2px solid var(--accent);animation:${this.a(`gTap 2.4s ease-out ${delay}s infinite`)};"
          ></div>
        `
      )}
    `;
  }

  private renderPiano() {
    const whites = Array.from({ length: 10 }, (_, i) => i * 25 + 0.5);
    const blackOffsets = [0, 1, 3, 4, 5, 7, 8].map((w) => (w + 1) * 25 - 7);
    const litIndexes = [2, 4, 7];
    return html`
      <div class="el" style="left:0;top:176px;width:250px;height:134px;background:var(--stageDeep,#2B1C33);"></div>
      ${whites.map(
        (left, i) => html`
          <div class="el" style="left:${left}px;top:176px;width:24px;height:126px;background:#F5E9DA;
            border-radius:0 0 4px 4px;animation:${litIndexes.includes(i) ? this.a(`gKey 2.4s ease-out ${i * 0.5}s infinite`) : 'none'};"></div>
        `
      )}
      ${blackOffsets.map(
        (left) => html`<div class="el" style="left:${left}px;top:176px;width:15px;height:78px;background:var(--stageKey);border-radius:0 0 3px 3px;"></div>`
      )}
      ${litIndexes.map(
        (i, idx) => html`
          <div
            class="el"
            style="left:${whites[i]}px;top:176px;width:24px;height:126px;border-radius:0 0 4px 4px;
              background:linear-gradient(180deg,rgba(255,122,92,0.5),rgba(255,122,92,0));
              animation:${this.a(`gLit 2.4s ease-out ${idx * 0.8}s infinite`)};"
          ></div>
        `
      )}
      ${Array.from({ length: 8 }, (_, i) => {
        const key = litIndexes[i % litIndexes.length];
        const left = whites[key] + 6;
        return html`
          <div
            class="el"
            style="left:${left}px;top:168px;width:11px;height:11px;border-radius:50%;background:${NOTE_COLORS[i % NOTE_COLORS.length]};
              animation:${this.a(`gRise 3s ease-out ${i * 0.8}s infinite`)};"
          ></div>
        `;
      })}
    `;
  }

  private renderPads() {
    const cols = 4;
    const size = 50;
    const gap = 10;
    const margin = (250 - (cols * size + (cols - 1) * gap)) / 2;
    const active = new Set([0, 1, 2, 5, 6, 8, 9, 10, 13, 14]);
    return Array.from({ length: 16 }, (_, i) => {
      const row = Math.floor(i / cols);
      const col = i % cols;
      const left = margin + col * (size + gap);
      const top = 40 + row * (size + gap);
      const isActive = active.has(i);
      return html`
        <div class="el" style="left:${left}px;top:${top}px;width:${size}px;height:${size}px;border-radius:50%;background:var(--stageKey);"></div>
        ${isActive
          ? html`
              <div
                class="el"
                style="left:${left}px;top:${top}px;width:${size}px;height:${size}px;border-radius:50%;
                  box-shadow:0 0 18px 4px ${PAD_COLORS[i % PAD_COLORS.length]};background:${PAD_COLORS[i % PAD_COLORS.length]};
                  animation:${this.a(`gPad ${1.6 + (i % 3) * 0.3}s ease-out ${(i % 7) * 0.22}s infinite`)};"
              ></div>
            `
          : ''}
      `;
    });
  }

  private renderWind() {
    return html`
      <div class="el" style="left:20px;top:142px;width:176px;height:26px;background:#E8C27A;border-radius:13px;"></div>
      ${Array.from({ length: 6 }, (_, i) => html`
        <div
          class="el"
          style="left:${34 + i * 25}px;top:149px;width:10px;height:10px;border-radius:50%;
            animation:${this.a(`gHole 1.6s steps(1) ${i * 0.2}s infinite`)};background:var(--stageDeep,#2B1C33);"
        ></div>
      `)}
      <div class="el" style="left:196px;top:114px;width:56px;height:82px;background:#5A3A2A;border-radius:14px;"></div>
      <div class="el" style="left:211px;top:130px;width:30px;height:50px;background:var(--stageDeep,#2B1C33);border-radius:10px;"></div>
      ${[0, 0.4, 0.8, 1.2].map(
        (delay) => html`
          <div
            class="el"
            style="left:222px;top:120px;width:12px;height:12px;border-radius:50%;background:rgba(245,233,218,0.6);
              animation:${this.a(`gPuff 2s ease-out ${delay}s infinite`)};"
          ></div>
        `
      )}
    `;
  }

  private renderVoice() {
    const bars = Array.from({ length: 22 }, (_, i) => 20 + Math.abs(Math.sin(i * 0.9)) * 40);
    return html`
      <div class="el" style="left:103px;top:133px;width:44px;height:44px;border-radius:50%;background:var(--accent);"></div>
      ${[0, 0.6, 1.2, 1.8].map(
        (delay, i) => html`
          <div
            class="el"
            style="left:75px;top:105px;width:100px;height:100px;border-radius:50%;border:3px solid ${ARC_COLORS[i]};
              animation:${this.a(`gArc 2.4s ease-out ${delay}s infinite`)};"
          ></div>
        `
      )}
      <div class="el" style="left:15px;bottom:20px;width:220px;height:60px;display:flex;align-items:flex-end;gap:4px;">
        ${bars.map(
          (h, i) => html`
            <div
              style="width:6px;height:${h}px;background:var(--chart);border-radius:2px;transform-origin:bottom;
                animation:${this.a(`gBar ${0.5 + (i % 5) * 0.1}s ease-in-out ${i * 0.05}s infinite alternate`)};"
            ></div>
          `
        )}
      </div>
    `;
  }

  render() {
    const BG: Record<GlyphKind, string> = {
      acoustic: '#B07A4E',
      electric: 'var(--stage, #46304F)',
      bass: 'var(--stage, #46304F)',
      piano: 'var(--stage, #46304F)',
      pads: 'var(--stage, #46304F)',
      wind: 'var(--stage, #46304F)',
      voice: 'var(--stage, #46304F)',
    };

    let body;
    switch (this.kind) {
      case 'electric':
        body = this.renderElectric();
        break;
      case 'bass':
        body = this.renderBass();
        break;
      case 'piano':
        body = this.renderPiano();
        break;
      case 'pads':
        body = this.renderPads();
        break;
      case 'wind':
        body = this.renderWind();
        break;
      case 'voice':
        body = this.renderVoice();
        break;
      default:
        body = this.renderAcoustic();
    }

    return html`<div class="canvas" style="background:${BG[this.kind]};">${body}</div>`;
  }
}
