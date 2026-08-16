# Modular Lit Web Components Architecture & PWA

We decided to build the frontend as a collection of modular Lit custom elements powered by Vite and TypeScript, packaged as an offline-first Progressive Web App (PWA).

A centralized reactive store manages the application state (instruments, sessions, active timer, preferences) with local persistence. Encapsulated Shadow DOM styling in Lit ensures high visual fidelity matching the neo-brutalist design specifications without global stylesheet leaks, while PWA capabilities allow standalone mobile installation.
