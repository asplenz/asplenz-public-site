---
title: Gardez l'autorité policy quand les agents IA commencent à prendre des décisions métier
description: Les agents IA peuvent investiguer des cas, rassembler des preuves et recommander ou exécuter des actions. Knowledge garde les règles qui déterminent ce qui est allowed, blocked ou requires human approval sous gouvernance Compliance, hors du modèle.
locale: fr
kicker: Solutions - Pour compliance officers
---

Votre organisation commence à déployer des agents IA dans du travail qui était fait par des humains suivant des procédures.

Avant les agents, Compliance pouvait gouverner la procédure, les contrôles, la hiérarchie d'approbation, la formation et le trail d'audit autour des humains. Les décisions étaient prises par des personnes qui pouvaient être formées à la policy et observées agissant selon.

Avec les agents, la même question surface sur chaque déploiement :

> *Qui détermine ce que l'agent est autorisé à décider ?*

Cette page est sur comment Compliance garde cette autorité quand l'agent, plutôt qu'un humain ou un système métier existant, participe à la décision.

## Garder la policy hors du modèle

L'équipe IA peut décider comment l'agent investigue un cas, quels tools il utilise, quelles preuves il rassemble. Compliance garde l'autorité sur les règles déterministes qui gouvernent le résultat.

| AI Product possède | Compliance possède |
|---|---|
| Comportement de l'agent | Contenu policy |
| Tools et intégrations | Thresholds, conditions, scope |
| Investigation et orchestration | Précédence entre les règles |
| Acquisition des faits | Exigences d'approbation |
| UX agent et gestion d'erreur | Exceptions et leur scope |
| Déploiement et observability | Dates d'effet et amendements |

Knowledge est la surface où la colonne Compliance vit. Ce n'est pas un endroit où les engineers shipent de la policy. C'est un endroit où Compliance édite directement, sans engineering comme gatekeeper.

## Décider où l'autonomie de l'IA s'arrête

Toutes les décisions gouvernées ne devraient pas être automatisées. Knowledge laisse la policy déterminer, par règle et par scope, quand l'agent peut procéder, quand il doit s'arrêter, et quand l'autorité doit retourner à un humain.

| Severity | Ce que l'agent fait |
|---|---|
| **Allow** | L'agent procède. La décision est déterministe et traçable. |
| **Require approval** | L'agent peut préparer la recommandation, mais un decider humain possède le résultat. Knowledge crée un record Approval first-class avec les règles déclenchantes, l'intention et l'approver. La décision surface via UI back-office, modal Slack, ou callback webhook. |
| **Block** | L'agent s'arrête. La frontière du tool refuse d'exécuter l'action sous-jacente. |
| **Absolute ban** | Idem block, et ne peut pas être overridé même avec une approbation. |

Compliance décide de la frontière d'autonomie au niveau de la règle. Cette frontière est enforceable à la frontière du tool, pas une note dans un document. Voir [Enforcement](/product/enforcement) pour le mécanisme.

## Changer la policy indépendamment

Les règles sont des objets que Compliance peut authorer et amender sans cycle de release coordonné. Chaque règle porte une vue métier :

```
Concentration single-name

S'applique à     : Singapour, Equity
Règle            : Exposition post-trade > 12%
Résultat         : REQUIRE APPROVAL
Effective        : 1 octobre 2026
Rationale        : Policy de concentration mise à jour selon guidance MAS
Approuvée par    : Head of Wealth Compliance
Version précédente: pinnée aux consultations d'avant cette date
```

Changez le threshold. Save. La prochaine consultation d'agent utilise la nouvelle valeur. La version précédente est préservée pour que toute décision passée pointe toujours sur la policy exacte de son jour.

Les changements de policy peuvent être gouvernés indépendamment des releases d'agent quand la nouvelle règle utilise du contexte que l'agent peut déjà acquérir. Quand une règle exige un nouveau champ, la boucle `required_context` de l'agent apprend à le fetch. Voir [Progressive context](/product/progressive-context).

## Expliquer chaque décision gouvernée

*« Montrez-moi la décision sur ce cas, et pourquoi elle a été prise. »*

La réponse est une vue métier de l'état gelé au moment de décision :

```
Décision        : BLOCKED
Cas             : C-18273
Décidé le       : 15 mars 2026, 09:12 UTC

Policy à ce moment : Client Suitability v7

Règles applicables :
  R-182 v4  (allow)
  R-291 v2  (require approval)
  R-817 v6  (block)

Règle gagnante  : R-817 v6
Raison          : Prohibition de précédence supérieure

Override humain : Aucun
```

Pas une approximation. Pas dérivée depuis des logs. Les règles exactes, versions, précédence et overrides en vigueur au moment de décision. Voir [Auditability](/product/auditability) pour comment la reconstruction marche.

## Préserver pourquoi la policy a changé, pas seulement quoi a changé

Deux histoires d'audit, gardées au même endroit. Les équipes compliance ont besoin des deux.

| Histoire policy | Histoire décision |
|---|---|
| Pourquoi avons-nous introduit cette règle ? | Quelle version de règle s'appliquait sur ce cas ? |
| Qui a approuvé l'amendement ? | Quelles règles ont fired ? Lesquelles ont été neutralisées par un override ? |
| Pourquoi le threshold a-t-il bougé ? | Quelle règle a gagné en précédence, et pourquoi ? |
| Sous quel driver réglementaire ? | Quelle a été l'approbation humaine, s'il y en a eu une ? |

Chaque amendement de policy écrit un acte de gouvernance (actor, date, rationale). Chaque décision écrit une Consultation. Aucune des deux histoires n'est recollée après coup ; les deux sont préservées à mesure que les décisions et amendements arrivent.

## Gouverner la policy à mesure qu'elle évolue

Trois contrôles légers que Knowledge fait tourner pendant que la policy grandit :

| Contrôle | Ce qu'il surface |
|---|---|
| **Coherence checks au write time** | Des checks d'authoring AI-assisted peuvent flag des duplicates potentiels, tensions ou contradictions pour review humaine. Ils ne déterminent pas les résultats policy runtime ; le moteur déterministe le fait. |
| **Coverage insight** | Voir quelles règles drivent le plus de décisions, lesquelles s'appliquent rarement, et où les approbations ou blocks se concentrent. Aide à identifier les règles qui ne gagnent plus leur place. |
| **Preview de date d'effet** | Vérifier comment un changement de règle proposé aurait altéré les décisions passées avant que vous ne l'activiez. |

## Où la responsabilité de Knowledge s'arrête

- **Enforcement partout dans la firme.** Knowledge gouverne les décisions qui consomment son API. Un workflow qui hardcode sa propre logique policy est invisible à Knowledge. La découverte et adoption de la couche gouvernée est un effort de change management, pas une garantie technique.
- **Le jugement dans les décisions d'approval.** Les verdicts `approval_required` ont toujours besoin d'un decider humain. Knowledge route le cas efficacement ; il ne retire pas la responsabilité.
- **L'interprétation de policy en texte libre.** Knowledge produit le verdict déterministement à partir de triples structurés `{scope, condition, severity}`. Si vos règles n'existent aujourd'hui qu'en texte libre dans un document, vous devez toujours les traduire dans cette forme structurée. Knowledge accepte CSV, Excel, DMN ou input API.

## Commencer par un domaine policy

Pickez un domaine policy que vos agents touchent déjà, ou vont bientôt toucher. Formalisez les règles dans Knowledge. Faites tourner en shadow mode contre votre process actuel. Mesurez la parité. Cutoverez quand les chiffres tombent.

**[Qu'est-ce que Knowledge ?](/docs/what-is-knowledge)** &nbsp; · &nbsp; **[Parlez-nous](/contact)**

## Related

| À lire ensuite | Pourquoi |
|---|---|
| [Product](/product) | La boucle de décision pour agents IA rule-governed |
| [Auditability](/product/auditability) | Comment la reconstruction historique marche : Consultation, RuleVersion, trace de précédence |
| [Enforcement](/product/enforcement) | L'enveloppe signée, le modèle PEP et la chaîne de confiance à quatre acteurs |
| [Progressive context](/product/progressive-context) | Comment les règles exigeant de nouveaux champs se propagent sans casser les consumers |
