---
title: Laissez les agents d'onboarding collecter ce dont ils ont besoin. Gardez la décision d'admission déterministe.
description: L'onboarding piloté par IA change comment l'information client peut être collectée. Un agent peut chercher dans les systèmes internes, appeler des providers de vérification et ne demander au client que quand c'est nécessaire. Knowledge détermine ce que la policy applicable exige et si le cas résultant peut procéder, sans remplacer votre stack IDV, screening ou workflow.
locale: fr
kicker: Knowledge pour le KYC / KYB
ctaLabel: Explorer un design partnership
ctaHref: /pilot
---

L'admission client se transforme sous l'effet de l'investigation pilotée par IA. Un agent d'onboarding peut chercher dans les systèmes internes, appeler des providers de vérification, extraire des faits depuis des documents, et ne demander au client que quand rien d'autre n'est disponible. Cette flexibilité est puissante. Elle soulève aussi une question de policy :

> **L'agent peut rassembler l'information. Qui décide si le cas résultant peut être admis ?**

Knowledge sépare les deux. L'agent détermine *comment* collecter ce dont un cas a besoin. Knowledge détermine *ce que* la policy exige et si le cas peut procéder.

## KYC n'est pas une seule chose

L'onboarding est souvent décrit comme « KYC » comme si c'était une catégorie produit unique. C'est un stack de couches, chacune typiquement possédée par un outil différent.

| Couche | Ce qu'elle fait | Typiquement possédée par |
|---|---|---|
| **Collect** | Ce que le client doit fournir (quels champs, quels documents, dans quel ordre) | UI onboarding ou agent |
| **Verify** | Que ce qu'il a fourni est valide (identité, adresse, screening, PEP, sanctions) | Vendor IDV, vendor screening |
| **Decide** | De l'admettre (résultat de vérification + règles firme + policy juridictionnelle + policy produit + policy commerciale + exceptions) | Policy d'admission de la firme |
| **Orchestrate** | Le flow (retries, escalations, callbacks, SLAs) | Outil de workflow, BPM |

Knowledge se pose sur **Decide**. Les trois autres couches restent dans les outils déjà bons pour elles.

## La décision d'admission que Knowledge peut posséder

La couche Decide est là où le composite se produit. Plusieurs inputs combinent en une détermination : *admettons-nous ce client pour cette relation ou ce produit ?*

| Input | Ce qu'il apporte à la décision d'admission |
|---|---|
| **Vérification d'identité** (vendor IDV) | La personne ou l'entité est bien qui elle prétend être |
| **Screening** (sanctions, PEP) | Check restricted-party |
| **Éligibilité produit** | Le produit pour lequel le client postule fit son profil |
| **Juridiction** | Règles qui s'appliquent étant donné le pays du client et l'empreinte réglementaire de la firme |
| **Policy commerciale** | Règles spécifiques à la firme sur les clients acceptables |
| **Appétit au risque** | Thresholds de tolérance et règles d'escalation de la firme |
| **Exceptions** | Approbations ou overrides spécifiques au cas |

Ensemble ils résolvent à une seule détermination : **admit, review, ou block**. Ce composite est souvent une décision qu'aucun outil existant unique ne possède end-to-end. C'est ce que Knowledge peut tenir.

## Laisser la policy driver l'investigation

Progressive Context fait de la décision d'admission une boucle active plutôt qu'un formulaire statique. Le caller (un agent, une plateforme d'onboarding, un node de workflow) envoie ce qu'il a. Knowledge détermine ce que les règles applicables exigent encore. Le caller l'acquiert et re-consulte. La boucle converge vers une décision.

Une admission KYB pour un client entreprise français :

**Round 1.** Le caller envoie `jurisdiction: FR`. Knowledge demande `client_type` (individual ou business).

**Round 2.** Le caller ajoute `client_type: business`. Knowledge demande maintenant `legal_form` et `beneficial_ownership_structure`.

**Round 3.** Le caller récupère `legal_form: SAS` et `beneficial_ownership_structure: simple` depuis le registre des sociétés. Plusieurs branches de policy qui auraient concerné des particuliers ou des structures complexes deviennent maintenant sans objet. Knowledge demande `beneficial_owner_identity` avec `source_requirement: verified`.

**Round 4.** Le vendor IDV vérifie. Le vendor screening retourne `pep_match: false`. Le caller re-consulte.

**Résultat.** `allowed`. Règle citée : `rul-kyb-fr-sas-simple-owner-verified`. Autorisation signée émise pour l'ouverture de compte.

Le caller n'encode pas tout l'arbre de dépendances. À mesure que le contexte arrive, Knowledge détermine quelles branches de policy restent pertinentes et quelle information additionnelle est réellement nécessaire. Voir [Progressive context](/product/progressive-context) pour le mécanisme.

## Knowledge détermine quoi. Votre stack détermine comment.

Knowledge identifie le contexte dont les règles applicables ont besoin. Le caller (agent, application, workflow) décide où l'obtenir.

| Contexte requis | Source typique |
|---|---|
| Pays du client | Dossier client existant, CRM |
| Statut PEP | Vendor de screening, API sanctions |
| Activité business | Extraire des documents, ou demander au client |
| Relation existante | Système core banking ou de compte |
| Vérification d'identité | Vendor IDV |
| Structure de beneficial owner | Registre des sociétés, statuts |

**Votre système d'onboarding décide comment collecter l'information. Il n'a pas besoin de savoir pourquoi la policy l'exige.**

Quand un agent est côté caller, la même séparation devient plus nette : l'agent raisonne sur la façon la moins chère, la plus rapide ou la moins intrusive d'obtenir chaque champ demandé. Knowledge ne juge pas ce choix. Il ne se soucie que de savoir si la valeur satisfait la policy une fois arrivée.

## Ce que Knowledge peut être dans votre stack KYC

Deux formes couvrent la plupart des déploiements KYC / KYB.

| Forme | Comment ça marche |
|---|---|
| **Knowledge comme autorité de décision d'admission** | Pour un flow d'onboarding donné, Knowledge détermine allow / review / block à partir des résultats de vérification collectés et des policies de la firme. La plateforme d'onboarding agit sur le résultat. |
| **Knowledge comme complément à ce que vous faites déjà tourner** | Pour les décisions que la plateforme existante produit déjà, Knowledge peut ajouter une couche gouvernée pour des cas spécifiques : une règle d'exception spécifique à la firme, un overlay juridictionnel, un workflow d'approbation, une surface d'audit. |

Les engagements KYC utilisent souvent les deux formes en même temps.

## Patterns d'insertion

Les stacks d'onboarding varient considérablement. Formes communes :

| Setup | Où Knowledge se place |
|---|---|
| **Vendor IDV possède verify + workflow ; la firme possède l'admission** | Knowledge expose la décision d'admission au parcours d'onboarding. Consulté progressivement à mesure que le contexte est collecté et à nouveau quand les résultats de vérification arrivent. |
| **Plateforme compliance possède vérification + workflow + règles d'admission end-to-end** | Knowledge ne fit pas à la couche KYC. Entrée possible au-dessus : la décision d'admission composite qui combine verdict KYC + éligibilité produit + matrice juridictionnelle + exceptions commerciales, une détermination que la plateforme compliance ne porte typiquement pas. |
| **Vendor IDV verification-only ; la plateforme de la firme possède collecte + orchestration + décision** | Knowledge gouverne la décision. Votre plateforme continue à posséder l'UI et l'orchestration. |
| **Logique d'admission legacy custom accumulée sur des années** | Knowledge se place en overlay, ajoute de nouvelles règles ou gouverne des existantes sans toucher au code legacy. Le mode shadow est commun : valider la parité avant que Knowledge tienne l'autorité. |

## Rendre la décision d'admission enforceable

Une décision policy seule est advisory. Pour l'action d'ouverture de compte elle-même, Knowledge peut émettre une autorisation signée liée à l'admission exacte que la policy a résolue. L'API d'ouverture de compte ou le node de workflow vérifie la signature et refuse si l'opération ne matche pas ce que la policy a autorisé.

Voir [Enforcement](/product/enforcement) pour le modèle.

## Reconstruire pourquoi un client a été admis

Chaque consultation écrit un record Consultation qui fige les versions de règles applicables, le trace de précédence, les overrides en vigueur, et le contexte exact qui a été résolu. Quand un régulateur demande *« pourquoi ce client a-t-il été admis le 2026-03-15 ? »*, la réponse est une vue business de l'état gelé au moment de décision, pas une approximation recollée depuis des logs.

Voir [Auditability](/product/auditability) pour le mécanisme.

## Commencer par une décision d'admission

Pickez une décision d'admission que votre stack d'onboarding fait actuellement, ou une que votre nouvel agent d'onboarding doit faire, où l'autorité policy devrait vivre hors du modèle. Faites-la tourner en shadow mode contre le process actuel. Cutoverez quand la parité et l'audit atteignent votre bar.

**[Explorer un design partnership](/pilot)** &nbsp; · &nbsp; **[Parlez-nous](/contact)**

## Related

| À lire ensuite | Pourquoi |
|---|---|
| [Pour équipes produit IA](/solutions/by-role/ai-product-teams) | L'équipe qui construit l'agent d'onboarding |
| [Pour compliance officers](/solutions/by-role/compliance-officers) | L'angle compliance : ownership des règles, audit, approbations |
| [Progressive context](/product/progressive-context) | La boucle `/resolve` que le caller d'onboarding navigue |
| [Enforcement](/product/enforcement) | Verdicts signés et PEP pour la frontière d'ouverture de compte |
| [Auditability](/product/auditability) | Record Consultation, RuleVersion, trace de précédence |
