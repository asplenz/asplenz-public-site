'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useLang } from '@/lib/LangContext'
import { getContent } from '@/lib/content'
import Header from './components/Header'
import Footer from './components/Footer'

export default function Home() {
  const { lang } = useLang()
  const t = getContent(lang)

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
          <div className="grid md:grid-cols-[3fr_2fr] gap-6 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4 opacity-0 animate-fade-in-up" style={{ letterSpacing: '-0.02em' }}>
                {t.index.hero.subtitle.split('\n').map((line, i) => (
                  <span key={i} className={i === 0 ? 'text-[var(--text-muted)]' : 'text-[var(--text-primary)]'}>{i > 0 && <br />}{line}</span>
                ))}
              </h1>
              <p className="text-xl text-[var(--text-secondary)] font-medium mb-2 opacity-0 animate-fade-in-up animate-delay-100">
                {t.index.hero.description}
              </p>
              <p className="text-lg text-[var(--text-muted)] mb-6 opacity-0 animate-fade-in-up animate-delay-200">
                {renderInline(t.index.hero.hook)}
              </p>
              <p className="text-sm font-medium text-[var(--accent)] uppercase tracking-[0.04em] mb-10 opacity-0 animate-fade-in-up animate-delay-200">
                {t.index.hero.tagline}
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--accent)] text-[var(--bg-primary)] font-medium rounded-lg hover:bg-[var(--accent-hover)] transition-colors opacity-0 animate-fade-in-up animate-delay-300"
              >
                {t.index.hero.cta}
              </Link>
            </div>
            <div className="hidden md:block relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent)]/20 to-transparent rounded-lg blur-3xl" />
              <Image
                src="/hero.png"
                alt="Horizon"
                width={600}
                height={400}
                className="rounded-lg border border-[var(--border)] relative z-10 w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* How Horizon works */}
      <section className="py-16 px-6 md:px-32 bg-[var(--bg-secondary)]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[28px] font-semibold text-[var(--text-primary)] mb-12 text-center">
            {t.index.howItWorks.title}
          </h2>
          <div className="relative flex items-start justify-between max-w-4xl mx-auto mb-10">
            {/* Connecting line */}
            <div className="absolute top-6 left-[calc(12.5%)] right-[calc(12.5%)] h-px bg-[var(--border-light)]" />
            {t.index.howItWorks.steps.map((step, idx) => (
              <div key={idx} className="relative flex flex-col items-center text-center w-1/4 px-2">
                <div className="w-12 h-12 rounded-full border-2 border-[var(--accent)] bg-[var(--bg-secondary)] flex items-center justify-center text-[var(--accent)] font-semibold text-lg relative z-10">
                  {idx + 1}
                </div>
                <p className="mt-3 text-sm font-semibold text-[var(--text-primary)] uppercase tracking-wider">
                  {step.label}
                </p>
                <p className="mt-1 text-xs text-[var(--text-muted)] hidden md:block">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto">
            {t.index.howItWorks.summary}
          </p>
        </div>
      </section>

      {/* The reality organizations face */}
      <section className="py-16 px-6 md:px-32">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-xl">
            <h2 className="text-[28px] font-semibold text-[var(--text-primary)] mb-8">
              {t.index.reality.title}
            </h2>
            <p className="text-[var(--text-secondary)] mb-2">{t.index.reality.p1}</p>
            <p className="text-[var(--text-secondary)] mb-6">{renderInline(t.index.reality.p2)}</p>
            <p className="text-[var(--text-secondary)] mb-4">{t.index.reality.reliance}</p>
            <ul className="space-y-2 mb-6">
              {t.index.reality.items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2.5 flex-shrink-0" />
                  <span className="text-[var(--text-secondary)]">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-[var(--text-primary)] font-semibold">{renderInline(t.index.reality.conclusion)}</p>
          </div>
        </div>
      </section>

      {/* What breaks when proof is missing */}
      <section className="py-16 px-6 md:px-32 bg-[var(--bg-secondary)]">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-xl">
            <h2 className="text-[28px] font-semibold text-[var(--text-primary)] mb-8">
              {t.index.breaks.title}
            </h2>
            <ul className="space-y-3 mb-6">
              {t.index.breaks.items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2.5 flex-shrink-0" />
                  <span className="text-[var(--text-secondary)] text-lg">{renderInline(item)}</span>
                </li>
              ))}
            </ul>
            <p className="text-[var(--text-muted)] italic">{t.index.breaks.conclusion}</p>
          </div>
        </div>
      </section>

      {/* What Horizon does */}
      <section className="py-16 px-6 md:px-32">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-xl">
            <h2 className="text-[28px] font-semibold text-[var(--text-primary)] mb-8">
              {t.index.whatDoes.title}
            </h2>
            <p className="text-[var(--text-secondary)] mb-6">{renderInline(t.index.whatDoes.main)}</p>
            <p className="text-[var(--text-secondary)] mb-4">{t.index.whatDoes.listIntro}</p>
            <ul className="space-y-2 mb-6">
              {t.index.whatDoes.items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2.5 flex-shrink-0" />
                  <span className="text-[var(--text-secondary)]">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-[var(--text-muted)] mb-8">{t.index.whatDoes.conclusion}</p>
            <div className="border-l-2 border-[var(--accent)] pl-6 space-y-2">
              {t.index.whatDoes.evalBlock.split('\n').map((line, i) => (
                <p key={i} className="text-[var(--text-secondary)]">{renderInline(line)}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Governance */}
      <section className="py-16 px-6 md:px-32 bg-[var(--bg-secondary)]">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-xl">
            <h2 className="text-[28px] font-semibold text-[var(--text-primary)] mb-8">
              {t.index.governance.title}
            </h2>
            <p className="text-[var(--text-secondary)] mb-6">{t.index.governance.p1}</p>
            <ul className="space-y-2 mb-6">
              {t.index.governance.bullets.map((b, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2.5 flex-shrink-0" />
                  <span className="text-[var(--text-secondary)]">{renderInline(b)}</span>
                </li>
              ))}
            </ul>
            <p className="text-[var(--text-primary)] font-medium">{renderInline(t.index.governance.conclusion)}</p>
          </div>
        </div>
      </section>

      {/* Two Kinds of Facts */}
      <section className="py-16 px-6 md:px-32">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-xl">
            <h2 className="text-[28px] font-semibold text-[var(--text-primary)] mb-8">
              {t.index.twoFacts.title}
            </h2>
            <p className="text-[var(--text-secondary)] mb-4">{t.index.twoFacts.intro}</p>
            <ol className="space-y-2 mb-8">
              {t.index.twoFacts.facts.map((f, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full border border-[var(--accent)] text-[var(--accent)] flex items-center justify-center text-xs font-semibold flex-shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="text-[var(--text-secondary)]">{renderInline(f)}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full max-w-2xl">
              <thead>
                <tr className="border-b border-[var(--border-light)]">
                  <th className="text-left py-3 pr-6 text-[var(--accent)] font-medium text-sm">{t.index.twoFacts.tableHeader.time}</th>
                  <th className="text-left py-3 pr-6 text-[var(--text-muted)] font-medium text-sm">{t.index.twoFacts.tableHeader.type}</th>
                  <th className="text-left py-3 text-[var(--text-muted)] font-medium text-sm">{t.index.twoFacts.tableHeader.record}</th>
                </tr>
              </thead>
              <tbody>
                {t.index.twoFacts.tableRows.map((row, idx) => (
                  <tr key={idx} className="border-b border-[var(--border)]">
                    <td className="py-3 pr-6 text-[var(--accent)] font-semibold">{row.time}</td>
                    <td className="py-3 pr-6 text-[var(--text-primary)] font-medium">{row.type}</td>
                    <td className="py-3 text-[var(--text-secondary)]">{row.record}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Decisions are not judged */}
      <section className="py-16 px-6 md:px-32 bg-[var(--bg-secondary)]">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-xl">
            <h2 className="text-[28px] font-semibold text-[var(--text-primary)] mb-8">
              {t.index.notJudged.title}
            </h2>
            <p className="text-[var(--text-secondary)] mb-4">{t.index.notJudged.intro}</p>
            <ul className="space-y-2 mb-6">
              {t.index.notJudged.preserves.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2.5 flex-shrink-0" />
                  <span className="text-[var(--text-secondary)]">{renderInline(item)}</span>
                </li>
              ))}
            </ul>
            <p className="text-[var(--text-primary)] font-semibold">{renderInline(t.index.notJudged.conclusion)}</p>
          </div>
        </div>
      </section>

      {/* Proof Is Not Logging */}
      <section className="py-16 px-6 md:px-32">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[28px] font-semibold text-[var(--text-primary)] mb-8">
            {t.index.proofNotLogging.title}
          </h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full max-w-2xl">
              <thead>
                <tr className="border-b border-[var(--border-light)]">
                  <th className="text-left py-3 pr-8 text-[var(--text-muted)] font-medium text-sm">{t.index.proofNotLogging.columnLogs}</th>
                  <th className="text-left py-3 text-[var(--accent)] font-medium text-sm">{t.index.proofNotLogging.columnHorizon}</th>
                </tr>
              </thead>
              <tbody>
                {t.index.proofNotLogging.rows.map((row, idx) => (
                  <tr key={idx} className="border-b border-[var(--border)]">
                    <td className="py-3 pr-8 text-[var(--text-muted)]">{row.logs}</td>
                    <td className="py-3 text-[var(--text-primary)] font-medium">{row.horizon}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[var(--text-primary)] font-medium max-w-xl">{renderInline(t.index.proofNotLogging.conclusion)}</p>
        </div>
      </section>

      {/* Built for AI accountability */}
      <section className="py-16 px-6 md:px-32 bg-[var(--bg-secondary)]">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-xl">
            <h2 className="text-[28px] font-semibold text-[var(--text-primary)] mb-8">
              {t.index.aiAccountability.title}
            </h2>
            <p className="text-[var(--text-secondary)] mb-4">{t.index.aiAccountability.intro}</p>
            <ul className="space-y-2 mb-6">
              {t.index.aiAccountability.proofs.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2.5 flex-shrink-0" />
                  <span className="text-[var(--text-secondary)]">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-[var(--text-primary)] font-semibold">{renderInline(t.index.aiAccountability.conclusion)}</p>
          </div>
        </div>
      </section>

      {/* What Horizon replaces */}
      <section className="py-16 px-6 md:px-32">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-xl">
            <h2 className="text-[28px] font-semibold text-[var(--text-primary)] mb-8">
              {t.index.replaces.title}
            </h2>
            <div className="space-y-4">
              {t.index.replaces.rows.map((row, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <span className="text-[var(--text-muted)] min-w-[180px]">{row.before}</span>
                  <span className="text-[var(--accent)] flex-shrink-0">&rarr;</span>
                  <span className="text-[var(--text-primary)] font-medium">{row.after}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who Horizon is for */}
      <section className="py-16 px-6 md:px-32 bg-[var(--bg-secondary)]">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-xl">
            <h2 className="text-[28px] font-semibold text-[var(--text-primary)] mb-8">
              {t.index.whoFor.title}
            </h2>
            <ul className="space-y-4">
              {t.index.whoFor.personas.map((persona, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2.5 flex-shrink-0" />
                  <div>
                    <span className="text-[var(--text-primary)] font-semibold">{persona.role}: </span>
                    <span className="text-[var(--text-secondary)]">{persona.description}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Beachhead AI (FR only) */}
      {'beachhead' in t.index && (
        <section className="py-16 px-6 md:px-32">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-xl">
              <h2 className="text-[28px] font-semibold text-[var(--text-primary)] mb-8">
                {(t.index as any).beachhead.title}
              </h2>
              <p className="text-[var(--text-secondary)] mb-4">{renderInline((t.index as any).beachhead.intro)}</p>
              <ul className="space-y-2">
                {(t.index as any).beachhead.proofs.map((item: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2.5 flex-shrink-0" />
                    <span className="text-[var(--text-secondary)]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* One simple question + CTA */}
      <section className="py-20 px-6 md:px-32 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm text-[var(--text-muted)] uppercase tracking-wider mb-4">{t.index.simpleQuestion.title}</p>
              <h2 className="text-[32px] font-semibold text-[var(--text-primary)] mb-2">
                {t.index.simpleQuestion.question}
              </h2>
              <p className="text-lg text-[var(--text-secondary)] mb-2">{t.index.simpleQuestion.question2}</p>
              <p className="text-lg text-[var(--text-muted)] font-medium mb-10">{t.index.simpleQuestion.answer}</p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--accent)] text-[var(--bg-primary)] font-medium rounded-lg hover:bg-[var(--accent-hover)] transition-colors"
              >
                {t.index.cta}
              </Link>
            </div>
            <div className="hidden md:block relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent)]/20 to-transparent rounded-lg blur-3xl" />
              <Image
                src="/final-cta.png"
                alt="Horizon"
                width={600}
                height={400}
                className="rounded-lg border border-[var(--border)] relative z-10 w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer quote */}
      <section className="py-16 px-6 md:px-32">
        <div className="max-w-xl mx-auto text-center">
          {t.index.finalQuote.lines.map((line, idx) => (
            <p key={idx} className="text-sm font-semibold text-[var(--text-muted)] uppercase tracking-[0.08em]">
              {line}
            </p>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
