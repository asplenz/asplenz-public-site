'use client'

import Link from 'next/link'
import { useLang } from '@/lib/LangContext'
import { getContent } from '@/lib/content'

export default function FAQ() {
  const { lang } = useLang()
  const t = getContent(lang)

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
          {t.faq.title}
        </h2>

        <div className="space-y-6">
          {t.faq.keyQuestions.map((item, idx) => (
            <div key={idx} className="p-6 bg-white border border-gray-200 rounded-lg">
              <h3 className="font-semibold text-[#1A5187] mb-2">
                {item.q}
              </h3>
              <p className="text-gray-700">
                {item.a}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href={t.faq.viewAllHref}
            className="inline-flex items-center gap-2 text-[#1A5187] font-medium hover:underline"
          >
            {t.faq.viewAll}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
