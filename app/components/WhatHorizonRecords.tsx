'use client'

import { useLang } from '@/lib/LangContext'
import { getContent } from '@/lib/content'

export default function WhatHorizonRecords() {
  const { lang } = useLang()
  const t = getContent(lang)
  const content = t.whatHorizonRecords

  return (
    <section className="py-8 px-6 bg-gray-50 dark:bg-slate-800">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
          {content.title}
        </h2>

        {/* Intro */}
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
          {content.intro}
        </p>

        {/* Bullets */}
        <ul className="text-gray-700 dark:text-gray-300 mb-4 space-y-1">
          {content.bullets.map((bullet: string, idx: number) => (
            <li key={idx}>{bullet}</li>
          ))}
        </ul>

        {/* No infer */}
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
          {content.noInfer}
        </p>

        {/* Independent */}
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
          {content.independent}
        </p>
      </div>
    </section>
  )
}
