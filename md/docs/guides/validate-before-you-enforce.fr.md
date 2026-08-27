---
title: Valider avant d'enforce
description: Le shadow mode laisse Knowledge évaluer les mêmes cas que votre process actuel, en parallèle, sans tenir l'autorité. Comparez les résultats, comprenez les discrepancies, puis basculez à votre rythme.
locale: fr
kicker: Docs / Guides - Stable
---

Entre l'authoring des règles et le moment où Knowledge tient l'autorité opérationnelle se trouve une fenêtre où vous comparez ses outputs contre le process que vous trustez déjà. Ce guide est sur cette fenêtre.

## Ce que le shadow mode fait

En shadow mode, chaque appel à `/resolve` se comporte normalement : Knowledge évalue les règles applicables, produit un verdict, écrit un record Consultation. La seule chose qui change est que le caller n'agit pas sur le verdict. Le process existant (un reviewer humain, un moteur legacy, un workflow fixe) continue à prendre la décision opérationnelle. Knowledge produit une seconde réponse parallèle qui est enregistrée mais pas enforced.

Vous comparez ensuite les deux réponses dans le temps.

## Activer le shadow

Le shadow se set par policy ou par tenant, depuis l'UI back-office ou via l'API admin. Une fois activé :

- Chaque consultation tourne et écrit un record Consultation comme d'habitude
- La réponse porte un flag `shadow: true` pour que le caller sache ne pas agir dessus
- Les points d'enforcement aval (un wrapper de tool gouverné, un proxy MCP, un PEP custom) traitent le verdict signé comme advisory plutôt qu'autoritative

Les callers qui atteignent déjà `/resolve` n'ont pas besoin de changement de code. Ils reçoivent déjà des verdicts ; le shadow mode leur dit juste que le verdict n'est pas encore autoritative.

## Comparer les outputs

Pour chaque cas qui flow à travers à la fois Knowledge et le process existant, trois résultats sont possibles :

| Résultat | Ce que ça veut dire |
|---|---|
| **Match** | Knowledge et le process existant ont atteint la même conclusion. C'est le baseline que vous voulez construire. |
| **Knowledge plus permissif** | Knowledge autoriserait ; le process existant a bloqué ou escaladé. Soit Knowledge manque une règle, soit le process existant porte une contrainte non-écrite qui doit être encodée. |
| **Knowledge plus restrictif** | Knowledge bloquerait ou exigerait une approbation ; le process existant l'a laissé passer. Soit le process existant manque un contrôle que Knowledge a encodé, soit Knowledge a une règle trop large. |

Aucune direction n'est intrinsèquement juste. Une discrepancy est une question, pas un échec.

## Où la comparaison vit

Knowledge enregistre chaque verdict shadow sur la Consultation elle-même. Si vous enregistrez aussi la décision du process existant (via un callback, un batch job, ou le tag d'un reviewer manuel), vous pouvez query la paire et produire un rapport de comparaison.

Une query de reporting minimale répond à trois questions pour une fenêtre donnée :

- Quel pourcentage de cas ont matché ?
- Sur les discrepancies, quelles règles étaient dominantes dans Knowledge ?
- Sur les discrepancies, quel était le résultat et la raison du process existant ?

L'UI back-office montre cette comparaison quand vous connectez le feed du process existant. La surface API accepte la même data via `/v1/consultations/{id}/external-decision` pour les équipes qui veulent construire leur propre reporting.

## Que faire d'une discrepancy

Toute discrepancy ne nécessite pas un changement de code. Investiguez chacune :

- **Le process existant avait raison, Knowledge manque une règle.** Authorez la règle. Le prochain run shadow devrait matcher. Itérez.
- **Knowledge avait raison, le process existant était inconsistant.** Notez-le dans le governance log. Passez. Tout le point du shadow mode est qu'aucun côté n'est traité comme autoritative jusqu'à ce que vous décidiez.
- **Les deux sont défendables.** La règle peut être trop large, le process existant trop étroit, ou le cas génuinement ambigu. Routez-le vers un workflow d'approbation, pas vers un verdict hardcodé.

## Décider quand basculer

La parité est un seuil, pas un binaire. Critères typiques :

- Match rate au-dessus de votre bar convenue (95%, 98%, ce que le domaine justifie)
- Chaque discrepancy restante a une explication documentée
- La vue Coverage montre qu'aucune règle ne fire bien plus ou bien moins que prévu
- Une review humaine échantillon confirme les résultats sur les cas borderline

Une fois ces conditions tenues, vous pouvez flipper le shadow off. Knowledge commence à produire des verdicts autoritatives. L'enveloppe signée devient actionable à la frontière du tool.

## Rollback

L'enforcement peut être remis en shadow à tout moment, depuis la même surface où il a été activé. Les nouveaux verdicts retournent à advisory. Les Consultations existantes restent dans le record. Rien n'est perdu.

Les équipes gardent souvent le shadow disponible sur une base per-policy longtemps après le cut-over : quand elles authorent un amendement substantiel, elles remettent la policy affectée en shadow pour une période, comparent les outputs de la nouvelle version contre l'ancienne, puis réactivent l'enforcement.

## Bibliothèques de test cases

Le shadow mode compare contre des cas live. Les test cases comparent contre des résultats known-good.

Chaque policy peut porter une bibliothèque de test cases : un set d'inputs de cas jumelés avec des verdicts attendus et des règles dominantes attendues. La bibliothèque tourne à chaque changement de règle ; un changement qui casse une expectation flag dans l'UI back-office avant publication.

Les test cases et le shadow mode sont complémentaires. Les test cases attrapent les régressions sur les cas que vous comprenez déjà. Le shadow mode révèle les discrepancies sur les cas auxquels vous n'aviez pas pensé. Les deux sont pas chers à construire une fois et chers à skipper.

## Related

| À lire ensuite | Pourquoi |
|---|---|
| [Quickstart : créer votre première policy](/docs/quickstart-first-policy) | Le chemin auteur que ce guide étend |
| [Authorer des règles dans l'UI back-office](/docs/guides/author-rules-in-back-office-ui) | La surface UI où vous activez le shadow et voyez le coverage |
| [Migrer d'advisory à enforcement](/docs/guides/migrate-from-advisory-to-enforcement) | Le playbook pour le cut-over |
| [Auditability](/product/auditability) | Ce que le record Consultation capture pendant et après le shadow |
