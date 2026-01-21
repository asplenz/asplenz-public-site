'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useLang } from '@/lib/LangContext'
import { getContent } from '@/lib/content'

export default function Header() {
  const { lang, toggleLang } = useLang()
  const t = getContent(lang)
  const [menuOpen, setMenuOpen] = useState(false)
  const [foundationsOpen, setFoundationsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setFoundationsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const foundationsItems = [
    { href: '/foundations', label: t.nav.foundationsOverview },
    { href: '/foundations/framework', label: t.nav.foundationsPart1 },
    { href: '/foundations/implementation', label: t.nav.foundationsPart2 },
    { href: '/foundations/observability', label: t.nav.foundationsPart3 },
    { href: '/foundations/conceptual-reference', label: t.nav.conceptualReference, icon: true },
  ]

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
          {/* Foundations Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setFoundationsOpen(!foundationsOpen)}
              className="flex items-center gap-1 text-gray-700 hover:text-[#1A5187] font-medium text-sm transition-colors"
            >
              {t.nav.documentation}
              <svg
                className={`w-4 h-4 transition-transform ${foundationsOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {foundationsOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg py-2">
                {foundationsItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#1A5187] transition-colors"
                    onClick={() => setFoundationsOpen(false)}
                  >
                    {item.icon && (
                      <svg className="w-4 h-4 text-[#1A5187]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    )}
                    <span>{item.label}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/executive-briefing"
            className="text-gray-700 hover:text-[#1A5187] font-medium text-sm transition-colors"
          >
            {t.nav.executiveBriefing}
          </Link>

          <Link
            href="/faq"
            className="text-gray-700 hover:text-[#1A5187] font-medium text-sm transition-colors"
          >
            {t.nav.faq}
          </Link>

          <Link
            href="/contact"
            className="px-4 py-2 bg-[#1A5187] text-white font-medium rounded hover:bg-[#143d66] transition-all text-sm"
          >
            {t.nav.contact}
          </Link>

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
          <div className="px-6 py-4 space-y-2">
            {/* Foundations section */}
            <div className="py-2">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                {t.nav.documentation}
              </p>
              <div className="space-y-1 pl-2 border-l-2 border-gray-200">
                {foundationsItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center gap-2 py-1.5 text-gray-700 hover:text-[#1A5187] transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.icon && (
                      <svg className="w-4 h-4 text-[#1A5187]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    )}
                    <span className="text-sm">{item.label}</span>
                  </Link>
                ))}
              </div>
            </div>

            <hr className="border-gray-200" />

            <Link
              href="/executive-briefing"
              className="block py-2 text-gray-700 hover:text-[#1A5187] font-medium transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {t.nav.executiveBriefing}
            </Link>

            <Link
              href="/faq"
              className="block py-2 text-gray-700 hover:text-[#1A5187] font-medium transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {t.nav.faq}
            </Link>

            <Link
              href="/contact"
              className="block px-4 py-2 bg-[#1A5187] text-white font-medium rounded hover:bg-[#143d66] transition-all text-center"
              onClick={() => setMenuOpen(false)}
            >
              {t.nav.contact}
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
