import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { AppSettings } from '../../types';
import { commonStyles } from '../../styles/shared-styles';

@customElement('pt-settings-modal')
export class PtSettingsModal extends LitElement {
  static styles = [
    commonStyles,
    css`
      .setting-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 12px 0;
        border-bottom: 1px solid #E1E1DB;
      }
      .setting-title {
        font-size: 14px;
        font-weight: 700;
      }
      .setting-desc {
        font-size: 11px;
        color: #767668;
        margin-top: 2px;
      }
      .switch {
        position: relative;
        display: inline-block;
        width: 44px;
        height: 24px;
      }
      .switch input {
        opacity: 0;
        width: 0;
        height: 0;
      }
      .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #E1E1DB;
        transition: 0.2s;
        border-radius: 24px;
      }
      .slider:before {
        position: absolute;
        content: "";
        height: 18px;
        width: 18px;
        left: 3px;
        bottom: 3px;
        background-color: white;
        transition: 0.2s;
        border-radius: 50%;
      }
      input:checked + .slider {
        background-color: #23241F;
      }
      input:checked + .slider:before {
        transform: translateX(20px);
      }
      .section-heading {
        font-size: 11px;
        font-weight: 700;
        color: #767668;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        margin-top: 18px;
        margin-bottom: 8px;
      }
      .btn-grid {
        display: flex;
        flex-direction: column;
        gap: 8px;
        margin-top: 8px;
      }
      .file-hidden {
        display: none;
      }
    `,
  ];

  @property({ type: Object }) settings: AppSettings = { soundEnabled: true, hapticsEnabled: true };
  @property({ type: Boolean }) open = false;

  private handleSoundToggle(e: Event) {
    const checked = (e.target as HTMLInputElement).checked;
    this.dispatchEvent(
      new CustomEvent('update-settings', {
        detail: { soundEnabled: checked },
        bubbles: true,
        composed: true,
      })
    );
  }

  private handleHapticsToggle(e: Event) {
    const checked = (e.target as HTMLInputElement).checked;
    this.dispatchEvent(
      new CustomEvent('update-settings', {
        detail: { hapticsEnabled: checked },
        bubbles: true,
        composed: true,
      })
    );
  }

  private triggerExport() {
    this.dispatchEvent(new CustomEvent('export-backup', { bubbles: true, composed: true }));
  }

  private triggerImport() {
    const fileInput = this.shadowRoot?.querySelector('#import-file') as HTMLInputElement;
    fileInput?.click();
  }

  private handleFileChange(e: Event) {
    const input = e.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (re) => {
      const content = re.target?.result as string;
      if (content) {
        this.dispatchEvent(
          new CustomEvent('import-backup', {
            detail: { jsonString: content },
            bubbles: true,
            composed: true,
          })
        );
      }
      input.value = '';
    };
    reader.readAsText(file);
  }

  private triggerDemoData() {
    if (confirm('Load demo practice history? This will add ~33 days of sample sessions to preview charts.')) {
      this.dispatchEvent(new CustomEvent('load-demo-data', { bubbles: true, composed: true }));
      this.close();
    }
  }

  private triggerClearData() {
    if (confirm('Reset all practice history? This will delete all sessions and cannot be undone.')) {
      this.dispatchEvent(new CustomEvent('clear-all-data', { bubbles: true, composed: true }));
      this.close();
    }
  }

  private close() {
    this.dispatchEvent(new CustomEvent('close-modal', { bubbles: true, composed: true }));
  }

  render() {
    if (!this.open) return html``;

    return html`
      <div class="modal-overlay" @click=${(e: Event) => e.target === e.currentTarget && this.close()}>
        <div class="modal-card">
          <div class="modal-title">
            <span>Settings & Backups</span>
            <button class="close-btn" @click=${this.close}>&times;</button>
          </div>

          <div class="section-heading">Feedback & Sound</div>
          <div class="setting-item">
            <div>
              <div class="setting-title">Audio Chimes</div>
              <div class="setting-desc">Acoustic tones on start and completion</div>
            </div>
            <label class="switch">
              <input
                type="checkbox"
                .checked=${this.settings.soundEnabled}
                @change=${this.handleSoundToggle}
              />
              <span class="slider"></span>
            </label>
          </div>

          <div class="setting-item">
            <div>
              <div class="setting-title">Haptic Vibration</div>
              <div class="setting-desc">Tactile mobile feedback</div>
            </div>
            <label class="switch">
              <input
                type="checkbox"
                .checked=${this.settings.hapticsEnabled}
                @change=${this.handleHapticsToggle}
              />
              <span class="slider"></span>
            </label>
          </div>

          <div class="section-heading">Data Portability</div>
          <div class="btn-grid">
            <button class="btn btn-secondary" @click=${this.triggerExport}>
              Export Practice Data (JSON)
            </button>
            <button class="btn btn-secondary" @click=${this.triggerImport}>
              Import Practice Data (JSON)
            </button>
            <input
              type="file"
              id="import-file"
              class="file-hidden"
              accept=".json,application/json"
              @change=${this.handleFileChange}
            />
          </div>

          <div class="section-heading">Demo & Clean Slate</div>
          <div class="btn-grid">
            <button class="btn btn-secondary" @click=${this.triggerDemoData}>
              Load Sample Practice Data
            </button>
            <button class="btn btn-danger" @click=${this.triggerClearData}>
              Clear All Data (Start Fresh)
            </button>
          </div>
        </div>
      </div>
    `;
  }
}
