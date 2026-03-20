# Pricing

Structured governance for teams that ship with AI agents. Pay for the visibility you need, not per seat.

---

## Starter — Free

*Explore Knowledge on a real project.*

**Registry**
- 1 scope, 3 namespaces
- Decisions, invariants, rules — unlimited history
- Overrides and exceptions
- Full-text search

**Extraction**
- CLI extraction — 1 repository
- Slack / Teams bot — 1 channel
- Manual re-runs only

**Agents**
- MCP + REST API
- 3 connected agents
- 50,000 calls/month

**Team**
- 3 users
- Community support

---

## Team — €199/month

*€159/month billed annually. For teams deploying agents in production.*

Everything in Starter, plus:

**Registry**
- Unlimited scopes and namespaces
- Dependency graph and relations
- Override workflow with approvals
- Draft review workflow
- Event timeline and audit log
- Role-based access (developer, senior-dev, tech-lead, admin)

**Extraction**
- Unlimited repositories
- Automatic re-runs in CI
- Stream API (custom sources)
- Slack / Teams bot — unlimited channels

**Agents**
- Unlimited connected agents
- 500,000 calls/month
- CI/CD Verifier

**Team**
- Unlimited users
- Priority email support

---

## Scale — €599/month

*€479/month billed annually. For organizations with multiple teams.*

Everything in Team, plus:

- Multi-scope organization (by BU, subsidiary, domain)
- Premium extraction connectors (Confluence, SharePoint, Notion) — coming soon
- Observability dashboard
- SSO / SAML
- 99.9% uptime SLA
- Dedicated support

---

## Enterprise — Custom

*For regulated organizations.*

Everything in Scale, plus:

- On-premise deployment
- SCIM provisioning
- AI Act governance support
- Compliance reporting (AI Act, SOC 2, ISO 27001)
- Third-party audit support
- Custom integrations and onboarding
- Custom SLA

---

## Feature Comparison

### Registry

| Feature | Starter | Team | Scale | Enterprise |
|---------|:-------:|:----:|:-----:|:----------:|
| Scopes | 1 | Unlimited | Unlimited | Unlimited |
| Namespaces | 3 | Unlimited | Unlimited | Unlimited |
| Decisions, invariants, rules | Yes | Yes | Yes | Yes |
| Overrides and exceptions | Yes | Yes | Yes | Yes |
| Full-text search | Yes | Yes | Yes | Yes |
| Dependency graph | — | Yes | Yes | Yes |
| Draft review workflow | — | Yes | Yes | Yes |
| Approval workflows | — | Yes | Yes | Yes |
| Event timeline and audit log | — | Yes | Yes | Yes |
| Role-based access | — | Yes | Yes | Yes |
| Multi-scope organization | — | — | Yes | Yes |
| Observability dashboard | — | — | Yes | Yes |

### Extraction (Ingestion)

| Feature | Starter | Team | Scale | Enterprise |
|---------|:-------:|:----:|:-----:|:----------:|
| CLI extraction | 1 repo | Unlimited | Unlimited | Unlimited |
| Manual re-runs | Yes | Yes | Yes | Yes |
| Automatic re-runs in CI | — | Yes | Yes | Yes |
| Stream API (custom sources) | — | Yes | Yes | Yes |
| Slack / Teams bot | 1 channel | Unlimited | Unlimited | Unlimited |
| Premium connectors (Confluence, SharePoint, Notion) | — | — | Coming soon | Coming soon |

### Agents (Consumption)

| Feature | Starter | Team | Scale | Enterprise |
|---------|:-------:|:----:|:-----:|:----------:|
| MCP + REST API | Yes | Yes | Yes | Yes |
| Connected agents | 3 | Unlimited | Unlimited | Unlimited |
| Calls/month | 50,000 | 500,000 | 2,000,000 | Unlimited |
| CI/CD Verifier | — | Yes | Yes | Yes |

### Platform

| Feature | Starter | Team | Scale | Enterprise |
|---------|:-------:|:----:|:-----:|:----------:|
| Users | 3 | Unlimited | Unlimited | Unlimited |
| SSO / SAML | — | — | Yes | Yes |
| SCIM provisioning | — | — | — | Yes |
| On-premise | — | — | — | Yes |
| Compliance reporting | — | — | — | Yes |
| Support | Community | Priority email | Dedicated | Custom |
| SLA | — | — | 99.9% | Custom |

---

## What counts as a call?

A call is any read request that queries the Knowledge registry:

- Compliance checks (`knowledge_check`)
- Queries and searches (`knowledge_query`, `knowledge_resolve`)
- Listing invariants, rules, or decisions
- Any GET request to the REST API

What does **not** count:
- Creating entries (decisions, invariants, rules) — that's ingestion, not consumption
- Dashboard usage
- Extraction runs (CLI, bot, Stream API)

---

## FAQ

### Can I change plans at any time?

Yes. Upgrade immediately, downgrade at end of billing period. Your data is never deleted.

### Is there a per-seat fee?

No. Priced per organization, not per seat.

### Can I use Knowledge with any AI agent?

Yes. MCP works with Claude, Copilot, Cursor, and any MCP-compatible agent. The REST API works with any framework.

---

## Get Started

- **Starter**: [Sign up free](/signup) — no credit card required
- **Team**: [Start 14-day trial](/signup?plan=team)
- **Scale**: [Start 14-day trial](/signup?plan=scale)
- **Enterprise**: [Contact sales](/company/contact)
