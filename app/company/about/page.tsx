'use client'

import { useLang } from '@/lib/LangContext'
import { getContent } from '@/lib/content'
import PageLayout from '@/app/components/PageLayout'

export default function AboutPage() {
  const { lang } = useLang()
  const t = getContent(lang)
  const a = (t as any).about

  return (
    <PageLayout>
      <article className="max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-6" style={{ letterSpacing: '-0.02em' }}>
          {a.title}
        </h1>

        {/* Intro */}
        <p className="text-lg text-[var(--accent)] font-medium mb-6">{a.intro}</p>
        <div className="space-y-4 mb-12">
          {a.body.map((line: string, i: number) => (
            <p key={i} className="text-[var(--text-secondary)]">{line}</p>
          ))}
        </div>

        {/* What we build */}
        <section className="border-t border-[var(--border)] pt-10 mb-12">
          <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-2">{a.products.title}</h2>
          <p className="text-[var(--text-secondary)] mb-6">{a.products.intro}</p>
          <div className="space-y-6">
            {a.products.items.map((item: any, i: number) => (
              <div key={i} className="border border-[var(--border)] rounded-lg p-6 bg-[var(--bg-card)]">
                <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">{item.name}</h3>
                <p className="text-[var(--text-secondary)] text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Our perspective */}
        <section className="border-t border-[var(--border)] pt-10 mb-12">
          <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4">{a.perspective.title}</h2>
          <p className="text-[var(--text-secondary)] mb-4">{a.perspective.intro}</p>
          <ul className="space-y-2 mb-6">
            {a.perspective.items.map((item: string, i: number) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2 flex-shrink-0" />
                <span className="text-[var(--text-secondary)] text-sm">{item}</span>
              </li>
            ))}
          </ul>
          {a.perspective.body.map((line: string, i: number) => (
            <p key={i} className={`text-sm ${i === a.perspective.body.length - 1 ? 'text-[var(--text-primary)] font-semibold' : 'text-[var(--text-secondary)]'} mb-2`}>
              {line}
            </p>
          ))}
        </section>

        {/* Company */}
        <section className="border-t border-[var(--border)] pt-10">
          <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4">{a.company.title}</h2>
          <p className="text-[var(--text-secondary)] mb-6">{a.company.description}</p>
          <p className="text-[var(--text-secondary)] text-sm">
            {a.company.cta}{' '}
            <a href={`mailto:${a.company.email}`} className="text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors">
              {a.company.email}
            </a>
          </p>
        </section>
      </article>
    </PageLayout>
  )
}
