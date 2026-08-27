---
title: Validate before you enforce
description: Shadow mode lets Knowledge evaluate the same cases as your current process, in parallel, without holding authority. Compare outcomes, understand discrepancies, then cut over on your schedule.
locale: en
kicker: Docs / Guides - Stable
---

Between authoring rules and letting Knowledge hold operational authority sits a window where you compare its outputs against the process you already trust. This guide is about that window.

## What shadow mode does

In shadow mode, every call to `/resolve` behaves normally : Knowledge evaluates the applicable rules, produces a verdict, writes a Consultation record. The one thing that changes is that the caller does not act on the verdict. The existing process (a human reviewer, a legacy engine, a fixed workflow) continues to make the operational decision. Knowledge produces a second, parallel answer that is recorded but not enforced.

You then compare the two answers over time.

## Turning shadow on

Shadow is set per policy or per tenant, from the back-office UI or via the admin API. Once on :

- Every consultation runs and writes a Consultation record as usual
- The response carries a `shadow: true` flag so the caller knows not to act on it
- Downstream enforcement points (a governed tool wrapper, an MCP proxy, a custom PEP) treat the signed verdict as advisory rather than authoritative

Callers that already reach `/resolve` do not need code changes. They already receive verdicts ; shadow mode just tells them the verdict is not authoritative yet.

## Comparing outputs

For each case that flows through both Knowledge and the existing process, three outcomes are possible :

| Outcome | What it means |
|---|---|
| **Match** | Knowledge and the existing process reached the same conclusion. This is the baseline you want to build. |
| **Knowledge more permissive** | Knowledge would allow ; the existing process blocked or escalated. Either Knowledge is missing a rule, or the existing process carries an unwritten constraint that needs to be encoded. |
| **Knowledge more restrictive** | Knowledge would block or require approval ; the existing process let it through. Either the existing process is missing a control that Knowledge encoded, or Knowledge has a rule that is too broad. |

Neither direction is inherently right. A discrepancy is a question, not a failure.

## Where the comparison lives

Knowledge records each shadow verdict on the Consultation itself. If you also record the existing process's decision (via a callback, a batch job, or a manual reviewer's tag), you can query the pair and produce a comparison report.

A minimal reporting query answers three questions for a given window :

- What percentage of cases matched ?
- On the discrepancies, which rules were dominating in Knowledge ?
- On the discrepancies, what was the existing process's outcome and reason ?

The back-office UI shows this comparison when you connect the existing-process feed. The API surface accepts the same data via `/v1/consultations/{id}/external-decision` for teams that want to build their own reporting.

## What to do with a discrepancy

Not every discrepancy needs a code change. Investigate each :

- **The existing process was right, Knowledge is missing a rule.** Author the rule. The next shadow run should match. Iterate.
- **Knowledge was right, the existing process was inconsistent.** Note it in the governance log. Move on. The whole point of shadow mode is that neither side is treated as authoritative until you decide.
- **Both are defensible.** The rule may be too broad, the existing process too narrow, or the case genuinely ambiguous. Route it to an approval workflow, not to a hard-coded verdict.

## Deciding when to cut over

Parity is a threshold, not a binary. Typical criteria :

- Match rate above your agreed bar (95%, 98%, whatever the domain warrants)
- Every remaining discrepancy has a documented explanation
- The Coverage view shows no rule firing far more or far less than expected
- A human sample review confirms the outcomes on the borderline cases

Once these hold, you can flip shadow off. Knowledge starts producing authoritative verdicts. The signed envelope becomes actionable at the tool boundary.

## Rolling back

Enforcement can be turned back to shadow at any time, from the same surface where it was enabled. New verdicts return to advisory. Existing Consultations remain in the record. Nothing is lost.

Teams often keep shadow available on a per-policy basis long after cut-over : when authoring a substantial amendment, they put the affected policy back into shadow for a period, compare the new version's outputs against the old, then re-enable enforcement.

## Test-case libraries

Shadow mode compares against live cases. Test cases compare against known-good outcomes.

Every policy can carry a test-case library : a set of case inputs paired with expected verdicts and expected dominating rules. The library runs on every rule change ; a change that breaks an expectation flags in the back-office UI before publication.

Test cases and shadow mode are complementary. Test cases catch regressions on cases you already understand. Shadow mode reveals discrepancies on cases you have not thought of. Both are cheap to build once and expensive to skip.

## Related

| Read next | Why |
|---|---|
| [Quickstart : create your first policy](/docs/quickstart-first-policy) | The author path this guide extends |
| [Author rules in the back-office UI](/docs/guides/author-rules-in-back-office-ui) | The UI surface where you enable shadow and view coverage |
| [Migrate from advisory to enforcement](/docs/guides/migrate-from-advisory-to-enforcement) | The playbook for cut-over |
| [Auditability](/product/auditability) | What the Consultation record captures during shadow and after |
