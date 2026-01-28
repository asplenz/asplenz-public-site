'use client'

import { useLang } from '@/lib/LangContext'
import { getContent } from '@/lib/content'

export default function WhatThisEnables() {
  const { lang } = useLang()
  const t = getContent(lang)
  const content = t.whatThisEnables

  if (!content) return null

  return (
    <section className="py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
          {content.title}
        </h2>
        <div className="space-y-4">
          {content.paragraphs.map((paragraph: string, idx: number) => (
            <p key={idx} className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
