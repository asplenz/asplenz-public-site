import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  Layers, ShieldCheck, RotateCcw,
  ArrowRight, Check, X, Quote,
} from 'lucide-react'
import { isLocale, type Locale } from '@/lib/i18n'
import { getProductContent, type ProductContent } from '@/content/product'

export async function generateMetadata({
  params,
}: {
  params: { locale: string }
}): Promise<Metadata> {
  if (!isLocale(params.locale)) return {}
  const t = getProductContent(params.locale as Locale)
  return {
    title: 'Product',
    description: t.hero.sub,
  }
}

const PILLAR_ICONS = {
  model: Layers,
  engine: ShieldCheck,
  replay: RotateCcw,
} as const

export default function ProductPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound()
  const locale = params.locale as Locale
  const t = getProductContent(locale)
  const base = `/${locale}`
  const contactHref = `${base}/company#contact`
  const compareHref = `${base}/ecosystem`

  return (
    <>
      <Hero t={t} contactHref={contactHref} compareHref={compareHref} />
      <OperatingModel t={t} />
      <Pillars t={t} />
      <Captures t={t} />
      <Replaces t={t} />
      <FinalCta t={t} contactHref={contactHref} compareHref={compareHref} />
    </>
  )
}

function Hero({ t, contactHref, compareHref }: { t: ProductContent; contactHref: string; compareHref: string }) {
  return (
    <section className="border-b border-gray-100 bg-gradient-to-b from-primary-soft/40 to-white">
      <div className="mx-auto max-w-4xl px-6 py-16 md:py-20">
        <div className="text-center">
          <div className="mb-4 inline-flex items-center rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-strong">
            {t.hero.eyebrow}
          </div>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-gray-900 md:text-5xl">
            {t.hero.heading}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-gray-700 md:text-xl">
            {t.hero.sub}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href={contactHref}
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-white hover:bg-primary-strong"
            >
              {t.hero.primaryCta}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link
              href={compareHref}
              className="inline-flex items-center rounded-md border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50"
            >
              {t.hero.secondaryCta}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

function OperatingModel({ t }: { t: ProductContent }) {
  const om = t.operatingModel
  return (
    <section className="border-b border-gray-100 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            {om.heading}
          </h2>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">{om.intro}</p>
        </div>

        <div className="mt-12">
          <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-primary-strong">
            {om.entitiesHeading}
          </h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {om.entities.map((e) => (
              <div
                key={e.name}
                className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:border-primary/50 hover:shadow-md"
              >
                <div className="mb-2 font-mono text-sm font-semibold text-primary-strong">
                  {e.name}
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">{e.body}</p>
              </div>
            ))}
          </div>
        </div>

        <blockquote className="mx-auto mt-14 max-w-3xl rounded-2xl border-l-4 border-primary bg-primary-soft/60 p-8 text-center">
          <Quote className="mx-auto mb-4 h-8 w-8 text-primary" aria-hidden />
          <p className="text-xl font-semibold text-gray-900 md:text-2xl">
            {om.quote}
          </p>
        </blockquote>
      </div>
    </section>
  )
}

function Pillars({ t }: { t: ProductContent }) {
  return (
    <section className="border-b border-gray-100 bg-gray-50">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            {t.pillars.heading}
          </h2>
        </div>
        <div className="mt-14 space-y-6">
          {t.pillars.items.map((p) => {
            const Icon = PILLAR_ICONS[p.icon]
            return (
              <div
                key={p.number}
                className="grid gap-6 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm md:grid-cols-[auto_1fr] md:gap-10"
              >
                <div className="flex flex-col items-start gap-4 md:items-center">
                  <span className="text-4xl font-bold text-primary/30 md:text-5xl">
                    {p.number}
                  </span>
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary-soft">
                    <Icon className="h-7 w-7 text-primary-strong" aria-hidden />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 md:text-2xl">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-gray-700 leading-relaxed">{p.body}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Captures({ t }: { t: ProductContent }) {
  const c = t.captures
  return (
    <section className="border-b border-gray-100 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            {c.heading}
          </h2>
          <p className="mt-4 text-lg text-gray-700">{c.intro}</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8">
            <div className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-gray-500">
              <X className="h-4 w-4" aria-hidden />
              {c.brmsLabel}
            </div>
            <ul className="space-y-3">
              <li className="text-lg font-medium text-gray-700">{c.brmsQuestion}</li>
            </ul>
          </div>

          <div className="rounded-2xl border-2 border-primary bg-white p-8 ring-1 ring-primary/20">
            <div className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary-strong">
              <Check className="h-4 w-4" aria-hidden />
              {c.knowledgeLabel}
            </div>
            <ul className="space-y-3">
              {c.knowledgeQuestions.map((q) => (
                <li key={q} className="text-base font-medium text-gray-900">{q}</li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-center text-gray-700 leading-relaxed">
          {c.closing}
        </p>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {c.captureList.map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
            >
              <div className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary-strong">
                {item.label}
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Replaces({ t }: { t: ProductContent }) {
  const r = t.replaces
  return (
    <section className="border-b border-gray-100 bg-gray-50">
      <div className="mx-auto max-w-4xl px-6 py-10">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            {r.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-700">{r.intro}</p>
        </div>

        <div className="mt-10 space-y-3">
          {r.items.map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
            >
              <X className="mt-0.5 h-5 w-5 shrink-0 text-danger" aria-hidden />
              <span className="text-gray-800">{item}</span>
            </div>
          ))}
        </div>

        <p className="mt-10 rounded-2xl border-l-4 border-primary bg-primary-soft/60 p-6 text-gray-800 leading-relaxed">
          {r.closing}
        </p>
      </div>
    </section>
  )
}

function FinalCta({ t, contactHref, compareHref }: { t: ProductContent; contactHref: string; compareHref: string }) {
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
            href={compareHref}
            className="inline-flex items-center rounded-md border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
          >
            {t.finalCta.secondary}
          </Link>
        </div>
      </div>
    </section>
  )
}
