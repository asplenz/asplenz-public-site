'use client'

import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLang } from '@/lib/LangContext'
import { getContent } from '@/lib/content'

const navItems = [
  { key: 'ucEngineering', href: '/use-cases/engineering' },
  { key: 'ucLegal',       href: '/use-cases/legal' },
  { key: 'ucFinance',     href: '/use-cases/finance' },
  { key: 'ucHealthcare',  href: '/use-cases/healthcare' },
  { key: 'ucCybersecurity', href: '/use-cases/cybersecurity' },
] as const

function SidebarNav() {
  const pathname = usePathname()
  const { lang } = useLang()
  const t = getContent(lang)

  return (
    <nav className="space-y-1">
      <p className="px-3 pb-2 text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">
        {t.nav.useCases}
      </p>
      {navItems.map((item) => {
        const isActive = pathname === item.href
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`block px-3 py-1.5 rounded text-sm font-medium transition-colors ${
              isActive
                ? 'text-[var(--accent)] bg-[var(--accent-light)]'
                : 'text-[var(--text-secondary)] hover:text-[var(--accent)] hover:bg-[var(--bg-primary)]'
            }`}
          >
            {t.nav[item.key]}
          </Link>
        )
      })}
    </nav>
  )
}

export default function UseCasesLayout({ children }: { children: React.ReactNode }) {
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
