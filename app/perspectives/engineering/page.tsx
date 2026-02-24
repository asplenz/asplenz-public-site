'use client'

import Link from 'next/link'
import { useLang } from '@/lib/LangContext'
import { getContent } from '@/lib/content'
import PageLayout from '@/app/components/PageLayout'
import PerspectiveContent from '@/app/components/PerspectiveContent'

export default function EngineeringPage() {
  const { lang } = useLang()
  const t = getContent(lang)
  const content = t.perspectives.engineering

  return (
    <PageLayout backHref="/">
      <PerspectiveContent
        title={content.title}
        subtitle={content.subtitle}
        sections={content.sections}
        next={content.next}
        lang={lang}
        productName="Knowledge"
        bottomLink={{
          href: '/knowledge',
          label: { en: 'Discover Knowledge in depth', fr: 'Decouvrir Knowledge en profondeur' },
          description: {
            en: 'Decision System of Record for AI-native organizations: how it works, MCP tools, and pricing.',
            fr: 'Decision System of Record pour les organisations AI-native : fonctionnement, outils MCP et tarifs.',
          },
        }}
      />
    </PageLayout>
  )
}
