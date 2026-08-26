---
title: Progressive context
description: Un composant de la boucle agentique. Le caller envoie ce qu'il a, Knowledge lui dit ce qu'il manque pour atteindre un verdict. Les policies changent sans redéployer les consumers.
locale: fr
kicker: Produit - Progressive context
---

Les systèmes de décision traditionnels exigent que l'application appelante sache d'entrée quelles informations une décision peut requérir. Les applications tendent donc à collecter un set prédéfini de champs avant de soumettre un cas, même quand seul un sous-ensemble est pertinent pour la décision en cours. À mesure que les rules évoluent, ces exigences de data peuvent aussi changer, créant des dépendances entre la logique policy et les applications qui la consomment.

Progressive Context retire cette exigence d'entrée. Une décision peut démarrer avec l'information déjà disponible et demander progressivement seulement le contexte additionnel nécessaire au cas spécifique, jusqu'à ce qu'une décision puisse être atteinte.

Deux propriétés de direction-de-dépendance en découlent :

**Direction 1 - le caller envoie ce qu'il a, Knowledge lui dit ce qu'il manque.** Au lieu que l'agent envoie le contexte complet d'entrée (et échoue quand un champ manque ou est faux), l'agent itère : `/resolve` retourne `required_context` avec schema + allowed_values + format pour chaque champ manquant, l'agent l'acquiert, re-consulte, jusqu'au verdict.

**Direction 2 - inversion de dépendance.** L'agent n'a pas besoin de connaître le schema policy d'avance. Il envoie ce qu'il a (potentiellement rien), Knowledge dicte les champs requis suivants. **Quand les policies changent - nouveau champ, champ renommé, nouvelle condition requise - l'agent s'auto-adapte.** Zéro redéploiement consumer.

## Le contrat API

```
POST /knowledge/v1/resolve
{
  "action_type": "sp_offer_eligibility",
  "context": {
    "product.complexity": { "value": "highly_complex", "source": "product_master" }
  }
}
```

Réponse - INCOMPLETE :

```
{
  "operation_status": "incomplete",
  "required_context": [
    {
      "field": "client.classification",
      "reason": "required by rul-sp-elig-highly-complex",
      "type": "enum",
      "allowed_values": ["retail", "professional", "accredited"]
    }
  ]
}
```

Réponse - COMPLETE (contexte suffisant) :

```
{
  "operation_status": "complete",
  "verdict": "blocked",
  "cited_rules": [...],
  "consultation_id": "cns-...",
  "normative_hash": "sha256:...",
  "signed_verdict": "eyJhbGc..."
}
```

## D'où viennent les champs

Knowledge vous dit *ce qui* est nécessaire. Votre caller décide *comment* l'obtenir : déjà disponible dans le customer record ou le CRM, calculé ailleurs dans les propres systèmes du caller, retourné par un provider de vérification ou de screening, extrait par un agent IA d'un document ou d'une conversation existante, ou réellement inconnu, auquel cas demander à l'utilisateur.

**Knowledge détermine ce dont la policy a besoin. Le caller détermine comment l'obtenir.**

## Algorithme à deux étapes

Sous le capot, `/resolve` exécute l'algorithme à deux étapes de `docs/specs/knowledge-resolve-spec-v1.md` :

**Étape 1 - narrowing de scope.** Quelles règles s'appliquent ne peut pas encore être déterminé parce que des champs de scope-narrowing manquent. Retourne les champs qui feraient passer des rules de `undetermined` à `applicable` (parallel minimum, tous à la fois).

**Étape 2 - évaluation de condition.** Les rules applicables sont connues, mais les inputs de condition (`{field, op, threshold}`) manquent. Retourne ceux-là.

Le caller voit une liste plate d'items `required_context` ; les deux étapes sont transparentes. Chaque item porte des metadata schema (`type`, `allowed_values`, `min`, `max`, `format`, `description`) sourcées du `scope_schema` du tenant, pour que le caller construise des queries valides sans lookup séparé.

## Pourquoi l'inversion de dépendance change le déploiement

Exemple concret. Aujourd'hui le caller envoie `[jurisdiction, client_class, asset_class, ticker, amount]`. Compliance ajoute une nouvelle règle qui a besoin de `beneficial_owner_verified`. Avec un caller hardcodé, le nouveau champ n'est pas envoyé, la règle ne peut pas évaluer, le verdict est faux ou partiel.

Avec `required_context`, le flow devient :

1. Le caller envoie ce qu'il a.
2. Knowledge retourne `"missing: beneficial_owner_verified"` avec schema `{type: boolean, source_requirement: verified}`.
3. Le caller regarde son **registry de fetchers** pour ce champ.
4. Le fetcher appelle le vendor KYC, acquiert la valeur.
5. Le caller re-consulte avec le contexte enrichi.
6. Le verdict est atteint.

**Zéro redéploiement caller.** Le seul changement est un ajout d'une ligne au registry de fetchers le jour où l'équipe compliance décide de requérir le nouveau champ.

Le registry peut être aussi simple qu'un dict Python :

```python
FETCHERS = {
    "beneficial_owner_verified": kyc_vendor.check,
    "portfolio_exposure_pct":    portfolio_service.exposure_of,
    "risk_score":                risk_engine.score_of,
    # ...
}

def acquire(field, context):
    return FETCHERS[field](context)
```

Ou lu depuis un fichier de config, ou découvert via un endpoint `/v1/field-fetchers` hosté par Knowledge (roadmap - voir `FIELD-FETCHER-REGISTRY` dans `docs/engineering/backlog-summary.md`).

## Provenance des facts

Chaque champ de contexte est un objet `Fact` qui porte la valeur brute plus la provenance :

```
{
  "value": "verified",
  "source": "IDV_vendor",
  "verification_status": "verified",
  "confidence": 0.94
}
```

Les rules peuvent exiger un `verification_status` minimum ou restreindre les `acceptable_sources`. Ça veut dire qu'une règle peut exprimer *"l'identité doit être vérifiée par un vendor KYC, pas assertée par l'utilisateur"* de façon déclarative, plutôt que comme plumbing côté caller.

Pour les flows AI-driven où le même fact peut venir d'une extraction LLM, d'un système de record ou de l'utilisateur directement, cette distinction est ce qui sépare un input probabiliste d'un input autoritaire.

## Ce que ça change au niveau organisationnel

- **Les équipes compliance et product cessent de se bloquer.** Compliance ajoute un nouveau champ requis à une règle ; l'équipe du caller ajoute une entrée d'une ligne dans le fetcher. Pas de release coordonnée.
- **Onboarder de nouveaux agents devient moins cher.** Un nouveau agent n'a pas besoin de connaître le schema complet de contexte du tenant. Il probe avec ce qu'il a, Knowledge lui dit ce qu'il faut acquérir.
- **La dépréciation de champs est graceful.** Compliance retire un champ d'une règle ; le caller continue de l'envoyer (inoffensif) ou retire l'entrée de fetcher (inoffensif aussi).

## Related

| À lire ensuite | Pourquoi |
|---|---|
| [Qu'est-ce que Knowledge ?](/docs/what-is-knowledge) | Le modèle mental complet de `/resolve` avec un exemple travaillé |
| [Enforcement](/product/enforcement) | Chaque verdict, complet ou via progressive resolution, peut être signé |
| [Auditability](/product/auditability) | La Consultation enregistre le chemin de progressive-resolution |
