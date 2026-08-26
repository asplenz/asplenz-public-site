---
title: Policies, Rules et Targets
description: Les trois aggregates de base que Knowledge utilise pour modéliser une couche de décision gouvernée.
locale: fr
kicker: Docs / Concepts - Stable
---

Knowledge organise la couche de décision gouvernée autour de trois aggregates : **Policy**, **Rule**, et **Target**. Comprendre comment ils se composent est le chemin le plus court pour lire n'importe quelle sortie de consultation.

## Policy (`pol-`)

Une Policy est l'aggregate qui groupe des Rules liées et porte leur historique de gouvernance. Chaque Policy a :

- **Owner** et **approver chain** (qui peut l'amender, qui signe les amendements).
- **Governance log** - une liste ordonnée d'entrées GovernanceNote (actes d'adoption, amendement, renouvellement, retrait) qui surface comme un header ambre au-dessus de la liste de rules dans l'UI registry.
- **Zéro ou plusieurs Rules**.

Le moteur ne lit jamais le governance log. C'est du contexte humain qui permet à la prose de verdict LLM de référencer *pourquoi* une règle fire.

Policies typiques dans un vertical wealth : `Product eligibility`, `Client suitability`, `Cross-border distribution`, `Portfolio concentration`.

## Rule (`rul-`)

Une Rule est une directive active. Chaque Rule a :

- **Statement** - la déclaration humainement-lisible.
- **Severity** - une de `absolute_ban` > `hard_block` > `require_approval` > `informative` > `allow`.
- **Effect** - l'action moteur, dérivée de la severity.
- **Rows** - une liste de paires `{scope, condition}` (modèle V5). Chaque row est une combinaison applicable.
- **Universal flag** - si true, la règle fire pour chaque principal (pas besoin d'appartenance à un Target).
- **fires_when_any** - sémantique OR multi-conditions (V5).
- **derogation_allowed** - cette règle peut-elle être neutralisée par un Override ?

Le `scope` de chaque row est validé contre le `scope_schema` du tenant (une déclaration JSON-Schema-like de quelles dimensions existent et leurs valeurs autorisées).

**Immuabilité : RuleVersion.** Chaque fois que les champs affectant le verdict d'une rule changent, une nouvelle `RuleVersion` (`rv-`) est écrite. Les Consultations pinne les IDs RuleVersion exacts qu'elles ont cités. Un régulateur demandant « montrez-moi le texte de règle qui s'appliquait il y a 18 mois » obtient la RuleVersion exacte de ce jour, pas la courante.

## Target (`tgt-`)

Un Target est une audience nommée recevant des Rules. Deux write paths :

- **Bulk-attach from Policy** - toutes les rules d'une policy s'attachent à un target en une opération.
- **Cherry-pick** - une rule s'attache à un ou plusieurs targets.

Un `TargetMember` (`tgm-`) lie un principal à un target. Un `TargetRuleAttachment` (`atr-`) lie une rule à un target.

**Universal rules** bypassent le mécanisme de Target entièrement : `Rule.universal = true` signifie que la règle fire pour chaque principal, rendue comme un bucket virtuel « Everyone » dans l'UI (aucune ligne Target réelle n'existe).

## Exemple de composition

Une Policy `Product eligibility` dans un tenant wealth :

- Owner : Head of Wealth Compliance.
- Governance log : « Adopté 2024-11-12 », « Amendé 2025-06-04 : ajout de bande de complexité structured-note », « Renouvelé 2026-01-15 ».
- Rules :
  - `rul-elig-highly-complex-retail` : severity `hard_block`, rows `[{scope: {product_complexity: highly_complex, client_classification: retail}, condition: {notional_eur: gt, 0}}]`.
  - `rul-elig-large-notional-retail` : severity `require_approval`, rows `[{scope: {client_classification: retail}, condition: {notional_eur: gt, 50000}}]`.

Targets dans le même tenant :
- `tgt-uk-rms` - RMs licenciés au UK (34 membres). Les deux rules ci-dessus attachées via bulk-attach.
- `tgt-hnw-relationship-managers` - cohorte RM spécialisée (12 membres). Seule `rul-elig-large-notional-retail` cherry-pickée (ils ont un threshold notional différent via override).

Quand la RM alice@bank (membre de `tgt-uk-rms`) déclenche `/check`, le moteur :
1. Résout les targets d'alice.
2. Pull toutes les rules attachées à ces targets, plus les universal rules.
3. Filtre par le scope du cas contre le scope de chaque row.
4. Évalue les conditions ; la rule dominante gagne par severity.

## Related

- [Verdicts et decisions](/docs/concepts/verdicts-and-decisions) - comment les rules se composent en un verdict.
- [Overrides, approbations, pauses](/docs/concepts/overrides-approvals-pauses) - comment les rules sont neutralisées ou suspendues.
- [Progressive context](/docs/concepts/progressive-context-resolution) - comment `/resolve` dérive ce qui manque encore.
