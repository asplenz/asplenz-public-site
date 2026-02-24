'use client'

import Link from 'next/link'
import { useLang } from '@/lib/LangContext'
import { getContent } from '@/lib/content'
import PageLayout from '@/app/components/PageLayout'

export default function EvidencePage() {
  const { lang } = useLang()
  const t = getContent(lang)

  const renderInline = (text: string) => {
    return text.split(/(\*\*[^*]+\*\*)/).map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i} className="text-[var(--text-primary)]">{part.slice(2, -2)}</strong>
      }
      return part
    })
  }

  return (
    <PageLayout>
      {/* Header banner */}
      <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-lg p-4 mb-8">
        <p className="text-[var(--text-secondary)] text-sm">
          {t.evidence.header}{' '}
          <Link href="/knowledge" className="text-[var(--accent)] hover:underline">
            {t.evidence.headerCta} &rarr;
          </Link>
          {' '}&middot;{' '}
          <Link href={t.evidence.headerCtaVerifierHref} className="text-[var(--accent)] hover:underline">
            {t.evidence.headerCtaVerifier} &rarr;
          </Link>
        </p>
      </div>

      {/* Title + subtitle */}
      <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-2">{t.evidence.title}</h1>
      <p className="text-xl text-[var(--text-secondary)] mb-12">{t.evidence.subtitle}</p>

      {/* Sections */}
      {t.evidence.sections.map((section: { title: string; content: string }, idx: number) => (
        <section key={idx} className="mb-10">
          <h2 className="text-xl font-semibold text-[var(--text-primary)] mt-8 mb-4">{section.title}</h2>
          <div className="text-[var(--text-secondary)]">
            {section.content.split('\n\n').map((para: string, pIdx: number) => (
              <p key={pIdx} className="mb-4">{renderInline(para)}</p>
            ))}
          </div>
        </section>
      ))}

      {/* Knowledge Bridge section */}
      <section className="mt-16 pt-8 border-t border-[var(--border)]">
        <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4">{t.evidence.knowledgeBridge.title}</h2>
        <p className="text-[var(--text-secondary)] mb-4">{t.evidence.knowledgeBridge.p1}</p>
        <p className="text-[var(--text-secondary)] mb-6">{t.evidence.knowledgeBridge.p2}</p>
        <Link
          href="/knowledge"
          className="inline-block text-[var(--accent)] hover:underline font-medium"
        >
          {t.evidence.headerCta} &rarr;
        </Link>
      </section>
    </PageLayout>
  )
}
