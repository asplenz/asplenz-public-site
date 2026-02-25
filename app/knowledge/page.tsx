'use client'

import Link from 'next/link'
import { useLang } from '@/lib/LangContext'
import { getContent } from '@/lib/content'
import PageLayout from '@/app/components/PageLayout'

export default function KnowledgePage() {
  const { lang } = useLang()
  const t = getContent(lang)
  const k = t.knowledge

  return (
    <PageLayout backLabel={lang === 'en' ? 'Back to home' : 'Retour \u00e0 l\u0027accueil'}>
      {/* Hero */}
      <section className="mb-16">
        <h1 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-2" style={{ letterSpacing: '-0.02em' }}>
          {k.hero.title}
        </h1>
        <p className="text-lg text-[var(--accent)] font-medium mb-4">
          {k.hero.subtitle}
        </p>
        <div className="space-y-1 mb-6">
          {k.hero.lines.map((line, i) => (
            <p key={i} className="text-[var(--text-secondary)]">{line}</p>
          ))}
        </div>
        <p className="text-[var(--text-muted)] italic">{k.hero.note}</p>
      </section>

      {/* The problem Asplenz Knowledge solves */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-4">
          {k.problem.title}
        </h2>
        <p className="text-[var(--text-secondary)] mb-2">{k.problem.intro}</p>
        <p className="text-[var(--text-secondary)] mb-4">{k.problem.fast}</p>
        <p className="text-sm font-semibold text-[var(--text-primary)] mb-3">{k.problem.butDontKnow}</p>
        <ul className="space-y-2 mb-6">
          {k.problem.dontKnow.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--text-muted)] mt-2.5 flex-shrink-0" />
              <span className="text-[var(--text-muted)]">{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-[var(--text-primary)] font-medium mb-4">{k.problem.conclusion}</p>
        <p className="text-[var(--text-primary)] font-semibold">{k.problem.punchline}</p>
      </section>

      {/* The four building blocks */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-3">
          {k.buildingBlocks.title}
        </h2>
        <p className="text-[var(--text-secondary)] mb-8">
          {k.buildingBlocks.intro}
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {k.buildingBlocks.blocks.map((block, idx) => (
            <div key={idx} className="border border-[var(--border)] rounded-lg p-5 bg-[var(--bg-card)]">
              <h3 className="text-[var(--accent)] font-semibold mb-2">{block.name}</h3>
              <div className="text-[var(--text-secondary)] text-sm mb-3 space-y-1">
                {block.description.split('\n').map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
              <p className="text-[var(--text-muted)] text-sm italic">{block.example}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How systems use Knowledge */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-3">
          {k.howSystemsUse.title}
        </h2>
        <p className="text-[var(--text-secondary)] mb-8">{k.howSystemsUse.intro}</p>

        <div className="space-y-8">
          {/* Retrieve */}
          <div>
            <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-3">{k.howSystemsUse.retrieveTitle}</h3>
            <p className="text-[var(--text-secondary)] mb-4">{k.howSystemsUse.retrieveIntro}</p>
            <ul className="space-y-2 mb-4">
              {k.howSystemsUse.retrieveItems.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2.5 flex-shrink-0" />
                  <span className="text-[var(--text-secondary)]">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-[var(--text-muted)] italic">{k.howSystemsUse.retrieveConclusion}</p>
          </div>

          {/* Evaluate */}
          <div>
            <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-3">{k.howSystemsUse.evaluateTitle}</h3>
            <p className="text-[var(--text-secondary)] mb-3">{k.howSystemsUse.evaluateIntro}</p>
            <p className="text-[var(--text-secondary)] mb-3">{k.howSystemsUse.evaluateNote}</p>
            <ul className="space-y-2 mb-4">
              {k.howSystemsUse.outcomes.map((outcome, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2.5 flex-shrink-0" />
                  <span className="text-[var(--text-primary)] font-semibold">{outcome}</span>
                </li>
              ))}
            </ul>
            <p className="text-[var(--text-secondary)]">{k.howSystemsUse.evaluateConclusion}</p>
          </div>
        </div>
      </section>

      {/* Human approval */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-3">
          {k.approval.title}
        </h2>
        <p className="text-[var(--text-secondary)] mb-4">{k.approval.intro}</p>
        <p className="text-[var(--text-primary)] font-medium mb-3">{k.approval.stepsIntro}</p>
        <ol className="space-y-2 mb-6">
          {k.approval.steps.map((step, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full border border-[var(--accent)] text-[var(--accent)] flex items-center justify-center text-xs font-semibold flex-shrink-0 mt-0.5">
                {idx + 1}
              </span>
              <span className="text-[var(--text-secondary)]">{step}</span>
            </li>
          ))}
        </ol>
        <p className="text-[var(--text-primary)] font-medium">{k.approval.conclusion}</p>
      </section>

      {/* Trace every usage */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-3">
          {k.references.title}
        </h2>
        <p className="text-[var(--text-secondary)] mb-4">{k.references.intro}</p>
        <ul className="space-y-2 mb-6">
          {k.references.items.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2.5 flex-shrink-0" />
              <span className="text-[var(--text-secondary)]">{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-[var(--text-muted)] italic">{k.references.conclusion}</p>
      </section>

      {/* Real-time decision awareness */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-3">
          {k.realtime.title}
        </h2>
        <p className="text-[var(--text-secondary)]">{k.realtime.description}</p>
      </section>

      {/* From declaration to operational governance */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-3">
          {k.verifierSection.title}
        </h2>
        <p className="text-[var(--text-secondary)] mb-4">{k.verifierSection.intro}</p>
        <p className="text-[var(--accent)] font-medium mb-3">{k.verifierSection.subtitle}</p>
        <p className="text-[var(--text-secondary)] mb-4">{k.verifierSection.description}</p>
        <p className="text-[var(--text-primary)] font-medium mb-6">{k.verifierSection.conclusion}</p>
        <Link
          href={k.verifierSection.ctaHref}
          className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--accent)] text-[var(--accent)] font-medium rounded-lg hover:bg-[var(--accent)]/10 transition-colors"
        >
          {k.verifierSection.cta}
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </section>

      {/* What Knowledge is not */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-3">
          {k.isNot.title}
        </h2>
        <p className="text-[var(--text-secondary)] mb-4">{k.isNot.intro}</p>
        <ul className="space-y-2 mb-6">
          {k.isNot.items.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--text-muted)] mt-2.5 flex-shrink-0" />
              <span className="text-[var(--text-muted)]">{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-[var(--text-primary)] font-semibold">{k.isNot.conclusion}</p>
      </section>

      {/* What Knowledge replaces */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-6">
          {k.replaces.title}
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border border-[var(--border)] rounded-lg overflow-hidden">
            <thead className="bg-[var(--bg-card)]">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-[var(--text-muted)]">
                  {lang === 'en' ? 'Before' : 'Avant'}
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-[var(--accent)]">
                  {lang === 'en' ? 'After' : 'Apr\u00e8s'}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border)]">
              {k.replaces.rows.map((row, idx) => (
                <tr key={idx} className="bg-[var(--bg-secondary)]">
                  <td className="px-4 py-3 text-sm text-[var(--text-muted)]">{row.before}</td>
                  <td className="px-4 py-3 text-sm text-[var(--text-primary)] font-medium">{row.after}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* CTAs */}
      <section className="border-t border-[var(--border)] pt-12">
        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-2">
          {k.ctas.title}
        </h2>
        <p className="text-[var(--text-secondary)] mb-8">{k.ctas.subtitle}</p>
        <div className="flex flex-wrap gap-4 mb-8">
          <Link
            href={k.ctas.primaryHref}
            className="inline-flex items-center gap-2 px-8 py-3 bg-[var(--accent)] text-[var(--bg-primary)] font-medium rounded-lg hover:bg-[var(--accent-hover)] transition-colors"
          >
            {k.ctas.primary}
          </Link>
          <Link
            href={k.ctas.secondaryHref}
            className="inline-flex items-center gap-2 px-8 py-3 border border-[var(--accent)] text-[var(--accent)] font-medium rounded-lg hover:bg-[var(--accent)]/10 transition-colors"
          >
            {k.ctas.secondary}
          </Link>
        </div>
        <p className="text-[var(--text-muted)] font-semibold">{k.ctas.tagline}</p>
      </section>
    </PageLayout>
  )
}
