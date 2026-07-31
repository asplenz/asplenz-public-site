import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  PackageCheck, Palette, Handshake,
  PenLine, Server, Users,
  Eye, EyeOff, Check, X,
  ArrowRight, Lock, Sparkles,
} from 'lucide-react'
import { isLocale, type Locale } from '@/lib/i18n'
import { getOemContent, type OemContent } from '@/content/oem'
import { FaqAccordion } from '@/components/pricing/FaqAccordion'
import { OemDashboardMock } from '@/components/mocks/OemDashboardMock'

export async function generateMetadata({
  params,
}: {
  params: { locale: string }
}): Promise<Metadata> {
  if (!isLocale(params.locale)) return {}
  const t = getOemContent(params.locale as Locale)
  return {
    title: 'OEM · Partners',
    description: t.hero.sub,
  }
}

const WHY_ICONS = {
  backbone: PackageCheck,
  brand: Palette,
  customers: Handshake,
} as const

const STEP_ICONS = {
  signature: PenLine,
  provision: Server,
  brand: Palette,
  onboard: Users,
} as const

export default function OemPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound()
  const locale = params.locale as Locale
  const t = getOemContent(locale)
  const base = `/${locale}`
  const contactHref = `${base}/company#contact`
  const pricingHref = `${base}/pricing`

  return (
    <>
      <Hero t={t} contactHref={contactHref} pricingHref={pricingHref} />
      <WhyPartner t={t} />
      <Capabilities t={t} />
      <DashboardShowcase />
      <Wall t={t} />
      <HowItWorks t={t} />
      <FdpCrossLink t={t} pricingHref={pricingHref} />
      <Faq t={t} />
      <FinalCta t={t} contactHref={contactHref} pricingHref={pricingHref} />
    </>
  )
}

function Hero({ t, contactHref, pricingHref }: { t: OemContent; contactHref: string; pricingHref: string }) {
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
              href={pricingHref}
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

function DashboardShowcase() {
  return (
    <section className="border-b border-gray-100 bg-white">
      <div className="mx-auto max-w-5xl px-6 py-10">
        <OemDashboardMock />
      </div>
    </section>
  )
}

function WhyPartner({ t }: { t: OemContent }) {
  return (
    <section className="border-b border-gray-100 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            {t.whyPartner.heading}
          </h2>
          <p className="mt-4 text-lg text-gray-700">{t.whyPartner.intro}</p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {t.whyPartner.items.map((item) => {
            const Icon = WHY_ICONS[item.icon]
            return (
              <div
                key={item.title}
                className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary-soft">
                  <Icon className="h-6 w-6 text-primary-strong" aria-hidden />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-3 text-gray-700 leading-relaxed">{item.body}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Capabilities({ t }: { t: OemContent }) {
  return (
    <section className="border-b border-gray-100 bg-gray-50">
      <div className="mx-auto max-w-4xl px-6 py-10">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            {t.capabilities.heading}
          </h2>
          <p className="mt-4 text-lg text-gray-700">{t.capabilities.intro}</p>
        </div>
        <ul className="mt-10 grid gap-3 md:grid-cols-2">
          {t.capabilities.items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
            >
              <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
              <span className="text-gray-800">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function Wall({ t }: { t: OemContent }) {
  return (
    <section className="border-b border-gray-100 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary-soft">
            <Lock className="h-6 w-6 text-primary-strong" aria-hidden />
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            {t.wall.heading}
          </h2>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">{t.wall.intro}</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border-2 border-success/30 bg-success-soft/60 p-7">
            <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-success-strong">
              <Eye className="h-5 w-5" aria-hidden />
              {t.wall.seeLabel}
            </div>
            <ul className="space-y-2.5">
              {t.wall.seeItems.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-gray-800">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-success-strong" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border-2 border-danger/30 bg-danger-soft/60 p-7">
            <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-danger-strong">
              <EyeOff className="h-5 w-5" aria-hidden />
              {t.wall.dontSeeLabel}
            </div>
            <ul className="space-y-2.5">
              {t.wall.dontSeeItems.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-gray-800">
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-danger-strong" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mx-auto mt-10 max-w-3xl rounded-2xl border-l-4 border-primary bg-primary-soft/60 p-6 text-gray-800 leading-relaxed">
          {t.wall.closing}
        </p>
      </div>
    </section>
  )
}

function HowItWorks({ t }: { t: OemContent }) {
  return (
    <section className="border-b border-gray-100 bg-gray-50">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            {t.howItWorks.heading}
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {t.howItWorks.steps.map((step) => {
            const Icon = STEP_ICONS[step.icon]
            return (
              <div
                key={step.number}
                className="relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <div className="absolute -top-4 left-6 inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary text-xs font-bold text-white shadow-sm">
                  {step.number}
                </div>
                <div className="mb-4 mt-2 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary-soft">
                  <Icon className="h-5 w-5 text-primary-strong" aria-hidden />
                </div>
                <h3 className="text-base font-semibold text-gray-900">{step.title}</h3>
                <p className="mt-2 text-sm text-gray-700 leading-relaxed">{step.body}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function FdpCrossLink({ t, pricingHref }: { t: OemContent; pricingHref: string }) {
  return (
    <section className="border-b border-gray-100 bg-primary-soft/50">
      <div className="mx-auto max-w-4xl px-6 py-10">
        <div className="rounded-2xl border border-primary/20 bg-white p-8 shadow-sm md:p-10">
          <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-primary-strong">
            <Sparkles className="h-4 w-4" aria-hidden />
            Founding Design Partner Programme
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">
            {t.fdp.heading}
          </h2>
          <p className="mt-4 text-gray-700 leading-relaxed">{t.fdp.body}</p>
          <div className="mt-6">
            <Link
              href={`${pricingHref}#design-partner`}
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-white hover:bg-primary-strong"
            >
              {t.fdp.cta}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

function Faq({ t }: { t: OemContent }) {
  return (
    <section className="border-b border-gray-100 bg-gray-50">
      <div className="mx-auto max-w-3xl px-6 py-10">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
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
  pricingHref,
}: {
  t: OemContent
  contactHref: string
  pricingHref: string
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
            className="inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-semibold text-primary-strong hover:bg-gray-100"
          >
            {t.finalCta.primary}
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
          <Link
            href={pricingHref}
            className="inline-flex items-center rounded-md border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
          >
            {t.finalCta.secondary}
          </Link>
        </div>
      </div>
    </section>
  )
}
