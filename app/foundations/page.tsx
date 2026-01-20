'use client'

import Link from 'next/link'
import { useLang } from '@/lib/LangContext'
import { getContent } from '@/lib/content'
import Header from '../components/Header'

export default function FoundationsHubPage() {
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
            href="/"
            className="inline-flex items-center gap-2 text-[#1A5187] hover:underline mb-8"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {t.hub.backToHome}
          </Link>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {t.hub.title}
          </h1>

          <p className="text-lg text-gray-700 mb-12">
            {t.hub.intro}
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mb-8">
            {t.hub.chooseEntry}
          </h2>

          <div className="grid gap-6">
            {t.hub.perspectives.map((perspective, idx) => (
              <Link
                key={idx}
                href={perspective.href}
                className="block p-6 bg-gray-50 border border-gray-200 rounded-lg hover:border-[#1A5187] hover:shadow-md transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#1A5187] text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {perspective.letter}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1 group-hover:text-[#1A5187] transition-colors">
                      {perspective.title}
                    </h3>
                    <p className="text-sm text-[#1A5187] italic mb-3">
                      {perspective.audience}
                    </p>
                    <p className="text-gray-700 mb-4">
                      {renderMarkdown(perspective.description)}
                    </p>
                    <span className="inline-flex items-center gap-2 text-[#1A5187] font-medium group-hover:underline">
                      {perspective.linkText}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
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
