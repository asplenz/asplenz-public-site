'use client'

import { useLang } from '@/lib/LangContext'
import { getContent } from '@/lib/content'
import Link from 'next/link'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

export default function FoundationsPage() {
  const { lang } = useLang()
  const t = getContent(lang)

  const sections = {
    en: {
      title: 'Foundations',
      subtitle: 'Asplenz addresses a structural problem: decisions are not treated as first-class organizational assets. These two pages explore the problem and the shift required.',
      cards: [
        {
          title: 'The Problem',
          description: 'Decisions live everywhere, and nowhere. AI agents act without organizational memory. When something goes wrong, proof must be reconstructed from fragments. Both gaps — governance before the action, proof after the decision — share the same root.',
          href: '/foundations/problem',
        },
        {
          title: 'The Shift',
          description: 'Improving existing tools is not enough. Two entire categories of infrastructure are missing: a normative layer for governance, and a proof layer for accountability. Knowledge and Evidence make these shifts possible.',
          href: '/foundations/shift',
        },
      ],
    },
    fr: {
      title: 'Fondations',
      subtitle: 'Asplenz adresse un problème structurel : les décisions ne sont pas traitées comme des actifs organisationnels de premier ordre. Ces deux pages explorent le problème et le déplacement nécessaire.',
      cards: [
        {
          title: 'Le Problème',
          description: 'Les décisions vivent partout, et nulle part. Les agents IA agissent sans mémoire organisationnelle. Quand quelque chose tourne mal, la preuve doit être reconstruite à partir de fragments. Les deux déficits — la gouvernance avant l\'action, la preuve après la décision — partagent la même racine.',
          href: '/foundations/problem',
        },
        {
          title: 'Le Déplacement',
          description: 'Améliorer les outils existants ne suffit pas. Deux catégories entières d\'infrastructure sont manquantes : une couche normative pour la gouvernance, et une couche de preuve pour la redevabilité. Knowledge et Evidence rendent ces déplacements possibles.',
          href: '/foundations/shift',
        },
      ],
    },
  }

  const s = sections[lang]

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

          <p className="text-sm font-medium text-[var(--accent)] uppercase tracking-wider mb-2">{s.title}</p>
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl">{s.subtitle}</p>

          <div className="grid md:grid-cols-2 gap-4">
            {s.cards.map((card, idx) => (
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
