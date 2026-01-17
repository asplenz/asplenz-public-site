# Conceptual Reference

## Decision Snapshot Infrastructure

---

This document provides a formal, explicit definition of Decision Snapshot Infrastructure.

It is intended for institutions, legal teams, auditors, and system architects who require precise ontological boundaries, invariant definitions, and non-ambiguous use of terms related to execution-time evidence.

This document is not an introduction. It does not aim to be concise or promotional.

---

## Evidence before questions

**Decision Snapshot Infrastructure** establishes an execution-time evidence layer for automated and semi-automated decision systems operating in institutional contexts. Its purpose is singular: preserve immutable factual states at the exact moment decisions become irreversible, independently of subsequent system evolution.

This infrastructure does not explain, justify, or evaluate decisions. It preserves what was executed.

---

## Executive Summary

Organizations increasingly rely on automated and semi-automated decision systems whose outputs carry durable operational, legal, financial, and reputational consequences. These systems evolve continuously: models are retrained, rules are adjusted, data sources change, infrastructures are refactored, and teams rotate. Yet the decisions produced by these systems often remain examinable long after the technical conditions that produced them have disappeared.

In most organizations, the factual state of past decisions is not preserved at execution time. When questions arise, institutions attempt to reconstruct what happened using logs, traces, configuration repositories, dashboards, tickets, and human recollection. This process is inherently fragile, costly, and uncertain. It produces narratives rather than facts.

Decision Snapshot Infrastructure addresses this structural gap. It introduces an execution-time evidence layer whose sole purpose is to capture, at the point of no return, the complete factual state of a decision and preserve it as an immutable, self-contained artifact. This artifact exists independently of the future evolution of the system that produced it.

---

## Problem Statement

### Structural absence of execution-time facts

Automated decision systems generally do not preserve their own execution-time reality. At the moment a decision becomes irreversible, the system consumes inputs, applies logic, operates under a concrete configuration, and produces an outcome. This composite state exists only transiently.

After execution, the system retains traces: logs, metrics, alerts, configuration repositories, database states. These traces were not designed to constitute a complete, durable factual record of execution. They are partial, distributed, and dependent on the continued existence and stability of evolving systems.

When institutions are later required to establish what occurred, they must reconstruct this state after the fact. This requirement does not arise from poor engineering discipline or organizational failure. It arises from a structural mismatch between what is needed to establish facts and what execution systems are designed to retain.

Reconstruction therefore fails structurally, not contingently.

---

## Core Principle

### Capture at the point of no return

A decision becomes a fact when it is executed. At that moment:

- specific inputs are consumed,
- specific logic is applied,
- under a specific execution context,
- producing a specific outcome.

Once this moment passes, the original factual state cannot be reconstituted with certainty. Evidence must therefore be produced at execution time, not inferred later.

---

## Decision Snapshot Artifact

### Canonical object

The **Decision Snapshot Artifact** is the sole execution-time evidentiary object defined in this document. All references to facts, evidence, or execution-time state refer exclusively to properties of this artifact.

The artifact is produced by the decision-making system itself at the moment the decision becomes irreversible. It is not derived from logs, traces, or external observation.

### Invariant properties

A Decision Snapshot Artifact guarantees the following invariants, which cannot be altered after creation:

- **Completeness** - all inputs, logic state, execution context, and outputs present at execution time are embedded.
- **Temporal integrity** - the execution timestamp is cryptographically bound to the artifact.
- **Immutability** - the artifact cannot be modified, amended, or deleted.
- **Ordering** - the artifact's position within the execution sequence is explicit and verifiable.
- **Authenticity** - the origin and integrity of the artifact are cryptographically provable.

Any record that requires external systems to establish execution-time facts is not a Decision Snapshot Artifact and does not constitute execution-time evidence.

---

## Evidence vs Reconstruction

### Ontological distinction

In this document, **evidence** refers exclusively to execution-time facts embodied in a Decision Snapshot Artifact. Evidence exists only if it was produced at execution time.

**Reconstruction** refers to any post-hoc process that attempts to infer past execution states using surviving traces, interpretation, or retrospective knowledge.

These two notions are not interchangeable.

### Structural limits of reconstruction

Reconstruction necessarily depends on elements that evolve or disappear over time:

- mutable configurations,
- retrained models,
- altered data sources,
- rotated logs,
- human recollection.

Because these elements do not preserve their past states exhaustively or immutably, reconstruction cannot reliably re-establish the factual state that existed at execution time. Where Decision Snapshot Artifact exist, reconstruction is not required to establish facts.

| Reconstruction | Execution-time Evidence |
|----------------|------------------------|
| Narrative assembled after outcome | Fact declared before examination |
| Depends on surviving traces | Self-contained artifact |
| Subject to hindsight bias | Preserves knowledge at Time T |
| Cost increases over time | Cost fixed at execution |

---

## Separation of Execution and Evaluation

Decision Snapshot Infrastructure distinguishes:

- **Executions** - immutable facts declared at Time T.
- **Evaluations** - human or institutional assessments produced later, explicitly timestamped and linked.

This separation structurally eliminates hindsight bias by preventing later knowledge from contaminating execution-time facts.

---

## Principles and Boundaries

### Principle: facts exist only as artifacts

In this infrastructure, a fact is not an abstract notion. A fact exists only insofar as it is embodied in a Decision Snapshot Artifact. Statements about execution-time reality are therefore statements about artifact content.

### Principle: separation of execution and interpretation

Decision Snapshot Infrastructure records executions. Interpretation, evaluation, judgment, and communication occur after execution and remain institutional responsibilities.

### Boundary: non-claims

This infrastructure explicitly does not:

- explain decisions or their rationale,
- evaluate correctness or compliance,
- assign responsibility or liability,
- replace audit, governance, or legal processes.

It preserves execution-time facts and nothing else.

---

## Conclusion

Automated decision systems do not fail because institutions are unable to act. They fail when, over time, institutions can no longer establish with certainty what was actually executed, under which conditions, and with what information.

Post-hoc reconstruction is structurally incapable of providing this certainty. It assembles narratives after outcomes are known, using traces that were never designed to serve as durable evidence. As systems evolve, the cost and fragility of reconstruction increase.

Decision Snapshot Infrastructure restores factual continuity by ensuring that execution-time evidence exists before questions arise. It replaces reliance on reconstruction with immutable facts, preserved independently of system lifecycle and organizational change.

Evidence exists only at execution time. Preserving it is not a methodological choice. It is a structural necessity.

---

*Asplenz - Decision Snapshot Infrastructure*
