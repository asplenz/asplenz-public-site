import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import {
  ShieldCheck, Sparkles, Lock, Users, Layers,
  Mail, ArrowRight,
} from 'lucide-react'
import { isLocale, type Locale } from '@/lib/i18n'
import { getCompanyContent, type CompanyContent } from '@/content/company'

export async function generateMetadata({
  params,
}: {
  params: { locale: string }
}): Promise<Metadata> {
  if (!isLocale(params.locale)) return {}
  const t = getCompanyContent(params.locale as Locale)
  return {
    title: 'Company',
    description: t.hero.sub,
  }
}

const VALUE_ICONS = {
  determinism: ShieldCheck,
  explainability: Sparkles,
  immutability: Lock,
  humanLoop: Users,
  agnostic: Layers,
} as const

export default function CompanyPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound()
  const locale = params.locale as Locale
  const t = getCompanyContent(locale)

  return (
    <>
      <Hero t={t} />
      <Mission t={t} />
      <Values t={t} />
      <Contact t={t} />
    </>
  )
}

function Hero({ t }: { t: CompanyContent }) {
  return (
    <section className="border-b border-gray-100 bg-gradient-to-b from-primary-soft/40 to-white">
      <div className="mx-auto max-w-4xl px-6 py-16 md:py-20">
        <div className="text-center">
          <div className="mb-4 inline-flex items-center rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-strong">
            {t.hero.eyebrow}
          </div>
          <h1 className="text-5xl font-bold leading-tight tracking-tight text-gray-900 md:text-6xl">
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

function Mission({ t }: { t: CompanyContent }) {
  return (
    <section className="border-b border-gray-100 bg-white">
      <div className="mx-auto max-w-3xl px-6 py-10">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
          {t.mission.heading}
        </h2>
        <div className="mt-6 space-y-5 text-lg text-gray-700 leading-relaxed">
          {t.mission.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  )
}

function Values({ t }: { t: CompanyContent }) {
  return (
    <section className="border-b border-gray-100 bg-gray-50">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            {t.valuesHeading}
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {t.values.map((v) => {
            const Icon = VALUE_ICONS[v.icon]
            return (
              <div
                key={v.title}
                className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary-soft">
                  <Icon className="h-6 w-6 text-primary-strong" aria-hidden />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{v.title}</h3>
                <p className="mt-3 text-gray-700 leading-relaxed">{v.body}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Contact({ t }: { t: CompanyContent }) {
  return (
    <section id="contact" className="scroll-mt-24 bg-primary-strong text-white">
      <div className="mx-auto max-w-4xl px-6 py-10 text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          {t.contact.heading}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90 leading-relaxed">
          {t.contact.sub}
        </p>

        <div className="mx-auto mt-10 max-w-md rounded-2xl bg-white/10 p-8 backdrop-blur">
          <div className="flex items-center justify-center gap-3">
            <Mail className="h-5 w-5 text-white" aria-hidden />
            <a
              href={`mailto:${t.contact.email}`}
              className="text-xl font-semibold text-white hover:text-white/80"
            >
              {t.contact.email}
            </a>
          </div>
          <p className="mt-4 text-sm text-white/80">{t.contact.replyTime}</p>
        </div>

        <div className="mt-8">
          <a
            href={`mailto:${t.contact.email}`}
            className="inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-semibold text-primary-strong hover:bg-gray-100"
          >
            {t.contact.cta}
            <ArrowRight className="h-4 w-4" aria-hidden />
          </a>
        </div>
      </div>
    </section>
  )
}
