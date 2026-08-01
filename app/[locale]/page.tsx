import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  ArrowRight,
  Building2,
  Check,
  Handshake,
  HeartPulse,
  KeyRound,
  Layers,
  Network,
  Radio,
  RotateCcw,
  ShieldCheck,
  Sparkles,
  Users,
  UserCheck,
  Wallet,
  type LucideIcon,
} from 'lucide-react'
import { isLocale, type Locale } from '@/lib/i18n'
import {
  getHomeContent,
  type HomeArchitectureLayer,
  type HomeContent,
  type HomeFeatureIcon,
  type HomePillarIcon,
} from '@/content/home'
import { HomeVerdictMock } from '@/components/mocks/HomeVerdictMock'
import { cn } from '@/lib/cn'

export async function generateMetadata({
  params,
}: {
  params: { locale: string }
}): Promise<Metadata> {
  if (!isLocale(params.locale)) return {}
  const t = getHomeContent(params.locale as Locale)
  return {
    title: 'Asplenz Knowledge',
    description: t.hero.punchline,
  }
}

const PILLAR_ICONS: Record<HomePillarIcon, LucideIcon> = {
  model: Layers,
  engine: ShieldCheck,
  replay: RotateCcw,
}

const FEATURE_ICONS: Record<HomeFeatureIcon, LucideIcon> = {
  audience: Users,
  human: UserCheck,
  channel: Radio,
}

const INDUSTRY_ICONS: Record<string, LucideIcon> = {
  wealth: Wallet,
  insurance: ShieldCheck,
  healthcare: HeartPulse,
  'ai-governance': Sparkles,
}

export default function HomePage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound()
  const locale = params.locale as Locale
  const t = getHomeContent(locale)
  const base = `/${locale}`
  const contactHref = `${base}/company#contact`
  const productHref = `${base}/product`
  const oemHref = `${base}/oem`
  const ecosystemHref = `${base}/ecosystem`

  return (
    <>
      <Hero t={t} contactHref={contactHref} productHref={productHref} />
      <VerdictShowcase />
      <ArchitectureFit t={t} />
      <Pillars t={t} />
      <Features t={t} />
      <WhiteLabelTeaser t={t} oemHref={oemHref} />
      <EcosystemTeaser t={t} ecosystemHref={ecosystemHref} />
      <Industries t={t} />
      <FinalCta t={t} contactHref={contactHref} />
    </>
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
          <div className="mx-auto mt-8 max-w-3xl rounded-2xl border-l-4 border-primary bg-white/80 p-5 shadow-sm md:p-6">
            <p className="text-lg font-semibold leading-snug text-gray-900 md:text-xl">
              {t.hero.punchline}
            </p>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-800 md:text-xl">
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

function VerdictShowcase() {
  return (
    <section className="border-b border-gray-100 bg-white">
      <div className="mx-auto -mt-8 max-w-4xl px-6 pb-10 md:-mt-12">
        <HomeVerdictMock />
      </div>
    </section>
  )
}

function ArchitectureFit({ t }: { t: HomeContent }) {
  return (
    <section className="border-b border-gray-100 bg-gray-50">
      <div className="mx-auto max-w-5xl px-6 py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              {t.architectureFit.heading}
            </h2>
            <div className="mt-6 space-y-3 text-base leading-relaxed text-gray-800 md:text-lg">
              {t.architectureFit.body.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-3">
            {t.architectureFit.layers.map((layer) => (
              <ArchitectureLayer key={layer.title} layer={layer} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ArchitectureLayer({ layer }: { layer: HomeArchitectureLayer }) {
  return (
    <div
      className={cn(
        'rounded-2xl border p-5 shadow-sm',
        layer.emphasis
          ? 'border-primary/50 bg-white ring-1 ring-primary/20'
          : 'border-gray-200 bg-white',
      )}
    >
      <div
        className={cn(
          'text-sm font-bold uppercase tracking-wider',
          layer.emphasis ? 'text-primary-strong' : 'text-gray-700',
        )}
      >
        {layer.title}
      </div>
      <div className="mt-1 text-sm text-gray-700 md:text-base">
        {layer.detail}
      </div>
    </div>
  )
}

function Pillars({ t }: { t: HomeContent }) {
  return (
    <section className="border-b border-gray-100 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-14 md:py-16">
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
                <p className="mt-3 text-gray-800 leading-relaxed">{p.body}</p>
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
      <div className="mx-auto max-w-6xl px-6 py-14 md:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            {t.featuresHeading}
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {t.features.map((f) => {
            const Icon = FEATURE_ICONS[f.icon]
            return (
              <article
                key={f.title}
                className="flex flex-col rounded-2xl border border-gray-200 bg-white p-7 shadow-sm"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary-soft">
                  <Icon className="h-6 w-6 text-primary-strong" aria-hidden />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{f.title}</h3>
                <p className="mt-3 text-gray-800 leading-relaxed">{f.body}</p>
                {f.bullets && f.bullets.length > 0 && (
                  <ul className="mt-4 space-y-2 border-t border-gray-100 pt-4">
                    {f.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-gray-800">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function WhiteLabelTeaser({ t, oemHref }: { t: HomeContent; oemHref: string }) {
  return (
    <section className="border-b border-gray-100 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-14 md:py-16">
        <div className="grid gap-10 rounded-2xl border border-gray-200 bg-gradient-to-br from-primary-soft/50 to-white p-8 shadow-sm md:grid-cols-2 md:items-center md:p-10">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-strong shadow-sm">
              <Handshake className="h-4 w-4" aria-hidden />
              OEM · White-label
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">
              {t.whiteLabel.heading}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-gray-800 md:text-lg">
              {t.whiteLabel.body}
            </p>
            <Link
              href={oemHref}
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary-strong"
            >
              {t.whiteLabel.cta}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
          <ul className="space-y-2">
            {t.whiteLabel.bullets.map((b) => (
              <li key={b} className="flex items-start gap-2 rounded-xl bg-white px-4 py-3 text-sm text-gray-900 shadow-sm">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

function EcosystemTeaser({ t, ecosystemHref }: { t: HomeContent; ecosystemHref: string }) {
  return (
    <section className="border-b border-gray-100 bg-gray-50">
      <div className="mx-auto max-w-6xl px-6 py-14 md:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-strong shadow-sm">
            <Network className="h-4 w-4" aria-hidden />
            Ecosystem
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">
            {t.ecosystemTeaser.heading}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-gray-800 md:text-lg">
            {t.ecosystemTeaser.body}
          </p>
        </div>
        <div className="mx-auto mt-8 flex max-w-4xl flex-wrap items-center justify-center gap-2">
          {t.ecosystemTeaser.partners.map((p) => (
            <span
              key={p}
              className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-800 shadow-sm"
            >
              {p}
            </span>
          ))}
        </div>
        <div className="mx-auto mt-8 max-w-2xl text-center">
          <p className="text-base font-semibold text-gray-900">
            {t.ecosystemTeaser.outro}
          </p>
          <Link
            href={ecosystemHref}
            className="mt-6 inline-flex items-center gap-2 rounded-md border border-primary bg-white px-5 py-2.5 text-sm font-semibold text-primary-strong hover:bg-primary-soft"
          >
            {t.ecosystemTeaser.cta}
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  )
}

function Industries({ t }: { t: HomeContent }) {
  return (
    <section className="border-b border-gray-100 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-14 md:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            {t.industries.heading}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-700 md:text-lg">
            {t.industries.lead}
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {t.industries.items.map((item) => {
            const Icon = INDUSTRY_ICONS[item.key] ?? Building2
            return (
              <div
                key={item.key}
                className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white px-4 py-3 shadow-sm"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary-strong">
                  <Icon className="h-4 w-4" aria-hidden />
                </div>
                <span className="text-sm font-semibold leading-snug text-gray-900 md:text-[15px]">
                  {item.label}
                </span>
              </div>
            )
          })}
        </div>
        <p className="mx-auto mt-8 max-w-3xl text-center text-sm text-gray-700 md:text-base">
          {t.industries.beyond}
        </p>
      </div>
    </section>
  )
}

function FinalCta({ t, contactHref }: { t: HomeContent; contactHref: string }) {
  return (
    <section className="bg-primary-strong text-white">
      <div className="mx-auto max-w-4xl px-6 py-14 text-center md:py-16">
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
