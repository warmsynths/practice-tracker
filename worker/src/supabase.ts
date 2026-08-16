import {
  ClientInstrument,
  ClientSession,
  SupabaseInstrumentRow,
  SupabaseSessionRow,
  Tombstone,
} from './types';

async function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export class SupabaseClient {
  private url: string;
  private apiKey: string;
  private userToken?: string;
  private userId?: string;

  constructor(url: string, apiKey: string, userToken?: string, userId?: string) {
    this.url = url.replace(/\/+$/, '');
    this.apiKey = apiKey;
    this.userToken = userToken;
    this.userId = userId;
  }

  private get headers(): HeadersInit {
    const authHeader = this.userToken ? `Bearer ${this.userToken}` : `Bearer ${this.apiKey}`;
    return {
      apikey: this.apiKey,
      Authorization: authHeader,
      'Content-Type': 'application/json',
    };
  }

  private async fetchWithRetry(
    input: string,
    init: RequestInit,
    retries = 2
  ): Promise<Response> {
    let lastError: unknown;
    for (let attempt = 0; attempt <= retries; attempt++) {
      try {
        const res = await fetch(input, init);
        // If 5xx transient error (e.g. 500, 502, 503, 555 while schema cache reloads), retry
        if (res.status >= 500 && attempt < retries) {
          await sleep((attempt + 1) * 300);
          continue;
        }
        return res;
      } catch (err) {
        lastError = err;
        if (attempt < retries) {
          await sleep((attempt + 1) * 300);
        }
      }
    }
    throw lastError || new Error('Request failed after retries');
  }

  public async upsertInstruments(instruments: ClientInstrument[]): Promise<void> {
    if (!instruments || instruments.length === 0) return;
    if (!this.userId) {
      throw new Error('SupabaseClient: user_id is required to upsert instruments');
    }

    const rows: SupabaseInstrumentRow[] = instruments.map((i) => {
      const row: SupabaseInstrumentRow = {
        id: i.id,
        name: i.name,
        color: i.color,
        tier: i.tier,
        archived: !!i.archived,
        deleted_at: i.deletedAt || null,
        updated_at: i.updatedAt || new Date().toISOString(),
        user_id: this.userId,
      };
      return row;
    });

    const res = await this.fetchWithRetry(`${this.url}/rest/v1/instruments?on_conflict=user_id,id`, {
      method: 'POST',
      headers: {
        ...this.headers,
        Prefer: 'resolution=merge-duplicates,return=minimal',
      },
      body: JSON.stringify(rows),
    });

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`Failed to upsert instruments: ${res.status} ${errorText}`);
    }
  }

  public async upsertSessions(sessions: ClientSession[]): Promise<void> {
    if (!sessions || sessions.length === 0) return;
    if (!this.userId) {
      throw new Error('SupabaseClient: user_id is required to upsert sessions');
    }

    const rows: SupabaseSessionRow[] = sessions.map((s) => {
      const row: SupabaseSessionRow = {
        id: s.id,
        instrument_id: s.instrumentId,
        start_time: s.start,
        end_time: s.end,
        duration: s.duration,
        notes: s.notes || null,
        deleted_at: s.deletedAt || null,
        updated_at: s.updatedAt || new Date().toISOString(),
        user_id: this.userId,
      };
      return row;
    });

    const res = await this.fetchWithRetry(`${this.url}/rest/v1/sessions?on_conflict=user_id,id`, {
      method: 'POST',
      headers: {
        ...this.headers,
        Prefer: 'resolution=merge-duplicates,return=minimal',
      },
      body: JSON.stringify(rows),
    });

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`Failed to upsert sessions: ${res.status} ${errorText}`);
    }
  }

  public async applyTombstones(tombstones: Tombstone[]): Promise<void> {
    if (!tombstones || tombstones.length === 0) return;
    if (!this.userId) {
      throw new Error('SupabaseClient: user_id is required to apply tombstones');
    }

    const nowIso = new Date().toISOString();
    for (const t of tombstones) {
      const table = t.type === 'instrument' ? 'instruments' : 'sessions';
      const patchUrl = `${this.url}/rest/v1/${table}?id=eq.${encodeURIComponent(t.id)}&user_id=eq.${encodeURIComponent(this.userId)}`;

      const res = await this.fetchWithRetry(patchUrl, {
        method: 'PATCH',
        headers: {
          ...this.headers,
          Prefer: 'return=minimal',
        },
        body: JSON.stringify({
          deleted_at: t.deletedAt || nowIso,
          updated_at: nowIso,
        }),
      });

      if (!res.ok && res.status !== 404) {
        const errorText = await res.text();
        console.warn(`Failed to apply tombstone for ${t.type} ${t.id}: ${res.status} ${errorText}`);
      }
    }
  }

  public async getDeltaInstruments(lastSyncedAt: string | null): Promise<{
    active: ClientInstrument[];
    tombstones: Tombstone[];
  }> {
    if (!this.userId) {
      throw new Error('SupabaseClient: user_id is required to fetch instrument deltas');
    }

    let queryUrl = `${this.url}/rest/v1/instruments?select=*&user_id=eq.${encodeURIComponent(this.userId)}`;
    if (lastSyncedAt) {
      queryUrl += `&updated_at=gt.${encodeURIComponent(lastSyncedAt)}`;
    }

    const res = await this.fetchWithRetry(queryUrl, {
      method: 'GET',
      headers: this.headers,
    });

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`Failed to fetch instrument deltas: ${res.status} ${errorText}`);
    }

    const rows = (await res.json()) as SupabaseInstrumentRow[];
    const active: ClientInstrument[] = [];
    const tombstones: Tombstone[] = [];

    for (const row of rows) {
      if (row.deleted_at) {
        tombstones.push({
          id: row.id,
          type: 'instrument',
          deletedAt: row.deleted_at,
        });
      } else {
        active.push({
          id: row.id,
          name: row.name,
          color: row.color,
          tier: row.tier as 'primary' | 'secondary',
          archived: row.archived,
          updatedAt: row.updated_at,
        });
      }
    }

    return { active, tombstones };
  }

  public async getDeltaSessions(lastSyncedAt: string | null): Promise<{
    active: ClientSession[];
    tombstones: Tombstone[];
  }> {
    if (!this.userId) {
      throw new Error('SupabaseClient: user_id is required to fetch session deltas');
    }

    let queryUrl = `${this.url}/rest/v1/sessions?select=*&user_id=eq.${encodeURIComponent(this.userId)}`;
    if (lastSyncedAt) {
      queryUrl += `&updated_at=gt.${encodeURIComponent(lastSyncedAt)}`;
    }

    const res = await this.fetchWithRetry(queryUrl, {
      method: 'GET',
      headers: this.headers,
    });

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`Failed to fetch session deltas: ${res.status} ${errorText}`);
    }

    const rows = (await res.json()) as SupabaseSessionRow[];
    const active: ClientSession[] = [];
    const tombstones: Tombstone[] = [];

    for (const row of rows) {
      if (row.deleted_at) {
        tombstones.push({
          id: row.id,
          type: 'session',
          deletedAt: row.deleted_at,
        });
      } else {
        active.push({
          id: row.id,
          instrumentId: row.instrument_id,
          start: row.start_time,
          end: row.end_time,
          duration: row.duration,
          notes: row.notes || undefined,
          updatedAt: row.updated_at,
        });
      }
    }

    return { active, tombstones };
  }
}
