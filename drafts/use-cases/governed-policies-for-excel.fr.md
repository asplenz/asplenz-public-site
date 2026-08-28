---
title: Gardez Excel. Sortez la policy critique du spreadsheet.
description: Quand des règles compliance, risk, legal ou business sont implémentées directement dans des formules ou des macros, chaque workbook peut devenir sa propre copie de la policy. Knowledge laisse Excel consommer des décisions policy gouvernées pendant que les utilisateurs continuent à travailler dans les spreadsheets qu'ils utilisent déjà.
locale: fr
kicker: Use case
ctaLabel: Discuter de votre use case
ctaHref: /contact
---

Les équipes métier s'appuient sur les spreadsheets pour du calcul, de l'analyse et des workflows. Ce n'est pas le problème.

Le problème commence quand les spreadsheets implémentent aussi des policies compliance, risk, legal ou business directement dans des formules, macros ou config. Quand la policy sous-jacente change, une organisation peut avoir besoin d'identifier où elle est implémentée, de mettre à jour les copies locales, et de reconstituer quelle version s'appliquait à une décision passée.

Knowledge donne à cette classe de règles un lifecycle indépendant — approval, versioning, effective dates, exceptions, auditability — et laisse les spreadsheets consommer les décisions résultantes sur place.

## Le problème de propagation

```
                Company policy
                      |
        +-------------+-------------+
        |             |             |
        v             v             v
   Excel A        Excel B       Excel C

   > EUR 500k     > EUR 500k    > EUR 500k
   formule        VBA           formule
```

Quand la policy change :

- Quels workbooks la contiennent ?
- Ont-ils tous été mis à jour ?
- Qui a approuvé le changement ?
- Quelle version s'appliquait à une décision d'il y a six mois ?

Les contrôles spreadsheet existants tracquent typiquement le fichier — son ownership, ses versions, sa lignée. La policy organisationnelle que le fichier implémente est un objet séparé avec son propre lifecycle d'approval, de version et de dates d'effet. Cet objet a besoin de sa propre autorité gouvernée.

## Ce que Knowledge fournit à un spreadsheet

Un workbook appelle Knowledge avec le contexte du cas (type de client, produit, montant, juridiction, ce que la policy prend en input). Knowledge détermine les rules applicables, résout la précédence, et retourne une décision gouvernée : `ALLOWED`, `APPROVAL_REQUIRED`, `BLOCKED` — plus la rule citée, sa version courante, sa date d'effet, l'id de consultation.

Le spreadsheet affiche la décision à côté du cas. L'utilisateur voit pourquoi la décision est celle-là sans quitter Excel.

```
Structured Product Suitability

Client        Retail
Product       Structured Note
Amount        EUR 450,000

--------------------------------

APPROVAL_REQUIRED

Rule          LARGE_NOTIONAL
Rule version  v18
Effective     28 Aug 2026
Consultation  cns-abc123
```

La policy vit dans Knowledge. Le spreadsheet consomme la décision.

## Changez la policy une fois. Pas chaque spreadsheet.

Supposons trois workbooks différents — une feuille de trade-suitability, une feuille de client-review, un dashboard d'exception-monitoring — consultent tous la même suitability policy.

**Avant** — le seuil est de EUR 500k, défini une fois dans Knowledge :

```
SUITABILITY.LARGE_NOTIONAL
Amount > EUR 500k -> APPROVAL_REQUIRED
```

Compliance modifie la rule et approuve le changement. Knowledge écrit une nouvelle version de rule, effective depuis la date approuvée.

**Après** — refresh les spreadsheets :

```
                     Knowledge
                       v18
                        |
        +---------------+---------------+
        |               |               |
        v               v               v
     Excel A         Excel B         Excel C
```

Les trois voient la nouvelle version simultanément. Pas de seuil local à redistribuer, pas de macro à update, pas de risque qu'un workbook rate le memo.

La même décision signée atteint chaque workbook, et chaque workbook s'accorde sur ce que dit la policy courante.

## Reconstituer toute décision passée

La question audit n'est pas *que dit la policy aujourd'hui*, mais *que disait-elle quand cette décision spécifique a été prise*.

Prenez une transaction du 14 mars 2025 :

```
Client retail, produit structuré, EUR 450,000
Décision : ALLOWED
```

Knowledge montre :

```
Policy         Structured Product Suitability
Rule           LARGE_NOTIONAL
Rule version   v17
Threshold      EUR 500,000
Effective at   14 mars 2025
Consultation   cns-91827
```

Même cas aujourd'hui avec la policy mise à jour :

```
Décision       APPROVAL_REQUIRED
Rule version   v18
Threshold      EUR 400,000
Effective      28 aug 2026
```

Deux verdicts différents, tous deux corrects — parce qu'ils citent la version de la rule qui s'appliquait à leur date respective. C'est la surface d'audit qu'un framework de contrôle EUC ne porte pas de lui-même : le fichier a été reviewé et approuvé, mais la policy organisationnelle applicable à une décision spécifique à une date spécifique vit dans Knowledge.

## Un test utile pour ce qui appartient à Knowledge

Toute business rule dans un spreadsheet n'est pas candidate. Knowledge est conçu pour les rules qui représentent une policy organisationnelle indépendante du spreadsheet qui l'implémente.

Un test pratique :

> **Est-ce que cette règle existerait toujours si ce spreadsheet n'existait pas ?**

| Logique dans le workbook | Candidate Knowledge ? |
|---|---|
| `Duration = SUM(cashflow * time) / price` | Non. Intrinsèque au calcul. |
| Highlight jaune une cellule vide | Non. UI du workbook. |
| Arrondir à l'unité monétaire | Non. Présentation. |
| "Retail + produit structuré + notional > EUR 500k → compliance review" | Oui. Policy organisationnelle. |
| "Les produits high-risk ne peuvent être vendus à des clients à faible tolérance au risque" | Oui. Rule de suitability. |
| "La juridiction SG exige une attestation signée du dealer avant exécution" | Oui. Rule régulatoire. |

Le test identifie un **candidate**, pas un move obligatoire. L'organisation décide si la rule mérite une autorité indépendante en fonction de : combien d'applications la partagent, si elle change sans toucher au code implémentant, si un auditeur a besoin de reconstituer ses applications passées.

Knowledge est l'autorité pour les policies que vous choisissez. Tout le reste reste où il est.

## L'architecture

Le principe sous-jacent n'est pas spécifique à Excel :

> **Certaines policies organisationnelles méritent une autorité indépendante des applications qui les consomment.** Placez la policy autoritative en dehors du consommateur, et laissez le consommateur — un agent IA, une application existante, ou un spreadsheet — demander à Knowledge la décision gouvernée.

Pour les équipes avec un framework de contrôle End-User Computing (EUC) existant, Knowledge gouverne un objet différent de ce que gouverne le framework : le framework track l'artefact spreadsheet, Knowledge track la policy organisationnelle sur laquelle l'artefact s'appuie. Les deux sont complémentaires en principe. Savoir s'ils doivent être intégrés en pratique est une question de scoping.

## Où ça s'insère dans votre stack

- **Excel Web + Desktop** via un bridge léger ou un broker interne, dimensionné selon votre gateway, votre auth et votre posture de déploiement. Le chemin d'intégration concret est décidé dans le cadre d'une conversation de scoping parce que les contraintes IT varient beaucoup.
- **Audit historique** vit dans la UI back-office Knowledge (page Consultation), pas dans le spreadsheet. Les compliance et risk officers lisent les décisions historiques là ; le workbook est pour l'application live.
- **Pas de remplacement des contrôles spreadsheet existants.** Knowledge les complète en gouvernant la policy organisationnelle, pas le fichier.

## Discuter de votre use case

Des règles critiques business ou compliance sont-elles embarquées dans vos spreadsheets aujourd'hui ? Savez-vous quels workbooks implémentent une policy donnée, s'ils appliquent tous la même version, et quelle version s'appliquait à une décision prise il y a plusieurs mois ?

**[Discuter de votre use case](/contact)**
