'use client'

import { useLang } from '@/lib/LangContext'
import { getContent } from '@/lib/content'
import PageLayout from '@/app/components/PageLayout'

export default function ContactPage() {
  const { lang } = useLang()
  const t = getContent(lang)
  const content = t.contact

  const renderMarkdown = (text: string) => {
    return text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/).map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i} className="text-[var(--text-primary)]">{part.slice(2, -2)}</strong>
      }
      if (part.startsWith('*') && part.endsWith('*')) {
        return <em key={i}>{part.slice(1, -1)}</em>
      }
      return part
    })
  }

  return (
    <PageLayout>
      <article>
        <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-6">{content.title}</h1>
        <p className="text-lg text-[var(--text-secondary)] mb-4">{renderMarkdown(content.intro)}</p>
        <p className="text-[var(--text-muted)] mb-12">{renderMarkdown(content.purpose)}</p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Option 1 - Schedule */}
          <div className="p-6 bg-[var(--bg-card)] rounded-lg border border-[var(--border)]">
            <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4">{content.option1.title}</h2>
            <p className="text-[var(--text-secondary)] mb-6">{renderMarkdown(content.option1.description)}</p>

            <div className="space-y-4 mb-6">
              <div>
                <p className="font-medium text-[var(--text-primary)]">{content.option1.scope.title}</p>
                <ul className="mt-1 space-y-1">
                  {content.option1.scope.items.map((item, idx) => (
                    <li key={idx} className="text-[var(--text-muted)] text-sm flex items-center gap-2">
                      <span className="text-[var(--accent)]">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="font-medium text-[var(--text-primary)]">{content.option1.audience.title}</p>
                <ul className="mt-1 space-y-1">
                  {content.option1.audience.items.map((item, idx) => (
                    <li key={idx} className="text-[var(--text-muted)] text-sm flex items-center gap-2">
                      <span className="text-[var(--accent)]">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="font-medium text-[var(--text-primary)]">{content.option1.format.title}</p>
                <ul className="mt-1 space-y-1">
                  {content.option1.format.items.map((item, idx) => (
                    <li key={idx} className="text-[var(--text-muted)] text-sm flex items-center gap-2">
                      <span className="text-[var(--accent)]">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <a
              href="mailto:contact@asplenz.com?subject=Horizon%20Briefing%20Request"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--accent)] text-[var(--bg-primary)] font-medium rounded-lg hover:bg-[var(--accent-hover)] transition-colors"
            >
              {content.option1.cta}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

          {/* Option 2 - Email */}
          <div className="p-6 bg-[var(--bg-secondary)] rounded-lg border border-[var(--border)]">
            <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4">{content.option2.title}</h2>
            <p className="text-[var(--text-secondary)] mb-6">{content.option2.description}</p>

            <a
              href={`mailto:${content.option2.email}`}
              className="inline-flex items-center gap-2 text-[var(--accent)] font-medium hover:text-[var(--accent-hover)] transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {content.option2.email}
            </a>
          </div>
        </div>
      </article>
    </PageLayout>
  )
}
