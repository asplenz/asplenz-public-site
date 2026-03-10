'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useLang } from '@/lib/LangContext'
import { getContent } from '@/lib/content'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

const badgeColors: Record<string, string> = {
  blue: 'bg-[var(--accent-light)] text-[var(--accent)]',
  green: 'bg-[var(--green-light)] text-[var(--green)]',
  red: 'bg-[var(--red-light)] text-[var(--red)]',
  orange: 'bg-[var(--orange-light)] text-[var(--orange)]',
  amber: 'bg-[var(--orange-light)] text-[var(--orange)]',
}

export default function HomePage() {
  const { lang } = useLang()
  const t = getContent(lang)
  const ix = t.index as any

  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      <Header />

      {/* ── 1. HERO ── */}
      <section className="pt-28 pb-20 px-6 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] mb-6 flex items-center gap-3">
                <span className="w-8 h-px bg-[var(--accent)] inline-block" />
                {ix.hero.tag}
              </p>
              <h1 className="font-serif text-4xl md:text-5xl text-[var(--text-primary)] leading-tight mb-6">
                {ix.hero.headline}<br />
                <em>{ix.hero.headlineItalic}</em>
              </h1>
              <p className="text-lg text-[var(--text-secondary)] mb-10 leading-relaxed">
                {ix.hero.sub}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href={ix.hero.ctaPrimaryHref}
                  className="px-6 py-3 bg-[var(--accent)] text-white font-medium rounded-lg hover:bg-[var(--accent-hover)] transition-colors"
                >
                  {ix.hero.ctaPrimary}
                </Link>
                <a
                  href={ix.hero.ctaSecondaryHref}
                  className="px-6 py-3 text-[var(--accent)] font-medium hover:underline flex items-center gap-2 transition-colors"
                >
                  {ix.hero.ctaSecondary} →
                </a>
              </div>
            </div>

            {/* Right - Hero Card */}
            <div className="animate-float">
              <div className="border border-[var(--border)] rounded-xl overflow-hidden shadow-lg bg-[var(--bg-card)]">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--border)] bg-[var(--bg-secondary)]">
                  <span className="w-3 h-3 rounded-full bg-red-400" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400" />
                  <span className="w-3 h-3 rounded-full bg-green-400" />
                  <span className="ml-3 font-mono text-xs text-[var(--text-secondary)]">{ix.heroCard.title}</span>
                </div>
                <div className="p-5 space-y-3">
                  {ix.heroCard.steps.map((step: any, i: number) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 opacity-0 animate-fade-in-up"
                      style={{ animationDelay: `${i * 0.5}s`, animationFillMode: 'forwards' }}
                    >
                      <span className="text-lg shrink-0">{step.icon}</span>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-mono text-xs text-[var(--accent)] font-medium">{step.label}</span>
                          {step.badge && (
                            <span className={`text-xs px-2 py-0.5 rounded font-mono ${badgeColors[step.badgeColor] || badgeColors.blue}`}>
                              {step.badge}
                            </span>
                          )}
                        </div>
                        {step.text && (
                          <p className="text-xs text-[var(--text-secondary)] font-mono mt-0.5">{step.text}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. PROBLEM ── */}
      <section className="py-20 px-6 md:px-16 lg:px-24 bg-[var(--accent)]">
        <div className="max-w-6xl mx-auto">
          <p className="font-mono text-xs uppercase tracking-widest text-[var(--accent-light)] mb-4">
            {ix.problem.tag}
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-10 leading-tight">
            {ix.problem.title}
          </h2>
          <ul className="max-w-2xl space-y-4">
            {ix.problem.items.map((item: string, i: number) => (
              <li key={i} className="flex items-start gap-3 text-white text-base leading-relaxed">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/50 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── 3. THREE LEVELS ── */}
      <section id="how" className="py-20 px-6 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <p className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] mb-4">
            {ix.levels.tag}
          </p>
          <h2 className="font-serif text-2xl md:text-4xl text-[var(--text-primary)] mb-4 flex flex-nowrap items-center gap-x-3 md:gap-x-5">
            {ix.levels.title.replace(/\.$/, '').split('. ').map((word: string, i: number) => (
              <span key={i} className="flex items-center gap-2">
                {i > 0 && <span className="text-[var(--border)] font-sans font-light">·</span>}
                {i === 0 && (
                  <svg className="w-7 h-7 text-[var(--accent)] shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                )}
                {i === 1 && (
                  <svg className="w-7 h-7 text-[var(--accent)] shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25Z" />
                  </svg>
                )}
                {i === 2 && (
                  <svg className="w-7 h-7 text-[var(--accent)] shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                  </svg>
                )}
                {word}.
              </span>
            ))}
          </h2>
          <p className="text-[var(--text-secondary)] mb-16 max-w-2xl">{ix.levels.sub}</p>

          {/* ── Level 1: Distill ── */}
          <div className="mb-10">
            <p className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] mb-2">1 — {ix.levels.title.replace(/\.$/, '').split('. ')[0]}.</p>
            <h3 className="font-serif text-3xl text-[var(--text-primary)] mb-4">{ix.levels.level1.title}</h3>
            <p className="text-[var(--text-secondary)] mb-6 leading-relaxed max-w-2xl">{ix.levels.level1.desc}</p>
            <img src="/distill-pipeline.svg" alt="Distill pipeline" className="w-full rounded-xl border border-[var(--border)] mb-8" />
            <ul className="grid md:grid-cols-2 gap-3 mb-4">
              {ix.levels.level1.features.map((f: any, i: number) => (
                <li key={i} className="flex items-start gap-3 text-sm text-[var(--text-secondary)]">
                  <span className="text-[var(--accent)] shrink-0">✓</span>
                  {f}
                </li>
              ))}
            </ul>
            <p className="text-sm text-[var(--text-secondary)] italic mb-2">{ix.levels.level1.quote}</p>
            <p className="text-xs text-[var(--text-secondary)] italic">{ix.levels.level1.deployment}</p>
          </div>

          {/* ── Level 2: Knowledge ── */}
          <div className="mb-10 pt-8 border-t border-[var(--text-primary)]">
            <div className="mb-10">
              <p className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] mb-2">2 — {ix.levels.title.replace(/\.$/, '').split('. ')[1]}.</p>
              <h3 className="font-serif text-3xl text-[var(--text-primary)] mb-4">{ix.levels.level2.title}</h3>
              <p className="text-[var(--text-secondary)] max-w-2xl mb-6">{ix.levels.level2.desc}</p>
            </div>

            {/* 4 Concept Cards */}
            <ul className="flex flex-col gap-4 mb-6">
              {ix.levels.level2.concepts.cards.map((card: any, i: number) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] shrink-0 mt-2.5" />
                  <div className="flex-1">
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <span
                        className="text-xs font-mono font-semibold px-2 py-0.5 rounded shrink-0"
                        style={{
                          background: `var(--${card.badgeColor}-light, var(--accent-light))`,
                          color: `var(--${card.badgeColor}, var(--accent))`,
                        }}
                      >
                        {card.badge}
                      </span>
                      <h4 className="font-semibold text-[var(--text-primary)] text-sm">{card.title}</h4>
                    </div>
                    <p className="text-[var(--text-secondary)] text-sm leading-relaxed">{card.desc}</p>
                    {card.example && <p className="text-xs text-[var(--text-muted)] italic mt-1.5">{card.example}</p>}
                  </div>
                </li>
              ))}
            </ul>
            <ul className="grid md:grid-cols-2 gap-3 mb-4">
              {ix.levels.level2.features.map((f: any, i: number) => (
                <li key={i} className="flex items-start gap-3 text-sm text-[var(--text-secondary)]">
                  <span className="text-[var(--accent)] shrink-0">✓</span>
                  {f}
                </li>
              ))}
            </ul>
            <p className="text-sm text-[var(--text-secondary)] italic mb-4">{ix.levels.level2.quote}</p>

          </div>

          {/* ── Level 3: MCP ── */}
          <div className="pt-8 border-t border-[var(--text-primary)]">
            <div className="mb-10">
              <p className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] mb-2">3 — {ix.levels.title.replace(/\.$/, '').split('. ')[2]}.</p>
              <h3 className="font-serif text-3xl text-[var(--text-primary)] mb-4">{ix.levels.level3.title}</h3>
              <p className="text-[var(--text-secondary)] max-w-2xl mb-6">{ix.levels.level3.desc}</p>
            </div>

            <ul className="flex flex-col gap-3 mb-4">
              {ix.levels.level3.features.map((f: any, i: number) => (
                <li key={i} className="flex items-start gap-3 text-sm text-[var(--text-secondary)]">
                  <span className="text-[var(--accent)] shrink-0">✓</span>
                  {f}
                </li>
              ))}
            </ul>
            <p className="text-sm text-[var(--text-secondary)] italic">{ix.levels.level3.quote}</p>
          </div>
        </div>
      </section>

      {/* ── 4. USE CASES ── */}
      <section id="usecases" className="py-20 px-6 md:px-16 lg:px-24 bg-[var(--bg-secondary)]">
        <div className="max-w-6xl mx-auto">
          <p className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] mb-4">{ix.useCases.tag}</p>
          <h2 className="font-serif text-3xl md:text-4xl text-[var(--text-primary)] mb-4">{ix.useCases.title}</h2>
          <p className="text-[var(--text-secondary)] mb-12 max-w-2xl">{ix.useCases.sub}</p>
          <ul className="flex flex-col gap-4">
            {ix.useCases.items.map((item: any, i: number) => (
              <li key={i} className="flex items-start gap-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] shrink-0 mt-2.5" />
                <div className="flex-1">
                  <div className="flex items-center gap-2.5 mb-1">
                    <span className="text-lg shrink-0">{item.icon}</span>
                    <p className="font-semibold text-[var(--text-primary)] text-sm">{item.title}</p>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── 5. COMPARISON ── */}
      <section className="py-20 px-6 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <p className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] mb-4">{ix.comparison.tag}</p>
          <h2 className="font-serif text-3xl md:text-4xl text-[var(--text-primary)] mb-4">{ix.comparison.title}</h2>
          <p className="text-[var(--text-secondary)] mb-12 max-w-2xl">{ix.comparison.sub}</p>
          <div className="overflow-x-auto">
          <div className="border border-[var(--border)] rounded-xl overflow-hidden min-w-[560px]">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[var(--border)]">
                  <th className="text-left px-6 py-4 text-[var(--text-secondary)] font-normal w-1/3 bg-[var(--bg-card)]" />
                  <th className="text-left px-6 py-4 text-[var(--text-secondary)] font-medium bg-[var(--bg-card)] border-l border-[var(--border)]">
                    {ix.comparison.col1}
                  </th>
                  <th className="text-left px-6 py-4 font-semibold text-[var(--accent)] bg-[var(--accent-light)] border-l border-[var(--border)]">
                    ✦ {ix.comparison.col2}
                  </th>
                </tr>
              </thead>
              <tbody>
                {ix.comparison.rows.map((row: any, i: number) => (
                  <tr key={i} className={`border-b border-[var(--border)] last:border-0 ${i % 2 === 0 ? 'bg-[var(--bg-card)]' : 'bg-[var(--bg-primary)]'}`}>
                    <td className="px-6 py-4 font-medium text-[var(--text-primary)]">{row.criterion}</td>
                    <td className="px-6 py-4 text-[var(--text-secondary)] border-l border-[var(--border)]">{row.before}</td>
                    <td className="px-6 py-4 text-[var(--text-secondary)] border-l border-[var(--border)]" style={{ background: 'rgba(214,232,247,0.3)' }}>{row.after}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          </div>
        </div>
      </section>

      {/* ── 6. AI ACT ── */}
      <section id="aiact" className="py-20 px-6 md:px-16 lg:px-24 bg-[var(--bg-secondary)]">
        <div className="max-w-6xl mx-auto">
          <p className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] mb-4">{ix.aiAct.tag}</p>
          <h2 className="font-serif text-3xl md:text-4xl text-[var(--text-primary)] mb-4">{ix.aiAct.title}</h2>
          <p className="text-[var(--text-secondary)] mb-12 max-w-2xl">{ix.aiAct.sub}</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
            {ix.aiAct.cards.map((card: any, i: number) => (
              <div key={i} className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-6">
                <span className="text-xs font-mono font-semibold px-2.5 py-1 bg-[var(--accent-light)] text-[var(--accent)] rounded mb-4 inline-block">
                  {card.article}
                </span>
                <h3 className="font-semibold text-[var(--text-primary)] mb-2">{card.title}</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
          {ix.aiAct.cta && (
            <Link href={ix.aiAct.ctaHref} className="inline-flex items-center gap-2 text-sm text-[var(--accent)] hover:underline font-medium">
              {ix.aiAct.cta} →
            </Link>
          )}
        </div>
      </section>

      {/* ── 7. OBSERVABILITY ── */}
      <section className="py-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="border border-[var(--border)] rounded-xl p-8 bg-[var(--bg-card)]">
            <div className="flex items-start gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-mono font-semibold px-3 py-1 bg-[var(--orange-light)] text-[var(--orange)] rounded">
                    {ix.observability.tag}
                  </span>
                </div>
                <h3 className="font-serif text-2xl text-[var(--text-primary)] mb-3">{ix.observability.title}</h3>
                <p className="text-[var(--text-secondary)] italic">{ix.observability.sub}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. PRICING ── */}
      <section id="pricing" className="py-20 px-6 md:px-16 lg:px-24 bg-[var(--bg-secondary)]">
        <div className="max-w-6xl mx-auto">
          <p className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] mb-4">{ix.pricing.tag}</p>
          <h2 className="font-serif text-3xl md:text-4xl text-[var(--text-primary)] mb-4">{ix.pricing.title}</h2>
          <p className="text-[var(--text-secondary)] mb-12 max-w-2xl">{ix.pricing.sub}</p>
          <div className="grid md:grid-cols-3 gap-6">
            {ix.pricing.tiers.map((tier: any, i: number) => (
              <div
                key={i}
                className={`rounded-xl border p-7 flex flex-col ${tier.featured ? 'bg-[var(--accent)] border-[var(--accent)]' : 'bg-[var(--bg-card)] border-[var(--border)]'}`}
              >
                {tier.featured && (
                  <span className="text-xs font-mono font-semibold px-2.5 py-1 bg-white/20 text-white rounded mb-4 self-start">
                    {lang === 'fr' ? 'Recommandé' : 'Recommended'}
                  </span>
                )}
                <h3 className={`font-semibold text-lg mb-1 ${tier.featured ? 'text-white' : 'text-[var(--text-primary)]'}`}>{tier.name}</h3>
                <p className={`text-2xl font-bold mb-1 ${tier.featured ? 'text-white' : 'text-[var(--text-primary)]'}`}>{tier.price}</p>
                <p className={`text-sm mb-6 ${tier.featured ? 'text-white/70' : 'text-[var(--text-secondary)]'}`}>{tier.desc}</p>
                {tier.base && (
                  <p className={`text-xs font-medium mb-3 ${tier.featured ? 'text-white/60' : 'text-[var(--text-secondary)]'}`}>{tier.base}</p>
                )}
                <ul className="space-y-2 mb-8 flex-1">
                  {tier.features.map((f: string, fi: number) => (
                    <li key={fi} className={`flex items-start gap-2 text-sm ${tier.featured ? 'text-white/90' : 'text-[var(--text-secondary)]'}`}>
                      <span className={`mt-0.5 shrink-0 ${tier.featured ? 'text-white' : 'text-[var(--accent)]'}`}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={tier.ctaHref}
                  className={`px-5 py-3 rounded-lg font-medium text-sm text-center transition-colors ${tier.featured ? 'bg-white text-[var(--accent)] hover:bg-white/90' : 'border border-[var(--border)] text-[var(--text-primary)] hover:border-[var(--accent)] hover:text-[var(--accent)]'}`}
                >
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. FINAL CTA ── */}
      <section className="py-20 px-6 md:px-16 lg:px-24">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] mb-6">{ix.ctaFinal.tag}</p>
          <h2 className="font-serif text-3xl md:text-4xl text-[var(--text-primary)] mb-4">{ix.ctaFinal.title}</h2>
          <p className="text-[var(--text-secondary)] mb-10 text-base leading-relaxed">{ix.ctaFinal.body}</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href={ix.ctaFinal.primaryHref}
              className="px-7 py-3 bg-[var(--accent)] text-white font-medium rounded-lg hover:bg-[var(--accent-hover)] transition-colors"
            >
              {ix.ctaFinal.primary}
            </Link>
            <Link
              href={ix.ctaFinal.secondaryHref}
              className="px-7 py-3 border border-[var(--border)] text-[var(--text-primary)] font-medium rounded-lg hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
            >
              {ix.ctaFinal.secondary} →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
