import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  Landmark, Bot, ShieldCheck, HeartPulse, Waypoints,
  ArrowRight, MessageCircle, Cpu,
} from 'lucide-react'
import { isLocale, type Locale } from '@/lib/i18n'
import { getUseCasesContent, type UseCaseDecisionTable, type UseCasesContent } from '@/content/use-cases'

export async function generateMetadata({
  params,
}: {
  params: { locale: string }
}): Promise<Metadata> {
  if (!isLocale(params.locale)) return {}
  const t = getUseCasesContent(params.locale as Locale)
  return {
    title: 'Use cases',
    description: t.hero.sub,
  }
}

const VERTICAL_ICONS = {
  wealth: Landmark,
  agent: Bot,
  insurance: ShieldCheck,
  health: HeartPulse,
  gateway: Waypoints,
} as const

export default function UseCasesPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound()
  const locale = params.locale as Locale
  const t = getUseCasesContent(locale)
  const base = `/${locale}`
  const contactHref = `${base}/company#contact`
  const productHref = `${base}/product`

  return (
    <>
      <Hero t={t} />
      <Verticals t={t} />
      <CommonThread t={t} />
      <FinalCta t={t} contactHref={contactHref} productHref={productHref} />
    </>
  )
}

function Hero({ t }: { t: UseCasesContent }) {
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
        </div>
      </div>
    </section>
  )
}

function Verticals({ t }: { t: UseCasesContent }) {
  return (
    <section className="border-b border-gray-100 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-10 space-y-8">
        {t.verticals.map((v) => {
          const Icon = VERTICAL_ICONS[v.icon]
          const isAgent = v.icon === 'agent'
          return (
            <article
              key={v.title}
              className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm md:p-10"
            >
              <div className="grid gap-8 md:grid-cols-[auto_1fr] md:gap-10">
                <div className="flex flex-col items-start gap-4">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-soft">
                    <Icon className="h-8 w-8 text-primary-strong" aria-hidden />
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-primary-strong">
                    {v.tag}
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">
                    {v.title}
                  </h2>

                  {isAgent ? (
                    <AgentSplit t={t} />
                  ) : (
                    <div className="mt-4 space-y-4 text-gray-800 leading-relaxed">
                      {v.body.map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                    </div>
                  )}

                  {v.decisionTable && <VerticalDecisionTable table={v.decisionTable} />}

                  <div className="mt-6 rounded-lg bg-gray-50 px-4 py-3">
                    <span className="text-sm font-semibold text-gray-900">
                      {v.fitsLabel} :
                    </span>{' '}
                    <span className="text-sm text-gray-800">{v.fits}</span>
                  </div>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

function VerticalDecisionTable({ table }: { table: UseCaseDecisionTable }) {
  return (
    <div className="mt-6 rounded-2xl border border-primary/30 bg-primary-soft/20 p-5 md:p-6">
      <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary-strong">
        {table.caption}
      </p>
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
        <table className="w-full border-collapse text-left">
          <thead className="bg-gray-50">
            <tr>
              {table.columns.map((col) => (
                <th
                  key={col}
                  className="border-b border-gray-200 px-4 py-2.5 text-[11px] font-semibold uppercase tracking-wider text-gray-700"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row) => (
              <tr key={row.cells.join('|')} className="text-sm text-gray-900">
                {row.cells.map((cell, i) => (
                  <td
                    key={i}
                    className={
                      i === row.cells.length - 1
                        ? 'border-b border-gray-100 px-4 py-2.5 font-semibold text-primary-strong'
                        : 'border-b border-gray-100 px-4 py-2.5'
                    }
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm font-medium text-gray-900">{table.footer}</p>
    </div>
  )
}

function AgentSplit({ t }: { t: UseCasesContent }) {
  const a = t.agentSplit
  return (
    <div className="mt-6 space-y-6">
      <p className="text-gray-700 leading-relaxed">{a.heading}.</p>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
          <div className="mb-2 flex items-center gap-2">
            <Cpu className="h-4 w-4 text-primary-strong" aria-hidden />
            <span className="font-semibold text-gray-900">{a.autonomousTitle}</span>
          </div>
          <p className="text-sm text-gray-700 leading-relaxed">{a.autonomousBody}</p>
        </div>

        <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
          <div className="mb-2 flex items-center gap-2">
            <MessageCircle className="h-4 w-4 text-primary-strong" aria-hidden />
            <span className="font-semibold text-gray-900">{a.conversationalTitle}</span>
          </div>
          <p className="text-sm text-gray-700 leading-relaxed">{a.conversationalBody}</p>
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed">{a.closing}</p>
    </div>
  )
}

function CommonThread({ t }: { t: UseCasesContent }) {
  return (
    <section className="border-b border-gray-100 bg-gray-50">
      <div className="mx-auto max-w-3xl px-6 py-10 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
          {t.commonThread.heading}
        </h2>
        <p className="mt-6 text-lg text-gray-700 leading-relaxed">
          {t.commonThread.body}
        </p>
      </div>
    </section>
  )
}

function FinalCta({
  t,
  contactHref,
  productHref,
}: {
  t: UseCasesContent
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
            className="inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-semibold text-primary-strong hover:bg-gray-100"
          >
            {t.finalCta.primary}
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
          <Link
            href={productHref}
            className="inline-flex items-center rounded-md border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
          >
            {t.finalCta.secondary}
          </Link>
        </div>
      </div>
    </section>
  )
}
