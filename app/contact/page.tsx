'use client'

import { useLang } from '@/lib/LangContext'
import { getContent } from '@/lib/content'
import PageLayout from '@/app/components/PageLayout'

export default function ContactPage() {
  const { lang } = useLang()
  const t = getContent(lang)
  const c = t.contact as any

  return (
    <PageLayout>
      <article className="max-w-2xl">
        <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-10">{c.title}</h1>

        <div className="space-y-6 mb-10">
          {c.channels.map((ch: any, i: number) => (
            <div key={i}>
              <p className="text-[var(--text-secondary)] text-sm mb-1">{ch.label}</p>
              <a
                href={`mailto:${ch.email}`}
                className="text-[var(--accent)] font-medium hover:text-[var(--accent-hover)] transition-colors"
              >
                {ch.email}
              </a>
            </div>
          ))}
        </div>

        <p className="text-[var(--text-muted)] text-sm mb-6">{c.responseTime}</p>
        <p className="text-[var(--text-primary)] font-semibold text-sm">{c.location}</p>
      </article>
    </PageLayout>
  )
}
