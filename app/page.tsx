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

  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      <Header />

      {/* Hero */}
      <section className="pt-40 pb-20 px-6 md:px-32 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-[3fr_2fr] gap-6 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] leading-tight mb-4 opacity-0 animate-fade-in-up whitespace-nowrap">
                {t.index.hero.subtitle.split('\n').map((line, i) => (
                  <span key={i}>{i > 0 && <br />}{line}</span>
                ))}
              </h1>
              <p className="text-xl text-[var(--accent)] mb-2 opacity-0 animate-fade-in-up animate-delay-100">
                {t.index.hero.description}
              </p>
              <p className="text-[var(--text-secondary)] mb-6 opacity-0 animate-fade-in-up animate-delay-200">
                {t.index.hero.hook}
              </p>
              <div className="flex flex-wrap gap-3 mb-10 opacity-0 animate-fade-in-up animate-delay-200">
                {t.index.hero.tagline.split('.').filter(Boolean).map((word, i) => (
                  <span key={i} className="px-4 py-1.5 rounded-full border border-[var(--accent)] text-[var(--accent)] text-sm font-medium tracking-wide">
                    {word.trim()}
                  </span>
                ))}
              </div>
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

      {/* The reality organizations face */}
      <section className="py-16 px-6 md:px-32 bg-[var(--bg-secondary)]">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-xl">
          <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-10">
            {t.index.reality.title}
          </h2>
          <div>
              <p className="text-[var(--text-primary)] font-bold mb-6">{t.index.reality.lines[0]}</p>
              <div className="space-y-3 mb-8">
                {t.index.reality.lines.slice(1).map((line, idx) => {
                  const icons = [
                    <svg key="user" className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>,
                    <svg key="cog" className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
                    <svg key="cpu" className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 9h6v6H9V9z" /></svg>,
                    <svg key="shield" className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z" /></svg>,
                  ]
                  return (
                    <div key={idx} className="flex items-center gap-3">
                      <span className={idx === 3 ? 'text-[var(--accent)]' : 'text-[var(--text-muted)]'}>{icons[idx]}</span>
                      <span className={idx === 3 ? 'text-[var(--text-primary)] font-medium' : 'text-[var(--text-secondary)]'}>{line}</span>
                    </div>
                  )
                })}
              </div>
              <p className="text-[var(--text-primary)] font-bold mb-4">{t.index.reality.reliance}</p>
              <ul className="list-disc list-inside text-[var(--text-secondary)] mb-8 space-y-1">
                {t.index.reality.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <p className="text-[var(--text-primary)] font-medium">{t.index.reality.conclusion1}</p>
              <p className="text-[var(--accent)] font-medium">{t.index.reality.conclusion2}</p>
          </div>
          </div>
        </div>
      </section>

      {/* What breaks when proof is missing */}
      <section className="py-16 px-6 md:px-32">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-8">
                {t.index.breaks.title}
              </h2>
              <ul className="list-disc list-inside text-[var(--text-secondary)] mb-6 space-y-1">
                {t.index.breaks.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <p className="text-[var(--accent)] font-medium">{t.index.breaks.conclusion}</p>
            </div>
            <div className="hidden md:block relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent)]/20 to-transparent rounded-lg blur-3xl" />
              <Image
                src="/proof-missing.png"
                alt="What breaks when proof is missing"
                width={600}
                height={400}
                className="rounded-lg border border-[var(--border)] relative z-10 w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What Horizon does */}
      <section className="py-16 px-6 md:px-32 bg-[var(--bg-secondary)]">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-xl">
            <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-8">
              {t.index.whatDoes.title}
            </h2>
            <div className="mb-6 space-y-1">
              {t.index.whatDoes.lines.map((line, idx) => (
                <p key={idx} className={idx === 0 ? 'text-[var(--text-primary)] font-medium' : 'text-[var(--text-secondary)]'}>{line}</p>
              ))}
            </div>
            <p className="text-[var(--text-secondary)] mb-4">{t.index.whatDoes.listIntro}</p>
            <ul className="list-disc list-inside text-[var(--text-secondary)] mb-8 space-y-1">
              {t.index.whatDoes.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <p className="text-[var(--text-primary)] font-medium">{t.index.whatDoes.conclusion}</p>
          </div>
        </div>
      </section>

      {/* What counts as a decision */}
      <section className="py-16 px-6 md:px-32">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-xl">
            <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-8">
              {t.index.whatCounts.title}
            </h2>
            <p className="text-[var(--text-secondary)] mb-4">{t.index.whatCounts.intro}</p>
            <p className="text-[var(--text-secondary)] mb-4">{t.index.whatCounts.examplesIntro}</p>
            <ul className="list-disc list-inside text-[var(--text-secondary)] mb-6 space-y-1">
              {t.index.whatCounts.examples.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <p className="text-[var(--text-secondary)] mb-4">{t.index.whatCounts.sourcesIntro}</p>
            <ul className="list-disc list-inside text-[var(--text-secondary)] mb-8 space-y-1">
              {t.index.whatCounts.sources.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <p className="text-[var(--text-primary)] font-medium">{t.index.whatCounts.conclusion}</p>
          </div>
        </div>
      </section>

      {/* Decisions are not judged. They are proven. */}
      <section className="py-16 px-6 md:px-32 bg-[var(--bg-secondary)]">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-xl">
            <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-8">
              {t.index.notJudged.title}
            </h2>
            <div className="mb-6 space-y-1">
              {t.index.notJudged.lines.map((line, idx) => (
                <p key={idx} className="text-[var(--text-secondary)]">{line}</p>
              ))}
            </div>
            <p className="text-[var(--text-secondary)] mb-4">{t.index.notJudged.preservesIntro}</p>
            <ul className="list-disc list-inside text-[var(--text-secondary)] mb-8 space-y-1">
              {t.index.notJudged.preserves.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <p className="text-[var(--text-primary)] font-medium">{t.index.notJudged.conclusion}</p>
          </div>
        </div>
      </section>

      {/* Built for AI accountability */}
      <section className="py-16 px-6 md:px-32">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-8">
                {t.index.aiAccountability.title}
              </h2>
              <p className="text-[var(--text-secondary)] mb-4">{t.index.aiAccountability.intro}</p>
              <ul className="list-disc list-inside text-[var(--text-secondary)] mb-6 space-y-1">
                {t.index.aiAccountability.risks.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <p className="text-[var(--text-secondary)] mb-4">{t.index.aiAccountability.proofIntro}</p>
              <ul className="list-disc list-inside text-[var(--text-secondary)] mb-8 space-y-1">
                {t.index.aiAccountability.proofs.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <p className="text-[var(--text-primary)] font-medium">{t.index.aiAccountability.conclusion}</p>
            </div>
            <div className="hidden md:block relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent)]/20 to-transparent rounded-lg blur-3xl" />
              <Image
                src="/ai-accountability.png"
                alt="AI Accountability"
                width={600}
                height={400}
                className="rounded-lg border border-[var(--border)] relative z-10 w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Incident-ready by design */}
      <section className="py-16 px-6 md:px-32 bg-[var(--bg-secondary)]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-8">
                {t.index.incidentReady.title}
              </h2>
          <p className="text-[var(--text-secondary)] mb-4">{t.index.incidentReady.intro}</p>
          <ul className="list-disc list-inside text-[var(--text-secondary)] mb-6 space-y-1">
            {t.index.incidentReady.phases.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          <p className="text-[var(--text-secondary)] mb-4">{t.index.incidentReady.linksIntro}</p>
          <ul className="list-disc list-inside text-[var(--text-secondary)] mb-8 space-y-1">
            {t.index.incidentReady.preserves.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          <p className="text-[var(--text-primary)] font-medium">{t.index.incidentReady.conclusion}</p>
            </div>
            <div className="hidden md:block relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent)]/20 to-transparent rounded-lg blur-3xl" />
              <Image
                src="/incident.png"
                alt="Incident-ready by design"
                width={600}
                height={400}
                className="rounded-lg border border-[var(--border)] relative z-10 w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What Horizon replaces */}
      <section className="py-16 px-6 md:px-32">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-xl">
            <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-8">
              {t.index.replaces.title}
          </h2>
          <ul className="text-[var(--text-secondary)] mb-8 space-y-2">
            {t.index.replaces.rows.map((row, idx) => (
              <li key={idx}>
                <span className="text-[var(--text-muted)]">{row.before}</span>
                <span className="mx-2">→</span>
                <span className="text-[var(--text-primary)] font-medium">{row.after}</span>
              </li>
            ))}
          </ul>
          <div className="space-y-1">
            {t.index.replaces.conclusions.map((line, idx) => (
              <p key={idx} className="text-[var(--accent)] font-medium">{line}</p>
            ))}
          </div>
          </div>
        </div>
      </section>

      {/* Who Horizon is for */}
      <section className="py-16 px-6 md:px-32 bg-[var(--bg-secondary)]">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-xl">
            <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-8">
              {t.index.whoFor.title}
          </h2>
          <div className="space-y-4">
            {t.index.whoFor.personas.map((persona, idx) => (
              <div key={idx}>
                <span className="text-[var(--text-primary)] font-semibold">{persona.role}</span>
                <span className="text-[var(--text-muted)]">: </span>
                <span className="text-[var(--text-secondary)]">{persona.description}</span>
              </div>
            ))}
          </div>
          </div>
        </div>
      </section>

      {/* What Horizon is not */}
      <section className="py-16 px-6 md:px-32">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-xl">
            <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-8">
              {t.index.whatIsNot.title}
            </h2>
            <ul className="list-disc list-inside text-[var(--text-secondary)] mb-6 space-y-1">
              {t.index.whatIsNot.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <p className="text-[var(--text-primary)] font-medium">{t.index.whatIsNot.conclusion}</p>
          </div>
        </div>
      </section>

      {/* One simple question */}
      <section className="py-20 px-6 md:px-32 bg-[var(--bg-secondary)]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-6">
                {t.index.simpleQuestion.title}
              </h2>
              <p className="text-xl text-[var(--accent)] mb-4">{t.index.simpleQuestion.question}</p>
              <p className="text-[var(--text-secondary)] mb-10">{t.index.simpleQuestion.answer}</p>
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
            <p key={idx} className={`text-2xl font-bold ${idx === t.index.finalQuote.lines.length - 1 ? 'text-[var(--accent)]' : 'text-[var(--text-primary)]'}`}>
              {line}
            </p>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
