import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  UserRoundX, LineChart, Sparkles,
  Server, Building2, Layers, Shield,
  Check, ArrowRight,
} from 'lucide-react'
import { isLocale, type Locale } from '@/lib/i18n'
import { getPricingContent, type PricingContent } from '@/content/pricing'
import { FaqAccordion } from '@/components/pricing/FaqAccordion'
import { cn } from '@/lib/cn'

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'fr' }]
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string }
}): Promise<Metadata> {
  if (!isLocale(params.locale)) return {}
  const t = getPricingContent(params.locale as Locale)
  return {
    title: 'Pricing',
    description: t.hero.sub,
  }
}

const PRINCIPLE_ICONS = {
  seat: UserRoundX,
  cost: LineChart,
  ai: Sparkles,
} as const

const DRIVER_ICONS = {
  deploy: Server,
  inst: Building2,
  scope: Layers,
  support: Shield,
} as const

export default function PricingPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound()
  const locale = params.locale as Locale
  const t = getPricingContent(locale)
  const base = `/${locale}`
  const contactHref = `${base}/company#contact`
  const productHref = `${base}/product`

  return (
    <>
      <Hero t={t} contactHref={contactHref} productHref={productHref} />
      <Principles t={t} />
      <Plans t={t} contactHref={contactHref} />
      <DesignPartner t={t} contactHref={contactHref} />
      <Comparison t={t} />
      <Drivers t={t} />
      <WhyNotPerUser t={t} />
      <Faq t={t} />
      <FinalCta t={t} contactHref={contactHref} productHref={productHref} />
    </>
  )
}

function Hero({ t, contactHref, productHref }: { t: PricingContent; contactHref: string; productHref: string }) {
  return (
    <section className="border-b border-gray-100 bg-gradient-to-b from-primary-soft/40 to-white">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-strong">
            {t.hero.eyebrow}
          </div>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-gray-900 md:text-5xl">
            {t.hero.headingLine1}
            <br />
            {t.hero.headingLine2}
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
              href={productHref}
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

function Principles({ t }: { t: PricingContent }) {
  return (
    <section className="border-b border-gray-100 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            {t.principles.heading}
          </h2>
          <p className="mt-4 text-lg text-gray-700">{t.principles.intro}</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {t.principles.items.map((item) => {
            const Icon = PRINCIPLE_ICONS[item.icon]
            return (
              <div
                key={item.title}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary-soft">
                  <Icon className="h-5 w-5 text-primary-strong" aria-hidden />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-gray-700 leading-relaxed">{item.body}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Plans({ t, contactHref }: { t: PricingContent; contactHref: string }) {
  return (
    <section className="border-b border-gray-100 bg-gray-50">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            {t.plansHeading}
          </h2>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <PlanCard variant="enterprise" plan={t.enterprise} contactHref={contactHref} />
          <PlanCard variant="oem" plan={t.oem} contactHref={contactHref} />
        </div>
      </div>
    </section>
  )
}

function PlanCard({
  variant,
  plan,
  contactHref,
}: {
  variant: 'enterprise' | 'oem'
  plan: PricingContent['enterprise'] | PricingContent['oem']
  contactHref: string
}) {
  const isOem = variant === 'oem'
  const priceNote = 'priceNote' in plan ? plan.priceNote : undefined
  const smallNote = 'smallNote' in plan ? plan.smallNote : undefined

  return (
    <div
      className={cn(
        'flex flex-col rounded-2xl border p-8 shadow-sm',
        isOem
          ? 'border-primary bg-white ring-1 ring-primary/20'
          : 'border-gray-200 bg-white',
      )}
    >
      <div className="mb-4 text-xs font-semibold uppercase tracking-wider text-primary-strong">
        {plan.label}
      </div>
      <h3 className="text-2xl font-bold text-gray-900">{plan.title}</h3>

      <div className="mt-6">
        <div className="text-3xl font-bold text-gray-900">{plan.price}</div>
        {priceNote && (
          <p className="mt-2 text-sm text-gray-600">{priceNote}</p>
        )}
      </div>

      <p className="mt-6 text-gray-700 leading-relaxed">{plan.description}</p>

      <ul className="mt-6 space-y-2.5">
        {plan.capabilities.map((cap) => (
          <li key={cap} className="flex items-start gap-2.5 text-gray-800">
            <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
            <span>{cap}</span>
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <Link
          href={contactHref}
          className={cn(
            'inline-flex w-full items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold',
            isOem
              ? 'bg-primary text-white hover:bg-primary-strong'
              : 'border border-gray-300 bg-white text-gray-900 hover:bg-gray-50',
          )}
        >
          {plan.cta}
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
        {smallNote && (
          <p className="mt-4 text-xs text-gray-600 leading-relaxed">{smallNote}</p>
        )}
      </div>
    </div>
  )
}

function DesignPartner({ t, contactHref }: { t: PricingContent; contactHref: string }) {
  const dp = t.designPartner
  return (
    <section className="border-b border-gray-100 bg-primary-soft/50">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            {dp.heading}
          </h2>
          <p className="mt-4 text-lg text-gray-800">{dp.intro}</p>
          <p className="mt-4 text-gray-700 leading-relaxed">{dp.body}</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-primary/20 bg-white p-6 shadow-sm">
            <h3 className="mb-4 text-lg font-semibold text-gray-900">
              {dp.receivesHeading}
            </h3>
            <ul className="space-y-2.5">
              {dp.receives.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-gray-800">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-primary/20 bg-white p-6 shadow-sm">
            <h3 className="mb-4 text-lg font-semibold text-gray-900">
              {dp.commitmentsHeading}
            </h3>
            <ul className="space-y-2.5">
              {dp.commitments.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-gray-800">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link
            href={contactHref}
            className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-white hover:bg-primary-strong"
          >
            {dp.cta}
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
          <p className="mt-4 text-sm text-gray-700">{dp.note}</p>
        </div>
      </div>
    </section>
  )
}

function Comparison({ t }: { t: PricingContent }) {
  const c = t.comparison
  const renderValue = (value: string) => {
    if (value === 'yes') {
      return (
        <span className="inline-flex items-center gap-1.5 text-gray-800">
          <Check className="h-4 w-4 text-primary" aria-hidden />
          <span>{c.included}</span>
        </span>
      )
    }
    if (value === 'no') {
      return <span className="text-gray-400">—</span>
    }
    return <span className="text-gray-800">{value}</span>
  }

  return (
    <section className="border-b border-gray-100 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            {c.heading}
          </h2>
        </div>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="min-w-full divide-y divide-gray-200 text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-5 py-3 text-left font-semibold text-gray-900" scope="col" />
                <th className="px-5 py-3 text-left font-semibold text-gray-900" scope="col">
                  {c.columns[0]}
                </th>
                <th className="px-5 py-3 text-left font-semibold text-gray-900" scope="col">
                  {c.columns[1]}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 bg-white">
              {c.rows.map(([capability, ent, oem]) => (
                <tr key={capability}>
                  <td className="px-5 py-3 font-medium text-gray-900">{capability}</td>
                  <td className="px-5 py-3">{renderValue(ent)}</td>
                  <td className="px-5 py-3">{renderValue(oem)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

function Drivers({ t }: { t: PricingContent }) {
  return (
    <section className="border-b border-gray-100 bg-gray-50">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            {t.drivers.heading}
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {t.drivers.items.map((item) => {
            const Icon = DRIVER_ICONS[item.icon]
            return (
              <div
                key={item.title}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary-soft">
                  <Icon className="h-5 w-5 text-primary-strong" aria-hidden />
                </div>
                <h3 className="text-base font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-700 leading-relaxed">{item.body}</p>
              </div>
            )
          })}
        </div>
        <p className="mx-auto mt-10 max-w-3xl text-center text-sm text-gray-600">
          {t.drivers.note}
        </p>
      </div>
    </section>
  )
}

function WhyNotPerUser({ t }: { t: PricingContent }) {
  return (
    <section className="border-b border-gray-100 bg-white">
      <div className="mx-auto max-w-3xl px-6 py-10">
        <div className="border-l-4 border-primary pl-6">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            {t.whyNotPerUser.heading}
          </h2>
          <div className="mt-4 space-y-4 text-gray-800 leading-relaxed">
            {t.whyNotPerUser.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Faq({ t }: { t: PricingContent }) {
  return (
    <section className="border-b border-gray-100 bg-gray-50">
      <div className="mx-auto max-w-3xl px-6 py-10">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            {t.faq.heading}
          </h2>
        </div>
        <FaqAccordion items={t.faq.items} />
      </div>
    </section>
  )
}

function FinalCta({
  t,
  contactHref,
  productHref,
}: {
  t: PricingContent
  contactHref: string
  productHref: string
}) {
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
            className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-primary-strong hover:bg-gray-100"
          >
            {t.finalCta.primaryCta}
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
          <Link
            href={productHref}
            className="inline-flex items-center rounded-md border border-white/30 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
          >
            {t.finalCta.secondaryCta}
          </Link>
        </div>
      </div>
    </section>
  )
}
