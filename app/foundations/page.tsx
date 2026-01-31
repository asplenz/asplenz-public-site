'use client'

import { useLang } from '@/lib/LangContext'
import Link from 'next/link'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

export default function FoundationsPage() {
  const { lang } = useLang()

  const sections = {
    en: {
      title: 'Foundations',
      subtitle: 'Understanding the problem Horizon solves',
      cards: [
        {
          title: 'The Problem',
          description: 'Decisions live everywhere, and nowhere. When scrutiny arrives, you can only explain, you cannot prove.',
          href: '/foundations/problem',
        },
        {
          title: 'The Shift',
          description: 'From late reconstruction to native capture. Horizon anchors facts at the moment they exist.',
          href: '/foundations/shift',
        },
        {
          title: 'Horizon',
          description: 'A neutral witness. Infrastructure that records what you declare, exactly as you declare it.',
          href: '/foundations/horizon',
        },
      ],
    },
    fr: {
      title: 'Fondations',
      subtitle: 'Comprendre le problème que résout Horizon',
      cards: [
        {
          title: 'Le Problème',
          description: 'Les décisions vivent partout, et nulle part. Quand l\'examen arrive, vous ne pouvez qu\'expliquer, vous ne pouvez pas prouver.',
          href: '/foundations/problem',
        },
        {
          title: 'Le Déplacement',
          description: 'De la reconstitution tardive à la capture native. Horizon ancre les faits au moment où ils existent.',
          href: '/foundations/shift',
        },
        {
          title: 'Horizon',
          description: 'Un témoin neutre. Une infrastructure qui enregistre ce que vous déclarez, exactement comme vous le déclarez.',
          href: '/foundations/horizon',
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
