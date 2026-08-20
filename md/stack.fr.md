---
title: Fonctionne avec votre stack existant
description: Ajoutez de la policy gouvernée là où vous en avez besoin. Gardez les systèmes qui marchent déjà.
locale: fr
kicker: Cinq patterns d'adoption
ctaLabel: Devenir design partner
ctaHref: /pilot
---

Knowledge coexiste avec votre moteur de workflow, vos fournisseurs de vérification, votre OMS et votre logique de décision existante. La policy gouvernée peut être ajoutée autour des parties qui en ont besoin sans remplacer ce qui tourne déjà.

**Ces patterns ne sont pas mutuellement exclusifs.** Un déploiement peut utiliser Overlay pour un domaine de policy, Gate pour une frontière d'action spécifique, Shadow pour un scope encore en validation et Primary pour une nouvelle business unit, le tout en même temps. Ce sont des building blocks qui se combinent et évoluent, pas cinq architectures figées.

---

**Vous avez déjà un moteur de décision ? Bien. Gardez-le.** Un moteur de règles custom, du code de décision embarqué dans votre OMS, un système d'admission legacy — vous pouvez ajouter de nouvelles règles, gouverner des policies additionnelles, ou produire une trace de décision gouvernée autour, sans remplacer ce qui tourne déjà.

## Overlay : Ajouter de la policy gouvernée autour de la décision existante

Gardez la décision existante comme un input. Knowledge évalue des policies, exceptions ou contrôles additionnels autour d'elle et produit sa propre trace de décision gouvernée. Utile quand remplacer la logique legacy porterait un risque disproportionné de régression, de certification ou de migration.

## Gate : Exiger un verdict Knowledge avant certaines actions

Gardez le chemin de décision existant, mais exigez un verdict Knowledge avant qu'une action sélectionnée puisse se poursuivre. Knowledge gouverne un ensemble défini de policies ou de contrôles ; un verdict bloquant empêche l'exécution. Le système sous-jacent reste en place.

Les deux patterns préservent l'implémentation de décision existante. L'intégration se limite à introduire Knowledge à la frontière de décision appropriée plutôt qu'à migrer la logique policy legacy d'entrée.

---

## Shadow : Valider avant de donner l'autorité

Vous voulez que Knowledge évalue des cas production-relevants en parallèle de votre couche de décision existante, sans contrôler le résultat live.

**Knowledge n'a aucune autorité sur le résultat production.** Son verdict est calculé mais ne contrôle pas ce qui arrive réellement. La comparaison répond à deux questions pratiques :

- Où Knowledge et le système existant sont-ils d'accord ?
- Là où ils divergent, qu'est-ce qui explique la différence - couverture policy manquante, interprétation différente, contexte incomplet, ou un problème dans l'implémentation existante ?

Une fois la comparaison comprise et la confiance suffisamment haute, Knowledge peut transitionner vers Gate, Overlay, Selective Routing ou Primary pour le scope en question.

---

## Selective routing : Bougez quelques décisions, pas tout le patrimoine

Vous avez un système existant qui gère les flux actuels. Routez un scope clairement borné vers Knowledge - un nouveau produit, une juridiction, un segment client, un domaine de policy ou un canal - pendant que les décisions existantes restent sur le système legacy.

Même tenant, mêmes clients, mêmes systèmes downstream. Seules les décisions dans le scope sélectionné viennent de Knowledge. Aucun impact sur les flux actuels, contrôle total sur le scope routé, rollback disponible si nécessaire.

Selective routing est souvent le pattern le plus vendable parce qu'il transforme une migration potentiellement énorme en un scope borné et mesurable.

---

## Primary : Construire une nouvelle couche de décision de zéro

Greenfield. Une nouvelle ligne de produits, une nouvelle business unit, une nouvelle surface customer-facing où aucune couche de décision n'existe encore. Knowledge est la couche de décision dès le premier jour.

Primary est l'architecture la plus propre parce qu'il n'y a pas de couche de décision legacy à migrer. Là où un pack policy pertinent existe, il fournit un modèle de départ que les policy owners de la firme calibrent, plutôt que de partir d'un ruleset vide.

---

## Les patterns peuvent évoluer

Un déploiement traverse souvent plus d'un pattern au cours de sa vie :

- **Shadow → Selective routing → Primary** pour un scope que vous validez d'abord en parallèle, puis passez live sur un segment borné, puis étendez.
- **Overlay + Gate** côte à côte, l'un gouvernant des policies additionnelles autour du legacy, l'autre contrôlant l'exécution d'actions spécifiques.
- **Legacy + Overlay indéfiniment** quand le moteur sous-jacent est stable et que c'est la couche policy gouvernée qui doit continuer d'évoluer.

Le bon pattern pour un scope aujourd'hui n'est pas nécessairement le bon pattern six mois plus tard. Knowledge est conçu pour être re-scopé sans être ré-architecturé.

## Un agent IA devant le legacy

Un agent IA qui opère dans un environnement existant a souvent besoin de Knowledge sans toucher au legacy du tout. Il appelle le CRM, appelle le core legacy pour l'état courant, et appelle `/resolve` pour la décision policy gouvernée avant d'exécuter. Le legacy reste le système de record ; Knowledge gouverne la frontière de décision devant lui.

C'est un cas spécifique des patterns ci-dessus (typiquement Gate ou Selective routing au niveau de l'agent), pas un sixième mode. Voir [Agents IA](/ai-agents) pour le pattern complet.

## Matrice des patterns d'adoption

| Votre situation | Pattern | Autorité de Knowledge | Logique de décision existante |
|---|---|---|---|
| Ajouter une policy gouvernée autour du legacy | **Overlay** | Couche policy additionnelle | Préservée |
| Empêcher des actions sélectionnées sauf si la policy autorise | **Gate** | Veto à une frontière sélectionnée | Préservée |
| Comparer avant de donner l'autorité | **Shadow** | Aucune | Autoritaire |
| Bouger d'abord un scope borné | **Selective routing** | Autoritaire pour le scope sélectionné | Autoritaire ailleurs |
| Nouveau domaine de décision | **Primary** | Autoritaire | Aucune / non utilisée |

## Ce qui reste en place

| Ce qui reste en place | Comment Knowledge coexiste |
|---|---|
| **Votre moteur de workflow** | Votre workflow continue d'orchestrer le processus ; il appelle Knowledge aux points de décision que vous choisissez |
| **Vos fournisseurs de vérification** | Les fournisseurs de vérification continuent de vérifier l'identité et les signaux de screening. Knowledge peut consommer ces résultats comme contexte quand la policy l'exige |
| **Votre OMS** | Votre OMS reste le système responsable de la gestion et de l'exécution des ordres. Knowledge peut être consulté aux frontières de décision policy sélectionnées |
| **Vos systèmes core legacy** | Les systèmes legacy restent en place. Knowledge peut gouverner des policies sélectionnées autour d'eux sans exiger que leur logique de décision soit migrée d'entrée |

## La suite

| À lire ensuite | Pourquoi |
|---|---|
| [Comment fonctionne Knowledge](/how-it-works) | Le modèle mental derrière ces patterns |
| [Wealth](/wealth) | Un exemple où Knowledge gouverne les décisions produits structurés à l'intérieur d'un stack wealth existant |
| [KYC / KYB](/kyc) | Un exemple où Knowledge gouverne la décision d'admission autour d'un stack de vérification existant |
| [Agents IA](/ai-agents) | Un cas spécifique où Knowledge se place devant le legacy pour des flux agent-driven |
| [Design partner](/pilot) | Trois places founding, une décision production, pricing founding-customer |
