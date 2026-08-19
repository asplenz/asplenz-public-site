import { Fragment } from 'react';

/**
 * Horizontal 3-box pipeline diagram - replaces the ASCII box-and-arrow layout
 * that used to live inside code fences in the markdown source.
 *
 * Fence syntax :
 *   ```pipeline
 *   Your callers | Application | Workflow | BPM | AI agent
 *   Knowledge | Policy layer | Rules, versioning | Audit trail
 *   Your system of record | Execution | Persistence
 *   ```
 *
 * Each line = one box. First segment (before the first `|`) is the box title,
 * remaining segments are stacked as body lines.
 */
interface PipelineDiagramProps {
  raw: string;
}

interface Box {
  title: string;
  lines: string[];
}

function parse(raw: string): Box[] {
  return raw
    .trim()
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const parts = line.split('|').map((s) => s.trim()).filter(Boolean);
      return {
        title: parts[0] || '',
        lines: parts.slice(1),
      };
    });
}

export default function PipelineDiagram({ raw }: PipelineDiagramProps) {
  const boxes = parse(raw);

  return (
    <div className="my-8 not-prose">
      <div className="flex flex-col md:flex-row md:items-stretch gap-3 md:gap-2">
        {boxes.map((box, idx) => (
          <Fragment key={idx}>
            <div
              className="flex-1 rounded-lg p-5"
              style={{
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border)',
              }}
            >
              <div
                className="font-mono text-xs uppercase tracking-widest mb-3"
                style={{ color: 'var(--accent)' }}
              >
                {box.title}
              </div>
              <div className="space-y-1">
                {box.lines.map((line, li) => (
                  <div
                    key={li}
                    className="text-sm leading-snug"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {line}
                  </div>
                ))}
              </div>
            </div>
            {idx < boxes.length - 1 && (
              <div
                className="flex items-center justify-center text-2xl font-mono select-none"
                style={{ color: 'var(--accent-mid)' }}
                aria-hidden="true"
              >
                <span className="hidden md:inline">→</span>
                <span className="md:hidden">↓</span>
              </div>
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
}
