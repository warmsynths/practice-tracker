# Specification: Backend Cloud Sync via Cloudflare Worker BFF and Supabase

## Problem Statement

As a musician using Practice Tracker, my practice sessions, kit configuration, and streak history are currently stored exclusively in browser local storage on the single device where I recorded them. 

If I switch between my phone, tablet, and desktop computer, practice in a rehearsal studio on mobile, or clear browser site data, my practice logs become fragmented or permanently lost. Furthermore, relying purely on manual JSON backups is tedious and error-prone. I need my practice data to be automatically preserved and accessible across all my devices without sacrificing the instant responsiveness or offline reliability of the practice timer.

## Solution

A local-first, zero-friction cloud synchronization backend powered by a Cloudflare Worker Backend-for-Frontend (BFF) and a Supabase PostgreSQL database. 

The application continues to record practice timers and kit changes instantly to local storage for zero-latency feedback and 100% offline capability. When connected to the internet, the frontend seamlessly exchanges timestamped deltas with the Cloudflare Worker via a secure sync passcode header. The Worker safely proxies mutations to Supabase using server-side credentials, synchronizing new sessions, edits, and deletions across all devices while keeping database keys hidden.

## User Stories

### Setup & Authentication
1. As a musician, I want to enter my Cloudflare Worker URL and sync passcode in the Settings modal, so that my app securely connects to my private cloud backend.
2. As a musician, I want to click a "Test Connection" button in Settings, so that I can immediately verify whether my backend URL and passcode are valid before relying on sync.
3. As a musician, I want invalid credentials or connection failures to display clear, friendly feedback in Settings, so that I know if I made a typo in my passcode or Worker URL.
4. As a musician, I want my sync passcode to be securely stored in my browser's local settings, so that I do not have to re-enter it every time I open the app.
5. As a musician, I want my cloud credentials to remain isolated on the Cloudflare edge, so that my Supabase service role keys are never exposed in client-side network requests or source bundles.

### Data Synchronization & Reconciliation
6. As a musician, I want all my existing local instruments and practice sessions to be automatically uploaded to Supabase on first connection, so that none of my historical practice data is lost.
7. As a musician, I want the app to synchronize automatically whenever I open or return to the app tab, so that I always see my latest practice history recorded on other devices.
8. As a musician, I want the app to trigger a background sync immediately after I start, end, log, edit, or delete a session, so that changes propagate without manual action.
9. As a musician, I want the app to run a periodic background sync heartbeat while open, so that long-open sessions stay current with other devices.
10. As a musician, I want to click a "Sync Now" button in Settings, so that I can manually force an immediate synchronization at any time.
11. As a musician, I want remote sessions and kit updates from other devices to merge smoothly into my local views without reloading the page or interrupting a running timer.

### Offline Resilience & Rehearsal Flow
12. As a musician practicing in an isolated rehearsal space with no internet connection, I want to start, pause, finish, and log practice sessions without delay or errors, so that my practice routine is never blocked by poor connectivity.
13. As a musician who recorded sessions while offline, I want the app to automatically sync all pending offline sessions as soon as internet connectivity is restored, so that my practice streaks and rotation totals catch up effortlessly.
14. As a musician whose network connection drops during a sync request, I want the app to fail silently and retry on the next interval without throwing intrusive error popups.

### Kit Management & Deletions (Tombstones)
15. As a musician, I want changes to instrument names, colors, and tiers to synchronize across all my devices, so that my kit remains consistent everywhere.
16. As a musician, I want archived instruments to remain archived across all devices while preserving their historical sessions.
17. As a musician, I want deleted sessions or instruments to create tombstones with deletion timestamps, so that deleting an item on my phone removes it from my laptop without it being accidentally re-uploaded.
18. As a musician, I want tombstoned records to be purged cleanly from local storage once confirmed by the backend, so that local storage remains tidy.

### Visual Feedback & Status
19. As a musician, I want to see a subtle sync indicator pill in the app header (Synced, Syncing, Offline, or Error), so that I have peace of mind that my practice data is safely backed up.
20. As a musician, I want hovering or clicking the sync pill to show the last successful sync timestamp, so that I can verify how fresh my data is.
21. As a musician, I want the app to clearly indicate when it is running in purely local/offline mode (unconfigured backend), so that I understand data is only stored on the current device.

### Data Portability & Safety
22. As a musician, I want to continue exporting and importing standard JSON backups even when cloud sync is enabled, so that I always retain full sovereign ownership of my practice data.
23. As a musician, I want a "Disconnect Cloud Sync" option in Settings, so that I can revert to local-only operation if I choose without losing my existing local records.

## Implementation Decisions

### Module Architecture
- **Lit PWA Client (`src/`)**: Maintains existing UI components and reactive state. Enriched with a dedicated `SyncEngine` module that manages network calls, timestamps, delta generation, and store reconciliation.
- **Practice Store (`src/store/practice-store.ts`)**: Augmented to track `updated_at` and `deleted_at` timestamps on entities, integrate with `SyncEngine`, and expose reactive `syncStatus` ('synced' | 'syncing' | 'offline' | 'error' | 'local').
- **Cloudflare Worker BFF (`worker/`)**: Lightweight TypeScript serverless application deployed via Wrangler. Handles CORS, passcode validation via `X-PT-Secret`, batch upserts, and delta queries against Supabase.
- **Supabase PostgreSQL Database**: Hosted PostgreSQL database storing normalized `instruments` and `sessions` tables with indexes on `updated_at`.

### Secret Gateway & Security Contract
- Cloudflare Worker securely stores environment secrets:
  - `SUPABASE_URL`: Supabase project REST/PostgreSQL URL.
  - `SUPABASE_SERVICE_ROLE_KEY`: Service role secret for database read/write bypass of anon RLS.
  - `PT_PASSCODE`: Secret passcode matching the client's `X-PT-Secret` header.
- Client passes `X-PT-Secret` header with all sync and health requests.
- Worker validates `X-PT-Secret`. Requests with invalid or missing passcodes receive `401 Unauthorized`.
- Worker enforces strict CORS headers allowing only designated web origins or configured wildcards.

### Database Schema Definition (`worker/schema.sql`)
```sql
CREATE TABLE IF NOT EXISTS instruments (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  color TEXT NOT NULL,
  tier TEXT NOT NULL CHECK (tier IN ('primary', 'secondary')),
  archived BOOLEAN NOT NULL DEFAULT false,
  deleted_at TIMESTAMPTZ NULL,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS sessions (
  id TEXT PRIMARY KEY,
  instrument_id TEXT NOT NULL,
  start_time TIMESTAMPTZ NOT NULL,
  end_time TIMESTAMPTZ NOT NULL,
  duration INTEGER NOT NULL,
  notes TEXT NULL,
  deleted_at TIMESTAMPTZ NULL,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_instruments_updated_at ON instruments (updated_at);
CREATE INDEX IF NOT EXISTS idx_sessions_updated_at ON sessions (updated_at);
CREATE INDEX IF NOT EXISTS idx_sessions_instrument_id ON sessions (instrument_id);
```

### Sync Protocol & Delta API Contract
- `GET /api/health`:
  - Request: Header `X-PT-Secret: <passcode>`
  - Response: `{ status: "ok", timestamp: string }` (or `401 Unauthorized`)
- `POST /api/sync`:
  - Request: Header `X-PT-Secret: <passcode>`, Body:
    ```json
    {
      "lastSyncedAt": "2026-08-16T12:00:00.000Z",
      "instruments": [ ... ],
      "sessions": [ ... ],
      "tombstones": [
        { "id": "s-123", "type": "session", "deletedAt": "2026-08-16T12:05:00.000Z" }
      ]
    }
    ```
  - Server Action:
    1. Upserts incoming client instruments and sessions to Supabase with `updated_at = now()`.
    2. Applies incoming tombstones by setting `deleted_at = deletedAt` and `updated_at = now()`.
    3. Fetches all rows from Supabase where `updated_at > lastSyncedAt`.
    4. Segregates active records vs tombstoned records (`deleted_at IS NOT NULL`).
  - Response:
    ```json
    {
      "syncedAt": "2026-08-16T12:10:00.000Z",
      "instruments": [ ... ],
      "sessions": [ ... ],
      "tombstones": [ ... ]
    }
    ```

### Conflict Resolution & Reconciliation
- Reconciliation operates on **Last-Write-Wins (LWW)** using ISO timestamps (`updated_at`).
- Client merges incoming remote records into its local array:
  - If remote record `updated_at` > local record `updated_at`, remote overwrites local.
  - If record is in incoming `tombstones`, client deletes it from local storage.
  - Local records not present on server are preserved and will be pushed on the next sync cycle.
- Local `localStorage` keys updated atomically upon successful sync.

## Testing Decisions

### Seams for Testing
1. **Frontend Sync Seam (`SyncEngine` / `PracticeStore`)**:
   - Test external behavior of the store and sync coordinator.
   - Mock network responses (200 OK with deltas, 401 Unauthorized, network error / timeout).
   - Verify: Local store updates state, merges incoming deltas, prunes tombstoned sessions/instruments, sets correct reactive `syncStatus`, and queues unsynced changes when offline.
2. **Cloudflare Worker API Seam (`worker/src/index.ts`)**:
   - Test Worker HTTP endpoints with mock HTTP requests.
   - Verify: `GET /api/health` validates passcode; `POST /api/sync` validates schema, forwards upserts to Supabase, queries incremental deltas, and returns structured JSON with appropriate CORS headers.
3. **Database Schema Validation**:
   - Verify `worker/schema.sql` runs cleanly on standard PostgreSQL, enforces table constraints, and creates appropriate indexes on `updated_at`.

### Prior Art & Test Philosophy
- Avoid testing internal implementation details (e.g. private variables or individual timer intervals).
- Focus on end-to-end user workflows: initiating a sync, resolving conflicting edits, and propagating deletions via tombstones.

## Out of Scope

- **Multi-User Authentication Screens**: No public user registration, email confirmation, or OAuth login screens. Single-user personal application gated via passcode.
- **Realtime WebSocket Subscriptions**: No long-lived WebSocket / Supabase Realtime channels. HTTP lifecycle/mutation polling is optimal for battery and bandwidth.
- **Concurrent Live Timer Synchronization**: An active running stopwatch session (`ActiveSession`) remains local to the device until stopped and completed as a `Session`.
- **Audio / Media File Storage**: Only structured metadata, instrument configurations, and practice logs are stored; no audio recording uploads.

## Further Notes

- Fully aligned with [CONTEXT.md](file:///e:/work/practice-tracker/CONTEXT.md) terminology: `Kit`, `Instrument`, `Session`, `Tier`, `Streak`, `Rotation`, `Tombstone`, `Sync Status`.
- Governed by [ADR 0001](file:///e:/work/practice-tracker/spec/backend/adr/0001-local-first-cloud-sync-via-cloudflare-bff.md), [ADR 0002](file:///e:/work/practice-tracker/spec/backend/adr/0002-tombstone-sync-and-worker-monorepo.md), and [ADR 0003](file:///e:/work/practice-tracker/spec/backend/adr/0003-bidirectional-delta-sync-protocol.md).
