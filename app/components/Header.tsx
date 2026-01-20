'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useLang } from '@/lib/LangContext'
import { getContent } from '@/lib/content'

export default function Header() {
  const { lang, toggleLang } = useLang()
  const t = getContent(lang)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Horizon logo"
            width={40}
            height={40}
            className="h-10 w-auto"
          />
          {/* Full brand on desktop, short on mobile */}
          <span className="text-[#1A5187] font-bold text-xl hidden sm:inline">
            {t.brand}
          </span>
          <span className="text-[#1A5187] font-bold text-xl sm:hidden">
            {t.brandShort}
          </span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/foundations"
            className="text-gray-700 hover:text-[#1A5187] font-medium text-sm transition-colors"
          >
            {t.nav.documentation}
          </Link>

          <a
            href="mailto:contact@asplenz.com"
            className="px-4 py-2 bg-[#1A5187] text-white font-medium rounded hover:bg-[#143d66] transition-all text-sm"
          >
            {t.nav.contact}
          </a>

          <button
            onClick={toggleLang}
            className="px-3 py-2 border border-gray-300 text-gray-700 font-medium rounded hover:border-[#1A5187] hover:text-[#1A5187] transition-all text-sm"
          >
            {t.langSwitch}
          </button>
        </div>

        {/* Mobile: Language toggle + Hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleLang}
            className="px-2 py-1 border border-gray-300 text-gray-700 font-medium rounded hover:border-[#1A5187] hover:text-[#1A5187] transition-all text-sm"
          >
            {t.langSwitch}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 text-gray-700 hover:text-[#1A5187] transition-colors"
            aria-label={t.nav.menu}
          >
            {menuOpen ? (
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

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-6 py-4 space-y-4">
            <Link
              href="/foundations"
              className="block text-gray-700 hover:text-[#1A5187] font-medium transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {t.nav.documentation}
            </Link>

            <a
              href="mailto:contact@asplenz.com"
              className="block px-4 py-2 bg-[#1A5187] text-white font-medium rounded hover:bg-[#143d66] transition-all text-center"
              onClick={() => setMenuOpen(false)}
            >
              {t.nav.contact}
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
