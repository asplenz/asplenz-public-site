import Link from 'next/link'
import { t, type Locale } from '@/lib/i18n'
import { LangSwitcher } from './LangSwitcher'

export function Header({ locale }: { locale: Locale }) {
  const messages = t(locale)
  const base = `/${locale}`

  const links = [
    { href: `${base}/product`, label: messages.nav.product },
    { href: `${base}/use-cases`, label: messages.nav.use_cases },
    { href: `${base}/compare`, label: messages.nav.compare },
    { href: `${base}/pricing`, label: messages.nav.pricing },
    { href: `${base}/company`, label: messages.nav.company },
  ]

  return (
    <header className="sticky top-0 z-40 border-b border-gray-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link href={base} className="flex items-center gap-2 font-semibold text-gray-900">
          <span className="inline-block h-6 w-6 rounded bg-primary" aria-hidden />
          <span>{messages.brand}</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href={`${base}/company#contact`}
            className="hidden rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-white hover:bg-primary-strong md:inline-block"
          >
            {messages.cta.book_demo}
          </Link>
          <LangSwitcher current={locale} />
        </div>
      </div>
    </header>
  )
}
