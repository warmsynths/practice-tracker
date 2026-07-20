import { Store } from './store';
import type { DogEvent } from './types';

export const dogStore = new Store<DogEvent>('ledger.dog.v1');
