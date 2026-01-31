'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Header from './Header'
import Footer from './Footer'
import { useLang } from '@/lib/LangContext'

interface NavItem {
  title: string
  href: string
  children?: NavItem[]
}

const docsNavEn: NavItem[] = [
  { title: 'Overview', href: '/docs' },
  {
    title: 'Technical',
    href: '/docs/technical',
    children: [
      { title: 'First Seal', href: '/docs/technical/first-seal' },
      { title: 'Core Concepts', href: '/docs/technical/core-concepts' },
      { title: 'API Reference', href: '/docs/technical/api-reference' },
      { title: 'Proof Semantics', href: '/docs/technical/proof-semantics' },
      { title: 'Guarantees', href: '/docs/technical/guarantees' },
    ],
  },
  {
    title: 'Channels',
    href: '/docs/channels',
    children: [
      { title: 'API Channel', href: '/docs/channels/api' },
      { title: 'Email Channel', href: '/docs/channels/email' },
      { title: 'Webapp Channel', href: '/docs/channels/webapp' },
    ],
  },
  {
    title: 'Security',
    href: '/docs/security',
    children: [
      { title: 'Sovereignty', href: '/docs/security/sovereignty' },
    ],
  },
  {
    title: 'Compliance',
    href: '/docs/compliance',
    children: [
      { title: "Auditor's Guide", href: '/docs/compliance/auditor-guide' },
    ],
  },
  { title: 'FAQ', href: '/docs/faq' },
]

const docsNavFr: NavItem[] = [
  { title: 'Aperçu', href: '/docs' },
  {
    title: 'Technique',
    href: '/docs/technical',
    children: [
      { title: 'Premier Scellement', href: '/docs/technical/first-seal' },
      { title: 'Concepts Fondamentaux', href: '/docs/technical/core-concepts' },
      { title: 'Référence API', href: '/docs/technical/api-reference' },
      { title: 'Sémantique de Preuve', href: '/docs/technical/proof-semantics' },
      { title: 'Garanties', href: '/docs/technical/guarantees' },
    ],
  },
  {
    title: 'Canaux',
    href: '/docs/channels',
    children: [
      { title: 'Canal API', href: '/docs/channels/api' },
      { title: 'Canal Email', href: '/docs/channels/email' },
      { title: 'Canal Webapp', href: '/docs/channels/webapp' },
    ],
  },
  {
    title: 'Sécurité',
    href: '/docs/security',
    children: [
      { title: 'Souveraineté', href: '/docs/security/sovereignty' },
    ],
  },
  {
    title: 'Conformité',
    href: '/docs/compliance',
    children: [
      { title: "Guide de l'Auditeur", href: '/docs/compliance/auditor-guide' },
    ],
  },
  { title: 'FAQ', href: '/docs/faq' },
]

interface DocsLayoutProps {
  children: React.ReactNode
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  const { lang } = useLang()
  const pathname = usePathname()
  const docsNav = lang === 'en' ? docsNavEn : docsNavFr
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const isActive = (href: string) => pathname === href
  const isParentActive = (item: NavItem) => {
    if (pathname === item.href) return true
    if (item.children?.some(child => pathname === child.href)) return true
    return false
  }

  const handleLinkClick = () => {
    setSidebarOpen(false)
  }

  const SidebarContent = () => (
    <>
      <div className="mb-2">
        <Link
          href="/"
          onClick={handleLinkClick}
          className="inline-flex items-center gap-1.5 text-[var(--text-muted)] hover:text-[var(--accent)] text-sm transition-colors min-h-[44px] md:min-h-0"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          {lang === 'en' ? 'Back to Home' : 'Retour à l\'accueil'}
        </Link>
      </div>
      <ul className="space-y-0.5">
        {docsNav.map((item) => (
          <li key={item.href}>
            {item.children ? (
              <div>
                <span
                  className={`block px-2 py-1 md:py-1 text-sm font-semibold min-h-[44px] md:min-h-0 flex items-center ${
                    isParentActive(item)
                      ? 'text-[var(--accent)]'
                      : 'text-[var(--text-primary)]'
                  }`}
                >
                  {item.title}
                </span>
                <ul className="ml-2 border-l border-[var(--border)] pl-2 space-y-0">
                  {item.children.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        onClick={handleLinkClick}
                        className={`block px-2 py-2 md:py-1 text-sm rounded transition-colors min-h-[44px] md:min-h-0 flex items-center ${
                          isActive(child.href)
                            ? 'text-[var(--accent)] bg-[var(--accent)]/10'
                            : 'text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card)]'
                        }`}
                      >
                        {child.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <Link
                href={item.href}
                onClick={handleLinkClick}
                className={`block px-2 py-2 md:py-1 text-sm rounded transition-colors min-h-[44px] md:min-h-0 flex items-center ${
                  isActive(item.href)
                    ? 'text-[var(--accent)] bg-[var(--accent)]/10 font-medium'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card)]'
                }`}
              >
                {item.title}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </>
  )

  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      <Header />

      {/* Mobile menu button - positioned below header on left */}
      <button
        onClick={() => setSidebarOpen(true)}
        className="md:hidden fixed top-[4.5rem] left-4 z-40 p-2 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-lg text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors"
        aria-label="Open menu"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/60 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Mobile sidebar drawer */}
      <aside
        className={`md:hidden fixed left-0 top-0 h-full w-72 bg-[var(--bg-secondary)] z-50 transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-[var(--border)]">
          <span className="text-[var(--text-primary)] font-semibold text-sm">
            {lang === 'en' ? 'Documentation' : 'Documentation'}
          </span>
          <button
            onClick={() => setSidebarOpen(false)}
            className="p-2 text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
            aria-label="Close menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="p-4 overflow-y-auto h-[calc(100%-60px)]">
          <SidebarContent />
        </nav>
      </aside>

      <div className="pt-16 flex">
        {/* Desktop Sidebar */}
        <aside className="hidden md:block w-64 h-[calc(100vh-4rem)] border-r border-[var(--border)] bg-[var(--bg-secondary)] fixed left-0 top-16 overflow-y-auto">
          <nav className="p-3">
            <SidebarContent />
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 md:ml-64 min-h-[calc(100vh-4rem)]">
          <div className="max-w-4xl mx-auto px-4 md:px-8 pt-14 pb-8 md:pt-12 md:pb-12">
            {children}
          </div>
        </main>
      </div>
      <div className="md:ml-64">
        <Footer />
      </div>
    </div>
  )
}
