'use client'

import Link from 'next/link'
import { useLang } from '@/lib/LangContext'
import { getContent } from '@/lib/content'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function ImplementationPage() {
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

  const content = t.implementation

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

          {/* From Framework to Infrastructure */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {content?.intro?.title}
            </h2>
            <p className="text-gray-700">
              {renderMarkdown(content?.intro?.content || '')}
            </p>
          </section>

          <hr className="border-gray-200 my-8" />

          {/* The Non-Blocking Capture Pattern */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {content?.nonBlocking?.title}
            </h2>
            <p className="text-gray-700 mb-4">
              {renderMarkdown(content?.nonBlocking?.intro || '')}
            </p>
            <p className="text-gray-700 mb-6">
              {renderMarkdown(content?.nonBlocking?.explanation || '')}
            </p>

            {/* Code Example */}
            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
              <pre className="text-sm text-gray-100 font-mono whitespace-pre">
                {content?.nonBlocking?.codeExample}
              </pre>
            </div>
          </section>

          <hr className="border-gray-200 my-8" />

          {/* Deployment Archetypes */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {content?.deployment?.title}
            </h2>
            <p className="text-gray-700 mb-6">
              {renderMarkdown(content?.deployment?.intro || '')}
            </p>

            <div className="space-y-4 mb-6">
              {content?.deployment?.archetypes?.map((archetype: { title: string; text: string }, idx: number) => (
                <div key={idx} className="flex gap-3">
                  <span className="text-[#1A5187] mt-1">•</span>
                  <div>
                    <span className="font-semibold text-gray-900">{archetype.title}:</span>{' '}
                    <span className="text-gray-700">{archetype.text}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[#1A5187]/5 border border-[#1A5187]/20 rounded-lg p-4">
              <p className="text-gray-800">
                <span className="font-semibold">{lang === 'en' ? 'Security Guarantee:' : 'Garantie de Sécurité :'}</span>{' '}
                {content?.deployment?.securityGuarantee}
              </p>
            </div>
          </section>

          <hr className="border-gray-200 my-8" />

          {/* The "System_Ref" Authority */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {content?.systemRef?.title}
            </h2>
            <p className="text-gray-700 mb-4">
              {renderMarkdown(content?.systemRef?.content || '')}
            </p>
            <p className="text-gray-700">
              {content?.systemRef?.conclusion}
            </p>
          </section>

          <hr className="border-gray-200 my-8" />

          {/* Passive Observation vs. Active Validation */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {content?.passive?.title}
            </h2>
            <p className="text-gray-700 mb-6">
              {renderMarkdown(content?.passive?.intro || '')}
            </p>

            <div className="space-y-4">
              {content?.passive?.points?.map((point: { title: string; text: string }, idx: number) => (
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

          {/* CTAs */}
          <div className="mt-12 grid md:grid-cols-2 gap-4">
            <div className="p-6 bg-[#1A5187]/5 border border-[#1A5187]/20 rounded-lg">
              <p className="text-gray-700 mb-3">{content?.cta?.text}</p>
              <Link
                href={content?.cta?.href || '/foundations/observability'}
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
                href={content?.ctaSecondary?.href || '/foundations/snapshot'}
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
