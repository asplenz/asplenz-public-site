'use client'

import Link from 'next/link'
import { useLang } from '@/lib/LangContext'
import { getContent } from '@/lib/content'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function HorizonPage() {
  const { lang } = useLang()
  const t = getContent(lang)

  const renderMarkdown = (text: string) => {
    return text
      .split(/(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`)/g)
      .map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={i} className="text-[#1A5187]">{part.slice(2, -2)}</strong>
        }
        if (part.startsWith('*') && part.endsWith('*')) {
          return <em key={i}>{part.slice(1, -1)}</em>
        }
        if (part.startsWith('`') && part.endsWith('`')) {
          return <code key={i} className="bg-gray-100 px-1 py-0.5 rounded text-sm font-mono text-[#1A5187]">{part.slice(1, -1)}</code>
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
            {t.horizon.backToHome}
          </Link>

          <p className="text-sm font-semibold text-[#1A5187] uppercase tracking-wider mb-2">
            {t.horizon.docType} | {t.horizon.partLabel}
          </p>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t.horizon.title}
          </h1>

          <p className="text-xl text-gray-600 mb-8">
            {t.horizon.subtitle}
          </p>

          <div className="text-lg text-gray-700 mb-12">
            {renderMarkdown(t.horizon.intro)}
          </div>

          <div className="space-y-12">
            {t.horizon.sections.map((section, idx) => (
              <section key={idx}>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {section.title}
                </h2>

                {section.content && (
                  <div className="text-gray-700 mb-6">
                    {section.content.split('\n\n').map((paragraph, pIdx) => (
                      <p key={pIdx} className="mb-4">
                        {renderMarkdown(paragraph)}
                      </p>
                    ))}
                  </div>
                )}

                {'points' in section && section.points && (
                  <div className="grid gap-4 mt-6">
                    {section.points.map((point, pointIdx) => (
                      <div key={pointIdx} className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-1">{point.name}</h4>
                        <p className="text-gray-700 text-sm">{renderMarkdown(point.description)}</p>
                      </div>
                    ))}
                  </div>
                )}

                {'codeExample' in section && section.codeExample && (
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      {section.codeExample.title}
                    </h3>
                    <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-gray-100 font-mono whitespace-pre">
                        {section.codeExample.code}
                      </pre>
                    </div>
                    <p className="mt-4 text-gray-600 text-sm italic">
                      {section.codeExample.note}
                    </p>
                  </div>
                )}

                {'integrationTable' in section && section.integrationTable && (
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      {section.integrationTable.title}
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-[#1A5187] text-white">
                            <th className="px-4 py-3 text-left font-semibold text-sm">
                              {lang === 'en' ? 'Element' : 'Élément'}
                            </th>
                            <th className="px-4 py-3 text-left font-semibold text-sm">
                              Description
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {section.integrationTable.rows.map((row, rowIdx) => (
                            <tr key={rowIdx} className={rowIdx % 2 === 0 ? 'bg-white' : 'bg-gray-100'}>
                              <td className="px-4 py-3 border-b border-gray-200 font-semibold text-gray-900 text-sm">
                                {row.element}
                              </td>
                              <td className="px-4 py-3 border-b border-gray-200 text-gray-700 text-sm">
                                {row.description}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {'evaluationNote' in section && section.evaluationNote && (
                  <blockquote className="mt-6 border-l-4 border-[#1A5187] pl-4 py-2 bg-gray-50 rounded-r-lg">
                    <p className="text-sm text-gray-700 italic">
                      <strong className="text-[#1A5187]">{lang === 'en' ? 'Note on Evaluation:' : 'Note sur l\'évaluation :'}</strong>{' '}
                      {renderMarkdown(section.evaluationNote)}
                    </p>
                  </blockquote>
                )}

                {'capabilities' in section && section.capabilities && (
                  <div className="overflow-x-auto mt-6">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-[#1A5187] text-white">
                          <th className="px-4 py-3 text-left font-semibold text-sm">
                            {lang === 'en' ? 'Capability' : 'Capacité'}
                          </th>
                          <th className="px-4 py-3 text-left font-semibold text-sm">
                            {lang === 'en' ? 'Mechanism' : 'Mécanisme'}
                          </th>
                          <th className="px-4 py-3 text-left font-semibold text-sm">
                            {lang === 'en' ? 'Outcome' : 'Résultat'}
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {section.capabilities.map((cap, capIdx) => (
                          <tr key={capIdx} className={capIdx % 2 === 0 ? 'bg-white' : 'bg-gray-100'}>
                            <td className="px-4 py-3 border-b border-gray-200 font-semibold text-gray-900 text-sm">
                              {cap.capability}
                            </td>
                            <td className="px-4 py-3 border-b border-gray-200 text-gray-700 text-sm">
                              {renderMarkdown(cap.mechanism)}
                            </td>
                            <td className="px-4 py-3 border-b border-gray-200 text-gray-700 text-sm">
                              {cap.outcome}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {'deploymentModes' in section && section.deploymentModes && (
                  <div className="grid gap-4 mt-6">
                    {section.deploymentModes.map((mode, modeIdx) => (
                      <div key={modeIdx} className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-1">{mode.name}</h4>
                        <p className="text-gray-700 text-sm">{mode.description}</p>
                      </div>
                    ))}
                  </div>
                )}

                {'sovereigntyNote' in section && section.sovereigntyNote && (
                  <div className="mt-6 p-4 bg-[#1A5187]/10 border border-[#1A5187]/30 rounded-lg">
                    <p className="text-[#1A5187] font-semibold text-sm">
                      {section.sovereigntyNote}
                    </p>
                  </div>
                )}

                {'constraints' in section && section.constraints && (
                  <div className="grid gap-4 mt-6">
                    {section.constraints.map((constraint, constraintIdx) => (
                      <div key={constraintIdx} className="p-4 bg-gray-50 border border-gray-200 rounded-lg border-l-4 border-l-[#1A5187]">
                        <h4 className="font-semibold text-[#1A5187] mb-1">{constraint.name}</h4>
                        <p className="text-gray-700 text-sm">{constraint.description}</p>
                      </div>
                    ))}
                  </div>
                )}
              </section>
            ))}
          </div>

          {/* FAQ Link */}
          <div className="mt-12 p-6 bg-gray-50 border border-gray-200 rounded-lg">
            <p className="text-gray-700 mb-2">
              {t.horizon.faqLink.text}
            </p>
            <Link
              href={t.horizon.faqLink.href}
              className="inline-flex items-center gap-2 text-[#1A5187] font-medium hover:underline"
            >
              {t.horizon.faqLink.linkText}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <Link
              href="/foundations"
              className="inline-flex items-center gap-2 text-[#1A5187] hover:underline"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              {t.horizon.backToHome}
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
