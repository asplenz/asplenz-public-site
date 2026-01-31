'use client'

import Link from 'next/link'
import Header from './Header'
import Footer from './Footer'
import { useLang } from '@/lib/LangContext'
import { getContent } from '@/lib/content'

interface PageLayoutProps {
  children: React.ReactNode
  backHref?: string
  backLabel?: string
}

export default function PageLayout({ children, backHref = '/', backLabel }: PageLayoutProps) {
  const { lang } = useLang()
  const t = getContent(lang)

  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      <Header />
      <main className="pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <Link
            href={backHref}
            className="inline-flex items-center gap-2 text-[var(--accent)] hover:text-[var(--accent-hover)] mb-8 text-sm transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {backLabel || t.common.backToHome}
          </Link>
          {children}
        </div>
      </main>
      <Footer />
    </div>
  )
}
