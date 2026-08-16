# 02 — Instrument Kit Cloud Sync & Palette Propagation

**What to build:** 
Full multi-device synchronization for the musician's instrument kit. A musician can create, edit, reorder, recolor, archive, or delete instruments in their kit on one device, and have the changes immediately sync through the Cloudflare Worker to Supabase and reflect across all their other devices and views (kit view, practice wheel colors, and data rotation breakdown).

**Blocked by:** 01 — Core Manual Session Cloud Sync Tracer Bullet

**Status:** ready-for-agent

- [ ] `worker/schema.sql` defines the Supabase `instruments` table with columns `id`, `name`, `color`, `tier`, `archived`, `deleted_at`, and `updated_at`, with an index on `updated_at`.
- [ ] Cloudflare Worker `/api/sync` handles bidirectional delta synchronization for `instruments` (upserting client updates and returning server-side updates).
- [ ] Practice Store records `updated_at` timestamps on instrument additions, edits, and archiving.
- [ ] Existing local default/custom instruments are automatically upserted to Supabase upon initial sync connection.
- [ ] Modifying an instrument's name, tier, or color in `pt-edit-instrument-modal` or `pt-kit-view` propagates through Supabase to update rotation charts and donut visuals across devices.
- [ ] Archiving an instrument in the kit view synchronizes its archived status across devices while preserving past practice session metrics.
