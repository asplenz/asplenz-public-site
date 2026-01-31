'use client'

import { useLang } from '@/lib/LangContext'
import { getContent } from '@/lib/content'
import Link from 'next/link'

export default function FirstSealPage() {
  const { lang } = useLang()
  const t = getContent(lang)
  const content = t.docs.firstSeal

  return (
    <article className="prose">
        <h1>{content.title}</h1>
        <p className="text-xl text-[var(--text-muted)] -mt-4 mb-2">{content.subtitle}</p>
        <p className="text-sm text-[var(--text-muted)] mb-8">{content.audience}</p>
        <p className="text-[var(--text-secondary)] mb-8 italic">{content.intro}</p>

        {content.sections.map((section, idx) => (
          <section key={idx} className="mb-10">
            <h2>{section.title}</h2>
            {section.code && (
              <pre className="bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-secondary)] p-4 rounded-lg overflow-x-auto mb-4 text-sm">
                <code>{section.code}</code>
              </pre>
            )}
            {section.content && (
              <div className="text-[var(--text-secondary)]">
                {section.content.split('\n\n').map((para, pIdx) => (
                  <p key={pIdx} className="mb-4">{para}</p>
                ))}
              </div>
            )}
            {section.items && (
              <ol className="list-decimal list-inside space-y-2 mb-4 text-[var(--text-secondary)]">
                {section.items.map((item, iIdx) => (
                  <li key={iIdx}>{item}</li>
                ))}
              </ol>
            )}
            {section.link && (
              <Link href={section.link.href} className="text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors">
                {section.link.text}
              </Link>
            )}
          </section>
        ))}

        {/* Storage Guarantees Table */}
        <section className="mb-10">
          <h2>{content.storageGuarantees.title}</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-[var(--border)] rounded-lg overflow-hidden">
              <thead className="bg-[var(--bg-card)]">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-[var(--text-primary)]">
                    {lang === 'en' ? 'Property' : 'Propriété'}
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-[var(--text-primary)]">
                    {lang === 'en' ? 'Guarantee' : 'Garantie'}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border)]">
                {content.storageGuarantees.items.map((item, idx) => (
                  <tr key={idx} className="bg-[var(--bg-secondary)]">
                    <td className="px-4 py-3 text-sm font-medium text-[var(--text-primary)]">{item.property}</td>
                    <td className="px-4 py-3 text-sm text-[var(--text-muted)]">{item.guarantee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[var(--text-muted)] text-sm mt-4 italic">{content.storageGuarantees.note}</p>
        </section>

        {/* What Horizon Does Not Do */}
        <section className="mb-10">
          <h2>{content.whatNotDo.title}</h2>
          <ul className="space-y-2 mb-4">
            {content.whatNotDo.items.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-[var(--text-secondary)]">
                <span className="font-semibold text-[var(--accent)]">{item.label}</span>
                <span className="text-[var(--text-muted)]">·</span>
                <span>{item.description}</span>
              </li>
            ))}
          </ul>
          <Link href={content.whatNotDo.link.href} className="text-[var(--accent)] hover:text-[var(--accent-hover)] text-sm transition-colors">
            {content.whatNotDo.link.text}
          </Link>
        </section>

        {/* Verify Chain */}
        <section className="mb-10">
          <h2>{content.verifyChain.title}</h2>
          <pre className="bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-secondary)] p-4 rounded-lg overflow-x-auto mb-4 text-sm">
            <code>{content.verifyChain.code}</code>
          </pre>
          <div className="text-[var(--text-secondary)]">
            {content.verifyChain.content.split('\n\n').map((para, pIdx) => (
              <p key={pIdx} className="mb-4">{para}</p>
            ))}
          </div>
        </section>
      </article>
  )
}
