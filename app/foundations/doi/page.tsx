'use client'

import Link from 'next/link'
import { useLang } from '@/lib/LangContext'
import { getContent } from '@/lib/content'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function DOIPage() {
  const { lang } = useLang()
  const t = getContent(lang)

  const renderMarkdown = (text: string) => {
    return text
      .split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g)
      .map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={i} className="text-[#1A5187]">{part.slice(2, -2)}</strong>
        }
        if (part.startsWith('*') && part.endsWith('*')) {
          return <em key={i}>{part.slice(1, -1)}</em>
        }
        return part
      })
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/foundations"
            className="inline-flex items-center gap-2 text-[#1A5187] hover:underline mb-8"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {t.foundations.backToHome}
          </Link>

          <p className="text-sm font-semibold text-[#1A5187] uppercase tracking-wider mb-2">
            {t.foundations.docType} | {lang === 'en' ? 'Part 1' : 'Partie 1'}
          </p>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t.foundations.title}
          </h1>

          <p className="text-xl text-gray-600 mb-8">
            {t.foundations.subtitle}
          </p>

          <blockquote className="border-l-4 border-[#1A5187] pl-6 py-4 mb-12 bg-gray-50 rounded-r-lg">
            <p className="text-lg italic text-gray-700">
              {t.foundations.axiom}
            </p>
          </blockquote>

          <div className="space-y-12">
            {t.foundations.sections.map((section, idx) => (
              <section key={idx} className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {section.title}
                </h2>

                <div className="text-gray-700 whitespace-pre-line mb-6">
                  {section.content.split('\n\n').map((paragraph, pIdx) => (
                    <p key={pIdx} className="mb-4">
                      {renderMarkdown(paragraph)}
                    </p>
                  ))}
                </div>

                {'pillars' in section && section.pillars && (
                  <div className="mt-6">
                    <h3 className="text-xl font-semibold text-[#1A5187] mb-4">
                      {section.pillars.title}
                    </h3>
                    <div className="grid gap-4">
                      {section.pillars.items.map((item, itemIdx) => (
                        <div key={itemIdx} className="p-4 bg-gray-50 border border-gray-200 rounded-lg border-l-4 border-l-[#1A5187]">
                          <h4 className="font-semibold text-[#1A5187] mb-1">{item.name}</h4>
                          <p className="text-gray-700 text-sm">{renderMarkdown(item.description)}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {'dimensions' in section && section.dimensions && (
                  <div className="mt-6 grid gap-4">
                    {section.dimensions.map((dim, dimIdx) => (
                      <div key={dimIdx} className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-1">{dim.name}</h4>
                        <p className="text-gray-700 text-sm">{dim.description}</p>
                      </div>
                    ))}
                  </div>
                )}

                {'forces' in section && section.forces && (
                  <div className="mt-6 grid gap-4">
                    {section.forces.map((force, forceIdx) => (
                      <div key={forceIdx} className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-1">{force.name}</h4>
                        <p className="text-gray-700 text-sm">{force.description}</p>
                      </div>
                    ))}
                  </div>
                )}
              </section>
            ))}

            <section className="border-t border-gray-200 pt-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {t.foundations.conclusion.title}
              </h2>
              <p className="text-gray-700 text-lg">
                {renderMarkdown(t.foundations.conclusion.content)}
              </p>
            </section>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-200">
            <Link
              href="/foundations"
              className="inline-flex items-center gap-2 text-[#1A5187] hover:underline"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              {t.foundations.backToHome}
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
