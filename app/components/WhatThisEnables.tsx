'use client'

import { useLang } from '@/lib/LangContext'
import { getContent } from '@/lib/content'

export default function WhatThisEnables() {
  const { lang } = useLang()
  const t = getContent(lang)
  const content = t.whatThisEnables

  if (!content) return null

  return (
    <section className="py-8 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
          {content.title}
        </h2>

        {/* Intro */}
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          {content.intro}
        </p>

        {/* Not resolve bullets */}
        <div className="text-gray-700 dark:text-gray-300 mb-3 space-y-1">
          {content.notResolve.map((line: string, idx: number) => (
            <p key={idx}>{line}</p>
          ))}
        </div>

        {/* Preserves */}
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
          {content.preserves}
        </p>
      </div>
    </section>
  )
}
