'use client'
import { pages } from '@/lib/knowledge-pages'
import MarkdownDoc from '@/app/components/MarkdownDoc'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

export default function Page() {
  const page = pages["evidence"]
  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      <Header />
      <main className="pt-24 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <MarkdownDoc content={page.content} />
        </div>
      </main>
      <Footer />
    </div>
  )
}
