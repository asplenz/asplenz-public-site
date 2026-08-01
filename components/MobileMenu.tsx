'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ArrowRight } from 'lucide-react'
import { t, type Locale } from '@/lib/i18n'
import { cn } from '@/lib/cn'

export function MobileMenu({ locale }: { locale: Locale }) {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const messages = t(locale)
  const base = `/${locale}`

  const links = [
    { href: `${base}/product`, label: messages.nav.product },
    { href: `${base}/use-cases`, label: messages.nav.use_cases },
    { href: `${base}/oem`, label: messages.nav.oem },
    { href: `${base}/ecosystem`, label: messages.nav.ecosystem },
    { href: `${base}/pricing`, label: messages.nav.pricing },
    { href: `${base}/company`, label: messages.nav.company },
  ]

  const contactHref = `${base}/company#contact`

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [isOpen])

  const close = () => setIsOpen(false)

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setIsOpen((v) => !v)}
        aria-expanded={isOpen}
        aria-controls="mobile-menu-panel"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-gray-200 bg-white text-gray-900 hover:bg-gray-50"
      >
        {isOpen ? (
          <X className="h-5 w-5" aria-hidden />
        ) : (
          <Menu className="h-5 w-5" aria-hidden />
        )}
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 top-[57px] z-30 bg-gray-900/40 backdrop-blur-sm"
            onClick={close}
            aria-hidden
          />
          <div
            id="mobile-menu-panel"
            className="fixed inset-x-0 top-[57px] z-40 border-b border-gray-200 bg-white shadow-lg"
            role="dialog"
            aria-modal="true"
          >
            <nav className="mx-auto max-w-6xl px-6 py-4">
              <ul className="flex flex-col divide-y divide-gray-100">
                {links.map((link) => {
                  const active =
                    pathname === link.href ||
                    pathname.startsWith(link.href + '/')
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={close}
                        className={cn(
                          'block py-3 text-base font-medium',
                          active
                            ? 'text-primary-strong'
                            : 'text-gray-900 hover:text-primary-strong',
                        )}
                      >
                        {link.label}
                      </Link>
                    </li>
                  )
                })}
              </ul>

              <Link
                href={contactHref}
                onClick={close}
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-4 py-3 text-sm font-semibold text-white hover:bg-primary-strong"
              >
                {messages.cta.book_demo}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </nav>
          </div>
        </>
      )}
    </div>
  )
}
