# Infrastructure de Snapshot Decisionnel

## Foundational Brief

**La preuve avant les questions**

---

## Introduction

Ce livre blanc presente les fondations operationnelles de la **preuve a l'execution** pour les systemes de decision automatises et semi-automatises operant dans des contextes institutionnels.

Il s'adresse aux organisations qui doivent etablir, avec le temps, ce qui a reellement ete execute lorsque les decisions deviennent irreversibles - independamment de l'evolution ulterieure des systemes, des modeles, des donnees ou des equipes.

Ce document est volontairement non promotionnel. Il se concentre sur la preservation factuelle plutot que sur l'explication, la justification ou l'evaluation.

---

## Resume operationnel

Les organisations s'appuient de plus en plus sur des systemes de decision dont les resultats entrainent des consequences operationnelles, juridiques, financieres et reputationnelles durables. Ces systemes evoluent continuellement : les modeles sont re-entraines, les regles ajustees, les sources de donnees modifiees, les infrastructures refondues et les equipes renouvelees. Pourtant, les decisions produites restent souvent examinables bien apres que les conditions techniques ayant preside a leur creation ont disparu.

Dans la plupart des organisations, l'etat factuel des decisions passees n'est pas preserve au moment de l'execution. Lorsque des questions surgissent, les institutions tentent de reconstruire ce qui s'est passe a l'aide de logs, de traces, de referentiels de configuration, de tableaux de bord et de souvenirs humains. Ce processus est intrinsequement fragile, couteux et incertain. Il produit des recits plutot que des faits.

L'Infrastructure de Snapshot Decisionnel comble cette lacune structurelle. Elle introduit une couche de preuve a l'execution dont le seul but est de capturer, au point de non-retour, l'etat factuel complet d'une decision et de le preserver sous la forme d'un artefact immuable et auto-contenu. Cet artefact existe independamment de l'evolution future du systeme qui l'a produit.

L'infrastructure n'explique, ne justifie, ni n'evalue les decisions. Elle preserve ce qui a ete execute. Ce faisant, elle reduit l'effort operationnel, limite l'incertitude et restaure une autorite factuelle durable sans alterer le controle institutionnel ou la gouvernance.

---

## Enonce du probleme

### La reconstruction n'est pas une preuve

La plupart des systemes de decision ne preservent pas les etats d'execution factuels. Ils laissent derriere eux des logs, des metriques et des traces concus pour l'observabilite, et non pour la certitude probante. Lorsque les decisions sont contestees plus tard, les organisations reconstruisent des recits sous des contraintes qui n'existaient pas au moment de l'execution.

Cela conduit a :

- des bases factuelles fragmentees et incompletes,
- des divergences entre les equipes et les interpretations,
- un biais de retrospective integre aux explications,
- une augmentation exponentielle des couts operationnels au fil du temps.

Ces defaillances sont structurelles. Elles decoulent d'une inadequation entre ce que les systemes d'execution sont concus pour conserver et ce dont les institutions ont besoin plus tard pour etablir les faits.

---

## Principe central

### Capturer au point de non-retour

Une decision devient un fait lorsqu'elle est executee. A cet instant :

- des entrees specifiques sont consommees,
- une logique specifique est appliquee,
- dans un contexte d'execution specifique,
- produisant un resultat specifique.

Une fois ce moment passe, l'etat factuel d'origine ne peut plus etre reconstitue avec certitude. La preuve doit donc etre produite au moment de l'execution, et non deduite plus tard.

---

## Artefact de Snapshot Decisionnel

Un **Artefact de Snapshot Decisionnel** est l'enregistrement canonique de l'execution produit par le systeme lui-meme. Ce n'est ni un log, ni une trace, ni un rapport, ni une explication. Il constitue la declaration institutionnelle de ce qui existait au moment de l'execution.

Toute affirmation sur la realite de l'execution est donc une affirmation sur le contenu de cet artefact.

### Proprietes invariantes

Chaque artefact garantit :

- **Completude** - toutes les entrees, le contexte, l'etat de la logique et les resultats presents a l'execution sont integres.
- **Integrite temporelle** - l'horodatage de l'execution est lie par cryptographie.
- **Immuabilite** - les artefacts sont en ajout exclusif (append-only) et non modifiables.
- **Ordonnancement** - sequencage verifiable entre les decisions.
- **Authenticite** - preuve cryptographique de l'origine et de l'integrite.

Si l'etablissement des faits necessite d'interroger des systemes externes, la reconstruction a deja commence.

---

## Preuve vs Reconstruction

| Reconstruction | Preuve a l'execution |
|----------------|---------------------|
| Recit assemble apres le resultat | Fait declare avant l'examen |
| Depend des traces survivantes | Artefact auto-contenu |
| Soumise au biais de retrospective | Preserve la connaissance au temps T |
| Cout croissant avec le temps | Cout fixe a l'execution |

L'Infrastructure de Snapshot Decisionnel n'ameliore pas la reconstruction. Elle la rend inutile dans son perimetre.

---

## Decisions automatisees

Les decisions automatisees sont des evenements d'execution composes d'elements volatils :

- les donnees d'entree,
- la logique de decision (regles, modeles, configurations),
- le contexte d'execution,
- les resultats produits.

Les logs capturent des fragments de ces elements. Ils ne preservent pas l'execution dans son ensemble. Comme ces composantes evoluent independamment, la reconstruction a posteriori ne peut retablir l'etat factuel de maniere fiable. La capture a l'execution est donc la seule voie vers la certitude factuelle.

---

## Separation de l'Execution et de l'Evaluation

L'Infrastructure de Snapshot Decisionnel distingue :

- **Les Executions** - faits immuables declares au temps T.
- **Les Evaluations** - appreciations humaines ou institutionnelles produites ulterieurement, explicitement datees et liees.

Cette separation empeche structurellement le biais de retrospective en garantissant que les connaissances ulterieures ne contaminent pas les faits d'execution.

---

## Contextes institutionnels

La preuve a l'execution devient critique partout ou les organisations doivent repondre de maniere fiable a des questions sur des decisions passees, incluant :

- les revues reglementaires ou d'audit,
- les enquetes internes et les analyses post-mortem,
- les demandes d'informations des clients ou partenaires,
- la responsabilite a long terme a travers les cycles de vie des systemes.

L'infrastructure ne prescrit ni la gouvernance, ni l'interpretation, ni la divulgation. Elle fournit un socle factuel partage sur lequel s'exerce le pouvoir discretionnaire de l'institution.

---

## Impact operationnel

L'Infrastructure de Snapshot Decisionnel ne change pas ce que les institutions choisissent de decider ou d'enregistrer. Elle change le cout et la fragilite de l'etablissement des faits.

Elle reduit :

- la coordination entre equipes lors des revues,
- la dependance aux systemes herites (legacy),
- le temps passe a reconstruire des etats passes,
- l'incertitude lors de l'examen.

Ce qui change n'est pas l'autorite ou l'intention. C'est l'effort operationnel.

---

## Principes et limites

L'Infrastructure de Snapshot Decisionnel est regie par les limites suivantes :

- Capture les faits, pas les explications.
- Neutre vis-a-vis de l'interpretation, du jugement et de la gouvernance.
- Independante du cycle de vie du systeme source.
- Non intrusive pour la logique de decision.
- Concue par defaut comme immuable, verifiable et en ajout exclusif.

L'infrastructure s'arrete la ou l'interpretation commence.

---

## Disponibilite et adoption

L'Infrastructure de Snapshot Decisionnel est implementee comme une capacite delimitee et introduite par des deploiements de validation controles, intra-perimetre.

Ces deploiements ne sont pas des adoptions de plateforme. Ils existent pour permettre aux institutions d'examiner l'acceptabilite operationnelle et institutionnelle de la preuve a l'execution produite par leurs propres systemes. La decision de ne pas poursuivre est consideree comme un resultat valide de cette etape.

---

## Conclusion

Les systemes de decision automatises ne faiblissent pas parce que les institutions sont incapables d'agir. Ils faiblissent lorsque, avec le temps, les institutions ne peuvent plus etablir avec certitude ce qui a reellement ete execute, dans quelles conditions et avec quelles informations.

La reconstruction a posteriori est structurellement incapable de fournir cette certitude. Elle assemble des recits une fois les resultats connus, en utilisant des traces qui n'ont jamais ete concues pour servir de preuve durable. L'Infrastructure de Snapshot Decisionnel restaure la continuite factuelle en garantissant que la preuve existe avant que les questions ne surgissent.

Elle ne dicte ni l'interpretation, ni le jugement. Elle preserve le terrain factuel sur lequel s'exerce la discretion institutionnelle. La preuve n'existe qu'au moment de l'execution. Sa preservation n'est pas un choix methodologique, c'est une necessite structurelle.

---

*Asplenz - Infrastructure de Snapshot Decisionnel*
