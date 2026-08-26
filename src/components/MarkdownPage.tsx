import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import type { Pluggable } from 'unified';
import Link from 'next/link';
import { isValidElement, type ComponentProps, type ReactNode } from 'react';
import PipelineDiagram from './diagrams/PipelineDiagram';
import AgentToolbelt from './diagrams/AgentToolbelt';
import FanoutDiagram from './diagrams/FanoutDiagram';
import LifecycleDiagram from './diagrams/LifecycleDiagram';
import OutcomesDiagram from './diagrams/OutcomesDiagram';

const DIAGRAM_LANG_RE = /language-(pipeline|agent-toolbelt|fanout|lifecycle|outcomes)/;

function firstChild(children: ReactNode): ReactNode {
  if (Array.isArray(children)) return children[0];
  return children;
}

interface MarkdownPageProps {
  body: string;
  theme?: string | null;
}

/**
 * Renders a page's markdown body with a consistent prose container.
 *
 * Conventions used inside md files :
 *   - [[cta]Button text](/path)         -> styled as a solid CTA button
 *   - [text](/absolute/path)            -> next/link with locale preserved
 *   - regular [text](url)               -> inline link, opens external in new tab
 *   - ```pipeline / agent-toolbelt / fanout ``` fences render dedicated diagrams
 */
export default function MarkdownPage({ body, theme }: MarkdownPageProps) {
  // Syntax highlighting is only wired on the clean theme (dark code
  // blocks). On the default warm theme the code blocks are taupe-on-
  // taupe and highlighting would fight the palette ; we skip the
  // plugin cost entirely there.
  const rehypePlugins: Pluggable[] = theme === 'clean' ? [[rehypeHighlight, { detect: true, ignoreMissing: true }]] : [];

  return (
    <article className="max-w-3xl mx-auto px-6 md:px-8 pt-2 pb-14 md:pb-20">
      <div className="prose">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={rehypePlugins}
          components={{
            a: (props: ComponentProps<'a'>) => {
              const href = props.href || '';
              const text = props.children;
              const label = Array.isArray(text) ? text.join('') : String(text);

              // CTA marker
              if (label.startsWith('[cta]')) {
                const cleanLabel = label.replace('[cta]', '').trim();
                if (href.startsWith('/') && !href.startsWith('//')) {
                  return (
                    <Link href={href} className="cta">
                      {cleanLabel}
                    </Link>
                  );
                }
                return (
                  <a href={href} className="cta">
                    {cleanLabel}
                  </a>
                );
              }

              // Same-site absolute path
              if (href.startsWith('/') && !href.startsWith('//')) {
                return <Link href={href}>{text}</Link>;
              }

              // External / mailto
              return (
                <a
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noreferrer noopener' : undefined}
                >
                  {text}
                </a>
              );
            },
            code: (props: ComponentProps<'code'> & { node?: unknown }) => {
              const { className, children } = props;
              const match = /language-([\w-]+)/.exec(className || '');
              const lang = match?.[1];
              const raw = String(children ?? '').replace(/\n$/, '');

              if (lang === 'pipeline') return <PipelineDiagram raw={raw} />;
              if (lang === 'agent-toolbelt') return <AgentToolbelt raw={raw} />;
              if (lang === 'fanout') return <FanoutDiagram raw={raw} />;
              if (lang === 'lifecycle') return <LifecycleDiagram raw={raw} />;
              if (lang === 'outcomes') return <OutcomesDiagram raw={raw} />;

              return <code className={className}>{children}</code>;
            },
            pre: (props: ComponentProps<'pre'>) => {
              // If a child code element is one of our custom diagram languages,
              // unwrap the <pre> so the diagram renders full-width without the
              // prose <pre> styling.
              const child = firstChild(props.children);
              if (isValidElement(child)) {
                const className =
                  (child.props as { className?: string }).className || '';
                if (DIAGRAM_LANG_RE.test(className)) {
                  return <>{props.children}</>;
                }
              }
              return <pre {...props} />;
            },
          }}
        >
          {body}
        </ReactMarkdown>
      </div>
    </article>
  );
}
