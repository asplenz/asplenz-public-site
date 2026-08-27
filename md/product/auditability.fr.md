---
title: Expliquer une décision en utilisant la policy qui existait au moment où elle a été prise
description: Les règles changent. Les exceptions expirent. La précédence évolue. Knowledge préserve l'état normatif derrière chaque décision pour que les équipes compliance et audit puissent reconstruire exactement ce qui s'appliquait, ce qui a gagné, et pourquoi.
locale: fr
kicker: Produit - Auditability
---

## Quand compliance pose une question sur une décision d'il y a 18 mois

Un client a été rejeté il y a 18 mois. Compliance, l'audit interne ou un régulateur pose la question que chaque organisation finit par affronter :

> *Pourquoi ce client a-t-il été rejeté ?*

Le decision log répond avec ce qui s'est passé à la couche opérationnelle :

```
decision   = REJECTED
rule       = R-182
timestamp  = 2025-02-14T09:12:00Z
```

L'étape naturelle suivante est de regarder la règle R-182. Mais la R-182 actuelle n'est pas celle qui a fired ce jour-là. Depuis :

```
R-182 v1
    ↓
amendée  (seuil relevé)
    ↓
R-182 v2
    ↓
exception ajoutée  (clients institutionnels exemptés)
    ↓
R-182 v3
```

Et R-182 n'était peut-être même pas la règle gagnante. Plusieurs règles s'appliquaient probablement simultanément :

```
R-182  →  ALLOW
R-431  →  REVIEW
R-817  →  BLOCK

règle de précédence  →  R-817 gagne
```

La vraie question n'est pas *que dit R-182 aujourd'hui ?* C'est :

> **Pouvez-vous reconstruire la décision policy telle qu'elle a réellement été prise, pas l'expliquer en utilisant la policy d'aujourd'hui ?**

## Le problème de reconstruction

Dans beaucoup d'architectures, reconstruire une décision historique exige de recoller plusieurs sources :

```
decision logs           ce qui a été écrit dans le storage
+
versions de règles      quelles règles existaient à cet instant
+
overrides               quelles exceptions étaient actives
+
contexte                quels faits étaient disponibles
+
approbations            quelles décisions humaines avaient été enregistrées
+
config de précédence    comment les ties étaient cassés
=
décision telle qu'elle s'est produite
```

Chacune de ces sources vit dans un système différent, souvent avec sa propre policy de rétention. La reconstruction est faisable, mais coûteuse et fragile.

Knowledge traite la reconstruction comme une propriété native de chaque décision, pas comme un effort d'engineering downstream.

## Ce que Knowledge préserve pour chaque décision

Chaque appel `/check` et `/resolve` qui produit un verdict écrit une ligne `Consultation` qui fige :

- **Le contexte envoyé** par le caller - tous les faits, leurs sources, leur verification status
- **Les versions de règles applicables** à cet instant (snapshots immuables)
- **La règle dominante** et le trace de précédence qui y a mené
- **Les overrides en vigueur** et comment ils ont neutralisé ou shapé le résultat
- **Le scope schema** en effet pour ce tenant
- **Un normative hash** - agrégat SHA-256 des versions de règles citées + overrides actifs + configuration de précédence + flags universal-rule

Étant donné un `consultation_id`, la décision peut être reconstruite **exactement**. Pas par inférence de logs. À partir d'un état gelé.

## Replay d'une décision

Étant donné un ID de consultation, Knowledge retourne la décision telle qu'elle s'est produite :

```
Decision                 :  BLOCKED
Consultation             :  cns-9a8b7c
Decided at               :  2025-02-14T09:12:00Z

Applicable rule versions :
  R-182 v4  (severity: informative)
  R-291 v7  (severity: hard_block)
  R-817 v2  (severity: absolute_ban)

Overrides in force       :
  aucun

Dominating rule          :  R-817 v2
Precedence tie-broken by :  severity (absolute_ban > hard_block > informative)

Context at decision      :
  jurisdiction    = FR
  client_type     = individual
  pep_match       = true                        (source: screening_vendor)
  risk_score      = 0.83                        (source: risk_engine)

Approval trail           :  aucun requis
Normative hash           :  sha256:9f2a...
```

Tout ce dont la reconstruction a besoin est dans une seule requête, peuplé depuis un état qui a été gelé au moment de décision. La règle R-817 est maintenant en v4 en production ; la Consultation retourne toujours v2 parce que c'est ce qui s'appliquait.

## Expliquer et la policy et la décision

Deux questions différentes portent des réponses très différentes. Knowledge les sépare pour que chacune ait une surface first-class.

| Question | Où ça vit | Ce que ça explique |
|---|---|---|
| **Pourquoi l'organisation a-t-elle adopté cette policy ?** | Le `governance_log` de la Policy - une liste ordonnée d'actes d'adoption, amendement, renouvellement et retrait, chacun avec actor, date et rationale. | L'histoire propre de la policy : qui l'a changée, quand, pourquoi. Driver réglementaire, décision interne, process d'exception. Jamais lu par le moteur. Rendu dans l'UI registry comme un header ambre au-dessus de la liste de règles. |
| **Pourquoi ce cas spécifique a-t-il eu ce résultat ?** | La Consultation - versions de règles citées, trace de précédence, overrides, contexte, approbations. Lu par le moteur au moment de replay. | L'histoire technique de la décision : quelles règles s'appliquaient, ce qui a gagné, pourquoi, sur quel contexte. |

Le governance log répond à *« pourquoi cette règle existe ? »* La Consultation répond à *« pourquoi cette règle a-t-elle fired sur ce cas ? »* Les équipes compliance ont besoin des deux, depuis la même surface d'audit.

## Comment le replay reste déterministe à travers les années

Les propriétés qui rendent le replay déterministe :

- **Versioning immuable par design.** Chaque changement à un champ affectant le verdict d'une Rule crée une nouvelle `RuleVersion`. Les versions précédentes ne sont jamais réécrites. Une Consultation qui a cité une version antérieure continue de pointer sur cette version exacte, pour toujours. Même forme pour `OverrideVersion`.
- **Trace de précédence comme data, pas comme dérivation.** Le trace enregistre la liste candidate complète, quelles règles ont été neutralisées, quel override a neutralisé chacune, le set effectif qui reste, la règle gagnante, et le champ de précédence qui a cassé le tie. Rendu comme JSON structuré à côté du verdict, ou comme prose via `/reason` pour une narration humaine.
- **Approbations et overrides comme objets gouvernés first-class.** Pas des annotations de workflow, pas des branches cachées. Les deux sont queryables, versionnées, et liées à la Consultation qu'elles ont résolue. Une ligne `Approval` enregistre les règles déclenchantes, le requester, le decider, le résultat, le commentaire de décision, et l'`override_id` optionnel si l'approbation a accordé une exception scope-bounded. Un `Override` est une entité first-class avec sa propre chaîne de versions, s'applique dans un scope déclaré pour une fenêtre de temps déclarée.
- **La rétention est un choix de déploiement.** Consultations, versions de règles et events sont retenus selon la policy configurée du tenant. Tant que la Consultation est retenue, la reconstruction lit l'état gelé.

## Vérification cryptographique (quand signed-verdict est activé)

Quand le déploiement a le verdict signing configuré, chaque champ audit-relevant de la décision (action, actor, resource, parameters, outcome, versions de règles citées, normative hash) est inclus dans une enveloppe JWS ES256 signée par la clé privée du tenant. Voir [Enforcement](/product/enforcement).

Ça ajoute à l'histoire d'audit :

- **Tamper-evident.** Toute modification des champs de décision enregistrés invalide la signature.
- **Vérifiable indépendamment.** Un auditeur peut vérifier une décision depuis cold storage, des années plus tard, contre le JWKS du tenant, sans aucune dépendance à ce que Knowledge soit en ligne.

## Related

| À lire ensuite | Pourquoi |
|---|---|
| [Enforcement](/product/enforcement) | Verdicts signés et la chaîne de confiance à quatre acteurs |
| [Progressive context](/product/progressive-context) | Comment le côté contexte de l'audit trail est peuplé |
| [Overrides, approbations, pauses](/docs/concepts/overrides-approvals-pauses) | La surface d'authorship, versioning et approbation en profondeur |
| [Product](/product) | La boucle de décision pour agents IA rule-governed |
