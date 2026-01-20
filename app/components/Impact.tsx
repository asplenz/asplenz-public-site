'use client'

import Image from 'next/image'
import { useLang } from '@/lib/LangContext'
import { getContent } from '@/lib/content'
import { UsersIcon, DollarIcon, RocketIcon } from './icons'

const iconMap = {
  users: UsersIcon,
  dollar: DollarIcon,
  rocket: RocketIcon,
}

export default function Impact() {
  const { lang } = useLang()
  const t = getContent(lang)

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
          {t.impact.label}
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
          {t.impact.title}
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="hidden md:block">
            <Image
              src="/impact.png"
              alt="Financial impact visualization"
              width={500}
              height={400}
              className="rounded-lg"
            />
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#1A5187] text-white">
                  {t.impact.headers.map((header, idx) => (
                    <th key={idx} className="px-4 py-3 text-left font-semibold text-sm">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {t.impact.rows.map((row, rowIdx) => {
                  const Icon = iconMap[row.iconKey as keyof typeof iconMap]
                  return (
                    <tr key={rowIdx} className={rowIdx % 2 === 0 ? 'bg-white' : 'bg-gray-100'}>
                      <td className="px-4 py-3 border-b border-gray-200">
                        <div className="flex items-center gap-2">
                          <Icon className="w-5 h-5 text-[#1A5187]" />
                          <span className="font-semibold text-gray-900 text-sm">{row.label}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3 border-b border-gray-200 text-gray-700 text-sm">
                        {row.without}
                      </td>
                      <td className="px-4 py-3 border-b border-gray-200 text-gray-700 text-sm">
                        {row.with}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
