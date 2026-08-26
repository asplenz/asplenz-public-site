---
title: Auditability
description: Reconstruisez l'état policy exact derrière une décision historique, des années plus tard. Replay déterministe, pas une approximation.
locale: fr
kicker: Produit - Auditability
---

Deux questions qu'un régulateur peut poser sur une décision d'il y a 18 mois auxquelles un rules engine classique ne peut pas répondre proprement :

> *Montrez-moi les règles exactes qui ont produit cette décision, dans la version exacte qu'elles avaient au moment de la décision, avec la précédence et les overrides exacts en vigueur ce jour-là.*

> *Montrez-moi pourquoi cette règle spécifique a fired ici et n'a pas fired sur un cas similaire la semaine dernière.*

La surface d'audit de Knowledge est conçue pour que ces réponses soient à une requête, déterministes, et cryptographiquement vérifiables quand les verdicts signés sont activés.

## Chaque décision écrit une Consultation

Chaque appel `/check` et `/resolve` qui produit un verdict écrit une ligne `Consultation` qui fige :

- **Le contexte envoyé** par le caller (tous les facts, leurs sources, leur statut de vérification)
- **Les versions de rules applicables** à cet instant (`cited_rule_version_ids` - snapshots immuables)
- **La règle dominante** et le trace de précédence qui y a mené
- **Les overrides en vigueur** et comment ils ont neutralisé ou façonné le résultat
- **Le scope schema** en effet pour ce tenant
- **Un normative hash** - SHA-256 agrégat des versions de rules citées + overrides actifs + configuration de précédence + flags universal-rule

Étant donné un `consultation_id`, la décision peut être reconstruite **exactement** - pas par inférence de logs, à partir d'un état gelé.

## Versioning immuable par design

Chaque changement d'un champ verdict-affecting sur une Rule crée un nouveau `RuleVersion`. Les versions antérieures ne sont jamais réécrites. Une Consultation qui a cité une version antérieure continue de pointer vers cette version exacte, pour toujours. Même shape pour `OverrideVersion`.

**Les décisions historiques restent liées à l'état normatif policy qui les a produites.** Une règle éditée aujourd'hui ne change pas silencieusement le verdict d'une décision prise le trimestre dernier.

## Le trace de précédence

Les auditeurs et régulateurs ne veulent pas juste savoir *quelle* règle a fired. Ils veulent savoir *pourquoi cette règle et pas l'autre*. Le trace de précédence enregistre :

- La liste complète des **règles candidates** considérées au pre-filter de scope
- Les **règles neutralisées** et l'override qui a neutralisé chacune
- Les **règles effectives** restantes après neutralisation
- La **winning rule** et le champ de précédence qui a cassé le tie (severity, priority, specificity)
- L' **effect** et le **enforcement mode** de la winning rule

Rendu comme un JSON structuré à côté du verdict. Aussi rendable en prose via `/reason` pour un compliance officer qui veut la narration humaine.

## Governance log par Policy

Chaque Policy porte un `governance_log` : une liste ordonnée d'entrées `GovernanceNote` qui enregistrent les actes d'adoption, amendement, renouvellement ou retraite, chacun avec acteur + date + rationale. Le moteur ne lit jamais ce log ; c'est le contexte humain qui explique *pourquoi* une règle existe. Rendu dans l'UI registry comme un header ambre au-dessus de la liste de rules.

Distinct du trace d'audit technique (Consultation, Event, RuleVersion) que le moteur lit.

## Approbations et overrides comme objets gouvernés first-class

Pas des annotations de workflow, pas des branches cachées. Les deux sont queryables, versionnés, et liés à la Consultation qu'ils ont résolue :

- **Approval** : une ligne par opération, enregistre les rules déclenchantes, le requester, le decider, le résultat, le commentaire de décision. Inclut l'`override_id` optionnel si l'approbation a accordé une exception scope-bounded.
- **Override** : entité first-class avec sa propre chaîne de versions, s'applique dans un scope déclaré pour une fenêtre de temps déclarée, cité par chaque Consultation dont il a façonné le verdict.

## Signature cryptographique (quand signed-verdict est activé)

Quand le déploiement a la signature des verdicts configurée, chaque champ audit-relevant de la décision (action, actor, resource, parameters, outcome, versions de rules citées, normative hash) est inclus dans une enveloppe JWS ES256 signée par la clé privée du tenant. Voir [Enforcement](/product/enforcement).

Cela s'ajoute à l'histoire d'audit :

- **Tamper-evidence** : toute modification des champs enregistrés de décision invalide la signature.
- **Vérifiable externellement** : un auditeur peut vérifier une décision depuis cold storage, des années plus tard, contre le JWKS du tenant, sans aucune dépendance à Knowledge étant en ligne.
- **Non-répudiation** : le tenant ne peut pas plus tard prétendre *"Knowledge n'a pas dit ça"* - la signature prouve la décision exacte produite au moment exact.

## Ce que le replay retourne réellement

Étant donné un `consultation_id`, Knowledge reconstruit :

- Le contexte qui a été envoyé (avec provenance des facts)
- Les rules applicables et le verdict que chacune a produit
- La marche de précédence qui a mené à la règle dominante
- Les overrides et approbations qui ont façonné le résultat
- Les versions exactes de rule et override en vigueur à ce moment
- Le normative hash pour vérification externe
- (Quand signed-verdict activé) l'enveloppe JWS + la clé publique contre laquelle la partie recevant vérifierait

La politique de rétention est un souci de déploiement, pas une limitation du modèle. Tant que la Consultation est retenue, la reconstruction lit l'état gelé.

## Related

| À lire ensuite | Pourquoi |
|---|---|
| [Enforcement](/product/enforcement) | Verdicts signés + la chaîne de confiance à quatre acteurs |
| [Progressive context](/product/progressive-context) | Comment le côté input du trace d'audit est peuplé |
| [Overrides, approbations, pauses](/docs/concepts/overrides-approvals-pauses) | La surface d'authorship + versioning + approbation en profondeur |
