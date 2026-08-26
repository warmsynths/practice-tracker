import {
  Instrument,
  Session,
  RangeScope,
  MilestoneItem,
  HeatmapCell,
  OneAwayItem,
  DriftMetric,
  RecordsItem,
  WeekdayFingerprintItem,
  SessionLengthBucket,
  NoteThemeItem,
  PracticeRecommendation,
} from '../types';
import { calculatePracticeRecommendations } from './recommendation-engine';

export const BENCH_ICONS = {
  clock: 'M6.4 3.4h11.2M6.4 20.6h11.2M8.2 3.4v3.3c0 2.1 3.8 3.7 3.8 5.3s-3.8 3.2-3.8 5.3v3.3M15.8 3.4v3.3c0 2.1-3.8 3.7-3.8 5.3s3.8 3.2 3.8 5.3v3.3',
  note: 'M12 2.9a5.4 5.4 0 1 1 0 10.8 5.4 5.4 0 0 1 0-10.8M9.3 13.1 7.4 21.1 12 18.5l4.6 2.6-1.9-8',
  bolt: 'M12 2.8c3.8 3.4 6 6 6 9.4a6 6 0 0 1-12 0c0-2 .9-3.6 2.3-5.2M12 20.2a2.7 2.7 0 0 0 2.7-2.7c0-1.7-1.4-2.7-2.7-4.6-1.3 1.9-2.7 2.9-2.7 4.6a2.7 2.7 0 0 0 2.7 2.7z',
  cal: 'M12 3 20 5.7v6.5c0 4.3-3.3 7.4-8 8.8-4.7-1.4-8-4.5-8-8.8V5.7zM8.6 12.1l2.6 2.6 4.4-4.8',
  grid: 'M3.3 7.8 7 11.6 12 4.2l5 7.4 3.7-3.8-1.7 10.9H5zM5.4 18.7h13.2',
  star: 'M11.2 3c.9 4.4 1.9 5.4 6.3 6.3-4.4.9-5.4 1.9-6.3 6.3-.9-4.4-1.9-5.4-6.3-6.3C9.3 8.4 10.3 7.4 11.2 3M18.4 15.5c.4 1.9.8 2.3 2.7 2.7-1.9.4-2.3.8-2.7 2.7-.4-1.9-.8-2.3-2.7-2.7 1.9-.4 2.3-.8 2.7-2.7',
};

export function dayStart(d: Date | number | string): Date {
  const x = new Date(d);
  x.setHours(0, 0, 0, 0);
  return x;
}

export function addDays(d: Date, n: number): Date {
  const x = new Date(d);
  x.setDate(x.getDate() + n);
  return x;
}

export function mondayOf(d: Date | number | string): Date {
  const x = dayStart(d);
  return addDays(x, -((x.getDay() + 6) % 7));
}

export function fmtMin(m: number): string {
  m = Math.round(m);
  if (m <= 0) return '0m';
  if (m < 60) return m + 'm';
  const h = Math.floor(m / 60);
  const rem = m % 60;
  return h + 'h' + (rem ? ' ' + rem + 'm' : '');
}

export function med(arr: number[]): number {
  if (!arr.length) return 0;
  const s = arr.slice().sort((a, b) => a - b);
  return s.length % 2 ? s[(s.length - 1) / 2] : (s[s.length / 2 - 1] + s[s.length / 2]) / 2;
}

export function hourLabel(h: number): string {
  if (h === 0 || h === 24) return '12am';
  if (h === 12) return '12pm';
  return h < 12 ? `${h}am` : `${h - 12}pm`;
}

export interface BenchDataCalculations {
  streak: number;
  bestStreak: number;
  toBeat: number;
  quip: string;
  last14: { h: number; bg: string; label: string; labelColor: string; isToday: boolean }[];
  lifeHours: string;
  lifeHoursRaw: number;
  lifeSub: string;
  nextMile: string;
  mileGap: string;
  milePct: number;
  ringDash: string;
  capX: string;
  capY: string;
  oneAway: OneAwayItem[];
  drift: DriftMetric;
  pick: { id: string; name: string; color: string; reason: string };
  recommendation: PracticeRecommendation;
  heatMarked: HeatmapCell[];
  heatMonths: { label: string }[];
  heatSince: string;
  milestones: MilestoneItem[];
  msCount: string;
  weekTotal: string;
  goalLabel: string;
  paceDelta: string;
  paceColor: string;
  medianPts: string;
  actualPts: string;
  dow: WeekdayFingerprintItem[];
  dowBestLabel: string;
  dowWorstLabel: string;
  records: RecordsItem[];
  freshLine: string;
  freshCount: string;
  hist: SessionLengthBucket[];
  modeLabel: string;
  dayCurve: string;
  dayArea: string;
  bandX: string;
  bandW: string;
  nowLeft: string;
  nowTop: string;
  windowLabel: string;
  windowShare: string;
  dayTicks: { label: string }[];
  themes: NoteThemeItem[];
  buckets: {
    label: string;
    labelColor: string;
    labelWeight: number;
    segments: { h: string; color: string; instId: string }[];
  }[];
  peakLabel: string;
  chartTitle: string;
  scopeTotal: string;
  scopeCaption: string;
  scopeDelta: string;
  scopeDeltaColor: string;
  instRows: {
    id: string;
    name: string;
    color: string;
    minsLabel: string;
    shareLabel: string;
    sharePct: number;
    spark: string;
    opacity: number;
    isMuted: boolean;
  }[];
  hasData: boolean;
}

export function calculateBenchStats(
  sessions: Session[],
  instruments: Instrument[],
  options: {
    weeklyGoalMinutes?: number;
    range?: RangeScope;
    mutedInstruments?: Record<string, boolean>;
    now?: Date;
  } = {}
): BenchDataCalculations {
  const now = options.now || new Date();
  const today = dayStart(now);
  const goal = options.weeklyGoalMinutes || 420;
  const range = options.range || 'month';
  const muted = options.mutedInstruments || {};

  const activeInsts = instruments.filter((i) => !i.archived);
  const instMap = new Map<string, Instrument>();
  instruments.forEach((i) => instMap.set(i.id, i));
  const inst = (id: string): Instrument =>
    instMap.get(id) || { id, name: 'Instrument', color: '#6B7F6E', tier: 'primary' };

  // Parse session dates
  const parsedSessions = sessions
    .filter((s) => !s.deletedAt)
    .map((s) => ({
      ...s,
      t: new Date(s.start),
      min: Math.max(1, s.duration),
    }))
    .sort((a, b) => a.t.getTime() - b.t.getTime());

  const hasData = parsedSessions.length > 0;

  // Group by day
  const byDay: Record<number, number> = {};
  const domByDay: Record<number, Record<string, number>> = {};
  parsedSessions.forEach((s) => {
    const k = dayStart(s.t).getTime();
    byDay[k] = (byDay[k] || 0) + s.min;
    if (!domByDay[k]) domByDay[k] = {};
    domByDay[k][s.instrumentId] = (domByDay[k][s.instrumentId] || 0) + s.min;
  });

  // Current Streak
  let streak = 0;
  const todayKey = today.getTime();
  const hasToday = !!byDay[todayKey];
  const startDayOffset = hasToday ? 0 : 1;

  for (let i = startDayOffset; i < 400; i++) {
    const d = addDays(today, -i).getTime();
    if (byDay[d]) {
      streak++;
    } else {
      break;
    }
  }

  // Best Streak in history
  let bestStreak = 0;
  let runLen = 0;
  for (let i = 365; i >= 0; i--) {
    const d = addDays(today, -i).getTime();
    if (byDay[d]) {
      runLen++;
      bestStreak = Math.max(bestStreak, runLen);
    } else {
      runLen = 0;
    }
  }
  bestStreak = Math.max(bestStreak, streak);
  const toBeat = Math.max(1, bestStreak - streak + 1);

  const quip =
    streak <= 0
      ? 'time to start a run'
      : streak === 1
      ? 'day one, showing up'
      : streak >= bestStreak && bestStreak >= 3
      ? 'your longest run yet'
      : streak >= 30
      ? 'a month unbroken'
      : streak >= 14
      ? 'a fortnight of showing up'
      : toBeat <= 2 && streak >= 3
      ? toBeat === 1
        ? 'one more matches your best'
        : `${toBeat} more beats your best`
      : streak % 2 === 1
      ? 'nobody is watching, keep going'
      : 'stay steady on the fretboard';

  // Last 14 days mini bars
  const dayMax = Math.max(60, ...Object.values(byDay));
  const DOW_SHORT = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const last14 = [];
  for (let i = 13; i >= 0; i--) {
    const d = addDays(today, -i);
    const v = byDay[d.getTime()] || 0;
    last14.push({
      h: v ? Math.max(10, Math.round((v / dayMax) * 100)) : 6,
      bg: v ? (i === 0 ? '#4F6353' : '#9FAF95') : '#E1E1DB',
      label: DOW_SHORT[d.getDay()],
      labelColor: i === 0 ? '#23241F' : '#B0AFA5',
      isToday: i === 0,
    });
  }

  // Banked hours + Milestone progress ring
  const lifeMin = parsedSessions.reduce((a, s) => a + s.min, 0);
  const lifeH = lifeMin / 60;
  const mileStep = lifeH < 25 ? 25 : lifeH < 50 ? 25 : lifeH < 100 ? 50 : 100;
  const nextMile = (Math.floor(lifeH / mileStep) + 1) * mileStep;
  const prevMile = Math.max(0, nextMile - mileStep);
  const mileGapMin = Math.max(0, Math.round(nextMile * 60 - lifeMin));
  const mileProgressMin = lifeMin - prevMile * 60;
  const milePct = Math.max(0.02, Math.min(0.98, mileProgressMin / (mileStep * 60)));

  const R = 52;
  const C = 2 * Math.PI * R;
  const ringDash = `${(C * milePct).toFixed(1)} ${C.toFixed(1)}`;
  const capAngle = (milePct * 360 - 90) * (Math.PI / 180);
  const capX = (59 + R * Math.cos(capAngle)).toFixed(1);
  const capY = (59 + R * Math.sin(capAngle)).toFixed(1);
  // Recent 6 weeks (42 days)
  const cutoff42 = addDays(today, -42);
  const recent42 = parsedSessions.filter((s) => s.t >= cutoff42);
  const totalRecent = recent42.reduce((a, s) => a + s.min, 0) || 1;

  const agoText = (d: number) =>
    d === 0 ? 'today' : d === 1 ? 'yesterday' : d >= 99 ? 'never' : `${d}d ago`;

  const recommendation = calculatePracticeRecommendations(activeInsts, sessions, today);
  const topPick = recommendation.topPick;

  const pick = topPick
    ? {
        id: topPick.instrumentId,
        name: topPick.name,
        color: topPick.color,
        reason: topPick.reason,
      }
    : {
        id: activeInsts[0]?.id || 'guitar',
        name: activeInsts[0]?.name || 'Guitar',
        color: activeInsts[0]?.color || '#6B7F6E',
        reason: 'Start a session to build your practice streak.',
      };

  const pickDays = topPick ? topPick.daysSince : 99;
  const playedDates = new Set(
    parsedSessions
      .filter((s) => s.instrumentId === pick.id)
      .map((s) => Math.round((today.getTime() - dayStart(s.t).getTime()) / 86400000))
  );

  const driftTicks = Array.from({ length: 14 }, (_, i) => {
    const dAgo = 13 - i;
    const hit = playedDates.has(dAgo);
    return {
      h: hit ? '30px' : dAgo < pickDays ? '9px' : '16px',
      bg: hit ? pick.color : 'rgba(242,241,236,0.18)',
    };
  });

  const drift: DriftMetric = {
    id: pick.id,
    name: pick.name,
    color: pick.color,
    days: pickDays >= 999 ? 99 : pickDays,
    num: pickDays >= 999 ? '—' : String(pickDays),
    unit: pickDays >= 999 ? 'not yet logged' : pickDays === 1 ? 'day since' : 'days since',
    ago: pickDays >= 999 ? 'never logged' : pickDays === 0 ? 'last played today' : pickDays === 1 ? 'last played yesterday' : `last played ${pickDays}d ago`,
    ticks: driftTicks,
  };

  const targetInst = activeInsts.find((i) => i.id === pick.id) || activeInsts[0] || { id: 'guitar', name: 'Guitar', color: '#6B7F6E', tier: 'primary' as const };
  const coldest = {
    ...targetInst,
    days: pickDays >= 999 ? 99 : pickDays,
  };
  const coldestList = [coldest];

  // Weekly Median pace
  const thisMon = mondayOf(today);
  const weekMins = (mon: Date) => {
    const c = [0, 0, 0, 0, 0, 0, 0];
    parsedSessions.forEach((s) => {
      const idx = Math.floor((dayStart(s.t).getTime() - mon.getTime()) / 86400000);
      if (idx >= 0 && idx < 7) c[idx] += s.min;
    });
    return c;
  };
  const cum = (arr: number[]) => {
    let t = 0;
    return arr.map((v) => (t += v));
  };
  const wkCum = cum(weekMins(thisMon));
  const histWeeks: number[][] = [];
  for (let i = 1; i <= 8; i++) {
    histWeeks.push(cum(weekMins(addDays(thisMon, -7 * i))));
  }
  const ghost = [0, 1, 2, 3, 4, 5, 6].map((i) =>
    histWeeks.length ? med(histWeeks.map((h) => h[i])) : (i + 1) * 30
  );
  const dIdx = Math.min(6, Math.max(0, Math.floor((today.getTime() - thisMon.getTime()) / 86400000)));
  const paceGap = Math.round(wkCum[dIdx] - ghost[dIdx]);
  const yMax = Math.max(goal, ghost[6], wkCum[6], 60) * 1.08;
  const line = (arr: number[], n: number, w: number, h: number) =>
    arr
      .slice(0, n + 1)
      .map(
        (v, i) =>
          `${((i / 6) * (w - 12) + 6).toFixed(1)},${(h - 8 - (v / yMax) * (h - 18)).toFixed(1)}`
      )
      .join(' ');

  // One Session Away suggestions
  const cands: { mins: number; big: string; text: string; on: Instrument }[] = [];
  if (mileGapMin > 0 && mileGapMin <= 120) {
    cands.push({
      mins: mileGapMin,
      big: fmtMin(mileGapMin),
      text: `to your ${nextMile}th hour of practice, all instruments counted`,
      on: coldest,
    });
  }
  if (!byDay[todayKey]) {
    if (streak + 1 > bestStreak && bestStreak >= 2) {
      cands.push({
        mins: 15,
        big: '15m',
        text: `sets a new longest streak — ${streak + 1} days, further than you have ever gone`,
        on: coldest,
      });
    } else {
      cands.push({
        mins: 15,
        big: '15m',
        text: `keeps the streak alive at ${streak + 1} days · ${Math.max(1, bestStreak - streak)} from your record`,
        on: coldest,
      });
    }
  }
  const behindMins = Math.round(ghost[dIdx] - wkCum[dIdx]);
  if (behindMins > 0) {
    cands.push({
      mins: behindMins,
      big: fmtMin(behindMins),
      text: 'puts this week back ahead of your median pace',
      on: coldestList[1] || coldest,
    });
  }
  const goalGapMins = Math.round(goal - wkCum[6]);
  if (goalGapMins > 0 && goalGapMins <= 150) {
    cands.push({
      mins: goalGapMins,
      big: fmtMin(goalGapMins),
      text: `and the weekly goal of ${fmtMin(goal)} is done`,
      on: activeInsts[0] || coldest,
    });
  }
  cands.push({
    mins: 20,
    big: '20m',
    text: `ends the ${coldest.days >= 99 ? 'silence' : `${coldest.days}-day gap`} on this instrument`,
    on: coldest,
  });

  const oneAway: OneAwayItem[] = cands
    .sort((a, b) => a.mins - b.mins)
    .slice(0, 3)
    .map((c) => ({
      big: c.big,
      text: c.text,
      instId: c.on.id,
      instName: c.on.name,
      instColor: c.on.color,
      mins: c.mins,
    }));

  // Weekday Fingerprint (Averaged Week)
  const dowSum = [0, 0, 0, 0, 0, 0, 0];
  const dowDays = [0, 0, 0, 0, 0, 0, 0];
  for (let i = 0; i < 84; i++) {
    const d = addDays(today, -i);
    const dayIdx = (d.getDay() + 6) % 7;
    dowSum[dayIdx] += byDay[d.getTime()] || 0;
    dowDays[dayIdx]++;
  }
  const dowAvg = dowSum.map((v, i) => v / (dowDays[i] || 1));
  const dowMax = Math.max(1, ...dowAvg);
  const dowBest = dowAvg.indexOf(Math.max(...dowAvg));
  const dowWorst = dowAvg.indexOf(Math.min(...dowAvg));
  const DOW_NAMES = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const dow: WeekdayFingerprintItem[] = dowAvg.map((v, i) => ({
    label: DOW_NAMES[i][0],
    val: fmtMin(v),
    h: Math.max(8, Math.round((v / dowMax) * 100)),
    bg: i === dowBest ? '#4F6353' : i === dowWorst ? '#D9C7C0' : '#9FAF95',
    strong: i === (today.getDay() + 6) % 7 ? 700 : 500,
  }));

  // Session Length Distribution
  const lenBuckets = [
    { label: '<25m', min: 0, max: 25 },
    { label: '25–40', min: 25, max: 40 },
    { label: '40–55', min: 40, max: 55 },
    { label: '55–75', min: 55, max: 75 },
    { label: '75m+', min: 75, max: 9999 },
  ];
  const bCounts = lenBuckets.map(
    (b) => recent42.filter((s) => s.min >= b.min && s.min < b.max).length
  );
  const bMax = Math.max(1, ...bCounts);
  const modeIdx = bCounts.indexOf(Math.max(...bCounts));
  const hist: SessionLengthBucket[] = bCounts.map((c, i) => ({
    label: lenBuckets[i].label,
    n: c,
    h: Math.max(6, Math.round((c / bMax) * 100)),
    bg: i === modeIdx ? '#4F6353' : '#C6CFBF',
  }));

  // Records Shelf
  const longest = parsedSessions.slice().sort((a, b) => b.min - a.min)[0] || {
    min: 0,
    t: now,
    instrumentId: 'guitar',
  };
  const weekTotals: { m: Date; v: number }[] = [];
  for (let i = 0; i < 16; i++) {
    const m = addDays(thisMon, -7 * i);
    weekTotals.push({ m, v: weekMins(m).reduce((a, b) => a + b, 0) });
  }
  const bigWeek = weekTotals.slice().sort((a, b) => b.v - a.v)[0] || { m: thisMon, v: 0 };
  const bigDayKey = Object.keys(byDay).sort(
    (a, b) => (byDay[Number(b)] || 0) - (byDay[Number(a)] || 0)
  )[0];
  const bigDayDate = bigDayKey ? new Date(Number(bigDayKey)) : today;

  const records: RecordsItem[] = [
    {
      k: 'LONGEST SESSION',
      v: fmtMin(longest.min),
      sub: `${inst(longest.instrumentId).name} · ${longest.t.toLocaleDateString(undefined, {
        day: 'numeric',
        month: 'short',
      })}`,
      fresh: Math.round((today.getTime() - dayStart(longest.t).getTime()) / 86400000) <= 21,
    },
    {
      k: 'BIGGEST WEEK',
      v: fmtMin(bigWeek.v),
      sub: `week of ${bigWeek.m.toLocaleDateString(undefined, {
        day: 'numeric',
        month: 'short',
      })}`,
      fresh: Math.round((today.getTime() - dayStart(bigWeek.m).getTime()) / 86400000) <= 21,
    },
    {
      k: 'LONGEST STREAK',
      v: `${bestStreak} ${bestStreak === 1 ? 'day' : 'days'}`,
      sub: streak >= bestStreak && streak >= 3 ? 'you are on it now' : `${streak}d in currently`,
      fresh: streak >= bestStreak && streak >= 3,
    },
    {
      k: 'BIGGEST DAY',
      v: fmtMin(byDay[Number(bigDayKey)] || 0),
      sub: bigDayDate.toLocaleDateString(undefined, { day: 'numeric', month: 'short' }),
      fresh: Math.round((today.getTime() - dayStart(bigDayDate).getTime()) / 86400000) <= 21,
    },
  ];

  const freshRecords = records.filter((r) => r.fresh);
  const freshCount = freshRecords.length
    ? `${freshRecords.length} set recently`
    : 'nothing new in three weeks';
  const freshLine =
    freshRecords.length === 0
      ? 'No reading has moved in three weeks. One long sitting would change that.'
      : freshRecords[0].k === 'LONGEST STREAK'
      ? `Your longest streak is the one you are standing in right now — ${bestStreak} days and counting.`
      : `New ${freshRecords[0].k.toLowerCase()}: ${freshRecords[0].v}, ${freshRecords[0].sub.toLowerCase()}. That one is yours to beat now.`;

  // 24-Hour Rhythm Curve
  const hours = Array.from({ length: 24 }, () => ({ min: 0, by: {} as Record<string, number> }));
  recent42.forEach((s) => {
    const h = s.t.getHours();
    hours[h].min += s.min;
    hours[h].by[s.instrumentId] = (hours[h].by[s.instrumentId] || 0) + s.min;
  });
  const hMax = Math.max(1, ...hours.map((h) => h.min));
  let bestSum = 0;
  let bestStart = 18;
  for (let i = 0; i < 24; i++) {
    const sum = hours[i].min + hours[(i + 1) % 24].min + hours[(i + 2) % 24].min;
    if (sum > bestSum) {
      bestSum = sum;
      bestStart = i;
    }
  }

  const rotH = Array.from({ length: 25 }, (_, i) => hours[(i + 4) % 24].min);
  const CW = 720;
  const CH = 124;
  const px = (i: number) => (i / 24) * CW;
  const py = (v: number) => CH - 14 - (v / hMax) * (CH - 34);
  let dayCurve = `M ${px(0).toFixed(1)} ${py(rotH[0]).toFixed(1)}`;
  for (let i = 1; i < rotH.length; i++) {
    const mx = (px(i - 1) + px(i)) / 2;
    const my = (py(rotH[i - 1]) + py(rotH[i])) / 2;
    dayCurve += ` Q ${px(i - 1).toFixed(1)} ${py(rotH[i - 1]).toFixed(1)} ${mx.toFixed(1)} ${my.toFixed(1)}`;
  }
  dayCurve += ` L ${px(24).toFixed(1)} ${py(rotH[24]).toFixed(1)}`;
  const dayArea = `${dayCurve} L ${CW} ${CH} L 0 ${CH} Z`;

  const nowI = ((now.getHours() + now.getMinutes() / 60 - 4 + 24) % 24);
  const nowV = rotH[Math.floor(nowI)] + (rotH[Math.ceil(nowI)] - rotH[Math.floor(nowI)]) * (nowI % 1);
  const bandIdx = (bestStart - 4 + 24) % 24;

  // Notes Themes
  const themeMap: Record<string, { n: number; min: number; last: Date; instId: string }> = {};
  recent42.forEach((s) => {
    if (!s.notes || !s.notes.trim()) return;
    const key = s.notes.trim();
    if (!themeMap[key]) {
      themeMap[key] = { n: 0, min: 0, last: s.t, instId: s.instrumentId };
    }
    themeMap[key].n++;
    themeMap[key].min += s.min;
    if (s.t > themeMap[key].last) themeMap[key].last = s.t;
  });

  const themes: NoteThemeItem[] = Object.keys(themeMap)
    .map((k) => ({ k, ...themeMap[k] }))
    .sort((a, b) => b.min - a.min)
    .slice(0, 7)
    .map((t) => ({
      name: t.k,
      mins: fmtMin(t.min),
      color: inst(t.instId).color,
      ago: agoText(Math.round((today.getTime() - dayStart(t.last).getTime()) / 86400000)),
      size: (12 + Math.min(7, t.min / 50)).toFixed(1) + 'px',
    }));

  // Milestones Engine
  const MS: MilestoneItem[] = [];
  const crossAt = (subset: typeof parsedSessions, targetHours: number) => {
    let a = 0;
    for (const s of subset) {
      a += s.min;
      if (a / 60 >= targetHours) return s.t;
    }
    return null;
  };
  const clearedText = (when: Date) => {
    const n = Math.round((today.getTime() - dayStart(when).getTime()) / 86400000);
    if (n <= 1) return 'cleared today';
    if (n <= 30) return `cleared ${n} days ago`;
    if (n <= 70) return 'cleared about two months ago';
    return `cleared ${Math.round(n / 30)} months ago`;
  };

  const C_HOURS = '#8A7B94';
  const C_STREAK = '#4F6353';
  const C_OTHER = '#A8814F';
  const C_BEST = '#B4543C';

  const addEarnedMs = (
    accent: string,
    icon: string,
    kind: string,
    title: string,
    detail: string,
    when: Date | null
  ) =>
    MS.push({
      id: 'm' + MS.length,
      done: true,
      accent,
      icon,
      kind,
      title,
      detail,
      when: when ? when.getTime() : 0,
      dateLabel: when
        ? when.toLocaleDateString(undefined, { day: 'numeric', month: 'short', year: '2-digit' })
        : '',
      isNew: !!when && Math.round((today.getTime() - dayStart(when).getTime()) / 86400000) <= 21,
    });

  const addLockedMs = (
    accent: string,
    icon: string,
    kind: string,
    title: string,
    cur: number,
    target: number,
    detail: string
  ) =>
    MS.push({
      id: 'm' + MS.length,
      done: false,
      accent,
      icon,
      kind,
      title,
      detail,
      when: 0,
      dateLabel: '',
      isNew: false,
      pct: Math.max(2, Math.min(98, Math.round((cur / target) * 100))),
      pctLabel: `${Math.min(99, Math.round((cur / target) * 100))}%`,
    });

  // 1. Banked hours milestones
  const bankedTiers = [25, 50, 100, 250, 500, 1000];
  const doneBanked = bankedTiers.filter((n) => lifeH >= n);
  if (doneBanked.length) {
    const highest = doneBanked[doneBanked.length - 1];
    const when = crossAt(parsedSessions, highest);
    addEarnedMs(
      C_HOURS,
      BENCH_ICONS.clock,
      'BANKED HOURS',
      `${highest} hours banked`,
      when ? clearedText(when) : 'cleared',
      when
    );
  }
  const nextBanked = bankedTiers.find((n) => lifeH < n);
  if (nextBanked) {
    const leftH = nextBanked - lifeH;
    addLockedMs(
      C_HOURS,
      BENCH_ICONS.clock,
      'BANKED HOURS',
      `${nextBanked} hours banked`,
      lifeH,
      nextBanked,
      leftH < 1 ? `${Math.round(leftH * 60)}m to go` : `${Math.ceil(leftH)}h to go`
    );
  }

  // 2. Per-instrument milestones
  activeInsts.forEach((i) => {
    const mine = parsedSessions.filter((s) => s.instrumentId === i.id);
    const instH = mine.reduce((a, s) => a + s.min, 0) / 60;
    const instTiers = [10, 25, 50, 100, 200];
    const doneInst = instTiers.filter((n) => instH >= n);
    if (doneInst.length) {
      const topInst = doneInst[doneInst.length - 1];
      const when = crossAt(mine, topInst);
      addEarnedMs(
        i.color,
        BENCH_ICONS.note,
        i.name.toUpperCase(),
        `${topInst} hours on ${i.name.toLowerCase()}`,
        when ? clearedText(when) : 'cleared',
        when
      );
    }
    const nextInst = instTiers.find((n) => instH < n);
    if (nextInst) {
      const leftH = nextInst - instH;
      addLockedMs(
        i.color,
        BENCH_ICONS.note,
        i.name.toUpperCase(),
        `${nextInst} hours on ${i.name.toLowerCase()}`,
        instH,
        nextInst,
        leftH < 1 ? `${Math.round(leftH * 60)}m to go` : `${Math.ceil(leftH)}h to go`
      );
    }
  });

  // 3. Streak milestones
  const streakTiers = [7, 14, 30, 60, 100];
  const doneStreak = streakTiers.filter((n) => bestStreak >= n);
  if (doneStreak.length) {
    const topStreak = doneStreak[doneStreak.length - 1];
    addEarnedMs(
      C_STREAK,
      BENCH_ICONS.bolt,
      'STREAK',
      `${topStreak} days unbroken`,
      streak >= bestStreak ? 'still running today' : 'your longest run so far',
      streak >= bestStreak ? today : null
    );
  }
  const nextStreak = streakTiers.find((n) => bestStreak < n);
  if (nextStreak) {
    addLockedMs(
      C_STREAK,
      BENCH_ICONS.bolt,
      'STREAK',
      `${nextStreak} days unbroken`,
      streak,
      nextStreak,
      `${nextStreak - streak} more days without a gap`
    );
  }

  // 4. Consistency: a calendar month with no gaps
  const monthGaps: Record<string, { miss: number; seen: number; d: Date }> = {};
  for (let i = 0; i < 200; i++) {
    const d = addDays(today, -i);
    const k = `${d.getFullYear()}-${d.getMonth()}`;
    const m = monthGaps[k] || (monthGaps[k] = { miss: 0, seen: 0, d });
    m.seen++;
    if (!byDay[d.getTime()]) m.miss++;
  }
  const fullMonths = Object.values(monthGaps).filter((m) => m.miss === 0 && m.seen >= 28);
  if (fullMonths.length) {
    addEarnedMs(
      C_OTHER,
      BENCH_ICONS.cal,
      'NO GAPS',
      `${fullMonths.length} ${fullMonths.length === 1 ? 'month' : 'months'} with no gaps`,
      'not a single day missed',
      fullMonths[0].d
    );
  } else {
    const tm = monthGaps[`${today.getFullYear()}-${today.getMonth()}`];
    if (tm) {
      addLockedMs(
        C_OTHER,
        BENCH_ICONS.cal,
        'NO GAPS',
        'A month with no gaps',
        tm.seen - tm.miss,
        tm.seen,
        `${tm.miss} ${tm.miss === 1 ? 'day' : 'days'} missed this month`
      );
    }
  }

  // 4. Whole kit inside one week
  let breadthWeek: Date | null = null;
  for (let w = 0; w < 26 && !breadthWeek; w++) {
    const m = addDays(thisMon, -7 * w);
    const set = new Set<string>();
    parsedSessions.forEach((s) => {
      if (s.t >= m && s.t < addDays(m, 7)) set.add(s.instrumentId);
    });
    if (set.size >= activeInsts.length && activeInsts.length >= 2) breadthWeek = m;
  }
  if (breadthWeek) {
    addEarnedMs(
      C_BEST,
      BENCH_ICONS.grid,
      'WHOLE KIT',
      'Every instrument in one week',
      `all ${activeInsts.length} of them, that week`,
      breadthWeek
    );
  } else if (activeInsts.length >= 2) {
    const curWeekSet = new Set<string>();
    parsedSessions.forEach((s) => {
      if (s.t >= thisMon) curWeekSet.add(s.instrumentId);
    });
    addLockedMs(
      C_BEST,
      BENCH_ICONS.grid,
      'WHOLE KIT',
      'Every instrument in one week',
      curWeekSet.size,
      activeInsts.length,
      `${activeInsts.length - curWeekSet.size} still untouched this week`
    );
  }

  // 26-Week Column-Major Heatmap
  const firstSession = parsedSessions[0];
  const heatStart = mondayOf(firstSession ? firstSession.t : addDays(today, -182));
  const heatWeeks = Math.max(12, Math.min(36, Math.round((thisMon.getTime() - heatStart.getTime()) / (7 * 86400000)) + 1));
  const heatMax = Math.max(45, ...Object.values(byDay));

  const heatCells: HeatmapCell[] = [];
  for (let w = 0; w < heatWeeks; w++) {
    for (let d = 0; d < 7; d++) {
      const cellDate = addDays(heatStart, w * 7 + d);
      const k = cellDate.getTime();
      const v = byDay[k] || 0;
      const domId = v && domByDay[k]
        ? Object.keys(domByDay[k]).sort((a, b) => domByDay[k][b] - domByDay[k][a])[0]
        : null;

      const isFuture = cellDate > today;
      const isTodayCell = k === todayKey;

      heatCells.push({
        date: cellDate,
        bg: isFuture ? 'transparent' : v && domId ? inst(domId).color : '#E3E2DB',
        op: v ? (0.34 + 0.66 * Math.min(1, v / heatMax)).toFixed(2) : '1',
        ring: isTodayCell ? '1.5px solid #4F6353' : '1.5px solid transparent',
        anim: isTodayCell ? 'breathe 5.2s ease-in-out infinite' : 'none',
        mark: false,
        icon: '',
        markStroke: 'none',
        cursor: 'default',
      });
    }
  }

  // Stamp earned milestones onto calendar
  const msDone = MS.filter((m) => m.done && m.when > 0).sort((a, b) => b.when - a.when);
  msDone.forEach((m) => {
    const idx = Math.round((dayStart(new Date(m.when)).getTime() - heatStart.getTime()) / 86400000);
    const cell = heatCells[idx];
    if (cell && !cell.mark) {
      cell.mark = true;
      cell.bg = m.accent;
      cell.op = '1';
      cell.icon = m.icon;
      cell.markStroke = '#FAFAF7';
      cell.ring = `1.5px solid ${m.accent}88`;
      cell.anim = m.isNew ? 'breathe 5.2s ease-in-out infinite' : 'none';
      cell.cursor = 'pointer';
      cell.milestoneId = m.id;
    }
  });

  const heatMonths: { label: string }[] = [];
  for (let w = 0; w < heatWeeks; w += 4) {
    heatMonths.push({
      label: addDays(heatStart, w * 7).toLocaleDateString(undefined, { month: 'short' }),
    });
  }
  const heatSince = `since ${heatStart.toLocaleDateString(undefined, {
    day: 'numeric',
    month: 'long',
  })} · ${heatWeeks} weeks`;

  // Range stacked bar chart calculations
  const spans = { week: 7, month: 35, quarter: 91, year: 365 };
  const bins: {
    from: Date;
    to: Date;
    label: string;
    now: boolean;
    by: Record<string, number>;
    total: number;
  }[] = [];

  if (range === 'week') {
    for (let i = 6; i >= 0; i--) {
      const d = addDays(today, -i);
      bins.push({
        from: d,
        to: addDays(d, 1),
        label: DOW_SHORT[d.getDay()],
        now: i === 0,
        by: {},
        total: 0,
      });
    }
  } else if (range === 'year') {
    for (let i = 11; i >= 0; i--) {
      const s = new Date(today.getFullYear(), today.getMonth() - i, 1);
      const e = new Date(today.getFullYear(), today.getMonth() - i + 1, 1);
      bins.push({
        from: s,
        to: e,
        label: s.toLocaleDateString(undefined, { month: 'narrow' }),
        now: i === 0,
        by: {},
        total: 0,
      });
    }
  } else {
    const count = range === 'month' ? 5 : 13;
    for (let i = count - 1; i >= 0; i--) {
      const s = addDays(thisMon, -7 * i);
      bins.push({
        from: s,
        to: addDays(s, 7),
        label: `${s.getDate()}/${s.getMonth() + 1}`,
        now: i === 0,
        by: {},
        total: 0,
      });
    }
  }

  parsedSessions.forEach((s) => {
    for (const b of bins) {
      if (s.t >= b.from && s.t < b.to) {
        if (!muted[s.instrumentId]) {
          b.by[s.instrumentId] = (b.by[s.instrumentId] || 0) + s.min;
          b.total += s.min;
        }
        break;
      }
    }
  });

  const binMax = Math.max(1, ...bins.map((b) => b.total));
  const peakBin = bins.slice().sort((a, b) => b.total - a.total)[0];
  const chartBuckets = bins.map((b) => ({
    label: b.label,
    labelColor: b.now ? '#23241F' : '#A3A297',
    labelWeight: b.now ? 700 : 500,
    segments: activeInsts
      .filter((i) => b.by[i.id] && !muted[i.id])
      .map((i) => ({
        h: ((b.by[i.id] / binMax) * 100).toFixed(1),
        color: i.color,
        instId: i.id,
      })),
  }));

  const rangeCutoff = range === 'year' ? addDays(today, -365) : addDays(today, -spans[range]);
  const scopedSessions = parsedSessions.filter(
    (s) => s.t >= rangeCutoff && !muted[s.instrumentId]
  );
  const scopedTotal = scopedSessions.reduce((a, s) => a + s.min, 0) || 0;
  const prevScopedTotal = parsedSessions
    .filter(
      (s) =>
        s.t >= addDays(rangeCutoff, -spans[range]) &&
        s.t < rangeCutoff &&
        !muted[s.instrumentId]
    )
    .reduce((a, s) => a + s.min, 0);

  const deltaPct = prevScopedTotal
    ? Math.round(((scopedTotal - prevScopedTotal) / prevScopedTotal) * 100)
    : 0;

  const instRows = activeInsts
    .map((i) => {
      const mine = parsedSessions.filter((s) => s.instrumentId === i.id && s.t >= rangeCutoff);
      const mins = mine.reduce((a, s) => a + s.min, 0);
      const pts = bins
        .map((b, n) => {
          const v = b.by[i.id] || 0;
          return `${((n / Math.max(1, bins.length - 1)) * 96 + 2).toFixed(1)},${(
            32 - (v / binMax) * 30
          ).toFixed(1)}`;
        })
        .join(' ');
      return {
        id: i.id,
        name: i.name,
        color: i.color,
        minsLabel: fmtMin(mins),
        shareLabel: `${scopedTotal ? Math.round((mins / scopedTotal) * 100) : 0}%`,
        sharePct: scopedTotal ? Math.min(100, Math.round((mins / scopedTotal) * 100)) : 0,
        spark: pts,
        opacity: muted[i.id] ? 0.34 : 1,
        isMuted: !!muted[i.id],
      };
    })
    .sort((a, b) => b.sharePct - a.sharePct);

  const RANGES_MAP = { week: 'Week', month: 'Month', quarter: 'Quarter', year: 'Year' };

  return {
    streak,
    bestStreak,
    toBeat,
    quip,
    last14,
    lifeHours: `${Math.floor(lifeH)}h`,
    lifeHoursRaw: lifeH,
    lifeSub: `${fmtMin(lifeMin % 60)} past the hour · ${parsedSessions.length} sessions`,
    nextMile: `${nextMile}h`,
    mileGap: fmtMin(mileGapMin),
    milePct,
    ringDash,
    capX,
    capY,
    oneAway,
    drift,
    pick,
    recommendation,
    heatMarked: heatCells,
    heatMonths,
    heatSince,
    milestones: MS,
    msCount: `${MS.filter((m) => m.done).length} earned · ${
      MS.filter((m) => !m.done).length
    } to go`,
    weekTotal: fmtMin(wkCum[dIdx]),
    goalLabel: fmtMin(goal),
    paceDelta: `${paceGap >= 0 ? '+' : '−'}${fmtMin(Math.abs(paceGap))}`,
    paceColor: paceGap >= 0 ? '#4F6353' : '#B4543C',
    medianPts: line(ghost, 6, 320, 90),
    actualPts: line(wkCum, dIdx, 320, 90),
    dow,
    dowBestLabel: DOW_NAMES[dowBest],
    dowWorstLabel: DOW_NAMES[dowWorst],
    records,
    freshLine,
    freshCount,
    hist,
    modeLabel: lenBuckets[modeIdx].label,
    dayCurve,
    dayArea,
    bandX: px(bandIdx).toFixed(1),
    bandW: (px(3) - px(0)).toFixed(1),
    nowLeft: `${((nowI / 24) * 100).toFixed(2)}%`,
    nowTop: `${((py(nowV) / CH) * 100).toFixed(2)}%`,
    windowLabel: `${hourLabel(bestStart)} – ${hourLabel((bestStart + 3) % 24)}`,
    windowShare: `${Math.round((bestSum / totalRecent) * 100)}%`,
    dayTicks: [4, 8, 12, 16, 20, 0].map((h) => ({ label: hourLabel(h) })),
    themes,
    buckets: chartBuckets,
    peakLabel: fmtMin(peakBin ? peakBin.total : 0),
    chartTitle:
      range === 'week'
        ? 'Minutes per day'
        : range === 'year'
        ? 'Minutes per month'
        : 'Minutes per week',
    scopeTotal: fmtMin(scopedTotal),
    scopeCaption: `${RANGES_MAP[range].toUpperCase()} TO DATE`,
    scopeDelta: `${deltaPct >= 0 ? '+' : '−'}${Math.abs(deltaPct)}% vs previous`,
    scopeDeltaColor: deltaPct >= 0 ? '#4F6353' : '#B4543C',
    instRows,
    hasData,
  };
}
