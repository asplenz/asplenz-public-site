'use client'

import Image from 'next/image'
import { useLang } from '@/lib/LangContext'
import { getContent } from '@/lib/content'

export default function Hero() {
  const { lang } = useLang()
  const t = getContent(lang)

  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-lg text-gray-600 mb-4">{t.tagline}</p>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {t.hero.title}
          </h1>

          <p className="text-lg text-gray-800 mb-4">
            {t.hero.description}
          </p>

          <p className="text-lg mb-2">
            <strong className="text-[#1A5187]">{t.hero.highlight}</strong>{' '}
            {t.hero.subtext}
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-10">
            <a
              href="mailto:contact@asplenz.com"
              className="px-6 py-3 bg-[#1A5187] text-white font-medium rounded hover:bg-[#143d66] transition-all text-center"
            >
              {t.hero.cta1}
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 text-[#1A5187] font-medium hover:underline"
            >
              {t.hero.cta2}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </div>

        <div className="hidden md:block">
          <Image
            src="/hero.png"
            alt="Financial document automation"
            width={600}
            height={400}
            className="rounded-lg"
            priority
          />
        </div>
      </div>
    </section>
  )
}
