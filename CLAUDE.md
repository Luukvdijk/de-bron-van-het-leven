# De Bron van het Levende Woord (concept)

Concept website for De Bron van het Levende Woord, an apostolic-prophetic church in Almere (current site: bronvhlevendewoord.nl, WordPress). Built 2026-10-28 as a sales concept; business context lives in ATLAS (`Projects/De Bron van het Levende Woord.md`).

- Next.js 16 one-pager, Tailwind v4. Run with preview entry `de-bron-van-het-leven` (port 5183).
- All copy, schedule, photos and contact details: `src/content.ts`.
- Agenda and the "next service" card are computed on the client from the recurring rules in `gatherings` (`src/lib/schedule.ts`), so they never go stale.
- Photos are hotlinked from the church's WordPress uploads (allowed in `next.config.ts`).
- Concept only: `robots` is noindex in `src/app/layout.tsx`.
- No em-dashes or en-dashes anywhere.
