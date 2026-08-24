import { describe, it, expect } from 'vitest';
import { calculateBenchStats, dayStart, addDays, fmtMin } from './bench-metrics';
import { Instrument, Session } from '../types';

const TEST_INSTRUMENTS: Instrument[] = [
  { id: 'guitar', name: 'Guitar', color: '#6B7F6E', tier: 'primary' },
  { id: 'piano', name: 'Piano', color: '#8A7B94', tier: 'primary' },
  { id: 'bass', name: 'Bass', color: '#7D6E7F', tier: 'secondary' },
];

describe('Bench Metrics Calculations', () => {
  it('handles empty sessions gracefully with starter metrics', () => {
    const now = new Date(2026, 7, 23, 14, 0, 0);
    const stats = calculateBenchStats([], TEST_INSTRUMENTS, { now });

    expect(stats.hasData).toBe(false);
    expect(stats.streak).toBe(0);
    expect(stats.lifeHours).toBe('0h');
    expect(stats.quip).toBe('time to start a run');
    expect(stats.oneAway.length).toBeGreaterThan(0);
    expect(stats.drift.id).toBeDefined();
    expect(stats.heatMarked.length).toBeGreaterThan(0);
    expect(stats.dow.length).toBe(7);
  });

  it('calculates streaks correctly across consecutive days', () => {
    const now = new Date(2026, 7, 23, 14, 0, 0); // Sunday
    const today = dayStart(now);

    const sessions: Session[] = [
      {
        id: 's1',
        instrumentId: 'guitar',
        start: today.toISOString(),
        end: new Date(today.getTime() + 30 * 60000).toISOString(),
        duration: 30,
      },
      {
        id: 's2',
        instrumentId: 'piano',
        start: addDays(today, -1).toISOString(),
        end: new Date(addDays(today, -1).getTime() + 45 * 60000).toISOString(),
        duration: 45,
      },
      {
        id: 's3',
        instrumentId: 'bass',
        start: addDays(today, -2).toISOString(),
        end: new Date(addDays(today, -2).getTime() + 20 * 60000).toISOString(),
        duration: 20,
      },
    ];

    const stats = calculateBenchStats(sessions, TEST_INSTRUMENTS, { now });
    expect(stats.streak).toBe(3);
    expect(stats.bestStreak).toBe(3);
  });

  it('identifies the coldest instrument for Play This Next (Drift)', () => {
    const now = new Date(2026, 7, 23, 14, 0, 0);
    const today = dayStart(now);

    const sessions: Session[] = [
      {
        id: 's1',
        instrumentId: 'guitar',
        start: today.toISOString(),
        end: new Date(today.getTime() + 30 * 60000).toISOString(),
        duration: 30,
      },
      {
        id: 's2',
        instrumentId: 'piano',
        start: addDays(today, -2).toISOString(),
        end: new Date(addDays(today, -2).getTime() + 30 * 60000).toISOString(),
        duration: 30,
      },
      // Bass is untouched
    ];

    const stats = calculateBenchStats(sessions, TEST_INSTRUMENTS, { now });
    expect(stats.drift.id).toBe('bass');
    expect(stats.drift.name).toBe('Bass');
    expect(stats.drift.days).toBeGreaterThanOrEqual(99);
  });

  it('computes banked hours and milestone progress correctly', () => {
    const now = new Date(2026, 7, 23, 14, 0, 0);
    const today = dayStart(now);

    const sessions: Session[] = [
      {
        id: 's1',
        instrumentId: 'guitar',
        start: today.toISOString(),
        end: new Date(today.getTime() + 1200 * 60000).toISOString(), // 20h
        duration: 1200,
      },
    ];

    const stats = calculateBenchStats(sessions, TEST_INSTRUMENTS, { now });
    expect(stats.lifeHours).toBe('20h');
    expect(stats.nextMile).toBe('25h');
    expect(stats.mileGap).toBe('5h');
  });

  it('formats duration labels accurately', () => {
    expect(fmtMin(0)).toBe('0m');
    expect(fmtMin(25)).toBe('25m');
    expect(fmtMin(60)).toBe('1h');
    expect(fmtMin(90)).toBe('1h 30m');
    expect(fmtMin(125)).toBe('2h 5m');
  });
});
