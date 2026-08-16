import { practiceStore } from '../store/practice-store';

export class SyncCoordinator {
  private isRunning = false;
  private heartbeatTimer: ReturnType<typeof setInterval> | null = null;
  private lastTriggeredAt = 0;
  private debounceMs: number;
  private heartbeatIntervalMs: number;

  private onVisibilityChangeHandler = () => this.handleVisibilityChange();
  private onFocusHandler = () => this.handleWindowFocus();
  private onOnlineHandler = () => this.handleOnline();
  private onOfflineHandler = () => this.handleOffline();

  constructor(heartbeatIntervalMs = 60000, debounceMs = 2000) {
    this.heartbeatIntervalMs = heartbeatIntervalMs;
    this.debounceMs = debounceMs;
  }

  public start(): void {
    if (this.isRunning) return;
    this.isRunning = true;

    if (typeof document !== 'undefined') {
      document.addEventListener('visibilitychange', this.onVisibilityChangeHandler);
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('focus', this.onFocusHandler);
      window.addEventListener('online', this.onOnlineHandler);
      window.addEventListener('offline', this.onOfflineHandler);
    }

    this.startHeartbeat();

    // Trigger initial background sync on startup if configured
    this.triggerSync();
  }

  public stop(): void {
    if (!this.isRunning) return;
    this.isRunning = false;

    if (typeof document !== 'undefined') {
      document.removeEventListener('visibilitychange', this.onVisibilityChangeHandler);
    }

    if (typeof window !== 'undefined') {
      window.removeEventListener('focus', this.onFocusHandler);
      window.removeEventListener('online', this.onOnlineHandler);
      window.removeEventListener('offline', this.onOfflineHandler);
    }

    this.stopHeartbeat();
  }

  public triggerSync(force = false): void {
    const now = Date.now();
    if (!force && now - this.lastTriggeredAt < this.debounceMs) {
      return;
    }
    this.lastTriggeredAt = now;

    if (practiceStore.isCloudSyncConfigured()) {
      practiceStore.triggerBackgroundSync();
    }
  }

  private handleVisibilityChange(): void {
    if (typeof document !== 'undefined' && document.visibilityState === 'visible') {
      this.triggerSync();
    }
  }

  private handleWindowFocus(): void {
    this.triggerSync();
  }

  private handleOnline(): void {
    this.triggerSync(true);
  }

  private handleOffline(): void {
    this.triggerSync();
  }

  private startHeartbeat(): void {
    this.stopHeartbeat();
    this.heartbeatTimer = setInterval(() => {
      if (typeof document === 'undefined' || document.visibilityState === 'visible') {
        this.triggerSync();
      }
    }, this.heartbeatIntervalMs);
  }

  private stopHeartbeat(): void {
    if (this.heartbeatTimer !== null) {
      clearInterval(this.heartbeatTimer);
      this.heartbeatTimer = null;
    }
  }
}

export const syncCoordinator = new SyncCoordinator();
