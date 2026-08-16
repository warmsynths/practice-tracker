import { DonutSegment } from '../types';

export const TRACK_BG = '#E1E1DB';

export const SWATCH_COLORS = [
  '#6B7F6E', // Sage green (Primary)
  '#8A7B94', // Dusty lavender (Primary)
  '#9FAF95', // Olive green
  '#7D6E7F', // Mauve
  '#A98F72', // Warm amber / ochre
  '#8B98A8', // Slate blue
  '#A8817D', // Terracotta rose
  '#7A8A99', // Denim steel
];

export function donutGradient(segments: DonutSegment[]): string {
  const total = segments.reduce((sum, s) => sum + s.pct, 0);
  if (total <= 0) {
    return `conic-gradient(${TRACK_BG} 0% 100%)`;
  }
  let acc = 0;
  const parts: string[] = [];
  segments.forEach((seg) => {
    const start = acc;
    acc += seg.pct;
    parts.push(`${seg.color} ${start.toFixed(1)}% ${acc.toFixed(1)}%`);
  });
  if (acc < 100) {
    parts.push(`${TRACK_BG} ${acc.toFixed(1)}% 100%`);
  }
  return `conic-gradient(${parts.join(', ')})`;
}

export function arcGradient(color: string, pct: number): string {
  const p = Math.max(0, Math.min(100, pct));
  if (p <= 0) {
    return `conic-gradient(${TRACK_BG} 0% 100%)`;
  }
  return `conic-gradient(${color} 0% ${p.toFixed(1)}%, ${TRACK_BG} ${p.toFixed(1)}% 100%)`;
}

export function slug(name: string): string {
  return (
    name
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '') || 'instrument'
  );
}
