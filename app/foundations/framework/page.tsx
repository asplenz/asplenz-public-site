'use client'

import Link from 'next/link'
import { useLang } from '@/lib/LangContext'
import { getContent } from '@/lib/content'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function FrameworkPage() {
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
          return <em key={i}>{part.slice(1, -1)}</em>
        }
        return part
      })
  }

  const content = t.framework

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

          {/* The Paradox of Automated Trust */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {content?.paradox?.title}
            </h2>
            <p className="text-gray-700 mb-4">
              {content?.paradox?.content}
            </p>
            <p className="text-gray-700">
              {renderMarkdown(content?.paradox?.explanation || '')}
            </p>
          </section>

          <hr className="border-gray-200 my-8" />

          {/* The Three Layers of Decision Authority */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {content?.threeLayers?.title}
            </h2>
            <p className="text-gray-700 mb-6">
              {renderMarkdown(content?.threeLayers?.intro || '')}
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    {content?.threeLayers?.headers?.map((header: string, idx: number) => (
                      <th
                        key={idx}
                        className="p-3 text-left font-semibold text-gray-900 bg-gray-100 border-b-2 border-gray-300"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {content?.threeLayers?.rows?.map((row: { layer: string; name: string; focus: string; objective: string }, idx: number) => (
                    <tr key={idx} className="border-b border-gray-200">
                      <td className="p-3 font-semibold text-[#1A5187]">{row.layer}</td>
                      <td className="p-3 font-medium text-gray-900">{row.name}</td>
                      <td className="p-3 text-gray-700 italic">{row.focus}</td>
                      <td className="p-3 text-gray-700 text-sm">{row.objective}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <hr className="border-gray-200 my-8" />

          {/* Layer 0: The Sovereign Foundation */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {content?.layer0?.title}
            </h2>
            <p className="text-gray-700 mb-6">
              {renderMarkdown(content?.layer0?.intro || '')}
            </p>

            <div className="space-y-4">
              {content?.layer0?.points?.map((point: { title: string; text: string }, idx: number) => (
                <div key={idx} className="flex gap-3">
                  <span className="text-[#1A5187] mt-1">•</span>
                  <div>
                    <span className="font-semibold text-gray-900">{point.title}:</span>{' '}
                    <span className="text-gray-700">{point.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <hr className="border-gray-200 my-8" />

          {/* The "Point of No Return" Axiom */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {content?.axiom?.title}
            </h2>
            <p className="text-gray-700 mb-4">
              {renderMarkdown(content?.axiom?.content || '')}
            </p>
            <blockquote className="border-l-4 border-[#1A5187] pl-6 py-3 text-gray-800 bg-gray-50 rounded-r-lg">
              {renderMarkdown(content?.axiom?.conclusion || '')}
            </blockquote>
          </section>

          {/* Next Part CTA */}
          <div className="mt-12 p-6 bg-[#1A5187]/5 border border-[#1A5187]/20 rounded-lg">
            <p className="text-gray-700 mb-4">{content?.nextPart?.text}:</p>
            <Link
              href={content?.nextPart?.href || '/foundations/implementation'}
              className="inline-flex items-center gap-2 text-[#1A5187] font-semibold hover:underline"
            >
              {content?.nextPart?.title}
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
