import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { isLocale, locales, type Locale } from '@/lib/i18n'

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string }
}): Promise<Metadata> {
  if (!isLocale(params.locale)) return {}
  return {
    alternates: {
      canonical: `/${params.locale}`,
      languages: {
        en: '/en',
        fr: '/fr',
      },
    },
  }
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  if (!isLocale(params.locale)) notFound()
  const locale = params.locale as Locale

  return (
    <>
      <Header locale={locale} />
      <main className="min-h-[70vh]">{children}</main>
      <Footer locale={locale} />
    </>
  )
}
