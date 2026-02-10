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

      {/* The Reality Organizations Face */}
      <section className="py-16 px-6 md:px-32 bg-[var(--bg-secondary)]">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-xl">
            <h2 className="text-[28px] font-semibold text-[var(--text-primary)] mb-8">
              {h.reality.title}
            </h2>
            <p className="text-[var(--text-primary)] font-medium mb-4">{h.reality.intro}</p>
            <div className="space-y-1 mb-8">
              {h.reality.lines.map((line, idx) => (
                <p key={idx} className="text-[var(--text-secondary)]">{renderInline(line)}</p>
              ))}
            </div>
            <p className="text-[var(--text-secondary)] mb-4">{h.reality.examplesIntro}</p>
            <ul className="list-disc list-inside text-[var(--text-secondary)] mb-8 space-y-1">
              {h.reality.examples.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <p className="text-[var(--text-secondary)] mb-4">{h.reality.questionsIntro}</p>
            <ul className="space-y-2 mb-8">
              {h.reality.questions.map((q, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2.5 flex-shrink-0" />
                  <span className="text-[var(--text-primary)] font-medium">{q}</span>
                </li>
              ))}
            </ul>
            <p className="text-[var(--text-muted)] font-medium">{h.reality.conclusion1}</p>
            <p className="text-[var(--text-primary)] font-semibold">{renderInline(h.reality.conclusion2)}</p>
          </div>
        </div>
      </section>

      {/* Why This Is No Longer Acceptable */}
      <section className="py-16 px-6 md:px-32">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-xl">
            <h2 className="text-[28px] font-semibold text-[var(--text-primary)] mb-8">
              {h.whyNotAcceptable.title}
            </h2>
            <p className="text-[var(--text-secondary)] mb-6">{h.whyNotAcceptable.intro}</p>
            <blockquote className="border-l-4 border-[var(--accent)] pl-6 py-2 mb-8">
              <p className="text-[var(--text-primary)] font-medium text-lg italic">
                {h.whyNotAcceptable.quote}
              </p>
            </blockquote>
            <p className="text-[var(--text-secondary)] mb-4">{h.whyNotAcceptable.appliesIntro}</p>
            <ul className="list-disc list-inside text-[var(--text-secondary)] mb-8 space-y-1">
              {h.whyNotAcceptable.applies.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <p className="text-[var(--text-muted)] font-medium">{h.whyNotAcceptable.conclusion1}</p>
            <p className="text-[var(--text-primary)] font-semibold">{renderInline(h.whyNotAcceptable.conclusion2)}</p>
          </div>
        </div>
      </section>

      {/* The Insight */}
      <section className="py-16 px-6 md:px-32 bg-[var(--bg-secondary)]">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-xl">
            <h2 className="text-[28px] font-semibold text-[var(--text-primary)] mb-8">
              {h.insight.title}
            </h2>
            <p className="text-xl text-[var(--text-primary)] font-semibold mb-4">{renderInline(h.insight.main)}</p>
            <p className="text-[var(--text-secondary)] mb-8">{h.insight.hook}</p>
            <p className="text-[var(--text-secondary)] mb-4">{h.insight.proofIntro}</p>
            <div className="space-y-3">
              {h.insight.proofItems.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="text-[var(--accent)] font-semibold min-w-[120px]">{item.term}</span>
                  <span className="text-[var(--text-muted)]">—</span>
                  <span className="text-[var(--text-secondary)]">{item.description}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-16 px-6 md:px-32">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-xl">
            <h2 className="text-[28px] font-semibold text-[var(--text-primary)] mb-2">
              {h.solution.title}
            </h2>
            <p className="text-[var(--text-muted)] text-sm uppercase tracking-wider mb-8">{h.solution.subtitle}</p>
            <p className="text-xl text-[var(--text-primary)] font-semibold mb-4">{renderInline(h.solution.main)}</p>
            <p className="text-[var(--text-secondary)] mb-4">{h.solution.description}</p>
            <ul className="list-disc list-inside text-[var(--text-secondary)] mb-8 space-y-1">
              {h.solution.sources.map((s, idx) => (
                <li key={idx}>{s}</li>
              ))}
            </ul>
            <p className="text-[var(--text-muted)] font-medium">{h.solution.conclusion1}</p>
            <p className="text-[var(--text-primary)] font-semibold">{renderInline(h.solution.conclusion2)}</p>
          </div>
        </div>
      </section>

      {/* What Horizon Does */}
      <section className="py-16 px-6 md:px-32 bg-[var(--bg-secondary)]">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-xl">
            <h2 className="text-[28px] font-semibold text-[var(--text-primary)] mb-8">
              {h.whatDoes.title}
            </h2>
            <p className="text-[var(--text-secondary)] mb-4">{h.whatDoes.intro}</p>
            <ul className="list-disc list-inside text-[var(--text-secondary)] mb-8 space-y-1">
              {h.whatDoes.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <p className="text-[var(--text-primary)] font-medium">{h.whatDoes.conclusion}</p>
          </div>
        </div>
      </section>

      {/* What Horizon Does Not Do */}
      <section className="py-16 px-6 md:px-32">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-xl">
            <h2 className="text-[28px] font-semibold text-[var(--text-primary)] mb-8">
              {h.whatDoesNot.title}
            </h2>
            <p className="text-[var(--text-secondary)] mb-4">{renderInline(h.whatDoesNot.intro)}</p>
            <ul className="list-disc list-inside text-[var(--text-secondary)] mb-8 space-y-1">
              {h.whatDoesNot.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <p className="text-[var(--text-primary)] font-semibold">{renderInline(h.whatDoesNot.conclusion)}</p>
          </div>
        </div>
      </section>

      {/* How Horizon Works */}
      <section className="py-16 px-6 md:px-32 bg-[var(--bg-secondary)]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[28px] font-semibold text-[var(--text-primary)] mb-10">
            {h.howItWorks.title}
          </h2>
          <div className="grid md:grid-cols-4 gap-6 mb-10">
            {h.howItWorks.steps.map((s, idx) => (
              <div key={idx} className="relative">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 rounded-full border border-[var(--accent)] text-[var(--accent)] flex items-center justify-center text-sm font-semibold flex-shrink-0">
                    {idx + 1}
                  </span>
                  {idx < 3 && <div className="hidden md:block flex-1 h-px bg-[var(--border-light)]" />}
                </div>
                <p className="text-[var(--text-primary)] font-medium mb-1">{s.step}</p>
                <p className="text-[var(--text-muted)] text-sm">{s.detail}</p>
              </div>
            ))}
          </div>
          <div className="space-y-1">
            {h.howItWorks.conclusions.map((line, idx) => (
              <p key={idx} className="text-[var(--text-muted)] font-medium">{line}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Proof Is Not Logging */}
      <section className="py-16 px-6 md:px-32">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[28px] font-semibold text-[var(--text-primary)] mb-4">
            {h.proofNotLogging.title}
          </h2>
          <p className="text-[var(--text-muted)] mb-1">{h.proofNotLogging.intro1}</p>
          <p className="text-[var(--text-primary)] font-medium mb-8">{renderInline(h.proofNotLogging.intro2)}</p>
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

      {/* Modules */}
      <section className="py-16 px-6 md:px-32 bg-[var(--bg-secondary)]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[28px] font-semibold text-[var(--text-primary)] mb-4">
            {h.modules.title}
          </h2>
          <p className="text-[var(--text-primary)] font-medium mb-2">{renderInline(h.modules.intro)}</p>
          <p className="text-[var(--text-secondary)] mb-10">{renderInline(h.modules.subtitle)}</p>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {h.modules.items.map((mod, idx) => (
              <div key={idx} className="p-5 bg-[var(--bg-card)] border border-[var(--border)] rounded-lg">
                <h3 className="text-[var(--accent)] font-semibold mb-2">{mod.name}</h3>
                <p className="text-[var(--text-secondary)] text-sm">{mod.description}</p>
              </div>
            ))}
          </div>
          <p className="text-[var(--text-muted)] font-medium">{h.modules.conclusion1}</p>
          <p className="text-[var(--text-primary)] font-medium">{h.modules.conclusion2}</p>
        </div>
      </section>

      {/* Beachhead: AI Accountability */}
      <section className="py-16 px-6 md:px-32">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-xl">
            <h2 className="text-[28px] font-semibold text-[var(--text-primary)] mb-8">
              {h.beachhead.title}
            </h2>
            <p className="text-[var(--text-secondary)] mb-4">{h.beachhead.intro}</p>
            <ul className="list-disc list-inside text-[var(--text-secondary)] mb-6 space-y-1">
              {h.beachhead.risks.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <p className="text-[var(--text-secondary)] mb-4">{h.beachhead.proofIntro}</p>
            <ul className="list-disc list-inside text-[var(--text-secondary)] mb-8 space-y-1">
              {h.beachhead.proofs.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <p className="text-[var(--text-primary)] font-medium">{renderInline(h.beachhead.conclusion)}</p>
          </div>
        </div>
      </section>

      {/* Who Horizon Is For */}
      <section className="py-16 px-6 md:px-32 bg-[var(--bg-secondary)]">
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
            <p className="text-[var(--text-primary)] font-medium">{renderInline(h.whoFor.conclusion1)}</p>
            <p className="text-[var(--text-muted)] font-medium">{h.whoFor.conclusion2}</p>
          </div>
        </div>
      </section>

      {/* Why Now */}
      <section className="py-16 px-6 md:px-32">
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
                  <span className="text-[var(--text-secondary)] text-lg">{item}</span>
                </li>
              ))}
            </ol>
            <p className="text-[var(--text-primary)] font-medium">{h.whyNow.conclusion}</p>
          </div>
        </div>
      </section>

      {/* Product Status */}
      <section className="py-16 px-6 md:px-32 bg-[var(--bg-secondary)]">
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
            <p className="text-[var(--text-muted)] font-medium">{h.productStatus.conclusion1}</p>
            <p className="text-[var(--text-primary)] font-semibold">{renderInline(h.productStatus.conclusion2)}</p>
          </div>
        </div>
      </section>

      {/* The Vision */}
      <section className="py-20 px-6 md:px-32 relative overflow-hidden">
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
      <section className="py-20 px-6 md:px-32 bg-[var(--bg-secondary)]">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-lg text-[var(--text-secondary)] mb-4 max-w-2xl mx-auto">{h.cta.intro}</p>
          <p className="text-xl text-[var(--text-primary)] font-semibold mb-10">{renderInline(h.cta.emphasis)}</p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--accent)] text-[var(--bg-primary)] font-medium rounded-lg hover:bg-[var(--accent-hover)] transition-colors"
          >
            {h.cta.action}
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
