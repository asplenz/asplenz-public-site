'use client'

import Link from 'next/link'
import { useLang } from '@/lib/LangContext'
import { getContent } from '@/lib/content'
import Header from './components/Header'
import Footer from './components/Footer'

export default function Home() {
  const { lang } = useLang()
  const t = getContent(lang)

  const renderCode = (text: string) => {
    return text.split(/(`[^`]+`)/).map((sub, j) => {
      if (sub.startsWith('`') && sub.endsWith('`')) {
        return <code key={j} className="px-1.5 py-0.5 bg-[var(--bg-secondary)] text-[var(--accent)] rounded text-sm font-mono">{sub.slice(1, -1)}</code>
      }
      return sub
    })
  }

  const renderInline = (text: string) => {
    return text.split(/(\*\*[^*]+\*\*|`[^`]+`)/).map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        const inner = part.slice(2, -2)
        return <span key={i} className="font-semibold text-[var(--text-primary)]">{renderCode(inner)}</span>
      }
      if (part.startsWith('`') && part.endsWith('`')) {
        return <code key={i} className="px-1.5 py-0.5 bg-[var(--bg-secondary)] text-[var(--accent)] rounded text-sm font-mono">{part.slice(1, -1)}</code>
      }
      return part
    })
  }

  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      <Header />

      {/* 1. Hero */}
      <section className="pt-40 pb-20 px-6 md:px-32 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-6 opacity-0 animate-fade-in-up" style={{ letterSpacing: '-0.02em' }}>
              {t.index.hero.headline}
            </h1>
            <p className="text-lg text-[var(--text-secondary)] mb-2 opacity-0 animate-fade-in-up animate-delay-100">
              {t.index.hero.sub1}
            </p>
            <p className="text-lg text-[var(--text-primary)] font-medium mb-6 opacity-0 animate-fade-in-up animate-delay-100">
              {t.index.hero.sub2}
            </p>
            <p className="text-[var(--text-secondary)] mb-8 opacity-0 animate-fade-in-up animate-delay-200">
              {renderInline(t.index.hero.description)}
            </p>
            <div className="flex flex-wrap gap-4 opacity-0 animate-fade-in-up animate-delay-300">
              <Link
                href={t.index.hero.ctaPrimaryHref}
                className="px-8 py-4 bg-[var(--accent)] text-[var(--bg-primary)] font-medium rounded-lg hover:bg-[var(--accent-hover)] transition-colors"
              >
                {t.index.hero.ctaPrimary}
              </Link>
              <Link
                href={t.index.hero.ctaSecondaryHref}
                className="px-8 py-4 border border-[var(--accent)] text-[var(--accent)] font-medium rounded-lg hover:bg-[var(--accent)]/10 transition-colors"
              >
                {t.index.hero.ctaSecondary}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. The Shift */}
      <section className="py-16 px-6 md:px-32 bg-[var(--bg-secondary)]">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-xl">
            <h2 className="text-[28px] font-semibold text-[var(--text-primary)] mb-4">
              {t.index.shift.title}
            </h2>
            <p className="text-[var(--text-secondary)] mb-6">
              {t.index.shift.intro}
            </p>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <p className="text-sm font-semibold text-[var(--text-primary)] mb-3">{t.index.shift.agentsNow}</p>
                <ul className="space-y-2">
                  {t.index.shift.agentsDo.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2 flex-shrink-0" />
                      <span className="text-[var(--text-secondary)] text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold text-[var(--text-primary)] mb-3">{t.index.shift.butDontKnow}</p>
                <ul className="space-y-2">
                  {t.index.shift.dontKnow.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--text-muted)] mt-2 flex-shrink-0" />
                      <span className="text-[var(--text-muted)] text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="text-[var(--text-primary)] font-semibold">
              {t.index.shift.conclusion}
            </p>
          </div>
        </div>
      </section>

      {/* 3. Knowledge */}
      <section className="py-16 px-6 md:px-32">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-xl">
            <h2 className="text-[28px] font-semibold text-[var(--text-primary)] mb-2">
              {t.index.knowledge.title}
            </h2>
            <p className="text-[var(--accent)] font-medium mb-6">
              {t.index.knowledge.subtitle}
            </p>
            <p className="text-[var(--text-secondary)] mb-6">
              {t.index.knowledge.intro}
            </p>
            <div className="space-y-3 mb-8">
              {t.index.knowledge.entities.map((entity, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2 flex-shrink-0" />
                  <span className="text-[var(--text-secondary)] text-sm">
                    <span className="font-semibold text-[var(--text-primary)]">{entity.name}</span> - {entity.description}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-[var(--text-secondary)] mb-4">{t.index.knowledge.after1}</p>
            <p className="text-[var(--text-secondary)] mb-6">{t.index.knowledge.after2}</p>
            <p className="text-sm text-[var(--text-muted)] italic mb-8">{t.index.knowledge.note}</p>
            <Link
              href={t.index.knowledge.ctaHref}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--accent)] text-[var(--bg-primary)] font-medium rounded-lg hover:bg-[var(--accent-hover)] transition-colors"
            >
              {t.index.knowledge.cta}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Knowledge Verifier */}
      <section className="py-16 px-6 md:px-32 bg-[var(--bg-secondary)]">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-xl">
            <h2 className="text-[28px] font-semibold text-[var(--text-primary)] mb-2">
              {t.index.verifier.title}
            </h2>
            <p className="text-[var(--text-muted)] italic mb-6">
              {t.index.verifier.intro}
            </p>
            <p className="text-[var(--accent)] font-medium mb-4">
              {t.index.verifier.subtitle}
            </p>
            <p className="text-[var(--text-secondary)] mb-6">
              {t.index.verifier.description}
            </p>
            <p className="text-sm font-semibold text-[var(--text-primary)] mb-3">{t.index.verifier.capabilitiesTitle}</p>
            <ul className="space-y-2 mb-8">
              {t.index.verifier.capabilities.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2 flex-shrink-0" />
                  <span className="text-[var(--text-secondary)] text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm font-semibold text-[var(--text-primary)] mb-3">{t.index.verifier.modeTitle}</p>
            <ul className="space-y-2">
              {t.index.verifier.modes.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--text-muted)] mt-2 flex-shrink-0" />
                  <span className="text-[var(--text-secondary)] text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 5. What operational governance looks like */}
      <section className="py-16 px-6 md:px-32">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-xl">
            <h2 className="text-[28px] font-semibold text-[var(--text-primary)] mb-8">
              {t.index.whatChanges.title}
            </h2>
            <p className="text-sm text-[var(--text-muted)] mb-2">{t.index.whatChanges.instead}</p>
            <p className="text-[var(--text-muted)] italic mb-8">{t.index.whatChanges.insteadQuote}</p>
            <p className="text-sm text-[var(--text-primary)] font-semibold mb-4">{t.index.whatChanges.youGet}</p>
            <div className="p-6 bg-[var(--bg-card)] border border-[var(--border)] rounded-lg mb-6">
              <p className="text-sm font-semibold text-[var(--text-primary)] mb-4">{t.index.whatChanges.pr.title}</p>
              <ul className="space-y-2 mb-4">
                {t.index.whatChanges.pr.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2 flex-shrink-0" />
                    <span className="text-[var(--text-secondary)] text-sm font-mono">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm font-semibold text-green-400">{t.index.whatChanges.pr.verdict}</p>
              <p className="text-sm text-green-400/80">{t.index.whatChanges.pr.verdictDetail}</p>
            </div>
            <p className="text-[var(--text-secondary)] mb-2">{t.index.whatChanges.after1}</p>
            <p className="text-[var(--text-primary)] font-medium">{t.index.whatChanges.after2}</p>
          </div>
        </div>
      </section>

      {/* 6. Who this is for */}
      <section className="py-16 px-6 md:px-32 bg-[var(--bg-secondary)]">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-xl">
            <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-6">
              {t.index.who.title}
            </h2>
            <ul className="space-y-3">
              {t.index.who.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2 flex-shrink-0" />
                  <span className="text-[var(--text-secondary)] text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 7. A note on Evidence */}
      <section className="py-16 px-6 md:px-32">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-xl">
            <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-6">
              {t.index.evidenceNote.title}
            </h2>
            <p className="text-[var(--text-secondary)] mb-4">{renderInline(t.index.evidenceNote.p1)}</p>
            <p className="text-[var(--text-muted)] mb-8">{t.index.evidenceNote.p2}</p>
            <Link
              href={t.index.evidenceNote.ctaHref}
              className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--border)] text-[var(--text-secondary)] font-medium rounded-lg hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
            >
              {t.index.evidenceNote.cta}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Final CTAs */}
      <section className="py-16 px-6 md:px-32 bg-[var(--bg-secondary)]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-[28px] font-semibold text-[var(--text-primary)] mb-8">
            {t.index.ctas.title}
          </h2>
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Link
              href={t.index.ctas.primaryHref}
              className="px-8 py-3 bg-[var(--accent)] text-[var(--bg-primary)] font-medium rounded-lg hover:bg-[var(--accent-hover)] transition-colors"
            >
              {t.index.ctas.primary}
            </Link>
            <Link
              href={t.index.ctas.secondaryHref}
              className="px-8 py-3 border border-[var(--accent)] text-[var(--accent)] font-medium rounded-lg hover:bg-[var(--accent)]/10 transition-colors"
            >
              {t.index.ctas.secondary}
            </Link>
            <Link
              href={t.index.ctas.tertiaryHref}
              className="px-8 py-3 border border-[var(--border)] text-[var(--text-secondary)] font-medium rounded-lg hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
            >
              {t.index.ctas.tertiary}
            </Link>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-[var(--text-muted)]">{t.index.closing.line1}</p>
            <p className="text-sm text-[var(--text-muted)]">{t.index.closing.line2}</p>
            <p className="text-sm font-semibold text-[var(--text-primary)]">{renderInline(t.index.closing.line3)}</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
