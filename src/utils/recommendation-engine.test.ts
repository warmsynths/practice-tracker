import { describe, it, expect } from 'vitest';
import { Instrument, Session } from '../types';
import {
  normalizeInstrumentRanks,
  calculateTargetShares,
  calculatePracticeRecommendations,
} from './recommendation-engine';

describe('recommendation-engine', () => {
  const mockInstruments: Instrument[] = [
    { id: 'inst-1', name: 'Guitar', color: '#6B7F6E', tier: 'primary', rank: 1 },
    { id: 'inst-2', name: 'Piano', color: '#B4543C', tier: 'primary', rank: 2 },
    { id: 'inst-3', name: 'Drums', color: '#D4A340', tier: 'secondary', rank: 3 },
  ];

  it('normalizes priority ranks correctly', () => {
    const rankMap = normalizeInstrumentRanks(mockInstruments);
    expect(rankMap.get('inst-1')).toBe(1);
    expect(rankMap.get('inst-2')).toBe(2);
    expect(rankMap.get('inst-3')).toBe(3);
  });

  it('calculates rank-weighted target shares with primary tier precedence', () => {
    const rankMap = normalizeInstrumentRanks(mockInstruments);
    const shares = calculateTargetShares(mockInstruments, rankMap);

    const share1 = shares.get('inst-1') || 0;
    const share2 = shares.get('inst-2') || 0;
    const share3 = shares.get('inst-3') || 0;

    expect(share1).toBeGreaterThan(share2);
    expect(share2).toBeGreaterThan(share3);
    expect(share1 + share2 + share3).toBeCloseTo(1.0, 5);
  });

  it('recommends unpracticed instruments as baseline top pick', () => {
    const res = calculatePracticeRecommendations(mockInstruments, []);
    expect(res.topPick).not.toBeNull();
    expect(res.topPick?.rank).toBe(1); // Rank 1 unpracticed instrument selected
    expect(res.rankedQueue.length).toBe(3);
  });

  it('applies interleaving penalty to recently practiced instruments', () => {
    const now = new Date();
    const todayIso = now.toISOString();
    const threeDaysAgoIso = new Date(now.getTime() - 3 * 86400000).toISOString();

    const mockSessions: Session[] = [
      { id: 's1', instrumentId: 'inst-1', start: todayIso, end: todayIso, duration: 30 },
      { id: 's2', instrumentId: 'inst-2', start: threeDaysAgoIso, end: threeDaysAgoIso, duration: 30 },
    ];

    const res = calculatePracticeRecommendations(mockInstruments, mockSessions, now);

    // inst-1 was practiced today, so inst-2 or inst-3 should be recommended over inst-1 due to interleaving penalty
    expect(res.topPick?.instrumentId).not.toBe('inst-1');
    expect(res.topPick?.reason).not.toContain('Practiced today');
  });
});
