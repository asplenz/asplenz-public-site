import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Check, ChevronRight, Sparkles } from 'lucide-react'
import { isLocale, type Locale } from '@/lib/i18n'
import { getEcosystemContent, type EcosystemContent, type EcosystemItem } from '@/content/ecosystem'
import { cn } from '@/lib/cn'

export async function generateMetadata({
  params,
}: {
  params: { locale: string }
}): Promise<Metadata> {
  if (!isLocale(params.locale)) return {}
  const t = getEcosystemContent(params.locale as Locale)
  return {
    title: 'Ecosystem',
    description: t.hero.sub,
  }
}

export default function EcosystemPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound()
  const locale = params.locale as Locale
  const t = getEcosystemContent(locale)

  return (
    <>
      <Hero t={t} />
      <Items t={t} />
      <Conclusion t={t} />
    </>
  )
}

function Hero({ t }: { t: EcosystemContent }) {
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
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-700 md:text-xl">
            {t.hero.sub}
          </p>
        </div>
      </div>
    </section>
  )
}

function Items({ t }: { t: EcosystemContent }) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-5 md:grid-cols-2">
          {t.items.map((item) => (
            <ItemCard key={item.id} item={item} label={t.strengthsLabel} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ItemCard({ item, label }: { item: EcosystemItem; label: string }) {
  const isKnowledge = item.id === 'knowledge'
  return (
    <article
      className={cn(
        'flex flex-col rounded-2xl border bg-white p-6 shadow-sm',
        isKnowledge
          ? 'border-primary/40 ring-1 ring-primary/20'
          : 'border-gray-200',
      )}
    >
      <header className="mb-4">
        <div className="mb-2 flex items-center gap-2">
          {isKnowledge && (
            <Sparkles className="h-4 w-4 text-primary-strong" aria-hidden />
          )}
          <span className="text-[10px] font-semibold uppercase tracking-wider text-primary-strong">
            {item.tag}
          </span>
        </div>
        <h2 className="text-xl font-bold tracking-tight text-gray-900 md:text-2xl">
          {item.name}
        </h2>
      </header>

      <div className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-gray-500">
        {label}
      </div>
      <ul className="space-y-2">
        {item.strengths.map((s) => (
          <li key={s} className="flex items-start gap-2.5 text-sm text-gray-800">
            <Check
              className={cn(
                'mt-0.5 h-4 w-4 shrink-0',
                isKnowledge ? 'text-primary' : 'text-success-strong',
              )}
              aria-hidden
            />
            <span>{s}</span>
          </li>
        ))}
      </ul>
    </article>
  )
}

function Conclusion({ t }: { t: EcosystemContent }) {
  return (
    <section className="border-t border-gray-100 bg-gray-50">
      <div className="mx-auto max-w-3xl px-6 py-14">
        <div className="rounded-2xl border-l-4 border-primary bg-white p-8 shadow-sm md:p-10">
          <div className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary-strong">
            <ChevronRight className="h-4 w-4" aria-hidden />
            {t.conclusion.heading}
          </div>
          <p className="text-lg text-gray-800 leading-relaxed">
            {t.conclusion.body}
          </p>
        </div>
      </div>
    </section>
  )
}
