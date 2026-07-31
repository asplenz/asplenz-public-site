import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  Layers, ShieldCheck, RotateCcw,
  Users, KeyRound, Radio,
  ArrowRight,
} from 'lucide-react'
import { isLocale, type Locale } from '@/lib/i18n'
import { getHomeContent, type HomeContent } from '@/content/home'
import { HomeVerdictMock } from '@/components/mocks/HomeVerdictMock'

export async function generateMetadata({
  params,
}: {
  params: { locale: string }
}): Promise<Metadata> {
  if (!isLocale(params.locale)) return {}
  const t = getHomeContent(params.locale as Locale)
  return {
    title: 'Asplenz Knowledge',
    description: t.hero.sub,
  }
}

const PILLAR_ICONS = {
  model: Layers,
  engine: ShieldCheck,
  replay: RotateCcw,
} as const

const FEATURE_ICONS = {
  audience: Users,
  override: KeyRound,
  channel: Radio,
} as const

export default function HomePage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound()
  const locale = params.locale as Locale
  const t = getHomeContent(locale)
  const base = `/${locale}`
  const contactHref = `${base}/company#contact`
  const productHref = `${base}/product`

  return (
    <>
      <Hero t={t} contactHref={contactHref} productHref={productHref} />
      <VerdictShowcase />
      <Pillars t={t} />
      <Features t={t} />
      <FinalCta t={t} contactHref={contactHref} />
    </>
  )
}

function VerdictShowcase() {
  return (
    <section className="border-b border-gray-100 bg-white">
      <div className="mx-auto -mt-8 max-w-4xl px-6 pb-10 md:-mt-12">
        <HomeVerdictMock />
      </div>
    </section>
  )
}

function Hero({ t, contactHref, productHref }: { t: HomeContent; contactHref: string; productHref: string }) {
  return (
    <section className="border-b border-gray-100 bg-gradient-to-b from-primary-soft/60 via-primary-soft/20 to-white">
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-gray-900 md:text-6xl">
            {t.hero.headingLine1}
            <br />
            <span className="text-primary">{t.hero.headingLine2}</span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-gray-700 md:text-xl">
            {t.hero.sub}
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-gray-600 md:text-base">
            {t.hero.whyNow}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href={contactHref}
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-strong"
            >
              {t.hero.primaryCta}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link
              href={productHref}
              className="inline-flex items-center rounded-md border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50"
            >
              {t.hero.secondaryCta}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

function Pillars({ t }: { t: HomeContent }) {
  return (
    <section className="border-b border-gray-100 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            {t.pillarsHeading}
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {t.pillars.map((p, i) => {
            const Icon = PILLAR_ICONS[p.icon]
            return (
              <div
                key={p.title}
                className="relative rounded-2xl border border-gray-200 bg-white p-7 shadow-sm"
              >
                <div className="absolute -top-4 left-7 inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-white shadow-sm">
                  {i + 1}
                </div>
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary-soft">
                  <Icon className="h-6 w-6 text-primary-strong" aria-hidden />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{p.title}</h3>
                <p className="mt-3 text-gray-700 leading-relaxed">{p.body}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Features({ t }: { t: HomeContent }) {
  return (
    <section className="border-b border-gray-100 bg-gray-50">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            {t.featuresHeading}
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {t.features.map((f) => {
            const Icon = FEATURE_ICONS[f.icon]
            return (
              <div
                key={f.title}
                className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary-soft">
                  <Icon className="h-6 w-6 text-primary-strong" aria-hidden />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{f.title}</h3>
                <p className="mt-3 text-gray-700 leading-relaxed">{f.body}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function FinalCta({ t, contactHref }: { t: HomeContent; contactHref: string }) {
  return (
    <section className="bg-primary-strong text-white">
      <div className="mx-auto max-w-4xl px-6 py-10 text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          {t.finalCta.heading}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
          {t.finalCta.copy}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href={contactHref}
            className="inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-semibold text-primary-strong hover:bg-gray-100"
          >
            {t.finalCta.primary}
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
          <Link
            href={contactHref}
            className="inline-flex items-center rounded-md border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
          >
            {t.finalCta.secondary}
          </Link>
        </div>
      </div>
    </section>
  )
}
