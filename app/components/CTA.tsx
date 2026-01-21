'use client'

import Link from 'next/link'
import { useLang } from '@/lib/LangContext'
import { getContent } from '@/lib/content'
import { MailIcon } from './icons'

export default function CTA() {
  const { lang } = useLang()
  const t = getContent(lang)

  return (
    <section id="contact" className="py-20 px-6 bg-[#1A5187]">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
          {t.cta.title}
        </h2>

        <p className="text-lg font-bold text-white mb-10">
          {t.cta.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link
            href="/contact"
            className="flex items-center gap-2 px-6 py-3 bg-white text-[#1A5187] font-medium rounded hover:bg-gray-100 transition-all"
          >
            <MailIcon className="w-5 h-5" />
            {t.cta.emailButton}
          </Link>
          <Link
            href="/foundations"
            className="inline-flex items-center gap-2 text-white/90 hover:text-white font-medium hover:underline transition-all"
          >
            {t.cta.calButton}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
