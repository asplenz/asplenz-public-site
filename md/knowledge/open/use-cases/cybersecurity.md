# Cybersecurity

## Give every agent your security rules — before it touches the infrastructure.

AI agents are operating on your infrastructure: scanning vulnerabilities, remediating incidents, generating code, deploying services. They act fast — but they don't know your security policies, your pentest boundaries, or your incident response playbooks.

Knowledge gives your security team a structured registry where invariants, rules, and decisions are captured once and enforced everywhere — by every agent, every pipeline, every time.

---

## The Problem

Your security rules exist. They're just not where agents can find them:

- ISO 27001 controls in a PDF no one opens
- Incident response playbooks in Confluence, last updated 18 months ago
- Pentest boundaries agreed in a Slack thread
- Post-mortem decisions buried in Jira tickets
- Code security rules scattered across READMEs and PR comments

When an AI agent remediates a production incident at 3am, it doesn't check any of these. It acts on its training — not on your policies.

---

## How Knowledge Solves This

### 1. Security guardrails for coding agents

AI agents generating code must respect your security invariants:

```
Invariant: Never log PII data
Invariant: All external connections go through the API Gateway
Invariant: Secrets must never transit as plaintext in environment variables
Rule: npm dependencies must be audited before merge (MANDATORY)
Rule: SQL queries must use parameterized statements (MANDATORY)
```

Agents query Knowledge before writing code. The CI Verifier blocks the merge if generated code violates a declared constraint.

### 2. Governed incident response

An agent analyzing logs and proposing remediation actions must operate within strict boundaries:

```
Invariant: No remediation action on production without human approval
Rule: Isolate the host before any forensic analysis (MANDATORY)
Rule: Notify the CISO within 30 minutes for any P1 incident (MANDATORY)
Decision: Ransomware playbook v3 — approved 2024-11-12
```

Every decision made during the incident is traced — who approved what, which rule was consulted, which exception was created and by whom. This is exactly what an auditor or regulator asks for after an incident.

### 3. Controlled pentest and vulnerability scanning

Autonomous scanning agents must know the authorized perimeter:

```
Invariant: Scan perimeter limited to assets declared in the registry
Invariant: No active scanning on production during business hours
Rule: Any vulnerability with CVSS >= 9.0 escalated immediately to CISO (MANDATORY)
Override: Production scan authorized 2026-03-15 02:00-05:00 — approved by CISO
```

The Override with TTL is particularly suited here — a temporary, traceable authorization that automatically expires. No risk of forgetting to revoke it.

### 4. Extract rules from existing security sources

Your team already has security rules — they're just not structured. Knowledge extracts them automatically:

```bash
knowledge extract --scope Security \
  --source ./policies --pattern "**/*.md" \
  --source ./runbooks --pattern "**/*.md" \
  --source ./post-mortems --pattern "**/*.md"
```

Sources that produce the best results:
- Security policies and standards (ISO 27001, SOC 2 controls)
- Incident response runbooks and playbooks
- Resolved vulnerability tickets — every fix is an implicit rule
- PRs rejected for security reasons — a mine of undocumented invariants
- Slack #security — decisions made in real time during incidents

The CISO reviews and approves. The security registry is built from actual practices, not from a theoretical document that's never updated.

### 5. Agent-to-agent governance

When multiple agents operate on the same infrastructure, Knowledge prevents conflicts:

```
Agent A (scanner): "I want to scan 10.0.1.0/24"
  → knowledge_check: OK, within declared perimeter

Agent B (deployer): "I want to deploy service-x to production"
  → knowledge_check: BLOCKED — "No deployments during active scan window"

Agent C (remediator): "I want to restart nginx on prod-web-03"
  → knowledge_check: REQUIRES APPROVAL — "No remediation on prod without human approval"
  → knowledge_request_approval → CISO approves → proceed
```

Every interaction is recorded. Every constraint check is traceable.

---

## NIS2 and ISO 27001 Compliance

Knowledge maps directly to the traceability requirements of NIS2 and ISO 27001:

| Requirement | Knowledge Feature |
|------------|-------------------|
| Risk management measures (NIS2 Art. 21) | Invariants codify security controls, rules enforce operational measures |
| Incident handling (NIS2 Art. 21.2b) | Decisions trace every action during incidents, approval workflows gate critical actions |
| Supply chain security (NIS2 Art. 21.2d) | Rules enforce dependency auditing, CI Verifier blocks non-compliant code |
| Policies on cryptography (NIS2 Art. 21.2h) | Invariants enforce encryption standards, overrides trace exceptions |
| Access control (ISO 27001 A.9) | Role-based access, approval workflows, override governance |
| Operations security (ISO 27001 A.12) | Rules version operational procedures, event timeline traces changes |
| Incident management (ISO 27001 A.16) | Full decision trail with timestamps, approvals, and references |
| Compliance (ISO 27001 A.18) | Registry queryable at any point in time — audit-ready by design |

---

## Day-to-Day Workflows

### For the CISO

- Review extracted security rules in the dashboard — approve, reject, or edit
- Monitor agent compliance via the event timeline
- Approve override requests for temporary exceptions (pentest windows, emergency access)
- Produce compliance evidence for auditors — structured data, not PDF screenshots

### For the SecOps team

- Declare invariants and rules that agents must respect
- Use the Slack/Teams bot: post a security decision in #security, the bot detects and structures it
- Review CI Verifier reports on security-related PRs
- Create time-limited overrides for maintenance and testing windows

### For the security auditor

- Query the registry for all active invariants and rules at any date
- Trace every agent action back to the constraint it followed (or violated)
- Verify that overrides were approved by authorized personnel
- Export compliance reports in structured format

---

## What It Replaces

| Before | After |
|--------|-------|
| Security policies in PDFs | Typed, searchable invariants and rules |
| Playbooks in Confluence | Versioned rules with change history |
| Pentest boundaries in Slack | Invariants with traceable overrides |
| Post-incident "what happened?" | Structured decision trail with timestamps |
| Manual compliance evidence gathering | Registry queryable at any point in time |
| Agents acting without security context | Pre-flight constraint checking on every action |

---

## Get Started

```bash
# 1. Extract rules from existing security documentation
knowledge extract --scope Security --source ./policies --source ./runbooks

# 2. Review and approve in the dashboard
# → open http://localhost:3002

# 3. Connect your agents via MCP
# → Agents query invariants before acting

# 4. Add the CI Verifier to your pipeline
# → Security rules checked on every PR
```

[Getting Started Guide](/docs/getting-started) · [AI Agent Integration](/product/ai-agents) · [CI Verifier](/product/ci-verifier) · [Pricing](/pricing)
