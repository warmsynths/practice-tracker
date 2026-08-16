import { Session } from '../types';

export function fmtDuration(min: number): string {
  if (min <= 0) return '0′';
  if (min < 60) return `${min}′`;
  const h = Math.floor(min / 60);
  const m = min % 60;
  return `${h}h${m ? ` ${m}m` : ''}`;
}

export function formatTimer(elapsedMs: number): string {
  const totalSec = Math.max(0, Math.floor(elapsedMs / 1000));
  const hours = Math.floor(totalSec / 3600);
  const minutes = Math.floor((totalSec % 3600) / 60);
  const seconds = totalSec % 60;

  const mm = String(minutes).padStart(2, '0');
  const ss = String(seconds).padStart(2, '0');

  if (hours > 0) {
    return `${hours}:${mm}:${ss}`;
  }
  return `${minutes}:${ss}`;
}

export function startOfDay(d: Date | string | number): Date {
  const x = new Date(d);
  x.setHours(0, 0, 0, 0);
  return x;
}

export function addDays(d: Date, n: number): Date {
  const x = new Date(d);
  x.setDate(x.getDate() + n);
  return x;
}

export function dateKey(d: Date): string {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

export function isSameDay(d1: Date, d2: Date): boolean {
  return (
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate()
  );
}

export function calculateStreak(sessions: Session[]): { currentStreak: number; consistency30d: number } {
  const today = startOfDay(new Date());
  const byDay: Record<string, boolean> = {};

  sessions.forEach((s) => {
    const key = dateKey(startOfDay(new Date(s.start)));
    byDay[key] = true;
  });

  const hasToday = !!byDay[dateKey(today)];
  let cursor = hasToday ? today : addDays(today, -1);
  let currentStreak = 0;

  while (byDay[dateKey(cursor)]) {
    currentStreak++;
    cursor = addDays(cursor, -1);
  }

  let practicedDaysCount = 0;
  for (let i = 0; i < 30; i++) {
    const d = addDays(today, -i);
    if (byDay[dateKey(d)]) {
      practicedDaysCount++;
    }
  }

  const consistency30d = Math.round((practicedDaysCount / 30) * 100);

  return { currentStreak, consistency30d };
}

export function formatRelativeTime(isoString: string | null | undefined): string {
  if (!isoString) return 'Never';
  const timestamp = new Date(isoString).getTime();
  if (isNaN(timestamp)) return 'Never';

  const elapsedSec = Math.floor((Date.now() - timestamp) / 1000);
  if (elapsedSec < 10) return 'Just now';
  if (elapsedSec < 60) return `${elapsedSec}s ago`;
  const elapsedMin = Math.floor(elapsedSec / 60);
  if (elapsedMin < 60) return `${elapsedMin}m ago`;
  const elapsedHours = Math.floor(elapsedMin / 60);
  if (elapsedHours < 24) return `${elapsedHours}h ago`;
  const elapsedDays = Math.floor(elapsedHours / 24);
  if (elapsedDays === 1) return 'Yesterday';
  return `${elapsedDays}d ago`;
}
