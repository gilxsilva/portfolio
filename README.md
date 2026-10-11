# Gil Silva · Ingeniero y Diseñador, Vol. 1

Personal portfolio designed as an album. The homepage plays like a record: the cover (intro), Side A (work), Side B (projects), liner notes (about), extras (music and writing), and an encore (contact). A mini player at the bottom tracks the current section and doubles as navigation.

Stanford Symbolic Systems + HCI · 3× Amazon SDE · CollegePlanAI (acquired) · Born in SF, raised in Chapala, MX.

## Stack

- [Next.js 16](https://nextjs.org) (App Router, ISR) on Vercel
- React 19 + TypeScript
- Tailwind CSS v4
- Fraunces (display) + Plus Jakarta Sans (body) via `next/font`
- `next/og` for album-cover OpenGraph images
- No animation library: CSS only, and it respects `prefers-reduced-motion`

## Run locally

```bash
pnpm install
cp .env.example .env.local   # optional: add your Substack feed
pnpm dev                     # http://localhost:3000
```

Other scripts: `pnpm build`, `pnpm start`, `pnpm lint`.

## Environment

| Variable | Purpose |
| --- | --- |
| `SUBSTACK_FEED_URL` | Substack RSS feed (e.g. `https://you.substack.com/feed`). Refreshed hourly. Missing or failing feeds show a friendly empty state. |
| `NEXT_PUBLIC_SITE_URL` | Public URL for canonical links and OG images. Optional on Vercel. |

## Updating content

All copy lives in `lib/`. You never need to edit components to change text.

| File | What it controls |
| --- | --- |
| `lib/data.ts` | Hero, Side A (jobs and impact bullets), Side B (projects and case studies), bonus tracks, liner notes, awards, contact. Wrap metrics in `**double asterisks**` to bold them. |
| `lib/onRepeat.ts` | 3 to 5 songs on repeat (title, artist, link, optional album art). |
| `lib/now.ts` | The /now page: building, reading, learning, and the last-updated date. |
| `lib/sections.ts` | Homepage section order and labels used by the mini player. |

Images:

- Project screenshots go in `public/projects/` and are set with `image: "/projects/name.png"` in `lib/data.ts`.
- Album art goes in `public/music/` (or use a Spotify `i.scdn.co` / Apple Music `mzstatic.com` URL).
- The résumé is `public/Gil_Silva_Resume.pdf`.

## Structure

```
app/                 routes: / (album), /writing, /now, OG images, icon
components/album/    homepage sections and shared track, vinyl, and gold-record pieces
components/layout/   header, mini player, inner-page footer
components/writing/  post list and empty state
components/now/      song cards
lib/                 content data, Substack fetcher, metadata and OG helpers
public/              résumé, project screenshots, album art
```

Eyeing NYC. Open to Europe. Honestly, anywhere good work is happening. Remote works too.
