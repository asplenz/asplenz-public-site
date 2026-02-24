'use client'

import Link from 'next/link'
import { useLang } from '@/lib/LangContext'
import { getContent } from '@/lib/content'
import PageLayout from '@/app/components/PageLayout'

export default function PlatformPage() {
  const { lang } = useLang()
  const t = getContent(lang)
  const p = t.platform

  const renderLayerCard = (layer: {
    label: string
    title: string
    product: string
    lines: string[]
    who: string
    when: string
    purpose: string
    cta: string
    ctaHref: string
  }) => (
    <div className="border border-[var(--border)] rounded-lg p-6 bg-[var(--bg-card)]">
      <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider mb-2">{layer.label}</p>
      <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-2">{layer.title}</h2>
      <p className="text-[var(--accent)] font-medium mb-4">{layer.product}</p>
      <div className="space-y-1 mb-6">
        {layer.lines.map((line, i) => (
          <p key={i} className="text-[var(--text-secondary)]">{line}</p>
        ))}
      </div>
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <div className="p-3 bg-[var(--bg-secondary)] rounded-lg">
          <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider mb-1">{lang === 'en' ? 'Who' : 'Qui'}</p>
          <p className="text-sm text-[var(--text-primary)]">{layer.who}</p>
        </div>
        <div className="p-3 bg-[var(--bg-secondary)] rounded-lg">
          <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider mb-1">{lang === 'en' ? 'When' : 'Quand'}</p>
          <p className="text-sm text-[var(--text-primary)]">{layer.when}</p>
        </div>
        <div className="p-3 bg-[var(--bg-secondary)] rounded-lg">
          <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider mb-1">{lang === 'en' ? 'Purpose' : 'Objectif'}</p>
          <p className="text-sm text-[var(--text-primary)]">{layer.purpose}</p>
        </div>
      </div>
      <Link
        href={layer.ctaHref}
        className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--accent)] text-[var(--accent)] font-medium rounded-lg hover:bg-[var(--accent)]/10 transition-colors"
      >
        {layer.cta}
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </Link>
    </div>
  )

  return (
    <PageLayout backHref="/" backLabel={lang === 'en' ? 'Back to home' : 'Retour \u00e0 l\u0027accueil'}>
      {/* Hero */}
      <section className="mb-16">
        <h1 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-3" style={{ letterSpacing: '-0.02em' }}>
          {p.hero.title}
        </h1>
        <p className="text-lg text-[var(--text-primary)] font-semibold mb-4">
          {p.hero.subtitle}
        </p>
        <div className="space-y-1">
          {p.hero.lines.map((line, i) => (
            <p key={i} className="text-[var(--text-secondary)]">{line}</p>
          ))}
        </div>
      </section>

      {/* Layer 1 - Knowledge */}
      <section className="mb-8">
        {renderLayerCard(p.layer1)}
      </section>

      {/* Layer 2 - Evidence */}
      <section className="mb-16">
        {renderLayerCard(p.layer2)}
      </section>

      {/* Comparison Table */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-6">{p.comparison.title}</h2>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-[var(--border)] rounded-lg overflow-hidden">
            <thead className="bg-[var(--bg-card)]">
              <tr>
                {p.comparison.headers.map((header: string, idx: number) => (
                  <th key={idx} className="px-4 py-3 text-left text-sm font-semibold text-[var(--text-primary)]">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border)]">
              {p.comparison.rows.map((row: any, idx: number) => (
                <tr key={idx} className="bg-[var(--bg-secondary)]">
                  <td className="px-4 py-3 text-sm font-medium text-[var(--text-primary)]">{row.label}</td>
                  <td className="px-4 py-3 text-sm text-[var(--text-muted)]">{row.knowledge}</td>
                  <td className="px-4 py-3 text-sm text-[var(--text-muted)]">{row.evidence}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="space-y-2 text-[var(--text-secondary)]">
          <p>{p.comparison.standalone1}</p>
          <p>{p.comparison.standalone2}</p>
          <p className="font-semibold text-[var(--text-primary)] mt-4">{p.comparison.together}</p>
        </div>
      </section>

      {/* When they intersect */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-4">{p.intersection.title}</h2>
        <p className="text-[var(--text-secondary)] mb-2">{p.intersection.p1}</p>
        <p className="text-[var(--text-secondary)] mb-2">{p.intersection.p2}</p>
        <p className="text-[var(--text-primary)] font-semibold">{p.intersection.p3}</p>
      </section>

      {/* Why this matters */}
      <section className="border-t border-[var(--border)] pt-12">
        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-4">{p.whyMatters.title}</h2>
        <div className="space-y-1 mb-4">
          {p.whyMatters.lines.map((line, i) => (
            <p key={i} className="text-[var(--text-secondary)]">{line}</p>
          ))}
        </div>
        <p className="text-[var(--text-secondary)] mb-3">{p.whyMatters.intro}</p>
        <ul className="space-y-2 mb-6">
          {p.whyMatters.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2.5 flex-shrink-0" />
              <span className="text-[var(--text-secondary)]">{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-[var(--text-primary)] font-semibold text-lg">{p.whyMatters.closing}</p>
      </section>
    </PageLayout>
  )
}
