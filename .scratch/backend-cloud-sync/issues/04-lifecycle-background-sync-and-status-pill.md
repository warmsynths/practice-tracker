# 04 — Zero-Click Lifecycle Background Sync & Status Indicator

**What to build:** 
Automated, invisible background synchronization and real-time visual feedback for the musician. Practice Tracker automatically catches up when switching browser tabs (`visibilitychange`), regaining window focus, or running on a 60-second periodic heartbeat. A discreet, interactive sync status indicator in the header communicates current sync state (Synced, Syncing, Offline, or Auth Error) with tooltip details and a manual "Sync Now" trigger.

**Blocked by:** 03 — Live Timer Completion, Session Deletions & Tombstones

**Status:** closed

- [x] Sync coordinator listens to `document.visibilityState === 'visible'`, `window.focus`, and `window.online` events to trigger background delta syncs automatically.
- [x] A 60-second background heartbeat polls for remote changes while the application remains open.
- [x] Practice Store exposes a reactive `syncStatus` state ('synced' | 'syncing' | 'offline' | 'error' | 'local') and `lastSyncedAt` timestamp.
- [x] A discreet sync status pill is integrated into the top navigation header (`pt-app`), displaying appropriate icons/colors and micro-animations during active syncs.
- [x] Clicking or hovering over the sync pill displays a quick tooltip showing the last sync time and offers a manual "Sync Now" button.
- [x] Multi-tab test: Changes made in one browser tab automatically appear in another tab within seconds of switching focus, with zero manual reloads.
