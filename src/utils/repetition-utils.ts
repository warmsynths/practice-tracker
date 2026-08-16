import { Instrument, Session, InstrumentRepetitionState, InstrumentHeatStatus } from '../types';
import { addDays, dateKey, startOfDay } from './date-utils';

export const REPETITION_INTERVALS = [1, 3, 7, 14, 30] as const;
export const MAX_REPETITION_STEPS = 5;

/**
 * Calculates difference in whole calendar days between two dates (target - base).
 * Positive if target is in the future, 0 if same day, negative if target is in the past.
 */
export function diffCalendarDays(target: Date, base: Date): number {
  const t = startOfDay(target).getTime();
  const b = startOfDay(base).getTime();
  return Math.round((t - b) / (1000 * 60 * 60 * 24));
}

/**
 * Computes the 1-3-7-14-30 spaced repetition schedule & heat state for a single instrument
 * derived deterministically from its session history.
 */
export function calculateInstrumentRepetition(
  instrumentId: string,
  sessions: Session[],
  targetDate: Date = new Date()
): InstrumentRepetitionState {
  const today = startOfDay(targetDate);

  // Filter valid, non-deleted sessions for this instrument
  const instSessions = sessions
    .filter((s) => s.instrumentId === instrumentId && !s.deletedAt)
    .sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime());

  if (instSessions.length === 0) {
    return {
      instrumentId,
      step: 0,
      maxSteps: MAX_REPETITION_STEPS,
      intervalDays: REPETITION_INTERVALS[0],
      lastPracticedAt: null,
      nextDueAt: null,
      daysRemaining: 0,
      status: 'new',
      isDueToday: false,
      isOverdue: false,
      cycleCount: 0,
      label: 'New · Ready for Step 1',
    };
  }

  // Deduplicate sessions occurring on the same calendar day into unique practice days
  const practiceDays: Date[] = [];
  const seenDays = new Set<string>();

  for (const s of instSessions) {
    const sDate = startOfDay(new Date(s.start));
    const k = dateKey(sDate);
    if (!seenDays.has(k)) {
      seenDays.add(k);
      practiceDays.push(sDate);
    }
  }

  let currentStep = 0;
  let targetDueDate: Date | null = null;
  let cycleCount = 0;

  for (let i = 0; i < practiceDays.length; i++) {
    const sessionDay = practiceDays[i];

    if (i === 0) {
      // First session: initializes Step 1 with a 1-day interval
      currentStep = 1;
      const interval = REPETITION_INTERVALS[0]; // 1 day
      targetDueDate = addDays(sessionDay, interval);
    } else {
      // Check if session occurred on or before scheduled due date
      const isOntime = targetDueDate ? sessionDay.getTime() <= targetDueDate.getTime() : true;

      if (isOntime) {
        if (currentStep >= MAX_REPETITION_STEPS) {
          // Completed full 30-day cycle! Loop back to Step 1
          cycleCount++;
          currentStep = 1;
          const interval = REPETITION_INTERVALS[0]; // 1 day
          targetDueDate = addDays(sessionDay, interval);
        } else {
          // Advance to next step
          currentStep++;
          const interval = REPETITION_INTERVALS[currentStep - 1];
          targetDueDate = addDays(sessionDay, interval);
        }
      } else {
        // Missed milestone: lost heat, resets back to Step 1
        currentStep = 1;
        const interval = REPETITION_INTERVALS[0]; // 1 day
        targetDueDate = addDays(sessionDay, interval);
      }
    }
  }

  const lastPracticedIso = instSessions[instSessions.length - 1].start;
  const nextDueIso = targetDueDate ? targetDueDate.toISOString() : null;
  const currentInterval = REPETITION_INTERVALS[Math.max(0, Math.min(currentStep - 1, MAX_REPETITION_STEPS - 1))];

  const daysRemaining = targetDueDate ? diffCalendarDays(targetDueDate, today) : 0;
  const isOverdue = daysRemaining < 0;
  const isDueToday = daysRemaining === 0;

  let status: InstrumentHeatStatus = 'cold';
  if (isOverdue) {
    status = 'overdue';
  } else if (isDueToday) {
    status = 'due';
  } else if (daysRemaining === 1) {
    status = 'hot';
  } else if (daysRemaining <= 3) {
    status = 'warm';
  } else if (daysRemaining <= 7) {
    status = 'cool';
  } else {
    status = 'cold';
  }

  let label: string;
  if (isOverdue) {
    const overdueDays = Math.abs(daysRemaining);
    label = `Overdue by ${overdueDays}d (was Step ${currentStep}: ${currentInterval}d)`;
  } else if (isDueToday) {
    label = `Due today · Step ${currentStep}/${MAX_REPETITION_STEPS} (${currentInterval}d)`;
  } else if (daysRemaining === 1) {
    label = `Due tomorrow · Step ${currentStep}/${MAX_REPETITION_STEPS} (${currentInterval}d)`;
  } else {
    label = `Step ${currentStep}/${MAX_REPETITION_STEPS} · Due in ${daysRemaining}d (${currentInterval}d)`;
  }

  return {
    instrumentId,
    step: currentStep,
    maxSteps: MAX_REPETITION_STEPS,
    intervalDays: currentInterval,
    lastPracticedAt: lastPracticedIso,
    nextDueAt: nextDueIso,
    daysRemaining,
    status,
    isDueToday,
    isOverdue,
    cycleCount,
    label,
  };
}

/**
 * Computes repetition state for all instruments in a kit.
 */
export function calculateAllInstrumentsRepetition(
  instruments: Instrument[],
  sessions: Session[],
  targetDate: Date = new Date()
): Map<string, InstrumentRepetitionState> {
  const map = new Map<string, InstrumentRepetitionState>();
  for (const inst of instruments) {
    map.set(inst.id, calculateInstrumentRepetition(inst.id, sessions, targetDate));
  }
  return map;
}

/**
 * Returns a heat color accent for rendering badges or status dots.
 */
export function getHeatColor(status: InstrumentHeatStatus): string {
  switch (status) {
    case 'due':
      return '#E05D44'; // Bright warm flame
    case 'overdue':
      return '#D94838'; // Alert red
    case 'hot':
      return '#E58E38'; // Orange warm
    case 'warm':
      return '#D4A340'; // Amber gold
    case 'cool':
      return '#6B7F6E'; // Forest sage / in-rhythm
    case 'cold':
      return '#8A887E'; // Muted slate
    case 'new':
    default:
      return '#A3A297'; // Neutral
  }
}
