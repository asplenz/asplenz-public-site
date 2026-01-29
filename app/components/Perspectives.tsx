'use client'

import Link from 'next/link'
import { useLang } from '@/lib/LangContext'
import { getContent } from '@/lib/content'

export default function Perspectives() {
  const { lang } = useLang()
  const t = getContent(lang)
  const content = t.indexPerspectives

  if (!content) return null

  return (
    <section className="py-12 px-6 bg-gray-50 dark:bg-slate-800">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
          {content.title}
        </h2>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          {content.intro}
        </p>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          {content.chooseText}
        </p>

        <ul className="space-y-3">
          {content.links.map((link: { label: string; description: string; href: string }, idx: number) => (
            <li key={idx}>
              <Link
                href={link.href}
                className="text-[#1A5187] dark:text-blue-400 hover:underline font-medium"
              >
                {link.label}
              </Link>
              <span className="text-gray-500 dark:text-gray-400"> : {link.description}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
