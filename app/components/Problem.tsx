'use client'

import { useLang } from '@/lib/LangContext'
import { getContent } from '@/lib/content'

export default function Problem() {
  const { lang } = useLang()
  const t = getContent(lang)
  const content = t.problem

  return (
    <section className="py-8 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
          {content.title}
        </h2>

        {/* Intro */}
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
          {content.intro}
        </p>

        {/* Communication bullets */}
        <ul className="text-gray-700 dark:text-gray-300 mb-4 space-y-1">
          {content.bulletsCommunication.map((bullet: string, idx: number) => (
            <li key={idx}>{bullet}</li>
          ))}
        </ul>

        {/* Reconstruction */}
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
          {content.reconstruction}
        </p>

        {/* Not tooling */}
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
          {content.notTooling}
        </p>
      </div>
    </section>
  )
}
