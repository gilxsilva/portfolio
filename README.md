# Gil Silva — Portfolio

Personal portfolio site. Next.js + Tailwind v4 + TypeScript, static export.

## Stack

- **Next.js 16** — static export (`output: 'export'`)
- **Tailwind CSS v4** — CSS-first config, design tokens in `app/globals.css`
- **Fraunces** (display) + **Plus Jakarta Sans** (body) via `next/font/google`
- No UI library — ~4 dependencies total

## Running locally

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Editing content

All text, links, and project data live in one file: [`lib/data.ts`](./lib/data.ts).  
Edit it freely — no need to touch any component.

## Adding your résumé

Drop your PDF at `public/resume.pdf`. The "View Résumé" button will work automatically.

## Deployment

### Vercel (recommended — free, zero config)

1. Push this repo to GitHub
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo
3. Click **Deploy** — done
4. Optionally: remove `output: 'export'` and `images: { unoptimized: true }` from `next.config.mjs` for Vercel's native image optimization

### GitHub Pages (also free)

1. If deploying to `username.github.io/repo-name` (not a root domain), add `basePath: '/repo-name'` to `next.config.mjs`
2. Push to GitHub
3. Settings → Pages → Source: **GitHub Actions**
4. Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages
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
      - uses: pnpm/action-setup@v4
        with:
          version: 9
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: pnpm
      - run: pnpm install
      - run: pnpm build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: out
      - id: deploy
        uses: actions/deploy-pages@v4
```

## Design tokens

All design tokens are defined in `app/globals.css` under `@theme`:

| Token | Value | Usage |
|---|---|---|
| `--color-ink` | `#0F0E0D` | Primary text |
| `--color-canvas` | `#F7F4EF` | Page background |
| `--color-accent` | `#C45A2A` | Terracotta accent |
| `--color-muted` | `#6B6560` | Secondary text |
| `--color-surface` | `#EDE8E0` | Card/section backgrounds |
| `--font-display` | Fraunces | Headings |
| `--font-sans` | Plus Jakarta Sans | Body/UI |
