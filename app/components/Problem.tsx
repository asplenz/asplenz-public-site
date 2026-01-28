'use client'

import { useState } from 'react'
import { useLang } from '@/lib/LangContext'
import { getContent } from '@/lib/content'

const VISIBLE_COUNT = 3

export default function Problem() {
  const { lang } = useLang()
  const t = getContent(lang)
  const [expanded, setExpanded] = useState(false)

  const paragraphs: string[] = t.problem.paragraphs
  const visible = expanded ? paragraphs : paragraphs.slice(0, VISIBLE_COUNT)
  const hasMore = paragraphs.length > VISIBLE_COUNT

  return (
    <section className="py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-10">
          {t.problem.title}
        </h2>

        <div className="space-y-6">
          {visible.map((paragraph: string, idx: number) => (
            <p key={idx} className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {hasMore && !expanded && (
          <button
            onClick={() => setExpanded(true)}
            className="mt-6 inline-flex items-center gap-2 text-[#1A5187] dark:text-blue-400 font-medium hover:underline cursor-pointer"
          >
            {lang === 'fr' ? 'Lire la suite' : 'Continue reading'}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        )}
      </div>
    </section>
  )
}
