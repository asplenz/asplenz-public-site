import Link from 'next/link'
import Image from 'next/image'
import type { Locale } from '@/lib/i18n/config'

type HeaderProps = {
  lang: Locale
  dict: any
}

export default function Header({ lang, dict }: HeaderProps) {
  const otherLang = lang === 'en' ? 'fr' : 'en'

 return (
  <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
    <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
      <Link href={`/${lang}`} className="flex items-center">
        <Image
          src="/images/logo-white.png"
          alt="Horizon"
          width={280}
          height={64}
          className="h-16 w-auto"
          priority
        />
      </Link>

      <div className="flex items-center gap-4">
        <Link
          href={`/${otherLang}`}
          className="text-xs font-medium text-gray-600 hover:text-[#001F5C] transition-colors uppercase"
        >
          {otherLang}
        </Link>

        <a
          href="#contact"
          className="px-4 py-2 bg-[#001F5C] text-white text-sm font-medium rounded hover:bg-opacity-90 transition-all"
        >
          {dict.hero.primaryCTA}
        </a>
      </div>
    </div>
  </header>
  )
}
