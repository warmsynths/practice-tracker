import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { Instrument, Session } from '../../types';
import { commonStyles } from '../../styles/shared-styles';
import { fmtMin, dayStart } from '../../utils/bench-metrics';

const SWATCH_COLORS = ['#8A7B94', '#6B7F6E', '#A98F72', '#7D6E7F', '#9FAF95', '#B4543C'];

@customElement('pt-kit-view')
export class PtKitView extends LitElement {
  @property({ type: Array }) instruments: Instrument[] = [];
  @property({ type: Array }) sessions: Session[] = [];

  @state() private addName: string = '';
  @state() private addColor: string = '#8A7B94';

  static styles = [
    commonStyles,
    css`
      :host {
        display: block;
        animation: fadeOnly 200ms ease-out both;
        color: #23241F;
        font-family: 'DM Sans', system-ui, sans-serif;
      }

      .kit-wrap {
        display: flex;
        flex-direction: column;
        gap: 14px;
        width: 100%;
        max-width: 1000px;
        margin: 0 auto;
      }

      .kit-card {
        background: #FAFAF7;
        border-radius: 20px;
        padding: 22px;
        border: 1px solid #EBEAE3;
        box-shadow: 0 4px 16px rgba(35, 36, 31, 0.03);
      }

      .kit-header-row {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
        gap: 12px;
        flex-wrap: wrap;
      }

      .kit-tag {
        font-size: 9.5px;
        letter-spacing: 0.13em;
        color: #A3A297;
        font-weight: 700;
        text-transform: uppercase;
      }

      .kit-sub-tag {
        font-size: 11px;
        color: #A3A297;
      }

      .kit-rows-list {
        display: flex;
        flex-direction: column;
        margin-top: 8px;
      }

      .kit-inst-row {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 8px 16px;
        padding: 15px 0;
        border-top: 1px solid #EDECE6;
      }

      .inst-dot {
        width: 9px;
        height: 9px;
        border-radius: 50%;
        flex-shrink: 0;
      }

      .inst-name-input {
        font-family: inherit;
        font-size: 15px;
        font-weight: 700;
        color: #23241F;
        background: transparent;
        border: 1px solid transparent;
        border-radius: 8px;
        outline: none;
        flex: 1 1 140px;
        min-width: 0;
        padding: 4px 6px;
        margin: -4px -6px;
        transition: border-color 140ms ease, background-color 140ms ease;
      }

      .inst-name-input:focus {
        background: #FFFFFF;
        border-color: #23241F;
      }

      .inst-hours-col {
        width: 96px;
        flex-shrink: 0;
        font-size: 12.5px;
        font-weight: 700;
        color: #4A4945;
        font-variant-numeric: tabular-nums;
      }

      .inst-last-col {
        width: 130px;
        flex-shrink: 0;
        font-size: 12.5px;
        color: #767668;
      }

      .btn-retire {
        border: 1px solid #DDDCD4;
        border-radius: 10px;
        padding: 7px 14px;
        font-size: 11.5px;
        font-weight: 700;
        color: #767668;
        background: transparent;
        cursor: pointer;
        white-space: nowrap;
        transition: background-color 150ms ease-out, color 150ms ease-out;
      }

      .btn-retire:hover {
        background: #F0EFEA;
        color: #23241F;
      }

      .btn-restore {
        border: 1px solid #DDDCD4;
        border-radius: 10px;
        padding: 7px 14px;
        font-size: 11.5px;
        font-weight: 700;
        color: #767668;
        background: transparent;
        cursor: pointer;
        white-space: nowrap;
        transition: background-color 150ms ease-out, color 150ms ease-out;
      }

      .btn-restore:hover {
        background: #F0EFEA;
        color: #23241F;
      }

      /* Add to Kit Card */
      .add-kit-card {
        background: #FFFFFF;
        border-radius: 20px;
        padding: 20px 22px;
        border: 1px solid #EBEAE3;
        box-shadow: 0 4px 16px rgba(35, 36, 31, 0.03);
      }

      .add-kit-row {
        display: flex;
        align-items: center;
        gap: 14px;
        margin-top: 14px;
        flex-wrap: wrap;
      }

      .add-name-input {
        flex: 1 1 200px;
        min-width: 0;
        font-family: inherit;
        font-size: 14.5px;
        font-weight: 700;
        color: #23241F;
        background: #F7F6F1;
        border: 1px solid #E7E6DF;
        border-radius: 12px;
        height: 46px;
        padding: 0 14px;
        outline: none;
        transition: border-color 140ms ease;
      }

      .add-name-input:focus {
        border-color: #23241F;
      }

      .swatches-wrap {
        display: flex;
        gap: 10px;
        align-items: center;
      }

      .swatch-circle {
        width: 22px;
        height: 22px;
        border-radius: 50%;
        cursor: pointer;
        transition: transform 140ms ease, box-shadow 140ms ease;
        border: none;
      }

      .swatch-circle:hover {
        transform: scale(1.15);
      }

      .rank-controls {
        display: flex;
        align-items: center;
        gap: 6px;
      }

      .rank-badge {
        font-size: 11px;
        font-weight: 800;
        background: #E8E7E0;
        color: #4A4945;
        padding: 4px 8px;
        border-radius: 8px;
        letter-spacing: 0.02em;
        white-space: nowrap;
      }

      .btn-rank-move {
        background: #EDECE6;
        border: 1px solid #DDDCD4;
        border-radius: 6px;
        width: 26px;
        height: 26px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-size: 11px;
        color: #4A4945;
        cursor: pointer;
        transition: background-color 140ms ease;
      }

      .btn-rank-move:hover:not(:disabled) {
        background: #DEDDD6;
        color: #23241F;
      }

      .btn-rank-move:disabled {
        opacity: 0.35;
        cursor: default;
      }

      .btn-add-inst {
        background: #4F6353;
        color: #F7F6F1;
        border-radius: 12px;
        height: 46px;
        padding: 0 22px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 13.5px;
        font-weight: 700;
        cursor: pointer;
        border: none;
        white-space: nowrap;
        transition: opacity 160ms ease-out, background 150ms ease;
      }

      .btn-add-inst:hover {
        background: #435447;
      }

      /* Mobile Phone Mode (< 640px) */
      @media (max-width: 640px) {
        .kit-card {
          padding: 16px 14px;
          border-radius: 18px;
        }

        .kit-inst-row {
          padding: 12px 0;
          gap: 6px 10px;
        }

        .inst-name-input {
          font-size: 14px;
        }

        .inst-hours-col {
          width: 80px;
          font-size: 11.5px;
        }

        .inst-last-col {
          width: 90px;
          font-size: 11px;
        }

        .btn-retire, .btn-restore {
          padding: 5px 10px;
          font-size: 11px;
        }

        .add-kit-card {
          padding: 16px 14px;
          border-radius: 18px;
        }

        .add-kit-row {
          flex-direction: column;
          align-items: stretch;
          gap: 10px;
        }

        .add-name-input {
          width: 100%;
          height: 44px;
        }

        .swatches-wrap {
          justify-content: center;
        }

        .btn-add-inst {
          width: 100%;
          height: 44px;
        }
      }
    `,
  ];

  private handleAdd() {
    const trimmed = this.addName.trim();
    if (!trimmed) return;

    this.dispatchEvent(
      new CustomEvent('add-instrument', {
        detail: {
          name: trimmed,
          color: this.addColor,
          tier: 'primary',
        },
        bubbles: true,
        composed: true,
      })
    );

    this.addName = '';
  }

  private handleRename(id: string, newName: string) {
    const trimmed = newName.trim();
    if (!trimmed) return;

    const inst = this.instruments.find((i) => i.id === id);
    if (!inst || inst.name === trimmed) return;

    this.dispatchEvent(
      new CustomEvent('update-instrument', {
        detail: {
          instrument: {
            ...inst,
            name: trimmed,
          },
        },
        bubbles: true,
        composed: true,
      })
    );
  }

  private handleRetire(id: string) {
    this.dispatchEvent(
      new CustomEvent('retire-instrument', {
        detail: { id },
        bubbles: true,
        composed: true,
      })
    );
  }

  private handleRestore(id: string) {
    this.dispatchEvent(
      new CustomEvent('restore-instrument', {
        detail: { id },
        bubbles: true,
        composed: true,
      })
    );
  }

  private handleMoveRank(instId: string, direction: 'up' | 'down') {
    const active = this.instruments
      .filter((i) => !i.archived && !i.deletedAt)
      .slice()
      .sort((a, b) => {
        const rA = a.rank ?? 99;
        const rB = b.rank ?? 99;
        if (rA !== rB) return rA - rB;
        if (a.tier !== b.tier) return a.tier === 'primary' ? -1 : 1;
        return a.name.localeCompare(b.name);
      });

    const idx = active.findIndex((i) => i.id === instId);
    if (idx === -1) return;
    const targetIdx = direction === 'up' ? idx - 1 : idx + 1;
    if (targetIdx < 0 || targetIdx >= active.length) return;

    const currentInst = active[idx];
    const otherInst = active[targetIdx];

    this.dispatchEvent(
      new CustomEvent('update-instrument', {
        detail: { instrument: { ...currentInst, rank: targetIdx + 1 } },
        bubbles: true,
        composed: true,
      })
    );

    this.dispatchEvent(
      new CustomEvent('update-instrument', {
        detail: { instrument: { ...otherInst, rank: idx + 1 } },
        bubbles: true,
        composed: true,
      })
    );
  }

  render() {
    const today = dayStart(new Date());
    const dAgo = (t: Date) => Math.round((today.getTime() - dayStart(t).getTime()) / 86400000);
    const agoText = (d: number) =>
      d === 0 ? 'today' : d === 1 ? 'yesterday' : d >= 99 ? 'never played' : `${d}d ago`;

    const activeKit = this.instruments
      .filter((i) => !i.archived && !i.deletedAt)
      .slice()
      .sort((a, b) => {
        const rA = a.rank ?? 99;
        const rB = b.rank ?? 99;
        if (rA !== rB) return rA - rB;
        if (a.tier !== b.tier) return a.tier === 'primary' ? -1 : 1;
        return a.name.localeCompare(b.name);
      });

    const retiredKit = this.instruments.filter((i) => i.archived);

    const getStat = (id: string) => {
      const mine = this.sessions.filter((s) => s.instrumentId === id && !s.deletedAt);
      const totalMins = mine.reduce((sum, s) => sum + Math.max(1, s.duration), 0);
      const lastSession = mine.sort((a, b) => new Date(b.start).getTime() - new Date(a.start).getTime())[0];
      const lastDate = lastSession ? new Date(lastSession.start) : null;
      return {
        hours: totalMins > 0 ? fmtMin(totalMins) : 'nothing yet',
        last: lastDate ? `last played ${agoText(dAgo(lastDate))}` : 'never played',
      };
    };

    const hasAddName = this.addName.trim().length > 0;

    return html`
      <div class="kit-wrap">
        <!-- Active Kit Card -->
        <div class="kit-card">
          <div class="kit-header-row">
            <span class="kit-tag">Active Kit & Scientific Priority Ranks</span>
            <span class="kit-sub-tag">${activeKit.length} active · use ▲ ▼ to set priority importance</span>
          </div>

          <div class="kit-rows-list">
            ${activeKit.map((k, idx) => {
              const stat = getStat(k.id);
              return html`
                <div class="kit-inst-row">
                  <div class="rank-controls">
                    <button
                      class="btn-rank-move"
                      ?disabled=${idx === 0}
                      @click=${() => this.handleMoveRank(k.id, 'up')}
                      title="Move priority up"
                    >
                      ▲
                    </button>
                    <span class="rank-badge">#${idx + 1} Priority</span>
                    <button
                      class="btn-rank-move"
                      ?disabled=${idx === activeKit.length - 1}
                      @click=${() => this.handleMoveRank(k.id, 'down')}
                      title="Move priority down"
                    >
                      ▼
                    </button>
                  </div>
                  <span class="inst-dot" style="background: ${k.color};"></span>
                  <input
                    type="text"
                    class="inst-name-input"
                    .value=${k.name}
                    @change=${(e: Event) => this.handleRename(k.id, (e.target as HTMLInputElement).value)}
                    @keydown=${(e: KeyboardEvent) => {
                      if (e.key === 'Enter') (e.target as HTMLInputElement).blur();
                    }}
                  />
                  <div class="inst-hours-col">${stat.hours}</div>
                  <div class="inst-last-col">${stat.last}</div>
                  <button
                    class="btn-retire"
                    @click=${() => this.handleRetire(k.id)}
                    title="Retire ${k.name} (keeps practice history)"
                  >
                    Retire
                  </button>
                </div>
              `;
            })}
          </div>
        </div>

        <!-- Add to the Kit Card -->
        <div class="add-kit-card">
          <div class="kit-tag">Add to the Kit</div>
          <div class="add-kit-row">
            <input
              type="text"
              class="add-name-input"
              placeholder="Instrument name (e.g. Mandolin, Synthesizer)..."
              .value=${this.addName}
              @input=${(e: Event) => (this.addName = (e.target as HTMLInputElement).value)}
              @keydown=${(e: KeyboardEvent) => {
                if (e.key === 'Enter') this.handleAdd();
              }}
            />
            <div class="swatches-wrap">
              ${SWATCH_COLORS.map(
                (c) => html`
                  <button
                    class="swatch-circle"
                    style="background: ${c}; box-shadow: ${c === this.addColor
                      ? '0 0 0 2px #FAFAF7, 0 0 0 4px #23241F'
                      : 'none'};"
                    @click=${() => (this.addColor = c)}
                    title="Choose ${c}"
                  ></button>
                `
              )}
            </div>
            <button
              class="btn-add-inst"
              style="opacity: ${hasAddName ? '1' : '0.45'};"
              @click=${this.handleAdd}
            >
              Add
            </button>
          </div>
        </div>

        <!-- Retired Kit Card -->
        ${retiredKit.length > 0
          ? html`
              <div class="kit-card">
                <div class="kit-header-row">
                  <span class="kit-tag">Retired · History Kept</span>
                  <span class="kit-sub-tag">${retiredKit.length} archived</span>
                </div>

                <div class="kit-rows-list">
                  ${retiredKit.map((k) => {
                    const stat = getStat(k.id);
                    return html`
                      <div class="kit-inst-row">
                        <span class="inst-dot" style="background: ${k.color}; opacity: 0.4;"></span>
                        <div style="flex: 1 1 140px; min-width: 0; font-size: 15px; font-weight: 700; color: #A3A297;">
                          ${k.name}
                        </div>
                        <div class="inst-hours-col" style="color: #A3A297;">${stat.hours}</div>
                        <div class="inst-last-col" style="color: #B0AFA4;">${stat.last}</div>
                        <button
                          class="btn-restore"
                          @click=${() => this.handleRestore(k.id)}
                          title="Bring ${k.name} back to active kit"
                        >
                          Bring back
                        </button>
                      </div>
                    `;
                  })}
                </div>
              </div>
            `
          : ''}
      </div>
    `;
  }
}
