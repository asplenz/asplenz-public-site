'use client'

import { useLang } from '@/lib/LangContext'
import { getContent } from '@/lib/content'
import PageLayout from '@/app/components/PageLayout'
import Link from 'next/link'

export default function ProblemPage() {
  const { lang } = useLang()
  const t = getContent(lang)
  const content = t.foundations.problem

  const renderInline = (text: string) => {
    return text.split(/(\*\*[^*]+\*\*|`[^`]+`)/).map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i} className="text-[var(--text-primary)]">{part.slice(2, -2)}</strong>
      }
      if (part.startsWith('`') && part.endsWith('`')) {
        return <code key={i} className="px-1.5 py-0.5 bg-[var(--bg-secondary)] text-[var(--accent)] rounded text-sm font-mono">{part.slice(1, -1)}</code>
      }
      return part
    })
  }

  return (
    <PageLayout backHref="/foundations" backLabel={lang === 'en' ? 'Back to Foundations' : 'Retour aux Fondations'}>
      <article className="prose">
        <h1>{content.title}</h1>

        {content.sections.map((section, idx) => (
          <section key={idx}>
            <h3>{section.title}</h3>
            {section.content.split('\n\n').map((para, pIdx) => (
              <p key={pIdx}>{renderInline(para)}</p>
            ))}
          </section>
        ))}

        <div className="mt-12 pt-8 border-t border-[var(--border)]">
          <p className="text-[var(--text-muted)] mb-4">{lang === 'en' ? 'Next' : 'Suivant'}:</p>
          <Link
            href="/foundations/shift"
            className="inline-flex items-center gap-2 text-[var(--accent)] font-medium hover:text-[var(--accent-hover)] transition-colors"
          >
            {lang === 'en' ? 'The Shift' : 'Le Déplacement'}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </article>
    </PageLayout>
  )
}
