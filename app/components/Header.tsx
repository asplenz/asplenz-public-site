'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useLang } from '@/lib/LangContext'
import { getContent } from '@/lib/content'

export default function Header() {
  const { lang, toggleLang } = useLang()
  const t = getContent(lang)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 bg-[var(--bg-primary)]/95 backdrop-blur-sm border-b border-[var(--border)] z-50">
      <div className="max-w-6xl mx-auto px-6 py-2.5 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Asplenz"
            width={28}
            height={28}
            className="opacity-90"
          />
          <span className="text-[var(--text-muted)] text-lg">|</span>
          <span className="text-[var(--text-primary)] font-semibold text-sm uppercase tracking-widest">
            Horizon
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/foundations"
            className="text-[var(--text-secondary)] hover:text-[var(--accent)] font-medium text-sm transition-colors"
          >
            {t.nav.foundations}
          </Link>
          <Link
            href="/perspectives"
            className="text-[var(--text-secondary)] hover:text-[var(--accent)] font-medium text-sm transition-colors"
          >
            {t.nav.perspectives}
          </Link>
          <Link
            href="/docs"
            className="text-[var(--text-secondary)] hover:text-[var(--accent)] font-medium text-sm transition-colors"
          >
            {t.nav.docs}
          </Link>
          <Link
            href="/contact"
            className="text-[var(--text-secondary)] hover:text-[var(--accent)] font-medium text-sm transition-colors"
          >
            {t.nav.contact}
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleLang}
            className="px-3 py-1.5 text-sm font-medium text-[var(--text-muted)] hover:text-[var(--accent)] border border-[var(--border-light)] rounded hover:border-[var(--accent)] transition-all"
          >
            {t.langSwitch}
          </button>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-[var(--text-secondary)] hover:text-[var(--accent)]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[var(--bg-secondary)] border-t border-[var(--border)]">
          <nav className="px-6 py-4 space-y-2">
            <Link
              href="/foundations"
              className="block py-2 text-[var(--text-secondary)] hover:text-[var(--accent)]"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.nav.foundations}
            </Link>
            <Link
              href="/perspectives"
              className="block py-2 text-[var(--text-secondary)] hover:text-[var(--accent)]"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.nav.perspectives}
            </Link>
            <Link
              href="/docs"
              className="block py-2 text-[var(--text-secondary)] hover:text-[var(--accent)]"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.nav.docs}
            </Link>
            <Link
              href="/contact"
              className="block py-2 text-[var(--accent)] font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.nav.contact}
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
