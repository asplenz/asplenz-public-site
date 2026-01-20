'use client'

import Link from 'next/link'
import { useLang } from '@/lib/LangContext'
import { getContent } from '@/lib/content'
import Header from '../../components/Header'

export default function ConceptualReferencePage() {
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
            {t.conceptualReference.backToHub}
          </Link>

          <p className="text-sm font-semibold text-[#1A5187] uppercase tracking-wider mb-2">
            {t.conceptualReference.docType}
          </p>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            {t.conceptualReference.title}
          </h1>

          <p className="text-xl text-gray-600 mb-4">
            {t.conceptualReference.subtitle}
          </p>

          <p className="text-lg text-[#1A5187] font-medium italic mb-12">
            {t.conceptualReference.tagline}
          </p>

          <div className="space-y-12">
            {t.conceptualReference.sections.map((section, idx) => (
              <section key={idx}>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {section.title}
                </h2>

                {'subtitle' in section && section.subtitle && (
                  <h3 className="text-lg font-semibold text-[#1A5187] mb-4">
                    {section.subtitle}
                  </h3>
                )}

                {'content' in section && section.content && (
                  <div className="text-gray-700 mb-6">
                    {section.content.split('\n\n').map((paragraph, pIdx) => (
                      <p key={pIdx} className="mb-4">
                        {renderMarkdown(paragraph)}
                      </p>
                    ))}
                  </div>
                )}

                {'points' in section && section.points && (
                  <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                    {section.points.map((point, pointIdx) => (
                      <li key={pointIdx}>{point}</li>
                    ))}
                  </ul>
                )}

                {'conclusion' in section && section.conclusion && (
                  <p className="text-gray-700 mt-4">
                    {renderMarkdown(section.conclusion)}
                  </p>
                )}

                {'propertiesTitle' in section && section.propertiesTitle && (
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      {section.propertiesTitle}
                    </h3>
                    {'properties' in section && section.properties && (
                      <div className="grid gap-3">
                        {section.properties.map((prop, propIdx) => (
                          <div key={propIdx} className="p-3 bg-gray-50 border border-gray-200 rounded-lg border-l-4 border-l-[#1A5187]">
                            <span className="font-semibold text-[#1A5187]">{prop.name}</span>
                            <span className="text-gray-700"> – {prop.description}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    {'note' in section && section.note && (
                      <blockquote className="mt-4 border-l-4 border-gray-300 pl-4 py-2 bg-gray-50 rounded-r-lg">
                        <p className="text-sm text-gray-600 italic">
                          {section.note}
                        </p>
                      </blockquote>
                    )}
                  </div>
                )}

                {'comparisonTable' in section && section.comparisonTable && (
                  <div className="overflow-x-auto mt-6">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-[#1A5187] text-white">
                          {section.comparisonTable.headers.map((header, hIdx) => (
                            <th key={hIdx} className="px-4 py-3 text-left font-semibold text-sm">
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {section.comparisonTable.rows.map((row, rowIdx) => (
                          <tr key={rowIdx} className={rowIdx % 2 === 0 ? 'bg-white' : 'bg-gray-100'}>
                            {row.map((cell, cellIdx) => (
                              <td key={cellIdx} className="px-4 py-3 border-b border-gray-200 text-gray-700 text-sm">
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {'definitions' in section && section.definitions && (
                  <div className="grid gap-3 mt-4">
                    {section.definitions.map((def, defIdx) => (
                      <div key={defIdx} className="p-3 bg-gray-50 border border-gray-200 rounded-lg">
                        <span className="font-semibold text-[#1A5187]">{def.term}</span>
                        <span className="text-gray-700"> – {def.definition}</span>
                      </div>
                    ))}
                  </div>
                )}

                {'boundaries' in section && section.boundaries && (
                  <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                    {section.boundaries.map((boundary, bIdx) => (
                      <li key={bIdx}>{boundary}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            <section className="border-t border-gray-200 pt-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {t.conceptualReference.conclusion.title}
              </h2>
              <div className="text-gray-700">
                {t.conceptualReference.conclusion.content.split('\n\n').map((paragraph, pIdx) => (
                  <p key={pIdx} className="mb-4">
                    {renderMarkdown(paragraph)}
                  </p>
                ))}
              </div>
            </section>

            <section className="bg-[#1A5187]/5 border border-[#1A5187]/20 rounded-lg p-6">
              <h2 className="text-xl font-bold text-[#1A5187] mb-3">
                {t.conceptualReference.nextStep.title}
              </h2>
              <p className="text-gray-700">
                {t.conceptualReference.nextStep.content}
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
              {t.conceptualReference.backToHub}
            </Link>
          </div>
        </div>
      </main>

      <footer className="py-8 px-6 border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto text-center text-sm text-gray-600">
          <p>&copy; 2025 Horizon by Asplenz. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
