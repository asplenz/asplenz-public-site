---
title: Apporter la gouvernance des décisions aux opérations santé pilotées par IA
description: Les assureurs santé et organismes gestionnaires s'appuient encore sur des équipes opérationnelles pour traiter des dossiers dont la décision dépend de règles, d'informations provenant de plusieurs systèmes, de documents et de procédures. L'IA peut de plus en plus rassembler et interpréter ce contexte, mais les décisions de couverture, de remboursement et d'autorisation qui en résultent doivent toujours suivre la politique organisationnelle explicite. Knowledge garde ces règles hors du modèle et les évalue de manière déterministe, pendant que les plateformes existantes continuent à gérer le workflow et l'exécution.
locale: fr
kicker: Knowledge pour la santé
ctaLabel: Explorer un design partnership
ctaHref: /pilot
---

Une brique IA peut désormais investiguer un dossier avec une sophistication croissante. Elle lit les notes cliniques et les pièces justificatives, interroge les systèmes de gestion, d'éligibilité et d'annuaires, extrait les faits qui comptent. Cette flexibilité est puissante. Elle soulève aussi une question de gouvernance :

> **La brique IA peut assembler le dossier. Qui décide si le dossier peut être traité, et comment ?**

Knowledge garde les règles hors du modèle. Les plateformes existantes continuent à gérer le workflow et l'exécution. La brique IA détermine *comment* rassembler ce dont un dossier a besoin ; Knowledge détermine *ce que* la politique dit une fois le contexte assemblé.

## Comment le pipeline opérationnel change

```lifecycle
step: Plateforme de gestion des dossiers ou application opérationnelle
step: La brique IA rassemble le contexte du dossier depuis les systèmes, documents, annuaires
step: Knowledge applique la politique encodée
branch-left-label: Traitement automatisé
branch-left-1: Verdict déterministe (accord, refus, ou détermination de prestation)
branch-left-2: Autorisation signée vers l'API de gestion ou d'autorisation préalable
branch-right-label: Revue humaine
branch-right-1: approval_required, avec le contexte pertinent déjà assemblé
branch-right-2: Dossier routé vers le reviewer approprié
end: La décision s'exécute
```

Knowledge se pose entre la brique IA qui assemble le dossier et le chemin opérationnel qui suit de la décision. La plateforme de gestion des dossiers, le workflow d'autorisation préalable, les systèmes cliniques et les reviewers humains restent en place.

## Ce que Knowledge peut être dans votre architecture santé

Deux formes couvrent la plupart des déploiements chez les assureurs et gestionnaires.

| Forme | Comment ça marche |
|---|---|
| **Knowledge comme autorité de décision** | Pour un type de dossier donné, Knowledge détermine le résultat (accord, refus, détermination spécifique à une prestation, revue humaine requise) à partir du contexte assemblé et des politiques encodées. La plateforme de gestion ou le workflow agit sur le résultat. |
| **Knowledge comme complément à ce que vous faites déjà tourner** | Pour les décisions que la plateforme existante produit déjà, Knowledge peut ajouter une couche gouvernée pour des cas spécifiques : une règle d'exception propre à l'organisation, un overlay lié à un contrat ou une région, un workflow d'approbation, une surface d'audit. |

Les engagements santé combinent souvent les deux formes.

## Trois résultats que Knowledge produit

Toutes les décisions santé ne devraient pas être automatisées. Knowledge distingue les dossiers qui peuvent être résolus par une politique explicite de ceux qui exigent réellement un jugement humain.

| Résultat | Ce qui se passe ensuite |
|---|---|
| **incomplete + required_context** | Les règles applicables ont encore besoin d'informations spécifiques. Le système existant (ou la brique IA derrière) les obtient et re-consulte Knowledge. |
| **complete + verdict déterministe** | Les règles encodées résolvent le dossier sans revue humaine. Le workflow existant agit sur le verdict ; l'enveloppe signée autorise l'appel opérationnel aval. |
| **complete + approval_required** | Les règles encodées routent explicitement le dossier vers une revue humaine. Le workflow escalade avec le contexte pertinent déjà assemblé. |

Pour un organisme gestionnaire qui opère plusieurs contrats ou plusieurs porteurs de risque, le même modèle garde des ensembles de règles gouvernés séparément tout en exposant une interface de décision cohérente aux systèmes qui traitent les dossiers.

## Les patterns de règles que Knowledge représente

Les organisations santé opèrent sous différents cadres réglementaires, structures de contrats et modèles opérationnels. Knowledge ne prescrit pas ces règles. Il fournit une manière gouvernée d'encoder et d'évaluer les schémas de décision récurrents qui les sous-tendent.

| Pattern de règle | Ce qu'il gouverne |
|---|---|
| **Éligibilité et couverture** | Si le bénéficiaire, le contrat, la prestation ou l'acte tombent dans les conditions de couverture applicables |
| **Complétude de l'information** | Quelle information ou documentation est requise avant que les règles applicables puissent rendre un verdict |
| **Conditions de contrat et de prestation** | Plafonds, exclusions, conditions de réseau, exigences spécifiques par prestation et autres règles de contrat |
| **Règles de remboursement et d'autorisation** | Les conditions encodées par l'organisation pour traiter une demande de remboursement ou d'autorisation |
| **Exceptions et escalade** | Quand une exception s'applique ou quand les règles encodées exigent une revue supplémentaire |
| **Routage vers revue humaine** | Quand un dossier ne peut ou ne doit pas être résolu automatiquement et doit être envoyé à un reviewer approprié |

Votre organisation possède le contenu des règles. Knowledge fournit la couche de décision gouvernée à travers laquelle ces règles sont évaluées.

## Laisser la politique conduire l'investigation

Progressive Context transforme la préparation du dossier en une boucle active plutôt qu'en un formulaire statique. Le caller (une brique IA, une application opérationnelle, un node de workflow) envoie ce qu'il a. Knowledge détermine ce que les règles applicables exigent encore. Le caller l'acquiert et re-consulte.

Un dossier d'autorisation préalable en cours :

**Round 1.** Le caller envoie ce que le dossier porte déjà : `contrat_bénéficiaire`, `code_acte`, `identifiant_professionnel`.

**Round 2.** Knowledge demande `statut_pièces_justificatives` et `statut_réseau_professionnel`. Le caller récupère les deux, l'un depuis le référentiel documentaire, l'autre depuis l'annuaire des professionnels de santé.

**Round 3.** Knowledge demande `indicateur_revue_nécessité_médicale` (gouverné par la règle de prestation pour ce code d'acte). Le caller interroge le système approprié.

**Résultat.** `approval_required`. Le workflow route le dossier vers un reviewer médical avec tout le contexte pertinent assemblé.

Le caller n'encode pas tout l'arbre de dépendances. À mesure que le contexte arrive, Knowledge détermine quelles branches de règle restent pertinentes et quelle information additionnelle est requise. Voir [Progressive context](/product/progressive-context).

## Patterns d'insertion

Les engagements santé utilisent typiquement un de quatre patterns.

| Pattern | Comment ça marche |
|---|---|
| **Shadow** (point de départ typique) | Knowledge évalue les mêmes dossiers en parallèle du process existant. Comparer les résultats sur une période définie avant que Knowledge tienne l'autorité opérationnelle. |
| **Overlay** | Les résultats de décision existants deviennent partie du contexte que Knowledge évalue. Ajouter de nouvelles règles gouvernées sans migrer la plateforme sous-jacente. |
| **Routage sélectif** | Knowledge gère un nouveau périmètre de décision (un nouveau contrat, une nouvelle prestation, une nouvelle région) pendant que les flux existants restent sur la plateforme actuelle. |
| **Primary** | Knowledge est la couche de décision dès le début, typique pour un nouveau service opérationnel ou un déploiement greenfield. |

Commencez par une décision. Encodez la règle applicable. Faites tourner Knowledge à côté du process existant. Mesurez ce qui change.

## Rendre la décision enforceable

Pour l'appel opérationnel qui suit un verdict Knowledge, Knowledge peut émettre une autorisation signée liée à la décision exacte que la politique a produite. L'API de gestion des dossiers, le service d'autorisation préalable ou un node de workflow gouverné vérifie la signature et refuse si l'opération ne correspond pas à ce que la politique a autorisé.

Voir [Enforcement](/product/enforcement) pour le modèle.

## Reconstruire pourquoi un dossier a été décidé

Chaque consultation écrit un record Consultation qui fige les versions de règles applicables, la trace de précédence, les overrides en vigueur, et le contexte exact qui a été résolu. Les reviewers, auditeurs et régulateurs demandant *« pourquoi ce dossier a-t-il été accepté, refusé ou escaladé ? »* obtiennent une vue métier de l'état gelé au moment de la décision, pas une approximation recollée depuis des logs.

Voir [Auditability](/product/auditability) pour le mécanisme.

## Ce que Knowledge ne fait pas

Être explicite sur la frontière clinique fait partie du contrat.

**Knowledge évalue les règles que votre organisation a encodées. Il ne pose pas de diagnostic, ne recommande pas de traitement, ne détermine pas la nécessité médicale et ne remplace pas le jugement clinique.** Il n'exécute pas d'actions opérationnelles ; votre organisation décide si un verdict conduit à un traitement automatisé, à une demande d'information additionnelle, à une escalade ou à une revue humaine.

Là où le jugement clinique est requis (déterminations de nécessité médicale qui vont au-delà de la règle encodée, dossiers contestés, présentations inhabituelles), la règle encodée doit router le dossier vers le reviewer humain aux qualifications appropriées, et Knowledge enregistre ce routage comme il enregistre toute autre décision.

## Où nous démarrons

Nous explorons la santé avec des assureurs et gestionnaires qui opèrent des processus riches en règles autour de la couverture, du remboursement et des autorisations, en particulier là où les plateformes existantes tournent déjà mais où la logique de décision impose une revue humaine excessive, dépend d'informations incomplètes, ou doit devenir accessible en toute sécurité à des workflows pilotés par IA.

Le focus initial est sur des organisations opérant des environnements complexes avec plusieurs contrats ou plusieurs porteurs de risque.

## Commencer par une décision

Choisissez une décision opérationnelle que vos équipes résolvent encore manuellement, ou une décision où une brique IA pourrait assembler le dossier mais où la détermination des règles doit rester hors du modèle. Faites-la tourner en shadow mode contre le process actuel. Basculez en enforcement quand la parité et l'auditabilité atteignent votre seuil.

**[Explorer un design partnership](/pilot)** &nbsp; · &nbsp; **[Parlez-nous](/contact)**

## Related

| À lire ensuite | Pourquoi |
|---|---|
| [Pour équipes produit IA](/solutions/by-role/ai-product-teams) | L'équipe qui construit la brique IA derrière les workflows opérationnels |
| [Pour compliance officers](/solutions/by-role/compliance-officers) | L'angle policy ownership : versioning, coverage, approbations |
| [Progressive context](/product/progressive-context) | La boucle `/resolve` que le caller d'assemblage de dossier navigue |
| [Enforcement](/product/enforcement) | Verdicts signés et PEP pour la frontière opérationnelle |
| [Auditability](/product/auditability) | Record Consultation, RuleVersion, trace de précédence |
