'use client'

import { useLang } from '@/lib/LangContext'
import { getContent } from '@/lib/content'
import { BoltIcon, ShieldIcon, EyeIcon } from './icons'

const iconMap = {
  bolt: BoltIcon,
  shield: ShieldIcon,
  eye: EyeIcon,
}

export default function Safeguards() {
  const { lang } = useLang()
  const t = getContent(lang)

  if (!t.safeguards) return null

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
          {t.safeguards.label}
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
          {t.safeguards.title}
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {t.safeguards.points.map((point, idx) => {
            const Icon = iconMap[point.iconKey as keyof typeof iconMap]
            return (
              <div key={idx} className="p-6 bg-gray-50 border border-gray-200 rounded-lg">
                <div className="text-[#1A5187] mb-4">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{point.title}</h3>
                <p className="text-gray-700 text-sm">{point.text}</p>
              </div>
            )
          })}
        </div>

        <blockquote className="border-l-4 border-[#1A5187] pl-6 py-3 text-gray-700 bg-gray-50 rounded-r-lg">
          <strong className="font-bold text-gray-900">Important:</strong>{' '}
          <span className="text-gray-700">{t.safeguards.note}</span>
        </blockquote>
      </div>
    </section>
  )
}
