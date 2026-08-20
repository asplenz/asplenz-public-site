/**
 * Vertical decision-lifecycle diagram for the "How Knowledge works" page.
 *
 * Renders a top-down flowchart :
 *   step -> step -> step -> branch (INCOMPLETE | COMPLETE) -> end (COMPLETE only)
 *
 * The INCOMPLETE branch shows a visible "loop back to /resolve" indicator ;
 * the COMPLETE branch feeds into a shared Consultation-preserved bottom card.
 *
 * Fence syntax :
 *   ```lifecycle
 *   step: Caller assembles context
 *   step: POST /resolve
 *   step: Knowledge classifies applicable rules
 *   branch-left-label: INCOMPLETE
 *   branch-left-1: required_context returned
 *   branch-left-2: Caller fetches, derives or asks
 *   branch-left-loop: Loop back to /resolve
 *   branch-right-label: COMPLETE
 *   branch-right-1: verdict + cited_rules + consultation_id
 *   branch-right-2: Caller acts
 *   end: Consultation preserved for audit and replay
 *   ```
 *
 * `step:` lines are order-preserved. Every other key is single-value.
 */
interface LifecycleDiagramProps {
  raw: string;
}

interface Parsed {
  steps: string[];
  leftLabel: string;
  leftLines: string[];
  leftLoop?: string;
  rightLabel: string;
  rightLines: string[];
  end: string;
}

function parse(raw: string): Parsed {
  const out: Parsed = {
    steps: [],
    leftLabel: '',
    leftLines: [],
    rightLabel: '',
    rightLines: [],
    end: '',
  };
  raw
    .trim()
    .split('\n')
    .map((l) => l.trim())
    .filter(Boolean)
    .forEach((line) => {
      const [prefixRaw, ...rest] = line.split(':');
      const prefix = prefixRaw.trim().toLowerCase();
      const body = rest.join(':').trim();
      if (prefix === 'step') out.steps.push(body);
      else if (prefix === 'branch-left-label') out.leftLabel = body;
      else if (prefix === 'branch-left-loop') out.leftLoop = body;
      else if (prefix.startsWith('branch-left-')) out.leftLines.push(body);
      else if (prefix === 'branch-right-label') out.rightLabel = body;
      else if (prefix.startsWith('branch-right-')) out.rightLines.push(body);
      else if (prefix === 'end') out.end = body;
    });
  return out;
}

function DownArrow() {
  return (
    <div
      className="flex justify-center py-2 text-xl font-mono select-none"
      style={{ color: 'var(--accent-mid)' }}
      aria-hidden="true"
    >
      ↓
    </div>
  );
}

function StepCard({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="rounded-lg px-5 py-3 text-center text-sm leading-snug mx-auto max-w-md"
      style={{
        backgroundColor: 'var(--bg-card)',
        color: 'var(--text-primary)',
        border: '1px solid var(--border)',
      }}
    >
      {children}
    </div>
  );
}

export default function LifecycleDiagram({ raw }: LifecycleDiagramProps) {
  const p = parse(raw);

  return (
    <div className="my-8 not-prose">
      {/* Sequential steps */}
      {p.steps.map((step, i) => (
        <div key={i}>
          <StepCard>{step}</StepCard>
          {i < p.steps.length - 1 && <DownArrow />}
        </div>
      ))}

      {/* Branch junction : split arrows */}
      <div
        className="flex justify-center gap-16 md:gap-24 py-2 text-xl font-mono select-none"
        style={{ color: 'var(--accent-mid)' }}
        aria-hidden="true"
      >
        <span>↙</span>
        <span>↘</span>
      </div>

      {/* Two-column branch */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* INCOMPLETE column */}
        <div className="flex flex-col gap-3">
          <div
            className="rounded-lg px-4 py-3 text-center"
            style={{
              backgroundColor: 'var(--orange-light)',
              border: '1px solid var(--orange)',
            }}
          >
            <div
              className="font-mono text-xs uppercase tracking-widest mb-1"
              style={{ color: 'var(--orange)' }}
            >
              {p.leftLabel}
            </div>
            {p.leftLines[0] && (
              <div
                className="text-sm leading-snug"
                style={{ color: 'var(--text-primary)' }}
              >
                {p.leftLines[0]}
              </div>
            )}
          </div>
          {p.leftLines.slice(1).map((line, i) => (
            <div key={i}>
              <DownArrow />
              <div
                className="rounded-lg px-4 py-3 text-center text-sm leading-snug"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  color: 'var(--text-secondary)',
                  border: '1px solid var(--border-light)',
                }}
              >
                {line}
              </div>
            </div>
          ))}
          {p.leftLoop && (
            <>
              <DownArrow />
              <div
                className="rounded-lg px-4 py-3 text-center text-sm font-medium flex items-center justify-center gap-2"
                style={{
                  backgroundColor: 'var(--accent-light)',
                  color: 'var(--accent)',
                  border: '1px dashed var(--accent)',
                }}
              >
                <span className="text-lg" aria-hidden="true">
                  ↺
                </span>
                {p.leftLoop}
              </div>
            </>
          )}
        </div>

        {/* COMPLETE column */}
        <div className="flex flex-col gap-3">
          <div
            className="rounded-lg px-4 py-3 text-center"
            style={{
              backgroundColor: 'var(--green-light)',
              border: '1px solid var(--green)',
            }}
          >
            <div
              className="font-mono text-xs uppercase tracking-widest mb-1"
              style={{ color: 'var(--green)' }}
            >
              {p.rightLabel}
            </div>
            {p.rightLines[0] && (
              <div
                className="text-sm leading-snug"
                style={{ color: 'var(--text-primary)' }}
              >
                {p.rightLines[0]}
              </div>
            )}
          </div>
          {p.rightLines.slice(1).map((line, i) => (
            <div key={i}>
              <DownArrow />
              <div
                className="rounded-lg px-4 py-3 text-center text-sm leading-snug"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  color: 'var(--text-secondary)',
                  border: '1px solid var(--border-light)',
                }}
              >
                {line}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* End card (Consultation), fed from COMPLETE side */}
      {p.end && (
        <>
          <div
            className="flex justify-end pr-[10%] py-2 text-xl font-mono select-none"
            style={{ color: 'var(--accent-mid)' }}
            aria-hidden="true"
          >
            ↓
          </div>
          <div
            className="rounded-lg px-5 py-4 text-center mx-auto max-w-md"
            style={{
              backgroundColor: 'var(--accent)',
              color: '#ffffff',
            }}
          >
            <div className="text-sm font-medium leading-snug">{p.end}</div>
          </div>
        </>
      )}
    </div>
  );
}
