'use client'

import Link from 'next/link'
import { useLang } from '@/lib/LangContext'
import { getContent } from '@/lib/content'

export default function Footer() {
  const { lang } = useLang()
  const t = getContent(lang)

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Product Column */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-4">
              {t.footer.product}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 hover:text-[#1A5187] transition-colors"
                >
                  {t.footer.home}
                </Link>
              </li>
              <li>
                <Link
                  href="/executive-briefing"
                  className="text-gray-600 hover:text-[#1A5187] transition-colors"
                >
                  {t.nav.executiveBriefing}
                </Link>
              </li>
            </ul>
          </div>

          {/* Expertise Column */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-4">
              {t.footer.expertise}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/foundations"
                  className="text-gray-600 hover:text-[#1A5187] transition-colors"
                >
                  {t.nav.documentation}
                </Link>
              </li>
              <li>
                <Link
                  href="/foundations/conceptual-reference"
                  className="flex items-center gap-2 text-gray-600 hover:text-[#1A5187] transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  {t.nav.conceptualReference}
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-gray-600 hover:text-[#1A5187] transition-colors"
                >
                  {t.nav.faq}
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-4">
              {t.footer.company}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-[#1A5187] transition-colors"
                >
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-center text-sm text-gray-500">
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}
