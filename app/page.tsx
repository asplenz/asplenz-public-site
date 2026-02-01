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

  // Helper to render markdown-style bold text and code
  const renderMarkdown = (text: string) => {
    return text.split(/(\*\*[^*]+\*\*|`[^`]+`)/).map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i} className="text-[var(--text-primary)]">{part.slice(2, -2)}</strong>
      }
      if (part.startsWith('`') && part.endsWith('`')) {
        return <code key={i} className="px-1.5 py-0.5 bg-[var(--bg-card)] border border-[var(--border)] rounded text-[var(--accent)] text-sm font-mono">{part.slice(1, -1)}</code>
      }
      return part
    })
  }

  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      <Header />

      {/* Hero Section */}
      <section className="pt-28 pb-6 px-6 relative overflow-hidden">
        {/* Grid pattern background */}
        <div className="absolute inset-0 grid-pattern opacity-30" />

        <div className="max-w-6xl mx-auto relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] leading-tight mb-6 opacity-0 animate-fade-in-up">
                {t.index.hero.title}
              </h1>
              <p className="text-xl text-[var(--text-secondary)] mb-8 opacity-0 animate-fade-in-up animate-delay-100">
                {t.index.hero.tagline}
              </p>
              <div className="flex flex-wrap gap-4 opacity-0 animate-fade-in-up animate-delay-200">
                <Link
                  href="/foundations"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--accent)] text-[var(--bg-primary)] font-medium rounded-lg hover:bg-[var(--accent-hover)] transition-colors"
                >
                  {t.index.hero.cta1}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
                <Link
                  href="/docs"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--border-light)] text-[var(--text-secondary)] font-medium rounded-lg hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
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

      {/* Reality Section */}
      <section className="pt-8 pb-12 px-6 bg-[var(--bg-secondary)]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-6">
                {t.index.reality.title}
              </h2>
              <p className="text-lg text-[var(--text-secondary)] mb-6">
                {renderMarkdown(t.index.reality.content)}
              </p>
              <div className="p-6 bg-[var(--bg-card)] border border-[var(--border)] rounded-lg">
                <p className="text-[var(--accent)] font-medium">
                  {lang === 'en' ? 'The Risk:' : 'Le risque :'} <span className="text-[var(--text-secondary)]">{t.index.reality.risk}</span>
                </p>
              </div>
            </div>
            <div className="hidden md:block relative">
              <div className="absolute inset-0 bg-gradient-to-l from-[var(--accent)]/10 to-transparent rounded-lg blur-2xl" />
              <Image
                src="/reality.png"
                alt={lang === 'en' ? 'Fragmented decisions illustration' : 'Illustration des décisions fragmentées'}
                width={500}
                height={350}
                className="rounded-lg border border-[var(--border)] relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Paradigm Shift */}
      <section className="py-10 px-6">
        <div className="max-w-3xl mx-auto">
          <blockquote className="border-l-4 border-[var(--accent)] pl-6 py-4">
            <p className="text-2xl font-semibold text-[var(--accent)] mb-4">
              {t.index.paradigm.intro}
            </p>
            <p className="text-lg text-[var(--text-secondary)]">
              {t.index.paradigm.content}
            </p>
          </blockquote>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="use-cases" className="pt-8 pb-12 px-6 bg-[var(--bg-secondary)] scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-8 text-center">
            {t.index.useCases.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="grid gap-4">
                {t.index.useCases.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-6 bg-[var(--bg-card)] border border-[var(--border)] rounded-lg card-hover"
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <span className="text-2xl">{item.icon}</span>
                      <div>
                        <h3 className="text-lg font-bold text-[var(--text-primary)]">
                          {item.title}
                        </h3>
                        <p className="text-[var(--text-muted)] text-sm italic">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                      <div>
                        <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-1">
                          {lang === 'en' ? 'The Challenge' : 'Le défi'}
                        </p>
                        <p className="text-[var(--text-secondary)] text-sm">
                          {item.challenge}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-[var(--accent)] uppercase tracking-wider mb-1">
                          {lang === 'en' ? 'The Horizon Value' : 'L\'apport d\'Horizon'}
                        </p>
                        <p className="text-[var(--text-secondary)] text-sm">
                          {renderMarkdown(item.value)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden md:flex items-start justify-center">
              <Image
                src="/infra.png"
                alt={lang === 'en' ? 'Factual infrastructure' : 'Infrastructure factuelle'}
                width={350}
                height={500}
                className="rounded-lg border border-[var(--border)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="pt-8 pb-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-8 text-center">
            {t.index.pillars.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="hidden md:flex items-start justify-center">
              <Image
                src="/pillars.png"
                alt={lang === 'en' ? 'Pillars of Horizon' : 'Piliers d\'Horizon'}
                width={350}
                height={500}
                className="rounded-lg border border-[var(--border)]"
              />
            </div>
            <div className="md:col-span-2">
              <div className="grid md:grid-cols-2 gap-4">
                {t.index.pillars.items.map((pillar, idx) => (
                  <div
                    key={idx}
                    className="p-5 bg-[var(--bg-card)] border border-[var(--border)] rounded-lg card-hover"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-2 h-2 bg-[var(--accent)] rounded-full animate-pulse-glow" />
                      <h3 className="text-base font-semibold text-[var(--text-primary)]">
                        {pillar.title}
                      </h3>
                    </div>
                    <p className="text-[var(--text-secondary)] text-sm">
                      {renderMarkdown(pillar.description)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote & Closing */}
      <section className="py-20 px-6 bg-[var(--bg-secondary)] relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="max-w-3xl mx-auto text-center relative">
          <p className="text-3xl md:text-4xl font-bold text-[var(--accent)] mb-8">
            {t.index.quote}
          </p>
          <p className="text-xl text-[var(--text-secondary)] mb-12">
            {t.index.closing}
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--accent)] text-[var(--bg-primary)] font-medium rounded-lg hover:bg-[var(--accent-hover)] transition-colors"
            >
              {t.index.ctas.briefing}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
            <Link
              href="/docs/compliance/auditor-guide"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--border-light)] text-[var(--text-secondary)] font-medium rounded-lg hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
            >
              {t.index.ctas.verification}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
