'use client'

import { useLang } from '@/lib/LangContext'
import { getContent } from '@/lib/content'
import PageLayout from '@/app/components/PageLayout'

export default function WhyAsplenzPage() {
  const { lang } = useLang()
  const t = getContent(lang)
  const w = (t as any).whyAsplenz

  return (
    <PageLayout>
      <article className="max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-8" style={{ letterSpacing: '-0.02em' }}>
          {w.title}
        </h1>

        {/* Intro lines */}
        <div className="space-y-4 mb-6">
          {w.intro.map((line: string, i: number) => (
            <p key={i} className="text-[var(--text-secondary)]">{line}</p>
          ))}
        </div>
        <div className="space-y-3 mb-12">
          {w.introClosing.map((line: string, i: number) => (
            <p key={i} className={i === w.introClosing.length - 1 ? 'text-[var(--text-primary)] font-semibold' : 'text-[var(--text-secondary)]'}>
              {line}
            </p>
          ))}
        </div>

        {/* Governance is not documentation */}
        <section className="border-t border-[var(--border)] pt-10 mb-12">
          <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4">{w.governance.title}</h2>
          <div className="space-y-3 mb-4">
            {w.governance.body.map((line: string, i: number) => (
              <p key={i} className="text-[var(--text-secondary)]">{line}</p>
            ))}
          </div>
          <ul className="space-y-2 mb-6">
            {w.governance.items.map((item: string, i: number) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2 flex-shrink-0" />
                <span className="text-[var(--text-secondary)] text-sm">{item}</span>
              </li>
            ))}
          </ul>
          <div className="space-y-2">
            {w.governance.closing.map((line: string, i: number) => (
              <p key={i} className={i === w.governance.closing.length - 1 ? 'text-[var(--text-primary)] font-semibold text-sm' : 'text-[var(--text-secondary)] text-sm'}>
                {line}
              </p>
            ))}
          </div>
        </section>

        {/* Two governance layers */}
        <section className="border-t border-[var(--border)] pt-10 mb-12">
          <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4">{w.layers.title}</h2>
          <div className="space-y-3 mb-4">
            {w.layers.intro.map((line: string, i: number) => (
              <p key={i} className="text-[var(--text-secondary)]">{line}</p>
            ))}
          </div>
          <ul className="space-y-2 mb-6">
            {w.layers.items.map((item: any, i: number) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2 flex-shrink-0" />
                <span className="text-[var(--text-secondary)] text-sm">
                  <strong className="text-[var(--text-primary)]">{item.name}</strong> {item.description}
                </span>
              </li>
            ))}
          </ul>
          <div className="space-y-2 mb-4">
            {w.layers.closing.map((line: string, i: number) => (
              <p key={i} className="text-[var(--text-secondary)] text-sm">{line}</p>
            ))}
          </div>
          <p className="text-[var(--text-primary)] font-semibold text-sm">{w.layers.philosophy}</p>
        </section>

        {/* Infrastructure, not consultancy */}
        <section className="border-t border-[var(--border)] pt-10">
          <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4">{w.infrastructure.title}</h2>
          <div className="space-y-3">
            {w.infrastructure.body.map((line: string, i: number) => (
              <p key={i} className="text-[var(--text-secondary)]">{line}</p>
            ))}
          </div>
        </section>
      </article>
    </PageLayout>
  )
}
