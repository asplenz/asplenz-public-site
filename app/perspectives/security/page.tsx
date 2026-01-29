'use client'

import Link from 'next/link'
import { useLang } from '@/lib/LangContext'
import { getContent } from '@/lib/content'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function SecurityPage() {
  const { lang } = useLang()
  const t = getContent(lang)
  const content = t.securityPage

  if (!content) return null

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Header />

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Title & Subtitle */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {content.title}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
            {content.subtitle}
          </p>

          {/* Reality */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {content.reality.title}
            </h2>
            <div className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
              {content.reality.content}
            </div>
          </section>

          {/* Where Horizon Fits */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {content.fit.title}
            </h2>
            <div className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
              {content.fit.content}
            </div>
          </section>

          {/* What Horizon Provides */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {content.provides.title}
            </h2>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-4">
              {content.provides.bullets.map((bullet: string, idx: number) => (
                <li key={idx}>{bullet}</li>
              ))}
            </ul>
            <p className="text-gray-700 dark:text-gray-300">{content.provides.nothingMore}</p>
          </section>

          {/* What Horizon Does Not Do */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {content.doesNot.title}
            </h2>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-4">
              {content.doesNot.bullets.map((bullet: string, idx: number) => (
                <li key={idx}>{bullet}</li>
              ))}
            </ul>
            <p className="text-gray-700 dark:text-gray-300 font-medium">{content.doesNot.closing}</p>
          </section>

          {/* After Incident */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {content.afterIncident.title}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">{content.afterIncident.intro}</p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-4">
              {content.afterIncident.bullets.map((bullet: string, idx: number) => (
                <li key={idx}>{bullet}</li>
              ))}
            </ul>
            <p className="text-gray-700 dark:text-gray-300">{content.afterIncident.closing}</p>
          </section>

          {/* Why This Matters */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {content.whyMatters.title}
            </h2>
            <div className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
              {content.whyMatters.content}
            </div>
          </section>

          {/* What Horizon Changes */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {content.changes.title}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                  {lang === 'en' ? 'Before Horizon:' : 'Avant Horizon :'}
                </h3>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                  {content.changes.before.map((item: string, idx: number) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                  {lang === 'en' ? 'With Horizon:' : 'Avec Horizon :'}
                </h3>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                  {content.changes.after.map((item: string, idx: number) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Next CTA */}
          <section className="mt-12 p-6 bg-gray-50 dark:bg-slate-800 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              {content.next.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {content.next.description}
            </p>
            <Link
              href={content.next.href}
              className="inline-block px-6 py-3 bg-[#1A5187] text-white font-medium rounded hover:bg-[#143d66] transition-all"
            >
              {content.next.title}
            </Link>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
