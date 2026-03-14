'use client'
import { pages } from '@/lib/knowledge-pages'
import MarkdownDoc from '@/app/components/MarkdownDoc'
import PageLayout from '@/app/components/PageLayout'

export default function Page() {
  const page = pages["use-cases/healthcare"]
  return (
    <PageLayout>
      <MarkdownDoc content={page.content} />
    </PageLayout>
  )
}
