# Integration

## Overview

Asplenz Evidence can be integrated into existing systems and workflows through its REST API, its web interface, or a combination of both. This document describes the available integration paths and their typical use cases.

## API integration

Evidence exposes a REST API for programmatic integration. All operations that can be performed through the web interface are also available through the API.

### Core operations

**Systems**: Register and manage the systems, committees, or processes whose decisions will be sealed.

```
POST   /api/v1/systems                    Register a system
GET    /api/v1/systems                    List systems
GET    /api/v1/systems/{system_id}        Retrieve system details
PATCH  /api/v1/systems/{system_id}        Update system metadata
```

**Decisions**: Propose, approve, and track decisions with cryptographic proof.

```
POST   /api/v1/decisions                              Create a decision proposal
GET    /api/v1/decisions                              List decisions
GET    /api/v1/decisions/{decision_id}                Retrieve a decision
POST   /api/v1/decisions/{decision_id}/approve        Approve a decision
POST   /api/v1/decisions/{decision_id}/cancel         Cancel a proposal
POST   /api/v1/decisions/{decision_id}/evidence       Attach supporting evidence
POST   /api/v1/decisions/{decision_id}/evaluations    Record a follow-up evaluation
```

**Incidents**: Report, investigate, and resolve incidents with a sealed timeline.

```
POST   /api/v1/incidents                                  Report an incident
GET    /api/v1/incidents/{incident_id}                    Retrieve incident details
POST   /api/v1/incidents/{incident_id}/investigate        Begin investigation
POST   /api/v1/incidents/{incident_id}/resolve            Mark as resolved
POST   /api/v1/incidents/{incident_id}/close              Mark as closed
POST   /api/v1/incidents/{incident_id}/remediations       Record a remediation action
GET    /api/v1/incidents/{incident_id}/proof-package      Export proof package
```

**Agents**: Register AI agents and seal their intent and execution declarations.

```
POST   /api/v1/agents                                                Register an agent
POST   /api/v1/agents/{agent_id}/traces                             Start an execution trace
POST   /api/v1/agents/{agent_id}/traces/{trace_id}/facts/intent     Declare intent
POST   /api/v1/agents/{agent_id}/traces/{trace_id}/facts/execution  Declare execution
```

### Authentication

API requests are authenticated using bearer tokens. Each request must include an `Authorization` header with a valid token that identifies the user and tenant.

### Response format

All API responses follow a consistent structure:

```json
{
  "decision_id": "dec-a1b2c3d4e5f6",
  "status": "approved",
  "approved_by": "alice@example.com",
  "approved_at": "2025-02-24T14:30:00Z"
}
```

List endpoints include pagination:

```json
{
  "decisions": [...],
  "total": 42,
  "limit": 10,
  "offset": 0
}
```

Errors are returned with a detail message:

```json
{
  "detail": "Decision not found"
}
```

## Web interface

Evidence provides a web interface for users who interact with the system directly rather than through integrated tools.

The web interface supports:

- Registering and managing systems
- Proposing and approving decisions
- Reporting and managing incidents
- Viewing sealed timelines and proof chains
- Downloading proof packages
- Monitoring agent execution traces

The web interface uses the same API as programmatic integrations, ensuring consistency between all access paths.

## Standalone usage

Evidence can be used independently, without integration into other systems. In this mode:

- Users submit decisions and approvals through the web interface
- Incidents are reported and managed manually
- Proof packages are exported and shared via email or file transfer
- No external system integration is required

This is appropriate for organizations that need cryptographic proof of decisions but do not have automated workflows that would benefit from API integration.

## Integration with Asplenz Knowledge

Evidence can optionally work alongside **Asplenz Knowledge**, a normative decision management system that maintains organizational rules, invariants, and decision precedents.

When used together:

- Knowledge provides the normative context: what rules apply, what constraints exist, what precedents have been set
- Evidence provides the cryptographic proof: what was actually decided, by whom, and when

The two systems are independent. Evidence does not require Knowledge to operate, and Knowledge does not require Evidence. Integration between them is optional and purely additive.

## Integration patterns

### Pattern 1: Decision gateway

An external system (e.g., a loan origination platform) submits a decision to Evidence when a human approval is required. Evidence seals the proposal, the human approves through the web interface or API, and Evidence seals the approval. The external system polls for the decision status or receives a webhook callback.

### Pattern 2: Incident lifecycle

A monitoring system detects an anomaly and reports an incident to Evidence via the API. The incident response team manages the investigation and remediation through Evidence. Each step is sealed automatically. At the end, a proof package is exported for the regulator.

### Pattern 3: Agent observability

An AI agent is instrumented to declare its intent before each significant action and its execution result afterward. Both declarations are sealed by Evidence. A compliance team reviews agent traces periodically to confirm that all actions were properly authorized and executed.

### Pattern 4: Audit export

An organization uses Evidence purely for its cryptographic proof capability. Decisions are recorded through the API at key points in existing workflows. Periodically, proof packages are exported and stored in a compliance archive for regulatory readiness.
