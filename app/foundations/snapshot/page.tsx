'use client'

import Link from 'next/link'
import { useLang } from '@/lib/LangContext'
import { getContent } from '@/lib/content'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function SnapshotPage() {
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

  const content = t.snapshot

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

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            {content?.title}
          </h1>

          <p className="text-xl text-gray-600 mb-12">
            {content?.subtitle}
          </p>

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
              {renderMarkdown(content?.introduction?.explanation || '')}
            </p>
            <p className="text-gray-700">
              {content?.introduction?.conclusion}
            </p>
          </section>

          <hr className="border-gray-200 my-8" />

          {/* Logical Structure: The Cryptographic Onion */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {content?.structure?.title}
            </h2>
            <p className="text-gray-700 mb-6">
              {content?.structure?.intro}
            </p>

            {/* Mermaid-style diagram representation */}
            <div className="flex flex-col items-center mb-8 p-6 bg-gray-50 rounded-lg">
              <div className="w-64 text-center">
                <div className="bg-[#f9f] border-2 border-gray-800 rounded-lg p-4 mb-2">
                  <span className="font-semibold text-gray-900">
                    {lang === 'en' ? 'Integrity Seal' : 'Sceau d\'Intégrité'}
                  </span>
                </div>
                <div className="text-gray-400 text-2xl mb-2">↓</div>
                <div className="bg-[#ccf] border-2 border-gray-800 rounded-lg p-4 mb-2">
                  <span className="font-semibold text-gray-900">
                    {lang === 'en' ? 'Context Envelope' : 'Enveloppe de Contexte'}
                  </span>
                </div>
                <div className="text-gray-400 text-2xl mb-2">↓</div>
                <div className="bg-[#ff9] border-2 border-gray-800 rounded-lg p-4">
                  <span className="font-semibold text-gray-900">
                    {lang === 'en' ? 'Business Payload' : 'Payload Métier'}
                  </span>
                </div>
              </div>
            </div>

            {/* Layer descriptions */}
            <div className="space-y-8">
              {content?.structure?.layers?.map((layer: { id: string; name: string; subtitle: string; points: { title: string; text: string }[] }, idx: number) => (
                <div key={idx} className="border-l-4 border-[#1A5187] pl-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {lang === 'en' ? 'Layer' : 'Couche'} {layer.id}: {layer.name} <span className="font-normal text-gray-600">({layer.subtitle})</span>
                  </h3>
                  <div className="space-y-3">
                    {layer.points?.map((point: { title: string; text: string }, pIdx: number) => (
                      <div key={pIdx} className="flex gap-3">
                        <span className="text-[#1A5187] mt-1">•</span>
                        <div>
                          <span className="font-semibold text-gray-900">{point.title}:</span>{' '}
                          <span className="text-gray-700">{point.text}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <hr className="border-gray-200 my-8" />

          {/* Key Technical Properties */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {content?.properties?.title}
            </h2>

            <div className="space-y-8">
              {content?.properties?.items?.map((item: { title: string; description: string; outcome?: string; security?: string }, idx: number) => (
                <div key={idx}>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 mb-3">
                    {item.description}
                  </p>
                  {(item.outcome || item.security) && (
                    <div className="space-y-2 ml-4">
                      {item.outcome && (
                        <div className="flex gap-3">
                          <span className="text-[#1A5187] mt-1">•</span>
                          <div>
                            <span className="font-semibold text-gray-900">{lang === 'en' ? 'Outcome' : 'Résultat'}:</span>{' '}
                            <span className="text-gray-700">{item.outcome}</span>
                          </div>
                        </div>
                      )}
                      {item.security && (
                        <div className="flex gap-3">
                          <span className="text-[#1A5187] mt-1">•</span>
                          <div>
                            <span className="font-semibold text-gray-900">{lang === 'en' ? 'Security' : 'Sécurité'}:</span>{' '}
                            <span className="text-gray-700">{item.security}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          <hr className="border-gray-200 my-8" />

          {/* The Verification Model */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {content?.verification?.title}
            </h2>
            <p className="text-gray-700 mb-6">
              {content?.verification?.intro}
            </p>

            <div className="space-y-4 bg-gray-50 p-6 rounded-lg">
              {content?.verification?.steps?.map((step: { number: string; title: string; text: string }, idx: number) => (
                <div key={idx} className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-[#1A5187] text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {step.number}
                  </span>
                  <div>
                    <span className="font-semibold text-gray-900">{step.title}:</span>{' '}
                    <span className="text-gray-700">{step.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="mt-12 p-6 bg-[#1A5187]/5 border border-[#1A5187]/20 rounded-lg">
            <p className="text-gray-700 mb-4">{content?.cta?.text}</p>
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
