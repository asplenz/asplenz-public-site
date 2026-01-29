'use client'

import Link from 'next/link'
import { useLang } from '@/lib/LangContext'
import { getContent } from '@/lib/content'

export default function ContactCTA() {
  const { lang } = useLang()
  const t = getContent(lang)
  const content = t.indexContact

  if (!content) return null

  return (
    <section className="py-8 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
          {content.title}
        </h2>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          {content.text}
        </p>

        <Link
          href="/contact"
          className="inline-block px-6 py-3 bg-[#1A5187] text-white font-medium rounded hover:bg-[#143d66] transition-all"
        >
          {content.cta}
        </Link>
      </div>
    </section>
  )
}
