'use client'
import Link from 'next/link'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

const tiers = [
  {
    name: 'Starter',
    price: 'Free',
    sub: 'Explore Knowledge on a real project.',
    features: [
      '1 scope, 3 namespaces',
      'Decisions, invariants, rules — unlimited history',
      'Overrides and exceptions',
      'Full-text search',
      'CLI extraction — 1 repository',
      'Slack / Teams bot — 1 channel',
      'MCP + REST API',
      '3 connected agents',
      '50,000 calls/month',
      '3 users',
      'Community support',
    ],
    cta: 'Sign up free',
    ctaHref: '/signup',
    featured: false,
  },
  {
    name: 'Team',
    price: '€199',
    priceSub: '/month',
    priceAnnual: '€159/month billed annually',
    sub: 'For teams deploying agents in production.',
    base: 'Everything in Starter, plus:',
    features: [
      'Unlimited scopes and namespaces',
      'Dependency graph and relations',
      'Override workflow with approvals',
      'Draft review workflow',
      'Event timeline and audit log',
      'Role-based access (developer → admin)',
      'Unlimited repositories',
      'Automatic re-runs in CI',
      'Stream API (custom sources)',
      'Unlimited connected agents',
      '500,000 calls/month',
      'CI/CD Verifier',
      'Unlimited users',
      'Priority email support',
    ],
    cta: 'Start 14-day trial',
    ctaHref: '/signup?plan=team',
    featured: true,
  },
  {
    name: 'Scale',
    price: '€599',
    priceSub: '/month',
    priceAnnual: '€479/month billed annually',
    sub: 'For organizations with multiple teams.',
    base: 'Everything in Team, plus:',
    features: [
      'Multi-scope organization (by BU, subsidiary, domain)',
      'Premium connectors (Confluence, SharePoint, Notion) — coming soon',
      'Observability dashboard',
      'SSO / SAML',
      '2,000,000 calls/month',
      '99.9% uptime SLA',
      'Dedicated support',
    ],
    cta: 'Start 14-day trial',
    ctaHref: '/signup?plan=scale',
    featured: false,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    sub: 'For regulated organizations.',
    base: 'Everything in Scale, plus:',
    features: [
      'On-premise deployment',
      'SCIM provisioning',
      'AI Act governance support',
      'Compliance reporting (AI Act, SOC 2, ISO 27001)',
      'Third-party audit support',
      'Unlimited calls/month',
      'Custom integrations and onboarding',
      'Custom SLA',
    ],
    cta: 'Contact sales',
    ctaHref: '/company/contact',
    featured: false,
  },
]

type CellVal = boolean | string

const registryRows: { label: string; starter: CellVal; team: CellVal; scale: CellVal; enterprise: CellVal }[] = [
  { label: 'Scopes',                    starter: '1',    team: 'Unlimited', scale: 'Unlimited', enterprise: 'Unlimited' },
  { label: 'Namespaces',                starter: '3',    team: 'Unlimited', scale: 'Unlimited', enterprise: 'Unlimited' },
  { label: 'Decisions, invariants, rules', starter: true, team: true,      scale: true,        enterprise: true },
  { label: 'Overrides and exceptions',  starter: true,   team: true,        scale: true,        enterprise: true },
  { label: 'Full-text search',          starter: true,   team: true,        scale: true,        enterprise: true },
  { label: 'Dependency graph',          starter: false,  team: true,        scale: true,        enterprise: true },
  { label: 'Draft review workflow',     starter: false,  team: true,        scale: true,        enterprise: true },
  { label: 'Approval workflows',        starter: false,  team: true,        scale: true,        enterprise: true },
  { label: 'Event timeline and audit log', starter: false, team: true,     scale: true,        enterprise: true },
  { label: 'Role-based access',         starter: false,  team: true,        scale: true,        enterprise: true },
  { label: 'Multi-scope organization',  starter: false,  team: false,       scale: true,        enterprise: true },
  { label: 'Observability dashboard',   starter: false,  team: false,       scale: true,        enterprise: true },
]

const extractionRows: { label: string; starter: CellVal; team: CellVal; scale: CellVal; enterprise: CellVal }[] = [
  { label: 'CLI extraction',            starter: '1 repo', team: 'Unlimited', scale: 'Unlimited', enterprise: 'Unlimited' },
  { label: 'Manual re-runs',            starter: true,   team: true,        scale: true,        enterprise: true },
  { label: 'Automatic re-runs in CI',   starter: false,  team: true,        scale: true,        enterprise: true },
  { label: 'Stream API (custom sources)', starter: false, team: true,       scale: true,        enterprise: true },
  { label: 'Slack / Teams bot',         starter: '1 channel', team: 'Unlimited', scale: 'Unlimited', enterprise: 'Unlimited' },
  { label: 'Premium connectors (Confluence, SharePoint, Notion)', starter: false, team: false, scale: 'Coming soon', enterprise: 'Coming soon' },
]

const agentRows: { label: string; starter: CellVal; team: CellVal; scale: CellVal; enterprise: CellVal }[] = [
  { label: 'MCP + REST API',            starter: true,   team: true,        scale: true,        enterprise: true },
  { label: 'Connected agents',          starter: '3',    team: 'Unlimited', scale: 'Unlimited', enterprise: 'Unlimited' },
  { label: 'Calls/month',               starter: '50,000', team: '500,000', scale: '2,000,000', enterprise: 'Unlimited' },
  { label: 'CI/CD Verifier',            starter: false,  team: true,        scale: true,        enterprise: true },
]

const platformRows: { label: string; starter: CellVal; team: CellVal; scale: CellVal; enterprise: CellVal }[] = [
  { label: 'Users',                     starter: '3',    team: 'Unlimited', scale: 'Unlimited', enterprise: 'Unlimited' },
  { label: 'SSO / SAML',               starter: false,  team: false,       scale: true,        enterprise: true },
  { label: 'SCIM provisioning',         starter: false,  team: false,       scale: false,       enterprise: true },
  { label: 'On-premise',               starter: false,  team: false,       scale: false,       enterprise: true },
  { label: 'Compliance reporting',      starter: false,  team: false,       scale: false,       enterprise: true },
  { label: 'Support',                   starter: 'Community', team: 'Priority email', scale: 'Dedicated', enterprise: 'Custom' },
  { label: 'SLA',                       starter: '—',    team: '—',         scale: '99.9%',     enterprise: 'Custom' },
]

const faqs = [
  {
    q: 'Can I change plans at any time?',
    a: 'Yes. Upgrade immediately, downgrade at end of billing period. Your data is never deleted.',
  },
  {
    q: 'Is there a per-seat fee?',
    a: 'No. Priced per organization, not per seat.',
  },
  {
    q: 'Can I use Knowledge with any AI agent?',
    a: 'Yes. MCP works with Claude, Copilot, Cursor, and any MCP-compatible agent. The REST API works with any framework.',
  },
]

function Cell({ value }: { value: CellVal }) {
  if (typeof value === 'boolean') {
    return value
      ? <span className="text-[var(--accent)] font-semibold">✓</span>
      : <span className="text-[var(--text-muted)]">—</span>
  }
  return <span className="text-[var(--text-secondary)] text-sm">{value}</span>
}

function CompareTable({
  title,
  rows,
}: {
  title: string
  rows: { label: string; starter: CellVal; team: CellVal; scale: CellVal; enterprise: CellVal }[]
}) {
  return (
    <div className="mb-10">
      <h3 className="font-semibold text-[var(--text-primary)] mb-3">{title}</h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b border-[var(--border)]">
              <th className="text-left py-2 pr-6 text-[var(--text-muted)] font-medium w-1/3">Feature</th>
              <th className="text-center py-2 px-3 text-[var(--text-secondary)] font-medium">Starter</th>
              <th className="text-center py-2 px-3 text-[var(--accent)] font-semibold">Team</th>
              <th className="text-center py-2 px-3 text-[var(--text-secondary)] font-medium">Scale</th>
              <th className="text-center py-2 px-3 text-[var(--text-secondary)] font-medium">Enterprise</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className={`border-b border-[var(--border-light)] ${i % 2 !== 0 ? 'bg-[var(--bg-card)]' : ''}`}>
                <td className="py-2.5 pr-6 text-[var(--text-secondary)]">{row.label}</td>
                <td className="text-center py-2.5 px-3"><Cell value={row.starter} /></td>
                <td className="text-center py-2.5 px-3"><Cell value={row.team} /></td>
                <td className="text-center py-2.5 px-3"><Cell value={row.scale} /></td>
                <td className="text-center py-2.5 px-3"><Cell value={row.enterprise} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default function Page() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <p className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] mb-4">Pricing</p>
          <h1 className="font-serif text-4xl md:text-5xl text-[var(--text-primary)] mb-4">
            Simple, transparent pricing
          </h1>
          <p className="text-[var(--text-secondary)] text-lg max-w-2xl">
            Structured governance for teams that ship with AI agents. Pay for the visibility you need, not per seat.
          </p>
        </div>
      </section>

      {/* Tiers */}
      <section className="pb-24 px-6 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
            {tiers.map((tier, i) => (
              <div
                key={i}
                className={`rounded-xl border p-6 flex flex-col ${tier.featured ? 'bg-[var(--accent)] border-[var(--accent)]' : 'bg-[var(--bg-card)] border-[var(--border)]'}`}
              >
                {tier.featured && (
                  <span className="text-xs font-mono font-semibold px-2.5 py-1 bg-white/20 text-white rounded mb-4 self-start">
                    Recommended
                  </span>
                )}
                <h3 className={`font-semibold text-base mb-1 ${tier.featured ? 'text-white' : 'text-[var(--text-primary)]'}`}>
                  {tier.name}
                </h3>
                <div className="mb-0.5 flex items-baseline gap-1">
                  <span className={`text-2xl font-bold ${tier.featured ? 'text-white' : 'text-[var(--text-primary)]'}`}>
                    {tier.price}
                  </span>
                  {tier.priceSub && (
                    <span className={`text-sm ${tier.featured ? 'text-white/70' : 'text-[var(--text-secondary)]'}`}>
                      {tier.priceSub}
                    </span>
                  )}
                </div>
                {tier.priceAnnual && (
                  <p className={`text-xs mb-3 ${tier.featured ? 'text-white/60' : 'text-[var(--text-muted)]'}`}>
                    {tier.priceAnnual}
                  </p>
                )}
                <p className={`text-sm mb-4 ${tier.featured ? 'text-white/70' : 'text-[var(--text-secondary)]'}`}>
                  {tier.sub}
                </p>
                {tier.base && (
                  <p className={`text-xs font-medium mb-2 ${tier.featured ? 'text-white/60' : 'text-[var(--text-muted)]'}`}>
                    {tier.base}
                  </p>
                )}
                <ul className="space-y-1.5 mb-7 flex-1">
                  {tier.features.map((f, fi) => (
                    <li key={fi} className={`flex items-start gap-2 text-sm ${tier.featured ? 'text-white/90' : 'text-[var(--text-secondary)]'}`}>
                      <span className={`mt-0.5 shrink-0 ${tier.featured ? 'text-white' : 'text-[var(--accent)]'}`}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={tier.ctaHref}
                  className={`px-4 py-2.5 rounded-lg font-medium text-sm text-center transition-colors ${tier.featured ? 'bg-white text-[var(--accent)] hover:bg-white/90' : 'border border-[var(--border)] text-[var(--text-primary)] hover:border-[var(--accent)] hover:text-[var(--accent)]'}`}
                >
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What counts as a call */}
      <section className="py-16 px-6 md:px-16 lg:px-24 bg-[var(--bg-secondary)]">
        <div className="max-w-3xl mx-auto">
          <p className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] mb-4">Consumption model</p>
          <h2 className="font-serif text-2xl md:text-3xl text-[var(--text-primary)] mb-6">What counts as a call?</h2>
          <p className="text-[var(--text-secondary)] mb-5">
            A call is any read request that queries the Knowledge registry:
          </p>
          <ul className="space-y-1.5 mb-6">
            {[
              'Compliance checks (knowledge_check)',
              'Queries and searches (knowledge_query, knowledge_resolve)',
              'Listing invariants, rules, or decisions',
              'Any GET request to the REST API',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                <span className="text-[var(--accent)] mt-0.5 shrink-0">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="text-[var(--text-muted)] text-sm font-medium mb-2">What does not count:</p>
          <ul className="space-y-1.5">
            {[
              'Creating entries (decisions, invariants, rules) — that\'s ingestion, not consumption',
              'Dashboard usage',
              'Extraction runs (CLI, bot, Stream API)',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-[var(--text-muted)]">
                <span className="mt-0.5 shrink-0">—</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Feature comparison */}
      <section className="py-20 px-6 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <p className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] mb-4">Compare</p>
          <h2 className="font-serif text-3xl md:text-4xl text-[var(--text-primary)] mb-10">Feature comparison</h2>
          <CompareTable title="Registry" rows={registryRows} />
          <CompareTable title="Extraction (Ingestion)" rows={extractionRows} />
          <CompareTable title="Agents (Consumption)" rows={agentRows} />
          <CompareTable title="Platform" rows={platformRows} />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 md:px-16 lg:px-24 bg-[var(--bg-secondary)]">
        <div className="max-w-3xl mx-auto">
          <p className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] mb-4">FAQ</p>
          <h2 className="font-serif text-3xl md:text-4xl text-[var(--text-primary)] mb-10">Frequently asked questions</h2>
          <div className="space-y-6">
            {faqs.map((item, i) => (
              <div key={i} className="border-b border-[var(--border)] pb-6">
                <h3 className="font-medium text-[var(--text-primary)] mb-2">{item.q}</h3>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 md:px-16 lg:px-24">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] mb-6">Get started</p>
          <h2 className="font-serif text-3xl md:text-4xl text-[var(--text-primary)] mb-4">
            Start free, scale when ready
          </h2>
          <p className="text-[var(--text-secondary)] mb-10 text-base leading-relaxed">
            No credit card required for Starter. Team and Scale trials include all features for 14 days.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/signup"
              className="px-7 py-3 bg-[var(--accent)] text-white font-medium rounded-lg hover:bg-[var(--accent-hover)] transition-colors"
            >
              Sign up free
            </Link>
            <Link
              href="/company/contact"
              className="px-7 py-3 border border-[var(--border)] text-[var(--text-primary)] font-medium rounded-lg hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
            >
              Contact sales →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
