---
title: Comment la policy est gouvernée dans Knowledge
description: Autorship, versioning, approbations, overrides et audit. La mécanique derrière chaque verdict que Knowledge retourne.
locale: fr
kicker: Modèle de gouvernance
ctaLabel: Devenir design partner
ctaHref: /pilot
---

Chaque verdict que Knowledge retourne est produit contre un état de policy spécifique et enregistré avec les règles et la configuration qui ont déterminé le résultat. Cette page décrit comment cet état est autoré, versionné, modifié et reconstruit plus tard.

## Le cycle de vie d'une règle

Une règle passe par un ensemble restreint d'états gouvernés.

| État | Signification |
|---|---|
| **Draft** | La règle est en cours d'autorship ou d'édition. Le moteur ne l'évalue pas |
| **Active** | La règle est disponible pour le moteur. Des verdicts peuvent être produits contre elle |
| **Archived** | La règle est retirée. Le moteur ne l'évalue plus, mais les Consultations historiques qui ont cité une version antérieure peuvent toujours être rejouées |

Une règle active porte aussi un toggle `is_enabled`. Désactiver une règle active la cache du moteur sans l'archiver, ce qui est utile pendant une réponse à incident ou quand un seuil est en cours de recalibration.

## Versioning immutable

Chaque changement d'un champ affectant le verdict d'une règle crée une nouvelle **RuleVersion**. Les versions antérieures ne sont jamais réécrites.

Les Consultations qui ont cité une version antérieure continuent de pointer sur cette version exacte. Rendre la décision plus tard lit l'état figé, pas l'état actuel. Il en va de même pour les Overrides, qui portent une **OverrideVersion** symétrique.

**Les décisions historiques restent liées à l'état normatif de la policy qui les a produites.**

## Approbations et overrides

Quand une règle produit un verdict `approval_required`, une **ApprovalRequest** est créée comme objet gouverné de premier ordre. Elle porte les règles déclenchantes, le demandeur, le décideur et son statut (pending, approved, rejected). Les Overrides sont l'inverse : des autorisations accordées à l'avance par un décideur pour bypasser un ensemble défini de contraintes dans un scope, enregistrées comme objets gouvernés avec leur propre versioning.

Approbations et overrides sont des objets consultables et auditables, pas des branches de workflow cachées.

## Ce qu'une consultation capture

Chaque appel `/resolve` qui produit un verdict écrit une **Consultation**. La record capture les éléments qui rendent la décision reproductible :

| Champ | Ce qu'il capture |
|---|---|
| `cited_rule_version_ids` | Les versions exactes des règles qui ont participé à l'évaluation |
| `dominating_rule_id` | La règle dont le verdict a prévalu sous la précédence applicable |
| `precedence_trace` | L'ordre utilisé pour atteindre la règle dominante |
| `resolved_target_ids` | Les audiences que le resolver a parcourues pour rassembler les règles applicables |
| `scope_used` | Les valeurs du prédicat de scope qui ont matché au moment de l'évaluation |
| `cited_override_version_ids` | Les versions d'overrides qui ont neutralisé ou modelé le résultat |
| `normative_hash` | Une clé snapshot de l'état normatif qui a produit le verdict |

Rejouer une décision historique lit ces champs et reconstruit l'évaluation exacte.

## État normatif de la policy

Le `normative_hash` enregistré sur une consultation est un snapshot des éléments qui changeraient le verdict si l'un d'eux était modifié :

- Les versions des règles qui ont participé à l'évaluation
- Les versions des overrides qui ont neutralisé ou modelé le résultat
- La configuration de précédence en vigueur au moment de l'évaluation
- Les définitions de scope schema contre lesquelles l'évaluation a matché
- Les flags universal-rule en vigueur au moment de l'évaluation

Tout ce qui n'est pas dans cet ensemble (par exemple une règle qui n'était pas applicable au cas, ou un changement de règle postérieur à la consultation) n'affecte pas le verdict enregistré.

## Le governance log de la policy

Chaque agrégat Policy porte un `governance_log` d'actes de gouvernance structurés : adoption, amendement, renouvellement, retrait. Ces entrées sont le record de *pourquoi* une règle existe dans une firme, distinct du comportement runtime de la règle elle-même.

Le moteur ne lit jamais le governance log. La couche de reasoning le fait apparaître comme contexte quand un verdict est rendu en prose (« cette règle a été amendée le <date> suite à <acte> »), mais il ne devient jamais partie du verdict déterministe.

## Qui peut changer quoi

L'autorship de règles et d'overrides est scopé par rôle. Dans un déploiement typique :

- Les policy owners peuvent autorer, versionner et publier des règles dans un domaine de policy qu'ils possèdent
- Les décideurs peuvent accorder des approbations et des overrides dans leur scope d'autorité
- Les consommateurs (applications, workflows, agents) peuvent consulter la couche policy mais ne peuvent pas la modifier

Le modèle de rôles spécifique est configurable par déploiement. Voir [security](/security) pour les contrôles côté déploiement.

## Ce que le replay donne réellement

Étant donné un `consultation_id`, Knowledge peut reconstruire :

- Le contexte qui a été envoyé
- Les règles qui étaient applicables et le verdict qu'elles ont produit
- La précédence et la résolution de target qui ont mené à la règle dominante
- Les overrides et approbations qui ont modelé le résultat
- Les versions exactes de règles et d'overrides en vigueur à ce moment

Tant que la consultation est retenue par le déploiement, la reconstruction lit l'état figé. La policy de rétention est une préoccupation de déploiement, pas une limitation du modèle.

## La suite

| À lire ensuite | Pourquoi |
|---|---|
| [Comment fonctionne Knowledge](/how-it-works) | Le contrat runtime derrière ces mécaniques de gouvernance |
| [Security](/security) | Comment les rôles d'autorship, l'isolation de tenant et l'audit sont appliqués à la couche déploiement |
| [Design partner](/pilot) | Trois places founding, une décision production, pricing founding-customer |
