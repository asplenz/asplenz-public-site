'use client'

import Link from 'next/link'
import { useLang } from '@/lib/LangContext'
import { getContent } from '@/lib/content'
import PageLayout from '@/app/components/PageLayout'

export default function EvidencePage() {
  const { lang } = useLang()
  const t = getContent(lang)
  const e = t.evidence as any

  return (
    <PageLayout>
      {/* Hero */}
      <h1 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-3" style={{ letterSpacing: '-0.02em' }}>
        {e.hero.title}
      </h1>
      <p className="text-lg text-[var(--accent)] font-medium mb-8">{e.hero.subtitle}</p>
      <div className="space-y-4 mb-16">
        {e.hero.intro.map((line: string, i: number) => (
          <p key={i} className="text-[var(--text-secondary)]">{line}</p>
        ))}
      </div>

      {/* What Evidence does */}
      <section className="border-t border-[var(--border)] pt-10 mb-12">
        <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4">{e.whatDoes.title}</h2>
        <p className="text-[var(--text-secondary)] mb-4">{e.whatDoes.intro}</p>
        <ul className="space-y-2 mb-4">
          {e.whatDoes.items.map((item: string, i: number) => (
            <li key={i} className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2 flex-shrink-0" />
              <span className="text-[var(--text-secondary)] text-sm">{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-[var(--text-secondary)] text-sm">{e.whatDoes.closing}</p>
      </section>

      {/* What Evidence does not do */}
      <section className="border-t border-[var(--border)] pt-10 mb-12">
        <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4">{e.whatDoesNot.title}</h2>
        <p className="text-[var(--text-secondary)] mb-4">{e.whatDoesNot.intro}</p>
        <ul className="space-y-2 mb-4">
          {e.whatDoesNot.items.map((item: string, i: number) => (
            <li key={i} className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--text-muted)] mt-2 flex-shrink-0" />
              <span className="text-[var(--text-muted)] text-sm">{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-[var(--text-secondary)] mb-2">{e.whatDoesNot.closing}</p>
        <p className="text-[var(--text-primary)] font-semibold">{e.whatDoesNot.emphasis}</p>
      </section>

      {/* Designed for contested environments */}
      <section className="border-t border-[var(--border)] pt-10 mb-12">
        <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4">{e.contested.title}</h2>
        <p className="text-[var(--text-secondary)] mb-4">{e.contested.intro}</p>
        <ul className="space-y-2 mb-4">
          {e.contested.items.map((item: string, i: number) => (
            <li key={i} className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2 flex-shrink-0" />
              <span className="text-[var(--text-secondary)] text-sm">{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-[var(--text-primary)] font-semibold text-sm">{e.contested.closing}</p>
      </section>

      {/* Neutral by design */}
      <section className="border-t border-[var(--border)] pt-10 mb-12">
        <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4">{e.neutral.title}</h2>
        <div className="space-y-4">
          {e.neutral.body.map((line: string, i: number) => (
            <p key={i} className="text-[var(--text-secondary)]">{line}</p>
          ))}
        </div>
      </section>

      {/* Deployment models */}
      <section className="border-t border-[var(--border)] pt-10 mb-12">
        <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4">{e.deployment.title}</h2>
        <p className="text-[var(--text-secondary)] mb-4">{e.deployment.intro}</p>
        <ul className="space-y-2 mb-4">
          {e.deployment.items.map((item: string, i: number) => (
            <li key={i} className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2 flex-shrink-0" />
              <span className="text-[var(--text-secondary)] text-sm">{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-[var(--text-secondary)] text-sm">{e.deployment.closing}</p>
      </section>

      {/* When used with other systems */}
      <section className="border-t border-[var(--border)] pt-10 mb-12">
        <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4">{e.withOther.title}</h2>
        <p className="text-[var(--text-secondary)] mb-3">{e.withOther.body}</p>
        <p className="text-[var(--text-primary)] font-semibold text-sm">{e.withOther.emphasis}</p>
      </section>

      {/* Why Evidence exists */}
      <section className="border-t border-[var(--border)] pt-10 mb-12">
        <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4">{e.why.title}</h2>
        <div className="space-y-3 mb-3">
          {e.why.body.map((line: string, i: number) => (
            <p key={i} className="text-[var(--text-secondary)]">{line}</p>
          ))}
        </div>
        <p className="text-[var(--text-primary)] font-semibold">{e.why.emphasis}</p>
      </section>

      {/* Further Reading */}
      <section className="border-t border-[var(--border)] pt-10">
        <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-6">{e.furtherReading.title}</h2>
        <ul className="space-y-3">
          {e.furtherReading.links.map((link: any, i: number) => (
            <li key={i}>
              <Link
                href={link.href}
                className="text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors text-sm"
              >
                {link.label} &rarr;
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </PageLayout>
  )
}
