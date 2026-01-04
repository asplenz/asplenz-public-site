# Principles

## Principles, boundaries, and non-goals

**Reconstruction is valuable, until it becomes the object of contestation.** These principles are not design preferences. They exist because, in formal examination contexts, flexibility becomes a liability: evidence must be created at the moment of execution, not rebuilt later.

---

### Non-negotiable principles

1. **Evidence at time T** *(point of no return)*
   Prevents retrospective reconstruction from becoming "the evidence," by producing facts when the action occurs.

2. **Append-only** records
   Eliminates ambiguity about edits, deletions, or rewrites; evidence can be trusted without relying on narratives.

3. **Agnostic to agent** *(human or machine)*
   Preserves a single factual chain across automated decisions and human interventions, with no "handoff gap."

4. **Non-intrusive** *(no blocking, no decision influence)*
   Ensures evidence capture does not alter outcomes, workflows, or latency; the evidence layer stays observational.

5. **Strict separation**: execution vs evaluation
   Keeps "what happened" distinct from "what was assessed," so later examination can separate action from interpretation.

6. **Independent verification** *(including offline)*
   Allows integrity to be checked without trusting the producing systems (or even the vendor) when scrutiny is highest.

---

### Clear non-goals

These non-goals are deliberate. They preserve Horizon's role as an evidence layer, orthogonal to operational tooling, so evidence remains stable even as systems evolve.

- Not an investigation platform
- Not observability / SIEM
- Not a case-management workflow
- Not a compliance tool
- Not a "single pane of glass" for ops

---

### Why logs + tickets are not equivalent

Logs and tickets can support reconstruction. They do not create immutable, ordered, declared evidence at time T. When scrutiny is case-specific, the question is no longer "what usually happens," but "what exactly happened here," and reconstruction itself becomes contestable.
