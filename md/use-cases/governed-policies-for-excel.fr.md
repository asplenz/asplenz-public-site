---
title: Gardez Excel. Sortez les politiques critiques de la feuille de calcul.
description: Les policies gouvernées pour Excel apportent des décisions de politique dans les classeurs que vos équipes utilisent déjà, et les tiennent alignées quand la politique, le cas ou les données de référence évoluent.
locale: fr
kicker: Policies gouvernées pour Excel
ctaLabel: Discuter votre cas d'usage
ctaHref: /contact
---

Vos équipes gardent Excel : la disposition, les lignes, les formules, les classeurs partagés. Ce qui change : la règle qui décide si une opération est conforme ne vit plus dans le classeur. Elle vit dans Knowledge, versionnée et à jour, et Excel la consulte quand la décision gouvernée doit être évaluée. Excel reste là où sont les données du cas. Knowledge détient la politique. Les deux se rencontrent dans la cellule qui rend le verdict.

![Vue principale de Knowledge for Excel montrant quatre lignes avec des verdicts distincts](/images/knowledge-for-excel/01-hero.png)

*Données illustratives. Les noms d'entreprises, produits et montants sont fictifs et utilisés uniquement à des fins de démonstration.*

## Deux problèmes, une solution

**Duplication de politique.** Les règles critiques sont recopiées dans des formules, du VBA et des scripts locaux. Quand la politique change, chaque implémentation doit suivre. Certaines ne le font pas. Les constats d'audit suivent.

**Les décisions deviennent obsolètes.** Même quand la politique n'a pas changé, les faits auxquels elle s'applique peuvent évoluer. Une notation client change. Un émetteur entre sur une liste restreinte. Une transaction change de statut. Un classeur peut continuer à afficher la réponse d'hier si la décision n'est pas ré-évaluée.

Les policies gouvernées pour Excel adressent les deux. La formule demande à Knowledge ce que la politique applicable détermine étant donné les faits actuels. Quand les entrées pertinentes changent, la décision peut être ré-évaluée.

## Comment ça fonctionne pour l'utilisateur

Dans le classeur qu'il utilise déjà, l'utilisateur ajoute une formule :

```
=KNOWLEDGE.RESOLVE("order.book_structured_product", A1:H2)
```

où `A1:H2` contient les données du cas (segment client, complexité produit, montant, etc.). La cellule affiche un verdict accompagné d'une raison métier courte issue de la règle gagnante :

| Icône | Texte de la cellule | Signification |
|---|---|---|
| coche verte | **ALLOWED** | La politique applicable autorise l'opération. |
| triangle orange | **APPROVAL_REQUIRED - Complex on accredited** | La politique applicable exige une approbation avant l'opération. |
| horloge orange | **APPROVAL_PENDING - Complex on accredited** | Un collègue du même périmètre a déjà soumis une demande d'approbation pour le même contexte. |
| croix rouge | **BLOCKED - Restricted issuer** | La politique applicable interdit l'opération. |

Un clic sur la cellule ouvre une carte native Excel avec l'énoncé complet de la règle, sa version au moment de la décision, l'identifiant de consultation et l'empreinte cryptographique signée de la décision.

## Quand les choses changent, la décision suit

Une décision Knowledge dépend de trois entrées indépendantes. Toute l'une d'elles peut changer ; la décision suit au prochain calcul du classeur.

**Politique.** Compliance édite et approuve une nouvelle version de règle dans Knowledge. Les cas précédemment autorisés deviennent en attente d'approbation ou bloqués sous la nouvelle politique, sans modifier une seule formule dans aucun classeur. Les motivations pour publier une nouvelle version incluent le durcissement d'une politique interne, un lancement de produit, ou un changement réglementaire interprété par Compliance / Legal en politique interne approuvée.

**Données du cas.** Une cellule de la ligne change. Le RM porte le nominal de 450k à 550k. La ligne passe de ALLOWED à APPROVAL_REQUIRED sans changement de politique ni de données de référence.

**Données de référence.** Un fait externe que la ligne consulte change. Compliance ajoute un émetteur à la liste restreinte. La notation de risque client passe de moyenne à élevée. Un statut de sanctions change. Le classeur récupère le nouveau fait auprès de la source qui le détient, et la ligne se ré-évalue.

![Même ligne, avant et après qu'un émetteur entre sur la liste restreinte. ALLOWED à 14:31, BLOCKED - Restricted issuer à 14:32.](/images/knowledge-for-excel/02-before-after-restricted.png)

Même ligne, même politique, même formule. Entre 14:31 et 14:32 la liste restreinte détenue par Compliance a changé. La mise à jour des données de référence a déclenché une nouvelle évaluation. Aucune logique de politique n'a dû être modifiée dans le classeur.

## La réglementation change. Votre politique suit.

Quand un changement réglementaire requiert que Compliance ou Legal mette à jour une politique interne, la nouvelle règle est revue, approuvée et dotée d'une date d'effet dans Knowledge. Les classeurs qui consultent cette politique utilisent la nouvelle version sans qu'aucun d'eux n'embarque une nouvelle copie de la règle.

Knowledge n'interprète pas automatiquement les textes réglementaires. L'autorité à l'intérieur de Knowledge reste toujours la politique que votre organisation a approuvée. Compliance / Legal traduisent l'exigence externe en une version de politique interne. Knowledge détient et exécute cette version. C'est ce qui rend la piste d'audit défendable.

**Changez la politique une fois. Pas chaque tableur.**

## De la décision à l'approbation, sans quitter Excel

Quand Knowledge retourne `APPROVAL_REQUIRED`, le RM ouvre le panneau Knowledge dans Excel. Le contexte du cas est pré-rempli depuis la cellule. La zone de justification est éditable. Un clic soumet la demande. La cellule passe immédiatement à `APPROVAL_PENDING`, si bien qu'un autre utilisateur résolvant le même cas gouverné peut voir qu'une approbation est déjà en cours. Le compliance officer décide dans le back-office. Si approuvé, la cellule passe à `ALLOWED` au prochain rafraîchissement, avec l'Override résultant enregistré et daté.

![Panneau de soumission d'approbation avec contexte et justification pré-remplis](/images/knowledge-for-excel/03-approval-panel.png)

Chaque consultation et chaque approbation soumise via Knowledge devient une ligne d'audit reliée au contexte du cas, à l'utilisateur, à la règle qui a déclenché la demande et à sa version au moment de la décision.

## Reconstruire n'importe quelle décision précisément

Chaque décision est reliée au contexte, à la version de la politique et à la règle qui s'appliquaient à ce moment. Vous pouvez expliquer pourquoi le même cas était autorisé hier et bloqué aujourd'hui.

![Page de détail de consultation dans le back-office Knowledge](/images/knowledge-for-excel/04-consultation-detail.png)

Horodatage précis à la seconde. Règle citée avec sa version. Contexte complet envoyé. Signature cryptographique. Vous pouvez reconstruire les deux décisions à partir du contexte et de l'état de la politique enregistrés à ce moment.

## Quelles règles ont leur place dans Knowledge ?

Toute formule ou règle métier d'un tableur n'a pas vocation à basculer dans Knowledge. Un test utile :

> **Cette règle existerait-elle encore si ce tableur n'existait pas ?**

| Logique | Candidat pour Knowledge ? |
|---|---|
| Calculer une duration à partir de cash flows | Non — calcul de tableur |
| Mettre en évidence une cellule incomplète | Non — comportement du classeur |
| Les transactions retail de produits structurés au-dessus de 500k EUR requièrent revue compliance | Oui — politique organisationnelle |

Le test identifie un candidat, pas un déplacement obligatoire. Knowledge est le plus pertinent quand une règle représente une politique organisationnelle et nécessite son propre approval, versioning, dates d'effet ou piste d'audit historique. Le reste peut rester où il est.

## Où les équipes peuvent l'utiliser

Ce sont des exemples. Knowledge évalue les politiques de votre organisation ; il ne fournit pas la politique KYC, de suitability ou de risque sous-jacente.

| Équipe | Où ça s'insère | Exemple de décision |
|---|---|---|
| **Front office** | Booking de produits structurés, saisie d'ordres | Suitability selon segment client, complexité produit et nominal. |
| **Compliance** | Revue périodique client, revue d'exceptions | Escalade quand le risque client ou les conditions de revue l'exigent. |
| **Operations** | Monitoring des exceptions à releaser, breaks post-trade | Raisons benign (erreur système, fermeture custodian) versus sensibles (facilité VIP, large notional) suivent des chemins différents. |

## Sous le capot

**Fonction personnalisée.** `KNOWLEDGE.RESOLVE(action_type, context_range)` retourne le verdict comme une Entity Value native Excel. Des variantes existent pour l'évaluation en batch et streaming. Les cellules se ré-évaluent quand leurs entrées changent, donc un classeur qui reçoit des données de cas ou de référence mises à jour depuis une source externe récupère la nouvelle décision au prochain calcul.

**Déployé de manière centralisée via Microsoft 365. Aucune installation par utilisateur requise.** L'add-in est installé une fois par votre admin de tenant ; les utilisateurs finaux le voient apparaître automatiquement dans Excel. Disponible pour Excel sur le web et Excel Desktop pour Windows. Les utilisateurs s'authentifient avec leur compte Microsoft 365 existant via Entra ID.

## Périmètre actuel

**Disponible aujourd'hui**

- Les fonctions personnalisées ci-dessus.
- La carte Entity native Excel avec règle, version, id de consultation et signature.
- Le panneau latéral avec soumission d'approbation et liste des approbations en attente.
- La déduplication des approbations entre utilisateurs du même périmètre.
- Le SSO via Entra ID.
- L'installation centralisée par l'admin du tenant Microsoft 365.

**Limites actuelles**

- Un classeur fermé au moment où une politique ou une donnée de référence change ne se ré-évalue pas de lui-même ; la ré-évaluation a lieu à la prochaine ouverture.
- Knowledge ne pousse pas de notifications proactives à chaque système consommateur ; chaque consommateur demande à Knowledge à son propre rythme.
- Knowledge n'identifie pas automatiquement l'ensemble des cas ouverts à travers l'organisation qu'une nouvelle version de politique affecte.
- Les actions effectuées en dehors de Knowledge ne sont pas capturées par Knowledge.

## Discutons de votre classeur

Si vous avez un tableur dont la politique mériterait d'être gouvernée ainsi, ou un changement réglementaire à venir qui va nécessiter la mise à jour de règles à plusieurs endroits, nous préférerions le voir plutôt que d'en discuter dans l'abstrait.

[[cta]Discuter votre cas d'usage](/contact)
