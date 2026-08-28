---
title: Gardez Excel. Sortez la policy critique du spreadsheet.
description: Quand des policies business, risk ou compliance sont implémentées directement dans des formules ou macros de spreadsheet, chaque workbook peut devenir sa propre copie de la policy. Knowledge laisse Excel utiliser des décisions policy gouvernées pendant que les équipes continuent à travailler dans les spreadsheets qu'elles utilisent déjà.
locale: fr
kicker: Policies gouvernées pour Excel
ctaLabel: Discuter de votre use case
ctaHref: /contact
---

Les équipes métier s'appuient sur les spreadsheets pour du calcul, de l'analyse et des workflows. Ce n'est pas le problème.

Le problème commence quand un spreadsheet devient aussi l'autorité pour une policy business, risk ou compliance.

Un seuil est embarqué dans une formule. Une règle d'éligibilité vit dans du VBA. Une exigence d'approbation est copiée dans plusieurs workbooks.

Quand la policy change, quels spreadsheets la contiennent ? Ont-ils tous été mis à jour ? Et des mois plus tard, pouvez-vous prouver quelle version a produit une décision particulière ?

Knowledge sort les policies sélectionnées du spreadsheet et leur donne leur propre lifecycle gouverné — pendant que les utilisateurs continuent à travailler dans Excel.

## Le problème de propagation

Une policy peut vite devenir de nombreuses implémentations locales.

```
                 Company policy
                       |
          +------------+------------+
          |            |            |
          v            v            v
       Excel A      Excel B      Excel C

       > EUR 500k   > EUR 500k   > EUR 500k
       formule      VBA          formule
```

Quand cette policy change :

- Où est-elle implémentée ?
- Toutes les copies ont-elles été mises à jour ?
- Qui a approuvé la nouvelle règle ?
- Quand est-elle devenue effective ?
- Quelle version s'appliquait à une décision passée ?

La policy a son propre lifecycle : ownership, approval, versions, dates d'effet, exceptions et historique de décisions.

Knowledge rend ce lifecycle explicite.

## Utiliser des décisions policy gouvernées directement depuis Excel

Le spreadsheet fournit les faits du cas. Knowledge détermine quelle policy et quelles règles s'appliquent et retourne la décision gouvernée.

```
Structured Product Suitability

Client        Retail
Product       Structured Note
Amount        EUR 450,000

--------------------------------

APPROVAL REQUIRED

Rule          LARGE_NOTIONAL
Rule version  v18
Effective     28 Aug 2026
Consultation  cns-abc123
```

L'utilisateur obtient le résultat dans Excel, à côté du travail qu'il est déjà en train de faire.

La policy elle-même vit dans Knowledge.

## Changez la policy une fois. Pas chaque spreadsheet.

Supposons trois workbooks qui s'appuient sur la même suitability policy :

- un workbook trade-suitability
- un workbook client-review
- un workbook exception-monitoring

La policy courante dit :

```
SUITABILITY.LARGE_NOTIONAL

Client retail
Produit structuré
Amount > EUR 500,000

-> APPROVAL REQUIRED
```

Compliance approuve un changement.

```
v17                 v18

EUR 500,000   ->    EUR 400,000
                    APPROVED
                    Effective 28 Aug 2026
```

Knowledge enregistre la nouvelle version et sa date d'effet.

Les workbooks continuent à consulter Knowledge :

```
                      Knowledge
                         v18
                          |
              +-----------+-----------+
              |           |           |
              v           v           v
           Excel A     Excel B     Excel C
```

Pas de seuil local à redistribuer à travers ces workbooks.

Chaque workbook consulte la même policy effective au lieu de maintenir sa propre copie de la règle.

## Savoir quelle policy a produit la décision

La question audit n'est pas seulement :

**Que dit la policy aujourd'hui ?**

C'est aussi :

**Quelle policy s'appliquait quand cette décision a été prise ?**

Considérez une transaction du 14 mars 2025 :

```
Client        Retail
Product       Produit structuré
Amount        EUR 450,000

Décision      ALLOWED
```

Knowledge enregistre l'état de la policy derrière cette décision :

```
Policy        Structured Product Suitability
Rule          LARGE_NOTIONAL
Rule version  v17
Threshold     EUR 500,000
Effective at  14 mars 2025
Consultation  cns-91827
```

Sous la policy actuelle, le même cas produit :

```
Décision      APPROVAL REQUIRED
Rule version  v18
Threshold     EUR 400,000
Effective     28 aug 2026
```

Deux décisions différentes, toutes deux correctes — parce que chacune est liée à la version de la règle qui s'appliquait à ce moment-là.

## Qu'est-ce qui appartient à Knowledge ?

Toute formule ou business rule dans un spreadsheet ne doit pas nécessairement être déplacée dans Knowledge.

Un test utile est :

> **Est-ce que cette règle existerait toujours si ce spreadsheet n'existait pas ?**

| Logique | Candidate Knowledge ? |
|---|---|
| Calculer la duration depuis des cash flows | Non — calcul du spreadsheet |
| Surligner une cellule incomplète | Non — comportement du workbook |
| Les transactions retail sur produit structuré au-dessus de EUR 500k requièrent une compliance review | Oui — policy organisationnelle |

Le test identifie un candidate, pas un déplacement obligatoire.

Knowledge est le plus pertinent quand une règle représente une policy organisationnelle et a besoin de son propre approval, versioning, dates d'effet ou trail d'audit historique.

Tout le reste peut rester où il est.

## Continuez à travailler dans Excel

Knowledge n'exige pas des équipes métier de remplacer leurs spreadsheets ou de déplacer les calculs et l'analyse dans une nouvelle application.

Excel reste l'environnement de travail.

Les policies business, risk et compliance sélectionnées sont évaluées à travers Knowledge, avec leur gouvernance et leur historique de décisions maintenus indépendamment.

Les intégrations enterprise peuvent être adaptées aux exigences existantes d'authentification, réseau et déploiement.

## Discuter de votre use case

Des règles business, risk ou compliance sont-elles embarquées dans des spreadsheets critiques aujourd'hui ?

Quand une de ces policies change, pouvez-vous identifier où elle est appliquée — et prouver quelle version a produit une décision des mois plus tard ?

**[Discuter de votre use case](/contact)**
