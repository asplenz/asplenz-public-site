'use client'

import DocsLayout from '@/app/components/DocsLayout'

const knowledgeDocsNavEn = [
  { title: 'Overview', href: '/knowledge/docs' },
  { title: 'Getting Started', href: '/knowledge/docs/getting-started' },
  { title: 'Core Concepts', href: '/knowledge/docs/core-concepts' },
  { title: 'Evaluation Model', href: '/knowledge/docs/evaluation-model' },
  { title: 'CI/CD Integration', href: '/knowledge/docs/ci-integration' },
  { title: 'Agent Integration', href: '/knowledge/docs/agent-integration' },
  { title: 'Security & Permissions', href: '/knowledge/docs/security-and-permissions' },
  { title: 'FAQ', href: '/knowledge/docs/faq' },
]

const knowledgeDocsNavFr = [
  { title: 'Aper\u00e7u', href: '/knowledge/docs' },
  { title: 'D\u00e9marrage rapide', href: '/knowledge/docs/getting-started' },
  { title: 'Concepts fondamentaux', href: '/knowledge/docs/core-concepts' },
  { title: 'Mod\u00e8le d\u0027\u00e9valuation', href: '/knowledge/docs/evaluation-model' },
  { title: 'Int\u00e9gration CI/CD', href: '/knowledge/docs/ci-integration' },
  { title: 'Int\u00e9gration agents', href: '/knowledge/docs/agent-integration' },
  { title: 'S\u00e9curit\u00e9 & Permissions', href: '/knowledge/docs/security-and-permissions' },
  { title: 'FAQ', href: '/knowledge/docs/faq' },
]

export default function KnowledgeDocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <DocsLayout
      navItems={{ en: knowledgeDocsNavEn, fr: knowledgeDocsNavFr }}
      backLink={{
        href: '/knowledge',
        label: { en: 'Back to Knowledge', fr: 'Retour \u00e0 Knowledge' },
      }}
      title={{
        en: 'Knowledge Documentation',
        fr: 'Documentation Knowledge',
      }}
    >
      {children}
    </DocsLayout>
  )
}
