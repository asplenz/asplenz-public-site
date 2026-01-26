'use client'

import Link from 'next/link'
import { useLang } from '@/lib/LangContext'
import { getContent } from '@/lib/content'

export default function FinalCTA() {
  const { lang } = useLang()
  const t = getContent(lang)
  const content = t.final

  if (!content) return null

  return (
    <section className="py-20 px-6 bg-[#1A5187]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
          {content.title}
        </h2>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link
            href="/contact"
            className="px-8 py-4 bg-white text-[#1A5187] font-medium rounded hover:bg-gray-100 transition-all"
          >
            {t.common.cta_discuss_use_case}
          </Link>
          <Link
            href="/foundations"
            className="px-8 py-4 border border-white/30 text-white font-medium rounded hover:bg-white/10 transition-all"
          >
            {t.common.cta_request_overview}
          </Link>
        </div>
      </div>
    </section>
  )
}
