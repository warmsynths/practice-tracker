import { GlyphKind, Instrument } from '../types';

export const GLYPH_KINDS: { id: GlyphKind; label: string }[] = [
  { id: 'acoustic', label: 'Acoustic strings' },
  { id: 'electric', label: 'Electric strings' },
  { id: 'bass', label: 'Bass' },
  { id: 'piano', label: 'Piano / keys' },
  { id: 'pads', label: 'Pads / drums' },
  { id: 'wind', label: 'Wind' },
  { id: 'voice', label: 'Voice' },
];

/** Falls back to a name-based guess for instruments saved before `glyphKind` existed. */
export function glyphKindFor(instrument: Instrument | null | undefined): GlyphKind {
  if (!instrument) return 'acoustic';
  if (instrument.glyphKind) return instrument.glyphKind;
  const n = instrument.name.toLowerCase();
  if (n.includes('bass')) return 'bass';
  if (n.includes('electric')) return 'electric';
  if (n.includes('piano') || n.includes('key')) return 'piano';
  if (n.includes('drum') || n.includes('pad')) return 'pads';
  if (n.includes('sax') || n.includes('flute') || n.includes('trumpet') || n.includes('wind') || n.includes('horn') || n.includes('clarinet')) return 'wind';
  if (n.includes('voice') || n.includes('vocal') || n.includes('sing')) return 'voice';
  if (n.includes('guitar')) return 'acoustic';
  return 'acoustic';
}
