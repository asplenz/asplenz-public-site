'use client'

import { useLang } from '@/lib/LangContext'
import Link from 'next/link'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

export default function PerspectivesPage() {
  const { lang } = useLang()

  const sections = {
    en: {
      title: 'Perspectives',
      subtitle: 'How Horizon serves different roles',
      cards: [
        {
          title: 'Audit & Risk',
          description: 'Immutable audit trails and tamper-evident timelines for compliance and risk management.',
          href: '/perspectives/audit-risk',
        },
        {
          title: 'Security',
          description: 'Cryptographic guarantees, tenant isolation, and sovereign deployment options.',
          href: '/perspectives/security',
        },
        {
          title: 'Engineering',
          description: 'Simple API, hash chain integrity, and seamless integration into existing systems.',
          href: '/perspectives/engineering',
        },
        {
          title: 'Legal',
          description: 'Authoritative timestamps and portable proof bundles for evidentiary purposes.',
          href: '/perspectives/legal',
        },
        {
          title: 'AI & Data Governance',
          description: 'Human oversight attestation and decision traceability for AI Act compliance.',
          href: '/perspectives/ai-governance',
        },
      ],
    },
    fr: {
      title: 'Perspectives',
      subtitle: 'Comment Horizon sert différents rôles',
      cards: [
        {
          title: 'Audit & Risque',
          description: 'Pistes d\'audit immuables et timelines inviolables pour la conformité et la gestion des risques.',
          href: '/perspectives/audit-risk',
        },
        {
          title: 'Sécurité',
          description: 'Garanties cryptographiques, isolation des tenants et options de déploiement souverain.',
          href: '/perspectives/security',
        },
        {
          title: 'Engineering',
          description: 'API simple, intégrité par chaîne de hachage et intégration transparente aux systèmes existants.',
          href: '/perspectives/engineering',
        },
        {
          title: 'Juridique',
          description: 'Horodatages faisant autorité et bundles de preuve portables à des fins probatoires.',
          href: '/perspectives/legal',
        },
        {
          title: 'Gouvernance IA & Données',
          description: 'Attestation de supervision humaine et traçabilité des décisions pour la conformité AI Act.',
          href: '/perspectives/ai-governance',
        },
      ],
    },
  }

  const t = sections[lang]

  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      <Header />
      <main className="pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[var(--accent)] hover:text-[var(--accent-hover)] mb-6 text-sm transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {lang === 'en' ? 'Back to Home' : 'Retour à l\'accueil'}
          </Link>

          <p className="text-sm font-medium text-[var(--accent)] uppercase tracking-wider mb-2">{t.title}</p>
          <h1 className="text-2xl font-bold text-[var(--text-primary)] mb-6">{t.subtitle}</h1>

          <div className="grid md:grid-cols-2 gap-4">
            {t.cards.map((card, idx) => (
              <Link
                key={idx}
                href={card.href}
                className="block p-5 bg-[var(--bg-card)] border border-[var(--border)] rounded-lg hover:border-[var(--accent)] transition-colors group"
              >
                <h2 className="text-lg font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors mb-2">
                  {card.title}
                </h2>
                <p className="text-[var(--text-muted)] text-sm">{card.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
