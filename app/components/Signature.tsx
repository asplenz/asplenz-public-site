'use client'

import { useLang } from '@/lib/LangContext'
import { getContent } from '@/lib/content'

export default function Signature() {
  const { lang } = useLang()
  const t = getContent(lang)
  const content = t.signature

  if (!content) return null

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-xl md:text-2xl text-gray-800 mb-4">
          {content.one_liner}
        </p>

        <p className="text-lg font-bold text-[#1A5187]">
          {content.short}
        </p>
      </div>
    </section>
  )
}
