import { Instrument, Session, InstrumentScoreBreakdown, PracticeRecommendation, RecommendationReasonDetails } from '../types';
import { calculateInstrumentRepetition, diffCalendarDays } from './repetition-utils';
import { startOfDay } from './date-utils';

/**
 * Ensures all instruments have a normalized integer priority rank (1..N).
 * Preserves explicit inst.rank if provided; otherwise assigns rank based on array position and tier.
 */
export function normalizeInstrumentRanks(instruments: Instrument[]): Map<string, number> {
  const active = instruments.filter((i) => !i.archived && !i.deletedAt);
  
  // Sort existing rank if present, fallback to primary tier first then index
  const sorted = active.slice().sort((a, b) => {
    if (a.rank !== undefined && b.rank !== undefined) return a.rank - b.rank;
    if (a.rank !== undefined) return -1;
    if (b.rank !== undefined) return 1;
    if (a.tier !== b.tier) return a.tier === 'primary' ? -1 : 1;
    return 0;
  });

  const rankMap = new Map<string, number>();
  sorted.forEach((inst, idx) => {
    rankMap.set(inst.id, idx + 1);
  });

  return rankMap;
}

/**
 * Calculates scientific target practice share percentages for kit instruments
 * based on Tier and Priority Rank (1..N).
 */
export function calculateTargetShares(
  instruments: Instrument[],
  rankMap: Map<string, number>
): Map<string, number> {
  const active = instruments.filter((i) => !i.archived && !i.deletedAt);
  if (active.length === 0) return new Map();

  const rawWeights = new Map<string, number>();
  let totalWeight = 0;

  for (const inst of active) {
    const rank = rankMap.get(inst.id) || 1;
    const baseTierWeight = inst.tier === 'primary' ? 2.0 : 1.0;
    // Rank weighting formula: higher priority ranks receive larger weights
    const weight = baseTierWeight * Math.pow(rank, -0.6);
    rawWeights.set(inst.id, weight);
    totalWeight += weight;
  }

  const shareMap = new Map<string, number>();
  for (const inst of active) {
    const w = rawWeights.get(inst.id) || 0;
    shareMap.set(inst.id, totalWeight > 0 ? w / totalWeight : 1 / active.length);
  }

  return shareMap;
}

/**
 * Computes scientific next practice recommendations for a kit of instruments.
 */
export function calculatePracticeRecommendations(
  instruments: Instrument[],
  sessions: Session[],
  targetDate: Date = new Date()
): PracticeRecommendation {
  const today = startOfDay(targetDate);
  const activeInsts = instruments.filter((i) => !i.archived && !i.deletedAt);

  if (activeInsts.length === 0) {
    return { topPick: null, rankedQueue: [] };
  }

  const rankMap = normalizeInstrumentRanks(instruments);
  const targetShareMap = calculateTargetShares(instruments, rankMap);

  // Rolling 14-day practice session filter
  const cutoff14 = new Date(today);
  cutoff14.setDate(cutoff14.getDate() - 14);

  const validSessions = sessions.filter((s) => !s.deletedAt);
  const recent14Sessions = validSessions.filter((s) => new Date(s.start) >= cutoff14);
  const totalRecentMins = recent14Sessions.reduce((acc, s) => acc + (s.duration || 0), 0);

  const actualShareMap = new Map<string, number>();
  for (const inst of activeInsts) {
    const instMins = recent14Sessions
      .filter((s) => s.instrumentId === inst.id)
      .reduce((acc, s) => acc + (s.duration || 0), 0);
    actualShareMap.set(inst.id, totalRecentMins > 0 ? instMins / totalRecentMins : 0);
  }

  const breakdowns: InstrumentScoreBreakdown[] = [];

  for (const inst of activeInsts) {
    const rank = rankMap.get(inst.id) || activeInsts.length;
    const targetShare = targetShareMap.get(inst.id) || 0;
    const actualShare = actualShareMap.get(inst.id) || 0;
    const shareDeficit = targetShare - actualShare;

    // Spaced repetition state (respects Primary vs Secondary tier schedule)
    const repState = calculateInstrumentRepetition(inst.id, validSessions, targetDate, inst.tier);

    // Days since last practice
    let daysSince = 999;
    let isPracticedToday = false;
    if (repState.lastPracticedAt) {
      const lastDate = startOfDay(new Date(repState.lastPracticedAt));
      daysSince = diffCalendarDays(today, lastDate);
      isPracticedToday = daysSince === 0;
    }

    // Ebbinghaus Forgetting Curve Memory Retention Formula: R = e^(-ln(2) * t / HalfLife)
    let retentionPct = 0;
    if (repState.lastPracticedAt && daysSince >= 0) {
      const stepInterval = Math.max(1, repState.intervalDays);
      // Primary tier caps retention half-life (~8-10 days) so prolonged silence prompts review;
      // Secondary tier allows full leisurely intervals
      const maxHalfLife = inst.tier === 'primary' ? 8 + Math.max(0, 3 - rank) : 45;
      const halfLife = Math.min(maxHalfLife, stepInterval * (1 + 0.05 * Math.max(0, 5 - rank)));
      retentionPct = Math.min(100, Math.max(0, Math.exp((-Math.LN2 * daysSince) / halfLife) * 100));
    }

    const retentionDeficitScore = 100 - retentionPct;
    const shareDeficitScore = Math.max(0, shareDeficit * 100);
    const tierScale = inst.tier === 'primary' ? 1.0 : 0.6;
    const priorityWeightScore = tierScale * (1 / Math.pow(rank, 0.7)) * 100;

    // Composite urgency score formula: 35% Retention, 30% Kit Share Deficit, 35% Priority Weight
    let rawScore =
      0.35 * retentionDeficitScore +
      0.30 * shareDeficitScore +
      0.35 * priorityWeightScore;

    const isPrimary = inst.tier === 'primary';

    // Overdue or Unpracticed bonus (scaled by tier/priority)
    if (!repState.lastPracticedAt) {
      rawScore += isPrimary ? 25 : 12; // Baseline boost
    } else if (repState.isOverdue) {
      const baseOverdue = isPrimary ? 20 : 8;
      const perDay = isPrimary ? 5 : 2;
      const maxExtra = isPrimary ? 25 : 10;
      rawScore += baseOverdue + Math.min(maxExtra, Math.abs(repState.daysRemaining) * perDay);
    } else if (repState.isDueToday) {
      rawScore += isPrimary ? 15 : 6;
    }

    // Interleaving practice penalty: if practiced today, cool down to promote switching skills
    if (isPracticedToday && activeInsts.length > 1) {
      rawScore *= 0.25;
    }

    const finalScore = Math.round(Math.min(100, Math.max(0, rawScore)) * 10) / 10;

    // Scientific rationale text & structured details
    let reason = '';
    let reasonDetails: RecommendationReasonDetails;

    if (!repState.lastPracticedAt) {
      const headline = 'Baseline session ready';
      const explanation = 'Establish your baseline to initiate Step 1 spacing interval.';
      reason = `${headline}. ${explanation}`;
      reasonDetails = {
        badge: 'FRESH CANVAS',
        headline,
        explanation,
        icon: 'sparkles',
      };
    } else if (isPracticedToday) {
      const headline = 'Interleaved cooling down';
      const explanation = 'Practiced today. Switch disciplines to allow neural consolidation.';
      reason = `${headline}. ${explanation}`;
      reasonDetails = {
        badge: 'BRAIN RESET',
        headline,
        explanation,
        icon: 'brain',
      };
    } else if (repState.isOverdue) {
      const d = Math.abs(repState.daysRemaining);
      const headline = `Retention dropped to ${Math.round(retentionPct)}%`;
      const explanation = `Overdue by ${d}d (Step ${repState.step}). A quick session locks in your ${repState.intervalDays}d interval.`;
      reason = `${headline}. ${explanation}`;
      reasonDetails = {
        badge: 'RUST ALERT',
        headline,
        explanation,
        icon: 'bolt',
      };
    } else if (repState.isDueToday) {
      const headline = `Due today for Step ${repState.step}`;
      const explanation = `Retention at ${Math.round(retentionPct)}%. Optimal timing for your ${repState.intervalDays}d target interval.`;
      reason = `${headline}. ${explanation}`;
      reasonDetails = {
        badge: 'IN SYNC',
        headline,
        explanation,
        icon: 'clock',
      };
    } else if (shareDeficit > 0.10) {
      const headline = `${Math.round(shareDeficit * 100)}% behind target share`;
      const explanation = `Priority rank #${rank} is slipping. Give it airtime to restore kit balance.`;
      reason = `${headline}. ${explanation}`;
      reasonDetails = {
        badge: 'KIT SLIP',
        headline,
        explanation,
        icon: 'scale',
      };
    } else {
      const headline = `Retention at ${Math.round(retentionPct)}%`;
      const explanation = `Last played ${daysSince === 1 ? 'yesterday' : `${daysSince}d ago`}. Keep steady on your practice routine.`;
      reason = `${headline}. ${explanation}`;
      reasonDetails = {
        badge: 'STEADY PACE',
        headline,
        explanation,
        icon: 'clock',
      };
    }

    breakdowns.push({
      instrumentId: inst.id,
      name: inst.name,
      color: inst.color,
      tier: inst.tier,
      rank,
      score: finalScore,
      retentionPct: Math.round(retentionPct),
      targetSharePct: Math.round(targetShare * 100),
      actualSharePct: Math.round(actualShare * 100),
      shareDeficitPct: Math.round(shareDeficit * 100),
      daysSince,
      step: repState.step,
      status: repState.status,
      reason,
      reasonDetails,
      isPracticedToday,
    });
  }

  // Sort queue by score descending (highest urgency score #1 Play Next)
  const rankedQueue = breakdowns.slice().sort((a, b) => b.score - a.score || a.rank - b.rank);
  const topPick = rankedQueue[0] || null;

  return {
    topPick,
    rankedQueue,
  };
}
