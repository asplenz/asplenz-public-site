'use client'
import { pages } from '@/lib/knowledge-pages'
import MarkdownDoc from '@/app/components/MarkdownDoc'

export default function Page() {
  const page = pages["docs/integrations/claude-mcp"]
  return <MarkdownDoc content={page.content} />
}
