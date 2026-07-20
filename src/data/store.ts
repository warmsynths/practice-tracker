type Listener = () => void;

/**
 * Minimal reactive localStorage-backed collection store.
 * No external state library — Lit components subscribe directly.
 */
export class Store<T extends { id: string }> {
  private items: T[];
  private listeners = new Set<Listener>();

  constructor(private key: string) {
    this.items = this.load();
  }

  private load(): T[] {
    try {
      const raw = localStorage.getItem(this.key);
      return raw ? (JSON.parse(raw) as T[]) : [];
    } catch {
      return [];
    }
  }

  private persist(): void {
    localStorage.setItem(this.key, JSON.stringify(this.items));
    for (const listener of this.listeners) listener();
  }

  getAll(): T[] {
    return [...this.items];
  }

  add(item: T): void {
    this.items = [...this.items, item];
    this.persist();
  }

  update(id: string, patch: Partial<T>): void {
    this.items = this.items.map((item) => (item.id === id ? { ...item, ...patch } : item));
    this.persist();
  }

  remove(id: string): void {
    this.items = this.items.filter((item) => item.id !== id);
    this.persist();
  }

  subscribe(listener: Listener): () => void {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }
}

export function makeId(): string {
  return crypto.randomUUID();
}
