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

  it('ensures low-priority secondary instruments do not overtake neglected primary instruments', () => {
    const kit: Instrument[] = [
      { id: 'guitar', name: 'Guitar', color: '#6B7F6E', tier: 'primary', rank: 1 },
      { id: 'piano', name: 'Piano', color: '#8A7B94', tier: 'primary', rank: 2 },
      { id: 'acoustic', name: 'Acoustic', color: '#9FAF95', tier: 'secondary', rank: 3 },
      { id: 'bass', name: 'Bass', color: '#7D6E7F', tier: 'secondary', rank: 4 },
      { id: 'drumming', name: 'Finger Drumming', color: '#A98F72', tier: 'secondary', rank: 5 },
    ];

    const now = new Date('2026-08-31T21:00:00Z');
    // Guitar played 2 days ago, Piano played today, Drumming played 1 day ago, Bass played 6 days ago
    const mockSessions: Session[] = [
      { id: 's1', instrumentId: 'piano', start: '2026-08-31T10:00:00Z', end: '2026-08-31T10:30:00Z', duration: 30 },
      { id: 's2', instrumentId: 'drumming', start: '2026-08-30T10:00:00Z', end: '2026-08-30T10:15:00Z', duration: 15 },
      { id: 's3', instrumentId: 'guitar', start: '2026-08-29T10:00:00Z', end: '2026-08-29T10:30:00Z', duration: 30 },
      { id: 's4', instrumentId: 'bass', start: '2026-08-25T10:00:00Z', end: '2026-08-25T10:20:00Z', duration: 20 },
    ];

    const res = calculatePracticeRecommendations(kit, mockSessions, now);

    // Primary Guitar should be the top pick, ahead of low-priority Drumming
    expect(res.topPick?.instrumentId).toBe('guitar');
    const drummingScore = res.rankedQueue.find((q) => q.instrumentId === 'drumming')?.score || 0;
    const guitarScore = res.rankedQueue.find((q) => q.instrumentId === 'guitar')?.score || 0;
    const bassScore = res.rankedQueue.find((q) => q.instrumentId === 'bass')?.score || 0;

    expect(guitarScore).toBeGreaterThan(drummingScore);
    expect(bassScore).toBeGreaterThan(drummingScore);
  });

  it('correctly ranks Guitar and Bass ahead of Finger Drumming for the user history dataset', () => {
    const kit: Instrument[] = [
      { id: 'guitar', name: 'Guitar', color: '#6B7F6E', tier: 'primary', rank: 1 },
      { id: 'piano', name: 'Piano', color: '#8A7B94', tier: 'primary', rank: 2 },
      { id: 'acoustic', name: 'Acoustic Guitar', color: '#9FAF95', tier: 'secondary', rank: 3 },
      { id: 'bass', name: 'Bass', color: '#7D6E7F', tier: 'secondary', rank: 4 },
      { id: 'drumming', name: 'Finger Drumming', color: '#A98F72', tier: 'secondary', rank: 5 },
    ];

    const userSessions: Session[] = [
      { id: 's1', instrumentId: 'piano', start: '2026-08-30T21:09:24.357Z', end: '2026-08-30T21:40:15.121Z', duration: 31 },
      { id: 's2', instrumentId: 'drumming', start: '2026-08-30T11:00:00Z', end: '2026-08-30T11:15:00Z', duration: 15 },
      { id: 's3', instrumentId: 'guitar', start: '2026-08-29T10:56:09.673Z', end: '2026-08-29T11:26:44.181Z', duration: 31 },
      { id: 's4', instrumentId: 'piano', start: '2026-08-28T21:10:27.270Z', end: '2026-08-28T21:46:55.860Z', duration: 36 },
      { id: 's5', instrumentId: 'drumming', start: '2026-08-28T11:00:00Z', end: '2026-08-28T11:15:00Z', duration: 15 },
      { id: 's6', instrumentId: 'guitar', start: '2026-08-27T21:15:07.164Z', end: '2026-08-27T21:42:27.330Z', duration: 27 },
      { id: 's7', instrumentId: 'piano', start: '2026-08-27T09:00:00Z', end: '2026-08-27T09:15:00Z', duration: 15 },
      { id: 's8', instrumentId: 'piano', start: '2026-08-26T21:33:37.353Z', end: '2026-08-26T21:42:12.211Z', duration: 9 },
      { id: 's9', instrumentId: 'drumming', start: '2026-08-26T10:52:15.848Z', end: '2026-08-26T11:02:47.330Z', duration: 11 },
      { id: 's10', instrumentId: 'acoustic', start: '2026-08-26T02:36:57.302Z', end: '2026-08-26T02:45:27.694Z', duration: 9 },
      { id: 's11', instrumentId: 'guitar', start: '2026-08-25T21:12:47.953Z', end: '2026-08-25T21:42:38.296Z', duration: 30 },
      { id: 's12', instrumentId: 'acoustic', start: '2026-08-25T10:57:29.180Z', end: '2026-08-25T11:15:26.268Z', duration: 18 },
      { id: 's13', instrumentId: 'piano', start: '2026-08-24T21:31:11.267Z', end: '2026-08-24T21:33:46.818Z', duration: 3 },
      { id: 's14', instrumentId: 'bass', start: '2026-08-24T21:16:17.660Z', end: '2026-08-24T21:29:32.202Z', duration: 13 },
      { id: 's15', instrumentId: 'drumming', start: '2026-08-24T09:00:00Z', end: '2026-08-24T09:15:00Z', duration: 15 },
    ];

    const targetDate = new Date('2026-08-31T10:00:00Z');
    const res = calculatePracticeRecommendations(kit, userSessions, targetDate);

    // Top pick must be Primary Guitar (#1 priority), not Finger Drumming
    expect(res.topPick?.instrumentId).toBe('guitar');

    const drummingItem = res.rankedQueue.find((q) => q.instrumentId === 'drumming');
    const guitarItem = res.rankedQueue.find((q) => q.instrumentId === 'guitar');
    const bassItem = res.rankedQueue.find((q) => q.instrumentId === 'bass');

    expect(guitarItem?.score).toBeGreaterThan(drummingItem?.score || 0);
    expect(bassItem?.score).toBeGreaterThan(drummingItem?.score || 0);
    expect(drummingItem?.rank).toBe(5);
  });
});
