'use client'

import { knowledgeDocs } from '@/lib/knowledge-docs'
import MarkdownDoc from '@/app/components/MarkdownDoc'

export default function EvaluationModelPage() {
  const doc = knowledgeDocs['evaluation-model']
  return (
    <div>
      <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-6">{doc.title}</h1>
      <MarkdownDoc content={doc.content} />
    </div>
  )
}
