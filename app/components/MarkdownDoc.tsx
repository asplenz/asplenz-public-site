'use client'

import React from 'react'

function renderInlineMarkdown(text: string): React.ReactNode[] {
  return text.split(/(\*\*[^*]+\*\*|`[^`]+`)/).map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i} className="font-semibold text-[var(--text-primary)]">{part.slice(2, -2)}</strong>
    }
    if (part.startsWith('`') && part.endsWith('`')) {
      return <code key={i} className="text-[var(--accent)] bg-[var(--bg-card)] px-1.5 py-0.5 rounded text-sm font-mono">{part.slice(1, -1)}</code>
    }
    return part
  })
}

function parseTable(lines: string[]): { headers: string[]; rows: string[][] } {
  const headers = lines[0].split('|').map(c => c.trim()).filter(Boolean)
  const rows = lines.slice(2).map(line =>
    line.split('|').map(c => c.trim()).filter(Boolean)
  )
  return { headers, rows }
}

interface MarkdownDocProps {
  content: string
}

export default function MarkdownDoc({ content }: MarkdownDocProps) {
  // Split into code blocks and text blocks
  const segments: { type: 'code' | 'text'; content: string; lang?: string }[] = []
  const codeBlockRegex = /```(\w*)\n([\s\S]*?)```/g
  let lastIndex = 0
  let match

  while ((match = codeBlockRegex.exec(content)) !== null) {
    if (match.index > lastIndex) {
      segments.push({ type: 'text', content: content.slice(lastIndex, match.index) })
    }
    segments.push({ type: 'code', content: match[2].trimEnd(), lang: match[1] || undefined })
    lastIndex = match.index + match[0].length
  }
  if (lastIndex < content.length) {
    segments.push({ type: 'text', content: content.slice(lastIndex) })
  }

  const elements: React.ReactNode[] = []
  let key = 0

  for (const segment of segments) {
    if (segment.type === 'code') {
      elements.push(
        <pre key={key++} className="bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-secondary)] p-4 rounded-lg overflow-x-auto mb-6 text-sm">
          <code>{segment.content}</code>
        </pre>
      )
      continue
    }

    // Process text segments: split by double newlines into blocks
    const blocks = segment.content.split(/\n\n+/).filter(b => b.trim())

    for (const block of blocks) {
      const trimmed = block.trim()

      // Heading
      if (trimmed.startsWith('# ')) {
        elements.push(<h1 key={key++} className="text-3xl font-bold text-[var(--text-primary)] mb-4 mt-8 first:mt-0">{trimmed.slice(2)}</h1>)
        continue
      }
      if (trimmed.startsWith('## ')) {
        elements.push(<h2 key={key++} className="text-2xl font-semibold text-[var(--text-primary)] mb-3 mt-10">{trimmed.slice(3)}</h2>)
        continue
      }
      if (trimmed.startsWith('### ')) {
        elements.push(<h3 key={key++} className="text-lg font-semibold text-[var(--text-primary)] mb-2 mt-6">{trimmed.slice(4)}</h3>)
        continue
      }

      // Horizontal rule
      if (trimmed === '---') {
        elements.push(<hr key={key++} className="border-[var(--border)] my-8" />)
        continue
      }

      // Table
      if (trimmed.includes('|') && trimmed.split('\n').length >= 2 && trimmed.split('\n')[1]?.includes('---')) {
        const tableLines = trimmed.split('\n').filter(l => l.trim())
        const { headers, rows } = parseTable(tableLines)
        elements.push(
          <div key={key++} className="overflow-x-auto mb-6">
            <table className="min-w-full border border-[var(--border)] rounded-lg overflow-hidden">
              <thead className="bg-[var(--bg-card)]">
                <tr>
                  {headers.map((h, i) => (
                    <th key={i} className="px-4 py-3 text-left text-sm font-semibold text-[var(--text-primary)]">
                      {renderInlineMarkdown(h)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border)]">
                {rows.map((row, i) => (
                  <tr key={i} className="bg-[var(--bg-secondary)]">
                    {row.map((cell, j) => (
                      <td key={j} className="px-4 py-3 text-sm text-[var(--text-secondary)]">
                        {renderInlineMarkdown(cell)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )
        continue
      }

      // Unordered list
      if (trimmed.split('\n').every(l => l.trim().startsWith('- '))) {
        const items = trimmed.split('\n').map(l => l.trim().slice(2))
        elements.push(
          <ul key={key++} className="space-y-2 mb-6">
            {items.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2.5 flex-shrink-0" />
                <span className="text-[var(--text-secondary)]">{renderInlineMarkdown(item)}</span>
              </li>
            ))}
          </ul>
        )
        continue
      }

      // Ordered list
      if (/^\d+\.\s/.test(trimmed) && trimmed.split('\n').every(l => /^\d+\.\s/.test(l.trim()) || /^\s+/.test(l))) {
        // Handle multi-line list items (with indented continuation)
        const items: string[] = []
        for (const line of trimmed.split('\n')) {
          const stripped = line.trim()
          if (/^\d+\.\s/.test(stripped)) {
            items.push(stripped.replace(/^\d+\.\s/, ''))
          } else if (items.length > 0 && stripped) {
            items[items.length - 1] += ' ' + stripped
          }
        }
        elements.push(
          <ol key={key++} className="space-y-2 mb-6">
            {items.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full border border-[var(--accent)] text-[var(--accent)] flex items-center justify-center text-xs font-semibold flex-shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <span className="text-[var(--text-secondary)]">{renderInlineMarkdown(item)}</span>
              </li>
            ))}
          </ol>
        )
        continue
      }

      // Mixed content block (paragraphs + list items)
      const lines = trimmed.split('\n')
      const hasListItems = lines.some(l => l.trim().startsWith('- '))
      const hasParagraphs = lines.some(l => !l.trim().startsWith('- ') && l.trim())

      if (hasListItems && hasParagraphs) {
        // Render line by line
        const subElements: React.ReactNode[] = []
        let listBuffer: string[] = []

        const flushList = () => {
          if (listBuffer.length > 0) {
            subElements.push(
              <ul key={`sub-${subElements.length}`} className="space-y-2 mb-4">
                {listBuffer.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2.5 flex-shrink-0" />
                    <span className="text-[var(--text-secondary)]">{renderInlineMarkdown(item)}</span>
                  </li>
                ))}
              </ul>
            )
            listBuffer = []
          }
        }

        for (const line of lines) {
          const stripped = line.trim()
          if (stripped.startsWith('- ')) {
            listBuffer.push(stripped.slice(2))
          } else if (stripped) {
            flushList()
            subElements.push(<p key={`sub-${subElements.length}`} className="text-[var(--text-secondary)] mb-3">{renderInlineMarkdown(stripped)}</p>)
          }
        }
        flushList()

        elements.push(<div key={key++} className="mb-4">{subElements}</div>)
        continue
      }

      // Regular paragraph
      elements.push(
        <p key={key++} className="text-[var(--text-secondary)] mb-4">
          {renderInlineMarkdown(trimmed.replace(/\n/g, ' '))}
        </p>
      )
    }
  }

  return <article className="prose max-w-none">{elements}</article>
}
