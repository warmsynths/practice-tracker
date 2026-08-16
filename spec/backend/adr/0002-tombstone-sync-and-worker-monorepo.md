# 0002: Tombstone-Based Sync Reconciliation and Monorepo Worker

## Context
When synchronizing practice sessions and instruments across multiple devices through a Cloudflare Worker BFF and Supabase, deletions on one device could be accidentally resurrected by another device reconnecting with older local cache. Additionally, we need a clean deployment and project structure for the Cloudflare Worker.

## Decision
1. **Tombstones (`deleted_at`)**: Deleted sessions and instruments will record a `deleted_at` timestamp in Supabase and local storage instead of immediate hard-deletion. When syncing, devices prune items marked deleted after the sync checkpoint.
2. **Lifecycle & Mutation Sync**: Sync triggers automatically on app visibility change, window focus, after every session mutation (create, edit, delete), and on a 60-second background heartbeat.
3. **Monorepo Worker (`/worker`)**: The Cloudflare Worker code, Wrangler configuration, and Supabase database migration scripts will live inside the `/worker` directory of this repository for shared TypeScript types and unified versioning.
4. **UI Configuration**: The app settings modal will host the Worker URL and sync secret passcode inputs with a real-time connection tester and status indicator pill.

## Consequences
- Deletions are reliable and consistent across disconnected and reconnected devices.
- No risk of orphaned data or sync loops.
- Both frontend and serverless BFF can be maintained, typed, and deployed together.
