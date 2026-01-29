'use client'

import Link from 'next/link'
import { useLang } from '@/lib/LangContext'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function DocsPage() {
  const { lang } = useLang()

  const docs = [
    {
      href: '/docs/proof-semantics',
      title: 'Proof Semantics',
      description: lang === 'fr'
        ? 'Ce que la preuve Horizon prouve techniquement'
        : 'What Horizon proof technically proves',
    },
    {
      href: '/docs/understanding-proof',
      title: lang === 'fr' ? 'Comprendre la Preuve' : 'Understanding Proof',
      description: lang === 'fr'
        ? 'Lire et interpréter les données Horizon'
        : 'Reading and interpreting Horizon data',
    },
    {
      href: '/docs/first-seal',
      title: lang === 'fr' ? 'Premier Scellement' : 'First Seal',
      description: lang === 'fr'
        ? 'Guide technique pour sceller votre premier fait'
        : 'Technical guide to seal your first fact',
    },
    {
      href: '/docs/verification',
      title: lang === 'fr' ? 'Vérification' : 'Verification',
      description: lang === 'fr'
        ? 'Comment vérifier l\'intégrité des preuves'
        : 'How to verify proof integrity',
    },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Header />

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {lang === 'fr' ? 'Documentation' : 'Documentation'}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
            {lang === 'fr'
              ? 'Guides techniques pour intégrer et utiliser Horizon.'
              : 'Technical guides for integrating and using Horizon.'}
          </p>

          <div className="space-y-6">
            {docs.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                className="block p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-[#1A5187] hover:bg-gray-50 dark:hover:bg-slate-800 transition-all group"
              >
                <h2 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-[#1A5187] dark:group-hover:text-blue-400 mb-2">
                  {item.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
