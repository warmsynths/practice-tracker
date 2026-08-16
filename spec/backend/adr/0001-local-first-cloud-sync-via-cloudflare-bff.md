# 0001: Local-First Cloud Sync via Cloudflare Worker BFF and Supabase

## Context
Practice Tracker is a single-user PWA for tracking instrument practice sessions that previously stored all data exclusively in browser `localStorage`. We need practice logs to be permanently preserved and available across multiple devices.

## Decision
We decided on a **Local-First architecture with a Cloudflare Worker BFF and Supabase PostgreSQL**:
1. **Local-First Persistence**: UI interactions and timers read/write directly to local storage for zero-latency tactile feedback and full offline functionality.
2. **Cloudflare Worker BFF**: Acts as a secured proxy holding the `SUPABASE_SERVICE_ROLE_KEY` and Supabase URL. The client communicates with the Worker via an `X-PT-Secret` passcode header and CORS restrictions, eliminating the need for Supabase user management / login screens.
3. **Automatic Upsert**: On initial connection, existing local instruments and sessions are pushed to Supabase idempotently.

## Consequences
- No complex auth/signup UI is needed for the single-user experience.
- Practice Tracker functions seamlessly offline and syncs changes in the background when connectivity is available.
- Secrets remain on Cloudflare edge workers rather than exposed in client-side bundles.
