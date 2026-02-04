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

  // Helper to render markdown-style bold and italic text
  const renderMarkdown = (text: string) => {
    const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/).map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i} className="text-[var(--text-primary)]">{part.slice(2, -2)}</strong>
      }
      if (part.startsWith('*') && part.endsWith('*')) {
        return <em key={i} className="text-[var(--text-secondary)]">{part.slice(1, -1)}</em>
      }
      return part
    })
    return parts
  }

  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      <Header />

      {/* Hero Section */}
      <section className="pt-28 pb-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="max-w-6xl mx-auto relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] leading-tight mb-6 opacity-0 animate-fade-in-up">
                {t.index.hero.title}
              </h1>
              <p className="text-2xl text-[var(--accent)] mb-6 opacity-0 animate-fade-in-up animate-delay-100">
                {t.index.hero.subtitle}
              </p>
              <p className="text-lg text-[var(--text-secondary)] mb-4 opacity-0 animate-fade-in-up animate-delay-200">
                {renderMarkdown(t.index.hero.description)}
              </p>
              <p className="text-[var(--text-secondary)] opacity-80 mb-6 opacity-0 animate-fade-in-up animate-delay-200">
                {t.index.hero.hook}
              </p>
              <div className="flex flex-col sm:flex-row items-start gap-4 opacity-0 animate-fade-in-up animate-delay-300">
                <a
                  href="#ai-accountability"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--accent)] text-[var(--bg-primary)] font-medium rounded-lg hover:bg-[var(--accent-hover)] transition-colors"
                >
                  {t.index.hero.cta1}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center py-4 text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors underline underline-offset-4"
                >
                  {t.index.hero.cta2}
                </Link>
              </div>
            </div>
            <div className="hidden md:block relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent)]/20 to-transparent rounded-lg blur-3xl" />
              <Image
                src="/hero.png"
                alt="Horizon illustration"
                width={600}
                height={400}
                className="rounded-lg border border-[var(--border)] relative z-10"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-16 px-6 bg-[var(--bg-secondary)]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-2">
            {t.index.problem.title}
          </h2>
          <p className="text-2xl text-[var(--accent)] mb-1">
            {t.index.problem.subtitle}
          </p>
          <p className="text-2xl text-[var(--accent)] mb-12">
            {t.index.problem.subtitle2}
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {t.index.problem.blocks.map((block, idx) => (
              <div key={idx} className="p-6 bg-[var(--bg-card)] border border-[var(--border)] rounded-lg text-left">
                <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-3">
                  {block.title}
                </h3>
                <p className="text-[var(--text-secondary)] text-sm">
                  {block.description}
                </p>
              </div>
            ))}
          </div>

          <p className="text-xl font-bold text-[var(--accent)]">{t.index.problem.conclusion}</p>
        </div>
      </section>

      {/* What the World Now Requires Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-10">
            {t.index.worldRequires.title}
          </h2>

          <blockquote className="text-2xl md:text-3xl font-medium text-[var(--accent)] mb-3 leading-relaxed">
            {t.index.worldRequires.quote}
          </blockquote>

          <p className="text-[var(--text-secondary)] mb-8">{t.index.worldRequires.anchor}</p>

          <p className="text-[var(--text-secondary)] mb-4">{t.index.worldRequires.requiredBy}</p>
          <p className="text-lg text-[var(--text-primary)] mb-10">{renderMarkdown(t.index.worldRequires.conclusion)}</p>

          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {t.index.worldRequires.pillars.map((pillar, idx) => (
              <div key={idx} className="p-4 border-t-2 border-[var(--accent)]">
                <p className="text-[var(--text-primary)] font-semibold">{pillar}</p>
              </div>
            ))}
          </div>

          <p className="text-[var(--text-primary)] font-medium mt-6">{renderMarkdown(t.index.worldRequires.beforeExecution)}</p>
        </div>
      </section>

      {/* The Solution Section */}
      <section className="py-16 px-6 bg-[var(--bg-secondary)]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-2">
            {t.index.solution.title}
          </h2>
          <p className="text-xl text-[var(--accent)] mb-6">
            {t.index.solution.subtitle}
          </p>

          <p className="text-lg text-[var(--text-secondary)] mb-1">{t.index.solution.intro}</p>
          <p className="text-lg text-[var(--text-secondary)] mb-12">{renderMarkdown(t.index.solution.intro2)}</p>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {t.index.solution.blocks.map((block, idx) => (
              <div key={idx} className="p-6 bg-[var(--bg-card)] border border-[var(--accent)] rounded-lg text-left">
                <h3 className="text-lg font-semibold text-[var(--accent)] mb-3">
                  {block.title}
                </h3>
                <p className="text-[var(--text-secondary)] text-sm">
                  {block.description}
                </p>
              </div>
            ))}
          </div>

          <div className="max-w-md mx-auto bg-[var(--bg-primary)] rounded-md px-5 py-4 mb-8 text-left">
            <p className="text-sm text-[var(--text-primary)] font-medium mb-3">{t.index.solution.recordTitle}</p>
            <ul className="text-sm text-[var(--text-secondary)] space-y-1">
              {t.index.solution.record.map((item, idx) => (
                <li key={idx}>– {item}</li>
              ))}
            </ul>
          </div>

          <p className="text-lg text-[var(--text-primary)] mb-6">{renderMarkdown(t.index.solution.conclusion)}</p>
          <Link href="/foundations" className="text-sm text-[var(--text-muted)] hover:text-[var(--accent)] underline underline-offset-4 transition-colors">
            {t.index.contextLinks.solutionLink} →
          </Link>
        </div>
      </section>

      {/* Primary Use Case Section */}
      <section id="ai-accountability" className="py-16 px-6 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="hidden md:block relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent)]/10 to-transparent rounded-lg blur-2xl" />
              <Image
                src="/primary.png"
                alt={lang === 'en' ? 'AI System Accountability illustration' : 'Illustration de la responsabilité des systèmes IA'}
                width={500}
                height={350}
                className="rounded-lg border border-[var(--border)] relative z-10"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-6">
                {t.index.primaryUseCase.title}
              </h2>

              <p className="text-[var(--text-secondary)] mb-6">{t.index.primaryUseCase.intro}</p>

              <ul className="list-disc list-inside text-[var(--text-secondary)] mb-8 space-y-1">
                {t.index.primaryUseCase.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>

              <p className="text-lg text-[var(--accent)]">{renderMarkdown(t.index.primaryUseCase.conclusion)}</p>
            </div>
          </div>
        </div>
      </section>

      {/* What You Can Prove Section */}
      <section className="py-16 px-6 bg-[var(--bg-secondary)]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-6">
                {t.index.whatYouCanProve.title}
              </h2>

              <p className="text-[var(--text-secondary)] mb-6">{t.index.whatYouCanProve.intro}</p>

              <ul className="list-disc list-inside text-[var(--text-secondary)] mb-8 space-y-1">
                {t.index.whatYouCanProve.items.map((item, idx) => (
                  <li key={idx}>
                    <strong className="text-[var(--text-primary)]">{item.label}</strong>
                    {item.text && ` ${item.text}`}
                  </li>
                ))}
              </ul>

              <p className="text-xl font-bold text-[var(--accent)]">{renderMarkdown(t.index.whatYouCanProve.conclusion)}</p>
            </div>
            <div className="hidden md:block relative">
              <div className="absolute inset-0 bg-gradient-to-l from-[var(--accent)]/10 to-transparent rounded-lg blur-2xl" />
              <Image
                src="/registry.png"
                alt={lang === 'en' ? 'Decision registry illustration' : 'Illustration du registre de décisions'}
                width={500}
                height={350}
                className="rounded-lg border border-[var(--border)] relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How Horizon Works Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-10 text-center">
            {t.index.howItWorks.title}
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-8">
                {t.index.howItWorks.steps.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[var(--accent)] text-[var(--bg-primary)] rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-1">{step.title}</h3>
                      <p className="text-[var(--text-secondary)] text-sm">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-lg text-[var(--text-primary)] mt-8 mb-4">{renderMarkdown(t.index.howItWorks.conclusion)}</p>
              <Link href="/docs" className="text-sm text-[var(--text-muted)] hover:text-[var(--accent)] underline underline-offset-4 transition-colors">
                {t.index.contextLinks.howItWorksLink} →
              </Link>
            </div>
            <div className="hidden md:block relative">
              <div className="absolute inset-0 bg-gradient-to-l from-[var(--accent)]/10 to-transparent rounded-lg blur-2xl" />
              <Image
                src="/how.png"
                alt={lang === 'en' ? 'How Horizon works illustration' : 'Illustration du fonctionnement d\'Horizon'}
                width={500}
                height={400}
                className="rounded-lg border border-[var(--border)] relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What Horizon Replaces Section */}
      <section className="py-16 px-6 bg-[var(--bg-secondary)]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-8 text-center">
            {t.index.whatReplaces.title}
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="hidden md:block relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent)]/10 to-transparent rounded-lg blur-2xl" />
              <Image
                src="/what-replaces.png"
                alt={lang === 'en' ? 'What Horizon replaces illustration' : 'Illustration de ce que Horizon remplace'}
                width={500}
                height={350}
                className="rounded-lg border border-[var(--border)] relative z-10"
              />
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-[var(--border)]">
                    <th className="text-left py-3 px-4 text-[var(--text-muted)]">{lang === 'en' ? 'Today' : 'Aujourd\'hui'}</th>
                    <th className="text-left py-3 px-4 text-[var(--accent)]">{lang === 'en' ? 'With Horizon' : 'Avec Horizon'}</th>
                  </tr>
                </thead>
                <tbody>
                  {t.index.whatReplaces.rows.map((row, idx) => (
                    <tr key={idx} className="border-b border-[var(--border)]">
                      <td className="py-3 px-4 text-[var(--text-secondary)]">{row.today}</td>
                      <td className="py-3 px-4 text-[var(--text-primary)] font-medium">{row.horizon}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Does and Does Not Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-8 text-center">
            {t.index.doesAndDoesNot.title}
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="hidden md:block relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent)]/10 to-transparent rounded-lg blur-2xl" />
              <Image
                src="/what.png"
                alt={lang === 'en' ? 'What Horizon does and does not do' : 'Ce que Horizon fait et ne fait pas'}
                width={500}
                height={350}
                className="rounded-lg border border-[var(--border)] relative z-10"
              />
            </div>
            <div>
              <div className="space-y-6 mb-8">
                <div className="p-6 bg-[var(--bg-card)] border border-[var(--accent)] rounded-lg">
                  <p className="text-[var(--text-secondary)]">{renderMarkdown(t.index.doesAndDoesNot.does)}</p>
                </div>
                <div className="p-6 bg-[var(--bg-card)] border border-[var(--border)] rounded-lg">
                  <p className="text-[var(--text-secondary)]">{renderMarkdown(t.index.doesAndDoesNot.doesNot)}</p>
                </div>
              </div>
              <p className="text-lg text-[var(--text-primary)]">{renderMarkdown(t.index.doesAndDoesNot.conclusion)}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Expand Section */}
      <section className="py-16 px-6 bg-[var(--bg-secondary)]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-6">
            {t.index.expand.title}
          </h2>

          <p className="text-[var(--text-secondary)] mb-6">{t.index.expand.intro}</p>

          <ul className="list-disc list-inside text-[var(--text-secondary)] mb-8 space-y-1">
            {t.index.expand.items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>

          <p className="text-lg text-[var(--accent)]">{renderMarkdown(t.index.expand.conclusion)}</p>
        </div>
      </section>

      {/* Why Horizon Is Different Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-8">
            {t.index.whyDifferent.title}
          </h2>

          <p className="text-xl text-[var(--text-secondary)] mb-4">{renderMarkdown(t.index.whyDifferent.question)}</p>
          <p className="text-2xl text-[var(--accent)]">{renderMarkdown(t.index.whyDifferent.answer)}</p>
        </div>
      </section>

      {/* CTA and Final Quote Section */}
      <section className="py-20 px-6 bg-[var(--bg-secondary)] relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="max-w-3xl mx-auto text-center relative">
          <p className="text-xl text-[var(--text-primary)] mb-2">
            {renderMarkdown(t.index.cta.line1)}
          </p>
          <p className="text-xl text-[var(--accent)] mb-10">
            {renderMarkdown(t.index.cta.line2)}
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--accent)] text-[var(--bg-primary)] font-medium rounded-lg hover:bg-[var(--accent-hover)] transition-colors mb-12"
          >
            {lang === 'en' ? 'Contact Us' : 'Contactez-nous'}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>

          <div className="border-t border-[var(--border)] pt-10">
            {t.index.finalQuote.lines.map((line, idx) => (
              <p key={idx} className={`text-2xl font-bold ${idx === t.index.finalQuote.lines.length - 1 ? 'text-[var(--accent)]' : 'text-[var(--text-primary)]'}`}>
                {line}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Deep Dive Section */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-10 text-center">
            {t.index.deepDive.title}
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/foundations" className="group p-6 border border-[var(--border)] rounded-lg hover:border-[var(--accent)] transition-colors">
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent)] transition-colors">
                {t.index.deepDive.foundations.title}
              </h3>
              <p className="text-sm text-[var(--text-muted)]">
                {t.index.deepDive.foundations.description}
              </p>
            </Link>

            <Link href="/perspectives" className="group p-6 border border-[var(--border)] rounded-lg hover:border-[var(--accent)] transition-colors">
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent)] transition-colors">
                {t.index.deepDive.perspectives.title}
              </h3>
              <p className="text-sm text-[var(--text-muted)]">
                {t.index.deepDive.perspectives.description}
              </p>
            </Link>

            <Link href="/docs" className="group p-6 border border-[var(--border)] rounded-lg hover:border-[var(--accent)] transition-colors">
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent)] transition-colors">
                {t.index.deepDive.docs.title}
              </h3>
              <p className="text-sm text-[var(--text-muted)]">
                {t.index.deepDive.docs.description}
              </p>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
