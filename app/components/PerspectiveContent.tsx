'use client'

import Link from 'next/link'

interface Section {
  title: string
  content?: string
  intro?: string
  items?: string[]
  conclusion?: string
  before?: string[]
  after?: string[]
}

interface NextLink {
  title: string
  description: string
}

interface PerspectiveContentProps {
  title: string
  subtitle: string
  sections: Section[]
  next?: NextLink
  lang: 'en' | 'fr'
}

export default function PerspectiveContent({ title, subtitle, sections, next, lang }: PerspectiveContentProps) {
  const renderMarkdown = (text: string) => {
    return text.split(/(\*\*[^*]+\*\*)/).map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i} className="text-[var(--text-primary)]">{part.slice(2, -2)}</strong>
      }
      return part
    })
  }

  return (
    <article className="prose">
      <h1>{title}</h1>
      <p className="text-xl text-[var(--text-muted)] -mt-4 mb-8">{subtitle}</p>

      {sections.map((section, idx) => (
        <section key={idx} className="mb-10">
          <h2 className="text-xl font-semibold text-[var(--text-primary)] mt-8 mb-4">{section.title}</h2>

          {section.content && (
            <div className="text-[var(--text-secondary)]">
              {section.content.split('\n\n').map((para, pIdx) => (
                <p key={pIdx} className="mb-4">{renderMarkdown(para)}</p>
              ))}
            </div>
          )}

          {section.intro && <p className="text-[var(--text-secondary)] mb-4">{section.intro}</p>}

          {section.items && (
            <ul className="space-y-2 mb-4">
              {section.items.map((item, iIdx) => (
                <li key={iIdx} className="flex items-start gap-3 text-[var(--text-secondary)]">
                  <span className="text-[var(--accent)] mt-1">•</span>
                  {item}
                </li>
              ))}
            </ul>
          )}

          {section.conclusion && (
            <p className="text-[var(--text-muted)] italic">{section.conclusion}</p>
          )}

          {section.before && section.after && (
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="p-4 bg-[var(--bg-card)] border border-[var(--border)] rounded-lg">
                <p className="font-semibold text-[var(--text-primary)] mb-2">
                  {lang === 'en' ? 'Before Horizon:' : 'Avant Horizon :'}
                </p>
                <ul className="space-y-1">
                  {section.before.map((item, bIdx) => (
                    <li key={bIdx} className="text-[var(--text-muted)] text-sm flex items-start gap-2">
                      <span className="text-red-400">×</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-4 bg-[var(--accent)]/10 border border-[var(--accent)]/30 rounded-lg">
                <p className="font-semibold text-[var(--text-primary)] mb-2">
                  {lang === 'en' ? 'With Horizon:' : 'Avec Horizon :'}
                </p>
                <ul className="space-y-1">
                  {section.after.map((item, aIdx) => (
                    <li key={aIdx} className="text-[var(--text-secondary)] text-sm flex items-start gap-2">
                      <span className="text-[var(--accent)]">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </section>
      ))}

      {next && (
        <div className="mt-12 pt-8 border-t border-[var(--border)]">
          <Link
            href="/docs/technical/first-seal"
            className="block p-6 bg-[var(--bg-card)] border border-[var(--border)] rounded-lg hover:border-[var(--accent)] transition-colors"
          >
            <p className="font-semibold text-[var(--accent)] mb-1">{next.title}</p>
            <p className="text-[var(--text-muted)] text-sm">{next.description}</p>
          </Link>
        </div>
      )}
    </article>
  )
}
