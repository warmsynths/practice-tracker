# 03 — Live Timer Completion, Session Deletions & Tombstones

**What to build:** 
End-to-end cloud synchronization for completed live stopwatch practice sessions, session edits, and cross-device deletions. When a musician stops a live practice timer, the completed session is instantly logged and pushed to the cloud backend. When a session or instrument is deleted on one device, it generates a tombstone (`deleted_at`) that purges the item from all other connected devices without resurrection.

**Blocked by:** 02 — Instrument Kit Cloud Sync & Palette Propagation

**Status:** ready-for-agent

- [ ] Supabase schema and indexes support querying tombstone rows where `deleted_at IS NOT NULL`.
- [ ] Finishing a live stopwatch timer in `pt-main-view` generates a completed session and triggers an optimistic background sync to Supabase.
- [ ] Editing notes, duration, or start/end times in `pt-edit-session-modal` updates the session's `updated_at` timestamp and syncs changes to Supabase.
- [ ] Deleting a session in `pt-edit-session-modal` or `pt-data-view` assigns a tombstone with `deleted_at = now()`, pushes it to Supabase, and prunes it from local storage across all devices.
- [ ] Sessions recorded while disconnected from the internet are held locally and automatically pushed to the cloud upon the next successful connection.
