'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useLang } from '@/lib/LangContext'
import { getContent } from '@/lib/content'

export default function Bridge() {
  const { lang } = useLang()
  const t = getContent(lang)

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
          {t.bridge.label}
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
          {t.bridge.title}
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <blockquote className="border-l-4 border-[#1A5187] pl-6 py-2 italic text-gray-700 text-lg">
            {t.bridge.text}{' '}
            <Link href="/foundations" className="text-[#1A5187] underline hover:no-underline">
              {t.bridge.link}
            </Link>.
          </blockquote>

          <div className="hidden md:block">
            <Image
              src="/bridge.png"
              alt="Trusted by financial institutions"
              width={500}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
