/**
 * Fan-out diagram - one source (Knowledge) feeds many callers. Used for the
 * "land and expand" section on the AI-agents page.
 *
 * Fence syntax :
 *   ```fanout
 *   source: Knowledge | one policy
 *   caller: Agent Support
 *   caller: Web portal
 *   caller: Mobile app
 *   caller: BPM (batch claims)
 *   caller: Back-office ops queue
 *   ```
 *
 * `source:` is required (single line). Each `caller:` line becomes a card in the
 * fan-out row below.
 */
interface FanoutDiagramProps {
  raw: string;
}

interface Parsed {
  sourceTitle: string;
  sourceSub?: string;
  callers: string[];
}

function parse(raw: string): Parsed {
  const out: Parsed = { sourceTitle: '', callers: [] };
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
        const [title, sub] = body.split('|').map((s) => s.trim());
        out.sourceTitle = title;
        out.sourceSub = sub || undefined;
      } else if (prefix === 'caller') {
        out.callers.push(body);
      }
    });
  return out;
}

export default function FanoutDiagram({ raw }: FanoutDiagramProps) {
  const { sourceTitle, sourceSub, callers } = parse(raw);

  return (
    <div className="my-8 not-prose">
      <div
        className="mx-auto max-w-sm rounded-lg px-6 py-4 text-center"
        style={{
          backgroundColor: 'var(--accent)',
          color: '#ffffff',
        }}
      >
        <div className="font-serif text-xl leading-tight">{sourceTitle}</div>
        {sourceSub && (
          <div className="font-mono text-xs uppercase tracking-widest mt-1 opacity-70">
            {sourceSub}
          </div>
        )}
      </div>

      <div
        className="flex justify-center py-2 text-xl font-mono"
        style={{ color: 'var(--accent-mid)' }}
        aria-hidden="true"
      >
        ↓
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
        {callers.map((c, i) => (
          <div
            key={i}
            className="rounded-lg px-3 py-4 text-center text-sm leading-snug"
            style={{
              backgroundColor: 'var(--bg-card)',
              color: 'var(--text-primary)',
              border: '1px solid var(--border-light)',
            }}
          >
            {c}
          </div>
        ))}
      </div>
    </div>
  );
}
