import { Store } from './store';
import type { PracticeEntry } from './types';

export const practiceStore = new Store<PracticeEntry>('ledger.practice.v1');

/** YYYY-MM-DD for a Date, in local time. */
export function toDateKey(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

export function todayKey(): string {
  return toDateKey(new Date());
}

export function entriesByDate(entries: PracticeEntry[]): Map<string, PracticeEntry[]> {
  const map = new Map<string, PracticeEntry[]>();
  for (const entry of entries) {
    const list = map.get(entry.date) ?? [];
    list.push(entry);
    map.set(entry.date, list);
  }
  return map;
}

export interface StreakInfo {
  current: number;
  longest: number;
  practicedToday: boolean;
}

/**
 * Chain streak: counts consecutive practiced calendar days ending today
 * (or yesterday, so today not yet logged doesn't zero out the chain).
 */
export function computeStreak(entries: PracticeEntry[]): StreakInfo {
  const days = entriesByDate(entries);
  const practicedToday = days.has(todayKey());

  let current = 0;
  const cursor = new Date();
  if (!practicedToday) {
    // Give credit through yesterday — the chain isn't broken until a full day is missed.
    cursor.setDate(cursor.getDate() - 1);
  }
  while (days.has(toDateKey(cursor))) {
    current += 1;
    cursor.setDate(cursor.getDate() - 1);
  }

  // Longest streak across all history.
  const allDates = [...days.keys()].sort();
  let longest = 0;
  let run = 0;
  let prev: Date | null = null;
  for (const key of allDates) {
    const [y, m, d] = key.split('-').map(Number);
    const date = new Date(y, m - 1, d);
    if (prev) {
      const diffDays = Math.round((date.getTime() - prev.getTime()) / 86400000);
      run = diffDays === 1 ? run + 1 : 1;
    } else {
      run = 1;
    }
    longest = Math.max(longest, run);
    prev = date;
  }
  longest = Math.max(longest, current);

  return { current, longest, practicedToday };
}
