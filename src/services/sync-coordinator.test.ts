import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { SyncCoordinator } from './sync-coordinator';
import { practiceStore } from '../store/practice-store';

class MockEventTarget {
  private listeners: Record<string, Function[]> = {};

  addEventListener(type: string, listener: Function) {
    if (!this.listeners[type]) this.listeners[type] = [];
    this.listeners[type].push(listener);
  }

  removeEventListener(type: string, listener: Function) {
    if (!this.listeners[type]) return;
    this.listeners[type] = this.listeners[type].filter((l) => l !== listener);
  }

  dispatchEvent(event: { type: string }) {
    const list = this.listeners[event.type] || [];
    list.forEach((fn) => fn(event));
    return true;
  }
}

describe('SyncCoordinator Lifecycle & Heartbeat', () => {
  let coordinator: SyncCoordinator;
  let mockWindow: any;
  let mockDocument: any;
  let syncSpy: any;

  beforeEach(() => {
    vi.useFakeTimers();
    vi.restoreAllMocks();

    mockWindow = new MockEventTarget();
    mockDocument = new MockEventTarget();
    mockDocument.visibilityState = 'visible';

    // Assign to global scope for testing in node env
    (globalThis as any).window = mockWindow;
    (globalThis as any).document = mockDocument;
    (globalThis as any).Event = class {
      constructor(public type: string) {}
    };

    vi.spyOn(practiceStore, 'isCloudSyncConfigured').mockReturnValue(true);
    syncSpy = vi.spyOn(practiceStore, 'triggerBackgroundSync').mockImplementation(() => {});
  });

  afterEach(() => {
    coordinator?.stop();
    vi.useRealTimers();
    delete (globalThis as any).window;
    delete (globalThis as any).document;
    delete (globalThis as any).Event;
  });

  it('triggers initial sync on start()', () => {
    coordinator = new SyncCoordinator(60000, 100);
    coordinator.start();

    expect(syncSpy).toHaveBeenCalledTimes(1);
  });

  it('triggers sync when document becomes visible', () => {
    coordinator = new SyncCoordinator(60000, 100);
    coordinator.start();
    syncSpy.mockClear();

    // Advance past debounce window
    vi.advanceTimersByTime(200);

    mockDocument.visibilityState = 'visible';
    mockDocument.dispatchEvent(new (globalThis as any).Event('visibilitychange'));

    expect(syncSpy).toHaveBeenCalledTimes(1);
  });

  it('triggers sync on window focus', () => {
    coordinator = new SyncCoordinator(60000, 100);
    coordinator.start();
    syncSpy.mockClear();

    vi.advanceTimersByTime(200);

    mockWindow.dispatchEvent(new (globalThis as any).Event('focus'));

    expect(syncSpy).toHaveBeenCalledTimes(1);
  });

  it('triggers sync when network comes online', () => {
    coordinator = new SyncCoordinator(60000, 100);
    coordinator.start();
    syncSpy.mockClear();

    vi.advanceTimersByTime(200);

    mockWindow.dispatchEvent(new (globalThis as any).Event('online'));

    expect(syncSpy).toHaveBeenCalledTimes(1);
  });

  it('triggers periodic sync on 60-second heartbeat', () => {
    coordinator = new SyncCoordinator(60000, 100);
    coordinator.start();
    syncSpy.mockClear();

    // Advance past debounce window
    vi.advanceTimersByTime(200);

    // Advance 60 seconds
    vi.advanceTimersByTime(60000);
    expect(syncSpy).toHaveBeenCalledTimes(1);

    // Advance another 60 seconds
    vi.advanceTimersByTime(60000);
    expect(syncSpy).toHaveBeenCalledTimes(2);
  });

  it('debounces rapid sync triggers within debounce window', () => {
    coordinator = new SyncCoordinator(60000, 1000); // 1000ms debounce
    coordinator.start();
    syncSpy.mockClear();

    // Advance past initial start debounce window
    vi.advanceTimersByTime(1100);

    coordinator.triggerSync();
    coordinator.triggerSync();
    coordinator.triggerSync();

    // Only first trigger went through
    expect(syncSpy).toHaveBeenCalledTimes(1);

    // Advance past debounce window
    vi.advanceTimersByTime(1100);
    coordinator.triggerSync();

    expect(syncSpy).toHaveBeenCalledTimes(2);
  });

  it('stops listening and clears heartbeat on stop()', () => {
    coordinator = new SyncCoordinator(60000, 100);
    coordinator.start();
    coordinator.stop();
    syncSpy.mockClear();

    mockWindow.dispatchEvent(new (globalThis as any).Event('focus'));
    mockDocument.dispatchEvent(new (globalThis as any).Event('visibilitychange'));
    vi.advanceTimersByTime(120000);

    expect(syncSpy).not.toHaveBeenCalled();
  });
});
