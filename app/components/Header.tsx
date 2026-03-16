'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useLang } from '@/lib/LangContext'
import { getContent } from '@/lib/content'

interface DropdownItem {
  label: string
  href: string
}

interface NavEntry {
  label: string
  href?: string
  children?: DropdownItem[]
  cta?: boolean
}

function ChevronDown({ className = '' }: { className?: string }) {
  return (
    <svg className={`w-3.5 h-3.5 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  )
}

function DesktopDropdown({
  entry, openKey, setOpenKey,
}: {
  entry: NavEntry; openKey: string | null; setOpenKey: (k: string | null) => void
}) {
  const key = entry.label
  const isOpen = openKey === key
  const hoverTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)
  const ref = useRef<HTMLDivElement>(null)

  const open = useCallback(() => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current)
    setOpenKey(key)
  }, [key, setOpenKey])

  const scheduleClose = useCallback(() => {
    hoverTimeout.current = setTimeout(() => setOpenKey(null), 150)
  }, [setOpenKey])

  if (!entry.children) {
    if (entry.cta) {
      return (
        <Link href={entry.href!} className="px-4 py-1.5 text-sm font-medium text-white bg-[var(--accent)] hover:bg-[var(--accent-hover)] rounded transition-colors">
          {entry.label}
        </Link>
      )
    }
    return (
      <Link href={entry.href!} className="text-[var(--text-secondary)] hover:text-[var(--accent)] font-medium text-sm transition-colors">
        {entry.label}
      </Link>
    )
  }

  return (
    <div ref={ref} className="relative" onMouseEnter={open} onMouseLeave={scheduleClose}>
      <button
        onClick={() => setOpenKey(isOpen ? null : key)}
        className="flex items-center gap-1 text-[var(--text-secondary)] hover:text-[var(--accent)] font-medium text-sm transition-colors"
      >
        {entry.label}
        <ChevronDown className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 min-w-[200px] bg-[var(--bg-secondary)] border border-[var(--border)] rounded-lg shadow-lg py-1 z-50">
          {entry.children.map((child) => (
            <Link key={child.href} href={child.href} onClick={() => setOpenKey(null)}
              className="block px-4 py-2 text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] hover:bg-[var(--bg-primary)]/50 transition-colors">
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

function MobileNav({ entries, close }: { entries: NavEntry[]; close: () => void }) {
  const [expandedKey, setExpandedKey] = useState<string | null>(null)
  return (
    <nav className="px-6 py-4 space-y-1">
      {entries.map((entry) => {
        if (!entry.children) {
          return (
            <Link key={entry.label} href={entry.href!} onClick={close}
              className={`block py-2 font-medium text-sm transition-colors ${entry.cta ? 'text-[var(--accent)]' : 'text-[var(--text-secondary)] hover:text-[var(--accent)]'}`}>
              {entry.label}
            </Link>
          )
        }
        const isExpanded = expandedKey === entry.label
        return (
          <div key={entry.label}>
            <button onClick={() => setExpandedKey(isExpanded ? null : entry.label)}
              className="w-full flex items-center justify-between py-2 text-[var(--text-secondary)] hover:text-[var(--accent)] font-medium text-sm transition-colors">
              {entry.label}
              <ChevronDown className={`transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
            </button>
            {isExpanded && (
              <div className="pl-4 space-y-1 pb-2">
                {entry.children.map((child) => (
                  <Link key={child.href} href={child.href} onClick={close}
                    className="block py-1.5 text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors">
                    {child.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        )
      })}
    </nav>
  )
}

export default function Header() {
  const { lang, toggleLang } = useLang()
  const t = getContent(lang)
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDesktopKey, setOpenDesktopKey] = useState<string | null>(null)
  const headerRef = useRef<HTMLElement>(null)

  useEffect(() => { setMobileMenuOpen(false); setOpenDesktopKey(null) }, [pathname])

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) setOpenDesktopKey(null)
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  const entries: NavEntry[] = [
    {
      label: t.nav.product,
      children: [
        { label: t.nav.howItWorks, href: '/product/how-it-works' },
        { label: t.nav.extraction, href: '/product/extraction' },
        { label: t.nav.aiAgents, href: '/product/ai-agents' },
        { label: t.nav.ciVerifier, href: '/product/ci-verifier' },
      ],
    },
    {
      label: t.nav.docs,
      children: [
        { label: t.nav.gettingStarted, href: '/docs/getting-started' },
        { label: t.nav.concepts, href: '/docs/concepts' },
        { label: t.nav.extraction, href: '/docs/extraction' },
      ],
    },
    { label: t.nav.pricing, href: '/pricing' },
    { label: t.nav.blog, href: '/blog/why-adrs-fail' },
    { label: t.nav.signIn, href: '/signin', cta: true },
  ]

  return (
    <header ref={headerRef} className="fixed top-0 left-0 right-0 bg-[var(--bg-primary)]/95 backdrop-blur-sm border-b border-[var(--border)] z-50">
      <div className="max-w-6xl mx-auto px-6 py-2.5 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="Asplenz" width={28} height={28} className="opacity-90" />
          <span className="text-[var(--text-primary)] font-semibold text-sm uppercase tracking-widest">Asplenz</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {entries.map((entry) => (
            <DesktopDropdown key={entry.label} entry={entry} openKey={openDesktopKey} setOpenKey={setOpenDesktopKey} />
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button onClick={toggleLang}
            className="px-3 py-1.5 text-sm font-medium text-[var(--text-muted)] hover:text-[var(--accent)] border border-[var(--border-light)] rounded hover:border-[var(--accent)] transition-all">
            {t.langSwitch}
          </button>
          <button className="md:hidden p-2 text-[var(--text-secondary)] hover:text-[var(--accent)]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
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

      {mobileMenuOpen && (
        <div className="md:hidden bg-[var(--bg-secondary)] border-t border-[var(--border)]">
          <MobileNav entries={entries} close={() => setMobileMenuOpen(false)} />
        </div>
      )}
    </header>
  )
}
