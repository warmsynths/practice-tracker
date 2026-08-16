import { describe, it, expect } from 'vitest';
import {
  calculateInstrumentRepetition,
  calculateAllInstrumentsRepetition,
  diffCalendarDays,
  getHeatColor,
} from './repetition-utils';
import { Instrument, Session } from '../types';
import { addDays } from './date-utils';

describe('Spaced Repetition & Heat Logic (repetition-utils)', () => {
  const baseDate = new Date('2026-08-01T10:00:00Z');

  function makeSession(instrumentId: string, dayOffset: number, id = `s-${dayOffset}`): Session {
    const start = addDays(baseDate, dayOffset);
    const end = new Date(start.getTime() + 30 * 60000);
    return {
      id,
      instrumentId,
      start: start.toISOString(),
      end: end.toISOString(),
      duration: 30,
    };
  }

  it('calculates diffCalendarDays correctly', () => {
    const d0 = new Date(2026, 7, 1, 10, 0, 0); // Aug 1, 2026
    const d1 = new Date(2026, 7, 2, 14, 0, 0); // Aug 2, 2026
    const dPast = new Date(2026, 6, 30, 23, 59, 59); // Jul 30, 2026

    expect(diffCalendarDays(d1, d0)).toBe(1);
    expect(diffCalendarDays(d0, d0)).toBe(0);
    expect(diffCalendarDays(dPast, d0)).toBe(-2);
  });

  it('returns initial new state for instrument with no sessions', () => {
    const state = calculateInstrumentRepetition('guitar', [], baseDate);
    expect(state.step).toBe(0);
    expect(state.status).toBe('new');
    expect(state.intervalDays).toBe(1);
    expect(state.isDueToday).toBe(false);
    expect(state.isOverdue).toBe(false);
    expect(state.lastPracticedAt).toBeNull();
    expect(state.nextDueAt).toBeNull();
    expect(state.cycleCount).toBe(0);
  });

  it('sets Step 1 with 1-day interval after first session', () => {
    const sessions = [makeSession('guitar', 0)]; // 2026-08-01
    // Evaluate on same day (Day 0)
    const stateDay0 = calculateInstrumentRepetition('guitar', sessions, baseDate);
    expect(stateDay0.step).toBe(1);
    expect(stateDay0.intervalDays).toBe(1);
    expect(stateDay0.daysRemaining).toBe(1);
    expect(stateDay0.status).toBe('hot');
    expect(stateDay0.isDueToday).toBe(false);
    expect(stateDay0.isOverdue).toBe(false);

    // Evaluate on next day (Day 1 - 2026-08-02, when due)
    const stateDay1 = calculateInstrumentRepetition('guitar', sessions, addDays(baseDate, 1));
    expect(stateDay1.step).toBe(1);
    expect(stateDay1.intervalDays).toBe(1);
    expect(stateDay1.daysRemaining).toBe(0);
    expect(stateDay1.status).toBe('due');
    expect(stateDay1.isDueToday).toBe(true);
    expect(stateDay1.isOverdue).toBe(false);
  });

  it('progresses through 1 -> 3 -> 7 -> 14 -> 30 day ladder with timely practice', () => {
    // Step 1: Day 0 (2026-08-01) -> due Day 1 (1d)
    const s1 = makeSession('guitar', 0);
    // Step 2: Practiced on Day 1 -> due Day 1 + 3 = Day 4 (3d)
    const s2 = makeSession('guitar', 1);
    // Step 3: Practiced on Day 4 -> due Day 4 + 7 = Day 11 (7d)
    const s3 = makeSession('guitar', 4);
    // Step 4: Practiced on Day 11 -> due Day 11 + 14 = Day 25 (14d)
    const s4 = makeSession('guitar', 11);
    // Step 5: Practiced on Day 25 -> due Day 25 + 30 = Day 55 (30d)
    const s5 = makeSession('guitar', 25);

    // After s2: Step 2, interval 3
    const st2 = calculateInstrumentRepetition('guitar', [s1, s2], addDays(baseDate, 1));
    expect(st2.step).toBe(2);
    expect(st2.intervalDays).toBe(3);
    expect(st2.daysRemaining).toBe(3);

    // After s3: Step 3, interval 7
    const st3 = calculateInstrumentRepetition('guitar', [s1, s2, s3], addDays(baseDate, 4));
    expect(st3.step).toBe(3);
    expect(st3.intervalDays).toBe(7);
    expect(st3.daysRemaining).toBe(7);

    // After s4: Step 4, interval 14
    const st4 = calculateInstrumentRepetition('guitar', [s1, s2, s3, s4], addDays(baseDate, 11));
    expect(st4.step).toBe(4);
    expect(st4.intervalDays).toBe(14);
    expect(st4.daysRemaining).toBe(14);

    // After s5: Step 5, interval 30
    const st5 = calculateInstrumentRepetition('guitar', [s1, s2, s3, s4, s5], addDays(baseDate, 25));
    expect(st5.step).toBe(5);
    expect(st5.intervalDays).toBe(30);
    expect(st5.daysRemaining).toBe(30);
  });

  it('allows early practice to advance the step and keep heat alive', () => {
    const s1 = makeSession('guitar', 0); // Due Day 1
    const s2 = makeSession('guitar', 1); // Due Day 4 (3d)
    // Practiced early on Day 2 instead of waiting for Day 4
    const s3Early = makeSession('guitar', 2);

    const st = calculateInstrumentRepetition('guitar', [s1, s2, s3Early], addDays(baseDate, 2));
    expect(st.step).toBe(3);
    expect(st.intervalDays).toBe(7); // Next interval is 7d
    // Due date should be Day 2 + 7 = Day 9
    expect(st.daysRemaining).toBe(7);
  });

  it('resets back to Step 1 if an on-going interval is missed (Strict Heat Reset)', () => {
    const s1 = makeSession('guitar', 0); // Due Day 1
    const s2 = makeSession('guitar', 1); // Due Day 4 (3d)
    // Missed Day 4! Practiced late on Day 8 (> Day 4)
    const s3Late = makeSession('guitar', 8);

    const st = calculateInstrumentRepetition('guitar', [s1, s2, s3Late], addDays(baseDate, 8));
    // Lost heat: reset back to Step 1 with 1d interval
    expect(st.step).toBe(1);
    expect(st.intervalDays).toBe(1);
    // Next due is Day 8 + 1 = Day 9
    expect(st.daysRemaining).toBe(1);
  });

  it('marks instrument as overdue if current target date exceeds due date without a practice session', () => {
    const s1 = makeSession('guitar', 0); // Due Day 1
    const s2 = makeSession('guitar', 1); // Due Day 4 (3d interval)

    // Current date is Day 6 (2 days past Day 4 due date)
    const stOverdue = calculateInstrumentRepetition('guitar', [s1, s2], addDays(baseDate, 6));
    expect(stOverdue.isOverdue).toBe(true);
    expect(stOverdue.status).toBe('overdue');
    expect(stOverdue.daysRemaining).toBe(-2);
    expect(stOverdue.label).toContain('Overdue by 2d');
  });

  it('loops back to Day 1 after completing Step 5 (30-day milestone) and increments cycleCount', () => {
    const s1 = makeSession('guitar', 0); // Step 1
    const s2 = makeSession('guitar', 1); // Step 2 (3d)
    const s3 = makeSession('guitar', 4); // Step 3 (7d)
    const s4 = makeSession('guitar', 11); // Step 4 (14d)
    const s5 = makeSession('guitar', 25); // Step 5 (30d) -> Due Day 55
    const s6Loop = makeSession('guitar', 55); // Completed Step 5 on time!

    const stLoop = calculateInstrumentRepetition('guitar', [s1, s2, s3, s4, s5, s6Loop], addDays(baseDate, 55));
    expect(stLoop.cycleCount).toBe(1);
    expect(stLoop.step).toBe(1);
    expect(stLoop.intervalDays).toBe(1);
    expect(stLoop.daysRemaining).toBe(1);
  });

  it('deduplicates multiple sessions logged on the same calendar day', () => {
    const s1 = makeSession('guitar', 0, 's1');
    const s2SameDay = makeSession('guitar', 0, 's2');

    const st = calculateInstrumentRepetition('guitar', [s1, s2SameDay], baseDate);
    expect(st.step).toBe(1);
    expect(st.intervalDays).toBe(1);
  });

  it('calculates all instruments in a kit correctly', () => {
    const instruments: Instrument[] = [
      { id: 'guitar', name: 'Guitar', color: '#6B7F6E', tier: 'primary' },
      { id: 'piano', name: 'Piano', color: '#8A7B94', tier: 'primary' },
    ];
    const sessions = [makeSession('guitar', 0)];

    const map = calculateAllInstrumentsRepetition(instruments, sessions, baseDate);
    expect(map.get('guitar')?.step).toBe(1);
    expect(map.get('piano')?.step).toBe(0);
    expect(map.get('piano')?.status).toBe('new');
  });

  it('returns proper heat colors for all status states', () => {
    expect(getHeatColor('due')).toBe('#E05D44');
    expect(getHeatColor('overdue')).toBe('#D94838');
    expect(getHeatColor('hot')).toBe('#E58E38');
    expect(getHeatColor('warm')).toBe('#D4A340');
    expect(getHeatColor('cool')).toBe('#6B7F6E');
    expect(getHeatColor('cold')).toBe('#8A887E');
    expect(getHeatColor('new')).toBe('#A3A297');
  });
});
