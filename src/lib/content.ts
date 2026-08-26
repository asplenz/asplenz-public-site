import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

/**
 * Loads a page's markdown content by slug + locale. Convention :
 *   md/<slug>.<locale>.md            for top-level pages
 *   md/<segment>/<slug>.<locale>.md  for nested URLs (2026-08-26)
 *
 * A slug like "product/enforcement" maps to
 * md/product/enforcement.<locale>.md ; the URL /product/enforcement
 * renders the same file via the catch-all route.
 */

export interface PageContent {
  slug: string;
  locale: 'en' | 'fr';
  title: string;
  description: string;
  body: string;
  navLabel: string | null;
  // Hero fields, shared across every non-home page.
  kicker: string | null;
  ctaLabel: string | null;
  ctaHref: string | null;
  // Optional email displayed under the hero CTA button (used on the pilot
  // page so a user without a mail client can copy the address).
  contactEmail: string | null;
  // Optional theme opt-in : "clean" flips the page to the white/slate/dark-
  // code-blocks variant. Omit for the default warm-taupe theme.
  theme: string | null;
}

const MD_DIR = path.join(process.cwd(), 'md');

export function loadPage(slug: string, locale: string): PageContent {
  const safeLocale = locale === 'fr' ? 'fr' : 'en';
  // Nested slugs like "product/enforcement" translate directly to the
  // filesystem path ; forward slashes are preserved so the OS handles
  // the traversal.
  const filename = `${slug}.${safeLocale}.md`;
  const filepath = path.join(MD_DIR, ...filename.split('/'));

  if (!fs.existsSync(filepath)) {
    throw new Error(`Missing markdown page: ${filepath}`);
  }

  const raw = fs.readFileSync(filepath, 'utf-8');
  const parsed = matter(raw);
  const data = parsed.data as Record<string, unknown>;

  return {
    slug,
    locale: safeLocale,
    title: (data.title as string) || slug,
    description: (data.description as string) || '',
    navLabel: (data.navLabel as string) ?? null,
    kicker: (data.kicker as string) ?? null,
    ctaLabel: (data.ctaLabel as string) ?? null,
    ctaHref: (data.ctaHref as string) ?? null,
    contactEmail: (data.contactEmail as string) ?? null,
    // Default theme is "clean" site-wide (white bg + slate text + dark
    // code blocks + syntax highlighting). A page opts out by setting an
    // explicit theme value in its frontmatter (e.g. theme: warm falls
    // through to the :root palette).
    theme: (data.theme as string) ?? 'clean',
    body: parsed.content,
  };
}

/**
 * Enumerate every page slug available on disk (both locales assumed
 * present, we only check .en.md then trust the .fr.md sibling).
 *
 * Recurses into subdirectories so a file at md/product/enforcement.en.md
 * yields the slug "product/enforcement", suitable for a catch-all
 * Next.js route.
 *
 * Used by getStaticPaths.
 */
export function listPageSlugs(): string[] {
  const slugs = new Set<string>();

  function walk(dir: string, prefix: string) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(full, prefix ? `${prefix}/${entry.name}` : entry.name);
        continue;
      }
      const match = entry.name.match(/^(.+)\.(en|fr)\.md$/);
      if (!match) continue;
      const base = match[1];
      const slug = prefix ? `${prefix}/${base}` : base;
      slugs.add(slug);
    }
  }

  walk(MD_DIR, '');
  return Array.from(slugs);
}
