'use client'

import Link from 'next/link'
import { useLang } from '@/lib/LangContext'
import { getContent } from '@/lib/content'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function ConceptualReferencePage() {
  const { lang } = useLang()
  const t = getContent(lang)

  const renderMarkdown = (text: string) => {
    return text
      .split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g)
      .map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={i} className="font-bold text-gray-900">{part.slice(2, -2)}</strong>
        }
        if (part.startsWith('*') && part.endsWith('*')) {
          return <em key={i} className="italic">{part.slice(1, -1)}</em>
        }
        return part
      })
  }

  const content = t.conceptualReference

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Link
            href={content?.backToHubHref || '/foundations'}
            className="inline-flex items-center gap-2 text-[#1A5187] hover:underline mb-8"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {content?.backToHub}
          </Link>

          {/* Header */}
          <div className="border-l-4 border-[#1A5187] pl-6 mb-12">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-3">
              {content?.label}
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              {content?.title}
            </h1>
            <p className="text-lg text-gray-600 italic">
              {content?.subtitle}
            </p>
          </div>

          <hr className="border-gray-200 my-8" />

          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {content?.introduction?.title}
            </h2>
            <p className="text-gray-700 mb-4">
              {renderMarkdown(content?.introduction?.content || '')}
            </p>
            <p className="text-gray-700 mb-4">
              {content?.introduction?.audience}
            </p>
            <p className="text-gray-600 italic text-sm">
              {content?.introduction?.note}
            </p>
          </section>

          <hr className="border-gray-200 my-8" />

          {/* Executive Summary */}
          <section className="mb-12 bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {content?.executiveSummary?.title}
            </h2>
            <p className="text-gray-700 mb-4">
              {content?.executiveSummary?.content}
            </p>
            <p className="text-gray-700 mb-4">
              {content?.executiveSummary?.problem}
            </p>
            <p className="text-gray-700 mb-4">
              {content?.executiveSummary?.solution}
            </p>
            <p className="text-gray-800 font-medium">
              {content?.executiveSummary?.conclusion}
            </p>
          </section>

          <hr className="border-gray-200 my-8" />

          {/* Problem Statement */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {content?.problemStatement?.title}
            </h2>
            <h3 className="text-lg text-[#1A5187] font-medium mb-4">
              {content?.problemStatement?.subtitle}
            </h3>
            <p className="text-gray-700 mb-4">
              {content?.problemStatement?.intro}
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 ml-4">
              {content?.problemStatement?.consequences?.map((item: string, idx: number) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <p className="text-gray-700">
              {content?.problemStatement?.conclusion}
            </p>
          </section>

          <hr className="border-gray-200 my-8" />

          {/* Core Principle */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {content?.corePrinciple?.title}
            </h2>
            <h3 className="text-lg text-[#1A5187] font-medium mb-4">
              {content?.corePrinciple?.subtitle}
            </h3>
            <p className="text-gray-700 mb-4">
              {content?.corePrinciple?.intro}
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 ml-4">
              {content?.corePrinciple?.points?.map((item: string, idx: number) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <p className="text-gray-800 font-medium">
              {content?.corePrinciple?.conclusion}
            </p>
          </section>

          <hr className="border-gray-200 my-8" />

          {/* Decision Snapshot Artifact */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {content?.snapshotArtifact?.title}
            </h2>
            <p className="text-gray-700 mb-4">
              {renderMarkdown(content?.snapshotArtifact?.intro || '')}
            </p>
            <p className="text-gray-700 mb-6">
              {content?.snapshotArtifact?.statement}
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              {content?.snapshotArtifact?.propertiesTitle}
            </h3>
            <div className="space-y-3 mb-6">
              {content?.snapshotArtifact?.properties?.map((prop: { title: string; text: string }, idx: number) => (
                <div key={idx} className="flex gap-3">
                  <span className="text-[#1A5187] mt-1">•</span>
                  <div>
                    <span className="font-semibold text-gray-900">{prop.title}</span> – {' '}
                    <span className="text-gray-700">{prop.text}</span>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-gray-800 italic bg-amber-50 border-l-4 border-amber-400 pl-4 py-2">
              {content?.snapshotArtifact?.warning}
            </p>
          </section>

          <hr className="border-gray-200 my-8" />

          {/* Evidence vs Reconstruction */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {content?.comparison?.title}
            </h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    {content?.comparison?.headers?.map((header: string, idx: number) => (
                      <th
                        key={idx}
                        className={`p-3 text-left font-semibold border-b-2 border-gray-300 ${
                          idx === 0 ? 'bg-red-50 text-red-800' : 'bg-green-50 text-green-800'
                        }`}
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {content?.comparison?.rows?.map((row: string[], rowIdx: number) => (
                    <tr key={rowIdx} className="border-b border-gray-200">
                      {row.map((cell: string, cellIdx: number) => (
                        <td
                          key={cellIdx}
                          className={`p-3 ${
                            cellIdx === 0 ? 'text-gray-700 bg-red-50/50' : 'text-gray-700 bg-green-50/50'
                          }`}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-gray-800 font-medium">
              {content?.comparison?.conclusion}
            </p>
          </section>

          <hr className="border-gray-200 my-8" />

          {/* Automated Decisions */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {content?.automatedDecisions?.title}
            </h2>
            <p className="text-gray-700 mb-4">
              {content?.automatedDecisions?.intro}
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 ml-4">
              {content?.automatedDecisions?.elements?.map((item: string, idx: number) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <p className="text-gray-700 mb-4">
              {content?.automatedDecisions?.explanation}
            </p>
            <p className="text-gray-800 font-medium">
              {content?.automatedDecisions?.conclusion}
            </p>
          </section>

          <hr className="border-gray-200 my-8" />

          {/* Separation of Execution and Evaluation */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {content?.separation?.title}
            </h2>
            <p className="text-gray-700 mb-4">
              {content?.separation?.intro}
            </p>
            <div className="space-y-3 mb-4">
              {content?.separation?.items?.map((item: { title: string; text: string }, idx: number) => (
                <div key={idx} className="flex gap-3">
                  <span className="text-[#1A5187] mt-1">•</span>
                  <div>
                    <span className="font-semibold text-gray-900">{item.title}</span> – {' '}
                    <span className="text-gray-700">{item.text}</span>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-gray-700">
              {content?.separation?.conclusion}
            </p>
          </section>

          <hr className="border-gray-200 my-8" />

          {/* Institutional Contexts */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {content?.institutionalContexts?.title}
            </h2>
            <p className="text-gray-700 mb-4">
              {content?.institutionalContexts?.intro}
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 ml-4">
              {content?.institutionalContexts?.contexts?.map((item: string, idx: number) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <p className="text-gray-700">
              {content?.institutionalContexts?.conclusion}
            </p>
          </section>

          <hr className="border-gray-200 my-8" />

          {/* Operational Impact */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {content?.operationalImpact?.title}
            </h2>
            <p className="text-gray-700 mb-4">
              {content?.operationalImpact?.intro}
            </p>
            <p className="text-gray-700 mb-2">{lang === 'en' ? 'It reduces:' : 'Elle réduit :'}</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 ml-4">
              {content?.operationalImpact?.reduces?.map((item: string, idx: number) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <p className="text-gray-800 font-medium">
              {content?.operationalImpact?.conclusion}
            </p>
          </section>

          <hr className="border-gray-200 my-8" />

          {/* Principles and Boundaries */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {content?.principles?.title}
            </h2>
            <p className="text-gray-700 mb-4">
              {content?.principles?.intro}
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 ml-4">
              {content?.principles?.items?.map((item: string, idx: number) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <p className="text-gray-800 font-medium italic">
              {content?.principles?.conclusion}
            </p>
          </section>

          <hr className="border-gray-200 my-8" />

          {/* Availability and Adoption */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {content?.availability?.title}
            </h2>
            <p className="text-gray-700 mb-4">
              {content?.availability?.content}
            </p>
            <p className="text-gray-700">
              {content?.availability?.clarification}
            </p>
          </section>

          <hr className="border-gray-200 my-8" />

          {/* Conclusion */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {content?.conclusion?.title}
            </h2>
            <p className="text-gray-700 mb-4">
              {content?.conclusion?.problem}
            </p>
            <p className="text-gray-700 mb-4">
              {content?.conclusion?.limitation}
            </p>
            <p className="text-gray-700 mb-4">
              {content?.conclusion?.solution}
            </p>
            <blockquote className="border-l-4 border-[#1A5187] pl-6 py-4 bg-gray-50 rounded-r-lg">
              <p className="text-gray-800">
                {content?.conclusion?.final}
              </p>
            </blockquote>
          </section>

          {/* Next Step CTA */}
          <div className="mt-12 p-6 bg-[#1A5187]/5 border border-[#1A5187]/20 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              {content?.nextStep?.title}
            </h3>
            <p className="text-gray-700 mb-4">
              {content?.nextStep?.content}
            </p>
            <Link
              href={content?.nextStep?.href || '/contact'}
              className="inline-flex items-center gap-2 text-[#1A5187] font-semibold hover:underline"
            >
              {content?.nextStep?.linkText}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-200">
            <Link
              href={content?.backToHubHref || '/foundations'}
              className="inline-flex items-center gap-2 text-[#1A5187] hover:underline"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              {content?.backToHub}
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
