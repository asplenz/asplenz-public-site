'use client'

import Link from 'next/link'
import { useLang } from '@/lib/LangContext'
import { getContent } from '@/lib/content'
import PageLayout from '@/app/components/PageLayout'
import PerspectiveContent from '@/app/components/PerspectiveContent'

export default function EvidenceAIGovernancePage() {
  const { lang } = useLang()
  const t = getContent(lang)
  const content = t.perspectives.aiGovernance

  const renderInline = (text: string) => {
    return text.split(/(\*\*[^*]+\*\*)/).map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i} className="text-[var(--text-primary)]">{part.slice(2, -2)}</strong>
      }
      return part
    })
  }

  return (
    <PageLayout backHref="/evidence" backLabel={lang === 'en' ? 'Back to Evidence' : 'Retour a Evidence'}>
      {/* Perspective header banner */}
      <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-lg p-4 mb-8">
        <p className="text-[var(--text-secondary)] text-sm">
          {renderInline(t.evidence.perspectiveHeader)}
        </p>
        <p className="text-sm mt-2">
          {renderInline(t.evidence.perspectiveHeaderCta)}{' '}
          <Link href="/knowledge" className="text-[var(--accent)] hover:underline">
            {t.evidence.perspectiveHeaderCtaLabel} &rarr;
          </Link>
        </p>
      </div>

      <PerspectiveContent
        title={content.title}
        subtitle={content.subtitle}
        sections={content.sections}
        next={content.next}
        lang={lang}
        productName="Evidence"
      />
    </PageLayout>
  )
}
