const STORAGE_KEY = 'pt-background';
const WORKER_URL = import.meta.env.VITE_SYNC_URL as string | undefined;

interface CachedBackground {
  url: string;
  date: string;
}

function todayDateString(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function getCachedBackground(): CachedBackground | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as CachedBackground;
    if (parsed.url && parsed.date) return parsed;
    return null;
  } catch {
    return null;
  }
}

function setCachedBackground(url: string, date: string): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ url, date }));
}

function preloadImage(url: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = () => reject(new Error('Image failed to load'));
    img.src = url;
  });
}

export async function getBackgroundUrl(): Promise<string | null> {
  const today = todayDateString();
  const cached = getCachedBackground();

  // Return cached URL if it's from today
  if (cached && cached.date === today) {
    try {
      await preloadImage(cached.url);
      return cached.url;
    } catch {
      // Image URL might be stale / broken, try fetching fresh
    }
  }

  // Fetch fresh URL from worker
  if (!WORKER_URL) return null;

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000);

    const res = await fetch(`${WORKER_URL.replace(/\/+$/, '')}/api/background`, {
      signal: controller.signal,
    });
    clearTimeout(timeoutId);

    if (!res.ok) return null;

    const data = (await res.json()) as { url?: string };
    if (!data.url) return null;

    // Preload the image before returning
    await preloadImage(data.url);

    // Only update cache after successful preload
    setCachedBackground(data.url, today);

    return data.url;
  } catch {
    // Network error or timeout — return null, don't corrupt cache
    return null;
  }
}
