# Reference Conceptuelle

## Infrastructure de Snapshot Decisionnel

---

Ce document fournit une definition formelle et explicite de l'Infrastructure de Snapshot Decisionnel.

Il est destine aux institutions, aux equipes juridiques, aux auditeurs et aux architectes de systemes qui exigent des limites ontologiques precises, des definitions invariantes et un usage non ambigu des termes lies a la preuve a l'execution.

Ce document n'est pas une introduction. Il ne vise ni la concision ni la promotion.

---

## La preuve avant les questions

L'**Infrastructure de Snapshot Decisionnel** etablit une couche de preuve a l'execution pour les systemes de decision automatises et semi-automatises operant dans des contextes institutionnels. Son objectif est unique : preserver des etats factuels immuables au moment exact ou les decisions deviennent irreversibles, independamment de l'evolution ulterieure du systeme.

Cette infrastructure n'explique, ne justifie, ni n'evalue les decisions. Elle preserve ce qui a ete execute.

---

## Resume operationnel

Les organisations s'appuient de plus en plus sur des systemes de decision dont les resultats entrainent des consequences operationnelles, juridiques, financieres et reputationnelles durables. Ces systemes evoluent continuellement : les modeles sont re-entraines, les regles ajustees, les sources de donnees modifiees, les infrastructures refondues et les equipes renouvelees. Pourtant, les decisions produites restent souvent examinables bien apres que les conditions techniques ayant preside a leur creation ont disparu.

Dans la plupart des organisations, l'etat factuel des decisions passees n'est pas preserve au moment de l'execution. Lorsque des questions surgissent, les institutions tentent de reconstruire ce qui s'est passe a l'aide de logs, de traces, de referentiels de configuration, de tableaux de bord et de souvenirs humains. Ce processus est intrinsequement fragile, couteux et incertain. Il produit des recits plutot que des faits.

L'Infrastructure de Snapshot Decisionnel comble cette lacune structurelle. Elle introduit une couche de preuve a l'execution dont le seul but est de capturer, au point de non-retour, l'etat factuel complet d'une decision et de le preserver sous la forme d'un artefact immuable et auto-contenu. Cet artefact existe independamment de l'evolution future du systeme qui l'a produit.

---

## Enonce du probleme

### Absence structurelle de faits a l'execution

Les systemes de decision automatises ne preservent generalement pas leur propre realite au moment de l'execution. A l'instant ou une decision devient irreversible, le systeme consomme des entrees, applique une logique, opere sous une configuration concrete et produit un resultat. Cet etat composite n'existe que de maniere transitoire.

Apres l'execution, le systeme conserve des traces : logs, metriques, alertes, referentiels de configuration, etats de base de donnees. Ces traces n'ont pas ete concues pour constituer un enregistrement factuel complet et durable de l'execution. Elles sont partielles, distribuees et dependantes de la survie et de la stabilite de systemes en constante evolution.

Lorsque les institutions doivent plus tard etablir ce qui s'est produit, elles doivent reconstruire cet etat a posteriori. Cette exigence ne decoule pas d'une mauvaise discipline technique ou d'une defaillance organisationnelle. Elle provient d'une inadequation structurelle entre ce qui est necessaire pour etablir les faits et ce que les systemes d'execution sont concus pour conserver.

La reconstruction echoue donc de maniere structurelle, et non contingente.

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

### Objet canonique

L'**Artefact de Snapshot Decisionnel** est le seul objet probant a l'execution defini dans ce document. Toutes les references aux faits ou a la preuve se rapportent exclusivement aux proprietes de cet artefact.

L'artefact est produit par le systeme decisionnel lui-meme au moment ou la decision devient irreversible. Il n'est pas derive de logs ou d'observations externes.

### Proprietes invariantes

Un Artefact de Snapshot Decisionnel garantit les invariants suivants, qui ne peuvent etre modifies apres creation :

- **Completude** - toutes les entrees, l'etat de la logique, le contexte d'execution et les resultats presents a l'execution sont integres.
- **Integrite temporelle** - l'horodatage de l'execution est lie cryptographiquement a l'artefact.
- **Immuabilite** - l'artefact ne peut etre ni modifie, ni amende, ni supprime.
- **Ordonnancement** - la position de l'artefact dans la sequence d'execution est explicite et verifiable.
- **Authenticite** - l'origine et l'integrite de l'artefact sont prouvables par cryptographie.

Tout enregistrement necessitant des systemes externes pour etablir les faits d'execution n'est pas un Artefact de Snapshot Decisionnel et ne constitue pas une preuve a l'execution.

---

## Preuve vs Reconstruction

### Distinction ontologique

Dans ce document, la **preuve** designe exclusivement les faits d'execution incarnes dans un Artefact de Snapshot Decisionnel. La preuve n'existe que si elle a ete produite au moment de l'execution.

La **reconstruction** designe tout processus a posteriori qui tente de deduire les etats d'execution passes en utilisant des traces survivantes, de l'interpretation ou des connaissances retrospectives. Ces deux notions ne sont pas interchangeables.

### Limites structurelles de la reconstruction

La reconstruction depend necessairement d'elements qui evoluent ou disparaissent :

- configurations mutables,
- modeles re-entraines,
- sources de donnees modifiees,
- rotation des logs,
- souvenirs humains.

L'Infrastructure de Snapshot Decisionnel n'ameliore pas la reconstruction. Elle la rend superflue dans son perimetre.

| Reconstruction | Preuve a l'execution |
|----------------|---------------------|
| Recit assemble apres le resultat | Fait declare avant l'examen |
| Depend de traces survivantes | Artefact auto-contenu |
| Soumise au biais de retrospective | Preserve la connaissance au temps T |
| Cout croissant avec le temps | Cout fixe a l'execution |

---

## Separation de l'Execution et de l'Evaluation

L'Infrastructure de Snapshot Decisionnel distingue :

- **Les Executions** - faits immuables declares au temps T.
- **Les Evaluations** - appreciations humaines ou institutionnelles produites ulterieurement, explicitement datees et liees.

Cette separation elimine structurellement le biais de retrospective en empechant les connaissances ulterieures de contaminer les faits d'execution.

---

## Principes et Limites

### Principe : les faits n'existent qu'en tant qu'artefacts

Dans cette infrastructure, un fait n'est pas une notion abstraite. Un fait n'existe qu'en tant qu'il est incarne dans un Artefact de Snapshot Decisionnel. Les affirmations sur la realite de l'execution sont des affirmations sur le contenu de l'artefact.

### Principe : separation de l'execution et de l'interpretation

L'Infrastructure de Snapshot Decisionnel enregistre les executions. L'interpretation, l'evaluation, le jugement et la communication interviennent apres l'execution et restent des responsabilites institutionnelles.

### Limite : non-revendications

Cette infrastructure ne pretend explicitement pas :

- expliquer les decisions ou leur logique,
- evaluer la justesse ou la conformite,
- attribuer une responsabilite ou une faute,
- remplacer les processus d'audit ou de gouvernance.

Elle preserve les faits d'execution, et rien d'autre.

---

## Conclusion

La reconstruction a posteriori est structurellement incapable de fournir une certitude factuelle durable. Elle assemble des recits une fois les resultats connus, en utilisant des traces qui n'ont jamais ete concues pour servir de preuve. L'Infrastructure de Snapshot Decisionnel restaure la continuite factuelle en garantissant que la preuve existe avant que les questions ne surgissent.

Elle ne dicte ni l'interpretation, ni le jugement. Elle preserve le terrain factuel sur lequel s'exerce la discretion institutionnelle. La preuve n'existe qu'au moment de l'execution. Sa preservation n'est pas un choix methodologique, c'est une necessite structurelle.

---

*Asplenz - Infrastructure de Snapshot Decisionnel*
