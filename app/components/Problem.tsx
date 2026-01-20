'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useLang } from '@/lib/LangContext'
import { getContent } from '@/lib/content'
import { BrainIcon, HourglassIcon, AlertIcon } from './icons'

const iconMap = {
  brain: BrainIcon,
  hourglass: HourglassIcon,
  alert: AlertIcon,
}

export default function Problem() {
  const { lang } = useLang()
  const t = getContent(lang)

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
          {t.problem.label}
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          {t.problem.title}
        </h2>

        <p className="text-lg text-gray-800 mb-10">
          {t.problem.intro}
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="hidden md:block">
            <Image
              src="/problem.png"
              alt="Financial examination challenges"
              width={500}
              height={400}
              className="rounded-lg"
            />

            {/* Deep Dive Link */}
            <p className="text-gray-700 text-sm mt-6">
              {t.problem.deepDive.text}
            </p>
            <Link
              href={t.problem.deepDive.href}
              className="inline-flex items-center gap-2 text-[#1A5187] font-medium hover:underline text-sm mt-1"
            >
              {t.problem.deepDive.linkText}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="grid gap-4">
            {t.problem.points.map((point, idx) => {
              const Icon = iconMap[point.iconKey as keyof typeof iconMap]
              return (
                <div key={idx} className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm flex items-start gap-4">
                  <div className="text-[#1A5187] flex-shrink-0">
                    <Icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1A5187] mb-1">{point.title}</h3>
                    <p className="text-gray-700 text-sm">{point.text}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
