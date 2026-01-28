'use client'

import Link from 'next/link'
import { useLang } from '@/lib/LangContext'
import { getContent } from '@/lib/content'

export default function ContactCTA() {
  const { lang } = useLang()
  const t = getContent(lang)
  const content = t.indexContactCTA

  if (!content) return null

  return (
    <section className="py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          {content.title}
        </h3>
        <Link
          href="/contact"
          className="text-[#1A5187] dark:text-blue-400 hover:underline"
        >
          {content.cta}
        </Link>
      </div>
    </section>
  )
}
