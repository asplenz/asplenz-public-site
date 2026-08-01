---
slug: use-cases
title_en: "Use cases"
title_fr: "Cas d'usage"
description_en: "Four verticals where Knowledge gates business actions with an audit-grade compliance runtime."
description_fr: "Quatre verticaux où Knowledge encadre les actions métier avec un runtime compliance de niveau audit."
---

<!-- @lang en -->

# Where Knowledge runs

The compliance model is vertical-agnostic (Policy, Rule, Target, Override, Approval, Consultation). Below are four industries where the shape of the work fits the shape of the product.

## Wealth management and private banking

A relationship manager instructs a trade for a client with a conservative mandate. Before it reaches the market, the order management system checks the trade against the desk's rules : jurisdiction, client classification, mandate type, asset class, post-trade exposures. The applicable rules evaluate the case (equity cap, single-name cap, suitability sign-off, jurisdiction-specific requirements).

The equity cap is not a single number. It is a decision table : one Rule that carries different thresholds for different client segments, evaluated top-to-bottom until a row matches.

*The equity cap rule, one Rule with three rows.*

| Client segment | Equity cap |
|---|---|
| Retail · lower net worth | 40 % |
| Retail · high net worth | 50 % |
| Accredited investor | 70 % |

**Three thresholds, one governance lifecycle. Compliance approves the table, not three separate rules.**

**Fits** : private banking desks, asset managers, family offices, brokerage compliance.

## AI agent governance

Two integration patterns benefit from Knowledge.

**Autonomous agents** (programs built on the Anthropic or OpenAI API, a LangChain workflow, a bespoke back-office bot) must ask before acting when the action touches regulated ground. Through the MCP protocol, the agent checks its intended action against the applicable rules before creating a customer, moving funds, sending a communication, or applying a discount. The verdict is returned instantly ; the agent proceeds, opens an approval request and waits, or aborts.

**Conversational surfaces** (Claude.ai or chatgpt.com augmented with an MCP connector) reach the same runtime. A compliance officer, a relationship manager or a business analyst can ask the assistant to draft a rule, list active approvals, or check whether an intended action would pass. Same audit trail, same rules, same verdicts as any programmatic caller.

Everything captured : the intent, the verdict, the rules that fired, the human decision if any. Governance over autonomous work is a first-class concern of the platform, not a bolted-on log.

**Fits** : banks and insurers deploying agent copilots, back-office automation, conversational assistants for compliance and business users.

## Insurance underwriting

A policy issuance request is checked against the underwriting guide, the AML watchlist, the medical exclusion policy, and the reinsurance limits. Rules carry the metric conditions (age brackets, sum insured thresholds, geographic exclusions). When a case falls outside the auto-issue envelope, it escalates to an underwriter with the exact rules that fired attached. The underwriter's decision becomes an authorised exception tied to the policy ; the next quote for the same case is instantaneous.

**Fits** : life insurers, P&C underwriting, health insurance intake, reinsurance treaty checks.

## Healthcare and medical devices

Clinical decisions and device operations that fall under HIPAA, FDA 21 CFR Part 11, or EMA supervision need auditable gates. A connected device checks with Knowledge before a class of operations ; a clinical workflow app checks before releasing a prescription for controlled substances ; a research protocol validates a subject enrollment against inclusion / exclusion criteria. The audit trail is the deliverable the regulator asks for.

**Fits** : connected medical devices, EHR compliance layers, clinical research workflow, pharmacy operations.

## The common thread

All four verticals share the same shape : a business action needs to pass a compliance check before executing, and the audit of that decision needs to survive multi-year regulator review. Knowledge is designed for exactly that shape.

<!-- @lang fr -->

# Là où Knowledge tourne

Le modèle compliance est agnostique du vertical (Policy, Rule, Target, Override, Approval, Consultation). Ci-dessous quatre industries où la forme du travail épouse la forme du produit.

## Gestion de patrimoine et banque privée

Un chargé de clientèle prépare un trade pour un client au mandat conservateur. Avant que l'ordre n'atteigne le marché, l'order management system confronte le trade aux règles du desk : juridiction, classification client, type de mandat, classe d'actif, expositions post-trade. Les règles applicables évaluent le cas (plafond equity, plafond single-name, attestation suitability, exigences juridictionnelles).

Le plafond equity n'est pas un nombre unique. C'est une decision table : une Rule qui porte différents seuils selon le segment client, évaluée de haut en bas jusqu'à ce qu'une rangée matche.

*La règle de plafond equity, une Rule à trois rangées.*

| Segment client | Plafond equity |
|---|---|
| Retail · lower net worth | 40 % |
| Retail · high net worth | 50 % |
| Accredited investor | 70 % |

**Trois seuils, un seul cycle de gouvernance. Compliance approuve la table, pas trois règles séparées.**

**Convient à** : desks de banque privée, gérants d'actifs, family offices, compliance de courtage.

## Gouvernance des agents IA

Deux patterns d'intégration bénéficient de Knowledge.

**Les agents autonomes** (programmes construits sur l'API Anthropic ou OpenAI, workflow LangChain, bot back-office maison) doivent demander avant d'agir quand l'action touche un terrain régulé. Via le protocole MCP, l'agent confronte son intention aux règles applicables avant de créer un client, de déplacer des fonds, d'envoyer une communication, ou d'appliquer un discount. Le verdict est renvoyé instantanément ; l'agent poursuit, ouvre une demande d'approbation et attend, ou abandonne.

**Les surfaces conversationnelles** (Claude.ai ou chatgpt.com augmentés d'un connecteur MCP) atteignent le même runtime. Un compliance officer, un chargé de clientèle ou un analyste métier peut demander à l'assistant de rédiger une règle, de lister les approbations actives, ou de vérifier si une intention passerait. Même piste d'audit, mêmes règles, mêmes verdicts que n'importe quel appelant programmatique.

Tout est capturé : l'intention, le verdict, les règles qui ont fired, la décision humaine le cas échéant. La gouvernance du travail autonome est une préoccupation de première classe de la plateforme, pas un log bolt-on.

**Convient à** : banques et assureurs déployant des copilotes agents, automatisation back-office, assistants conversationnels pour les équipes compliance et métier.

## Souscription en assurance

Une demande d'émission de police est confrontée au guide de souscription, à la watchlist AML, à la politique d'exclusion médicale, et aux limites de réassurance. Les règles portent les conditions métriques (tranches d'âge, seuils de capital assuré, exclusions géographiques). Quand un dossier sort de l'enveloppe auto-issue, il est escaladé à un souscripteur avec les règles déclenchées attachées. La décision du souscripteur devient une exception autorisée liée à la police ; le prochain devis sur le même dossier est instantané.

**Convient à** : assureurs vie, souscription IARD, admission santé, vérifications de traités de réassurance.

## Santé et dispositifs médicaux

Les décisions cliniques et opérations de dispositifs sous HIPAA, FDA 21 CFR Part 11, ou supervision EMA ont besoin de gates auditables. Un dispositif connecté consulte Knowledge avant une classe d'opérations ; une app de workflow clinique vérifie avant de libérer une prescription de substances contrôlées ; un protocole de recherche valide une inclusion de sujet contre les critères d'inclusion / exclusion. La piste d'audit est le livrable que le régulateur demande.

**Convient à** : dispositifs médicaux connectés, couches de compliance EHR, workflow de recherche clinique, opérations pharmacie.

## Le fil rouge

Les quatre verticaux partagent la même forme : une action métier doit passer un check compliance avant de s'exécuter, et l'audit de cette décision doit survivre à une revue régulateur pluri-annuelle. Knowledge est conçu pour exactement cette forme.
