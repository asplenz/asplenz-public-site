# drafts/

Source-of-truth for content that is **NOT rendered on the public site**.

Files here are markdown / prose that Asplenz uses privately :

- for discovery conversations (send as a link or paste into email)
- as one-pager or PDF source
- as the future public version once a wedge is validated

Next.js catch-all in `src/pages/[...slug].tsx` reads from `md/`, not from here. Files in `drafts/` never resolve to a public URL. Not indexed by sitemap generators, not exposed to crawlers, not surfaced by analytics on the live site.

## Structure

Mirrors `md/` so the promotion from draft to public is a simple `mv` :

```
drafts/
  use-cases/
    governed-policies-for-excel.{en,fr}.md   → would become md/use-cases/... when published
```

## Rules

- **Do not link to a `drafts/` file from public content.** Not from `md/`, not from `src/`.
- **Do not add `drafts/` to any published index, sitemap, or search config.**
- Files here can be edited freely without triggering a public rebuild.
- Content is real — write it as if it were the final public version — but its publication is gated on the validation of the wedge it supports.

## What lives here today

- `use-cases/governed-policies-for-excel.{en,fr}.md` — page prepared for the EUC wedge (Excel + spreadsheet policy governance). Published only after the wedge validates via 3+ discovery conversations. See internal memory `project_knowledge_euc_wedge_hypothesis.md`.
