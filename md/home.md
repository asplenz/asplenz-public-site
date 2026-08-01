---
slug: home
title_en: "Compliance Decision Platform for Regulated Industries"
title_fr: "Compliance Decision Platform pour les Secteurs Régulés"
description_en: "Compliance is no longer just documentation. It has become executable."
description_fr: "La compliance n'est plus seulement une documentation. Elle est devenue exécutable."
---

<!-- @lang en -->

# Compliance Decision Platform for Regulated Industries

> **Compliance is no longer just documentation. It has become executable.**

Every compliance decision can be executed, explained and replayed years later.

Modern applications, AI agents and human operators all require deterministic compliance decisions. Knowledge provides the runtime that executes compliance consistently across every channel.

**Book a demo** · **Explore the platform**

## Verdict demo (POST /v1/check)

**Intended action** : Buy 150 TSLA for Mrs Lim, conservative discretionary mandate ; post-trade equity 42% of NAV.

```
jurisdiction             SG
client_classification    retail
mandate_type             conservative
asset_class              equity
equity_exposure_post     0.42
single_name_post         0.18
```

**Verdict : Blocked**

- Winning rule : `rul-cd35e21cf145` — Conservative-profile mandates cap aggregate equity exposure at 40% of portfolio value. (`hard_block`)
- Also cited : `rul-f0ff5dd730ed` (single-name cap)
- Consultation : `cns-943f71bf6b6b`
- Latency : 4 ms · deterministic · replayable

## Fits your existing architecture

Most regulated organisations already operate a combination of workflow engines, decision platforms, GRC systems and business applications.

Knowledge doesn't require you to replace them.

It becomes the compliance execution layer that sits where deterministic compliance decisions are needed.

```
┌──────────────────────────────────────────────┐
│  Business applications                        │
│  Workflow · Decision engines · AI agents      │
├──────────────────────────────────────────────┤
│  Knowledge runtime                            │
│  Policies · Rules · Targets · Approvals ·     │
│  Overrides · Governance                       │
├──────────────────────────────────────────────┤
│  Audit & regulatory evidence                  │
│  Replayable consultations · Pinned rule       │
│  versions · Event log                         │
└──────────────────────────────────────────────┘
```

## The three pillars

### 1. Compliance operating model

Policies, Rules, Decision Tables, Targets, Approvals, Overrides, Governance, Consultations and Events are first-class objects in the runtime, not application code you have to rebuild.

### 2. Deterministic execution

Same inputs, same policies, same decision, every time. AI stays strictly outside the decision path. It can explain, assist and answer. It never determines the verdict.

### 3. Replayable governance

Every decision can be reconstructed years later : applicable policies, rules, rule versions, approvals, overrides, governance decisions and the consultation record. Exactly as they existed when the decision was made.

## Built for the reality of regulated organisations

### Multi-audience applicability

The same rule applies differently to a Singapore desk, a Hong Kong desk and a regional compliance team. One rule, multiple audiences, no duplication.

### Human governance

Compliance isn't always automatic. When a human loop is needed, Knowledge provides it natively.

- Approvals with audit trail
- Temporary scope-bounded overrides
- Observe mode for staged rollout
- Governance decisions on rule changes

### Execute everywhere

The same compliance decision reaches its callers where they already work.

- REST APIs for OMS and back-office integrations
- MCP servers for AI agents
- Slack for the human loop
- Email for asynchronous approvals

## White-label ready

Designed from day one for software vendors and consulting firms who want to operate compliance for their own customers under their own brand.

- Organisations above tenants
- Structural tenant isolation
- Partner administration portal
- Cross-tenant monitoring

**→ Explore the OEM programme**

## Fits alongside existing platforms

Knowledge complements existing enterprise software as often as it replaces it. It sits alongside decision engines, workflow orchestrators and GRC platforms rather than competing with all of them.

*IBM ODM · GoRules · DecisionRules · Camunda · ServiceNow GRC · Fenergo*

**Replace where it makes sense. Integrate everywhere else.**

**→ See the ecosystem**

## Built for regulated industries

Any organisation where compliance decisions must be deterministic, explainable and replayable.

- Wealth management
- Insurance
- Healthcare
- AI governance

And beyond : banking, asset management, energy, government and any regulated workflow with an accountable owner.

## Ready to see it live ?

A fully configured demo tenant that mirrors your organisation, available in less than one hour.

**Book a demo** · **Talk to us**

<!-- @lang fr -->

# Compliance Decision Platform pour les Secteurs Régulés

> **La compliance n'est plus seulement une documentation. Elle est devenue exécutable.**

Chaque décision compliance peut être exécutée, expliquée et rejouée des années plus tard.

Les applications modernes, les agents IA et les opérateurs humains ont tous besoin de décisions compliance déterministes. Knowledge fournit le runtime qui exécute la compliance de manière cohérente sur chaque canal.

**Réserver une démo** · **Explorer la plateforme**

## Démo de verdict (POST /v1/check)

**Action envisagée** : Buy 150 TSLA for Mrs Lim, conservative discretionary mandate ; post-trade equity 42% of NAV.

```
jurisdiction             SG
client_classification    retail
mandate_type             conservative
asset_class              equity
equity_exposure_post     0.42
single_name_post         0.18
```

**Verdict : Blocked**

- Règle gagnante : `rul-cd35e21cf145` — Les mandats à profil conservateur plafonnent l'exposition equity agrégée à 40% de la valeur du portefeuille. (`hard_block`)
- Également citée : `rul-f0ff5dd730ed` (plafond single-name)
- Consultation : `cns-943f71bf6b6b`
- Latence : 4 ms · déterministe · rejouable

## S'intègre à votre architecture existante

La plupart des organisations régulées opèrent déjà une combinaison de moteurs de workflow, de plateformes de décision, de systèmes GRC et d'applications métier.

Knowledge ne vous demande pas de les remplacer.

Il devient la couche d'exécution compliance qui se place là où des décisions compliance déterministes sont nécessaires.

```
┌──────────────────────────────────────────────┐
│  Applications métier                          │
│  Workflow · Moteurs de décision · Agents IA   │
├──────────────────────────────────────────────┤
│  Runtime Knowledge                            │
│  Policies · Rules · Targets · Approvals ·     │
│  Overrides · Gouvernance                      │
├──────────────────────────────────────────────┤
│  Audit et preuve réglementaire                │
│  Consultations rejouables · Versions de       │
│  règles figées · Journal d'événements         │
└──────────────────────────────────────────────┘
```

## Les trois piliers

### 1. Modèle opérationnel compliance

Policies, Rules, Decision Tables, Targets, Approvals, Overrides, Gouvernance, Consultations et Events sont des objets de première classe dans le runtime, pas du code applicatif à reconstruire.

### 2. Exécution déterministe

Mêmes entrées, mêmes policies, même décision, à chaque fois. L'IA reste strictement hors du chemin de décision. Elle explique, elle assiste, elle répond. Elle ne rend jamais le verdict.

### 3. Gouvernance rejouable

Chaque décision peut être reconstituée des années plus tard : policies applicables, règles, versions de règles, approbations, overrides, décisions de gouvernance et enregistrement de consultation. Exactement dans l'état où ils étaient au moment de la décision.

## Conçu pour la réalité des organisations régulées

### Applicabilité multi-audience

La même règle s'applique différemment à un desk Singapour, un desk Hong Kong et une équipe compliance régionale. Une seule règle, plusieurs audiences, aucune duplication.

### Gouvernance humaine

La compliance n'est pas toujours automatique. Quand une boucle humaine est nécessaire, Knowledge la fournit nativement.

- Approbations avec piste d'audit
- Overrides temporaires bornés par scope
- Mode observe pour déploiement progressif
- Décisions de gouvernance sur les changements de règles

### Exécuter partout

La même décision compliance atteint ses appelants là où ils travaillent déjà.

- API REST pour l'OMS et les intégrations back-office
- Serveurs MCP pour les agents IA
- Slack pour la boucle humaine
- Email pour les approbations asynchrones

## Prêt pour le white-label

Conçu dès le premier jour pour les éditeurs et cabinets de conseil qui veulent opérer la compliance pour leurs propres clients sous leur propre marque.

- Organisations au-dessus des tenants
- Isolation structurelle des tenants
- Portail d'administration partenaire
- Monitoring cross-tenants

**→ Découvrir le programme OEM**

## Cohabite avec vos plateformes existantes

Knowledge complète l'existant aussi souvent qu'il le remplace. Il se place aux côtés des moteurs de décision, des orchestrateurs de workflow et des plateformes GRC plutôt que d'entrer en compétition avec chacun.

*IBM ODM · GoRules · DecisionRules · Camunda · ServiceNow GRC · Fenergo*

**Remplacer là où ça fait sens. Intégrer partout ailleurs.**

**→ Voir l'écosystème**

## Conçu pour les secteurs régulés

Toute organisation où les décisions compliance doivent être déterministes, explicables et rejouables.

- Wealth management
- Assurance
- Santé
- Gouvernance IA

Et au-delà : banque, gestion d'actifs, énergie, secteur public et tout workflow régulé avec un responsable identifié.

## Prêt à voir la plateforme en action ?

Un tenant de démonstration entièrement configuré qui reproduit votre organisation, disponible en moins d'une heure.

**Réserver une démo** · **Nous parler**
