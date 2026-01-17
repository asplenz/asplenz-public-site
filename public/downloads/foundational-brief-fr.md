# Infrastructure de Snapshot Décisionnel

## Foundational Brief

**La preuve avant les questions**

---

## Introduction

Ce livre blanc présente les fondations opérationnelles de la **preuve à l'exécution** pour les systèmes de décision automatisés et semi-automatisés opérant dans des contextes institutionnels.

Il s'adresse aux organisations qui doivent établir, avec le temps, ce qui a réellement été exécuté lorsque les décisions deviennent irréversibles – indépendamment de l'évolution ultérieure des systèmes, des modèles, des données ou des équipes.

Ce document est volontairement non promotionnel. Il se concentre sur la préservation factuelle plutôt que sur l'explication, la justification ou l'évaluation.

---

## Résumé opérationnel

Les organisations s'appuient de plus en plus sur des systèmes de décision dont les résultats entraînent des conséquences opérationnelles, juridiques, financières et réputationnelles durables. Ces systèmes évoluent continuellement : les modèles sont ré-entraînés, les règles ajustées, les sources de données modifiées, les infrastructures refondues et les équipes renouvelées. Pourtant, les décisions produites restent souvent examinables bien après que les conditions techniques ayant présidé à leur création ont disparu.

Dans la plupart des organisations, l'état factuel des décisions passées n'est pas préservé au moment de l'exécution. Lorsque des questions surgissent, les institutions tentent de reconstruire ce qui s'est passé à l'aide de logs, de traces, de référentiels de configuration, de tableaux de bord et de souvenirs humains. Ce processus est intrinsèquement fragile, coûteux et incertain. Il produit des récits plutôt que des faits.

L'Infrastructure de Snapshot Décisionnel comble cette lacune structurelle. Elle introduit une couche de preuve à l'exécution dont le seul but est de capturer, au point de non-retour, l'état factuel complet d'une décision et de le préserver sous la forme d'un artefact immuable et auto-contenu. Cet artefact existe indépendamment de l'évolution future du système qui l'a produit.

L'infrastructure n'explique, ne justifie, ni n'évalue les décisions. Elle préserve ce qui a été exécuté. Ce faisant, elle réduit l'effort opérationnel, limite l'incertitude et restaure une autorité factuelle durable sans altérer le contrôle institutionnel ou la gouvernance.

---

## Énoncé du problème

### La reconstruction n'est pas une preuve

La plupart des systèmes de décision ne préservent pas les états d'exécution factuels. Ils laissent derrière eux des logs, des métriques et des traces conçus pour l'observabilité, et non pour la certitude probante. Lorsque les décisions sont contestées plus tard, les organisations reconstruisent des récits sous des contraintes qui n'existaient pas au moment de l'exécution.

Cela conduit à :

- des bases factuelles fragmentées et incomplètes,
- des divergences entre les équipes et les interprétations,
- un biais de rétrospective intégré aux explications,
- une augmentation exponentielle des coûts opérationnels au fil du temps.

Ces défaillances sont structurelles. Elles découlent d'une inadéquation entre ce que les systèmes d'exécution sont conçus pour conserver et ce dont les institutions ont besoin plus tard pour établir les faits.

---

## Principe central

### Capturer au point de non-retour

Une décision devient un fait lorsqu'elle est exécutée. À cet instant :

- des entrées spécifiques sont consommées,
- une logique spécifique est appliquée,
- dans un contexte d'exécution spécifique,
- produisant un résultat spécifique.

Une fois ce moment passé, l'état factuel d'origine ne peut plus être reconstitué avec certitude. La preuve doit donc être produite au moment de l'exécution, et non déduite plus tard.

---

## Artefact de Snapshot Décisionnel

Un **Artefact de Snapshot Décisionnel** est l'enregistrement canonique de l'exécution produit par le système lui-même. Ce n'est ni un log, ni une trace, ni un rapport, ni une explication. Il constitue la déclaration institutionnelle de ce qui existait au moment de l'exécution.

Toute affirmation sur la réalité de l'exécution est donc une affirmation sur le contenu de cet artefact.

### Propriétés invariantes

Chaque artefact garantit :

- **Complétude** – toutes les entrées, le contexte, l'état de la logique et les résultats présents à l'exécution sont intégrés.
- **Intégrité temporelle** – l'horodatage de l'exécution est lié par cryptographie.
- **Immuabilité** – les artefacts sont en ajout exclusif (append-only) et non modifiables.
- **Ordonnancement** – séquençage vérifiable entre les décisions.
- **Authenticité** – preuve cryptographique de l'origine et de l'intégrité.

Si l'établissement des faits nécessite d'interroger des systèmes externes, la reconstruction a déjà commencé.

---

## Preuve vs Reconstruction

| Reconstruction | Preuve à l'exécution |
|----------------|---------------------|
| Récit assemblé après le résultat | Fait déclaré avant l'examen |
| Dépend des traces survivantes | Artefact auto-contenu |
| Soumise au biais de rétrospective | Préserve la connaissance au temps T |
| Coût croissant avec le temps | Coût fixe à l'exécution |

L'Infrastructure de Snapshot Décisionnel n'améliore pas la reconstruction. Elle la rend inutile dans son périmètre.

---

## Décisions automatisées

Les décisions automatisées sont des événements d'exécution composés d'éléments volatils :

- les données d'entrée,
- la logique de décision (règles, modèles, configurations),
- le contexte d'exécution,
- les résultats produits.

Les logs capturent des fragments de ces éléments. Ils ne préservent pas l'exécution dans son ensemble. Comme ces composantes évoluent indépendamment, la reconstruction a posteriori ne peut rétablir l'état factuel de manière fiable. La capture à l'exécution est donc la seule voie vers la certitude factuelle.

---

## Séparation de l'Exécution et de l'Évaluation

L'Infrastructure de Snapshot Décisionnel distingue :

- **Les Exécutions** – faits immuables déclarés au temps T.
- **Les Évaluations** – appréciations humaines ou institutionnelles produites ultérieurement, explicitement datées et liées.

Cette séparation empêche structurellement le biais de rétrospective en garantissant que les connaissances ultérieures ne contaminent pas les faits d'exécution.

---

## Contextes institutionnels

La preuve à l'exécution devient critique partout où les organisations doivent répondre de manière fiable à des questions sur des décisions passées, incluant :

- les revues réglementaires ou d'audit,
- les enquêtes internes et les analyses post-mortem,
- les demandes d'informations des clients ou partenaires,
- la responsabilité à long terme à travers les cycles de vie des systèmes.

L'infrastructure ne prescrit ni la gouvernance, ni l'interprétation, ni la divulgation. Elle fournit un socle factuel partagé sur lequel s'exerce le pouvoir discrétionnaire de l'institution.

---

## Impact opérationnel

L'Infrastructure de Snapshot Décisionnel ne change pas ce que les institutions choisissent de décider ou d'enregistrer. Elle change le coût et la fragilité de l'établissement des faits.

Elle réduit :

- la coordination entre équipes lors des revues,
- la dépendance aux systèmes hérités (legacy),
- le temps passé à reconstruire des états passés,
- l'incertitude lors de l'examen.

Ce qui change n'est pas l'autorité ou l'intention. C'est l'effort opérationnel.

---

## Principes et limites

L'Infrastructure de Snapshot Décisionnel est régie par les limites suivantes :

- Capture les faits, pas les explications.
- Neutre vis-à-vis de l'interprétation, du jugement et de la gouvernance.
- Indépendante du cycle de vie du système source.
- Non intrusive pour la logique de décision.
- Conçue par défaut comme immuable, vérifiable et en ajout exclusif.

L'infrastructure s'arrête là où l'interprétation commence.

---

## Disponibilité et adoption

L'Infrastructure de Snapshot Décisionnel est implémentée comme une capacité délimitée et introduite par des déploiements de validation contrôlés, intra-périmètre.

Ces déploiements ne sont pas des adoptions de plateforme. Ils existent pour permettre aux institutions d'examiner l'acceptabilité opérationnelle et institutionnelle de la preuve à l'exécution produite par leurs propres systèmes. La décision de ne pas poursuivre est considérée comme un résultat valide de cette étape.

---

## Conclusion

Les systèmes de décision automatisés ne faiblissent pas parce que les institutions sont incapables d'agir. Ils faiblissent lorsque, avec le temps, les institutions ne peuvent plus établir avec certitude ce qui a réellement été exécuté, dans quelles conditions et avec quelles informations.

La reconstruction a posteriori est structurellement incapable de fournir cette certitude. Elle assemble des récits une fois les résultats connus, en utilisant des traces qui n'ont jamais été conçues pour servir de preuve durable. L'Infrastructure de Snapshot Décisionnel restaure la continuité factuelle en garantissant que la preuve existe avant que les questions ne surgissent.

Elle ne dicte ni l'interprétation, ni le jugement. Elle préserve le terrain factuel sur lequel s'exerce la discrétion institutionnelle. La preuve n'existe qu'au moment de l'exécution. Sa préservation n'est pas un choix méthodologique, c'est une nécessité structurelle.

---

*Asplenz – Infrastructure de Snapshot Décisionnel*
