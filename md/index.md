
# [Version FR]
# Vos agents IA sont rapides. Mais ils ne connaissent pas vos règles.

Décisions d'architecture, contraintes de conformité, invariants de sécurité — votre organisation possède des centaines de règles que les agents IA ignorent parce qu'aucun système n'existe pour les leur transmettre. Knowledge est le registre unique qu'ils interrogent avant d'agir.

[Démarrer avec Knowledge] [Voir les tarifs]

---

## La vélocité de l'IA a changé. Pas la gouvernance.

Les agents IA modifient désormais les systèmes à la vitesse machine. Ils introduisent des dépendances, modifient des API, refactorisent l'architecture, déploient de l'infrastructure, évaluent des instruments financiers, analysent des données, exécutent des workflows.

Mais ils ne connaissent pas vos décisions d'architecture, vos contraintes de conformité, vos seuils de risque, les exceptions approuvées, ni ce qui ne doit jamais changer.

Sans couche de décision déclarée, les agents improvisent.

---

## Knowledge : la couche normative que vos agents interrogent avant d'agir

Knowledge est un système d'enregistrement déclaratif pour les décisions opérationnelles. Quatre types d'objets :

**Invariants** — contraintes qui ne doivent jamais être transgressées

**Rules** — directives qui guident l'implémentation et les opérations

**Decisions** — choix documentés avec leur raisonnement

**Overrides** — exceptions gouvernées, limitées dans le temps, avec justification et approbateur

Tout agent appelle `knowledge.resolve()` pour son scope et reçoit les règles applicables, les overrides actifs, les conflits détectés et la chaîne de résolution complète. Avant d'agir, pas après.

Knowledge ne bloque pas l'exécution. Il expose l'état décisionnel applicable. Votre écosystème décide quoi en faire.

---

## Natif MCP. Dynamique par conception.

Les agents appellent Knowledge à la demande via MCP (Model Context Protocol).

Pas d'injection dans chaque prompt. Aucun surcoût en tokens. Aucun prompt système surchargé. Six outils dédiés, appelés uniquement quand l'agent a besoin de contexte.

Un agent engineering appelle `resolve()` avant de coder. Un agent conformité appelle `check()` avant de traiter un dossier. Un agent pricing appelle `query()` pour savoir quel modèle appliquer. Même registre, même protocole, tout workflow.

---

## Scope et résolution

Le contexte se résout de manière déterministe.

```
engineering
 ├─ payments
 │    ├─ pci
 │    ├─ fraud
 ├─ platform
 ├─ data

finance
 ├─ credit
 │    ├─ investment-grade
 ├─ pricing
 ├─ risk
```

Chaque agent est mappé à un chemin unique. La résolution va du plus spécifique au plus global. Quand un agent interroge `engineering/payments/pci` ou `finance/credit/investment-grade`, Knowledge retourne uniquement les règles applicables à ce chemin.

Aucune ambiguïté. Aucune précédence cachée. Aucune duplication.

---

## Voici à quoi ça ressemble

Un agent engineering ouvre la PR #847. Au lieu de coder à l'aveugle, il a d'abord consulté Knowledge.

```
Résumé de PR — Généré par l'IA

Ce que fait cette PR
Implémente le nouveau service de notification de paiement.

Décisions de conception

1. gRPC pour la communication inter-services
   Basé sur : Rule ENG-R-042 — "Tous les nouveaux services utilisent gRPC"
   → knowledge://engineering/rules/ENG-R-042

2. PostgreSQL pour le stockage transactionnel
   Basé sur : Decision ENG-D-118 — "PostgreSQL plutôt que MongoDB
   pour tout service nécessitant des transactions ACID"
   → knowledge://engineering/decisions/ENG-D-118

3. Aucune dépendance AGPL utilisée
   Vérifié contre : Invariant ENG-I-003
   → knowledge://engineering/invariants/ENG-I-003

Compromis
- REST utilisé au lieu de gRPC pour les notifications (latence < 10ms)
  Override de Rule ENG-R-042 — approuvé par @cto
  → knowledge://engineering/overrides/ENG-O-047
```

Un agent conformité traite une demande de prêt. Il a d'abord consulté Knowledge.

```
Journal d'action de l'agent

Demande de prêt #2891 — Ligne de crédit PME

Vérifié avant traitement :

1. Modèle de scoring de risque : modèle interne v3
   Basé sur : Rule FIN-R-014 — "Utiliser le scoring interne,
   pas les notations agences seules"
   → knowledge://finance/credit/rules/FIN-R-014

2. Limite d'exposition : moins de 5% du portefeuille par émetteur
   Vérifié contre : Invariant FIN-I-002
   → knowledge://finance/invariants/FIN-I-002

3. Exception : marge réduite pour le client X
   Override FIN-O-011 — approuvé par head of credit
   Expire : 2025-12-01
   → knowledge://finance/credit/overrides/FIN-O-011
```

Domaines différents. Même registre. Même résolution. Même traçabilité.

---

## Pas besoin de l'écrire. Importez.

La plupart des équipes ne documenteront pas manuellement des centaines de décisions. Elles ne devraient pas avoir à le faire. Knowledge se peuple via son API — tout agent ou script peut proposer des entrées draft à partir de sources existantes. Un agent de scan de code est inclus : il analyse vos dépôts, identifie les patterns d'architecture, les choix technologiques et les contraintes implicites, et les soumet comme drafts. Vous validez. Knowledge est peuplé.

Le travail de votre équipe est de valider les décisions, pas de les rédiger.

---

## Le graphe

Knowledge ne stocke pas les règles comme une liste plate. Il les structure comme un graphe connecté.

Chaque règle est liée à la décision qui la justifie (DEPENDS_ON). Chaque override est lié à la règle qu'il exempte. Les nouvelles décisions remplacent les anciennes avec l'historique préservé (REPLACES). Les contradictions entre normes sont signalées (IN_TENSION_WITH).

"Pourquoi cette règle existe ?" — suivez le graphe jusqu'à la décision. "Qu'est-ce qui casse si je change ça ?" — voyez chaque règle dépendante, chaque override et chaque scope affecté. "Où sommes-nous incohérents ?" — les tensions remontent automatiquement.

Les moteurs de politiques exécutent des règles. Knowledge les connecte.

---

## Pour les équipes engineering : le Verifier

Les équipes engineering disposent d'une couche supplémentaire. Knowledge Verifier évalue chaque Pull Request contre l'état normatif déclaré en CI.

```
PR #847 — payment-notification-service
Scope : engineering/payments

Résolu : 3 rules, 2 invariants, 1 override actif
Verdict : PASS

Rule ENG-R-042 (gRPC) — OVERRIDE ACTIF
  Override ENG-O-047 : REST autorisé, contrainte de latence
  Approuvé par : @cto | Expire : 2025-06-01

Invariant ENG-I-003 (Pas d'AGPL) — PASS
Invariant ENG-I-007 (PII chiffré) — PASS
```

Vous choisissez le mode : rapport uniquement, échec sur violations bloquantes, ou strict avec citations obligatoires.

Le Verifier est un add-on pour les workflows git/CI. Le cœur — resolve, check, query — fonctionne pour tout agent dans tout domaine.

---

## Différent par conception

Knowledge n'est pas un scanner de code, un moteur de politiques, une checklist de conformité, ni un prompt.

Ces outils évaluent des artefacts ou exécutent des règles. Knowledge structure les décisions qui les sous-tendent.

Il opère au niveau de la couche normative — là où les humains décident ce qui doit être vrai, et où les agents ont besoin de savoir ce qui a été décidé.

---

## Pourquoi maintenant

Avant l'IA, l'incohérence se propageait lentement. Une mauvaise convention mettait des mois à traverser une base de code.

Aujourd'hui, elle se propage instantanément. Les agents répliquent des patterns à travers les dépôts et les workflows. Les contradictions se multiplient. Les exceptions s'accumulent.

Sans contexte structuré, la vélocité devient de l'entropie.

Knowledge maintient la cohérence à l'échelle.

---

## À qui ça s'adresse

Équipes engineering utilisant des outils de codage IA. Organisations réglementées déployant des agents IA en production — finance, santé, assurance. Équipes plateforme et sécurité définissant des invariants. CTO souhaitant de la vélocité sans dérive organisationnelle. Et organisations qui n'ont pas encore adopté les agents IA — parce que le cadre de gouvernance n'existait pas.

---

## Interfaces

**Serveur MCP** — Tout agent compatible se connecte nativement. Query, check, resolve, record.

**API REST** — CI/CD, scripts, systèmes de production, workflows internes.

**Interface web** — Administration, visualisation du graphe, analyse d'impact.

**Bot Slack** — Capturez les décisions là où les équipes travaillent déjà.

---

## Lisible par les humains. Exécutable par les systèmes.

Les ingénieurs peuvent retrouver les décisions passées et leur justification, voir quand et pourquoi une règle a changé, comprendre les exceptions approuvées.

Les pipelines CI peuvent évaluer les PR contre les invariants, valider les overrides, produire des verdicts structurés.

Les agents en production peuvent vérifier les contraintes de conformité avant d'exécuter des workflows.

Tout membre de l'équipe peut demander à son agent "quelles sont les règles pour ça ?" et obtenir une réponse sourcée depuis Knowledge.

Un seul état normatif. Utilisé par les humains et les systèmes.

---

## Note sur Evidence

Asplenz développe également Evidence — un produit indépendant pour sceller les décisions critiques et générer des preuves cryptographiquement vérifiables.

Knowledge gouverne les décisions opérationnelles. Evidence gouverne les engagements immuables.

Commencez gratuitement avec le Registre IA. Inventoriez vos systèmes d'IA, classifiez-les selon l'EU AI Act, et identifiez vos lacunes de preuve — sans aucun coût.

[Explorer Evidence] [Démarrer le Registre IA — Gratuit]

---

## Gouvernez vos décisions à la vitesse de l'IA

Plan gratuit disponible. Sans carte bancaire.

[Démarrer avec Knowledge] [Voir les tarifs] [Nous contacter]

Les agents agissent.
Les organisations restent responsables.
Asplenz Knowledge rend cela viable.

# [Version EN]
# Your AI agents are fast. But they don't know your rules.

Architecture decisions, compliance constraints, security invariants — your organization has hundreds of rules that AI agents ignore because no system exists to tell them. Knowledge is the single registry they query before acting.

[Start with Knowledge] [See Pricing]

---

## AI velocity changed. Governance didn't.

AI agents now modify systems at machine speed. They introduce dependencies, modify APIs, refactor architecture, deploy infrastructure, price instruments, analyze data, execute workflows.

But they don't know your architectural decisions, your compliance constraints, your risk thresholds, which exceptions were approved, or what must never change.

Without a declared decision layer, agents guess.

---

## Knowledge: the normative layer your agents query before acting

Knowledge is a declarative system of record for operational decisions. Four object types:

**Invariants** — constraints that must never be violated

**Rules** — directives that guide implementation and operations

**Decisions** — documented choices with reasoning

**Overrides** — governed, time-bound exceptions with rationale and approver

Any agent calls `knowledge.resolve()` for its scope and receives the applicable rules, active overrides, detected conflicts, and the full resolution chain. Before it acts, not after.

Knowledge does not block execution. It exposes the applicable decision state. Your ecosystem decides what to do with it.

---

## MCP-native. Dynamic by design.

Agents call Knowledge on demand via MCP (Model Context Protocol).

Not injected into every prompt. No token overhead. No bloated system prompts. Six dedicated tools, called only when the agent needs context.

An engineering agent calls `resolve()` before coding. A compliance agent calls `check()` before processing a case. A pricing agent calls `query()` to know which model to apply. Same registry, same protocol, any workflow.

---

## Scope and resolution

Context resolves deterministically.

```
engineering
 ├─ payments
 │    ├─ pci
 │    ├─ fraud
 ├─ platform
 ├─ data

finance
 ├─ credit
 │    ├─ investment-grade
 ├─ pricing
 ├─ risk
```

Each agent maps to a single path. Resolution flows from most specific to most global. When an agent queries `engineering/payments/pci` or `finance/credit/investment-grade`, Knowledge returns only the rules applicable to that path.

No ambiguity. No hidden precedence. No duplication.

---

## This is what it looks like

An engineering agent opens PR #847. Instead of coding blind, it consulted Knowledge first.

```
PR Summary — Generated by AI

What this PR does
Implements the new payment notification service.

Design decisions

1. gRPC for inter-service communication
   Based on: Rule ENG-R-042 — "All new services use gRPC"
   → knowledge://engineering/rules/ENG-R-042

2. PostgreSQL for transaction storage
   Based on: Decision ENG-D-118 — "PostgreSQL over MongoDB
   for any service requiring ACID transactions"
   → knowledge://engineering/decisions/ENG-D-118

3. No AGPL dependencies used
   Verified against: Invariant ENG-I-003
   → knowledge://engineering/invariants/ENG-I-003

Trade-offs
- Used REST instead of gRPC for notifications (latency < 10ms)
  Override of Rule ENG-R-042 — approved by @cto
  → knowledge://engineering/overrides/ENG-O-047
```

A compliance agent processes a loan application. It called Knowledge first.

```
Agent action log

Loan application #2891 — SME credit line

Verified before processing:

1. Risk scoring model: internal model v3
   Based on: Rule FIN-R-014 — "Use internal scoring, not agency ratings alone"
   → knowledge://finance/credit/rules/FIN-R-014

2. Exposure limit: under 5% portfolio per issuer
   Verified against: Invariant FIN-I-002
   → knowledge://finance/invariants/FIN-I-002

3. Exception: reduced margin for client X
   Override FIN-O-011 — approved by head of credit
   Expires: 2025-12-01
   → knowledge://finance/credit/overrides/FIN-O-011
```

Different domains. Same registry. Same resolve. Same traceability.

---

## You don't have to write it. Import it.

Most teams won't manually document hundreds of decisions. They shouldn't have to. Knowledge populates through its API — any agent or script can propose draft entries from existing sources. A code snapshot agent is included: it scans your repos, identifies architectural patterns, technology choices, and implicit constraints, and submits them as drafts. You validate. Knowledge is populated.

Your team's job is to validate decisions, not to write them.

---

## The graph

Knowledge doesn't store rules as a flat list. It structures them as a connected graph.

Every rule links to the decision that justifies it (DEPENDS_ON). Every override links to the rule it exempts. New decisions supersede old ones with history preserved (REPLACES). Contradictions between norms are surfaced (IN_TENSION_WITH).

"Why does this rule exist?" — follow the graph to the decision. "What breaks if I change this?" — see every dependent rule, override, and scope affected. "Where are we inconsistent?" — tensions surface automatically.

Policy engines execute rules. Knowledge connects them.

---

## For engineering teams: the Verifier

Engineering teams get an additional layer. Knowledge Verifier evaluates every Pull Request against the declared normative state in CI.

```
PR #847 — payment-notification-service
Scope: engineering/payments

Resolved: 3 rules, 2 invariants, 1 active override
Verdict: PASS

Rule ENG-R-042 (gRPC) — OVERRIDE ACTIVE
  Override ENG-O-047: REST permitted, latency constraint
  Approved by: @cto | Expires: 2025-06-01

Invariant ENG-I-003 (No AGPL) — PASS
Invariant ENG-I-007 (PII encrypted) — PASS
```

You choose the mode: report-only, fail on blocking violations, or strict with citation enforcement.

The Verifier is an add-on for git/CI workflows. The core — resolve, check, query — works for any agent in any domain.

---

## Different by design

Knowledge is not a code scanner, a policy engine, a compliance checklist, or a prompt.

Those tools evaluate artifacts or execute rules. Knowledge structures the decisions behind them.

It operates at the normative layer — where humans decide what should be true, and agents need to know what has been decided.

---

## Why now

Before AI, inconsistency spread slowly. A wrong convention took months to propagate.

Now it propagates instantly. Agents replicate patterns across repositories and workflows. Contradictions multiply. Exceptions accumulate.

Without structured context, velocity becomes entropy.

Knowledge maintains coherence at scale.

---

## Who this is for

Engineering teams using AI coding tools. Regulated organizations deploying AI agents in production — finance, health, insurance. Platform and security teams defining invariants. CTOs who want velocity without organizational drift. And organizations that haven't adopted AI agents yet — because the governance framework didn't exist.

---

## Interfaces

**MCP Server** — Any compatible agent connects natively. Query, check, resolve, record.

**REST API** — CI/CD, scripts, production systems, internal workflows.

**Web UI** — Administration, graph visualization, impact analysis.

**Slack Bot** — Capture decisions where teams already work.

---

## Human-readable. System-executable.

Engineers can retrieve past decisions and rationale, see when and why a rule changed, understand approved exceptions.

CI pipelines can evaluate PRs against invariants, validate overrides, produce structured verdicts.

Production agents can verify compliance constraints before executing workflows.

Any team member can ask their agent "what are the rules for this?" and get an answer sourced from Knowledge.

One normative state. Used by humans and systems.

---

## A note on Evidence

Asplenz also builds Evidence — an independent product for sealing high-stakes decisions and generating cryptographically verifiable proof artifacts.

Knowledge governs operational decisions. Evidence governs immutable commitments.

Start free with the AI Registry. Inventory your AI systems, classify them under the EU AI Act, and see where your proof gaps are — at no cost.

[Explore Evidence] [Start AI Registry — Free]

---

## Start governing decisions at AI speed

Free plan available. No credit card required.

[Start with Knowledge] [See Pricing] [Talk to Us]

Agents act.
Organizations remain accountable.
Asplenz Knowledge makes that sustainable.