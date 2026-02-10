'use client'

import { useLang } from '@/lib/LangContext'
import Link from 'next/link'

const sectionsEn = [
  {
    title: 'Integration',
    links: [
      { title: 'First Sealed Fact', href: '/docs/technical/first-seal', desc: 'Seal your first fact in 5 minutes' },
      { title: 'API Reference', href: '/docs/technical/api-reference', desc: 'All endpoints and payloads' },
    ],
  },
  {
    title: 'Security & Guarantees',
    links: [
      { title: 'Guarantees', href: '/docs/technical/guarantees', desc: 'Cryptographic and storage guarantees' },
      { title: 'Security & Sovereignty', href: '/docs/security/sovereignty', desc: 'Architecture, isolation, deployment options' },
    ],
  },
  {
    title: 'Compliance',
    links: [
      { title: "Auditor's Guide", href: '/docs/compliance/auditor-guide', desc: 'Step-by-step verification protocol' },
    ],
  },
]

const sectionsFr = [
  {
    title: 'Intégration',
    links: [
      { title: 'Premier Scellement', href: '/docs/technical/first-seal', desc: 'Sceller votre premier fait en 5 minutes' },
      { title: 'Référence API', href: '/docs/technical/api-reference', desc: 'Tous les endpoints et payloads' },
    ],
  },
  {
    title: 'Sécurité & Garanties',
    links: [
      { title: 'Garanties', href: '/docs/technical/guarantees', desc: 'Garanties cryptographiques et de stockage' },
      { title: 'Sécurité & Souveraineté', href: '/docs/security/sovereignty', desc: 'Architecture, isolation, options de déploiement' },
    ],
  },
  {
    title: 'Conformité',
    links: [
      { title: "Guide de l'Auditeur", href: '/docs/compliance/auditor-guide', desc: 'Protocole de vérification étape par étape' },
    ],
  },
]

export default function DocsPage() {
  const { lang } = useLang()
  const sections = lang === 'en' ? sectionsEn : sectionsFr

  return (
    <article className="prose">
      <h1>{lang === 'en' ? 'Documentation' : 'Documentation'}</h1>
      <p className="text-xl text-[var(--text-muted)] -mt-4 mb-8">
        {lang === 'en'
          ? 'Everything you need to integrate, verify, and audit Horizon.'
          : 'Tout ce qu\'il faut pour intégrer, vérifier et auditer Horizon.'}
      </p>

      <div className="grid gap-6 not-prose">
        {sections.map((section, idx) => (
          <div key={idx} className="border border-[var(--border)] rounded-lg p-6 bg-[var(--bg-card)]">
            <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-4">{section.title}</h2>
            <div className="space-y-2">
              {section.links.map((link, linkIdx) => (
                <Link
                  key={linkIdx}
                  href={link.href}
                  className="block group hover:bg-[var(--bg-secondary)] p-2 rounded transition-colors"
                >
                  <span className="text-[var(--accent)] group-hover:text-[var(--accent-hover)] font-medium">{link.title}</span>
                  <span className="text-[var(--text-muted)] text-sm ml-2">{link.desc}</span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </article>
  )
}
