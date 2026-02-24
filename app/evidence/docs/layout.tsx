'use client'

import DocsLayout from '@/app/components/DocsLayout'

const evidenceDocsNavEn = [
  { title: 'Overview', href: '/evidence/docs' },
  { title: 'Getting Started', href: '/evidence/docs/getting-started' },
  { title: 'Core Concepts', href: '/evidence/docs/core-concepts' },
  { title: 'Sealing Process', href: '/evidence/docs/sealing-process' },
  { title: 'Verification', href: '/evidence/docs/verification' },
  { title: 'Security & Trust Model', href: '/evidence/docs/security-and-trust-model' },
  { title: 'Integration', href: '/evidence/docs/integration' },
  { title: 'Governance & Compliance', href: '/evidence/docs/governance-and-compliance' },
  { title: 'FAQ', href: '/evidence/docs/faq' },
]

const evidenceDocsNavFr = [
  { title: 'Aper\u00e7u', href: '/evidence/docs' },
  { title: 'D\u00e9marrage rapide', href: '/evidence/docs/getting-started' },
  { title: 'Concepts fondamentaux', href: '/evidence/docs/core-concepts' },
  { title: 'Processus de scellement', href: '/evidence/docs/sealing-process' },
  { title: 'V\u00e9rification', href: '/evidence/docs/verification' },
  { title: 'S\u00e9curit\u00e9 & Mod\u00e8le de confiance', href: '/evidence/docs/security-and-trust-model' },
  { title: 'Int\u00e9gration', href: '/evidence/docs/integration' },
  { title: 'Gouvernance & Conformit\u00e9', href: '/evidence/docs/governance-and-compliance' },
  { title: 'FAQ', href: '/evidence/docs/faq' },
]

export default function EvidenceDocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <DocsLayout
      navItems={{ en: evidenceDocsNavEn, fr: evidenceDocsNavFr }}
      backLink={{
        href: '/evidence',
        label: { en: 'Back to Evidence', fr: 'Retour \u00e0 Evidence' },
      }}
      title={{
        en: 'Evidence Documentation',
        fr: 'Documentation Evidence',
      }}
    >
      {children}
    </DocsLayout>
  )
}
