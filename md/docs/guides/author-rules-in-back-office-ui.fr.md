---
title: Authorer des règles dans l'UI back-office
description: Comment les auteurs compliance et SME créent, amendent et testent des règles sans toucher à l'API. Le chemin d'authoring visuel de la policy vide au premier fire.
locale: fr
kicker: Docs / Guides - Stable
---

L'API Knowledge est la source de vérité. L'UI back-office est une surface visuelle par-dessus, conçue pour les compliance officers, subject-matter experts et product owners qui veulent authorer et amender des règles sans écrire de code ou de CSV.

Ce guide parcourt le flow d'authoring. Il suppose que vous avez un accès back-office avec un rôle d'authoring.

## Où l'authoring se passe

L'UI back-office groupe l'authoring autour de deux objets :

- **Policy** : l'aggregate qui tient un set de règles liées. Chaque règle appartient à exactement une policy.
- **Rule** : une directive unique. Son scope, sa condition, sa severity, son rationale et ses dates d'effet vivent tous ici.

La vue registry liste les policies. Ouvrir une policy montre ses règles, son governance log (actes d'adoption, amendement, renouvellement), et son ownership.

## Créer une policy

Depuis la vue registry, choisissez *Nouvelle policy*. Remplissez :

- **Nom** : un identifiant humainement-lisible (ex. *Refund policy*)
- **Owner** : le rôle ou la personne responsable
- **Approver chain** : qui signe off les amendements
- **Rationale** : pourquoi cette policy existe

Sauvegarder enregistre l'acte d'adoption dans le governance log de la policy.

## Ajouter une règle

Depuis une policy ouverte, choisissez *Nouvelle règle*. La vue auteur expose :

| Champ | Ce qu'il fait |
|---|---|
| **Statement** | Déclaration humainement-lisible de ce que la règle dit. Compliance et reviewers lisent ça en premier. |
| **Scope** | Où la règle s'applique : action, rôle actor, juridiction, produit, ou n'importe quelle autre dimension que le scope schema de votre tenant définit. |
| **Condition** | Le gate numérique ou enum. Structuré comme `champ / opérateur / valeur`. Exemple : `amount_eur > 500`. |
| **Severity** | `allow` / `informative` / `require_approval` / `hard_block` / `absolute_ban`. Détermine ce que le moteur fait quand la règle fire. |
| **Dates d'effet** | Optionnels `not_before` et `not_after`. Gouverne quand la règle est en vigueur. |
| **Rationale** | Explication texte-libre de *pourquoi* la règle existe (driver réglementaire, décision interne, incident antérieur). Rendu au-dessus de la règle pour quiconque la lit plus tard. |
| **Approvers** | Qui doit signer off avant que la règle ne devienne active. |

Sauvegarder écrit une première `RuleVersion`. La règle est maintenant authorée mais pas encore active si une approbation est requise.

## Preview contre un sample case

Avant de publier, utilisez le panneau *Preview* :

- Entrez un contexte sample (quelques champs, correspondant à ce que vos callers envoient réellement)
- L'UI montre quel verdict la règle retournerait, et quelles autres règles dans la même policy fireraient à côté
- La trace de précédence est affichée : quelle règle gagnerait, et pourquoi

Le preview n'écrit pas de Consultation. C'est authoring-time seulement.

## Publier via le workflow d'approbation

Si la policy exige une approbation, la règle entre en état *pending*. Les approvers nommés la voient dans leur queue. Ils peuvent :

- **Approve** : la règle s'active. Une nouvelle `RuleVersion` immuable est enregistrée. Les consultations existantes pointent toujours sur les versions précédentes.
- **Request changes** : la règle retourne en draft avec le commentaire du reviewer.
- **Reject** : la règle est écartée ; le governance log enregistre le rejet.

Chaque transition d'état est loggée avec actor, timestamp et commentaire.

## Amender une règle existante

Ouvrir une règle live et cliquer *Amend* crée un nouveau draft basé sur la version courante. Changez le threshold, resserrez le scope, mettez à jour le rationale. Sauvegardez et routez vers approbation comme avant.

Quand l'amendement est approuvé, une nouvelle `RuleVersion` est écrite. Toutes les consultations futures pinnent la nouvelle version. Les consultations passées continuent de pointer sur la version qui s'appliquait à leur moment.

## Regarder la règle fire

Après que la règle est live, ouvrez la vue *Coverage*. Pour n'importe quelle fenêtre de temps :

- Combien de fois la règle a-t-elle été évaluée ?
- Combien de fois a-t-elle fired ?
- Sur quels cas a-t-elle été dominante ?
- Quels cas ont été blocked, allowed, approval-required ?

La vue Coverage aide à identifier les règles qui ne gagnent plus leur place (jamais firent), les règles qui fire bien plus que prévu (trop larges), et les règles qui conflict régulièrement avec des overrides (candidate à l'amendement).

## Retirer une règle

Quand une règle ne devrait plus s'appliquer à l'avenir, choisissez *Retirer*. La règle est marquée inactive : les nouvelles consultations ne la considèrent pas. La règle et toutes ses versions passées restent dans le record, pour que les consultations historiques résolvent toujours à l'état qu'elles ont vu. Le governance log capture l'acte de retrait.

## Ce que l'API voit, ce que l'UI voit

Tout ce que vous faites dans l'UI est un appel à l'API Knowledge. Une règle authorée visuellement ressemble exactement à une règle importée depuis un CSV. Les deux chemins peuvent coexister : une policy peut être seedée depuis un CSV puis amendée dans l'UI, ou authorée dans l'UI puis exportée plus tard.

Certaines équipes utilisent l'UI pour les règles owned par compliance et l'import CSV pour les règles high-volume qui vivent dans un policy repository externe. Les deux sont supportés.

## Related

| À lire ensuite | Pourquoi |
|---|---|
| [Quickstart : créer votre première policy](/docs/quickstart-first-policy) | L'équivalent côté API du flow ci-dessus |
| [Policies, rules et targets](/docs/concepts/policies-rules-targets) | Le modèle conceptuel derrière les champs auteur |
| [Overrides, approbations, pauses](/docs/concepts/overrides-approvals-pauses) | Les mécanismes de gouvernance qui vivent à côté de l'authoring de règles |
| [Valider avant d'enforce](/docs/guides/validate-before-you-enforce) | Comment tester des règles contre de vrais cas en shadow mode |
