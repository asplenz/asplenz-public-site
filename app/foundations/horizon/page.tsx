'use client'

import { useLang } from '@/lib/LangContext'
import { getContent } from '@/lib/content'
import PageLayout from '@/app/components/PageLayout'
import Link from 'next/link'

export default function HorizonPage() {
  const { lang } = useLang()
  const t = getContent(lang)
  const content = t.foundations.horizon

  return (
    <PageLayout backHref="/foundations" backLabel={lang === 'en' ? 'Back to Foundations' : 'Retour aux Fondations'}>
      <article className="prose">
        <h1>{content.title}</h1>
        <p className="text-xl text-[var(--text-muted)] -mt-4 mb-8">{content.subtitle}</p>

        {content.sections.map((section, idx) => (
          <section key={idx}>
            <h3>{section.title}</h3>
            {section.content.split('\n\n').map((para, pIdx) => (
              <p key={pIdx}>{para}</p>
            ))}
          </section>
        ))}

        <div className="mt-12 pt-8 border-t border-[var(--border)]">
          <p className="text-[var(--text-muted)] mb-4">{lang === 'en' ? 'View perspectives' : 'Voir les perspectives'}:</p>
          <Link
            href="/perspectives"
            className="inline-flex items-center gap-2 text-[var(--accent)] font-medium hover:text-[var(--accent-hover)] transition-colors"
          >
            {t.nav.perspectives}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </article>
    </PageLayout>
  )
}
