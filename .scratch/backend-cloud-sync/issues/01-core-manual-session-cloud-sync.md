# 01 — Core Manual Session Cloud Sync Tracer Bullet

**What to build:** 
The foundational end-to-end cloud synchronization pipe for Practice Tracker. A musician can open the Settings modal, configure their Cloudflare Worker URL and sync passcode, verify the connection with a live "Test Connection" button, and immediately record manual practice sessions that persist to both local browser storage and Supabase PostgreSQL.

**Blocked by:** None — can start immediately.

**Status:** closed

- [x] `worker/schema.sql` defines the Supabase `sessions` table with columns `id`, `instrument_id`, `start_time`, `end_time`, `duration`, `notes`, `deleted_at`, and `updated_at`, along with indexes on `updated_at`.
- [x] Cloudflare Worker project is scaffolded in `/worker` with TypeScript, `wrangler.toml`, and CORS headers.
- [x] Worker implements `GET /api/health` and `POST /api/sync` endpoints validating the `X-PT-Secret` passcode header.
- [x] Practice Store and domain models record `updated_at` timestamps on session records.
- [x] Settings modal provides input fields for Worker Endpoint URL and Sync Passcode with a "Test Connection" button providing immediate visual status (connected / unauthorized / error).
- [x] Saving a manual practice session via the manual entry modal commits locally and triggers a delta sync to Supabase.
- [x] Manually logging a session on one browser and then connecting on another browser pulls and displays the session data.
