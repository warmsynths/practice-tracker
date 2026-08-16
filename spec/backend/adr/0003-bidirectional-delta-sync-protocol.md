# 0003: Bidirectional Delta Sync Protocol

## Context
We need a lightweight, resilient communication protocol between the single-user Lit PWA frontend and the Cloudflare Worker BFF backed by Supabase PostgreSQL.

## Decision
1. **Single `/api/sync` Endpoint**: All synchronization happens through a single bidirectional POST endpoint (`/api/sync`) plus a lightweight health check endpoint (`/api/health`).
2. **State-Based Last-Write-Wins (LWW)**: Local records store an `updated_at` ISO string. The client sends records modified since its `lastSyncedAt` timestamp. The server applies upserts and tombstones, fetches any server changes with `updated_at > lastSyncedAt`, and returns the delta in a single atomic response.
3. **Database Schema (`worker/schema.sql`)**: Supabase PostgreSQL tables `instruments` and `sessions` will have indexes on `updated_at`, support `deleted_at` timestamps for tombstones, and be accessible via the Worker's service role key.

## Consequences
- Single round-trip synchronization with zero partial-failure states.
- Clean offline reconciliation without complex operation queue replaying.
- Low serverless execution costs on Cloudflare Workers and minimal Supabase connection overhead.
