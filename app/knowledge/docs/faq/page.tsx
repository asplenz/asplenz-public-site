'use client'

import { knowledgeDocs } from '@/lib/knowledge-docs'
import MarkdownDoc from '@/app/components/MarkdownDoc'

export default function FaqPage() {
  const doc = knowledgeDocs['faq']
  return (
    <div>
      <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-6">{doc.title}</h1>
      <MarkdownDoc content={doc.content} />
    </div>
  )
}
