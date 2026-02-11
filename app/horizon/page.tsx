'use client'

import Link from 'next/link'
import { useLang } from '@/lib/LangContext'
import { getContent } from '@/lib/content'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

export default function HorizonPage() {
  const { lang } = useLang()
  const t = getContent(lang)
  const h = t.horizonPage

  const renderInline = (text: string) => {
    return text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/).map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <span key={i} className="font-semibold text-[var(--text-primary)]">{part.slice(2, -2)}</span>
      }
      if (part.startsWith('*') && part.endsWith('*')) {
        return <em key={i} className="text-[var(--text-muted)]">{part.slice(1, -1)}</em>
      }
      return part
    })
  }

  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      <Header />

      {/* Hero */}
      <section className="pt-40 pb-20 px-6 md:px-32 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] leading-tight mb-6" style={{ letterSpacing: '-0.02em' }}>
              {h.hero.title}
            </h1>
            <p className="text-xl text-[var(--text-secondary)] font-medium mb-6">
              {h.hero.subtitle}
            </p>
            <p className="text-lg text-[var(--text-muted)] mb-2">
              {h.hero.hook}
            </p>
            <p className="text-lg text-[var(--text-primary)] font-semibold">
              {renderInline(h.hero.emphasis)}
            </p>
          </div>
        </div>
      </section>

      {/* Governance Defines Responsibility */}
      <section className="py-16 px-6 md:px-32 bg-[var(--bg-secondary)]">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-xl">
            <h2 className="text-[28px] font-semibold text-[var(--text-primary)] mb-8">
              {h.governance.title}
            </h2>
            <p className="text-[var(--text-secondary)] mb-4">{h.governance.p1}</p>
            <p className="text-[var(--text-secondary)] mb-4">{h.governance.p2}</p>
            <p className="text-[var(--text-primary)] font-medium mb-6">{renderInline(h.governance.p3)}</p>
            <p className="text-[var(--text-secondary)]">{renderInline(h.governance.p4a)}</p>
            <p className="text-[var(--text-primary)] font-medium">{renderInline(h.governance.p4b)}</p>
          </div>
        </div>
      </section>

      {/* Decisions Happen. Proof Doesn't Scale. */}
      <section className="py-16 px-6 md:px-32">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-xl">
            <h2 className="text-[28px] font-semibold text-[var(--text-primary)] mb-8">
              {h.reality.title}
            </h2>
            <p className="text-[var(--text-secondary)] mb-4">{h.reality.p1}</p>
            <p className="text-[var(--text-secondary)] mb-4">{h.reality.p2}</p>
            <p className="text-[var(--text-secondary)] mb-4">{h.reality.p3}</p>
            <p className="text-[var(--text-secondary)] mb-6">{h.reality.p4}</p>
            <p className="text-[var(--text-secondary)] mb-4">{h.reality.p5}</p>
            <blockquote className="border-l-4 border-[var(--accent)] pl-6 py-2 mb-8">
              <p className="text-[var(--text-primary)] font-medium text-lg italic">
                {h.reality.quote}
              </p>
            </blockquote>
            <p className="text-[var(--text-secondary)] mb-1">{h.reality.p6}</p>
            <p className="text-[var(--text-secondary)] mb-6">{h.reality.p7}</p>
            <p className="text-[var(--text-primary)] font-semibold">{renderInline(h.reality.conclusion)}</p>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-16 px-6 md:px-32 bg-[var(--bg-secondary)]">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-xl">
            <h2 className="text-[28px] font-semibold text-[var(--text-primary)] mb-8">
              {h.solution.title}
            </h2>
            <p className="text-xl text-[var(--text-primary)] font-semibold mb-4">{renderInline(h.solution.main)}</p>
            <p className="text-[var(--text-secondary)] mb-6">{h.solution.p1}</p>
            <p className="text-[var(--text-secondary)] mb-1">{h.solution.p2}</p>
            <p className="text-[var(--text-primary)] font-medium mb-6">{renderInline(h.solution.p3)}</p>
            <p className="text-[var(--text-secondary)] mb-4">{h.solution.intro}</p>
            <ul className="space-y-2 mb-8">
              {h.solution.items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2.5 flex-shrink-0" />
                  <span className="text-[var(--text-secondary)]">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-[var(--text-primary)] font-medium">{h.solution.conclusion}</p>
          </div>
        </div>
      </section>

      {/* How Horizon Works */}
      <section className="py-16 px-6 md:px-32">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[28px] font-semibold text-[var(--text-primary)] mb-10">
            {h.howItWorks.title}
          </h2>
          <div className="space-y-4 mb-10 max-w-xl">
            {h.howItWorks.steps.map((s, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <span className="w-7 h-7 rounded-full border border-[var(--accent)] text-[var(--accent)] flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <p className="text-[var(--text-secondary)]">
                  <span className="text-[var(--text-primary)] font-medium">{s.step}</span>
                  {s.detail && <span className="text-[var(--text-muted)]"> ({s.detail})</span>}
                </p>
              </div>
            ))}
          </div>
          <p className="text-[var(--text-muted)] font-medium">{h.howItWorks.conclusion}</p>
        </div>
      </section>

      {/* Separation of Layers */}
      <section className="py-16 px-6 md:px-32 bg-[var(--bg-secondary)]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[28px] font-semibold text-[var(--text-primary)] mb-10">
            {h.layers.title}
          </h2>
          <div className="max-w-2xl mb-10 p-5 bg-[var(--bg-card)] border border-[var(--border)] rounded-lg overflow-x-auto">
            <table className="font-mono text-sm w-full">
              <tbody>
                {h.layers.rows.map((row, idx) => (
                  <tr key={idx}>
                    <td className={`py-1.5 pr-4 whitespace-nowrap ${row.target === 'Horizon' ? 'text-[var(--accent)] font-semibold' : 'text-[var(--text-secondary)]'}`}>
                      {row.label}
                    </td>
                    <td className="py-1.5 px-3 text-[var(--text-muted)]">&rarr;</td>
                    <td className={`py-1.5 pl-4 whitespace-nowrap ${row.target === 'Horizon' ? 'text-[var(--accent)] font-semibold' : 'text-[var(--text-muted)]'}`}>
                      {row.target}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="max-w-xl">
            <p className="text-[var(--text-primary)] font-medium mb-2">{renderInline(h.layers.p1)}</p>
            <p className="text-[var(--text-secondary)]">{h.layers.p2}</p>
          </div>
        </div>
      </section>

      {/* Proof Is Not Logging */}
      <section className="py-16 px-6 md:px-32">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[28px] font-semibold text-[var(--text-primary)] mb-4">
            {h.proofNotLogging.title}
          </h2>
          <p className="text-[var(--text-secondary)] mb-8">{h.proofNotLogging.intro}</p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full max-w-2xl">
              <thead>
                <tr className="border-b border-[var(--border-light)]">
                  <th className="text-left py-3 pr-8 text-[var(--text-muted)] font-medium text-sm">{h.proofNotLogging.columnLogs}</th>
                  <th className="text-left py-3 text-[var(--accent)] font-medium text-sm">{h.proofNotLogging.columnHorizon}</th>
                </tr>
              </thead>
              <tbody>
                {h.proofNotLogging.rows.map((row, idx) => (
                  <tr key={idx} className="border-b border-[var(--border)]">
                    <td className="py-3 pr-8 text-[var(--text-muted)]">{row.logs}</td>
                    <td className="py-3 text-[var(--text-primary)] font-medium">{row.horizon}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[var(--text-primary)] font-medium max-w-xl">{renderInline(h.proofNotLogging.conclusion)}</p>
        </div>
      </section>

      {/* What Horizon Is Not */}
      <section className="py-16 px-6 md:px-32 bg-[var(--bg-secondary)]">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-xl">
            <h2 className="text-[28px] font-semibold text-[var(--text-primary)] mb-8">
              {h.whatIsNot.title}
            </h2>
            <p className="text-[var(--text-secondary)] mb-4">{h.whatIsNot.p1}</p>
            <p className="text-[var(--text-secondary)] mb-6">{h.whatIsNot.p2}</p>
            <p className="text-[var(--text-secondary)] mb-1">{h.whatIsNot.p3}</p>
            <p className="text-[var(--text-primary)] font-medium mb-4">{h.whatIsNot.p4}</p>
            <p className="text-[var(--text-secondary)] mb-6">{h.whatIsNot.p5}</p>
            <p className="text-[var(--text-primary)] font-semibold">{renderInline(h.whatIsNot.conclusion)}</p>
          </div>
        </div>
      </section>

      {/* One Proof Platform. Multiple Domains. */}
      <section className="py-16 px-6 md:px-32">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[28px] font-semibold text-[var(--text-primary)] mb-4">
            {h.modules.title}
          </h2>
          <p className="text-[var(--text-secondary)] mb-10">{h.modules.intro}</p>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {h.modules.items.map((mod, idx) => (
              <div key={idx} className="p-5 bg-[var(--bg-card)] border border-[var(--border)] rounded-lg">
                <h3 className="text-[var(--accent)] font-semibold mb-2">{mod.name}</h3>
                <p className="text-[var(--text-secondary)] text-sm">{mod.description}</p>
              </div>
            ))}
          </div>
          <p className="text-[var(--text-muted)] font-medium max-w-xl">{h.modules.conclusion}</p>
        </div>
      </section>

      {/* Beachhead: AI Accountability */}
      <section className="py-16 px-6 md:px-32 bg-[var(--bg-secondary)]">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-xl">
            <h2 className="text-[28px] font-semibold text-[var(--text-primary)] mb-8">
              {h.beachhead.title}
            </h2>
            <p className="text-[var(--text-secondary)] mb-6">{h.beachhead.intro}</p>
            <p className="text-[var(--text-secondary)] mb-4">{h.beachhead.proofIntro}</p>
            <ul className="space-y-2 mb-8">
              {h.beachhead.proofs.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2.5 flex-shrink-0" />
                  <span className="text-[var(--text-secondary)]">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-[var(--text-primary)] font-medium">{renderInline(h.beachhead.conclusion)}</p>
          </div>
        </div>
      </section>

      {/* Who Horizon Is For */}
      <section className="py-16 px-6 md:px-32">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-xl">
            <h2 className="text-[28px] font-semibold text-[var(--text-primary)] mb-8">
              {h.whoFor.title}
            </h2>
            <p className="text-[var(--text-secondary)] mb-6">{renderInline(h.whoFor.intro)}</p>
            <ul className="space-y-3 mb-8">
              {h.whoFor.personas.map((p, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2.5 flex-shrink-0" />
                  <span className="text-[var(--text-primary)] font-medium">{p}</span>
                </li>
              ))}
            </ul>
            <p className="text-[var(--text-secondary)] mb-1">{h.whoFor.conclusion1}</p>
            <p className="text-[var(--text-primary)] font-medium">{h.whoFor.conclusion2}</p>
          </div>
        </div>
      </section>

      {/* Why Now */}
      <section className="py-16 px-6 md:px-32 bg-[var(--bg-secondary)]">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-xl">
            <h2 className="text-[28px] font-semibold text-[var(--text-primary)] mb-8">
              {h.whyNow.title}
            </h2>
            <p className="text-[var(--text-secondary)] mb-6">{h.whyNow.intro}</p>
            <ol className="space-y-3 mb-8">
              {h.whyNow.items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full border border-[var(--accent)] text-[var(--accent)] flex items-center justify-center text-xs font-semibold flex-shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="text-[var(--text-secondary)]">{renderInline(item)}</span>
                </li>
              ))}
            </ol>
            <p className="text-[var(--text-secondary)] mb-4">{h.whyNow.p1}</p>
            <p className="text-[var(--text-primary)] font-medium">{h.whyNow.conclusion}</p>
          </div>
        </div>
      </section>

      {/* Product Status */}
      <section className="py-16 px-6 md:px-32">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-xl">
            <h2 className="text-[28px] font-semibold text-[var(--text-primary)] mb-8">
              {h.productStatus.title}
            </h2>
            <p className="text-[var(--accent)] font-medium mb-6">{h.productStatus.intro}</p>
            <ul className="space-y-2 mb-8">
              {h.productStatus.items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[var(--accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--text-secondary)]">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-[var(--text-primary)] font-semibold">{renderInline(h.productStatus.conclusion)}</p>
          </div>
        </div>
      </section>

      {/* The Vision */}
      <section className="py-20 px-6 md:px-32 bg-[var(--bg-secondary)] relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="max-w-xl">
            <h2 className="text-[28px] font-semibold text-[var(--text-primary)] mb-8">
              {h.vision.title}
            </h2>
            <p className="text-xl text-[var(--text-muted)] mb-2">{h.vision.line1}</p>
            <p className="text-xl text-[var(--text-primary)] font-semibold mb-8">{renderInline(h.vision.line2)}</p>
            <p className="text-[var(--text-secondary)]">{h.vision.conclusion}</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 md:px-32">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-xl">
            <p className="text-lg text-[var(--text-secondary)] mb-10">{h.cta.intro}</p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--accent)] text-[var(--bg-primary)] font-medium rounded-lg hover:bg-[var(--accent-hover)] transition-colors"
          >
            {h.cta.action}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
