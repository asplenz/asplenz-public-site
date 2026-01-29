'use client'

import { useLang } from '@/lib/LangContext'
import { getContent } from '@/lib/content'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import PageNav from '../../components/PageNav'

export default function ProblemPage() {
  const { lang } = useLang()
  const t = getContent(lang)
  const content = t.theProblem

  if (!content) return null

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            {content.title}
          </h1>

          <div className="space-y-10">
            {content.sections.map((section: { title: string; content: string }, idx: number) => (
              <section key={idx}>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h2>
                <p className="text-gray-700 leading-relaxed">{section.content}</p>
              </section>
            ))}
          </div>

          {content.closingLine && (
            <p className="mt-12 text-lg text-gray-600 italic">
              {content.closingLine}
            </p>
          )}

          <PageNav current="/foundations/problem" />
        </div>
      </main>

      <Footer />
    </div>
  )
}
