# Asplenz public site

Marketing site for Asplenz Knowledge. Next.js + Tailwind, bilingual EN / FR, content-in-markdown.

## Architecture

```
asplenz-public-site/
├── md/                   Source-of-truth content, one file per page per locale
│   ├── home.en.md        home.fr.md
│   ├── wealth.en.md      wealth.fr.md
│   ├── kyc.en.md         kyc.fr.md
│   ├── how-it-works.en.md how-it-works.fr.md
│   ├── ai-agents.en.md   ai-agents.fr.md
│   ├── stack.en.md       stack.fr.md
│   └── pilot.en.md       pilot.fr.md
├── public/
│   └── images/log2_normal.png
├── src/
│   ├── components/       Layout + Nav (with mobile hamburger) + Footer + MarkdownPage
│   ├── lib/content.ts    Loads markdown by slug + locale
│   ├── pages/
│   │   ├── _app.tsx
│   │   ├── _document.tsx
│   │   ├── index.tsx     Renders home.<locale>.md
│   │   └── [slug].tsx    Renders <slug>.<locale>.md for every other page
│   └── styles/globals.css
├── next.config.js        i18n config (EN default, FR at /fr)
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

## Local dev

```bash
npm install
npm run dev
```

Open http://localhost:3000 (EN) or http://localhost:3000/fr (FR).

## Build

```bash
npm run build
npm run start
```

Or for static export : `next build && next export` (requires removing i18n which is dynamic ; use middleware-based routing if you need pure static).

## Editing content

1. Edit the markdown file for the page + locale (`md/<slug>.<locale>.md`).
2. Both locales MUST be kept in sync — every change to `<slug>.en.md` needs a matching change to `<slug>.fr.md`, and vice versa.
3. Front-matter fields :
   - `title` : browser tab + meta title
   - `description` : meta description for SEO / social share
   - `locale` : `en` or `fr`
4. Body is standard markdown, rendered via `react-markdown` + `remark-gfm` (tables, task lists).
5. Special : links written as `[[cta]Button text](/path)` render as styled call-to-action buttons ; regular `[text](/path)` render as inline links.

## Adding a new page

1. Create `md/<slug>.en.md` and `md/<slug>.fr.md`.
2. Add the entry to `NAV_ITEMS` in `src/components/Nav.tsx` (label EN + label FR).
3. That's it — the dynamic route `src/pages/[slug].tsx` picks it up automatically.

## Deployment

Cloudflare Pages or Vercel work out of the box.

- **Build command** : `npm run build`
- **Output directory** : `.next`
- **Node version** : 18+

## Design system

Palette inherited from Asplenz Knowledge product research docs :

- Ink `#1f2937` (primary text)
- Primary indigo `#4f46e5`, soft `#eef2ff`, dark `#4338ca`
- Accent amber `#d97706`, soft `#fef3c7`
- After green `#059669`, soft `#ecfdf5`
- Before red `#b91c1c`, soft `#fef2f2`

Font stack : system fonts (`-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, ...`).

## Guiding principles

The site was built to embody the GTM stance formalised in
`apps/knowledge/docs/product/research/` :

- **Attract by pain, not by feature.** Every page starts from a problem
  the reader recognises, not from Knowledge's capabilities.
- **Pain first, then stack.** A visitor recognises their stack ; that doesn't
  mean they have a problem. Pain qualifies better.
- **No vendor logos.** We do not display Alloy / Stripe / Camunda logos ;
  we describe architecture patterns so visitors whose vendor is not on
  our list still recognise themselves.
- **No pseudo-statistics.** Qualitative wording until we have real customer
  data. "A policy change means finding every workflow, application and
  spreadsheet where the logic was copied" — not "means editing 5
  applications, 3 workflows, 2 spreadsheets".
- **Small entry, not transformation.** The Pilot page describes a 4-8 week
  scoped engagement, not a platform migration.
- **AI as trigger, not category.** We mention agents but do not lead
  agent-first. Knowledge is not an AI product ; it is a policy layer that
  agents happen to be excellent callers for.

Any content update should preserve these stances.
