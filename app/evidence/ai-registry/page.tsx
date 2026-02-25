'use client'

import Link from 'next/link'
import { useLang } from '@/lib/LangContext'
import { getContent } from '@/lib/content'
import PageLayout from '@/app/components/PageLayout'

export default function AiRegistryPage() {
  const { lang } = useLang()
  const t = getContent(lang)
  const r = (t.evidence as any).aiRegistry

  return (
    <PageLayout
      backHref="/evidence"
      backLabel={lang === 'en' ? 'Back to Evidence' : 'Retour à Evidence'}
    >
      {/* HERO */}
      <div className="mb-16">
        <h1
          className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4"
          style={{ letterSpacing: '-0.02em' }}
        >
          {r.hero.title}
        </h1>
        <p className="text-lg text-[var(--text-secondary)] mb-8 max-w-2xl">
          {r.hero.subtitle}
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href={r.hero.ctaHref}
            className="inline-flex items-center justify-center px-8 py-3 bg-[var(--accent)] text-[var(--bg-primary)] font-medium rounded-lg hover:bg-[var(--accent-hover)] transition-colors text-sm"
          >
            {r.hero.cta}
          </Link>
          <Link
            href={r.hero.ctaSecondaryHref}
            className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--border)] text-[var(--text-secondary)] font-medium rounded-lg hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors text-sm"
          >
            {r.hero.ctaSecondary}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>

      {/* SECTION 1 — Problem */}
      <section className="border-t border-[var(--border)] pt-12 mb-12">
        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-6">{r.problem.title}</h2>
        <div className="space-y-4 max-w-3xl">
          {r.problem.body.map((para: string, i: number) => (
            <p key={i} className="text-[var(--text-secondary)]">{para}</p>
          ))}
        </div>
      </section>

      {/* SECTION 2 — What is AI Registry */}
      <section className="border-t border-[var(--border)] pt-12 mb-12">
        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-4">{r.what.title}</h2>
        <p className="text-[var(--text-secondary)] mb-8 max-w-3xl">{r.what.body}</p>
        <p className="text-sm font-medium text-[var(--text-primary)] mb-4">{r.what.fieldsIntro}</p>
        <div className="grid gap-3 sm:grid-cols-2 mb-6">
          {r.what.fields.map((field: { name: string; desc: string }, i: number) => (
            <div key={i} className="border border-[var(--border)] rounded-lg p-4 bg-[var(--bg-card)]">
              <span className="font-medium text-[var(--text-primary)] text-sm">{field.name}</span>
              {field.desc && (
                <p className="text-[var(--text-muted)] text-xs mt-1">{field.desc}</p>
              )}
            </div>
          ))}
        </div>
        <p className="text-[var(--text-muted)] text-sm italic">{r.what.note}</p>
      </section>

      {/* SECTION 3 — Compliance dashboard */}
      <section className="border-t border-[var(--border)] pt-12 mb-12">
        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-4">{r.dashboard.title}</h2>
        <p className="text-[var(--text-secondary)] mb-4">{r.dashboard.intro}</p>
        <p className="text-sm font-medium text-[var(--text-primary)] mb-3">{r.dashboard.itemsTitle}</p>
        <ul className="space-y-2 mb-6">
          {r.dashboard.items.map((item: string, i: number) => (
            <li key={i} className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2 flex-shrink-0" />
              <span className="text-[var(--text-secondary)] text-sm">{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-[var(--text-secondary)] text-sm">{r.dashboard.closing}</p>
      </section>

      {/* SECTION 4 — Gateway to Evidence */}
      <section className="border-t border-[var(--border)] pt-12 mb-12">
        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-4">{r.gateway.title}</h2>
        <p className="text-[var(--text-secondary)] mb-4">{r.gateway.body}</p>
        <p className="text-[var(--text-secondary)] mb-4">{r.gateway.why}</p>
        <p className="text-[var(--text-secondary)] mb-8">{r.gateway.solution}</p>

        {/* Comparison table */}
        <div className="grid sm:grid-cols-2 gap-6 mb-8">
          <div className="border border-[var(--border)] rounded-lg p-6 bg-[var(--bg-card)]">
            <h3 className="font-semibold text-[var(--text-primary)] mb-4 text-sm uppercase tracking-wide">{r.gateway.freeTitle}</h3>
            <ul className="space-y-2">
              {r.gateway.free.map((item: string, i: number) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2 flex-shrink-0" />
                  <span className="text-[var(--text-secondary)] text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="border border-[var(--accent)]/30 rounded-lg p-6 bg-[var(--bg-card)]">
            <h3 className="font-semibold text-[var(--accent)] mb-4 text-sm uppercase tracking-wide">{r.gateway.paidTitle}</h3>
            <ul className="space-y-2">
              {r.gateway.paid.map((item: string, i: number) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2 flex-shrink-0" />
                  <span className="text-[var(--text-secondary)] text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Link
          href={r.gateway.ctaHref}
          className="inline-flex items-center gap-2 text-[var(--accent)] font-medium text-sm hover:underline"
        >
          {r.gateway.cta}
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </section>

      {/* SECTION 5 — AI Act reference */}
      <section className="border-t border-[var(--border)] pt-12 mb-12">
        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-6">{r.aiAct.title}</h2>
        <div className="space-y-3">
          {r.aiAct.items.map((item: { article: string; description: string }, i: number) => (
            <div key={i} className="flex items-start gap-4 border border-[var(--border)] rounded-lg p-4 bg-[var(--bg-card)]">
              <span className="font-medium text-[var(--text-primary)] text-sm min-w-0 flex-shrink-0 w-72">{item.article}</span>
              <span className="text-[var(--text-muted)] text-sm">{item.description}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 6 — Who it's for */}
      <section className="border-t border-[var(--border)] pt-12 mb-12">
        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-6">{r.forWho.title}</h2>
        <div className="space-y-4 mb-8">
          {r.forWho.audience.map((a: { label: string; body: string }, i: number) => (
            <p key={i} className="text-[var(--text-secondary)]">
              <span className="font-medium text-[var(--text-primary)]">{a.label}</span>{' '}
              {a.body}
            </p>
          ))}
        </div>
        <p className="text-[var(--text-muted)] text-sm">{r.forWho.closing}</p>
      </section>

      {/* FINAL CTA */}
      <section className="border-t border-[var(--border)] pt-12">
        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-2">{r.finalCta.title}</h2>
        <p className="text-[var(--text-muted)] mb-8">{r.finalCta.subtitle}</p>
        <div className="flex flex-wrap gap-4">
          <Link
            href={r.finalCta.ctaHref}
            className="inline-flex items-center justify-center px-8 py-3 bg-[var(--accent)] text-[var(--bg-primary)] font-medium rounded-lg hover:bg-[var(--accent-hover)] transition-colors text-sm"
          >
            {r.finalCta.cta}
          </Link>
          <Link
            href={r.finalCta.ctaSecondaryHref}
            className="inline-flex items-center justify-center px-6 py-3 border border-[var(--border)] text-[var(--text-secondary)] font-medium rounded-lg hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors text-sm"
          >
            {r.finalCta.ctaSecondary}
          </Link>
        </div>
      </section>
    </PageLayout>
  )
}
