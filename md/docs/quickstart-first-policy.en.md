---
title: Quickstart - create your first policy
description: From an empty tenant to your first `/resolve` returning a real verdict, in about 30 minutes. CSV import, sample cases, first agent-side call.
locale: en
kicker: Docs / Getting started - Stable
---

This quickstart takes you from an empty tenant to your first `/resolve` call returning a real verdict, in about 30 minutes. It focuses on the author side : how to get rules into Knowledge. The consumer-side quickstarts (Python decorator, MCP proxy) build on this one.

## What you need

- A Knowledge tenant, and an API key with authoring permission.
- The tenant's base URL for the Knowledge API. All endpoints below are shown as paths ; prepend your base URL.
- A text editor. That is genuinely all.

## The example we build

A refund policy for a customer-service tool :

- Any refund of €100 or less is allowed automatically.
- Any refund between €100 and €500 requires approval.
- Any refund above €500 is blocked.

Three rules. One policy. Enough to see the full loop.

## Step 1 - author the rules as CSV

Create `refund-policy.csv` with one row per rule :

```csv
policy_id,rule_id,statement,scope_action,condition_field,condition_op,condition_value,severity,rationale
pol-refund,rul-refund-small,Allow refunds up to and including €100,refund.execute,amount_eur,lte,100,allow,Standard small-refund allowance
pol-refund,rul-refund-medium,Refunds between €100 and €500 require approval,refund.execute,amount_eur,gt,100,require_approval,Above €100 needs decider oversight
pol-refund,rul-refund-large,Refunds above €500 are blocked,refund.execute,amount_eur,gt,500,hard_block,Above €500 is out of standard policy
```

Each row is a rule with its scope (`refund.execute`), its condition (`amount_eur` compared to a threshold), and its severity (`allow` / `require_approval` / `hard_block`).

## Step 2 - import into Knowledge

Post the CSV to the import endpoint :

```
POST /v1/rules/import
Content-Type: multipart/form-data
X-API-Key: <your key>

file=@refund-policy.csv
```

The response returns the created rules with their versions :

```json
{
  "policy_id": "pol-refund",
  "rules_created": [
    { "id": "rul-refund-small", "version_id": "rv-abc1" },
    { "id": "rul-refund-medium", "version_id": "rv-def2" },
    { "id": "rul-refund-large", "version_id": "rv-ghi3" }
  ]
}
```

The policy is now live. Every rule carries an immutable `version_id` ; every future decision that cites the rule will pin the exact version that applied.

## Step 3 - call `/resolve` on a real case

Send a case that the small-refund rule should allow :

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

You have your first governed decision. Note the `cited_rule_version_ids` : if you edit the rule later, this consultation still points at `rv-abc1`.

## Step 4 - try a case that requires approval

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

An `Approval` record is created automatically ; a decider can resolve it via the back-office UI or through the approvals API. See [approvals](/docs/api-reference/approvals).

## Step 5 - try a case that requires context you did not send

Add a rule that needs a field your case does not carry. Import an updated CSV where one rule requires `customer.tier` :

```csv
pol-refund,rul-refund-vip,VIP customers get refunds up to €200 automatically,refund.execute,amount_eur,lte,200,allow,VIP tier exception
```

Add the condition on `customer.tier` (via the back-office UI or a second CSV column ; both work). Now call `/resolve` with only the amount :

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

Knowledge tells you what is still needed. Fetch the field from your CRM, add it to the request, call `/resolve` again. This is the progressive-context loop. See [Progressive context](/docs/concepts/progressive-context-resolution) for the full model.

## What you have now

- A tenant with one policy and three rules
- Rules that resolve to `allow`, `approval_required` and `hard_block` verdicts
- One rule that demonstrates the progressive-context loop
- A signed envelope on every complete verdict, ready for a downstream enforcement point to verify

## Next

- Wrap a tool in Python so the signed verdict is enforced before the action runs : [Quickstart : governed tool](/docs/quickstart-governed-tool)
- Do the same for an MCP-based agent stack : [Quickstart : MCP proxy](/docs/quickstart-mcp-proxy)
- Author the same rules from the compliance-friendly back-office UI : [Author rules in the back-office UI](/docs/guides/author-rules-in-back-office-ui)
- Run Knowledge alongside your current process before enforcement : [Validate before you enforce](/docs/guides/validate-before-you-enforce)

## Related

| Read next | Why |
|---|---|
| [Policies, rules and targets](/docs/concepts/policies-rules-targets) | The concept model behind the CSV columns |
| [Verdicts and decisions](/docs/concepts/verdicts-and-decisions) | The severity ladder and how the winning rule is chosen |
| [POST /v1/resolve](/docs/api-reference/resolve) | Endpoint reference |
| [POST /v1/rules/import](/docs/api-reference/authentication) | Import endpoint reference (in the API section) |
