'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useLang } from '@/lib/LangContext'
import { getContent } from '@/lib/content'

export default function Hero() {
  const { lang } = useLang()
  const t = getContent(lang)

  return (
    <section className="pt-32 pb-6 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 leading-tight">
            {t.hero.headline}
          </h1>
          <p className="text-lg text-[#1A5187] mb-6">
            {t.hero.headlineSubtext}
          </p>

          <p className="text-lg text-gray-700 mb-6">
            {t.hero.subheadline}
          </p>

          <ul className="space-y-3 mb-8">
            {t.hero.bullets.map((bullet: string, idx: number) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="text-[#1A5187] mt-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-gray-700">{bullet}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a
                href="#how-horizon-seals"
                className="px-6 py-3 bg-[#1A5187] text-white font-medium rounded hover:bg-[#143d66] transition-all text-center"
              >
                {t.common.cta_primary}
              </a>
              <a
                href="#post-incident-timeline"
                className="inline-flex items-center gap-2 text-gray-600 font-medium hover:text-[#1A5187] hover:underline"
              >
                {t.common.cta_view_timeline}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            <Link
              href="/foundations"
              className="inline-flex items-center gap-2 text-[#1A5187] font-medium hover:underline"
            >
              {t.common.cta_secondary}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="hidden md:block">
          <Image
            src="/hero.png"
            alt="Horizon - Incident evidence infrastructure"
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
