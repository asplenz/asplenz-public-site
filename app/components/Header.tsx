'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useLang } from '@/lib/LangContext'
import { getContent } from '@/lib/content'

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface SubmenuItem {
  label: string
  href: string
  submenu?: SubmenuItem[]
}

interface NavEntry {
  label: string
  href?: string            // present  → plain link (no dropdown)
  children?: SubmenuItem[] // present  → dropdown trigger
}

/* ------------------------------------------------------------------ */
/*  Desktop dropdown (hover + click, outside-click close)              */
/* ------------------------------------------------------------------ */

function DesktopDropdown({
  entry,
  openKey,
  setOpenKey,
}: {
  entry: NavEntry
  openKey: string | null
  setOpenKey: (k: string | null) => void
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

  /* plain link (no children) */
  if (!entry.children) {
    return (
      <Link
        href={entry.href!}
        className="text-[var(--text-secondary)] hover:text-[var(--accent)] font-medium text-sm transition-colors"
      >
        {entry.label}
      </Link>
    )
  }

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={open}
      onMouseLeave={scheduleClose}
    >
      {/* trigger */}
      <button
        onClick={() => setOpenKey(isOpen ? null : key)}
        className="flex items-center gap-1 text-[var(--text-secondary)] hover:text-[var(--accent)] font-medium text-sm transition-colors"
      >
        {entry.label}
        <ChevronDown className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* panel */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 min-w-[200px] bg-[var(--bg-secondary)] border border-[var(--border)] rounded-lg shadow-lg py-1 z-50">
          {entry.children.map((child) =>
            child.submenu ? (
              <NestedDesktopMenu key={child.label} item={child} />
            ) : (
              <Link
                key={child.href}
                href={child.href}
                className="block px-4 py-2 text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] hover:bg-[var(--bg-primary)]/50 transition-colors"
              >
                {child.label}
              </Link>
            ),
          )}
        </div>
      )}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Nested desktop submenu (for Perspectives → Legal / Security / …)  */
/* ------------------------------------------------------------------ */

function NestedDesktopMenu({ item }: { item: SubmenuItem }) {
  const [open, setOpen] = useState(false)
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null)

  const enter = () => {
    if (timeout.current) clearTimeout(timeout.current)
    setOpen(true)
  }
  const leave = () => {
    timeout.current = setTimeout(() => setOpen(false), 150)
  }

  return (
    <div className="relative" onMouseEnter={enter} onMouseLeave={leave}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between px-4 py-2 text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] hover:bg-[var(--bg-primary)]/50 transition-colors"
      >
        {item.label}
        <ChevronRight />
      </button>

      {open && item.submenu && (
        <div className="absolute left-full top-0 ml-1 min-w-[200px] bg-[var(--bg-secondary)] border border-[var(--border)] rounded-lg shadow-lg py-1 z-50">
          {item.submenu.map((sub) => (
            <Link
              key={sub.href}
              href={sub.href}
              className="block px-4 py-2 text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] hover:bg-[var(--bg-primary)]/50 transition-colors"
            >
              {sub.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Mobile accordion                                                   */
/* ------------------------------------------------------------------ */

function MobileNav({
  entries,
  close,
}: {
  entries: NavEntry[]
  close: () => void
}) {
  const [expandedKey, setExpandedKey] = useState<string | null>(null)
  const [expandedSubKey, setExpandedSubKey] = useState<string | null>(null)

  const toggle = (key: string) => {
    setExpandedKey((prev) => (prev === key ? null : key))
    setExpandedSubKey(null)
  }
  const toggleSub = (key: string) =>
    setExpandedSubKey((prev) => (prev === key ? null : key))

  return (
    <nav className="px-6 py-4 space-y-1">
      {entries.map((entry) => {
        if (!entry.children) {
          return (
            <Link
              key={entry.label}
              href={entry.href!}
              onClick={close}
              className="block py-2 text-[var(--text-secondary)] hover:text-[var(--accent)] font-medium text-sm transition-colors"
            >
              {entry.label}
            </Link>
          )
        }

        const isExpanded = expandedKey === entry.label

        return (
          <div key={entry.label}>
            <button
              onClick={() => toggle(entry.label)}
              className="w-full flex items-center justify-between py-2 text-[var(--text-secondary)] hover:text-[var(--accent)] font-medium text-sm transition-colors"
            >
              {entry.label}
              <ChevronDown
                className={`transition-transform ${isExpanded ? 'rotate-180' : ''}`}
              />
            </button>

            {isExpanded && (
              <div className="pl-4 space-y-1">
                {entry.children.map((child) => {
                  if (!child.submenu) {
                    return (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={close}
                        className="block py-1.5 text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
                      >
                        {child.label}
                      </Link>
                    )
                  }

                  const isSubExpanded = expandedSubKey === child.label

                  return (
                    <div key={child.label}>
                      <button
                        onClick={() => toggleSub(child.label)}
                        className="w-full flex items-center justify-between py-1.5 text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
                      >
                        {child.label}
                        <ChevronDown
                          className={`transition-transform ${isSubExpanded ? 'rotate-180' : ''}`}
                        />
                      </button>

                      {isSubExpanded && child.submenu && (
                        <div className="pl-4 space-y-1">
                          {child.submenu.map((sub) => (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              onClick={close}
                              className="block py-1.5 text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        )
      })}
    </nav>
  )
}

/* ------------------------------------------------------------------ */
/*  Tiny SVG icons                                                     */
/* ------------------------------------------------------------------ */

function ChevronDown({ className = '' }: { className?: string }) {
  return (
    <svg
      className={`w-3.5 h-3.5 ${className}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  )
}

function ChevronRight() {
  return (
    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  )
}

/* ------------------------------------------------------------------ */
/*  Header                                                             */
/* ------------------------------------------------------------------ */

export default function Header() {
  const { lang, toggleLang } = useLang()
  const t = getContent(lang)
  const pathname = usePathname()

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDesktopKey, setOpenDesktopKey] = useState<string | null>(null)

  const headerRef = useRef<HTMLElement>(null)

  /* Close everything on route change */
  useEffect(() => {
    setMobileMenuOpen(false)
    setOpenDesktopKey(null)
  }, [pathname])

  /* Close desktop dropdown on outside click */
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpenDesktopKey(null)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  /* ---- navigation structure ---- */

  const entries: NavEntry[] = [
    {
      label: t.nav.knowledge,
      children: [
        { label: t.nav.features, href: '/knowledge' },
        { label: t.nav.docs, href: '/knowledge/docs' },
        { label: t.nav.pricing, href: '/knowledge/pricing' },
      ],
    },
    {
      label: t.nav.evidence,
      children: [
        { label: t.nav.overview, href: '/evidence' },
        {
          label: t.nav.perspectives,
          href: '/evidence/perspectives',
          submenu: [
            { label: 'Legal', href: '/evidence/perspectives/legal' },
            { label: 'Security', href: '/evidence/perspectives/security' },
            { label: 'Audit & Risk', href: '/evidence/perspectives/audit-risk' },
            { label: 'AI Governance', href: '/evidence/perspectives/ai-governance' },
          ],
        },
        { label: t.nav.docs, href: '/evidence/docs' },
        { label: t.nav.pricing, href: '/evidence/pricing' },
      ],
    },
    {
      label: t.nav.foundations,
      children: [
        { label: t.nav.theProblem, href: '/foundations/problem' },
        { label: t.nav.theShift, href: '/foundations/shift' },
      ],
    },
    {
      label: t.nav.company,
      children: [
        { label: t.nav.about, href: '/company/about' },
        { label: t.nav.whyAsplenz, href: '/company/why-asplenz' },
        { label: t.nav.contact, href: '/contact' },
      ],
    },
  ]

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 bg-[var(--bg-primary)]/95 backdrop-blur-sm border-b border-[var(--border)] z-50"
    >
      <div className="max-w-6xl mx-auto px-6 py-2.5 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Asplenz"
            width={28}
            height={28}
            className="opacity-90"
          />
          <span className="text-[var(--text-primary)] font-semibold text-sm uppercase tracking-widest">
            Asplenz
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {entries.map((entry) => (
            <DesktopDropdown
              key={entry.label}
              entry={entry}
              openKey={openDesktopKey}
              setOpenKey={setOpenDesktopKey}
            />
          ))}
        </nav>

        {/* Right-side controls */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleLang}
            className="px-3 py-1.5 text-sm font-medium text-[var(--text-muted)] hover:text-[var(--accent)] border border-[var(--border-light)] rounded hover:border-[var(--accent)] transition-all"
          >
            {t.langSwitch}
          </button>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-[var(--text-secondary)] hover:text-[var(--accent)]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
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

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[var(--bg-secondary)] border-t border-[var(--border)]">
          <MobileNav entries={entries} close={() => setMobileMenuOpen(false)} />
        </div>
      )}
    </header>
  )
}
