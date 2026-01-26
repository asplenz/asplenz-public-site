'use client'

import Image from 'next/image'
import { useLang } from '@/lib/LangContext'
import { getContent } from '@/lib/content'

export default function PostIncident() {
  const { lang } = useLang()
  const t = getContent(lang)
  const content = t.postIncident

  if (!content) return null

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          {content.title}
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <Image
              src="/timeline.png"
              alt="Post-incident timeline"
              width={500}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>

          <div className="order-1 md:order-2">
            <p className="text-lg text-gray-700 mb-4">
              {content.intro}
            </p>

            <ul className="space-y-2 pl-4 mb-6">
              {content.bullets.map((bullet: string, idx: number) => (
                <li key={idx} className="text-gray-700 list-disc">
                  {bullet}
                </li>
              ))}
            </ul>

            <p className="text-lg font-semibold text-[#1A5187] italic">
              {content.footer}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
