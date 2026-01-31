'use client'

import { useLang } from '@/lib/LangContext'
import Link from 'next/link'

const audienceSectionsEn = [
  {
    title: 'For Risk Managers & RSSI',
    description: 'Understand the security model and what Horizon actually proves.',
    links: [
      { title: 'Proof Semantics', href: '/docs/technical/proof-semantics', desc: 'What sealed facts prove and don\'t prove' },
      { title: 'Security & Sovereignty', href: '/docs/security/sovereignty', desc: 'Architecture, isolation, deployment options' },
      { title: 'Guarantees', href: '/docs/technical/guarantees', desc: 'Cryptographic and storage guarantees' },
    ],
  },
  {
    title: 'For Auditors',
    description: 'Verify proof bundles and chain integrity independently.',
    links: [
      { title: "Auditor's Guide", href: '/docs/compliance/auditor-guide', desc: 'Step-by-step verification protocol' },
      { title: 'Guarantees', href: '/docs/technical/guarantees', desc: 'Hash chain and signature guarantees' },
      { title: 'Proof Semantics', href: '/docs/technical/proof-semantics', desc: 'Semantic boundaries of evidence' },
    ],
  },
  {
    title: 'For Integration Engineers',
    description: 'Integrate Horizon into your systems.',
    links: [
      { title: 'First Seal', href: '/docs/technical/first-seal', desc: 'Seal your first fact in 5 minutes' },
      { title: 'Core Concepts', href: '/docs/technical/core-concepts', desc: 'Streams, Facts, Bundles explained' },
      { title: 'API Reference', href: '/docs/technical/api-reference', desc: 'All endpoints and payloads' },
    ],
  },
  {
    title: 'For Operations & Business Users',
    description: 'Seal facts and view timelines.',
    links: [
      { title: 'Email Channel', href: '/docs/channels/email', desc: 'Seal facts by sending emails' },
      { title: 'Webapp Channel', href: '/docs/channels/webapp', desc: 'View and verify timelines' },
      { title: 'API Channel', href: '/docs/channels/api', desc: 'Programmatic integration patterns' },
    ],
  },
]

const audienceSectionsFr = [
  {
    title: 'Pour les Responsables Risques & RSSI',
    description: 'Comprendre le modèle de sécurité et ce qu\'Horizon prouve réellement.',
    links: [
      { title: 'Sémantique de Preuve', href: '/docs/technical/proof-semantics', desc: 'Ce que les faits scellés prouvent et ne prouvent pas' },
      { title: 'Sécurité & Souveraineté', href: '/docs/security/sovereignty', desc: 'Architecture, isolation, options de déploiement' },
      { title: 'Garanties', href: '/docs/technical/guarantees', desc: 'Garanties cryptographiques et de stockage' },
    ],
  },
  {
    title: 'Pour les Auditeurs',
    description: 'Vérifier les bundles de preuve et l\'intégrité de la chaîne de manière indépendante.',
    links: [
      { title: "Guide de l'Auditeur", href: '/docs/compliance/auditor-guide', desc: 'Protocole de vérification étape par étape' },
      { title: 'Garanties', href: '/docs/technical/guarantees', desc: 'Garanties de chaîne de hachage et de signature' },
      { title: 'Sémantique de Preuve', href: '/docs/technical/proof-semantics', desc: 'Limites sémantiques des preuves' },
    ],
  },
  {
    title: 'Pour les Ingénieurs d\'Intégration',
    description: 'Intégrer Horizon dans vos systèmes.',
    links: [
      { title: 'Premier Scellement', href: '/docs/technical/first-seal', desc: 'Sceller votre premier fait en 5 minutes' },
      { title: 'Concepts Fondamentaux', href: '/docs/technical/core-concepts', desc: 'Streams, Facts, Bundles expliqués' },
      { title: 'Référence API', href: '/docs/technical/api-reference', desc: 'Tous les endpoints et payloads' },
    ],
  },
  {
    title: 'Pour les Opérations & Utilisateurs Métier',
    description: 'Sceller des faits et visualiser les timelines.',
    links: [
      { title: 'Canal Email', href: '/docs/channels/email', desc: 'Sceller des faits par email' },
      { title: 'Canal Webapp', href: '/docs/channels/webapp', desc: 'Visualiser et vérifier les timelines' },
      { title: 'Canal API', href: '/docs/channels/api', desc: 'Patterns d\'intégration programmatique' },
    ],
  },
]

export default function DocsPage() {
  const { lang } = useLang()
  const sections = lang === 'en' ? audienceSectionsEn : audienceSectionsFr

  return (
    <article className="prose">
      <h1>{lang === 'en' ? 'Horizon Documentation' : 'Documentation Horizon'}</h1>
      <p className="text-xl text-[var(--text-muted)] -mt-4 mb-8">
        {lang === 'en'
          ? 'Proof Infrastructure for Business Decisions'
          : 'Infrastructure de Preuve pour Décisions Métier'}
      </p>

      <section className="mb-12">
        <h2>{lang === 'en' ? 'What is Horizon?' : 'Qu\'est-ce qu\'Horizon ?'}</h2>
        <p className="text-[var(--text-secondary)]">
          {lang === 'en'
            ? 'Horizon captures and seals business decisions as they happen, creating an immutable, cryptographically-secured timeline that can be audited, verified, and exported at any time.'
            : 'Horizon capture et scelle les décisions métier au moment où elles se produisent, créant une timeline immuable et sécurisée cryptographiquement qui peut être auditée, vérifiée et exportée à tout moment.'}
        </p>
        <p className="text-[var(--text-secondary)]">
          {lang === 'en'
            ? 'Horizon is a neutral witness. It records what you declare, exactly as you declare it, without interpretation or validation.'
            : 'Horizon est un témoin neutre. Il enregistre ce que vous déclarez, exactement comme vous le déclarez, sans interprétation ni validation.'}
        </p>
      </section>

      <section className="mb-12">
        <h2>{lang === 'en' ? 'Quick Start' : 'Démarrage Rapide'}</h2>
        <p className="text-[var(--text-secondary)] mb-4">
          {lang === 'en' ? 'Seal a fact in 5 minutes:' : 'Sceller un fait en 5 minutes :'}
        </p>
        <Link
          href="/docs/technical/first-seal"
          className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--accent)] text-[var(--bg-primary)] rounded-lg font-medium hover:bg-[var(--accent-hover)] transition-colors"
        >
          {lang === 'en' ? 'First Seal Guide' : 'Guide Premier Scellement'}
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </section>

      <section className="mb-12">
        <h2>{lang === 'en' ? 'Documentation by Audience' : 'Documentation par Audience'}</h2>
        <div className="grid gap-6 not-prose">
          {sections.map((section, idx) => (
            <div key={idx} className="border border-[var(--border)] rounded-lg p-6 bg-[var(--bg-card)]">
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">{section.title}</h3>
              <p className="text-[var(--text-muted)] text-sm mb-4">{section.description}</p>
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
      </section>

      <section className="mb-12">
        <h2>{lang === 'en' ? 'Core Principle' : 'Principe Fondamental'}</h2>
        <p className="text-[var(--text-secondary)] mb-4">
          {lang === 'en' ? 'Horizon is semantically neutral:' : 'Horizon est sémantiquement neutre :'}
        </p>
        <div className="overflow-x-auto not-prose">
          <table className="min-w-full border border-[var(--border)] rounded-lg overflow-hidden">
            <thead className="bg-[var(--bg-card)]">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-[var(--text-primary)]">
                  {lang === 'en' ? 'Horizon Does' : 'Horizon Fait'}
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-[var(--text-primary)]">
                  {lang === 'en' ? 'Horizon Does Not' : 'Horizon Ne Fait Pas'}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border)]">
              <tr className="bg-[var(--bg-secondary)]">
                <td className="px-4 py-3 text-sm text-[var(--text-secondary)]">
                  {lang === 'en' ? 'Timestamp authoritatively' : 'Horodater avec autorité'}
                </td>
                <td className="px-4 py-3 text-sm text-[var(--text-muted)]">
                  {lang === 'en' ? 'Interpret your data' : 'Interpréter vos données'}
                </td>
              </tr>
              <tr className="bg-[var(--bg-secondary)]">
                <td className="px-4 py-3 text-sm text-[var(--text-secondary)]">
                  {lang === 'en' ? 'Chain facts cryptographically' : 'Chaîner les faits cryptographiquement'}
                </td>
                <td className="px-4 py-3 text-sm text-[var(--text-muted)]">
                  {lang === 'en' ? 'Enforce business rules' : 'Imposer des règles métier'}
                </td>
              </tr>
              <tr className="bg-[var(--bg-secondary)]">
                <td className="px-4 py-3 text-sm text-[var(--text-secondary)]">
                  {lang === 'en' ? 'Sign exportable proof bundles' : 'Signer des bundles de preuve exportables'}
                </td>
                <td className="px-4 py-3 text-sm text-[var(--text-muted)]">
                  {lang === 'en' ? 'Validate decision quality' : 'Valider la qualité des décisions'}
                </td>
              </tr>
              <tr className="bg-[var(--bg-secondary)]">
                <td className="px-4 py-3 text-sm text-[var(--text-secondary)]">
                  {lang === 'en' ? 'Detect tampering' : 'Détecter les altérations'}
                </td>
                <td className="px-4 py-3 text-sm text-[var(--text-muted)]">
                  {lang === 'en' ? 'Store business logic' : 'Stocker la logique métier'}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-[var(--text-muted)] text-sm mt-4 italic">
          {lang === 'en'
            ? "Your data remains yours. Horizon guarantees when it was sealed, by whom, and that it hasn't changed."
            : "Vos données restent les vôtres. Horizon garantit quand elles ont été scellées, par qui, et qu'elles n'ont pas changé."}
        </p>
      </section>
    </article>
  )
}
