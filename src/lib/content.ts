import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

/**
 * Loads a page's markdown content by slug + locale. Convention :
 *   md/<slug>.<locale>.md
 * where locale is 'en' or 'fr' and slug is the page identifier
 * ('home', 'wealth', 'kyc', 'how-it-works', 'ai-agents', 'stack', 'pilot').
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
  // Home-only : structured sections used by HomeLayout. Null on other pages.
  sections: Record<string, unknown> | null;
}

const MD_DIR = path.join(process.cwd(), 'md');

export function loadPage(slug: string, locale: string): PageContent {
  const safeLocale = locale === 'fr' ? 'fr' : 'en';
  const filename = `${slug}.${safeLocale}.md`;
  const filepath = path.join(MD_DIR, filename);

  if (!fs.existsSync(filepath)) {
    throw new Error(`Missing markdown page: ${filepath}`);
  }

  const raw = fs.readFileSync(filepath, 'utf-8');
  const parsed = matter(raw);
  const data = parsed.data as Record<string, unknown>;

  // Extract standard fields ; anything else is treated as structured sections
  // (used by the home page composition). Explicit `?? null` prevents
  // `undefined` from breaking getStaticProps serialisation.
  const KNOWN = new Set(['title', 'description', 'locale', 'navLabel', 'kicker', 'ctaLabel', 'ctaHref', 'contactEmail']);
  const sections: Record<string, unknown> = {};
  let hasSections = false;
  for (const [k, v] of Object.entries(data)) {
    if (!KNOWN.has(k)) {
      sections[k] = v;
      hasSections = true;
    }
  }

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
    body: parsed.content,
    sections: hasSections ? sections : null,
  };
}

/**
 * Enumerate every page slug available on disk (both locales must exist).
 * Used by getStaticPaths.
 */
export function listPageSlugs(): string[] {
  const files = fs.readdirSync(MD_DIR);
  const slugs = new Set<string>();
  for (const f of files) {
    const match = f.match(/^(.+)\.(en|fr)\.md$/);
    if (match) slugs.add(match[1]);
  }
  return Array.from(slugs);
}
