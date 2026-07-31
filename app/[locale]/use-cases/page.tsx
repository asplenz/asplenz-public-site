import type { Metadata } from 'next'
import { MarkdownPage, getPage } from '@/components/MarkdownPage'
import { isLocale, type Locale } from '@/lib/i18n'
import { notFound } from 'next/navigation'

const SLUG = 'use-cases'

export async function generateMetadata({
  params,
}: {
  params: { locale: string }
}): Promise<Metadata> {
  if (!isLocale(params.locale)) return {}
  const page = getPage(SLUG, params.locale as Locale)
  return { title: page.title, description: page.description }
}

export default function Page({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound()
  return <MarkdownPage slug={SLUG} locale={params.locale as Locale} />
}
