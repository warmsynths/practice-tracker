# Local-first Storage with JSON Portability

We chose local-first browser storage (`localStorage` / `IndexedDB`) paired with JSON export and import over a remote server-backed database.

This keeps the application fast, zero-latency, private, and usable completely offline as a standalone web application or PWA without requiring user authentication, database provisioning, or hosting overhead. The JSON export/import mechanism ensures users retain full ownership and portability of their practice logs.
