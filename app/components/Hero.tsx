'use client'

import Image from 'next/image'
import { useLang } from '@/lib/LangContext'
import { getContent } from '@/lib/content'

export default function Hero() {
  const { lang } = useLang()
  const t = getContent(lang)

  return (
    <section className="pt-32 pb-6 px-6">
      <div className="max-w-5xl mx-auto flex items-center gap-12">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 leading-tight">
            {t.hero.headline}
          </h1>
          <p className="text-lg text-[#1A5187] mb-6">
            {t.hero.headlineSubtext}
          </p>

          <p className="text-lg text-gray-700 mb-4">
            {t.hero.subheadline}
          </p>

          <p className="text-gray-700 mb-6">
            {t.hero.description}
          </p>

          <ul className="text-gray-700 font-medium mb-8 space-y-1">
            {t.hero.bullets.map((bullet: string, idx: number) => (
              <li key={idx}>• {bullet}</li>
            ))}
          </ul>

          <a
            href="/foundations/horizon"
            className="inline-block px-6 py-3 bg-[#1A5187] text-white font-medium rounded hover:bg-[#143d66] transition-all text-center"
          >
            {t.common.cta_hero}
          </a>
        </div>

        <div className="hidden md:block shrink-0">
          <Image
            src="/hero.png"
            alt="Horizon - Incident evidence infrastructure"
            width={400}
            height={300}
            className="rounded-lg"
            priority
          />
        </div>
      </div>
    </section>
  )
}
