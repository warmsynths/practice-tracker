import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { GlyphKind } from '../../types';

export type { GlyphKind };

const PICK_RADIUS = '50% 50% 50% 50% / 62% 62% 38% 38%';

/**
 * Animated instrument glyph — a pure CSS/DOM illustration that "plays" while
 * `live` is true, and renders its static shape motionless otherwise.
 *
 * This is a direct translation of the original Glyph.dc.html prototype
 * component (markup + its renderVals() data logic), not a reinterpretation:
 * every position/size/color/delay value below is copied from that source.
 * The key behavior to preserve is that most "activity" elements (string
 * ghost-blur, pad glow, piano key-lit flash, rising notes, breath puffs,
 * voice arcs, bass finger-taps) have `opacity: 0` as their BASE style, with
 * the animation only briefly revealing them — so when `live` is false the
 * animation becomes `none` and these elements stay invisible, leaving only
 * the bare instrument shape. Only one instance (the Today hero card, or the
 * recording overlay) should ever be `live` at a time; every grid/list
 * thumbnail stays static for performance.
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

    @keyframes gRing {
      0% { transform: scale(1); opacity: 0.45; }
      60%, 100% { transform: scale(1.9); opacity: 0; }
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

  /** Matches the source's `strings(dur, x0, gap, wound, plain)` helper exactly. */
  private renderStrings(dur: number, x0: number, gap: number, wound: string, plain: string, ghostColor: string, bottom: number | null) {
    return Array.from({ length: 6 }, (_, i) => {
      const left = x0 + i * gap;
      const delay = ((left - 20) / 210) * 0.14 * dur;
      const width = 3.2 - i * 0.42;
      const color = i < 3 ? wound : plain;
      const posStyle = bottom != null ? `top:0;bottom:${bottom}px;` : `top:0;bottom:0;`;
      return html`
        <div
          class="el"
          style="${posStyle}left:${left}px;width:14px;margin-left:-7px;
            animation:${this.a(`gVib ${dur}s linear ${delay}s infinite`)};"
        >
          <div class="el" style="top:0;bottom:0;left:2px;width:10px;background:${ghostColor};border-radius:5px;opacity:0;
            animation:${this.a(`gGhost ${dur}s ease-out ${delay}s infinite`)};"></div>
          <div class="el" style="top:0;bottom:0;left:50%;width:${width}px;margin-left:-1px;background:${color};border-radius:2px;"></div>
        </div>
      `;
    });
  }

  private renderPick(top: number, shadow: string, dur: number) {
    return html`
      <div
        class="el"
        style="top:${top}px;left:10px;width:24px;height:28px;background:var(--accent, #FF7A5C);
          border-radius:${PICK_RADIUS};box-shadow:0 4px 10px ${shadow};
          animation:${this.a(`gPick ${dur}s cubic-bezier(0.3,0.6,0.4,1) infinite`)};"
      ></div>
    `;
  }

  private renderAcoustic() {
    return html`
      ${[0.08, 0.5].map(
        (delay) => html`
          <div
            class="el"
            style="left:45px;top:36px;width:160px;height:160px;border-radius:50%;border:2px solid #FBF3E4;opacity:0;
              animation:${this.a(`gRing 1.4s ease-out ${delay}s infinite`)};"
          ></div>
        `
      )}
      <div class="el" style="left:33px;top:24px;width:184px;height:184px;border-radius:50%;
        border:5px solid var(--accent, #FF7A5C);box-shadow:inset 0 0 0 4px #E8A56B;"></div>
      <div class="el" style="left:45px;top:36px;width:160px;height:160px;border-radius:50%;background:var(--stageDeep,#2B1C33);"></div>
      <div class="el" style="left:30px;right:30px;top:262px;height:22px;border-radius:6px;background:#5A3A2A;"></div>
      ${this.renderStrings(1.4, 50, 30, '#E9CFA0', '#FBF3E4', 'rgba(251,243,228,0.35)', 34)}
      ${this.renderPick(216, 'rgba(43,28,51,0.35)', 1.4)}
    `;
  }

  private renderElectric() {
    return html`
      ${[46, 98, 144].map(
        (top) => html`<div class="el" style="left:20px;right:20px;top:${top}px;height:2px;background:rgba(245,233,218,0.16);"></div>`
      )}
      ${[240, 274].map(
        (top) => html`<div class="el" style="left:20px;right:20px;top:${top}px;height:20px;border-radius:10px;background:var(--stageLine,#5A4266);"></div>`
      )}
      ${this.renderStrings(1, 36, 36, '#D8C3E6', '#F5E9DA', 'rgba(245,233,218,0.35)', null)}
      ${this.renderPick(196, 'rgba(20,10,30,0.4)', 1)}
    `;
  }

  private renderBass() {
    const BASS: [number, number | null][] = [[0, 1.2], [1.5, null], [0.6, null], [2.1, null]];
    return html`
      ${[60, 130].map(
        (top) => html`<div class="el" style="left:22px;right:22px;top:${top}px;height:2px;background:rgba(245,233,218,0.16);"></div>`
      )}
      <div class="el" style="left:22px;right:22px;top:248px;height:26px;border-radius:13px;background:var(--stageLine,#5A4266);"></div>
      ${BASS.map(([delay, delay2], i) => {
        const left = 50 + i * 50;
        const width = 6.5 - i * 1.1;
        return html`
          <div class="el" style="top:0;bottom:0;left:${left}px;width:20px;margin-left:-10px;
            animation:${this.a(`gBass 2.4s linear ${delay}s infinite`)};">
            <div class="el" style="inset:0;animation:${delay2 != null ? this.a(`gBass 2.4s linear ${delay2}s infinite`) : 'none'};">
              <div class="el" style="top:0;bottom:0;left:50%;width:${width}px;transform:translateX(-50%);
                background-color:#FFC2A8;background-image:repeating-linear-gradient(180deg,rgba(43,28,51,0.32) 0,rgba(43,28,51,0.32) 1px,transparent 1px,transparent 3px);
                border-radius:3px;"></div>
            </div>
          </div>
        `;
      })}
      ${BASS.flatMap(([delay, delay2], i) =>
        [delay, delay2]
          .filter((v): v is number => v != null)
          .map(
            (v) => html`
              <span
                class="el"
                style="top:186px;left:${50 + i * 50}px;width:16px;height:16px;margin-left:-8px;border-radius:50%;
                  border:2px solid #F5E9DA;opacity:0;animation:${this.a(`gTap 2.4s ease-out ${v}s infinite`)};"
              ></span>
            `
          )
      )}
    `;
  }

  private renderPiano() {
    const W: Record<number, number> = { 0: 0, 2: 0.3, 4: 0.6, 7: 0.9, 9: 1.2, 5: 1.8, 3: 2.1 };
    const B_AT = [0, 1, 3, 4, 5, 7, 8];
    const B_SEQ: Record<number, number> = { 4: 1.5 };
    const NOTE_COLORS = ['#FF7A5C', '#FFC2A8', '#B48CD9'];
    // Object.entries on an object keyed by small non-negative integers iterates
    // in ascending numeric key order, same as the source's `Object.entries(W)`.
    const sortedNoteKeys = Object.keys(W).map(Number).sort((a, b) => a - b);

    return html`
      ${sortedNoteKeys.map((k, n) => {
        const delay = W[k];
        return html`
          <span
            class="el"
            style="bottom:140px;left:${k * 25 + 12.5}px;width:11px;height:11px;margin-left:-5.5px;border-radius:50%;
              background:${NOTE_COLORS[n % 3]};opacity:0;animation:${this.a(`gRise 2.4s ease-out ${delay}s infinite`)};"
          ></span>
        `;
      })}
      <div class="el" style="left:0;right:0;bottom:0;height:134px;background:var(--stageDeep,#2B1C33);">
        ${Array.from({ length: 10 }, (_, i) => {
          const delay = W[i];
          return html`
            <div
              class="el"
              style="top:4px;left:${i * 25 + 0.5}px;width:24px;height:126px;background:#F5E9DA;border-radius:0 0 7px 7px;overflow:hidden;
                animation:${delay != null ? this.a(`gKey 2.4s ease-out ${delay}s infinite`) : 'none'};"
            >
              <div class="el" style="inset:0;background:linear-gradient(180deg,#F5E9DA 0%,#FF7A5C 100%);opacity:0;
                animation:${delay != null ? this.a(`gLit 2.4s ease-out ${delay}s infinite`) : 'none'};"></div>
            </div>
          `;
        })}
        ${B_AT.map((w, j) => {
          const delay = B_SEQ[j];
          return html`
            <div
              class="el"
              style="top:4px;left:${(w + 1) * 25 - 7}px;width:15px;height:78px;background:var(--stageKey,#3A2845);border-radius:0 0 5px 5px;
                overflow:hidden;box-shadow:0 2px 0 #1F1426;
                animation:${delay != null ? this.a(`gKey 2.4s ease-out ${delay}s infinite`) : 'none'};"
            >
              <div class="el" style="inset:0;background:#B48CD9;opacity:0;
                animation:${delay != null ? this.a(`gLit 2.4s ease-out ${delay}s infinite`) : 'none'};"></div>
            </div>
          `;
        })}
      </div>
    `;
  }

  private renderPads() {
    const PC: Record<string, string> = { r: '#FF7A5C', c: '#F5E9DA', l: '#B48CD9', m: '#7FD1C1', p: '#FFC2A8' };
    const PADS: Record<number, [string, number, number]> = {
      12: ['r', 0.6, 0],
      13: ['c', 1.2, 0.6],
      2: ['p', 0.3, 0.15],
      9: ['m', 2.4, 1.05],
      10: ['m', 2.4, 1.35],
      14: ['r', 2.4, 1.95],
      15: ['p', 2.4, 2.25],
      6: ['l', 2.4, 0.45],
      3: ['l', 2.4, 1.65],
      0: ['m', 2.4, 2.1],
    };
    return html`
      <div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;">
        <div style="display:grid;grid-template-columns:repeat(4,50px);gap:9px;">
          ${Array.from({ length: 16 }, (_, i) => {
            const q = PADS[i];
            const color = q ? PC[q[0]] : 'transparent';
            const anim = q ? this.a(`gPad ${q[1]}s ease-out ${q[2]}s infinite`) : 'none';
            return html`
              <div style="width:50px;height:50px;border-radius:50%;background:var(--stageKey,#3A2845);position:relative;">
                <div style="position:absolute;inset:0;border-radius:50%;background:${color};opacity:0;
                  box-shadow:0 0 20px ${color};animation:${anim};"></div>
              </div>
            `;
          })}
        </div>
      </div>
    `;
  }

  private renderWind() {
    return html`
      <div style="position:absolute;left:18px;top:148px;width:176px;height:26px;border-radius:13px;background:#E8C27A;
        display:flex;align-items:center;justify-content:space-around;padding:0 12px;">
        ${Array.from({ length: 6 }, (_, i) => html`
          <span style="width:12px;height:12px;border-radius:50%;background:var(--stageDeep,#2B1C33);
            animation:${this.a(`gHole 1.6s steps(1) ${(i * 0.2).toFixed(1)}s infinite`)};"></span>
        `)}
      </div>
      <div class="el" style="left:182px;top:120px;width:56px;height:82px;border-radius:0 40px 40px 0;background:#E8C27A;"></div>
      <div class="el" style="left:196px;top:136px;width:30px;height:50px;border-radius:0 26px 26px 0;background:var(--stageDeep,#2B1C33);"></div>
      ${[0, 0.4, 0.8, 1.2].map(
        (delay) => html`
          <span
            class="el"
            style="left:204px;top:142px;width:22px;height:22px;border-radius:50%;background:#F5E9DA;opacity:0;
              animation:${this.a(`gPuff 1.6s ease-out ${delay}s infinite`)};"
          ></span>
        `
      )}
    `;
  }

  private renderVoice() {
    const ARC_COLORS = ['#FF7A5C', '#FFC2A8', '#B48CD9', '#F5E9DA'];
    const bars = Array.from({ length: 22 }, (_, i) => 20 + Math.round(Math.abs(Math.sin(i * 0.9)) * 40));
    return html`
      ${[0, 0.45, 0.9, 1.35].map(
        (delay, i) => html`
          <span
            class="el"
            style="left:75px;top:70px;width:100px;height:100px;border-radius:50%;border:3px solid ${ARC_COLORS[i]};opacity:0;
              animation:${this.a(`gArc 1.8s ease-out ${delay}s infinite`)};"
          ></span>
        `
      )}
      <span class="el" style="left:103px;top:98px;width:44px;height:44px;border-radius:50%;background:var(--accent,#FF7A5C);"></span>
      <div style="position:absolute;left:22px;right:22px;bottom:40px;height:60px;display:flex;align-items:center;gap:4px;">
        ${bars.map(
          (h, i) => html`
            <span
              style="flex:1;height:${h}px;border-radius:3px;background:#B48CD9;transform-origin:50% 50%;
                animation:${this.a(`gBar ${(0.5 + (i % 5) * 0.12).toFixed(2)}s ease-in-out ${(i * 0.05).toFixed(2)}s infinite alternate`)};"
            ></span>
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
