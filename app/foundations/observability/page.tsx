'use client'

import Link from 'next/link'
import { useLang } from '@/lib/LangContext'
import { getContent } from '@/lib/content'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function ObservabilityPage() {
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

  const content = t.observability

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

          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {content?.transition?.title}
            </h2>
            <p className="text-gray-700 mb-4">
              {renderMarkdown(content?.transition?.content || '')}
            </p>
            <p className="text-gray-800 bg-[#1A5187]/5 border-l-4 border-[#1A5187] pl-4 py-2 mb-4">
              {renderMarkdown(content?.transition?.emphasis || '')}
            </p>
            {content?.transition?.guardrail && (
              <p className="text-gray-900 font-semibold bg-amber-50 border-l-4 border-amber-400 pl-4 py-2">
                {renderMarkdown(content?.transition?.guardrail || '')}
              </p>
            )}
          </section>

          {/* Layer Separation */}
          {content?.layerSeparation && (
            <section className="mb-8 p-4 bg-gray-50 border border-gray-200 rounded-lg">
              <div className="space-y-2">
                <p className="text-gray-800">
                  <span className="font-semibold text-[#1A5187]">•</span> {content?.layerSeparation?.layer1}
                </p>
                <p className="text-gray-800">
                  <span className="font-semibold text-amber-600">•</span> {content?.layerSeparation?.layer2}
                </p>
              </div>
            </section>
          )}

          <hr className="border-gray-200 my-8" />

          {/* Layer 1: Decision Observability */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {content?.layer1?.title}
            </h2>
            <p className="text-lg text-[#1A5187] font-medium mb-4">
              {content?.layer1?.subtitle}
            </p>
            <p className="text-gray-700 mb-6">
              {renderMarkdown(content?.layer1?.intro || '')}
            </p>

            <div className="space-y-4">
              {content?.layer1?.points?.map((point: { title: string; text: string }, idx: number) => (
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

          {/* Layer 2: Decision Intelligence */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {content?.layer2?.title}
            </h2>
            <p className="text-lg text-[#1A5187] font-medium mb-4">
              {content?.layer2?.subtitle}
            </p>
            <p className="text-gray-700 mb-6">
              {renderMarkdown(content?.layer2?.intro || '')}
            </p>

            <div className="space-y-4">
              {content?.layer2?.points?.map((point: { title: string; text: string }, idx: number) => (
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

          {/* The Golden Rule */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {content?.goldenRule?.title}
            </h2>
            <p className="text-gray-700 mb-6">
              {content?.goldenRule?.content}
            </p>
            <div className="space-y-4">
              {content?.goldenRule?.points?.map((point: { title: string; text: string }, idx: number) => (
                <div key={idx} className="flex gap-3">
                  <span className="text-[#1A5187] mt-1">•</span>
                  <div>
                    <span className="font-semibold text-gray-900">{point.title}:</span>{' '}
                    <span className="text-gray-700">{renderMarkdown(point.text)}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <hr className="border-gray-200 my-8" />

          {/* Conclusion */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {content?.conclusion?.title}
            </h2>
            <blockquote className="border-l-4 border-[#1A5187] pl-6 py-4 bg-[#1A5187]/5 rounded-r-lg">
              <p className="text-gray-800">
                {renderMarkdown(content?.conclusion?.content || '')}
              </p>
            </blockquote>
          </section>

          {/* CTAs */}
          <div className="mt-12 grid md:grid-cols-2 gap-4">
            <div className="p-6 bg-[#1A5187]/5 border border-[#1A5187]/20 rounded-lg">
              <p className="text-gray-700 mb-3">{content?.cta?.text}</p>
              <Link
                href={content?.cta?.href || '/faq'}
                className="inline-flex items-center gap-2 text-[#1A5187] font-semibold hover:underline"
              >
                {content?.cta?.linkText}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="p-6 bg-amber-50 border border-amber-200 rounded-lg">
              <p className="text-gray-700 mb-3">{content?.ctaSecondary?.text}</p>
              <Link
                href={content?.ctaSecondary?.href || '/executive-briefing'}
                className="inline-flex items-center gap-2 text-amber-700 font-semibold hover:underline"
              >
                {content?.ctaSecondary?.linkText}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
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
