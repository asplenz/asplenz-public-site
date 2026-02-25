'use client'

import Link from 'next/link'
import { useLang } from '@/lib/LangContext'
import { getContent } from '@/lib/content'
import PageLayout from '@/app/components/PageLayout'

export default function EvidencePricingPage() {
  const { lang } = useLang()
  const t = getContent(lang)
  const p = (t.evidence as any).pricing

  return (
    <PageLayout
      backHref="/evidence"
      backLabel={lang === 'en' ? 'Back to Evidence' : 'Retour à Evidence'}
    >
      {/* Headline */}
      <h1 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-3" style={{ letterSpacing: '-0.02em' }}>
        {p.headline}
      </h1>
      <p className="text-lg text-[var(--text-secondary)] mb-12 max-w-3xl">
        {p.intro}
      </p>

      {/* Free AI Registry section */}
      <section className="border border-[var(--accent)]/30 rounded-lg p-8 bg-[var(--bg-card)] mb-8">
        <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-2">{p.freeRegistry.title}</h2>
        <p className="text-[var(--text-secondary)] mb-4">{p.freeRegistry.intro}</p>
        <p className="text-[var(--text-secondary)] mb-6">{p.freeRegistry.body}</p>
        <ul className="space-y-2 mb-6">
          {p.freeRegistry.features.map((f: string, i: number) => (
            <li key={i} className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2 flex-shrink-0" />
              <span className="text-[var(--text-secondary)] text-sm">{f}</span>
            </li>
          ))}
        </ul>
        <p className="text-[var(--text-muted)] text-sm italic mb-6">{p.freeRegistry.note}</p>
        <Link
          href={p.freeRegistry.ctaHref}
          className="inline-flex items-center justify-center px-8 py-3 bg-[var(--accent)] text-[var(--bg-primary)] font-medium rounded-lg hover:bg-[var(--accent-hover)] transition-colors text-sm"
        >
          {p.freeRegistry.cta}
        </Link>
      </section>

      {/* Enterprise card */}
      <section className="border border-[var(--border)] rounded-lg p-8 bg-[var(--bg-card)] mb-12">
        <div className="flex items-baseline gap-4 mb-4">
          <h2 className="text-2xl font-bold text-[var(--text-primary)]">{p.enterprise.title}</h2>
          <span className="text-lg text-[var(--text-muted)]">{p.enterprise.price}</span>
        </div>
        <p className="text-[var(--text-secondary)] mb-4">{p.enterprise.description}</p>
        <ul className="space-y-2">
          {p.enterprise.factors.map((f: string, i: number) => (
            <li key={i} className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2 flex-shrink-0" />
              <span className="text-[var(--text-secondary)] text-sm">{f}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Included + Extensions side by side */}
      <div className="grid gap-8 md:grid-cols-2 mb-12">
        <section>
          <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4">{p.included.title}</h2>
          <ul className="space-y-2">
            {p.included.items.map((item: string, i: number) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2 flex-shrink-0" />
                <span className="text-[var(--text-secondary)] text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4">{p.extensions.title}</h2>
          <ul className="space-y-2">
            {p.extensions.items.map((item: string, i: number) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--text-muted)] mt-2 flex-shrink-0" />
                <span className="text-[var(--text-secondary)] text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* Engagement model */}
      <section className="border-t border-[var(--border)] pt-12 mb-12">
        <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-6">{p.engagement.title}</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {p.engagement.steps.map((step: any, i: number) => (
            <div key={i} className="border border-[var(--border)] rounded-lg p-5 bg-[var(--bg-card)]">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-7 h-7 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] text-sm font-bold flex items-center justify-center flex-shrink-0">
                  {i + 1}
                </span>
                <h3 className="font-semibold text-[var(--text-primary)] text-sm">{step.label}</h3>
              </div>
              <p className="text-[var(--text-secondary)] text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Deployment */}
      <section className="border-t border-[var(--border)] pt-12 mb-12">
        <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4">{p.deployment.title}</h2>
        <p className="text-[var(--text-secondary)] mb-4">{p.deployment.intro}</p>
        <ul className="space-y-2 mb-4">
          {p.deployment.options.map((opt: string, i: number) => (
            <li key={i} className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2 flex-shrink-0" />
              <span className="text-[var(--text-secondary)] text-sm">{opt}</span>
            </li>
          ))}
        </ul>
        <p className="text-[var(--text-primary)] font-semibold text-sm">{p.deployment.note}</p>
      </section>

      {/* Why custom */}
      <section className="border-t border-[var(--border)] pt-12">
        <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4">{p.whyCustom.title}</h2>
        <p className="text-[var(--text-secondary)] mb-8 max-w-3xl">{p.whyCustom.description}</p>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center px-8 py-3 bg-[var(--accent)] text-[var(--bg-primary)] font-medium rounded-lg hover:bg-[var(--accent-hover)] transition-colors text-sm"
        >
          {p.cta}
        </Link>
      </section>
    </PageLayout>
  )
}
