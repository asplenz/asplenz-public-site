'use client'

import { useLang } from '@/lib/LangContext'
import { getContent } from '@/lib/content'

export default function HorizonDoesNot() {
  const { lang } = useLang()
  const t = getContent(lang)
  const content = t.horizonDoesNot

  if (!content) return null

  return (
    <section className="py-8 px-6 bg-gray-50 dark:bg-slate-800">
      <div className="max-w-5xl mx-auto">
        {/* Section title */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
          {content.title}
        </h2>

        {/* Two boxes side by side */}
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          {/* Left box - What Horizon is not */}
          <div className="bg-white dark:bg-slate-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-2">
              {content.isNot.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
              {content.isNot.intro}
            </p>
            <ul className="text-gray-700 dark:text-gray-300 mb-2 space-y-0.5">
              {content.isNot.bullets.map((bullet: string, idx: number) => (
                <li key={idx}>• {bullet}</li>
              ))}
            </ul>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
              {content.isNot.closing}
            </p>
          </div>

          {/* Right box - What Horizon does not do */}
          <div className="bg-white dark:bg-slate-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-2">
              {content.doesNot.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
              {content.doesNot.intro}
            </p>
            <ul className="text-gray-700 dark:text-gray-300 mb-2 space-y-0.5">
              {content.doesNot.bullets.map((bullet: string, idx: number) => (
                <li key={idx}>• {bullet}</li>
              ))}
            </ul>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
              {content.doesNot.closing}
            </p>
          </div>
        </div>

        {/* Final line */}
        <p className="text-center text-gray-700 dark:text-gray-300 text-lg font-medium">
          {content.finalLine}
        </p>
      </div>
    </section>
  )
}
