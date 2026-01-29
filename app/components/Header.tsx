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
  const [perspectivesOpen, setPerspectivesOpen] = useState(false)
  const [docsOpen, setDocsOpen] = useState(false)
  const foundationsRef = useRef<HTMLDivElement>(null)
  const perspectivesRef = useRef<HTMLDivElement>(null)
  const docsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (foundationsRef.current && !foundationsRef.current.contains(event.target as Node)) {
        setFoundationsOpen(false)
      }
      if (perspectivesRef.current && !perspectivesRef.current.contains(event.target as Node)) {
        setPerspectivesOpen(false)
      }
      if (docsRef.current && !docsRef.current.contains(event.target as Node)) {
        setDocsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const closeAllDropdowns = () => {
    setFoundationsOpen(false)
    setPerspectivesOpen(false)
    setDocsOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-gray-700 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Horizon logo"
            width={40}
            height={40}
            className="h-10 w-auto"
          />
          <span className="text-[#1A5187] dark:text-blue-400 font-bold text-xl hidden sm:inline">
            {t.brand}
          </span>
          <span className="text-[#1A5187] dark:text-blue-400 font-bold text-xl sm:hidden">
            {t.brandShort}
          </span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden lg:flex items-center gap-5">
          {/* Foundations Dropdown */}
          <div className="relative" ref={foundationsRef}>
            <button
              onClick={() => {
                setFoundationsOpen(!foundationsOpen)
                setPerspectivesOpen(false)
                setDocsOpen(false)
              }}
              className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-[#1A5187] dark:hover:text-blue-400 font-medium text-sm transition-colors"
            >
              {t.nav.foundations}
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
              <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg py-2">
                <Link
                  href="/foundations/problem"
                  className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700 hover:text-[#1A5187] dark:hover:text-blue-400 transition-colors"
                  onClick={() => setFoundationsOpen(false)}
                >
                  {t.nav.theProblem}
                </Link>
                <Link
                  href="/foundations/shift"
                  className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700 hover:text-[#1A5187] dark:hover:text-blue-400 transition-colors"
                  onClick={() => setFoundationsOpen(false)}
                >
                  {t.nav.theShift}
                </Link>
                <Link
                  href="/foundations/horizon"
                  className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700 hover:text-[#1A5187] dark:hover:text-blue-400 transition-colors"
                  onClick={() => setFoundationsOpen(false)}
                >
                  {t.nav.horizon}
                </Link>
              </div>
            )}
          </div>

          {/* Perspectives Dropdown */}
          <div className="relative" ref={perspectivesRef}>
            <button
              onClick={() => {
                setPerspectivesOpen(!perspectivesOpen)
                setFoundationsOpen(false)
                setDocsOpen(false)
              }}
              className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-[#1A5187] dark:hover:text-blue-400 font-medium text-sm transition-colors"
            >
              {t.nav.perspectives}
              <svg
                className={`w-4 h-4 transition-transform ${perspectivesOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {perspectivesOpen && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg py-2">
                <Link
                  href="/perspectives/audit-risk"
                  className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700 hover:text-[#1A5187] dark:hover:text-blue-400 transition-colors"
                  onClick={() => setPerspectivesOpen(false)}
                >
                  {t.nav.auditRisk}
                </Link>
                <Link
                  href="/perspectives/security"
                  className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700 hover:text-[#1A5187] dark:hover:text-blue-400 transition-colors"
                  onClick={() => setPerspectivesOpen(false)}
                >
                  {t.nav.security}
                </Link>
                <Link
                  href="/perspectives/engineering"
                  className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700 hover:text-[#1A5187] dark:hover:text-blue-400 transition-colors"
                  onClick={() => setPerspectivesOpen(false)}
                >
                  {t.nav.engineering}
                </Link>
                <Link
                  href="/perspectives/legal"
                  className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700 hover:text-[#1A5187] dark:hover:text-blue-400 transition-colors"
                  onClick={() => setPerspectivesOpen(false)}
                >
                  {t.nav.legal}
                </Link>
                <Link
                  href="/perspectives/ai-governance"
                  className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700 hover:text-[#1A5187] dark:hover:text-blue-400 transition-colors"
                  onClick={() => setPerspectivesOpen(false)}
                >
                  {t.nav.aiGovernance}
                </Link>
              </div>
            )}
          </div>

          {/* Documentation Dropdown */}
          <div className="relative" ref={docsRef}>
            <button
              onClick={() => {
                setDocsOpen(!docsOpen)
                setFoundationsOpen(false)
                setPerspectivesOpen(false)
              }}
              className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-[#1A5187] dark:hover:text-blue-400 font-medium text-sm transition-colors"
            >
              {t.nav.documentation}
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
              <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg py-2">
                <Link
                  href="/docs/proof-semantics"
                  className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700 hover:text-[#1A5187] dark:hover:text-blue-400 transition-colors"
                  onClick={() => setDocsOpen(false)}
                >
                  {t.nav.proofSemantic}
                </Link>
                <Link
                  href="/docs/understanding-proof"
                  className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700 hover:text-[#1A5187] dark:hover:text-blue-400 transition-colors"
                  onClick={() => setDocsOpen(false)}
                >
                  {t.nav.understandingProof}
                </Link>
                <Link
                  href="/docs/first-seal"
                  className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700 hover:text-[#1A5187] dark:hover:text-blue-400 transition-colors"
                  onClick={() => setDocsOpen(false)}
                >
                  {t.nav.firstSeal}
                </Link>
                <Link
                  href="/docs/verification"
                  className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700 hover:text-[#1A5187] dark:hover:text-blue-400 transition-colors"
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
            className="px-3 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded hover:border-[#1A5187] hover:text-[#1A5187] dark:hover:border-blue-400 dark:hover:text-blue-400 transition-all text-sm"
          >
            {t.langSwitch}
          </button>
        </div>

        {/* Mobile: Language toggle + Hamburger */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={toggleLang}
            className="px-2 py-1 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded hover:border-[#1A5187] hover:text-[#1A5187] dark:hover:border-blue-400 dark:hover:text-blue-400 transition-all text-sm"
          >
            {t.langSwitch}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 text-gray-700 dark:text-gray-300 hover:text-[#1A5187] dark:hover:text-blue-400 transition-colors"
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
        <div className="lg:hidden border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900">
          <div className="px-6 py-4 space-y-2">
            {/* Foundations section */}
            <div className="py-2">
              <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">
                {t.nav.foundations}
              </p>
              <div className="space-y-1 pl-2 border-l-2 border-gray-200 dark:border-gray-700">
                <Link
                  href="/foundations/problem"
                  className="block py-1.5 text-gray-700 dark:text-gray-300 hover:text-[#1A5187] dark:hover:text-blue-400 transition-colors text-sm"
                  onClick={() => setMenuOpen(false)}
                >
                  {t.nav.theProblem}
                </Link>
                <Link
                  href="/foundations/shift"
                  className="block py-1.5 text-gray-700 dark:text-gray-300 hover:text-[#1A5187] dark:hover:text-blue-400 transition-colors text-sm"
                  onClick={() => setMenuOpen(false)}
                >
                  {t.nav.theShift}
                </Link>
                <Link
                  href="/foundations/horizon"
                  className="block py-1.5 text-gray-700 dark:text-gray-300 hover:text-[#1A5187] dark:hover:text-blue-400 transition-colors text-sm"
                  onClick={() => setMenuOpen(false)}
                >
                  {t.nav.horizon}
                </Link>
              </div>
            </div>

            {/* Perspectives section */}
            <div className="py-2">
              <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">
                {t.nav.perspectives}
              </p>
              <div className="space-y-1 pl-2 border-l-2 border-gray-200 dark:border-gray-700">
                <Link
                  href="/perspectives/audit-risk"
                  className="block py-1.5 text-gray-700 dark:text-gray-300 hover:text-[#1A5187] dark:hover:text-blue-400 transition-colors text-sm"
                  onClick={() => setMenuOpen(false)}
                >
                  {t.nav.auditRisk}
                </Link>
                <Link
                  href="/perspectives/security"
                  className="block py-1.5 text-gray-700 dark:text-gray-300 hover:text-[#1A5187] dark:hover:text-blue-400 transition-colors text-sm"
                  onClick={() => setMenuOpen(false)}
                >
                  {t.nav.security}
                </Link>
                <Link
                  href="/perspectives/engineering"
                  className="block py-1.5 text-gray-700 dark:text-gray-300 hover:text-[#1A5187] dark:hover:text-blue-400 transition-colors text-sm"
                  onClick={() => setMenuOpen(false)}
                >
                  {t.nav.engineering}
                </Link>
                <Link
                  href="/perspectives/legal"
                  className="block py-1.5 text-gray-700 dark:text-gray-300 hover:text-[#1A5187] dark:hover:text-blue-400 transition-colors text-sm"
                  onClick={() => setMenuOpen(false)}
                >
                  {t.nav.legal}
                </Link>
                <Link
                  href="/perspectives/ai-governance"
                  className="block py-1.5 text-gray-700 dark:text-gray-300 hover:text-[#1A5187] dark:hover:text-blue-400 transition-colors text-sm"
                  onClick={() => setMenuOpen(false)}
                >
                  {t.nav.aiGovernance}
                </Link>
              </div>
            </div>

            {/* Documentation section */}
            <div className="py-2">
              <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">
                {t.nav.documentation}
              </p>
              <div className="space-y-1 pl-2 border-l-2 border-gray-200 dark:border-gray-700">
                <Link
                  href="/docs/proof-semantics"
                  className="block py-1.5 text-gray-700 dark:text-gray-300 hover:text-[#1A5187] dark:hover:text-blue-400 transition-colors text-sm"
                  onClick={() => setMenuOpen(false)}
                >
                  {t.nav.proofSemantic}
                </Link>
                <Link
                  href="/docs/understanding-proof"
                  className="block py-1.5 text-gray-700 dark:text-gray-300 hover:text-[#1A5187] dark:hover:text-blue-400 transition-colors text-sm"
                  onClick={() => setMenuOpen(false)}
                >
                  {t.nav.understandingProof}
                </Link>
                <Link
                  href="/docs/first-seal"
                  className="block py-1.5 text-gray-700 dark:text-gray-300 hover:text-[#1A5187] dark:hover:text-blue-400 transition-colors text-sm"
                  onClick={() => setMenuOpen(false)}
                >
                  {t.nav.firstSeal}
                </Link>
                <Link
                  href="/docs/verification"
                  className="block py-1.5 text-gray-700 dark:text-gray-300 hover:text-[#1A5187] dark:hover:text-blue-400 transition-colors text-sm"
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
