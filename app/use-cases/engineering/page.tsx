'use client'

import Link from 'next/link'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

function CodeBlock({ code }: { code: string }) {
  return (
    <pre className="rounded-lg bg-[#1A1A2E] text-[#A8C8E8] text-xs p-4 overflow-x-auto whitespace-pre-wrap break-words leading-relaxed font-mono">
      {code}
    </pre>
  )
}

export default function EngineeringPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      <Header />

      {/* Hero */}
      <section className="pt-28 pb-10 px-6 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <p className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] mb-4">Use Cases</p>
          <h1 className="font-serif text-4xl md:text-5xl text-[var(--text-primary)] mb-6">Knowledge for Engineering Teams</h1>
          <p className="text-[var(--text-secondary)] text-lg leading-relaxed max-w-3xl">
            Engineering teams make hundreds of decisions. Knowledge captures them, enforces the constraints they produce, and gives AI agents the context to work within your team's standards.
          </p>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-12 px-6 md:px-16 lg:px-24 bg-[var(--bg-secondary)]">
        <div className="max-w-5xl mx-auto">
          <p className="font-serif text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-6">The Challenge</p>
          <ul className="space-y-3">
            {[
              'Architecture Decision Records decay in wikis nobody searches',
              'AI agents write code without knowing your standards',
              "Deployment rules exist in Slack messages and people's heads",
              'When someone asks "why did we choose X?", the answer is lost or reconstructed from memory',
              'CI pipelines check syntax and tests, but not organizational constraints',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-[var(--text-secondary)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How Knowledge Helps */}
      <section className="py-12 px-6 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <p className="font-serif text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-10">How Knowledge Helps</p>
          <div className="space-y-12">

            <div>
              <h3 className="font-semibold text-lg text-[var(--text-primary)] mb-2">Extract What You Already Have</h3>
              <p className="text-[var(--text-secondary)] mb-4 leading-relaxed max-w-2xl">
                Your team already has rules in your READMEs, CLAUDE.md, runbooks, architecture docs, and source code. Your AI agent (Claude Code, Cursor) connects via MCP, scans all of them, identifies decisions, constraints, and directives — whether explicit or embedded in code — and creates typed drafts for review. You review in the dashboard and approve what's correct. In minutes, scattered documentation becomes a structured registry.
              </p>
              <div className="space-y-3 max-w-2xl">
                <CodeBlock code={`> "Extract rules from ./docs, ./CLAUDE.md, and ./src (README.md files) for the Engineering scope"`} />
                <CodeBlock code={`Scanning ./docs, ./src, ./CLAUDE.md...
  > 8 invariant candidates  (e.g., "All endpoints must require authentication")
  > 11 rule candidates       (e.g., "Use conventional commits")
  > 5 decision candidates    (e.g., "Chose PostgreSQL over DynamoDB")
  > 3 duplicates skipped`} />
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-[var(--text-primary)] mb-2">Capture Decisions That Stick</h3>
              <p className="text-[var(--text-secondary)] mb-4 leading-relaxed max-w-2xl">
                Decisions are recorded by whoever makes them: a tech lead in the dashboard, an AI agent via MCP after a discussion, or the extraction pipeline from existing docs. Each decision includes context, reasoning, author, and timestamp — immutable and searchable. Link decisions to the rules and invariants they create.
              </p>
              <div className="space-y-3 max-w-2xl">
                <CodeBlock code={`Decision: "Use FastAPI for all new Python backend services"
  Context: "Evaluated Flask, Django REST, and FastAPI"
  Reasoning: "FastAPI provides native async, OpenAPI generation, and Pydantic validation"
  Author: sarah.chen
  Tags: [architecture, python, backend]`} />
                <CodeBlock code={`Decision: "Use FastAPI for all new backend services"
    creates > Rule: "New services must use FastAPI unless exempted"`} />
              </div>
              <p className="text-sm text-[var(--text-secondary)] mt-3 leading-relaxed max-w-2xl">
                Six months later, when someone asks "why FastAPI?", the answer is one search away.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-[var(--text-primary)] mb-2">Give AI Agents Your Team's Context</h3>
              <p className="text-[var(--text-secondary)] mb-4 leading-relaxed max-w-2xl">
                When Claude or Cursor works on your code, it queries Knowledge first. The agent does not guess your standards — it reads them from the same registry your team maintains.
              </p>
              <div className="max-w-2xl">
                <CodeBlock code={`Engineer: "Add a new endpoint for user profiles"

Claude > knowledge_resolve(scope="Engineering", namespace="api")
  > Returns 14 applicable entries: 2 invariants, 5 decisions, 6 rules, 1 override

Claude > knowledge_check(scope="Engineering", action="Add REST endpoint for user profiles")
  > No conflicts. Proceed.

Claude writes the endpoint following all constraints
  > Generates .knowledge/report.md citing inv-8a3f and rul-2b7c
  > Records a reference: "Followed inv-8a3f and rul-2b7c in PR #142"`} />
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-[var(--text-primary)] mb-2">Enforce Deployment Rules</h3>
              <p className="text-[var(--text-secondary)] mb-4 leading-relaxed max-w-2xl">
                Codify deployment constraints as invariants. When an agent or CI pipeline tries to deploy, Knowledge flags violations and requires approval for gated actions.
              </p>
              <div className="max-w-2xl">
                <CodeBlock code={`Invariant: "No production deployment on Friday after 16:00 UTC"
Invariant: "All deployments require PR approval from at least one team member"
Rule: "Database migrations require tech-lead sign-off" (requires_approval: true)`} />
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-[var(--text-primary)] mb-2">CI Compliance Checks</h3>
              <p className="text-[var(--text-secondary)] mb-4 leading-relaxed max-w-2xl">
                The Verifier runs in your pipeline and checks that PRs address applicable constraints. The coding agent generates an Implementation Report as <code className="font-mono text-xs bg-[var(--accent-light)] text-[var(--accent)] px-1 rounded">.knowledge/report.md</code>, committed alongside the code.
              </p>
              <div className="space-y-3 max-w-2xl">
                <CodeBlock code={`# .github/workflows/knowledge.yml
- name: Knowledge Compliance
  run: knowledge-verifier --config .knowledge-verifier.yml`} />
                <CodeBlock code={`## Implementation Report
- inv-8a3f: All endpoints require auth - followed
- rul-2b7c: Use FastAPI - followed
- rul-6f8e: PR approval required - followed`} />
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  The Verifier validates that cited IDs exist, overrides are active, and mandatory entries are addressed. With <strong>semantic analysis</strong> enabled, it also evaluates the code diff against each constraint — catching violations that citation matching alone would miss. With <strong>external checkers</strong>, constraints that cannot be verified from code alone (e.g. "PRs must have at least 2 approved reviewers") are verified via attached scripts or webhooks. Result: PASS, WARN, or FAIL.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Day-to-Day Workflow */}
      <section className="py-12 px-6 md:px-16 lg:px-24 bg-[var(--bg-secondary)]">
        <div className="max-w-5xl mx-auto">
          <p className="font-serif text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-8">Day-to-Day Workflow</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'For Engineers',
                steps: [
                  'Before coding: AI agent queries Knowledge via knowledge_resolve and knowledge_check',
                  'During coding: agent follows rules and records decisions it makes',
                  'In the commit: agent generates .knowledge/report.md citing relevant entries',
                  'CI runs: Verifier checks compliance (citations + semantic analysis + external checkers)',
                ],
              },
              {
                title: 'For Tech Leads',
                steps: [
                  'Define rules: set team standards as rules (mandatory or advisory)',
                  'Set invariants: codify non-negotiable constraints',
                  'Attach external checkers: add scripts or webhooks to constraints that need dynamic verification',
                  'Review approvals: approve or reject exception requests from agents and engineers',
                  'Monitor events: track normative changes in the event timeline',
                ],
              },
              {
                title: 'For New Engineers',
                steps: [
                  'Browse scopes: see Engineering, Product, Operations at a glance',
                  'Read invariants: understand what must never be violated',
                  'Search decisions: "why PostgreSQL?" → instant answer with context',
                  'Follow the graph: trace from rule → decision → context',
                ],
              },
            ].map((group) => (
              <div key={group.title} className="rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-6">
                <h3 className="font-semibold text-[var(--text-primary)] mb-4">{group.title}</h3>
                <ol className="space-y-3">
                  {group.steps.map((step, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-[var(--accent-light)] text-[var(--accent)] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
                      <span className="text-sm text-[var(--text-secondary)] leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What It Replaces */}
      <section className="py-12 px-6 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <p className="font-serif text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-6">What It Replaces</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-[var(--border)]">
                  {['Before', 'With Knowledge'].map((h) => (
                    <th key={h} className="text-left py-2 pr-6 font-mono text-xs uppercase tracking-wide text-[var(--text-muted)]">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ['Rules scattered across docs nobody reads', 'Automatic extraction into a structured registry'],
                  ['Architecture Decision Records in Git', 'Structured decisions with links and search'],
                  ['Deployment rules in Slack', 'Machine-readable invariants'],
                  ['Standards in wiki pages', 'Versioned rules that agents can query'],
                  ['Manual PR compliance review', 'Automated Verifier in CI with semantic analysis'],
                  ['"Ask Sarah, she remembers"', 'Searchable registry with full context'],
                ].map((row, i) => (
                  <tr key={i} className="border-b border-[var(--border-light)]">
                    <td className="py-3 pr-6 text-[var(--text-muted)] leading-relaxed">{row[0]}</td>
                    <td className="py-3 pr-6 text-[var(--text-secondary)] leading-relaxed">{row[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Get Started */}
      <section className="py-12 px-6 md:px-16 lg:px-24 bg-[var(--bg-secondary)]">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-serif text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-5">Get Started</p>
          <ol className="space-y-3 text-left mb-10">
            {[
              <><Link href="/docs/getting-started" className="text-[var(--accent)] hover:underline">Create your account →</Link></>,
              'Create an Engineering scope',
              'Ask your AI agent to extract rules from ./docs for the Engineering scope',
              'Review and approve the drafts in the dashboard',
              'Connect Claude via MCP',
              'Add the Verifier to one repository',
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full border border-[var(--accent)] text-[var(--accent)] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
                <span className="text-[var(--text-secondary)] leading-relaxed pt-0.5">{step}</span>
              </li>
            ))}
          </ol>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/docs/getting-started" className="px-7 py-3 bg-[var(--accent)] text-white font-medium rounded-lg hover:bg-[var(--accent-hover)] transition-colors">
              Getting Started →
            </Link>
            <Link href="/pricing" className="px-7 py-3 border border-[var(--border)] text-[var(--text-primary)] font-medium rounded-lg hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors">
              View Pricing →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
