'use client'

import Link from 'next/link'
import { useLang } from '@/lib/LangContext'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function FoundationsPage() {
  const { lang } = useLang()

  const foundations = [
    {
      href: '/foundations/problem',
      title: lang === 'fr' ? 'Le Problème' : 'The Problem',
      description: lang === 'fr'
        ? 'Pourquoi la preuve post-incident échoue'
        : 'Why post-incident proof fails',
    },
    {
      href: '/foundations/shift',
      title: lang === 'fr' ? 'Le Basculement' : 'The Shift',
      description: lang === 'fr'
        ? 'De la reconstruction aux faits scellés'
        : 'From reconstruction to sealed facts',
    },
    {
      href: '/foundations/horizon',
      title: 'Horizon',
      description: lang === 'fr'
        ? "L'infrastructure de preuve"
        : 'The proof infrastructure',
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {lang === 'fr' ? 'Fondations' : 'Foundations'}
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            {lang === 'fr'
              ? 'La thèse sur laquelle repose Horizon.'
              : 'The thesis on which Horizon is built.'}
          </p>

          <div className="space-y-6">
            {foundations.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                className="block p-6 border border-gray-200 rounded-lg hover:border-[#1A5187] hover:bg-gray-50 transition-all group"
              >
                <h2 className="text-xl font-bold text-gray-900 group-hover:text-[#1A5187] mb-2">
                  {item.title}
                </h2>
                <p className="text-gray-600">
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
