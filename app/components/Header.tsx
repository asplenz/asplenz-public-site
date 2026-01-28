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
  const [docsOpen, setDocsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDocsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

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
          <span className="text-[#1A5187] font-bold text-xl hidden sm:inline">
            {t.brand}
          </span>
          <span className="text-[#1A5187] font-bold text-xl sm:hidden">
            {t.brandShort}
          </span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden lg:flex items-center gap-5">
          <Link
            href="/problem"
            className="text-gray-700 hover:text-[#1A5187] font-medium text-sm transition-colors"
          >
            {t.nav.theProblem}
          </Link>

          <Link
            href="/shift"
            className="text-gray-700 hover:text-[#1A5187] font-medium text-sm transition-colors"
          >
            {t.nav.theShift}
          </Link>

          <Link
            href="/horizon"
            className="text-gray-700 hover:text-[#1A5187] font-medium text-sm transition-colors"
          >
            {t.nav.horizon}
          </Link>

          {/* Proof Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDocsOpen(!docsOpen)}
              className="flex items-center gap-1 text-gray-700 hover:text-[#1A5187] font-medium text-sm transition-colors"
            >
              {t.nav.proof}
              <svg
                className={`w-4 h-4 transition-transform ${docsOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {docsOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg py-2">
                <Link
                  href="/proof-semantic"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#1A5187] transition-colors"
                  onClick={() => setDocsOpen(false)}
                >
                  {t.nav.proofSemantic}
                </Link>
                <Link
                  href="/understanding-proof"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#1A5187] transition-colors"
                  onClick={() => setDocsOpen(false)}
                >
                  {t.nav.understandingProof}
                </Link>
                <Link
                  href="/quick-start"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#1A5187] transition-colors"
                  onClick={() => setDocsOpen(false)}
                >
                  {t.nav.firstSeal}
                </Link>
                <Link
                  href="/verification"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#1A5187] transition-colors"
                  onClick={() => setDocsOpen(false)}
                >
                  {t.nav.verification}
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/contact"
            className="px-4 py-2 bg-[#1A5187] text-white font-medium rounded hover:bg-[#143d66] transition-all text-sm"
          >
            {t.nav.talkToUs}
          </Link>

          <button
            onClick={toggleLang}
            className="px-3 py-2 border border-gray-300 text-gray-700 font-medium rounded hover:border-[#1A5187] hover:text-[#1A5187] transition-all text-sm"
          >
            {t.langSwitch}
          </button>
        </div>

        {/* Mobile: Language toggle + Hamburger */}
        <div className="flex lg:hidden items-center gap-2">
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
        <div className="lg:hidden border-t border-gray-200 bg-white">
          <div className="px-6 py-4 space-y-2">
            <Link
              href="/problem"
              className="block py-2 text-gray-700 hover:text-[#1A5187] font-medium transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {t.nav.theProblem}
            </Link>

            <Link
              href="/shift"
              className="block py-2 text-gray-700 hover:text-[#1A5187] font-medium transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {t.nav.theShift}
            </Link>

            <Link
              href="/horizon"
              className="block py-2 text-gray-700 hover:text-[#1A5187] font-medium transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {t.nav.horizon}
            </Link>

            {/* Proof section */}
            <div className="py-2">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                {t.nav.proof}
              </p>
              <div className="space-y-1 pl-2 border-l-2 border-gray-200">
                <Link
                  href="/proof-semantic"
                  className="block py-1.5 text-gray-700 hover:text-[#1A5187] transition-colors text-sm"
                  onClick={() => setMenuOpen(false)}
                >
                  {t.nav.proofSemantic}
                </Link>
                <Link
                  href="/understanding-proof"
                  className="block py-1.5 text-gray-700 hover:text-[#1A5187] transition-colors text-sm"
                  onClick={() => setMenuOpen(false)}
                >
                  {t.nav.understandingProof}
                </Link>
                <Link
                  href="/quick-start"
                  className="block py-1.5 text-gray-700 hover:text-[#1A5187] transition-colors text-sm"
                  onClick={() => setMenuOpen(false)}
                >
                  {t.nav.firstSeal}
                </Link>
                <Link
                  href="/verification"
                  className="block py-1.5 text-gray-700 hover:text-[#1A5187] transition-colors text-sm"
                  onClick={() => setMenuOpen(false)}
                >
                  {t.nav.verification}
                </Link>
              </div>
            </div>

            <Link
              href="/contact"
              className="block px-4 py-2 bg-[#1A5187] text-white font-medium rounded hover:bg-[#143d66] transition-all text-center"
              onClick={() => setMenuOpen(false)}
            >
              {t.nav.talkToUs}
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
