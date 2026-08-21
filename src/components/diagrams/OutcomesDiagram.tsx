/**
 * Outcomes diagram - one source (Knowledge evaluating a case) branching into
 * N distinct outcome cards, each with a title and short body.
 *
 * Use it when the point is "the API can return one of these N results", not a
 * step-by-step flow.
 *
 * Fence syntax :
 *   ```outcomes
 *   source: Knowledge evaluates the case
 *   outcome: incomplete + required_context | The applicable policies still need specific information. The existing system obtains it and re-calls Knowledge
 *   outcome: complete + deterministic verdict | The encoded policies resolve. The workflow acts on the verdict without human review
 *   outcome: complete + approval_required | The encoded policies route the case to human review. The workflow escalates with the policy-relevant context assembled
 *   ```
 *
 * `source:` is optional (single line). Each `outcome:` line = one card, with a
 * `title | body` split. Cards colour-cycle through amber / green / accent based
 * on position.
 */
interface OutcomesDiagramProps {
  raw: string;
}

interface Outcome {
  title: string;
  body: string;
}

interface Parsed {
  source?: string;
  outcomes: Outcome[];
}

function parse(raw: string): Parsed {
  const out: Parsed = { outcomes: [] };
  raw
    .trim()
    .split('\n')
    .map((l) => l.trim())
    .filter(Boolean)
    .forEach((line) => {
      const [prefixRaw, ...rest] = line.split(':');
      const prefix = prefixRaw.trim().toLowerCase();
      const body = rest.join(':').trim();
      if (prefix === 'source') {
        out.source = body;
      } else if (prefix === 'outcome') {
        const [title, ...bodyParts] = body.split('|').map((s) => s.trim());
        out.outcomes.push({
          title,
          body: bodyParts.join(' | '),
        });
      }
    });
  return out;
}

const VARIANTS = [
  { bg: 'var(--orange-light)', border: 'var(--orange)', chip: 'var(--orange)' },
  { bg: 'var(--green-light)', border: 'var(--green)', chip: 'var(--green)' },
  { bg: 'var(--accent-light)', border: 'var(--accent)', chip: 'var(--accent)' },
];

export default function OutcomesDiagram({ raw }: OutcomesDiagramProps) {
  const { source, outcomes } = parse(raw);

  return (
    <div className="my-8 not-prose">
      {source && (
        <>
          <div
            className="mx-auto max-w-md rounded-lg px-5 py-3 text-center text-sm leading-snug"
            style={{
              backgroundColor: 'var(--bg-card)',
              color: 'var(--text-primary)',
              border: '1px solid var(--border)',
            }}
          >
            {source}
          </div>
          <div
            className="flex justify-center py-2 text-xl font-mono select-none"
            style={{ color: 'var(--accent-mid)' }}
            aria-hidden="true"
          >
            ↓
          </div>
        </>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {outcomes.map((o, i) => {
          const v = VARIANTS[i % VARIANTS.length];
          return (
            <div
              key={i}
              className="rounded-lg px-4 py-4 flex flex-col gap-2"
              style={{
                backgroundColor: v.bg,
                border: `1px solid ${v.border}`,
              }}
            >
              <div
                className="font-mono text-xs uppercase tracking-widest leading-tight"
                style={{ color: v.chip }}
              >
                {o.title}
              </div>
              {o.body && (
                <div
                  className="text-sm leading-snug"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {o.body}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
