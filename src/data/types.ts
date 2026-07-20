export type Instrument = 'guitar' | 'bass' | 'piano' | 'finger-drumming';

export const INSTRUMENTS: { value: Instrument; label: string; code: string }[] = [
  { value: 'guitar', label: 'Guitar', code: 'G' },
  { value: 'bass', label: 'Bass', code: 'B' },
  { value: 'piano', label: 'Piano', code: 'P' },
  { value: 'finger-drumming', label: 'Finger Drumming', code: 'F' },
];

export interface PracticeEntry {
  id: string;
  /** YYYY-MM-DD, local calendar date */
  date: string;
  instruments: Instrument[];
  minutes?: number;
  notes?: string;
  createdAt: number;
}

export type DogEventType = 'poop' | 'pee' | 'medicine' | 'other';

export const DOG_EVENT_TYPES: { value: DogEventType; label: string }[] = [
  { value: 'poop', label: 'Poop' },
  { value: 'pee', label: 'Pee' },
  { value: 'medicine', label: 'Medicine' },
  { value: 'other', label: 'Other' },
];

export interface DogEvent {
  id: string;
  type: DogEventType;
  /** epoch ms */
  timestamp: number;
  location?: string;
  medicineName?: string;
  notes?: string;
  createdAt: number;
}
