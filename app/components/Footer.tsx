'use client'

import Link from 'next/link'
import { useLang } from '@/lib/LangContext'
import { getContent } from '@/lib/content'

export default function Footer() {
  const { lang } = useLang()
  const t = getContent(lang)

  return (
    <footer className="bg-[var(--bg-secondary)] border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[var(--text-muted)]">
          &copy; 2026 Asplenz. All rights reserved.
        </p>
        <Link
          href="/platform"
          className="text-sm text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
        >
          {t.nav.platform}
        </Link>
      </div>
    </footer>
  )
}
