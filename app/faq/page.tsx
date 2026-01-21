'use client'

import Link from 'next/link'
import { useLang } from '@/lib/LangContext'
import { getContent } from '@/lib/content'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function FAQPage() {
  const { lang } = useLang()
  const t = getContent(lang)

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#1A5187] hover:underline mb-8"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {t.faq.backToHome}
          </Link>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            {t.faq.title}
          </h1>

          <p className="text-xl text-gray-600 mb-12">
            {t.faq.subtitle}
          </p>

          <div className="space-y-12">
            {t.faq.categories.map((category: { name: string; questions: { q: string; a: string }[] }, catIdx: number) => (
              <section key={catIdx}>
                <h2 className="text-xl font-semibold text-[#1A5187] mb-6 pb-2 border-b border-gray-200">
                  {category.name}
                </h2>

                <div className="space-y-6">
                  {category.questions.map((item: { q: string; a: string }, qIdx: number) => (
                    <div key={qIdx} className="group">
                      <h3 className="font-semibold text-gray-900 mb-2">
                        {item.q}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {item.a}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 p-8 bg-[#1A5187]/5 rounded-lg border border-[#1A5187]/20 text-center">
            <Link
              href={t.faq.cta?.href || '/contact'}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#1A5187] text-white font-medium rounded-lg hover:bg-[#143d66] transition-colors"
            >
              {t.faq.cta?.text || 'Contact us'}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[#1A5187] hover:underline"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              {t.faq.backToHome}
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
