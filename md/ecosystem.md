---
slug: ecosystem
title_en: "Ecosystem"
title_fr: "Écosystème"
description_en: "How Knowledge fits into an existing enterprise architecture. Comparison with the compliance and decisioning landscape."
description_fr: "Comment Knowledge s'intègre dans une architecture enterprise existante. Comparaison avec le paysage compliance et decisioning."
---

<!-- @lang en -->

# Every platform solves a different problem.

Enterprise architectures rarely rely on a single platform.

Each platform category solves a different problem :

- Execute business decisions
- Orchestrate workflows
- Document governance
- Manage client lifecycle

> Knowledge focuses on one problem : executing the compliance operating model.

Rather than replacing your existing stack, Knowledge is designed to integrate with it, or replace only the components that make sense.

## Platform comparison

| Product | Primary purpose | What the product lets you model | Typical use cases |
|---|---|---|---|
| **Asplenz Knowledge** | Compliance decision platform | Policies, Rules, Decision Tables, Targets, Approvals, Overrides, Consultations, Governance | Regulatory compliance, internal policies, product eligibility, suitability, compliance operations |
| IBM ODM | Enterprise decision management | Business rules, Decision Tables, Decision Services | Enterprise decision services, pricing, eligibility, routing |
| GoRules | Decision execution | Decision Graphs, Decision Tables, calculations | Credit decisions, pricing, fraud, operational automation |
| DecisionRules | Business decision automation | Decision Tables, Decision Trees, Decision Flows, scripts | Pricing, routing, fee calculation, operational rules |
| Camunda | Process orchestration | BPMN processes, human tasks, events | Workflow automation, case management, long-running processes |
| Taktile | AI decisioning | Risk strategies, scoring pipelines, decision flows | Credit underwriting, fraud detection |
| ServiceNow GRC · OneTrust · MetricStream | Governance | Policies, risks, controls, evidence | Governance, regulatory documentation |
| Fenergo | Client lifecycle management | KYC, AML, onboarding workflows | Client onboarding |
| Drools · Red Hat DM | Rule engine | Rules, facts, inference logic | Embedded business rules |
| Internal development | Custom platform | Anything | Organisation-specific platforms |

## How Knowledge fits

Knowledge does not compete with every platform.

It complements many of them.

Its role depends on the architecture you already have.

### + IBM ODM

IBM ODM executes enterprise decision services.

**Knowledge** : provides the compliance operating model around those decisions : policies, applicability, approvals, overrides and replayable governance.

### + Camunda

Camunda orchestrates processes.

**Knowledge** : evaluates compliance.

- Camunda decides *when* something happens.
- Knowledge decides *whether* it complies.

### + GoRules

GoRules models decision logic using decision graphs.

**Knowledge** : models compliance policies and their applicability.

GoRules can calculate a business decision. Knowledge determines which compliance rules apply, records the governance around the decision and provides replayable evidence. The two products can coexist in the same architecture.

### + DecisionRules

DecisionRules automates operational business decisions with decision tables.

**Knowledge** : executes compliance decisions. Same decision-table capability, plus native governance : one approval, one override, one replayable audit trail per Rule regardless of how many rows it carries.

- DecisionRules answers : what decision should be produced ?
- Knowledge answers : which compliance policies apply and how should this decision be governed ?

### + GRC platforms

Governance platforms document compliance.

**Knowledge** : executes compliance.

Policies documented in a GRC platform can be operationalised by Knowledge.

### + Fenergo

Fenergo specialises in KYC and client lifecycle management.

**Knowledge** : provides a generic compliance execution platform that can also support onboarding decisions alongside many other regulated processes.

### + Internal development

Many organisations already have internal rule engines or compliance services.

**Knowledge** : can progressively replace those components or integrate alongside them while preserving existing business applications.

## Typical architectures

Four common shapes. Knowledge sits wherever compliance decisions matter.

### Compliance platform

```
Business Application
        ↓
    Knowledge
        ↓
 Enterprise Systems
```

### Decision engine + compliance

```
Business Application
        ↓
    Knowledge
        ↓
    GoRules
        ↓
 Enterprise Systems
```

### Workflow + compliance

```
Business Application
        ↓
    Camunda
        ↓
    Knowledge
        ↓
 Enterprise Systems
```

### Enterprise decision services

```
Business Application
        ↓
    Knowledge
        ↓
    IBM ODM
```

## Philosophy

Every platform has a purpose.

- Workflow engines orchestrate.
- Decision engines calculate.
- GRC platforms document.
- Client lifecycle platforms manage onboarding.

> Knowledge operationalises compliance.

Its purpose is not to replace every system in your architecture.

Its purpose is to provide a deterministic, replayable and governed compliance execution layer wherever compliance decisions matter.

<!-- @lang fr -->

# Chaque plateforme résout un problème différent.

Les architectures enterprise reposent rarement sur une seule plateforme.

Chaque catégorie de plateforme résout un problème différent :

- Exécuter des décisions métier
- Orchestrer des workflows
- Documenter la gouvernance
- Gérer le cycle de vie client

> Knowledge se concentre sur un seul problème : exécuter le modèle opérationnel compliance.

Plutôt que de remplacer votre stack existante, Knowledge est conçu pour s'y intégrer, ou pour ne remplacer que les composants qui font sens.

## Comparaison des plateformes

| Produit | Objectif principal | Ce que le produit permet de modéliser | Cas d'usage typiques |
|---|---|---|---|
| **Asplenz Knowledge** | Plateforme de décision compliance | Policies, Rules, Decision Tables, Targets, Approvals, Overrides, Consultations, Gouvernance | Compliance réglementaire, politiques internes, éligibilité produit, suitability, opérations compliance |
| IBM ODM | Gestion de décision enterprise | Règles métier, Decision Tables, Decision Services | Services de décision enterprise, pricing, éligibilité, routage |
| GoRules | Exécution de décision | Decision Graphs, Decision Tables, calculs | Décisions de crédit, pricing, fraude, automatisation opérationnelle |
| DecisionRules | Automatisation de décisions métier | Decision Tables, Decision Trees, Decision Flows, scripts | Pricing, routage, calcul de frais, règles opérationnelles |
| Camunda | Orchestration de processus | Processus BPMN, tâches humaines, événements | Automatisation de workflow, gestion de cas, processus longs |
| Taktile | Decisioning IA | Stratégies de risque, pipelines de scoring, decision flows | Octroi de crédit, détection de fraude |
| ServiceNow GRC · OneTrust · MetricStream | Gouvernance | Politiques, risques, contrôles, preuves | Gouvernance, documentation réglementaire |
| Fenergo | Gestion du cycle de vie client | KYC, AML, workflows d'onboarding | Onboarding client |
| Drools · Red Hat DM | Moteur de règles | Règles, faits, logique d'inférence | Règles métier embarquées |
| Développement interne | Plateforme sur mesure | N'importe quoi | Plateformes propres à l'organisation |

## Comment Knowledge s'intègre

Knowledge n'entre pas en compétition avec chaque plateforme.

Il en complète beaucoup.

Son rôle dépend de l'architecture que vous avez déjà.

### + IBM ODM

IBM ODM exécute les services de décision enterprise.

**Knowledge** : fournit le modèle opérationnel compliance autour de ces décisions : politiques, applicabilité, approbations, overrides et gouvernance rejouable.

### + Camunda

Camunda orchestre les processus.

**Knowledge** : évalue la compliance.

- Camunda décide *quand* quelque chose se produit.
- Knowledge décide *si c'est conforme*.

### + GoRules

GoRules modélise la logique de décision via des decision graphs.

**Knowledge** : modélise les politiques compliance et leur applicabilité.

GoRules peut calculer une décision métier. Knowledge détermine quelles règles compliance s'appliquent, enregistre la gouvernance autour de la décision et fournit une preuve rejouable. Les deux produits peuvent coexister dans la même architecture.

### + DecisionRules

DecisionRules automatise les décisions métier opérationnelles via des decision tables.

**Knowledge** : exécute les décisions compliance. Même capacité decision-table, avec la gouvernance native en plus : une approbation, un override, une piste d'audit rejouable par Rule, quel que soit le nombre de rangées qu'elle porte.

- DecisionRules répond à : quelle décision faut-il produire ?
- Knowledge répond à : quelles politiques compliance s'appliquent et comment cette décision doit-elle être gouvernée ?

### + Plateformes GRC

Les plateformes de gouvernance documentent la compliance.

**Knowledge** : exécute la compliance.

Les politiques documentées dans une plateforme GRC peuvent être opérationnalisées par Knowledge.

### + Fenergo

Fenergo se spécialise dans le KYC et le cycle de vie client.

**Knowledge** : fournit une plateforme d'exécution compliance générique qui peut aussi supporter les décisions d'onboarding aux côtés de nombreux autres processus régulés.

### + Développement interne

Beaucoup d'organisations ont déjà des moteurs de règles ou services compliance internes.

**Knowledge** : peut remplacer progressivement ces composants ou s'intégrer à leurs côtés tout en préservant les applications métier existantes.

## Architectures typiques

Quatre formes courantes. Knowledge se place là où les décisions compliance comptent.

### Plateforme compliance

```
Application métier
        ↓
    Knowledge
        ↓
 Systèmes enterprise
```

### Moteur de décision + compliance

```
Application métier
        ↓
    Knowledge
        ↓
    GoRules
        ↓
 Systèmes enterprise
```

### Workflow + compliance

```
Application métier
        ↓
    Camunda
        ↓
    Knowledge
        ↓
 Systèmes enterprise
```

### Services de décision enterprise

```
Application métier
        ↓
    Knowledge
        ↓
    IBM ODM
```

## Philosophie

Chaque plateforme a un objectif.

- Les moteurs de workflow orchestrent.
- Les moteurs de décision calculent.
- Les plateformes GRC documentent.
- Les plateformes de cycle de vie client gèrent l'onboarding.

> Knowledge opérationnalise la compliance.

Son objectif n'est pas de remplacer chaque système de votre architecture.

Son objectif est de fournir une couche d'exécution compliance déterministe, rejouable et gouvernée, là où les décisions compliance comptent.
