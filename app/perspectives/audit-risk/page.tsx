'use client'

import { useLang } from '@/lib/LangContext'
import { getContent } from '@/lib/content'
import PageLayout from '@/app/components/PageLayout'
import PerspectiveContent from '@/app/components/PerspectiveContent'

export default function AuditRiskPage() {
  const { lang } = useLang()
  const t = getContent(lang)
  const content = t.perspectives.auditRisk

  return (
    <PageLayout backHref="/perspectives" backLabel={lang === 'en' ? 'Back to Perspectives' : 'Retour aux Perspectives'}>
      <PerspectiveContent
        title={content.title}
        subtitle={content.subtitle}
        sections={content.sections}
        next={content.next}
        lang={lang}
      />
    </PageLayout>
  )
}
