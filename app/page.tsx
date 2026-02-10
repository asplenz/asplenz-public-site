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

      {/* How Horizon Works */}
      <section className="py-16 px-6 md:px-32 bg-[var(--bg-secondary)]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[28px] font-semibold text-[var(--text-primary)] mb-10">
            {t.index.howItWorks.title}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {t.index.howItWorks.steps.map((step, idx) => (
              <div key={idx} className="relative">
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-8 h-8 rounded-full border border-[var(--accent)] text-[var(--accent)] flex items-center justify-center text-sm font-semibold flex-shrink-0">
                    {idx + 1}
                  </span>
                  {idx < 3 && <div className="hidden md:block flex-1 h-px bg-[var(--border-light)]" />}
                </div>
                <p className="text-[var(--text-primary)] font-medium text-lg">{step}</p>
              </div>
            ))}
          </div>
          <p className="text-[var(--text-secondary)] mb-6 max-w-xl">{t.index.howItWorks.description}</p>
          <Link href="/horizon" className="text-[var(--accent)] hover:text-[var(--accent-hover)] font-medium transition-colors">
            {t.index.howItWorks.link} →
          </Link>
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

      {/* Why Now */}
      <section className="py-16 px-6 md:px-32 bg-[var(--bg-secondary)]">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-xl">
            <h2 className="text-[28px] font-semibold text-[var(--text-primary)] mb-8">
              {t.index.whyNow.title}
            </h2>
            <ul className="space-y-4">
              {t.index.whyNow.items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2.5 flex-shrink-0" />
                  <span className="text-[var(--text-secondary)] text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 md:px-32">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <p className="text-sm text-[var(--text-muted)] uppercase tracking-wider mb-4">{t.index.simpleQuestion.title}</p>
              <h2 className="text-[32px] font-semibold text-[var(--text-primary)] mb-4">
                {t.index.simpleQuestion.question}
              </h2>
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
      <section className="py-16 px-6 md:px-32 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="max-w-xl mx-auto text-center relative">
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
