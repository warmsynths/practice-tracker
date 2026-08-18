import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

// We need to mock import.meta.env before importing the module
vi.stubEnv('VITE_SYNC_URL', 'https://practice-tracker-sync.example.workers.dev');

const { getBackgroundUrl } = await import('./background-service');

function todayDateString(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

describe('background-service', () => {
  let mockStorage: Record<string, string>;

  beforeEach(() => {
    mockStorage = {};
    vi.restoreAllMocks();

    vi.stubGlobal('localStorage', {
      getItem: vi.fn((key: string) => mockStorage[key] ?? null),
      setItem: vi.fn((key: string, value: string) => {
        mockStorage[key] = value;
      }),
      removeItem: vi.fn((key: string) => {
        delete mockStorage[key];
      }),
    });

    // Mock Image constructor for preloading
    vi.stubGlobal('Image', class MockImage {
      onload: (() => void) | null = null;
      onerror: (() => void) | null = null;
      private _src = '';
      get src() { return this._src; }
      set src(value: string) {
        this._src = value;
        // Simulate successful image load
        setTimeout(() => this.onload?.(), 0);
      }
    });
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('returns cached URL when localStorage has today\'s date, without calling fetch', async () => {
    const today = todayDateString();
    const cachedUrl = 'https://images.unsplash.com/cached-photo';
    mockStorage['pt-background'] = JSON.stringify({ url: cachedUrl, date: today });

    const fetchSpy = vi.fn();
    vi.stubGlobal('fetch', fetchSpy);

    const result = await getBackgroundUrl();

    expect(result).toBe(cachedUrl);
    expect(fetchSpy).not.toHaveBeenCalled();
  });

  it('fetches from worker and updates localStorage when cache is stale', async () => {
    // Stale cache from yesterday
    mockStorage['pt-background'] = JSON.stringify({
      url: 'https://images.unsplash.com/old-photo',
      date: '2020-01-01',
    });

    const freshUrl = 'https://images.unsplash.com/fresh-photo';
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue(
      new Response(JSON.stringify({ url: freshUrl }), { status: 200 })
    ));

    const result = await getBackgroundUrl();

    expect(result).toBe(freshUrl);
    // Verify localStorage was updated
    const stored = JSON.parse(mockStorage['pt-background']);
    expect(stored.url).toBe(freshUrl);
    expect(stored.date).toBe(todayDateString());
  });

  it('fetches from worker when localStorage is empty', async () => {
    const freshUrl = 'https://images.unsplash.com/new-photo';
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue(
      new Response(JSON.stringify({ url: freshUrl }), { status: 200 })
    ));

    const result = await getBackgroundUrl();

    expect(result).toBe(freshUrl);
    const stored = JSON.parse(mockStorage['pt-background']);
    expect(stored.url).toBe(freshUrl);
  });

  it('returns null on fetch failure without corrupting the cache', async () => {
    // Cache from yesterday — should not be overwritten on failure
    const oldCache = JSON.stringify({
      url: 'https://images.unsplash.com/old-photo',
      date: '2020-01-01',
    });
    mockStorage['pt-background'] = oldCache;

    vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new Error('Network error')));

    // Mock Image to fail for the stale cached URL too
    vi.stubGlobal('Image', class MockImage {
      onload: (() => void) | null = null;
      onerror: (() => void) | null = null;
      private _src = '';
      get src() { return this._src; }
      set src(value: string) {
        this._src = value;
        setTimeout(() => this.onerror?.(), 0);
      }
    });

    const result = await getBackgroundUrl();

    expect(result).toBeNull();
    // Cache should not be corrupted — still has the old value
    expect(mockStorage['pt-background']).toBe(oldCache);
  });

  it('returns null when worker returns non-200 status', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue(
      new Response('Service unavailable', { status: 503 })
    ));

    const result = await getBackgroundUrl();

    expect(result).toBeNull();
  });
});
