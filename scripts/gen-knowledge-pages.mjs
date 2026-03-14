import fs from 'fs'
import path from 'path'

const base = 'md/knowledge'

const files = [
  ['landing',                        'open/landing.md',                        false],
  ['pricing',                         'open/pricing.md',                         false],
  ['product/how-it-works',            'open/product/how-it-works.md',            false],
  ['product/extraction',              'open/product/extraction.md',              false],
  ['product/ai-agents',               'open/product/ai-agents.md',               false],
  ['product/ci-verifier',             'open/product/ci-verifier.md',             false],
  ['docs/getting-started',            'open/docs/getting-started.md',            false],
  ['docs/extraction',                 'open/docs/extraction.md',                 false],
  ['docs/concepts/decisions',         'open/docs/concepts/decisions.md',         false],
  ['docs/concepts/invariants',        'open/docs/concepts/invariants.md',        false],
  ['docs/concepts/rules',             'open/docs/concepts/rules.md',             false],
  ['docs/concepts/overrides',         'open/docs/concepts/overrides.md',         false],
  ['docs/concepts/scopes',            'open/docs/concepts/scopes.md',            false],
  ['docs/integrations/claude-mcp',    'gated/docs/integrations/claude-mcp.md',   true],
  ['docs/integrations/ci-verifier',   'gated/docs/integrations/ci-cd.md',        true],
  ['docs/integrations/api-reference', 'gated/docs/integrations/api-reference.md',true],
  ['blog/why-adrs-fail',              'open/blog/why-adrs-fail.md',              false],
  ['blog/governing-ai-agents',        'open/blog/governing-ai-agents.md',        false],
  ['use-cases/engineering',           'open/use-cases/engineering.md',           false],
  ['use-cases/finance',               'open/use-cases/finance.md',               false],
  ['use-cases/legal',                 'open/use-cases/legal.md',                 false],
  ['use-cases/healthcare',            'open/use-cases/healthcare.md',            false],
  ['compliance/ai-act',               'open/compliance/ai-act.md',               false],
  ['evidence',                        'open/evidence/landing.md',                false],
  ['company/about',                   'open/company/about.md',                   false],
  ['company/contact',                 'open/company/contact.md',                 false],
  ['company/legal',                   'open/company/legal.md',                   false],
  ['changelog',                       'gated/product/changelog.md',              true],
]

const lines = [
  'export interface KnowledgePage {',
  '  title: string',
  '  content: string',
  '  gated?: boolean',
  '}',
  '',
  'export const pages: Record<string, KnowledgePage> = {',
]

for (const [key, relPath, gated] of files) {
  const fullPath = path.join(base, relPath)
  const content = fs.readFileSync(fullPath, 'utf-8').replace(/\r\n/g, '\n').replace(/\r/g, '\n')

  // Extract title from first # heading
  let title = key
  for (const line of content.split('\n')) {
    const s = line.trim()
    if (s.startsWith('# ')) { title = s.slice(2).trim(); break }
  }

  // Use JSON.stringify — handles all special chars (backticks, backslashes, quotes, etc.)
  lines.push(`  ${JSON.stringify(key)}: {`)
  lines.push(`    title: ${JSON.stringify(title)},`)
  lines.push(`    gated: ${gated},`)
  lines.push(`    content: ${JSON.stringify(content)},`)
  lines.push(`  },`)
}

lines.push('}')

fs.writeFileSync('lib/knowledge-pages.ts', lines.join('\n'), 'utf-8')
console.log('Done, entries:', files.length)
