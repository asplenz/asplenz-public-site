'use client'

import { useLang } from '@/lib/LangContext'
import { getContent } from '@/lib/content'

export default function CategoryFraming() {
  const { lang } = useLang()
  const t = getContent(lang)
  const content = t.categoryFraming

  if (!content) return null

  return (
    <section className="pb-8 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-lg font-semibold text-gray-900">
          {content.definition}
        </p>
        <p className="text-gray-700">
          {content.clarification}
        </p>
      </div>
    </section>
  )
}
