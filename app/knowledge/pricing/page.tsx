'use client'

import Link from 'next/link'
import { useLang } from '@/lib/LangContext'
import { getContent } from '@/lib/content'
import PageLayout from '@/app/components/PageLayout'

export default function KnowledgePricingPage() {
  const { lang } = useLang()
  const t = getContent(lang)
  const pricing = t.index.pricing

  return (
    <PageLayout
      backHref="/knowledge"
      backLabel={lang === 'en' ? 'Back to Knowledge' : 'Retour à Knowledge'}
    >
      <h1 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-12" style={{ letterSpacing: '-0.02em' }}>
        {pricing.title}
      </h1>

      {/* Pricing Grid */}
      <div className="grid gap-6 sm:grid-cols-2 mb-16">
        {pricing.tiers.map((tier: any, idx: number) => (
          <div
            key={idx}
            className="border border-[var(--border)] rounded-lg p-6 bg-[var(--bg-card)] flex flex-col"
          >
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                {tier.name}
              </h3>
              {tier.price && (
                <p className="text-2xl font-bold text-[var(--text-primary)] mt-1">
                  {tier.price}
                </p>
              )}
            </div>
            <ul className="space-y-2 mb-6 flex-1">
              {tier.features.map((feature: string, fIdx: number) => (
                <li key={fIdx} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2 flex-shrink-0" />
                  <span className="text-[var(--text-secondary)] text-sm">{feature}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center w-full px-6 py-3 border border-[var(--border)] text-[var(--text-secondary)] font-medium rounded-lg hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors text-sm"
            >
              {tier.cta}
            </Link>
          </div>
        ))}
      </div>

      {/* Verifier Add-on */}
      <section className="border-t border-[var(--border)] pt-12">
        <div className="border border-[var(--border)] rounded-lg p-6 bg-[var(--bg-card)]">
          <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-3">
            {pricing.verifierAddon.title}
          </h2>
          <p className="text-[var(--text-secondary)] mb-6">
            {pricing.verifierAddon.description}
          </p>
          <ul className="space-y-3 mb-6">
            {pricing.verifierAddon.features.map((item: string, idx: number) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2.5 flex-shrink-0" />
                <span className="text-[var(--text-secondary)] text-sm">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-[var(--text-muted)] text-sm italic">
            {pricing.verifierAddon.note}
          </p>
        </div>
      </section>
    </PageLayout>
  )
}
