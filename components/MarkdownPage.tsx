import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypeRaw from 'rehype-raw'
import { getPage } from '@/lib/markdown'
import type { Locale } from '@/lib/i18n'

export function MarkdownPage({ slug, locale }: { slug: string; locale: Locale }) {
  const page = getPage(slug, locale)

  return (
    <article className="mx-auto max-w-3xl px-6 py-12">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw, rehypeSlug]}
        components={{
          h1: ({ children }) => (
            <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight text-gray-900 md:text-6xl">
              {children}
            </h1>
          ),
          h2: ({ children, id }) => (
            <h2
              id={id}
              className="mt-12 mb-4 border-b border-gray-200 pb-2 text-2xl font-semibold text-gray-900"
            >
              {children}
            </h2>
          ),
          h3: ({ children, id }) => (
            <h3 id={id} className="mt-8 mb-3 text-lg font-semibold text-primary">
              {children}
            </h3>
          ),
          p: ({ children }) => (
            <p className="my-4 leading-relaxed text-gray-800">{children}</p>
          ),
          ul: ({ children }) => (
            <ul className="my-4 list-disc space-y-1 pl-6 text-gray-800">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="my-4 list-decimal space-y-1 pl-6 text-gray-800">{children}</ol>
          ),
          a: ({ href, children }) => (
            <a
              href={href}
              className="text-primary underline decoration-primary/40 underline-offset-2 hover:decoration-primary"
            >
              {children}
            </a>
          ),
          code: ({ children }) => (
            <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-[0.9em] text-primary">
              {children}
            </code>
          ),
          blockquote: ({ children }) => (
            <blockquote className="my-4 border-l-4 border-primary bg-primary-soft px-4 py-2 text-gray-800">
              {children}
            </blockquote>
          ),
          table: ({ children }) => (
            <div className="my-6 overflow-x-auto">
              <table className="min-w-full border-collapse text-sm">{children}</table>
            </div>
          ),
          th: ({ children }) => (
            <th className="border-b border-gray-200 bg-gray-50 px-3 py-2 text-left font-semibold text-gray-900">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="border-b border-gray-200 px-3 py-2 text-gray-800">{children}</td>
          ),
        }}
      >
        {page.content}
      </ReactMarkdown>
    </article>
  )
}

export { getPage }
