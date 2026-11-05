import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

interface ConfettiPiece {
  left: number;
  delay: number;
  duration: number;
  size: number;
  color: string;
}

const CONFETTI_COLORS = ['var(--accent)', 'var(--chart)', '#9BD49B', '#FFC2A8', 'var(--ink)'];

function makeConfetti(count: number): ConfettiPiece[] {
  // Deterministic pseudo-random spread so re-renders don't jitter.
  return Array.from({ length: count }, (_, i) => {
    const seed = Math.sin(i * 12.9898) * 43758.5453;
    const frac = seed - Math.floor(seed);
    return {
      left: (i / count) * 100 + (frac * 6 - 3),
      delay: frac * 1.2,
      duration: 1.8 + frac * 1.4,
      size: 6 + Math.round(frac * 6),
      color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
    };
  });
}

const PIECES = makeConfetti(26);

/** Goal-reached celebration: falling confetti behind a center stamp badge, ~4.2s. */
@customElement('pt-celebration-overlay')
export class PtCelebrationOverlay extends LitElement {
  @property({ type: Number }) goalMinutes: number = 420;

  static styles = css`
    :host {
      position: fixed;
      inset: 0;
      z-index: 70;
      pointer-events: none;
      display: block;
    }

    .piece {
      position: absolute;
      top: 0;
      border-radius: 2px;
      animation-name: fall;
      animation-timing-function: ease-in;
      animation-fill-mode: both;
    }

    @keyframes fall {
      0% { transform: translateY(-80px) rotate(0deg); opacity: 0; }
      6% { opacity: 1; }
      100% { transform: translateY(110vh) rotate(560deg); opacity: 1; }
    }

    .stamp-wrap {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .stamp {
      width: 160px;
      height: 160px;
      border-radius: 50%;
      background: var(--accent);
      box-shadow: 0 0 0 12px rgba(255, 122, 92, 0.2);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2px;
      animation: stampOnce 4.2s cubic-bezier(0.2, 0.8, 0.2, 1) both;
    }

    @keyframes stampOnce {
      0% { transform: scale(1.9) rotate(-14deg); opacity: 0; }
      12% { transform: scale(1) rotate(-6deg); opacity: 1; }
      85% { transform: scale(1) rotate(-6deg); opacity: 1; }
      100% { transform: scale(0.9) rotate(-6deg); opacity: 0; }
    }

    .stamp-title {
      font-family: 'Gabarito', sans-serif;
      font-weight: 900;
      font-size: 46px;
      color: var(--bg);
    }

    .stamp-sub {
      font-family: 'Manrope', sans-serif;
      font-weight: 700;
      font-size: 13px;
      color: var(--bg);
      opacity: 0.8;
    }

    @media (prefers-reduced-motion: reduce) {
      * {
        animation: none !important;
      }
    }
  `;

  render() {
    return html`
      ${PIECES.map(
        (p) => html`
          <div
            class="piece"
            style="left:${p.left}%;width:${p.size}px;height:${p.size * 0.4}px;background:${p.color};
              animation-duration:${p.duration}s;animation-delay:${p.delay}s;"
          ></div>
        `
      )}
      <div class="stamp-wrap">
        <div class="stamp">
          <div class="stamp-title">Goal</div>
          <div class="stamp-sub">${this.goalMinutes} min this week</div>
        </div>
      </div>
    `;
  }
}
