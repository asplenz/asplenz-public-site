'use client'

import Link from 'next/link'
import { useLang } from '@/lib/LangContext'
import { getContent } from '@/lib/content'

export default function Foundations() {
  const { lang } = useLang()
  const t = getContent(lang)
  const content = t.indexFoundations

  if (!content) return null

  return (
    <section className="py-12 px-6 bg-gray-50 dark:bg-slate-800">
      <div className="max-w-5xl mx-auto">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
          {content.title}
        </h3>
        <ul className="space-y-3">
          {content.links.map((link: { label: string; description: string; href: string }, idx: number) => (
            <li key={idx}>
              <Link
                href={link.href}
                className="text-[#1A5187] dark:text-blue-400 hover:underline"
              >
                {link.label}
              </Link>
              <span className="text-gray-500 dark:text-gray-400"> · {link.description}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
