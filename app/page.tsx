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
              <p className="text-lg text-[var(--text-muted)] mb-10 leading-relaxed">
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
                  <span className="ml-3 font-mono text-xs text-[var(--text-muted)]">{ix.heroCard.title}</span>
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
                          <p className="text-xs text-[var(--text-muted)] font-mono mt-0.5">{step.text}</p>
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
      <section id="how" className="py-20 px-6 md:px-16 lg:px-24 bg-[var(--accent)]">
        <div className="max-w-6xl mx-auto">
          <p className="font-mono text-xs uppercase tracking-widest text-[var(--accent-light)] mb-4">
            {ix.problem.tag}
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4 leading-tight">
            {ix.problem.title}
          </h2>
          <p className="text-white/70 mb-12 max-w-2xl">
            {ix.problem.sub}
          </p>
          <div className="grid md:grid-cols-2 gap-0 border border-white/20 rounded-xl overflow-hidden">
            {ix.problem.cells.map((cell: any, i: number) => (
              <div
                key={i}
                className={`p-8 ${i % 2 === 0 ? 'md:border-r border-white/20' : ''} ${i < 2 ? 'border-b border-white/20' : ''}`}
              >
                <p className="text-white/60 text-sm mb-3 font-medium">{cell.q}</p>
                <p className="text-white leading-relaxed">{cell.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. HOW IT WORKS ── */}
      <section className="py-20 px-6 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <p className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] mb-4">
            {ix.howItWorks.tag}
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-[var(--text-primary)] mb-4">{ix.howItWorks.title}</h2>
          <p className="text-[var(--text-muted)] mb-14 max-w-2xl">{ix.howItWorks.sub}</p>

          {/* 4 Concept Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
            {ix.howItWorks.concepts.cards.map((card: any, i: number) => (
              <div key={i} className="border border-[var(--border)] rounded-xl p-6 bg-[var(--bg-card)] flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-4xl font-serif font-bold opacity-10 text-[var(--text-primary)]">{card.n}</span>
                  <span
                    className="text-xs font-mono font-semibold px-2.5 py-1 rounded"
                    style={{
                      background: `var(--${card.badgeColor}-light, var(--accent-light))`,
                      color: `var(--${card.badgeColor}, var(--accent))`,
                    }}
                  >
                    {card.badge}
                  </span>
                </div>
                <h3 className="font-semibold text-[var(--text-primary)] mb-2">{card.title}</h3>
                <p className="text-[var(--text-muted)] text-sm leading-relaxed flex-1">{card.desc}</p>
                <p className="text-xs text-[var(--text-muted)] mt-4 italic border-t border-[var(--border)] pt-4">{card.example}</p>
              </div>
            ))}
          </div>

          {/* Scopes & Namespaces */}
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
            <div>
              <span className="text-xs font-mono font-semibold px-3 py-1 bg-[var(--accent-light)] text-[var(--accent)] rounded mb-4 inline-block">
                {ix.howItWorks.scopes.tag}
              </span>
              <h3 className="font-serif text-2xl text-[var(--text-primary)] mb-4">{ix.howItWorks.scopes.title}</h3>
              <p className="text-[var(--text-muted)] mb-6 leading-relaxed">{ix.howItWorks.scopes.desc}</p>
              <ul className="space-y-3">
                {ix.howItWorks.scopes.benefits.map((b: string, i: number) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[var(--text-secondary)]">
                    <span className="text-[var(--accent)] mt-0.5 shrink-0">✓</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <pre className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-xl p-6 font-mono text-sm text-[var(--text-secondary)] overflow-x-auto whitespace-pre leading-relaxed">
                {ix.howItWorks.scopes.code}
              </pre>
            </div>
          </div>

          {/* Dependency Graph */}
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
            <div>
              <span className="text-xs font-mono font-semibold px-3 py-1 bg-[var(--accent-light)] text-[var(--accent)] rounded mb-4 inline-block">
                {ix.howItWorks.graphSection.tag}
              </span>
              <h3 className="font-serif text-2xl text-[var(--text-primary)] mb-4">{ix.howItWorks.graphSection.title}</h3>
              <p className="text-[var(--text-muted)] mb-6 leading-relaxed">{ix.howItWorks.graphSection.desc}</p>
              <div className="space-y-3">
                {ix.howItWorks.graphSection.relations.map((rel: any, i: number) => (
                  <div key={i} className="flex items-start gap-3 text-sm">
                    <code className="text-[var(--accent)] font-mono shrink-0">{rel.from}</code>
                    <span className="text-xs font-mono px-2 py-0.5 bg-[var(--bg-secondary)] border border-[var(--border)] rounded text-[var(--text-muted)] shrink-0">{rel.rel}</span>
                    <span className="text-[var(--text-muted)]">{rel.to}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <Image
                src="/knowledge-graph-demo.svg"
                alt="Knowledge dependency graph"
                width={700}
                height={420}
                className="w-full rounded-xl border border-[var(--border)]"
              />
            </div>
          </div>

          {/* Flow diagram */}
          <div className="border border-[var(--border)] rounded-xl p-8 bg-[var(--bg-card)] overflow-x-auto">
            <div className="flex items-center min-w-max mx-auto w-fit">
              {ix.howItWorks.flow.nodes.map((node: any, i: number) => (
                <div key={i} className="flex items-center">
                  <div className={`flex flex-col items-center text-center w-28 ${i === 1 ? 'px-2 py-3 border-2 border-[var(--accent)] rounded-xl border-opacity-30' : ''}`}>
                    <span className="text-2xl mb-2">{node.icon}</span>
                    <p className={`text-xs font-semibold ${i === 1 ? 'text-[var(--accent)]' : 'text-[var(--text-primary)]'}`}>{node.label}</p>
                    <p className="text-xs text-[var(--text-muted)] mt-0.5">{node.sub}</p>
                  </div>
                  {i < ix.howItWorks.flow.nodes.length - 1 && (
                    <div className="flex flex-col items-center mx-3">
                      <span className="text-xs text-[var(--text-muted)] mb-1 font-mono">{ix.howItWorks.flow.arrows[i]}</span>
                      <span className="text-[var(--border)] text-xl">→</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. USE CASES ── */}
      <section id="usecases" className="py-20 px-6 md:px-16 lg:px-24 bg-[var(--bg-secondary)]">
        <div className="max-w-6xl mx-auto">
          <p className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] mb-4">{ix.useCases.tag}</p>
          <h2 className="font-serif text-3xl md:text-4xl text-[var(--text-primary)] mb-4">{ix.useCases.title}</h2>
          <p className="text-[var(--text-muted)] mb-12 max-w-2xl">{ix.useCases.sub}</p>
          <div className="grid md:grid-cols-2 gap-5">
            {ix.useCases.items.map((item: any, i: number) => (
              <div key={i} className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <p className="text-xs text-[var(--text-muted)] font-mono">{item.type}</p>
                    <h3 className="font-semibold text-[var(--text-primary)]">{item.title}</h3>
                  </div>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. COMPARISON ── */}
      <section className="py-20 px-6 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <p className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] mb-4">{ix.comparison.tag}</p>
          <h2 className="font-serif text-3xl md:text-4xl text-[var(--text-primary)] mb-4">{ix.comparison.title}</h2>
          <p className="text-[var(--text-muted)] mb-12 max-w-2xl">{ix.comparison.sub}</p>
          <div className="border border-[var(--border)] rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[var(--border)]">
                  <th className="text-left px-6 py-4 text-[var(--text-muted)] font-normal w-1/3 bg-[var(--bg-card)]" />
                  <th className="text-left px-6 py-4 text-[var(--text-muted)] font-medium bg-[var(--bg-card)] border-l border-[var(--border)]">
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
                    <td className="px-6 py-4 text-[var(--text-muted)] border-l border-[var(--border)]">{row.before}</td>
                    <td className="px-6 py-4 text-[var(--text-secondary)] border-l border-[var(--border)]" style={{ background: 'rgba(214,232,247,0.3)' }}>{row.after}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── 6. AI ACT ── */}
      <section id="aiact" className="py-20 px-6 md:px-16 lg:px-24 bg-[var(--bg-secondary)]">
        <div className="max-w-6xl mx-auto">
          <p className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] mb-4">{ix.aiAct.tag}</p>
          <h2 className="font-serif text-3xl md:text-4xl text-[var(--text-primary)] mb-4">{ix.aiAct.title}</h2>
          <p className="text-[var(--text-muted)] mb-12 max-w-2xl">{ix.aiAct.sub}</p>
          <div className="grid md:grid-cols-2 gap-5">
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
        </div>
      </section>

      {/* ── 7. INTEGRATIONS ── */}
      <section className="py-20 px-6 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <p className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] mb-4">{ix.integrations.tag}</p>
          <h2 className="font-serif text-3xl md:text-4xl text-[var(--text-primary)] mb-4">{ix.integrations.title}</h2>
          <p className="text-[var(--text-muted)] mb-12 max-w-2xl">{ix.integrations.sub}</p>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-3">
              {ix.integrations.items.map((item: any, i: number) => (
                <div
                  key={i}
                  className={`flex items-center gap-4 p-4 rounded-xl border ${i === 0 ? 'bg-[var(--accent-light)] border-[var(--accent-mid)]' : 'bg-[var(--bg-card)] border-[var(--border)]'}`}
                >
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <p className={`font-semibold ${i === 0 ? 'text-[var(--accent)]' : 'text-[var(--text-primary)]'}`}>{item.name}</p>
                    <p className="text-sm text-[var(--text-muted)]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <pre
                className="rounded-xl p-6 font-mono text-sm overflow-x-auto whitespace-pre leading-relaxed text-green-300"
                style={{ background: '#1A1A2E' }}
              >
                {ix.integrations.code}
              </pre>
            </div>
          </div>

          {/* MCP Flow */}
          <div className="mt-12">
            <Image
              src="/knowledge-mcp-flow-simple.svg"
              alt="MCP flow: Agent → Knowledge → verdict"
              width={1200}
              height={500}
              className="w-full rounded-xl border border-[var(--border)]"
            />
          </div>
        </div>
      </section>

      {/* ── 8. PRICING ── */}
      <section id="pricing" className="py-20 px-6 md:px-16 lg:px-24 bg-[var(--bg-secondary)]">
        <div className="max-w-6xl mx-auto">
          <p className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] mb-4">{ix.pricing.tag}</p>
          <h2 className="font-serif text-3xl md:text-4xl text-[var(--text-primary)] mb-4">{ix.pricing.title}</h2>
          <p className="text-[var(--text-muted)] mb-12 max-w-2xl">{ix.pricing.sub}</p>
          <div className="grid md:grid-cols-3 gap-6">
            {ix.pricing.tiers.map((tier: any, i: number) => (
              <div
                key={i}
                className={`rounded-xl border p-7 flex flex-col ${tier.featured ? 'bg-[var(--accent)] border-[var(--accent)]' : 'bg-[var(--bg-card)] border-[var(--border)]'}`}
              >
                {tier.featured && (
                  <span className="text-xs font-mono font-semibold px-2.5 py-1 bg-white/20 text-white rounded mb-4 self-start">
                    Recommandé
                  </span>
                )}
                <h3 className={`font-semibold text-lg mb-1 ${tier.featured ? 'text-white' : 'text-[var(--text-primary)]'}`}>{tier.name}</h3>
                <p className={`text-2xl font-bold mb-1 ${tier.featured ? 'text-white' : 'text-[var(--text-primary)]'}`}>{tier.price}</p>
                <p className={`text-sm mb-6 ${tier.featured ? 'text-white/70' : 'text-[var(--text-muted)]'}`}>{tier.desc}</p>
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
          <p className="text-[var(--text-muted)] mb-10">{ix.ctaFinal.body}</p>
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
