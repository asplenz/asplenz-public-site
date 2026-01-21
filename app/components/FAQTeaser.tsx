'use client'

import Link from 'next/link'
import { useLang } from '@/lib/LangContext'
import { getContent } from '@/lib/content'

export default function FAQTeaser() {
  const { lang } = useLang()
  const t = getContent(lang)

  return (
    <section className="py-8 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-gray-700">
          {t.faqTeaser?.text}{' '}
          <Link
            href={t.faqTeaser?.href || '/faq'}
            className="text-[#1A5187] font-medium hover:underline inline-flex items-center gap-1"
          >
            {t.faqTeaser?.linkText}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </p>
      </div>
    </section>
  )
}
