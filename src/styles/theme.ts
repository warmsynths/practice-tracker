import { ThemeId } from '../types';

export interface ThemeTokens {
  id: ThemeId;
  name: string;
  light: boolean;
  bg: string;
  card: string;
  raised: string;
  line: string;
  muted: string;
  dim: string;
  ink: string;
  accent: string;
  accentHi: string;
  chart: string;
  deep: string;
  stage: string;
  stageDeep: string;
  stageLine: string;
  stageKey: string;
}

export const THEMES: ThemeTokens[] = [
  {
    id: 'plum',
    name: 'Plum',
    light: false,
    bg: '#2B1C33',
    card: '#3A2845',
    raised: '#46304F',
    line: '#5A4266',
    muted: '#BFA9C8',
    dim: '#8E7A99',
    ink: '#F5E9DA',
    accent: '#FF7A5C',
    accentHi: '#FF8C72',
    chart: '#B48CD9',
    deep: '#251829',
    stage: '#46304F',
    stageDeep: '#2B1C33',
    stageLine: '#5A4266',
    stageKey: '#3A2845',
  },
  {
    id: 'moss',
    name: 'Moss',
    light: false,
    bg: '#15221C',
    card: '#1F3129',
    raised: '#2A4035',
    line: '#3B5546',
    muted: '#A9C3B3',
    dim: '#6E8B7B',
    ink: '#EEF2E4',
    accent: '#E9C46A',
    accentHi: '#F0D182',
    chart: '#7FC8A9',
    deep: '#111C17',
    stage: '#2A4035',
    stageDeep: '#15221C',
    stageLine: '#3B5546',
    stageKey: '#1F3129',
  },
  {
    id: 'indigo',
    name: 'Ink & Saffron',
    light: false,
    bg: '#121A2C',
    card: '#1C263D',
    raised: '#26334F',
    line: '#344464',
    muted: '#A8B5D4',
    dim: '#6E7BA0',
    ink: '#F3EEE3',
    accent: '#F4A340',
    accentHi: '#F7B661',
    chart: '#7FA6F0',
    deep: '#0E1524',
    stage: '#26334F',
    stageDeep: '#121A2C',
    stageLine: '#344464',
    stageKey: '#1C263D',
  },
  {
    id: 'dusk',
    name: 'Dusk',
    light: false,
    bg: '#2A1A20',
    card: '#3B2630',
    raised: '#4B323D',
    line: '#604352',
    muted: '#D7B3BE',
    dim: '#9E7A86',
    ink: '#FCEEE9',
    accent: '#7FD6C2',
    accentHi: '#99E0CF',
    chart: '#F29CB0',
    deep: '#23151A',
    stage: '#4B323D',
    stageDeep: '#2A1A20',
    stageLine: '#604352',
    stageKey: '#3B2630',
  },
  {
    id: 'paper',
    name: 'Paper',
    light: true,
    bg: '#F4EEE4',
    card: '#FFFFFF',
    raised: '#EDE5D8',
    line: '#DCD1C1',
    muted: '#6B6271',
    dim: '#958C96',
    ink: '#2A2230',
    accent: '#C9472E',
    accentHi: '#D85B42',
    chart: '#8C6BB8',
    deep: '#EAE2D5',
    // Glyphs keep a dark backdrop even on light themes, for contrast.
    stage: '#2E2534',
    stageDeep: '#1F1824',
    stageLine: '#4A3E52',
    stageKey: '#3A2F42',
  },
  {
    id: 'glacier',
    name: 'Glacier',
    light: true,
    bg: '#E9EFF3',
    card: '#FFFFFF',
    raised: '#DDE6EC',
    line: '#C7D3DC',
    muted: '#566675',
    dim: '#8796A3',
    ink: '#1C2833',
    accent: '#2F55D4',
    accentHi: '#4468E0',
    chart: '#2FA59A',
    deep: '#DFE7ED',
    stage: '#1E2B3A',
    stageDeep: '#141E2A',
    stageLine: '#33465A',
    stageKey: '#26364A',
  },
];

export const DEFAULT_THEME_ID: ThemeId = 'plum';

export function getTheme(id: ThemeId | undefined): ThemeTokens {
  return THEMES.find((t) => t.id === id) || THEMES[0];
}

const TOKEN_KEYS: (keyof Omit<ThemeTokens, 'id' | 'name' | 'light'>)[] = [
  'bg',
  'card',
  'raised',
  'line',
  'muted',
  'dim',
  'ink',
  'accent',
  'accentHi',
  'chart',
  'deep',
  'stage',
  'stageDeep',
  'stageLine',
  'stageKey',
];

/** Sets the theme's CSS custom properties directly on a host element (e.g. <pt-app>'s `this`). */
export function applyThemeVars(el: HTMLElement, id: ThemeId | undefined): void {
  const theme = getTheme(id);
  for (const key of TOKEN_KEYS) {
    el.style.setProperty(`--${key}`, theme[key]);
  }
  try {
    document.body.style.background = theme.bg;
    document.documentElement.style.background = theme.bg;
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', theme.bg);
  } catch {
    // ignore (non-browser environment, e.g. tests)
  }
}

/** Fixed instrument-identity color swatches, independent of theme. */
export const INSTRUMENT_TINTS: string[] = [
  '#E8A56B',
  '#FFC2A8',
  '#7FD1C1',
  '#F5E9DA',
  '#B48CD9',
  '#FF7A5C',
  '#9BD49B',
  '#E8C27A',
];
