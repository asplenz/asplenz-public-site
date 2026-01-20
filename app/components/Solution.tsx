'use client'

import Image from 'next/image'
import { useLang } from '@/lib/LangContext'
import { getContent } from '@/lib/content'
import { TargetIcon, BoltIcon, CheckCircleIcon } from './icons'

const iconMap = {
  target: TargetIcon,
  bolt: BoltIcon,
  check: CheckCircleIcon,
}

export default function Solution() {
  const { lang } = useLang()
  const t = getContent(lang)

  return (
    <section id="how-it-works" className="py-20 px-6 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
          {t.solution.label}
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          {t.solution.title}
        </h2>

        <p className="text-lg text-gray-800 mb-10">
          {t.solution.intro}
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="grid gap-4">
            {t.solution.points.map((point, idx) => {
              const Icon = iconMap[point.iconKey as keyof typeof iconMap]
              return (
                <div key={idx} className="p-4 bg-gray-50 border border-gray-200 rounded-lg shadow-sm flex items-start gap-4">
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

          <div className="hidden md:block">
            <Image
              src="/solution.png"
              alt="Horizon automated solution"
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
