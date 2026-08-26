---
title: Pour compliance officers
description: Ownez les rules, éditez-les directement, voyez-les fire sur des cas réels, et reconstituez n'importe quelle décision des années plus tard. Pas de sprint de coordination avec engineering pour changer un threshold.
locale: fr
kicker: Solutions - Pour compliance officers
---

Deux frustrations qui surfacent dans chaque équipe compliance utilisant un rules engine à l'échelle :

> *"On a demandé à engineering de changer la limite de concentration de 15% à 12% il y a trois mois. C'est dans le sprint d'après le prochain. Pendant ce temps nos RM utilisent toujours l'ancien threshold dans leur diligence."*

> *"Un régulateur nous a demandé la règle exacte qui a produit une décision d'il y a 18 mois. On peut reproduire la décision, mais on ne peut pas reproduire le texte de règle de cette période - il a été mis à jour deux fois depuis."*

Knowledge est construit pour que les deux frustrations disparaissent.

## Vous éditez les rules directement. Engineering ne vous gate pas.

Les rules vivent dans l'UI back-office Knowledge comme des objets structurés avec :

- **Statement** - déclaration humainement-lisible de ce que la règle dit
- **Scope** - à quels cas elle s'applique, exprimé comme des champs `{jurisdiction: SG, asset_class: equity}` contre le `scope_schema` de votre tenant
- **Condition** - le gate numérique ou enum, comme des triples `{field, op, threshold}` (ex : `{post_trade_single_name_pct, gt, 15}`)
- **Severity** - `absolute_ban`, `hard_block`, `require_approval`, `informative`, `allow`
- **Effect** - l'action moteur dérivée de la sévérité
- **Rationale + governance log** - explication en texte libre du *pourquoi* la règle existe

Changez le threshold dans l'UI. Save. Le prochain appel `/check` utilise la nouvelle valeur. Pas de cycle de release. L'ancienne valeur est préservée dans `RuleVersion` pour que toute consultation d'avant le changement pointe toujours sur le texte de règle exact de ce jour.

## Chaque changement écrit un acte de gouvernance

Le `governance_log` sur chaque Policy enregistre les actes d'adoption, amendement, renouvellement, retraite. Chaque entrée porte acteur + date + rationale. Les auditeurs voient qui a changé quoi et pourquoi, sans vous demander de reconstituer l'historique git.

Le moteur ne lit jamais le log ; c'est le contexte humain. Rendu dans l'UI registry comme un header ambre au-dessus de la liste de rules pour que quiconque ouvre la Policy voit l'histoire.

## Les questions de régulateur sont à une requête

*"Montrez-moi la décision sur le cas ID X"* :

```
GET /knowledge/v1/consultations/cns-abc123
```

Retourne l'état gelé complet au moment de décision - le contexte envoyé, les versions de rules citées, la règle dominante, le trace de précédence, les overrides en vigueur, le normative hash. Pas une approximation.

*"Montrez-moi le texte de la règle qui s'appliquait ici"* : chaque `cited_rule_version_id` dans la réponse pointe sur une `RuleVersion` immuable. Fetch-la, voyez le statement et la condition exacts de ce jour.

*"Montrez-moi pourquoi cette règle a fired ici et pas sur cet autre cas similaire"* : le `precedence_trace` enregistre la liste complète des candidates, quelles rules ont été neutralisées par des overrides, et quel champ de précédence a cassé le tie.

## Les coherence checks attrapent la dérive à l'écriture

Chaque create ou update de rule déclenche un coherence check automatique :

- **Exact-duplicate** : une règle sémantiquement identique existe déjà (similarité d'embedding)
- **Tension** : la nouvelle règle interagit de façon non-évidente avec une existante
- **Contradiction** : la nouvelle règle produirait des verdicts opposés à une existante sur le même cas (check LLM)

Les warnings surface dans l'UI avant que vous sauvegardiez. Pas un blocker ; un nudge.

## Coverage : qui fire, qui ne fire pas

Chaque fire de chaque règle est enregistré sur une `Consultation`. Query :

- Quelles rules ont fired le plus au dernier trimestre ?
- Quelles rules n'ont pas fired en 6 mois (candidate à la retraite) ?
- Quels cas ont bloqué, quels ont allowed, quels ont require_approval ?

La data est dans la table Consultation aujourd'hui. Une UI de coverage dédiée est sur la roadmap ; pour l'instant, le SQL est direct.

## Approbations comme objets gouvernés first-class

`approval_required` est un verdict, pas une annotation de workflow. Quand une règle le retourne, une entité `Approval` est créée avec :

- Les rules déclenchantes (comme `triggers[]`)
- Le requester + l'intention demandée
- L'approver (ou role d'approver)
- La décision + commentaire
- Optionnellement, l'`Override` que l'approbation a accordé (Type 3, exception scope-bounded)

Décidez via l'UI back-office, un modal Slack, ou un callback webhook. Chaque décision écrit dans le trace d'audit à côté de la Consultation originale.

## Ce que vous ne pouvez pas faire (honnêtement)

- **Garantir que vos rules sont enforcées partout dans votre firme.** Knowledge gouverne les décisions qui consomment son API. Un workflow qui hardcode sa propre logique est invisible à Knowledge. Découverte + adoption est un problème de change management, pas technique.
- **Éliminer le besoin de jugement.** Les verdicts `approval_required` ont toujours besoin d'un decider humain. Knowledge route efficacement ; il ne retire pas la responsabilité.
- **Prouver que le modèle interprétant un statement de règle est correct.** Knowledge produit le verdict de façon déterministe depuis le `{scope, condition, severity}` structuré - le statement en texte libre est informatif, pas autoritaire. Si vos rules n'existent que comme texte libre dans un document, vous devez toujours les traduire dans la forme structurée.

## Commencer

1. Lisez [Auditability](/product/auditability) pour l'histoire d'audit complète.
2. Lisez le primer [what-is-knowledge](/docs/what-is-knowledge) pour le vocabulaire.
3. [Parlez-nous](/contact) d'un engagement design-partner dans votre vertical.

## Related

| À lire ensuite | Pourquoi |
|---|---|
| [Auditability](/product/auditability) | Consultation, RuleVersion, precedence trace en profondeur |
| [Progressive context](/product/progressive-context) | Comment les rules requérant de nouveaux champs se propagent sans casser les consumers |
| [Enforcement](/product/enforcement) | L'histoire enveloppe signée - l'angle CISO sur le même produit |
