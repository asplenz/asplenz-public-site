'use client'

import Link from 'next/link'
import { useLang } from '@/lib/LangContext'
import { getContent } from '@/lib/content'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function CreditIllustrativeScenarioPage() {
  const { lang } = useLang()
  const t = getContent(lang)

  const renderMarkdown = (text: string) => {
    return text
      .split(/(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`)/g)
      .map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={i} className="font-bold text-gray-900">{part.slice(2, -2)}</strong>
        }
        if (part.startsWith('*') && part.endsWith('*')) {
          return <em key={i} className="italic">{part.slice(1, -1)}</em>
        }
        if (part.startsWith('`') && part.endsWith('`')) {
          return <code key={i} className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono text-[#1A5187]">{part.slice(1, -1)}</code>
        }
        return part
      })
  }

  const content = t.creditIllustrativeScenario

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
            {content.backToHome}
          </Link>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            {content.title}
          </h1>

          <p className="text-xl text-gray-600 mb-12">
            {content.subtitle}
          </p>

          {/* Context Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {content.context.title}
            </h2>
            <p className="text-gray-700 mb-4">
              {renderMarkdown(content.context.content)}
            </p>
            <p className="text-gray-700">
              {renderMarkdown(content.context.event)}
            </p>
          </section>

          <hr className="border-gray-200 my-12" />

          {/* Scenario A - Without Horizon */}
          <section className="mb-12">
            <div className="p-6 bg-red-50 border border-red-200 rounded-lg">
              <h2 className="text-2xl font-bold text-red-800 mb-4">
                {content.scenarioA.title}
              </h2>
              <p className="text-gray-700 mb-6">
                {renderMarkdown(content.scenarioA.intro)}
              </p>

              <div className="space-y-4 mb-6">
                {content.scenarioA.steps.map((step: { title: string; text: string }, idx: number) => (
                  <div key={idx} className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-red-200 text-red-800 rounded-full flex items-center justify-center text-sm font-semibold">
                      {idx + 1}
                    </span>
                    <div>
                      <h3 className="font-semibold text-gray-900">{step.title}</h3>
                      <p className="text-gray-700 text-sm mt-1">{renderMarkdown(step.text)}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-white/50 rounded p-4 space-y-2">
                <p className="text-gray-800">
                  <span className="font-semibold">{lang === 'en' ? 'Total Cost:' : 'Coût Total :'}</span> {content.scenarioA.cost}
                </p>
                <p className="text-red-800 font-semibold">
                  <span className="font-semibold">{lang === 'en' ? 'Result:' : 'Résultat :'}</span> {content.scenarioA.result}
                </p>
              </div>
            </div>
          </section>

          <hr className="border-gray-200 my-12" />

          {/* Scenario B - With Horizon */}
          <section className="mb-12">
            <div className="p-6 bg-green-50 border border-green-200 rounded-lg">
              <h2 className="text-2xl font-bold text-green-800 mb-4">
                {content.scenarioB.title}
              </h2>
              <p className="text-gray-700 mb-6">
                {renderMarkdown(content.scenarioB.intro)}
              </p>

              <div className="space-y-4 mb-6">
                {content.scenarioB.steps.map((step: { title: string; text: string }, idx: number) => (
                  <div key={idx} className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-green-200 text-green-800 rounded-full flex items-center justify-center text-sm font-semibold">
                      {idx + 1}
                    </span>
                    <div>
                      <h3 className="font-semibold text-gray-900">{step.title}</h3>
                      <p className="text-gray-700 text-sm mt-1">{renderMarkdown(step.text)}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-white/50 rounded p-4 space-y-2">
                <p className="text-gray-800">
                  <span className="font-semibold">{lang === 'en' ? 'Total Cost:' : 'Coût Total :'}</span> {content.scenarioB.cost}
                </p>
                <p className="text-green-800 font-semibold">
                  <span className="font-semibold">{lang === 'en' ? 'Result:' : 'Résultat :'}</span> {content.scenarioB.result}
                </p>
              </div>
            </div>
          </section>

          <hr className="border-gray-200 my-12" />

          {/* Comparison Table */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {content.comparison.title}
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    {content.comparison.headers.map((header: string, idx: number) => (
                      <th
                        key={idx}
                        className={`p-3 text-left font-semibold border-b-2 border-gray-300 ${
                          idx === 0 ? 'bg-gray-50' : idx === 1 ? 'bg-red-50 text-red-800' : 'bg-green-50 text-green-800'
                        }`}
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {content.comparison.rows.map((row: string[], rowIdx: number) => (
                    <tr key={rowIdx} className="border-b border-gray-200">
                      {row.map((cell: string, cellIdx: number) => (
                        <td
                          key={cellIdx}
                          className={`p-3 ${
                            cellIdx === 0 ? 'font-semibold text-gray-900 bg-gray-50' :
                            cellIdx === 1 ? 'text-gray-700 bg-red-50/50' :
                            'text-gray-700 bg-green-50/50'
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
          </section>

          <hr className="border-gray-200 my-12" />

          {/* Conclusion */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {content.conclusion.title}
            </h2>
            <p className="text-gray-700 mb-4">
              {renderMarkdown(content.conclusion.content)}
            </p>
            <blockquote className="border-l-4 border-[#1A5187] pl-6 py-3 text-gray-800 bg-gray-50 rounded-r-lg">
              {renderMarkdown(content.conclusion.statement)}
            </blockquote>
          </section>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mt-12">
            <Link
              href={content.ctas.snapshotHref}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#1A5187] text-white font-medium rounded-lg hover:bg-[#143d66] transition-colors"
            >
              {content.ctas.snapshot}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href={content.ctas.contactHref}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-[#1A5187] text-[#1A5187] font-medium rounded-lg hover:bg-[#1A5187]/5 transition-colors"
            >
              {content.ctas.contact}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* FAQ Link */}
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              {content.faqLink?.text}{' '}
              <Link
                href={content.faqLink?.href || '/faq'}
                className="text-[#1A5187] font-medium hover:underline"
              >
                {content.faqLink?.linkText}
              </Link>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
