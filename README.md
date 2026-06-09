# Gil Silva — Portfolio

**Ingeniero y diseñador.** Engineer and designer building technology that empowers people.

Stanford Symbolic Systems + HCI · 3× Amazon SDE · CollegePlan (acquired) · First-gen

---

## Stack

| | |
|---|---|
| **Next.js 15** | Static export, App Router |
| **Tailwind CSS v4** | CSS-first config, design tokens in `globals.css` |
| **Framer Motion** | Snappy fade-up animations, reduced-motion aware |
| **Fraunces** + **Plus Jakarta Sans** | Display + body via `next/font/google` |

Zero UI libraries. ~4 runtime dependencies.

---

## Running locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Editing content

Everything — name, bio, jobs, projects, links — lives in one file:

```
lib/data.ts
```

No component digging needed. Change it there, done everywhere.

---

## Swapping your Bitmoji

Drop your Bitmoji PNG at `public/bitmoji.png`.  
It loads automatically. Falls back to `bitmoji.svg` → `avatar.svg` if not found.

## Adding your résumé

Drop your PDF at `public/resume.pdf`. The **View Résumé** button wires up automatically.

---

## Deploy

### Vercel (recommended)

1. Push to GitHub
2. Import at [vercel.com/new](https://vercel.com/new)
3. Hit **Deploy** — zero config needed

> Remove `output: 'export'` and `images: { unoptimized: true }` from `next.config.mjs` to unlock Vercel's native image optimization.

### GitHub Pages

1. Add `basePath: '/repo-name'` to `next.config.mjs` if not on a root domain
2. Settings → Pages → Source: **GitHub Actions**
3. Add `.github/workflows/deploy.yml`:

```yaml
name: Deploy
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    permissions:
      pages: write
      id-token: write
    environment:
      name: github-pages
      url: ${{ steps.deploy.outputs.page_url }}
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm install
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: out
      - id: deploy
        uses: actions/deploy-pages@v4
```

---

## Design tokens

Defined in `app/globals.css` under `@theme`:

| Token | Value | |
|---|---|---|
| `--color-ink` | `#18120E` | Primary text |
| `--color-canvas` | `#EEECEA` | Page background |
| `--color-accent` | `#3B82C4` | Blue accent |
| `--color-muted` | `#6B6762` | Secondary text |
| `--color-surface` | `#E5E3E0` | Section backgrounds |
| `--font-display` | Fraunces | Headings |
| `--font-sans` | Plus Jakarta Sans | Body / UI |

---

*Based in the Bay Area. Open to remote.*
