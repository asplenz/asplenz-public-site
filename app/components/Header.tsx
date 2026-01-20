'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useLang } from '@/lib/LangContext'
import { getContent } from '@/lib/content'

export default function Header() {
  const { lang, toggleLang } = useLang()
  const t = getContent(lang)

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
          <span className="text-[#1A5187] font-bold text-xl">
            {t.brand}
          </span>
        </Link>

        <div className="flex items-center gap-4">
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
      </div>
    </header>
  )
}
