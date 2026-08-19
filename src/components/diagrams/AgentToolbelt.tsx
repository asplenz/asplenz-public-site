/**
 * Agent + tool-belt diagram - shows an agent framework at the top with the tools
 * it can call laid out below as a grid of cards. One tool can be marked as the
 * primary policy authority (highlighted).
 *
 * Fence syntax :
 *   ```agent-toolbelt
 *   input: Customer intent (chat, voice, email)
 *   agent: Agent framework (Claude, GPT, LangGraph, MCP, custom)
 *   tool: CRM lookup | get customer facts
 *   tool: Order / policy lookup | get object facts
 *   tool*: Knowledge /resolve | policy authority
 *   tool: Execute / Slack / Email |
 *   ```
 *
 * Lines are order-independent ; `input:` and `agent:` are optional, `tool:` and
 * `tool*:` are the tool rows (star = highlighted).
 */
interface AgentToolbeltProps {
  raw: string;
}

interface Tool {
  name: string;
  desc: string;
  highlighted: boolean;
}

interface Parsed {
  input?: string;
  agent?: string;
  tools: Tool[];
}

function parse(raw: string): Parsed {
  const out: Parsed = { tools: [] };
  raw
    .trim()
    .split('\n')
    .map((l) => l.trim())
    .filter(Boolean)
    .forEach((line) => {
      const [prefixRaw, ...rest] = line.split(':');
      const prefix = prefixRaw.trim().toLowerCase();
      const body = rest.join(':').trim();
      if (prefix === 'input') out.input = body;
      else if (prefix === 'agent') out.agent = body;
      else if (prefix === 'tool' || prefix === 'tool*') {
        const [name, desc = ''] = body.split('|').map((s) => s.trim());
        out.tools.push({ name, desc, highlighted: prefix === 'tool*' });
      }
    });
  return out;
}

export default function AgentToolbelt({ raw }: AgentToolbeltProps) {
  const { input, agent, tools } = parse(raw);

  return (
    <div className="my-8 not-prose">
      {input && (
        <>
          <div
            className="mx-auto max-w-md rounded-full px-6 py-3 text-center text-sm"
            style={{
              backgroundColor: 'var(--bg-secondary)',
              color: 'var(--text-secondary)',
              border: '1px solid var(--border-light)',
            }}
          >
            {input}
          </div>
          <div
            className="flex justify-center py-2 text-xl font-mono"
            style={{ color: 'var(--accent-mid)' }}
            aria-hidden="true"
          >
            ↓
          </div>
        </>
      )}

      {agent && (
        <div
          className="rounded-lg px-6 py-4 text-center"
          style={{
            backgroundColor: 'var(--accent)',
            color: '#ffffff',
          }}
        >
          <div className="font-mono text-xs uppercase tracking-widest opacity-70 mb-1">
            Agent
          </div>
          <div className="text-sm font-medium">{agent}</div>
        </div>
      )}

      {tools.length > 0 && (
        <>
          <div
            className="flex justify-center py-2 text-xl font-mono"
            style={{ color: 'var(--accent-mid)' }}
            aria-hidden="true"
          >
            ↓
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {tools.map((t, i) => (
              <div
                key={i}
                className="rounded-lg p-4"
                style={
                  t.highlighted
                    ? {
                        backgroundColor: 'var(--accent-light)',
                        border: '2px solid var(--accent)',
                      }
                    : {
                        backgroundColor: 'var(--bg-card)',
                        border: '1px solid var(--border-light)',
                      }
                }
              >
                <div
                  className="font-mono text-xs uppercase tracking-widest mb-1"
                  style={{
                    color: t.highlighted ? 'var(--accent)' : 'var(--text-muted)',
                  }}
                >
                  Tool
                </div>
                <div
                  className="text-sm font-medium leading-snug"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {t.name}
                </div>
                {t.desc && (
                  <div
                    className="text-xs mt-1 leading-snug"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {t.desc}
                  </div>
                )}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
