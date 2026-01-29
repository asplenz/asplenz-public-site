'use client'

import Link from 'next/link'
import { useLang } from '@/lib/LangContext'
import { getContent } from '@/lib/content'

const pageOrder = [
  { href: '/', labelKey: 'home' },
  { href: '/foundations/problem', labelKey: 'theProblem' },
  { href: '/foundations/shift', labelKey: 'theShift' },
  { href: '/foundations/horizon', labelKey: 'horizon' },
  { href: '/docs/proof-semantics', labelKey: 'proofSemantic' },
  { href: '/docs/understanding-proof', labelKey: 'understandingProof' },
  { href: '/docs/first-seal', labelKey: 'firstSeal' },
  { href: '/docs/verification', labelKey: 'verification' },
] as const

export default function PageNav({ current }: { current: string }) {
  const { lang } = useLang()
  const t = getContent(lang)

  const idx = pageOrder.findIndex((p) => p.href === current)
  if (idx === -1) return null

  const prev = idx > 0 ? pageOrder[idx - 1] : null
  const next = idx < pageOrder.length - 1 ? pageOrder[idx + 1] : null

  const getLabel = (key: string) => {
    if (key === 'home') return t.footer.home
    return (t.nav as Record<string, string>)[key] ?? key
  }

  return (
    <nav className="flex items-center justify-between border-t border-gray-200 pt-8 mt-16">
      {prev ? (
        <Link
          href={prev.href}
          className="flex items-center gap-2 text-[#1A5187] hover:text-[#143d66] font-medium transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          {getLabel(prev.labelKey)}
        </Link>
      ) : (
        <span />
      )}
      {next ? (
        <Link
          href={next.href}
          className="flex items-center gap-2 text-[#1A5187] hover:text-[#143d66] font-medium transition-colors"
        >
          {getLabel(next.labelKey)}
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      ) : (
        <span />
      )}
    </nav>
  )
}
