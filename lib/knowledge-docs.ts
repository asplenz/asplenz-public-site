export const knowledgeDocs = {
  'getting-started': {
    title: 'Getting Started',
    content: `
## What is Asplenz Knowledge?

Asplenz Knowledge is a structured decision governance system. It provides a central registry where engineering organizations declare their decisions, constraints, and operational rules — then enforces them across human and AI-driven workflows.

Knowledge answers three questions for every action taken in your codebase:

- **What was decided?** (Decisions)
- **What must never happen?** (Invariants)
- **What should be done now?** (Rules)

## The Problem

Engineering teams accumulate decisions across Slack threads, meeting notes, RFCs, and tribal knowledge. When AI agents generate code or humans review PRs, there is no reliable way to verify whether the proposed changes comply with existing constraints.

Knowledge makes these decisions machine-readable and enforceable.

## Core Concepts

| Concept | Purpose |
|---------|---------|
| **Decision** | A recorded fact — what was chosen and why |
| **Invariant** | An absolute constraint that must never be violated |
| **Rule** | An active directive that should be followed (mandatory or advisory) |
| **Override** | A governed exception to an invariant or rule |

Decisions are historical and immutable. Invariants and rules are active constraints. Overrides allow controlled exceptions with justification and audit trail.

## Quick Start

### 1. Create a scope

A scope is an isolation boundary for your decisions and constraints. Typical scopes: "Engineering", "Security", "Operations".

\`\`\`
POST /api/v1/scopes
{
  "name": "Engineering",
  "description": "Software engineering decisions and constraints"
}
\`\`\`

### 2. Declare an invariant

\`\`\`
POST /api/v1/scopes/{scope_id}/invariants
{
  "constraint": "All API endpoints must require authentication",
  "rationale": "Security baseline — prevents accidental data exposure",
  "author": "security-team"
}
\`\`\`

### 3. Evaluate an action

\`\`\`
POST /api/v1/check
{
  "scope_id": "scp-...",
  "intended_action": "Add a public health endpoint without authentication"
}
\`\`\`

Response:

\`\`\`json
{
  "allowed": false,
  "conflicts": [
    {
      "entry_type": "invariant",
      "statement": "All API endpoints must require authentication",
      "severity": "blocking",
      "requires_approval": true
    }
  ]
}
\`\`\`

### 4. Interpret the result

- **allowed: true** — proceed
- **allowed: false, requires_approval: true** — request human approval before proceeding
- **allowed: false, requires_approval: false** — change the approach

## Example Workflow

\`\`\`
1. AI agent receives a task: "Add a public health endpoint"
2. Agent calls Knowledge check() → conflict with auth invariant, requires_approval=true
3. Agent requests approval with justification
4. Human reviews in the UI → approves → override auto-created
5. Agent proceeds with the implementation
6. Agent opens a PR with an Implementation Report citing the invariant and override
7. CI runs the Verifier → PASS (override covers the violation)
\`\`\`

This workflow applies equally to human developers and autonomous agents.`,
  },
  'core-concepts': {
    title: 'Core Concepts',
    content: `
## Decisions

A decision is a recorded fact: what was chosen, by whom, and why.

- **Purpose**: Preserve institutional knowledge so it can be discovered and referenced
- **Lifecycle**: Created once, never modified. Decisions are historical records.
- **Mutability**: Immutable

Decisions do not enforce anything. They exist to provide context and traceability.

### Example

\`\`\`json
{
  "decision": "Use FastAPI for all new Python backend services",
  "context": "Evaluated Flask, Django REST, and FastAPI",
  "reasoning": "FastAPI has native async support, automatic OpenAPI docs, and Pydantic validation",
  "author": "tech-lead",
  "tags": ["architecture", "python"]
}
\`\`\`

A decision can be recorded by a human or by an AI agent. The \`author_type\` field distinguishes between \`human\`, \`agent\`, and \`system\` sources.

---

## Invariants

An invariant is an absolute constraint — a condition that must never be violated.

- **Purpose**: Define hard boundaries that protect critical requirements (security, compliance, operational safety)
- **Lifecycle**: Active until explicitly revoked by an administrator
- **Mutability**: Rarely modified. Invariants represent foundational constraints.

When an action conflicts with an active invariant, it is blocked unless a valid override exists.

### Example

\`\`\`json
{
  "constraint": "All API endpoints must require authentication",
  "rationale": "Security baseline — prevents accidental data exposure",
  "author": "security-team",
  "approval_required": true,
  "approver_role": "admin"
}
\`\`\`

Setting \`approval_required: true\` means any exception to this invariant requires explicit human approval before proceeding. The \`approver_role\` specifies the minimum role authorized to grant that approval.

---

## Rules

A rule is an active directive — a guideline that should be followed during development.

- **Purpose**: Codify operational standards, coding practices, and process requirements
- **Lifecycle**: Active until archived. Rules are versioned — updating a rule creates a new version while preserving the history.
- **Severity**: \`mandatory\` (violations are blocking) or \`advisory\` (violations produce warnings)

### Example

\`\`\`json
{
  "directive": "All PRs must have at least one approval before merge",
  "rationale": "Code review catches bugs and spreads knowledge",
  "author": "tech-lead",
  "severity": "mandatory"
}
\`\`\`

When a rule is updated, the previous version is preserved. This provides a clear audit trail of how standards evolved over time.

### Mandatory vs Advisory

| Severity | Evaluation behavior |
|----------|-------------------|
| **mandatory** | Treated as blocking — same as an invariant during compliance checks |
| **advisory** | Produces a warning but does not block |

---

## Overrides

An override is a governed exception to an invariant or rule.

- **Purpose**: Allow controlled deviations with justification, approval, and optional expiration
- **Types**: \`temporary\` (time-bounded) or \`permanent\`
- **Lifecycle**: Active until revoked, expired, or the target entry is itself revoked/archived

An override does not delete or weaken the constraint. It documents that a specific exception was approved, by whom, under what conditions, and for how long.

### Example

\`\`\`json
{
  "target_id": "inv-abc123",
  "target_type": "invariant",
  "justification": "Health endpoint must be public for load balancer health checks",
  "approved_by": "security-lead",
  "override_type": "temporary",
  "conditions": "Only for /health endpoint",
  "expires_at": "2025-12-31T23:59:59"
}
\`\`\`

When an override expires, the original constraint is automatically re-enforced. No manual intervention is required.

---

## Approvals

Some invariants and rules can be configured to require human approval before an exception is granted.

- When an action conflicts with an approval-required entry, the system returns \`requires_approval: true\`
- The requesting party (human or agent) submits an approval request with a justification
- A human with the required role reviews and approves or rejects
- If approved, an override is automatically created

### Approval flow

\`\`\`
Action conflicts with invariant (requires_approval=true)
  → Approval request created with justification
  → Human reviews in the UI
  → Approved: override auto-created, action can proceed
  → Rejected: requester must find an alternative
\`\`\`

Approval requests can have an expiration. Expired requests are treated as rejected.

---

## References

A reference is an append-only usage trace that records when and where a knowledge entry was cited, followed, or diverged from.

- **Purpose**: Build an audit trail of how decisions and constraints are adopted in practice
- **Contexts**: Pull requests, commits, CI checks, deployments, reviews
- **Statuses**:
  - \`cited\` — the entry was mentioned
  - \`followed\` — the entry was complied with
  - \`verified\` — compliance was proven (e.g., by automated check)
  - \`diverged\` — the entry was not followed (requires a reason)

### Example

\`\`\`json
{
  "entry_id": "inv-abc123",
  "context_type": "pull_request",
  "context_ref": "github:acme/api/pull_request#42",
  "status": "followed",
  "author": "ci-bot"
}
\`\`\`

References are never modified or deleted. They provide a complete history of how knowledge is consumed across the organization.`,
  },
  'evaluation-model': {
    title: 'Evaluation Model',
    content: `
## Normative State

The normative state is the complete set of active constraints for a given scope at a point in time. It includes:

- **Blocking invariants** — absolute constraints currently in effect
- **Mandatory rules** — active directives that must be followed
- **Advisory rules** — active recommendations
- **Active overrides** — governed exceptions that waive specific constraints

The normative state is retrieved via the \`resolve()\` operation. It returns a deterministic snapshot: for the same scope and the same set of active entries, the result is always identical.

Each resolution includes a \`normative_hash\` — a fingerprint of the current state. This allows consumers to detect when the normative state has changed since their last check.

## Scope Resolution

Every evaluation happens within a scope. A scope is an isolation boundary — invariants, rules, and overrides in one scope do not affect another.

When evaluating an action:

1. The scope is identified (by name or ID)
2. The full normative state for that scope is resolved
3. The action is evaluated against that state

In CI/CD contexts, scope resolution can be automated based on which files were changed. For example, changes to \`src/\` may map to the "Engineering" scope, while changes to \`infra/\` map to "Operations".

## Determinism

For the same action, the same scope, and the same normative state, the evaluation produces the same result. There is no randomness, no external inference, and no model-based interpretation in the evaluation path.

This property is important for CI/CD integration: re-running the same check on the same PR with the same Knowledge state produces the same verdict.

## How Overrides Affect Evaluation

When an action conflicts with an invariant or mandatory rule, the system checks whether an active override exists for that specific entry.

- If a valid override exists: the conflict is resolved. The override is recorded in the result.
- If no override exists: the conflict is reported as blocking.

An override is considered valid when:

- It targets the conflicting entry
- It is currently active (not revoked)
- It has not expired
- It belongs to the same scope

Expired overrides are treated as if they do not exist. The original constraint is automatically re-enforced.

## Evaluation Outcomes

Every evaluation returns one of three outcomes:

### Allowed

The proposed action does not conflict with any blocking invariant or mandatory rule. Any applicable advisory rules are reported as informational.

\`\`\`json
{
  "allowed": true,
  "conflicts": [],
  "advisory": [
    {
      "entry_type": "rule",
      "statement": "Use conventional commits format",
      "severity": "advisory"
    }
  ]
}
\`\`\`

### Denied

The proposed action conflicts with one or more blocking constraints, and no valid override exists.

\`\`\`json
{
  "allowed": false,
  "conflicts": [
    {
      "entry_type": "invariant",
      "statement": "All API endpoints must require authentication",
      "severity": "blocking",
      "requires_approval": false
    }
  ]
}
\`\`\`

The caller must change their approach to avoid the conflict.

### Requires Approval

The proposed action conflicts with a constraint that has \`requires_approval: true\`. The caller cannot proceed without explicit human approval.

\`\`\`json
{
  "allowed": false,
  "conflicts": [
    {
      "entry_type": "invariant",
      "statement": "All API endpoints must require authentication",
      "severity": "blocking",
      "requires_approval": true
    }
  ]
}
\`\`\`

The expected flow:

1. Submit an approval request with justification
2. Wait for a human with the required role to approve or reject
3. If approved, an override is created and the action can proceed
4. If rejected, find an alternative approach

## Overridden Conflicts

When a conflict exists but is covered by a valid override, it appears in the \`overridden\` section of the result rather than in \`conflicts\`:

\`\`\`json
{
  "allowed": true,
  "conflicts": [],
  "overridden": [
    {
      "entry_type": "invariant",
      "statement": "All API endpoints must require authentication",
      "severity": "blocking",
      "active_overrides": [
        {
          "override_id": "ovr-...",
          "justification": "Health endpoint must be public for load balancer"
        }
      ]
    }
  ]
}
\`\`\`

This provides full transparency: the caller can see that a constraint was waived, by whom, and why.`,
  },
  'ci-integration': {
    title: 'CI/CD Integration',
    content: `
## Overview

The Knowledge Verifier is a CLI tool that runs in your CI/CD pipeline. It analyzes Pull Requests against the normative state declared in Knowledge and produces a compliance verdict.

The Verifier:

- Reads PR context from the CI environment (title, description, changed files, commit messages)
- Resolves which Knowledge scopes apply based on the files changed
- Retrieves the normative state from the Knowledge API
- Checks citation coverage and override validity
- Produces a structured verdict (pass / warn / fail)
- Outputs a machine-readable JSON result and a human-readable Markdown report

The Verifier does not access your source control API. All PR context is provided by the CI runner through environment variables and local git commands.

## Gating Modes

The Verifier supports three gating modes that control how strictly compliance is enforced.

### report-only

The CI step never fails. The compliance report is always generated and available as an artifact. Use this mode during initial rollout to observe how your PRs perform against the normative state without blocking anyone.

### fail-on-blocking

The CI step fails only when a blocking violation is detected — an invariant or mandatory rule is violated and no valid override exists. Advisory warnings and missing citations do not block. This is the recommended mode for most teams.

### strict

The CI step fails on blocking violations and also when:

- The PR description does not include an Implementation Report section
- Required Knowledge entries are not cited
- Cited Knowledge IDs are invalid

Use this mode for high-assurance environments where full traceability is required.

## Fail-Open vs Fail-Closed

When the Verifier encounters an error (Knowledge API unavailable, scope not found, git diff failed), its behavior is configurable:

| Mode | Behavior |
|------|----------|
| **Fail-open** (default) | Produces a degraded report and passes CI. The report indicates what could not be verified. Recommended during adoption. |
| **Fail-closed** | Fails CI on any uncertainty. Use when compliance is mandatory and incomplete verification is unacceptable. |

## Implementation Report

An Implementation Report is a section in the PR description that documents which Knowledge entries were considered during the implementation. The expected format:

\`\`\`markdown
## Implementation Report

### Invariants verified
- inv-abc123: All endpoints require auth — followed
- inv-def456: No hardcoded secrets — followed

### Rules applied
- rul-abc123: PR approval required — followed

### Overrides used
- ovr-abc123: Health endpoint auth exception

### Decisions referenced
- dec-abc123: Use FastAPI for backend services
\`\`\`

The Verifier parses this section to extract Knowledge IDs and verify they exist in the normative state.

## Compliance Report

After each run, the Verifier produces two output files:

### Machine-readable (JSON)

\`\`\`json
{
  "status": "warn",
  "scopes_resolved": ["Engineering"],
  "blocking_violations": [],
  "warnings": [
    {
      "entry_type": "invariant",
      "entry_id": "inv-abc123",
      "statement": "All API endpoints must require authentication",
      "severity": "blocking"
    }
  ],
  "missing_citations": ["inv-abc123"],
  "implementation_report_found": false,
  "applicable_entries_summary": {
    "invariants": 3,
    "mandatory_rules": 2,
    "advisory_rules": 1
  }
}
\`\`\`

### Human-readable (Markdown)

The Markdown report includes:

- Verdict summary (PASS / WARN / FAIL) and gating mode
- Blocking violations with entry IDs and constraint text
- Applicable normative state per scope (invariants, rules, overrides)
- Citation coverage (Implementation Report found/missing, missing/invalid citations)
- Overrides used
- Recommended actions for the PR author
- Metadata (PR reference, commit SHA, timestamp)

## Example: CI Output

\`\`\`
Knowledge Verifier: WARN
  2 warning(s)
  2 missing citation(s)
  JSON: verifier-result.json
  Report: verifier-report.md
\`\`\`

In \`fail-on-blocking\` mode, this exits with code 0 (pass) because there are no blocking violations — only missing citations. In \`strict\` mode, this would exit with code 1 (fail).

## Configuration

The Verifier is configured via a YAML file. Key settings:

\`\`\`yaml
# Gating mode
gating_mode: "fail-on-blocking"

# Error handling
fail_on_error: false

# Map repository paths to Knowledge scopes
scope_mappings:
  - scope: "Engineering"
    paths: ["src/**", "lib/**"]
  - scope: "Operations"
    paths: ["infra/**", ".github/**"]

# Default scope when no path matches
default_scope: "Engineering"

# Citation requirements
citation_policy:
  require_implementation_report: true
  required_prefixes: ["inv-", "rul-"]
\`\`\`

## CI Setup

The Verifier requires:

- The Knowledge API accessible from the CI runner
- An API key stored as a CI secret
- Full git history (\`fetch-depth: 0\`) for diff computation

The Verifier reads PR metadata from CI-native environment variables (GitHub Actions, GitLab CI) or from generic environment variables for other CI systems.

Exit codes:

| Verdict | report-only | fail-on-blocking | strict |
|---------|-------------|------------------|--------|
| pass | 0 | 0 | 0 |
| warn | 0 | 0 | 0 |
| fail | 0 | 1 | 1 |`,
  },
  'agent-integration': {
    title: 'Agent Integration',
    content: `
## Overview

Knowledge is designed to be consumed by both humans and AI agents. Agents interact with Knowledge through a tool-based interface that allows them to query constraints, evaluate actions, record decisions, and request approvals.

The integration model is simple: before taking an action, the agent checks whether it is allowed. After completing work, the agent documents what was followed or diverged from.

## Recommended Agent Flow

### 1. Before acting: evaluate

Before making an architectural change, adding a dependency, modifying infrastructure, or changing a process, the agent should:

\`\`\`
1. List invariants for the relevant scope
2. List rules for the relevant scope
3. Evaluate the intended action against the normative state
\`\`\`

If the evaluation returns \`allowed: true\`, the agent proceeds. If not, the agent must either change its approach or request approval.

### 2. When blocked: request approval

If the evaluation returns a conflict with \`requires_approval: true\`:

\`\`\`
1. Submit an approval request with:
   - The conflicting entry ID
   - The intended action
   - A justification explaining why the exception is needed
2. Wait for human approval
3. If approved, proceed (an override is auto-created)
4. If rejected, find an alternative approach
\`\`\`

The agent should not proceed without approval. The approval mechanism exists to keep humans in the loop for high-risk exceptions.

### 3. After acting: document

When the agent opens a PR or completes a task, it should include an Implementation Report in the PR description:

\`\`\`markdown
## Implementation Report

### Invariants verified
- inv-abc123: All endpoints require auth — followed
- inv-def456: No hardcoded secrets — followed

### Rules applied
- rul-abc123: PR approval required — followed

### Overrides used
- ovr-abc123: Health endpoint auth exception

### Decisions referenced
- dec-abc123: Use FastAPI for backend services
\`\`\`

This report serves two purposes:

- It proves the agent considered the applicable constraints
- It enables the Verifier to automatically validate compliance in CI

### 4. Record significant decisions

When the agent makes a meaningful technical choice (selecting a library, choosing an architecture pattern, defining a convention), it should record it as a decision:

\`\`\`
Record a decision with:
  - What was decided
  - Context that led to the decision
  - Reasoning
  - Author (the agent's identifier)
\`\`\`

This builds the organization's decision history incrementally.

## Best Practices for Agent Authors

### Query before modifying

Always retrieve the normative state before making changes. Do not assume constraints from prior sessions — the normative state may have changed.

### Cite specific IDs

When referencing Knowledge entries in PR descriptions or commit messages, use the full entry ID (e.g., \`inv-abc123\`). This enables automated verification.

### Respect approval boundaries

If an action requires approval, do not attempt workarounds. The approval mechanism represents an organizational decision about what requires human oversight.

### Handle unavailability gracefully

If Knowledge is unreachable, the agent should:

- Warn the user that compliance cannot be verified
- Proceed with caution or wait, depending on the organization's policy
- Not silently ignore the failure

### Record divergence

If the agent must deviate from a rule (e.g., following an advisory rule is impractical for a specific case), it should record a reference with status \`diverged\` and provide a reason. This is preferable to silent non-compliance.

## Scope Selection

Agents should select the scope that matches the domain of their work:

- Code changes in a backend service: "Engineering"
- Infrastructure modifications: "Operations"
- Product feature decisions: "Product"

If unsure, the agent should default to the broadest applicable scope or ask the user.

## Tool Summary

Agents interact with Knowledge through the following operations:

| Operation | Purpose |
|-----------|---------|
| **List invariants** | See what must never be violated in a scope |
| **List rules** | See what should be followed (mandatory and advisory) |
| **Evaluate action** | Check if a planned action is allowed |
| **Resolve state** | Get the full normative state with hash for change detection |
| **Record decision** | Capture a new decision with context and reasoning |
| **Create override** | Request a governed exception to a constraint |
| **Request approval** | Ask for human approval when required |
| **Check approval status** | Poll the status of a pending approval |
| **Record reference** | Document that an entry was followed or diverged from |
| **Search** | Find entries by keyword across all types |`,
  },
  'security-and-permissions': {
    title: 'Security and Permissions',
    content: `
## Authentication

All API access requires an API key passed via the \`X-API-Key\` header. Keys are prefixed with \`kn_\` and stored as irreversible hashes. The raw key is returned once at creation and cannot be recovered.

Each API key has a name, a creation timestamp, and a scope access map that defines which scopes it can access and at what role level.

## Scope Isolation

Scopes provide strict data isolation. Each scope maintains its own set of decisions, invariants, rules, overrides, approvals, events, and references. An API key with access to one scope cannot read or modify data in another scope unless explicitly granted.

This isolation model supports multi-team and multi-domain deployments where different groups maintain independent governance structures.

## Role Model

Each API key is granted a role per scope. Roles are cumulative — higher roles include the permissions of lower ones.

| Role | Read | Create entries | Revoke / Archive | Decide approvals |
|------|------|---------------|-------------------|-----------------|
| **Reader** | Yes | No | No | No |
| **Contributor** | Yes | Yes | No | Contributor-level |
| **Admin** | Yes | Yes | Yes | All levels |

### Role assignment

When creating an API key, you specify the role for each scope:

\`\`\`json
{
  "name": "ci-pipeline",
  "scope_access": {
    "scp-abc123": "reader",
    "scp-def456": "contributor"
  }
}
\`\`\`

A single API key can have different roles in different scopes.

### Recommended key allocation

| Consumer | Recommended role | Rationale |
|----------|-----------------|-----------|
| CI/CD pipeline (Verifier) | Reader | Only needs to resolve normative state |
| AI agent | Contributor | Needs to record decisions and request approvals |
| Human operator | Contributor or Admin | Depends on whether they manage constraints |
| Platform administrator | Admin | Full control over constraints and approvals |

## Approval Authority

Invariants and rules can specify an \`approver_role\` that controls who can approve exceptions:

- \`contributor\` — any contributor or admin can approve
- \`admin\` — only admins can approve

This prevents agents or junior contributors from self-approving exceptions to critical constraints.

Approval requests also support an expiration time. Expired requests are automatically treated as rejected. No background process is required — expiration is evaluated at read time.

## Auditability

Knowledge maintains a complete audit trail through two mechanisms:

### Events

Every mutation to the normative state is recorded as an event:

- Invariant created or revoked
- Rule created, updated, or archived
- Override created, expired, or revoked
- Approval requested or resolved

Events include the actor (who), the action (what), and the timestamp (when). They can be queried by type and support real-time delivery via WebSocket.

### References

Every citation or usage of a Knowledge entry is recorded as an append-only reference. References cannot be modified or deleted. They document:

- Which entry was cited or followed
- In what context (PR, commit, CI check, deployment)
- By whom
- Whether the entry was followed or diverged from

Together, events and references provide a complete picture of how constraints were defined and how they were applied in practice.

## Failure Behavior

### API key invalid or missing

Requests without a valid API key receive a \`401 Unauthorized\` response. No data is returned.

### Insufficient permissions

Requests that exceed the API key's role for the target scope receive a \`403 Forbidden\` response.

### Scope not accessible

If an API key does not have any role for a scope, the scope is not visible to that key. It behaves as if the scope does not exist.

### Knowledge unavailable

When the Knowledge API is unreachable:

- Agents should warn the user and avoid proceeding without compliance verification
- The Verifier operates in fail-open (produces a degraded report) or fail-closed (blocks CI) mode, depending on configuration
- No cached or stale data is used — every evaluation requires a live connection to the current normative state`,
  },
  'faq': {
    title: 'FAQ',
    content: `
## Does Knowledge block execution?

Knowledge does not directly block anything. It evaluates actions and returns a structured result. The caller (agent, CI pipeline, or human) decides how to act on that result.

In CI/CD, the Verifier can be configured to block merges (\`fail-on-blocking\` or \`strict\` mode) or to operate as advisory only (\`report-only\` mode). The enforcement decision belongs to the organization, not to Knowledge.

## Can agents ignore the result?

Technically, yes. Knowledge is a governance layer, not an execution blocker. An agent that ignores a \`denied\` result will not be stopped by Knowledge itself.

However, if the Verifier is configured as a required CI check, the PR will be blocked at merge time. The compliance report will document the violation. This creates accountability without requiring real-time enforcement at the agent level.

## What happens if Knowledge is unavailable?

When the Knowledge API is unreachable:

- **Agents** should warn the user that compliance cannot be verified and avoid proceeding silently. The recommended behavior is to pause and inform rather than proceed without checks.
- **The Verifier** produces a degraded report indicating what could not be verified. In fail-open mode (default), CI passes with a warning. In fail-closed mode, CI blocks.

No cached or stale normative state is used. Every evaluation requires a live connection.

## Can we use Knowledge without AI agents?

Yes. Knowledge is a general-purpose decision governance system. It works equally well with:

- Human-only workflows (recording decisions, defining constraints, reviewing PRs)
- CI/CD pipelines (the Verifier checks PRs regardless of who authored them)
- Mixed workflows (humans and agents working together)

The AI agent integration is a consumer of Knowledge, not a prerequisite.

## Can we migrate existing documentation into Knowledge?

Yes. Existing decisions, constraints, and rules can be imported via the API. A typical migration involves:

1. Identifying decisions scattered across RFCs, ADRs, Confluence pages, or Slack threads
2. Creating them as Decision entries with the original context and reasoning
3. Extracting hard constraints as Invariants
4. Codifying active guidelines as Rules

Knowledge does not require starting from scratch. It complements existing documentation by making key constraints machine-readable and enforceable.

## How are overrides expired?

Override expiration is evaluated at read time. There is no background job or scheduler.

When an override's \`expires_at\` timestamp is in the past, it is treated as inactive on the next evaluation. The original constraint is automatically re-enforced. An \`override.expired\` event is recorded in the change log.

This design ensures expiration is reliable regardless of system uptime or process availability.

## Can a single PR touch multiple scopes?

Yes. If the Verifier is configured with multiple scope mappings, a PR that changes files across different paths can trigger evaluation against multiple scopes. Each scope is evaluated independently, and the final verdict is the most severe outcome across all scopes.

For example, a PR that modifies both \`src/\` (Engineering scope) and \`infra/\` (Operations scope) will be checked against both scopes. A violation in either scope produces a failure.

## What is the difference between an Invariant and a mandatory Rule?

Both are blocking when violated. The difference is in lifecycle and intent:

- **Invariants** represent foundational constraints that rarely change. They are revoked, not versioned.
- **Rules** represent operational directives that may evolve. They are versioned — updating a rule preserves the history of all previous versions.

Use invariants for things that should almost never change (security baselines, compliance requirements). Use rules for things that will evolve over time (coding standards, process guidelines).

## Can we have cross-scope references?

Currently, each scope is fully isolated. Entries in one scope cannot reference or override entries in another scope. This is by design — it prevents unintended governance interactions between independent teams or domains.

## How do I know if the normative state changed?

The \`resolve()\` operation returns a \`normative_hash\` — a fingerprint of the current state. By comparing this hash across calls, consumers can detect whether any invariant, rule, or override was added, modified, or removed since their last check.`,
  },
  'use-cases/governed-ai-agents': {
    title: 'Governed AI Agents',
    content: `
## The Problem

Autonomous agents make decisions. Some of those decisions violate organizational constraints that were never communicated to the agent, or that were communicated once and forgotten. Post-hoc review catches violations after the damage is done. There is no mechanism to enforce constraints at decision time, and no structured trail proving the agent considered them.

## How Knowledge Solves It

Knowledge provides a normative layer that agents query before acting. The agent calls \`resolve()\` with its scope and receives all applicable invariants, rules, and overrides. It then evaluates its intended action against that normative state. If a blocking invariant applies, the agent stops. If an approval-gated rule applies, the agent requests human approval and waits. After acting, the agent records a reference — a structured trace proving it consulted Knowledge.

### Agent Flow

\`\`\`
Agent receives task
    |
    v
resolve(scope="Engineering")
    |
    v
Receives:
  - 3 blocking invariants
  - 5 mandatory rules
  - 2 active overrides
    |
    v
Agent evaluates intended action
    |
    |-- Blocked by invariant -> STOP, report violation
    |-- Requires approval   -> request_approval(), WAIT
    +-- Allowed             -> proceed
    |
    v
record_reference(entry_id, context_ref, status="followed")
\`\`\`

### What the Agent Sees

When an agent calls \`resolve()\`, it receives a deterministic snapshot:

\`\`\`json
{
  "scope": { "id": "scp-e1134c6636d7", "name": "Engineering" },
  "normative_state": {
    "blocking_invariants": [
      {
        "invariant_id": "inv-8a3f...",
        "constraint": "No production deployment on Friday after 16:00 UTC"
      }
    ],
    "mandatory_rules": [
      {
        "rule_id": "rul-2b7c...",
        "current_version": {
          "directive": "All API changes must include OpenAPI spec update"
        }
      }
    ],
    "active_overrides": []
  },
  "normative_hash": "sha256:a1b2c3..."
}
\`\`\`

The \`normative_hash\` is a content hash of the full normative state. If the hash hasn't changed since the agent's last query, the constraints haven't changed.

### Approval Gates

Some rules and invariants require human approval before they can be overridden. When an agent encounters one:

1. The agent calls \`request_approval()\` with the trigger entry, the intended action, and a justification.
2. Knowledge creates a pending approval request and notifies the required role.
3. A human with the right role reviews and decides (approve or reject).
4. If approved, Knowledge automatically creates a scoped override and the agent proceeds.
5. The entire chain — request, decision, override — is recorded as events.

No silent escalation. No assumed authority. The agent waits.

## Example: CI Agent Deploying to Production

An agent managing deployments receives a request to deploy \`v2.3.1\` to production on Friday at 17:30 UTC.

**Step 1**: Agent resolves the Engineering scope.

**Step 2**: Knowledge returns invariant \`inv-8a3f...\`: "No production deployment on Friday after 16:00 UTC." No active override exists.

**Step 3**: Agent stops the deployment. It records a reference with status \`cited\` against the invariant and reports:

> Deployment blocked. Invariant inv-8a3f prohibits Friday production deployments after 16:00 UTC. Rescheduling to Monday 09:00 UTC.

**Step 4**: If the deployment is urgent, a human can create an override with justification. The agent re-resolves, sees the override, and proceeds — with a full audit trail.

## What It Produces

Every agent interaction with Knowledge generates:

| Artifact | Purpose |
|----------|---------|
| **Reference** | Proof the agent consulted a specific entry (with status: cited, followed, verified, or diverged) |
| **Event log** | Chronological record of normative changes, approvals, and overrides |
| **Normative hash** | Cryptographic proof of what the agent saw at decision time |
| **Approval chain** | Request, decision, and resulting override linked together |

This is not logging. It is structured, queryable evidence that the agent operated within declared constraints — or documented exactly why it didn't.`,
  },
  'use-cases/compliance-ready-cicd': {
    title: 'Compliance-Ready CI/CD',
    content: `
## The Problem

Teams declare engineering rules — "all API changes need tests," "no deploys on Friday," "database migrations require review" — but enforcement is manual. Rules live in wiki pages, Slack messages, or engineers' heads. CI pipelines check syntax and tests, but not organizational constraints. When an audit asks "did this PR comply with your stated rules?", the answer requires hours of manual reconstruction.

## How Knowledge Solves It

The Knowledge Verifier runs in your CI pipeline as a gate. It reads the PR context (title, body, changed files, commits), resolves the applicable Knowledge scopes based on which files were modified, and checks whether the PR cites the relevant normative entries. It produces a machine-readable verdict and a human-readable report.

### Pipeline Flow

\`\`\`
PR opened / updated
    |
    v
CI triggers Verifier
    |
    v
Verifier reads:
  - PR title, body, author
  - Changed files list
  - Commit messages
    |
    v
Maps files -> scopes (via config)
  src/api/** -> Engineering
  infra/**   -> Operations
    |
    v
Resolves each scope via Knowledge API
    |
    v
Parses citations from PR body
  (inv-xxx, rul-yyy, ovr-zzz)
    |
    v
3-axis analysis:
  A. Conformity (applicable entries)
  B. Override validity
  C. Citation coverage
    |
    v
Verdict: pass / warn / fail
    |
    v
Outputs:
  - verifier-result.json (machine)
  - verifier-report.md   (human)
\`\`\`

### Implementation Report

The Verifier looks for an \`## Implementation Report\` section in the PR body where the author documents how they addressed each applicable normative entry:

\`\`\`markdown
## Implementation Report

- inv-8a3f1b2c4d5e: Followed — deployment scheduled within allowed window
- rul-2b7c9e4f1a3d: Followed — OpenAPI spec updated in commit a1b2c3d
- rul-6f8e2a1b3c4d: Overridden — see ovr-9d1e3f5a7b2c (approved for hotfix)
\`\`\`

Each citation links the PR to a specific Knowledge entry with a clear status. The Verifier validates that cited IDs exist and that referenced overrides are active.

### Gating Modes

The Verifier supports three modes, configured per repository:

| Mode | Behavior | When to Use |
|------|----------|-------------|
| **report-only** | Always exits 0, generates report | Initial adoption — see what would fail without blocking |
| **fail-on-blocking** | Exits 1 only if blocking invariants are uncited | Standard operation — invariants block, rules warn |
| **strict** | Exits 1 on any uncited mandatory entry | Regulated environments — full citation coverage required |

Start with \`report-only\`. Review reports for a few weeks. Promote to \`fail-on-blocking\` once the team is comfortable. Use \`strict\` only where regulatory requirements demand it.

## Example: GitHub Actions Integration

\`\`\`yaml
- name: Knowledge Compliance Check
  run: |
    python -m knowledge_verifier \\
      --config .knowledge-verifier.yml
  env:
    KNOWLEDGE_API_URL: \${{ secrets.KNOWLEDGE_API_URL }}
    KNOWLEDGE_API_KEY: \${{ secrets.KNOWLEDGE_API_KEY }}
\`\`\`

The Verifier detects GitHub Actions automatically via \`GITHUB_EVENT_PATH\` and extracts PR context from the webhook payload. No additional configuration needed for PR metadata.

### Scope Mapping

The configuration file maps file paths to Knowledge scopes:

\`\`\`yaml
scope_mappings:
  - scope: "Engineering"
    paths: ["src/**", "lib/**", "apps/**"]
  - scope: "Operations"
    paths: ["infra/**", "deploy/**", ".github/**"]

default_scope: "Engineering"
gating_mode: "fail-on-blocking"
\`\`\`

When a PR modifies \`src/api/routes.py\` and \`infra/terraform/main.tf\`, the Verifier resolves both Engineering and Operations scopes and checks compliance against both.

## What It Produces

| Output | Format | Content |
|--------|--------|---------|
| \`verifier-result.json\` | JSON | Verdict, violations, warnings, citations, per-scope analysis |
| \`verifier-report.md\` | Markdown | Verdict banner, blocking violations, applicable normative state, citation coverage, recommended actions |

The JSON result can be consumed by other tools (dashboards, audit systems, notification bots). The Markdown report is designed for PR comments.

### Report Excerpt

\`\`\`
## Knowledge Compliance Report

**Verdict: PASS**

### Engineering (scp-e1134c6636d7)
- 3 invariants applicable, 3 cited
- 2 mandatory rules applicable, 2 cited
- 1 advisory rule applicable, 0 cited (advisory — not required)

### Citation Coverage
| Entry | Status | Location |
|-------|--------|----------|
| inv-8a3f... | cited | implementation_report |
| rul-2b7c... | cited | implementation_report |
\`\`\`

This report is the compliance artifact. It proves what was checked, what was found, and what the author documented — without requiring anyone to manually trace the decision chain after the fact.`,
  },
  'use-cases/team-decision-memory': {
    title: 'Team Decision Memory',
    content: `
## The Problem

Engineering teams make hundreds of decisions. Most are never written down. The ones that are get buried in Confluence pages, Notion docs, or Slack threads that no one searches. Six months later, a new engineer asks "why did we choose PostgreSQL over DynamoDB?" and the answer is either lost or reconstructed from memory — incomplete, biased, and unverifiable.

Architecture Decision Records (ADRs) were supposed to fix this. In practice, they decay. They live in markdown files that nobody updates, with no structure, no search, no connection to the rules they inform. A decision about database choice has no link to the invariant it created ("never use eventual consistency for financial transactions"). The decision exists. The constraint exists. But they are not connected.

## How Knowledge Solves It

Knowledge treats decisions as first-class entities with structure, scope, and relationships. A decision is not a document — it is a record with an author, a timestamp, context, reasoning, and tags. It lives in a scope (Engineering, Product, Operations) and can be linked to the invariants and rules it produced.

### Recording a Decision

\`\`\`
POST /api/v1/scopes/{scope_id}/decisions
{
  "decision": "Use PostgreSQL for all transactional data stores",
  "context": "Evaluated PostgreSQL, DynamoDB, and CockroachDB for the payment service migration",
  "reasoning": "PostgreSQL provides ACID guarantees without operational complexity of distributed databases. DynamoDB's eventual consistency model is incompatible with financial transaction requirements. CockroachDB adds unnecessary complexity for our current scale.",
  "author": "sarah.chen",
  "author_type": "human",
  "tags": ["database", "infrastructure", "payments"]
}
\`\`\`

The decision is immutable once created. Context and reasoning are preserved exactly as recorded. No one edits it later to match a different narrative.

### Connecting Decisions to Constraints

When a decision produces a rule or invariant, create a typed link:

\`\`\`
Decision: "Use PostgreSQL for all transactional data stores"
    |
    |-- creates -> Invariant: "No eventual consistency for financial transactions"
    |-- creates -> Rule: "All new services must use PostgreSQL unless exempted"
    +-- supersedes -> Decision: "Evaluate NoSQL for payment service" (earlier exploration)
\`\`\`

These links are queryable. When someone asks "why does this invariant exist?", the answer is one API call away — follow the \`creates\` link back to the decision, read the reasoning.

### Searching Decisions

Knowledge provides structured search across all scopes:

\`\`\`
POST /api/v1/search
{
  "query": "database",
  "scope_id": "scp-e1134c6636d7",
  "entry_type": "decision",
  "limit": 10
}
\`\`\`

Results include the decision text, context excerpt, author, and creation date. Filter by scope, entry type, author, tags, or date range. No more digging through wikis.

### The Graph

Decisions, invariants, and rules form a directed graph. Knowledge tracks typed relations between them:

| Relation | Meaning |
|----------|---------|
| \`depends_on\` | Entry B requires entry A to be valid |
| \`supersedes\` | Entry B replaces entry A |
| \`contradicts\` | Entry B conflicts with entry A (needs resolution) |

This graph answers questions that flat documents cannot:
- "What depends on this invariant?" — find all rules and decisions linked to it
- "What did this decision supersede?" — trace the evolution of a choice
- "Are there contradictions?" — find entries explicitly marked as conflicting

## Example: Onboarding a New Engineer

A new engineer joins the team. Instead of reading 47 Confluence pages of varying freshness, they:

**Step 1**: Browse scopes — Engineering, Product, Operations. Each scope shows counts: 12 decisions, 4 invariants, 6 rules.

**Step 2**: Read the invariants first — these are the hard constraints. "No production deployment on Friday after 16:00 UTC." "All public APIs must require authentication." Four invariants, each with a rationale and a link to the decision that created it.

**Step 3**: Search for their domain. "Search: payments" returns 3 decisions, 1 invariant, 2 rules — all scoped to Engineering. They read the PostgreSQL decision, see the reasoning, follow the link to the "no eventual consistency" invariant.

**Step 4**: Check the graph to understand how entries relate. The PostgreSQL decision links to 2 rules and 1 invariant. One rule was updated last month (new version with relaxed conditions for read replicas).

The engineer now understands not just *what* the rules are, but *why* they exist and *how* they evolved. This took 15 minutes, not 3 days.

## What It Produces

| Capability | What You Get |
|------------|-------------|
| **Structured decisions** | Every decision has context, reasoning, author, and tags — not just a title |
| **Linked constraints** | Decisions are connected to the invariants and rules they produced |
| **Scoped organization** | Decisions belong to scopes, not folders — browse by domain, not by file path |
| **Searchable history** | Full-text search across all entries, filterable by type, author, scope, date |
| **Relation graph** | Visual and queryable graph of how entries depend on, supersede, or contradict each other |
| **Immutable record** | Decisions cannot be edited after creation — the historical record is preserved |

This is not a wiki. It is a structured registry where decisions are recorded once, linked to their consequences, and retrievable by anyone who needs them — months or years later, with full context intact.`,
  },
}
