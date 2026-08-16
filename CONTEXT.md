# Practice Tracker

A focused tool for tracking musical instrument practice, maintaining consistent daily streaks, and balancing practice rotation across a kit of instruments.

## Language

**Kit**:
The collection of musical instruments or disciplines a musician actively practices.
_Avoid_: Inventory, instrument list, gear

**Instrument**:
A specific musical instrument or practice discipline in the kit (e.g., Guitar, Piano, Finger Drumming).
_Avoid_: Subject, skill, topic, task

**Session**:
A single continuous period of practice recorded for a specific instrument with a start time and duration.
_Avoid_: Workout, log, event, entry, practice run

**Tier**:
The classification of an instrument in the kit as either Primary or Secondary, determining visual hierarchy and target rotation balance.
_Avoid_: Priority, level, category, tag

**Streak**:
The number of consecutive calendar days with at least one completed practice session.
_Avoid_: Combo, run, chain

**Rotation**:
The proportional distribution of practice time across all instruments in the kit over a given rolling period.
_Avoid_: Breakdown, split, distribution ratio

**Tombstone**:
A record of a deleted session or instrument retaining a deletion timestamp to propagate removals across disconnected devices without resurrection.
_Avoid_: Soft-delete flag, purge marker

**Sync Status**:
The real-time synchronization state between the local device and the remote database (Synced, Syncing, Offline, or Auth Error).
_Avoid_: Cloud status, network indicator

**Guest Mode**:
The state of using the application without authentication, persisting practice sessions and kit settings exclusively to local storage.
_Avoid_: Demo mode, sandbox, anonymous mode

**Account**:
An authenticated musician identity associated with a unique set of cloud-synchronized practice records and kit configuration.
_Avoid_: Profile, tenant, login

**Adoption**:
The automatic transfer of unauthenticated local sessions and kit configuration into an account upon initial sign-in.
_Avoid_: Merge, claiming, ingestion

