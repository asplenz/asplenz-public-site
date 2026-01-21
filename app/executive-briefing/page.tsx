'use client'

import Link from 'next/link'
import { useLang } from '@/lib/LangContext'
import { getContent } from '@/lib/content'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function ExecutiveBriefingPage() {
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

  const content = t.executiveBriefing

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
            {content?.backToHome}
          </Link>

          {/* Header with strategic note styling */}
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

          {/* Executive Summary */}
          <section className="mb-12 bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              {content?.executiveSummary?.title}
            </h2>
            <p className="text-gray-700 mb-4">
              {content?.executiveSummary?.content}
            </p>
            <p className="text-gray-900 font-semibold">
              {renderMarkdown(content?.executiveSummary?.conclusion || '')}
            </p>
          </section>

          <hr className="border-gray-200 my-8" />

          {/* 1. The Risk */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {content?.risk?.title}
            </h2>
            <p className="text-gray-700 mb-6">
              {content?.risk?.intro}
            </p>

            <div className="space-y-4">
              {content?.risk?.points?.map((point: { title: string; text: string }, idx: number) => (
                <div key={idx} className="flex gap-3 bg-red-50 p-4 rounded-lg border border-red-100">
                  <span className="text-red-600 mt-1 font-bold">•</span>
                  <div>
                    <span className="font-semibold text-red-800">{point.title}:</span>{' '}
                    <span className="text-gray-700">{point.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <hr className="border-gray-200 my-8" />

          {/* 2. The Solution */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {content?.solution?.title}
            </h2>
            <p className="text-gray-700 mb-6">
              {renderMarkdown(content?.solution?.intro || '')}
            </p>

            <div className="space-y-4">
              {content?.solution?.points?.map((point: { title: string; text: string }, idx: number) => (
                <div key={idx} className="flex gap-3 bg-green-50 p-4 rounded-lg border border-green-100">
                  <span className="text-green-600 mt-1 font-bold">•</span>
                  <div>
                    <span className="font-semibold text-green-800">{point.title}:</span>{' '}
                    <span className="text-gray-700">{point.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <hr className="border-gray-200 my-8" />

          {/* 3. Strategic Recommendation */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {content?.recommendation?.title}
            </h2>
            <blockquote className="border-l-4 border-[#1A5187] pl-6 py-4 bg-[#1A5187]/5 rounded-r-lg">
              <p className="text-gray-800 text-lg">
                {renderMarkdown(content?.recommendation?.content || '')}
              </p>
            </blockquote>
          </section>

          {/* CTA */}
          <div className="mt-12 p-6 bg-[#1A5187] text-white rounded-lg text-center">
            <p className="text-white/90 mb-4">{content?.cta?.text}</p>
            <Link
              href={content?.cta?.href || '/contact'}
              className="inline-flex items-center gap-2 bg-white text-[#1A5187] font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {content?.cta?.linkText}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-200">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[#1A5187] hover:underline"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              {content?.backToHome}
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
