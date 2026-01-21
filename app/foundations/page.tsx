'use client'

import Link from 'next/link'
import { useLang } from '@/lib/LangContext'
import { getContent } from '@/lib/content'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function FoundationsOverviewPage() {
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

  const content = t.hub

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

          <div className="border-l-4 border-[#1A5187] pl-6 mb-12">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-3">
              {content.label}
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              {content.title}
            </h1>
            <p className="text-lg text-gray-600 italic">
              {content.subtitle}
            </p>
          </div>

          <hr className="border-gray-200 my-8" />

          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {content.introduction?.title}
            </h2>
            <p className="text-gray-700 mb-4">
              {content.introduction?.content}
            </p>
            <p className="text-gray-700">
              {renderMarkdown(content.introduction?.conclusion || '')}
            </p>
          </section>

          <hr className="border-gray-200 my-8" />

          {/* What the Foundations Cover */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {content.whatCovered?.title}
            </h2>
            <p className="text-gray-700 mb-6">
              {content.whatCovered?.intro}
            </p>
            <div className="space-y-4">
              {content.whatCovered?.points?.map((point: { title: string; description: string }, idx: number) => (
                <div key={idx} className="flex gap-3">
                  <span className="text-[#1A5187] mt-1">•</span>
                  <div>
                    <span className="font-semibold text-gray-900">{point.title}:</span>{' '}
                    <span className="text-gray-700">{point.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <hr className="border-gray-200 my-8" />

          {/* DOI Category */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {content.doiCategory?.title}
            </h2>
            <p className="text-gray-700 mb-4">
              {renderMarkdown(content.doiCategory?.content || '')}
            </p>
            <p className="text-gray-700 mb-6">
              {content.doiCategory?.description}
            </p>
            <blockquote className="border-l-4 border-[#1A5187] pl-6 py-3 text-gray-800 bg-gray-50 rounded-r-lg font-medium">
              {content.doiCategory?.quote}
            </blockquote>
          </section>

          <hr className="border-gray-200 my-8" />

          {/* Three Pillars */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {content.pillars?.title}
            </h2>
            <p className="text-gray-700 mb-8">
              {content.pillars?.intro}
            </p>

            <div className="space-y-6">
              {content.pillars?.items?.map((pillar: { number: string; title: string; description: string; linkText: string; href: string; comingSoon?: boolean }, idx: number) => (
                <div
                  key={idx}
                  className={`p-6 rounded-lg border ${
                    pillar.comingSoon
                      ? 'bg-gray-50 border-gray-200'
                      : 'bg-white border-gray-200 hover:border-[#1A5187] hover:shadow-md transition-all'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg ${
                      pillar.comingSoon
                        ? 'bg-gray-300 text-gray-600'
                        : 'bg-[#1A5187] text-white'
                    }`}>
                      {pillar.number}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {pillar.title}
                      </h3>
                      <p className="text-gray-700 mb-4 italic">
                        {pillar.description}
                      </p>
                      {pillar.comingSoon ? (
                        <span className="inline-flex items-center gap-2 text-gray-500 font-medium">
                          {pillar.linkText}
                          <span className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded">
                            {lang === 'en' ? 'Coming Soon' : 'Prochainement'}
                          </span>
                        </span>
                      ) : (
                        <Link
                          href={pillar.href}
                          className="inline-flex items-center gap-2 text-[#1A5187] font-medium hover:underline"
                        >
                          {pillar.linkText}
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <hr className="border-gray-200 my-8" />

          {/* Implementation */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {content.implementation?.title}
            </h2>
            <p className="text-gray-700">
              {content.implementation?.content}
            </p>
          </section>

          <hr className="border-gray-200 my-8" />

          {/* Additional Resources */}
          {content.additionalResources && (
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {content.additionalResources.title}
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {content.additionalResources.items?.map((item: { title: string; description: string; href: string }, idx: number) => (
                  <Link
                    key={idx}
                    href={item.href}
                    className="p-4 bg-gray-50 border border-gray-200 rounded-lg hover:border-[#1A5187] hover:shadow-md transition-all group"
                  >
                    <h3 className="font-semibold text-gray-900 group-hover:text-[#1A5187] mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {item.description}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          )}

          <div className="mt-16 pt-8 border-t border-gray-200">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[#1A5187] hover:underline"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              {content.backToHome}
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
