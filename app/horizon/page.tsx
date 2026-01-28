'use client'

import Link from 'next/link'
import { useLang } from '@/lib/LangContext'
import { getContent } from '@/lib/content'
import Header from '../components/Header'
import Footer from '../components/Footer'
import PageNav from '../components/PageNav'

export default function HorizonPage() {
  const { lang } = useLang()
  const t = getContent(lang)
  const content = t.horizonAbout

  if (!content) return null

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            {content.title}
          </h1>
          <p className="text-xl text-[#1A5187] font-medium mb-12">
            {content.subtitle}
          </p>

          <div className="space-y-10">
            {content.sections.map((section: { title: string; content: string }, idx: number) => (
              <section key={idx}>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h2>
                <div className="text-gray-700 leading-relaxed">
                  {section.content.split('\n\n').map((paragraph: string, pIdx: number) => (
                    <p key={pIdx} className="mb-4">{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {content.proofLink && (
            <p className="mt-12 text-gray-600">
              <Link
                href="/proof-semantic"
                className="text-[#1A5187] hover:underline"
              >
                {content.proofLink}
              </Link>
            </p>
          )}

          <PageNav current="/horizon" />
        </div>
      </main>

      <Footer />
    </div>
  )
}
