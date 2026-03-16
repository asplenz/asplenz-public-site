'use client'

import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavItem {
  title: string
  href: string
  children?: { title: string; href: string }[]
}

const nav: NavItem[] = [
  { title: 'Getting Started', href: '/docs/getting-started' },
  { title: 'Concepts', href: '/docs/concepts' },
  { title: 'Extraction', href: '/docs/extraction' },
]

function SidebarNav() {
  const pathname = usePathname()

  return (
    <nav className="space-y-1">
      {nav.map((item) => {
        const isActive = pathname === item.href
        const isParentActive = item.children?.some((c) => pathname === c.href)

        return (
          <div key={item.href}>
            <Link
              href={item.href}
              className={`block px-3 py-1.5 rounded text-sm font-medium transition-colors ${
                isActive
                  ? 'text-[var(--accent)] bg-[var(--accent-light)]'
                  : 'text-[var(--text-secondary)] hover:text-[var(--accent)] hover:bg-[var(--bg-primary)]'
              }`}
            >
              {item.title}
            </Link>
            {item.children && (isParentActive || isActive) && (
              <div className="ml-3 mt-1 space-y-0.5 border-l border-[var(--border)] pl-3">
                {item.children.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    className={`block py-1 text-sm transition-colors ${
                      pathname === child.href
                        ? 'text-[var(--accent)] font-medium'
                        : 'text-[var(--text-muted)] hover:text-[var(--accent)]'
                    }`}
                  >
                    {child.title}
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

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      <Header />
      <div className="max-w-6xl mx-auto px-6 pt-20 pb-16">
        <div className="flex gap-12">
          <aside className="hidden md:block w-52 flex-shrink-0 pt-8">
            <div className="sticky top-24">
              <SidebarNav />
            </div>
          </aside>
          <main className="flex-1 min-w-0 pt-8">
            {children}
          </main>
        </div>
      </div>
      <Footer />
    </div>
  )
}
