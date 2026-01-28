'use client'

import { useLang } from '@/lib/LangContext'
import { getContent } from '@/lib/content'

export default function WhatHorizonRecords() {
  const { lang } = useLang()
  const t = getContent(lang)
  const content = t.whatHorizonRecords

  return (
    <section className="py-12 px-6 bg-gray-50 dark:bg-slate-800">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-10">
          {content.title}
        </h2>

        <div className="space-y-6">
          {content.paragraphs.map((paragraph: string, idx: number) => (
            <p key={idx} className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
