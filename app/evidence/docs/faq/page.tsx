'use client'

import { evidenceDocs } from '@/lib/evidence-docs'
import MarkdownDoc from '@/app/components/MarkdownDoc'

export default function FaqPage() {
  const doc = evidenceDocs['faq']
  return (
    <div>
      <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-6">{doc.title}</h1>
      <MarkdownDoc content={doc.content} />
    </div>
  )
}
