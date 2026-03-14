# FAQ

## Does Knowledge block execution?

Knowledge does not directly block anything. It evaluates actions and returns a structured result. The caller (agent, CI pipeline, or human) decides how to act on that result.

In CI/CD, the Verifier can be configured to block merges (`fail-on-blocking` or `strict` mode) or to operate as advisory only (`report-only` mode). The enforcement decision belongs to the organization, not to Knowledge.

## Can agents ignore the result?

Technically, yes. Knowledge is a governance layer, not an execution blocker. An agent that ignores a `denied` result will not be stopped by Knowledge itself.

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

When an override's `expires_at` timestamp is in the past, it is treated as inactive on the next evaluation. The original constraint is automatically re-enforced. An `override.expired` event is recorded in the change log.

This design ensures expiration is reliable regardless of system uptime or process availability.

## Can a single PR touch multiple scopes?

Yes. If the Verifier is configured with multiple scope mappings, a PR that changes files across different paths can trigger evaluation against multiple scopes. Each scope is evaluated independently, and the final verdict is the most severe outcome across all scopes.

For example, a PR that modifies both `src/` (Engineering scope) and `infra/` (Operations scope) will be checked against both scopes. A violation in either scope produces a failure.

## What is the difference between an Invariant and a mandatory Rule?

Both are blocking when violated. The difference is in lifecycle and intent:

- **Invariants** represent foundational constraints that rarely change. They are revoked, not versioned.
- **Rules** represent operational directives that may evolve. They are versioned — updating a rule preserves the history of all previous versions.

Use invariants for things that should almost never change (security baselines, compliance requirements). Use rules for things that will evolve over time (coding standards, process guidelines).

## Can we have cross-scope references?

Currently, each scope is fully isolated. Entries in one scope cannot reference or override entries in another scope. This is by design — it prevents unintended governance interactions between independent teams or domains.

## How do I know if the normative state changed?

The `resolve()` operation returns a `normative_hash` — a fingerprint of the current state. By comparing this hash across calls, consumers can detect whether any invariant, rule, or override was added, modified, or removed since their last check.
