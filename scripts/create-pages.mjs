import fs from 'fs'
import path from 'path'

// [route-path, content-key, layout]
// layout: 'docs' = uses docs/layout.tsx (sidebar), 'page' = PageLayout (header+footer+back), 'plain' = header+footer only
const pages = [
  // Root
  ['app/page.tsx',                                    'landing',                        'plain'],
  ['app/pricing/page.tsx',                            'pricing',                        'page'],
  ['app/changelog/page.tsx',                          'changelog',                      'page'],
  // Product
  ['app/product/how-it-works/page.tsx',               'product/how-it-works',           'page'],
  ['app/product/extraction/page.tsx',                 'product/extraction',             'page'],
  ['app/product/ai-agents/page.tsx',                  'product/ai-agents',              'page'],
  ['app/product/ci-verifier/page.tsx',                'product/ci-verifier',            'page'],
  // Docs (uses docs layout)
  ['app/docs/getting-started/page.tsx',               'docs/getting-started',           'docs'],
  ['app/docs/extraction/page.tsx',                    'docs/extraction',                'docs'],
  ['app/docs/concepts/decisions/page.tsx',            'docs/concepts/decisions',        'docs'],
  ['app/docs/concepts/invariants/page.tsx',           'docs/concepts/invariants',       'docs'],
  ['app/docs/concepts/rules/page.tsx',                'docs/concepts/rules',            'docs'],
  ['app/docs/concepts/overrides/page.tsx',            'docs/concepts/overrides',        'docs'],
  ['app/docs/concepts/scopes/page.tsx',               'docs/concepts/scopes',           'docs'],
  ['app/docs/integrations/claude-mcp/page.tsx',       'docs/integrations/claude-mcp',   'docs'],
  ['app/docs/integrations/ci-verifier/page.tsx',      'docs/integrations/ci-verifier',  'docs'],
  ['app/docs/integrations/api-reference/page.tsx',    'docs/integrations/api-reference','docs'],
  // Blog
  ['app/blog/why-adrs-fail/page.tsx',                 'blog/why-adrs-fail',             'page'],
  ['app/blog/governing-ai-agents/page.tsx',           'blog/governing-ai-agents',       'page'],
  // Use cases
  ['app/use-cases/engineering/page.tsx',              'use-cases/engineering',          'page'],
  ['app/use-cases/finance/page.tsx',                  'use-cases/finance',              'page'],
  ['app/use-cases/legal/page.tsx',                    'use-cases/legal',                'page'],
  ['app/use-cases/healthcare/page.tsx',               'use-cases/healthcare',           'page'],
  // Compliance
  ['app/compliance/ai-act/page.tsx',                  'compliance/ai-act',              'page'],
  // Evidence
  ['app/evidence/page.tsx',                           'evidence',                       'plain'],
  // Company
  ['app/company/about/page.tsx',                      'company/about',                  'page'],
  ['app/company/contact/page.tsx',                    'company/contact',                'page'],
  ['app/company/legal/page.tsx',                      'company/legal',                  'page'],
]

function makePageContent(key, layout) {
  if (layout === 'docs') {
    return `'use client'
import { pages } from '@/lib/knowledge-pages'
import MarkdownDoc from '@/app/components/MarkdownDoc'

export default function Page() {
  const page = pages[${JSON.stringify(key)}]
  return <MarkdownDoc content={page.content} />
}
`
  }

  if (layout === 'plain') {
    return `'use client'
import { pages } from '@/lib/knowledge-pages'
import MarkdownDoc from '@/app/components/MarkdownDoc'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

export default function Page() {
  const page = pages[${JSON.stringify(key)}]
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
`
  }

  // 'page' layout — uses PageLayout
  return `'use client'
import { pages } from '@/lib/knowledge-pages'
import MarkdownDoc from '@/app/components/MarkdownDoc'
import PageLayout from '@/app/components/PageLayout'

export default function Page() {
  const page = pages[${JSON.stringify(key)}]
  return (
    <PageLayout>
      <MarkdownDoc content={page.content} />
    </PageLayout>
  )
}
`
}

let created = 0
let skipped = 0

for (const [filePath, key, layout] of pages) {
  const dir = path.dirname(filePath)
  fs.mkdirSync(dir, { recursive: true })

  // Skip if file exists and we don't want to overwrite (for now overwrite all)
  const content = makePageContent(key, layout)
  fs.writeFileSync(filePath, content, 'utf-8')
  created++
  console.log(`  created: ${filePath}`)
}

console.log(`\nDone: ${created} pages created`)
