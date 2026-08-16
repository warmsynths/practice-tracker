import { SyncRequestPayload, SyncResponsePayload } from '../types';

export interface TestConnectionResult {
  ok: boolean;
  status: number;
  message: string;
  timestamp?: string;
}

export class SyncEngine {
  private formatUrl(url: string): string {
    let cleaned = url.trim().replace(/\/+$/, '');
    if (cleaned && !cleaned.startsWith('http://') && !cleaned.startsWith('https://')) {
      cleaned = 'https://' + cleaned;
    }
    return cleaned;
  }

  public async testConnection(
    workerUrl: string,
    syncPasscode?: string
  ): Promise<TestConnectionResult> {
    const formatted = this.formatUrl(workerUrl);
    if (!formatted) {
      return { ok: false, status: 0, message: 'Worker URL cannot be empty' };
    }

    try {
      const headers: HeadersInit = {};
      if (syncPasscode) {
        headers['X-PT-Secret'] = syncPasscode.trim();
      }

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 8000);

      const res = await fetch(`${formatted}/api/health`, {
        method: 'GET',
        headers,
        signal: controller.signal,
      });
      clearTimeout(timeoutId);

      if (res.status === 200) {
        const data = await res.json().catch(() => ({}));
        return {
          ok: true,
          status: 200,
          message: 'Connected to Cloudflare Worker',
          timestamp: data.timestamp,
        };
      }

      if (res.status === 401) {
        return {
          ok: false,
          status: 401,
          message: 'Unauthorized: Invalid or missing sync passcode',
        };
      }

      const errorText = await res.text().catch(() => '');
      return {
        ok: false,
        status: res.status,
        message: `Connection error (${res.status}): ${errorText || res.statusText}`,
      };
    } catch (err: unknown) {
      if (err instanceof Error && err.name === 'AbortError') {
        return { ok: false, status: 0, message: 'Connection timed out (8s limit)' };
      }
      return {
        ok: false,
        status: 0,
        message: 'Network error: Unable to reach worker endpoint',
      };
    }
  }

  public async sync(
    workerUrl: string,
    syncPasscode: string | undefined,
    payload: SyncRequestPayload
  ): Promise<SyncResponsePayload> {
    const formatted = this.formatUrl(workerUrl);
    if (!formatted) {
      throw new Error('Worker URL is not configured');
    }

    const headers: HeadersInit = {
      'Content-Type': 'application/json',
    };
    if (syncPasscode) {
      headers['X-PT-Secret'] = syncPasscode.trim();
    }

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000);

    const res = await fetch(`${formatted}/api/sync`, {
      method: 'POST',
      headers,
      body: JSON.stringify(payload),
      signal: controller.signal,
    });
    clearTimeout(timeoutId);

    if (!res.ok) {
      let errDetail = '';
      try {
        const errJson = await res.json();
        errDetail = errJson.error || errJson.message || '';
      } catch {
        errDetail = await res.text().catch(() => '');
      }
      throw new Error(
        `Cloud sync failed (${res.status}): ${errDetail || res.statusText || 'Unknown error'}`
      );
    }

    return (await res.json()) as SyncResponsePayload;
  }
}

export const syncEngine = new SyncEngine();
