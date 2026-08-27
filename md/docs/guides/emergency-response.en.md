---
title: Emergency response
description: Kill switch, key rotation, enforcement downgrade - the four escalation paths for a Knowledge incident.
locale: en
kicker: Docs / Guides - Stable
---

Every Knowledge deployment eventually has an incident. This page enumerates the four levers you have, when each is appropriate, and how to invoke it.

## Lever 1 : Pause a rule (mode `paused`)

**Use when** : a single rule is misbehaving (false positives, wrong threshold, unintended target scope) and you want to silence it while root-causing.

**Invoke via UI** :

Back-office -> Rules -> `rul-...` -> Pause -> Mode : `paused` -> Reason.

**Invoke via API** :

```bash
curl -X POST /tnt-acme/v1/rules/rul-abc/pause \
  -H "X-API-Key: ak-admin-..." \
  -d '{
    "mode": "paused",
    "reason": "false-positive spike, incident IR-2026-08-42",
    "expires_at": "2026-08-15T12:00:00Z"
  }'
```

**Effect** : the rule is hidden from the engine immediately. New consultations do not fire it. Historical consultations still cite it (audit unchanged). Overrides and rule changes remain possible while paused.

**Reversal** : delete the pause row or wait for `expires_at`.

## Lever 2 : Pause a target (mode `paused`)

**Use when** : an entire target's rules are firing incorrectly (e.g. wrong scope schema deployment, a target with malformed membership).

Same shape as Lever 1 but scoped to a Target :

```bash
curl -X POST /tnt-acme/v1/targets/tgt-abc/pause \
  -H "X-API-Key: ak-admin-..." \
  -d '{ "mode": "paused", "reason": "..." }'
```

**Effect** : all rules attached to that target are hidden. Universal rules still fire.

## Lever 3 : Downgrade enforcement mode

**Use when** : PEP-side refusals are blocking legitimate traffic, and you cannot yet identify which rule is the culprit.

**With `knowledge-runtime`** : set the env var and restart the PEP process.

```bash
# On every PEP host :
export KNOWLEDGE_ENFORCEMENT=advisory
systemctl restart my-pep-service
```

**With an MCP interceptor** : flip your interceptor's advisory flag (or set `require_outcome_allowed=False` on the `verify_verdict` call) so a `require_approval` / `blocked` verdict is logged instead of refused. Restart the process.

**Effect** : Knowledge still consults, verdicts still record, but refusals no longer terminate calls. Business continues ; compliance signal preserved for post-incident analysis.

**When NOT to use** : if the incident is a compromise (signing key leaked, upstream MCP server compromised). Downgrading enforcement removes the protection you need most.

## Lever 4 : Rotate a compromised key

**Use when** : suspected private key compromise.

See [Rotate signing keys](/docs/guides/rotate-signing-keys) for the emergency (zero-overlap) rotation flow.

Additional steps beyond that guide :

- **Revoke every API key issued during the compromise window** (they may have been captured too).
- **Refresh JWKS at every PEP** (force refresh via admin endpoint or process restart).
- **Enumerate consultations signed during the compromise window** for audit annotation :

```bash
curl "/tnt-acme/v1/consultations?since=2026-08-14T00:00:00Z&signing_kid=tnt-acme:2026-01" \
  -H "X-API-Key: ak-admin-..." \
  | jq '.items[] | {id, requested_at, verdict}'
```

Mark these as "signed under compromised key" in your audit surface. The Consultation data itself remains valid (the policy state at that moment is still correctly frozen), but the signature guarantee is degraded for that window.

## Escalation matrix

| Symptom | First lever | If that doesn't work |
|---|---|---|
| One rule blocking too much | Pause rule | Downgrade enforcement |
| Whole target misbehaving | Pause target | Downgrade enforcement |
| Multiple rules firing incorrectly (bad seed / deploy) | Downgrade enforcement | Roll back deployment |
| Signing key compromise | Rotate emergency | Notify all customers |
| Knowledge service down | Wait / restart | PEP fallback rule (`on_knowledge_unreachable: allow` if pre-configured) |
| API keys leaked | Revoke via UI | Rotate every key in bulk |

## Post-incident

After every incident :

1. **Record what happened** on the Policy's governance log (`GovernanceNote` entry).
2. **Add a coherence check** that would have caught this at write time (if applicable).
3. **Post-mortem** with the design-partner cohort - patterns learned in one deployment help everyone.

## Related

- [Rotate signing keys](/docs/guides/rotate-signing-keys) - key rotation deep dive.
- [Migrate from advisory to enforcement](/docs/guides/migrate-from-advisory-to-enforcement) - the mode ladder.
- [Overrides, approvals, pauses](/docs/concepts/overrides-approvals-pauses) - the Pause entity.
