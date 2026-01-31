'use client'

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

  const isActive = (href: string) => pathname === href
  const isParentActive = (item: NavItem) => {
    if (pathname === item.href) return true
    if (item.children?.some(child => pathname === child.href)) return true
    return false
  }

  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      <Header />
      <div className="pt-16 flex">
        {/* Sidebar */}
        <aside className="w-64 min-h-[calc(100vh-4rem)] border-r border-[var(--border)] bg-[var(--bg-secondary)] fixed left-0 top-16 overflow-y-auto">
          <nav className="p-4">
            <div className="mb-4">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-[var(--text-muted)] hover:text-[var(--accent)] text-sm transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                {lang === 'en' ? 'Back to Home' : 'Retour à l\'accueil'}
              </Link>
            </div>
            <ul className="space-y-1">
              {docsNav.map((item) => (
                <li key={item.href}>
                  {item.children ? (
                    <div>
                      <span
                        className={`block px-3 py-2 text-sm font-semibold ${
                          isParentActive(item)
                            ? 'text-[var(--accent)]'
                            : 'text-[var(--text-primary)]'
                        }`}
                      >
                        {item.title}
                      </span>
                      <ul className="ml-3 border-l border-[var(--border)] pl-3 space-y-1">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              className={`block px-3 py-1.5 text-sm rounded transition-colors ${
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
                      className={`block px-3 py-2 text-sm rounded transition-colors ${
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
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 ml-64 min-h-[calc(100vh-4rem)]">
          <div className="max-w-4xl mx-auto px-8 py-12">
            {children}
          </div>
        </main>
      </div>
      <div className="ml-64">
        <Footer />
      </div>
    </div>
  )
}
