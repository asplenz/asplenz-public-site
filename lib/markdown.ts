import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import type { Locale } from './i18n'

const MD_DIR = path.join(process.cwd(), 'md')

const LANG_MARKER = /^<!--\s*@lang\s+(en|fr)\s*-->\s*$/

export type PageFrontmatter = {
  slug: string
  title_en: string
  title_fr: string
  description_en: string
  description_fr: string
}

export type ParsedPage = {
  frontmatter: PageFrontmatter
  content: Record<Locale, string>
}

export type LocalisedPage = {
  slug: string
  title: string
  description: string
  content: string
  locale: Locale
}

function readAndSplit(slug: string): ParsedPage {
  const filePath = path.join(MD_DIR, `${slug}.md`)
  const raw = fs.readFileSync(filePath, 'utf-8')
  const parsed = matter(raw)
  const fm = parsed.data as PageFrontmatter

  const lines = parsed.content.split(/\r?\n/)
  const buckets: Record<Locale, string[]> = { en: [], fr: [] }
  let current: Locale | null = null

  for (const line of lines) {
    const marker = line.match(LANG_MARKER)
    if (marker) {
      current = marker[1] as Locale
      continue
    }
    if (current) buckets[current].push(line)
  }

  return {
    frontmatter: fm,
    content: {
      en: buckets.en.join('\n').trim(),
      fr: buckets.fr.join('\n').trim(),
    },
  }
}

export function getPage(slug: string, locale: Locale): LocalisedPage {
  const parsed = readAndSplit(slug)
  const title = locale === 'en' ? parsed.frontmatter.title_en : parsed.frontmatter.title_fr
  const description =
    locale === 'en' ? parsed.frontmatter.description_en : parsed.frontmatter.description_fr

  return {
    slug: parsed.frontmatter.slug,
    title,
    description,
    content: parsed.content[locale],
    locale,
  }
}
