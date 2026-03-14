'use client'

import Link from 'next/link'

const columns = [
  {
    heading: 'Product',
    links: [
      { label: 'How it works', href: '/product/how-it-works' },
      { label: 'Extraction', href: '/product/extraction' },
      { label: 'AI Agents', href: '/product/ai-agents' },
      { label: 'CI Verifier', href: '/product/ci-verifier' },
      { label: 'Pricing', href: '/pricing' },
    ],
  },
  {
    heading: 'Docs',
    links: [
      { label: 'Getting Started', href: '/docs/getting-started' },
      { label: 'Concepts', href: '/docs/concepts/decisions' },
      { label: 'Integrations', href: '/docs/integrations/claude-mcp' },
      { label: 'API Reference', href: '/docs/integrations/api-reference' },
      { label: 'Changelog', href: '/changelog' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About', href: '/company/about' },
      { label: 'Contact', href: '/company/contact' },
      { label: 'Legal', href: '/company/legal' },
      { label: 'Privacy', href: '/company/legal' },
    ],
  },
  {
    heading: 'Also by Asplenz',
    links: [
      { label: 'Evidence →', href: '/evidence' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-[var(--bg-secondary)] border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {columns.map((col) => (
            <div key={col.heading}>
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--text-muted)] mb-4">
                {col.heading}
              </p>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-[var(--border)] pt-6">
          <p className="text-sm text-[var(--text-muted)]">&copy; 2026 Asplenz. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
