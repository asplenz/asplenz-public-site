---
title: Quickstart - create your first policy
description: From an empty tenant to your first `/resolve` returning a real verdict, in about 30 minutes. Two authoring paths - back-office UI (no code, direct create) or JSON API (programmatic). Pick either.
locale: en
kicker: Docs / Getting started - Stable
---

This quickstart takes you from an empty tenant to your first `/resolve` call returning a real verdict, in about 30 minutes. It focuses on the author side : how rules get into Knowledge. The consumer-side quickstarts (Python decorator, MCP proxy) build on this one.

## Prerequisites

- A Knowledge tenant.
- One of :
  - Back-office UI access with an authoring role (Path A below), OR
  - An API key with authoring permission and your tenant's Knowledge API base URL (Path B)

You do not need both. Either path gets you to the same end state.

## The example we build

A refund policy for a customer-service tool :

- Any refund of €100 or less is allowed automatically
- Any refund between €100 and €500 requires approval
- Any refund above €500 is blocked

Three rules. One policy. Applies to every caller in the tenant (universal). Enough to see the full loop.

---

## Path A - author via the back-office UI (no code)

The visual path. Best when a compliance officer or SME is authoring the rules directly.

### Step 1 - create the Policy

Log in to the back-office UI. From the Registry view, choose *New policy*. Fill in :

- **Name** : Refund policy
- **Owner** : the accountable role or person
- **Rationale** : *"Governs customer-service refund authorizations"*

Save. The policy appears in the registry with its own detail page. Keep this page open ; you will author the rules from here. The policy identifier is shown at the top of the page and in the URL (e.g. `pol-refund-a3f2`) ; you will use it for `/resolve` calls in step 4.

### Step 2 - author each rule

From the policy's detail page, choose *New rule*. For each of the three rules, fill in the author view :

| Rule | Statement | Scope | Condition | Severity |
|---|---|---|---|---|
| Small refund | Allow refunds up to €100 | action = `refund.execute` | `parameters.amount_eur` `<=` `100` | allow |
| Medium refund | Refunds between €100 and €500 require approval | action = `refund.execute` | `parameters.amount_eur` `>` `100` | require_approval |
| Large refund | Refunds above €500 are blocked | action = `refund.execute` | `parameters.amount_eur` `>` `500` | hard_block |

Save each. Rules authored here apply to **every principal** in the tenant by default (universal). See *[About targeting](#about-targeting)* below.

Rules are active as soon as they are saved.

---

## Path B - author via the API (programmatic)

The programmatic path. Best when you want the whole flow scripted, seeded from code, or part of your CI pipeline.

Every endpoint below is shown as a path. Prepend your tenant's base URL. Every request carries `X-API-Key: <your key>`.

### Step 1 - create the Policy

```
POST /v1/policies
Content-Type: application/json

{
  "name": "Refund policy",
  "owner_role": "customer-service-compliance",
  "rationale": "Governs customer-service refund authorizations"
}
```

Response :

```json
{
  "id": "pol-refund-a3f2",
  "name": "Refund policy",
  "owner_role": "customer-service-compliance",
  "created_at": "2026-08-27T09:00:00Z"
}
```

**Capture `id`** ; every rule you create references this Policy.

### Step 2 - add each rule

One `POST` per rule :

```
POST /v1/policies/pol-refund-a3f2/rules
Content-Type: application/json

{
  "id": "rul-refund-small",
  "statement": "Allow refunds up to and including €100",
  "severity": "allow",
  "universal": true,
  "rows": [
    {
      "scope": { "action": "refund.execute" },
      "condition": { "parameters.amount_eur": { "op": "lte", "value": 100 } }
    }
  ],
  "rationale": "Standard small-refund allowance"
}
```

Same body shape for the other two, adjusting `severity` and `condition` :

- `rul-refund-medium` : `severity: "require_approval"`, condition `parameters.amount_eur > 100`
- `rul-refund-large` : `severity: "hard_block"`, condition `parameters.amount_eur > 500`

Response for each :

```json
{
  "id": "rul-refund-small",
  "version_id": "rv-abc1",
  "status": "active"
}
```

Every rule carries an immutable `version_id`. Every future decision that cites the rule will pin the exact version that applied.

---

## About targeting

The rules in this quickstart use `universal: true` (in the JSON path) or the *applies to everyone* default (in the UI path). That means the rules apply to **every principal calling the tenant** - every agent, every service account, every user.

If you want a rule to apply only to a specific subset of principals (a role, an agent, a user group), attach it to a **Target** instead of marking it universal. See [Policies, rules and targets](/docs/concepts/policies-rules-targets) for the concept.

---

## Step 4 - call `/resolve` on a real case

Same for both paths. Send a case that the small-refund rule should allow :

```
POST /v1/resolve
Content-Type: application/json
X-API-Key: <your key>

{
  "action": "refund.execute",
  "resource": "TX-42",
  "parameters": { "amount_eur": 40 }
}
```

Response :

```json
{
  "operation_status": "complete",
  "verdict": "allow",
  "cited_rule_ids": ["rul-refund-small"],
  "cited_rule_version_ids": ["rv-abc1"],
  "dominating_rule_id": "rul-refund-small",
  "consultation_id": "cns-...",
  "signed_verdict": "eyJhbGciOiJFUzI1NiIs..."
}
```

Your first governed decision. Note `cited_rule_version_ids` : if you edit the rule later, this consultation still points at `rv-abc1`.

## Step 5 - try a case that requires approval

```
POST /v1/resolve

{
  "action": "refund.execute",
  "resource": "TX-43",
  "parameters": { "amount_eur": 250 }
}
```

Response :

```json
{
  "operation_status": "complete",
  "verdict": "approval_required",
  "cited_rule_ids": ["rul-refund-medium"],
  "consultation_id": "cns-...",
  "signed_verdict": "..."
}
```

An `Approval` record is created automatically. A decider can resolve it via the back-office UI or through the approvals API. See [approvals](/docs/api-reference/approvals).

## Step 6 - try a case that requires context you did not send

Add a rule that needs a field your case does not carry. Author it through the UI or via the API :

```json
{
  "id": "rul-refund-vip",
  "statement": "VIP customers get refunds up to €200 automatically",
  "severity": "allow",
  "universal": true,
  "rows": [
    {
      "scope": { "action": "refund.execute" },
      "condition": {
        "parameters.amount_eur": { "op": "lte", "value": 200 },
        "customer.tier": { "op": "eq", "value": "vip" }
      }
    }
  ],
  "rationale": "VIP tier exception"
}
```

Now call `/resolve` with only the amount, no tier :

```
POST /v1/resolve

{
  "action": "refund.execute",
  "resource": "TX-44",
  "parameters": { "amount_eur": 180 }
}
```

Response :

```json
{
  "operation_status": "incomplete",
  "required_context": [
    {
      "field": "customer.tier",
      "reason": "required by rul-refund-vip",
      "type": "enum",
      "allowed_values": ["standard", "vip"]
    }
  ]
}
```

Knowledge tells you what is still needed. Fetch the field, add it to the request, call `/resolve` again. This is the progressive-context loop. See [Progressive context](/docs/concepts/progressive-context-resolution) for the full model.

## What you have now

- A tenant with one policy and (at least) three rules, applying to every principal
- Rules that resolve to `allow`, `approval_required` and `hard_block` verdicts
- One rule that demonstrates the progressive-context loop
- A signed envelope on every complete verdict, ready for a downstream enforcement point to verify

## Next

- Wrap a tool in Python so the signed verdict is enforced before the action runs : [Quickstart : governed tool](/docs/quickstart-governed-tool)
- Do the same for an MCP-based agent stack : [Quickstart : MCP proxy](/docs/quickstart-mcp-proxy)

## Related

| Read next | Why |
|---|---|
| [Policies, rules and targets](/docs/concepts/policies-rules-targets) | The concept model behind rule fields and targeting |
| [Verdicts and decisions](/docs/concepts/verdicts-and-decisions) | The severity ladder and how the winning rule is chosen |
| [POST /v1/resolve](/docs/api-reference/resolve) | Endpoint reference |
