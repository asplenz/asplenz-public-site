'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useLang } from '@/lib/LangContext'
import { getContent } from '@/lib/content'
import Header from './components/Header'
import Footer from './components/Footer'

export default function Home() {
  const { lang } = useLang()
  const t = getContent(lang)
  const ix = t.index as any

  const renderInline = (text: string) => {
    return text.split(/(\*\*[^*]+\*\*|`[^`]+`)/).map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <span key={i} className="font-semibold text-[var(--text-primary)]">{part.slice(2, -2)}</span>
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
              {ix.hero.headline}
            </h1>
            <p className="text-lg text-[var(--text-secondary)] mb-8 opacity-0 animate-fade-in-up animate-delay-100">
              {ix.hero.description}
            </p>
            <div className="flex flex-wrap gap-4 opacity-0 animate-fade-in-up animate-delay-300">
              <Link
                href={ix.hero.ctaPrimaryHref}
                className="px-8 py-4 bg-[var(--accent)] text-[var(--bg-primary)] font-medium rounded-lg hover:bg-[var(--accent-hover)] transition-colors"
              >
                {ix.hero.ctaPrimary}
              </Link>
              <Link
                href={ix.hero.ctaSecondaryHref}
                className="px-8 py-4 border border-[var(--accent)] text-[var(--accent)] font-medium rounded-lg hover:bg-[var(--accent)]/10 transition-colors"
              >
                {ix.hero.ctaSecondary}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. The Shift */}
      <section className="py-16 px-6 md:px-32 bg-[var(--bg-secondary)]">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl">
            <h2 className="text-[28px] font-semibold text-[var(--text-primary)] mb-6">
              {ix.shift.title}
            </h2>
            <p className="text-[var(--text-secondary)] mb-4">{ix.shift.intro}</p>
            <p className="text-[var(--text-secondary)] mb-6">{ix.shift.intro2}</p>
            <p className="text-[var(--text-primary)] font-semibold">{ix.shift.conclusion}</p>
          </div>
        </div>
      </section>

      {/* 3. Knowledge */}
      <section className="py-16 px-6 md:px-32">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl">
            <h2 className="text-[28px] font-semibold text-[var(--text-primary)] mb-6">
              {ix.knowledge.title}
            </h2>
            <p className="text-[var(--text-secondary)] mb-6">{ix.knowledge.intro}</p>
            <div className="space-y-3 mb-8">
              {ix.knowledge.entities.map((entity: any, i: number) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2 flex-shrink-0" />
                  <span className="text-[var(--text-secondary)] text-sm">
                    <span className="font-semibold text-[var(--text-primary)]">{entity.name}</span> {entity.description}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-[var(--text-secondary)] mb-4">{renderInline(ix.knowledge.after1)}</p>
            <p className="text-[var(--text-secondary)]">{ix.knowledge.after2}</p>
          </div>
        </div>
      </section>

      {/* 4. MCP-native */}
      <section className="py-16 px-6 md:px-32 bg-[var(--bg-secondary)]">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl">
            <h2 className="text-[28px] font-semibold text-[var(--text-primary)] mb-6">
              {ix.mcpNative.title}
            </h2>
            <p className="text-[var(--text-secondary)] mb-4">{ix.mcpNative.body}</p>
            <p className="text-[var(--text-secondary)] mb-6">{ix.mcpNative.body2}</p>
            <p className="text-[var(--text-secondary)]">{renderInline(ix.mcpNative.examples)}</p>
          </div>
          <div className="mt-10">
            <Image
              src="/knowledge-mcp-flow-simple.svg"
              alt="MCP flow: Agent → Knowledge → verdict"
              width={1200}
              height={500}
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* 5. Scope and resolution */}
      <section className="py-16 px-6 md:px-32">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl">
            <h2 className="text-[28px] font-semibold text-[var(--text-primary)] mb-6">
              {ix.scopeResolution.title}
            </h2>
            <p className="text-[var(--text-secondary)] mb-6">{ix.scopeResolution.intro}</p>
            <pre className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-lg p-6 font-mono text-sm text-[var(--text-secondary)] overflow-x-auto mb-6 whitespace-pre">
              {ix.scopeResolution.code}
            </pre>
            <p className="text-[var(--text-secondary)] mb-4">{renderInline(ix.scopeResolution.after)}</p>
            <p className="text-[var(--text-primary)] font-semibold text-sm">{ix.scopeResolution.closing}</p>
          </div>
        </div>
      </section>

      {/* 6. What it looks like */}
      <section className="py-16 px-6 md:px-32 bg-[var(--bg-secondary)]">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl">
            <h2 className="text-[28px] font-semibold text-[var(--text-primary)] mb-8">
              {ix.whatItLooksLike.title}
            </h2>
            <div className="space-y-10">
              {ix.whatItLooksLike.examples.map((example: any, ei: number) => (
                <div key={ei}>
                  <p className="text-[var(--text-secondary)] mb-4">{example.intro}</p>
                  <div className="border border-[var(--border)] rounded-xl overflow-hidden bg-[var(--bg-primary)]">
                    <div className="border-b border-[var(--border)] px-5 py-3">
                      <p className="text-sm font-semibold text-[var(--text-primary)]">{example.header}</p>
                      <p className="text-xs text-[var(--text-muted)] mt-0.5">{example.what}</p>
                    </div>
                    <div className="p-5">
                      {example.decisionsTitle && (
                        <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wide mb-3">{example.decisionsTitle}</p>
                      )}
                      <div className="space-y-2">
                        {example.decisions.map((d: any, di: number) => (
                          <div key={di} className="bg-[var(--bg-secondary)] rounded-lg p-4 border border-[var(--border)] flex items-start gap-3">
                            <span className="text-xs font-bold text-[var(--accent)] w-5 shrink-0 pt-0.5">{d.n}.</span>
                            <div className="min-w-0">
                              <p className="text-sm font-medium text-[var(--text-primary)] mb-1">{d.title}</p>
                              <p className="text-xs text-[var(--accent)] font-mono mb-0.5">{d.ref}</p>
                              {d.detail && <p className="text-xs text-[var(--text-muted)] mb-0.5">{d.detail}</p>}
                              <p className="text-xs text-[var(--text-muted)] font-mono opacity-60">{d.link}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                      {example.tradeoffsTitle && example.tradeoffs.length > 0 && (
                        <div className="mt-4">
                          <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wide mb-3">{example.tradeoffsTitle}</p>
                          <div className="space-y-2">
                            {example.tradeoffs.map((tr: any, ti: number) => (
                              <div key={ti} className="bg-[var(--bg-secondary)] rounded-lg p-4 border border-[var(--border)] flex items-start gap-3">
                                <span className="text-xs font-bold text-[var(--text-muted)] w-5 shrink-0 pt-0.5">-</span>
                                <div className="min-w-0">
                                  <p className="text-sm font-medium text-[var(--text-primary)] mb-1">{tr.title}</p>
                                  <p className="text-xs text-[var(--accent)] font-mono mb-0.5">{tr.ref}</p>
                                  {tr.detail && <p className="text-xs text-[var(--text-muted)] mb-0.5">{tr.detail}</p>}
                                  <p className="text-xs text-[var(--text-muted)] font-mono opacity-60">{tr.link}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-[var(--text-primary)] font-semibold text-sm mt-8">{ix.whatItLooksLike.closing}</p>
          </div>
        </div>
      </section>

      {/* 7. Import it */}
      <section className="py-16 px-6 md:px-32">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl">
            <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-6">
              {ix.importIt.title}
            </h2>
            <p className="text-[var(--text-secondary)] mb-6">{ix.importIt.body}</p>
            <p className="text-[var(--text-primary)] font-semibold text-sm">{ix.importIt.closing}</p>
          </div>
        </div>
      </section>

      {/* 8. The graph */}
      <section className="py-16 px-6 md:px-32 bg-[var(--bg-secondary)]">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl">
            <h2 className="text-[28px] font-semibold text-[var(--text-primary)] mb-6">
              {ix.graph.title}
            </h2>
            <p className="text-[var(--text-secondary)] mb-4">{ix.graph.body}</p>
            <p className="text-[var(--text-secondary)] mb-6">{ix.graph.body2}</p>
            <p className="text-[var(--text-muted)] italic mb-8">{ix.graph.examples}</p>
          </div>
          <div className="mb-8">
            <Image
              src="/knowledge-graph-demo.svg"
              alt="Knowledge decision graph"
              width={1500}
              height={830}
              className="w-full rounded-lg"
            />
          </div>
          <div className="max-w-2xl">
            <p className="text-[var(--text-primary)] font-semibold text-sm">{ix.graph.closing}</p>
          </div>
        </div>
      </section>

      {/* 9. Verifier */}
      <section className="py-16 px-6 md:px-32">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl">
            <h2 className="text-[28px] font-semibold text-[var(--text-primary)] mb-6">
              {ix.verifierSection.title}
            </h2>
            <p className="text-[var(--text-secondary)] mb-6">{ix.verifierSection.intro}</p>
            <div className="border border-[var(--border)] rounded-xl overflow-hidden bg-[var(--bg-primary)] mb-6">
              <div className="border-b border-[var(--border)] px-5 py-3 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)] font-mono">{ix.verifierSection.pr.id} - {ix.verifierSection.pr.name}</p>
                  <p className="text-xs text-[var(--text-muted)] mt-0.5 font-mono">Scope: {ix.verifierSection.pr.scope}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-[var(--text-muted)] font-mono">{ix.verifierSection.pr.summary}</p>
                  <p className="text-xs font-bold text-green-400 font-mono mt-0.5">Verdict: {ix.verifierSection.pr.verdict}</p>
                </div>
              </div>
              <div className="p-4 space-y-2">
                {ix.verifierSection.items.map((item: any, i: number) => {
                  const isOverride = item.status.includes('OVERRIDE');
                  const statusColor = isOverride ? 'text-amber-400' : 'text-green-400';
                  return (
                    <div key={i} className="bg-[var(--bg-secondary)] rounded-lg p-4 border border-[var(--border)]">
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <p className="text-xs font-mono text-[var(--text-muted)] mb-0.5">{item.type}</p>
                          <p className="text-sm font-medium text-[var(--text-primary)]">
                            <span className="text-[var(--accent)] font-mono">{item.ref}</span>{' '}
                            <span className="text-[var(--text-muted)]">({item.name})</span>
                          </p>
                          {item.detail && <p className="text-xs text-[var(--text-secondary)] mt-1.5 font-mono">{item.detail}</p>}
                          {item.meta && <p className="text-xs text-[var(--text-muted)] mt-0.5 font-mono opacity-70">{item.meta}</p>}
                        </div>
                        <span className={`text-xs font-bold font-mono shrink-0 ${statusColor}`}>{item.status}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <p className="text-[var(--text-secondary)] mb-4">{ix.verifierSection.modeText}</p>
            <p className="text-[var(--text-muted)] text-sm">{ix.verifierSection.closing}</p>
          </div>
        </div>
      </section>

      {/* 10. Different by design */}
      <section className="py-16 px-6 md:px-32 bg-[var(--bg-secondary)]">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl">
            <h2 className="text-[28px] font-semibold text-[var(--text-primary)] mb-6">
              {ix.differentByDesign.title}
            </h2>
            <p className="text-[var(--text-secondary)] mb-4">{ix.differentByDesign.body}</p>
            <p className="text-[var(--text-secondary)] mb-6">{ix.differentByDesign.body2}</p>
            <p className="text-[var(--text-primary)] font-semibold text-sm">{ix.differentByDesign.closing}</p>
          </div>
        </div>
      </section>

      {/* 11. Why now */}
      <section className="py-16 px-6 md:px-32">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl">
            <h2 className="text-[28px] font-semibold text-[var(--text-primary)] mb-6">
              {ix.whyNow.title}
            </h2>
            <p className="text-[var(--text-secondary)] mb-4">{ix.whyNow.body}</p>
            <p className="text-[var(--text-secondary)] mb-4">{ix.whyNow.body2}</p>
            <p className="text-[var(--text-secondary)] mb-6">{ix.whyNow.body3}</p>
            <p className="text-[var(--text-primary)] font-semibold text-sm">{ix.whyNow.closing}</p>
          </div>
        </div>
      </section>

      {/* 12. Who this is for */}
      <section className="py-16 px-6 md:px-32 bg-[var(--bg-secondary)]">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl">
            <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-6">
              {ix.who.title}
            </h2>
            <p className="text-[var(--text-secondary)]">{ix.who.body}</p>
          </div>
        </div>
      </section>

      {/* 13. Interfaces */}
      <section className="py-16 px-6 md:px-32">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl">
            <h2 className="text-[28px] font-semibold text-[var(--text-primary)] mb-8">
              {ix.interfaces.title}
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {ix.interfaces.items.map((item: any, i: number) => (
                <div key={i} className="p-4 bg-[var(--bg-card)] border border-[var(--border)] rounded-lg">
                  <p className="text-sm font-semibold text-[var(--text-primary)] mb-1">{item.label}</p>
                  <p className="text-sm text-[var(--text-muted)]">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 14. Human-readable */}
      <section className="py-16 px-6 md:px-32 bg-[var(--bg-secondary)]">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl">
            <h2 className="text-[28px] font-semibold text-[var(--text-primary)] mb-8">
              {ix.humanReadable.title}
            </h2>
            <div className="space-y-4 mb-8">
              {ix.humanReadable.lines.map((line: string, i: number) => (
                <p key={i} className="text-[var(--text-secondary)]">{line}</p>
              ))}
            </div>
            <p className="text-[var(--text-primary)] font-semibold text-sm">{ix.humanReadable.closing}</p>
          </div>
        </div>
      </section>

      {/* 15. A note on Evidence */}
      <section className="py-16 px-6 md:px-32">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-10">
            <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-6">
              {ix.evidenceNote.title}
            </h2>
            <p className="text-[var(--text-secondary)] mb-4">{renderInline(ix.evidenceNote.p1)}</p>
            <p className="text-[var(--text-muted)] mb-4">{ix.evidenceNote.p2}</p>
            <p className="text-[var(--text-secondary)] mb-8">{ix.evidenceNote.p3}</p>
            <div className="flex flex-wrap gap-4">
              <Link
                href={ix.evidenceNote.ctaHref}
                className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--border)] text-[var(--text-secondary)] font-medium rounded-lg hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors text-sm"
              >
                {ix.evidenceNote.cta}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              <Link
                href={ix.evidenceNote.ctaSecondaryHref}
                className="inline-flex items-center justify-center px-6 py-3 bg-[var(--accent)] text-[var(--bg-primary)] font-medium rounded-lg hover:bg-[var(--accent-hover)] transition-colors text-sm"
              >
                {ix.evidenceNote.ctaSecondary}
              </Link>
            </div>
          </div>
          <Image
            src="/evidence-compliance-dashboard.svg"
            alt="Evidence compliance dashboard"
            width={675}
            height={461}
            className="max-w-full"
          />
        </div>
      </section>

      {/* 16. Final CTAs */}
      <section className="py-16 px-6 md:px-32 bg-[var(--bg-secondary)]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-[28px] font-semibold text-[var(--text-primary)] mb-3">
            {ix.ctas.title}
          </h2>
          <p className="text-[var(--text-muted)] mb-8">{ix.ctas.note}</p>
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Link
              href={ix.ctas.primaryHref}
              className="px-8 py-3 bg-[var(--accent)] text-[var(--bg-primary)] font-medium rounded-lg hover:bg-[var(--accent-hover)] transition-colors"
            >
              {ix.ctas.primary}
            </Link>
            <Link
              href={ix.ctas.secondaryHref}
              className="px-8 py-3 border border-[var(--accent)] text-[var(--accent)] font-medium rounded-lg hover:bg-[var(--accent)]/10 transition-colors"
            >
              {ix.ctas.secondary}
            </Link>
            <Link
              href={ix.ctas.tertiaryHref}
              className="px-8 py-3 border border-[var(--border)] text-[var(--text-secondary)] font-medium rounded-lg hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
            >
              {ix.ctas.tertiary}
            </Link>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-[var(--text-muted)]">{ix.closing.line1}</p>
            <p className="text-sm text-[var(--text-muted)]">{ix.closing.line2}</p>
            <p className="text-sm font-semibold text-[var(--text-primary)]">{renderInline(ix.closing.line3)}</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
