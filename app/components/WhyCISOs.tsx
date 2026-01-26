'use client'

import { useLang } from '@/lib/LangContext'
import { getContent } from '@/lib/content'

export default function WhyCISOs() {
  const { lang } = useLang()
  const t = getContent(lang)
  const content = t.whyCISOs

  if (!content) return null

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          {content.title}
        </h2>

        <ul className="space-y-4 mb-8">
          {content.bullets.map((bullet: string, idx: number) => (
            <li key={idx} className="flex items-start gap-3">
              <span className="text-[#1A5187] mt-1">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              <span className="text-lg text-gray-700">{bullet}</span>
            </li>
          ))}
        </ul>

        <p className="text-lg font-semibold text-gray-900 border-l-4 border-[#1A5187] pl-4">
          {content.footer}
        </p>
      </div>
    </section>
  )
}
