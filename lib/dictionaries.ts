export type Locale = 'fr' | 'en';

export const dict = {
  fr: {
    brand: 'Asplenz',

    // HERO
    hero_title: 'Des preuves à valeur probante pour les systèmes d’IA',
    hero_lead:
      'Les systèmes d’IA produisent ou soutiennent des décisions à forts enjeux. Lorsqu’une décision est contestée, les organisations se retrouvent souvent démunies face à l’absence de preuves opposables à l’échelle du cas individuel.',
    hero_claim:
      'Horizon explore comment rendre le comportement réel des systèmes d’IA observable, reconstructible et imputable, sans intervenir dans la génération.',
    contact_btn: 'Entrer en contact',

    // PROBLEM
    phases_title: 'Le problème',
    p1_title: 'Quand l’examen porte sur une décision précise',
    p1_text:
      'La gouvernance de l’IA repose largement sur des modèles, des métriques et des comportements agrégés. Or, un audit, un incident ou un litige ne porte pas sur une moyenne. La question posée est : "Que s’est-il passé dans ce cas précis ?"',
    p1_list_1: 'Le monitoring montre des tendances, pas des faits',
    p1_list_2: 'L’évaluation des modèles ne permet pas de reconstruire le contexte décisionnel',
    p1_list_3: 'Les logs sont fragmentés et rarement exploitables par un tiers auditeur',
    p1_result: 'Constat',
    p1_result_text:
      'La reconstruction a posteriori est lente, fragile et techniquement contestable.',

    // HORIZON
    p2_title: 'Horizon',
    p2_text:
      'Horizon repose sur une séparation stricte : la preuve décrit ce qui s’est réellement produit ; l’évaluation fournit les signaux pour éclairer le jugement humain.',
    p2_list_1: 'La preuve est factuelle, intègre et invariante',
    p2_list_2: 'L’évaluation est indicative et évolue selon les critères de l’organisation',
    p2_list_3: 'Le jugement humain conserve l’autorité finale',
    p2_list_4: 'L’artefact de preuve, et non le tableau de bord, devient l’objet de l’audit',
    p2_note:
      'Horizon n’est ni un outil de monitoring, ni un évaluateur de modèles, ni un système de contrôle à l’exécution.',

    // CTA
    cta_title: 'Engager la discussion',
    cta1_title: 'Conversation exploratoire',
    cta1_text:
      'Un échange confidentiel pour confronter vos pratiques actuelles de gouvernance aux exigences réelles de l’examen d’une décision IA individuelle.',
    cta1_deliverable: 'Objectif',
    cta1_result: 'Identifier les zones de risque et les écarts d’auditabilité',
    cta1_btn: 'Planifier un échange',

    cta2_title: 'Note de cadrage',
    cta2_text:
      'Un document de réflexion approfondi sur la distinction entre signaux (monitoring) et preuves, et sur les attentes de l’audit face aux systèmes d’IA.',
    cta2_deliverables: 'Contenu',
    cta2_result: 'Alignement conceptuel et technique',
    cta2_btn: 'Recevoir la note',

    cta3_title: 'Partenaires pilotes',
    cta3_text:
      'Pour les organisations opérant des systèmes d’IA critiques souhaitant co-définir les standards de la preuve décisionnelle exploitable.',
    cta3_btn: 'Manifester votre intérêt',

    // CONTACT
    contact_title: 'Contact',
    contact_intro: 'Pour toute demande ou échange confidentiel :',
    contact_email: 'contact@asplenz.com',
    contact_or: 'ou utilisez le formulaire ci-dessous.',
    form_name: 'Nom',
    form_email: 'Email',
    form_company: 'Entreprise',
    form_message: 'Message',
    form_send: 'Envoyer',
    form_sending: 'Envoi en cours…',
    form_sent: 'Message envoyé. Nous revenons vers vous rapidement.',
    form_error: 'Erreur lors de l’envoi',
    form_policy:
      'En soumettant ce formulaire, vous acceptez que vos informations soient utilisées pour vous recontacter.',

    footer_rights: 'Tous droits réservés.'
  },

  en: {
    brand: 'Asplenz',

    // HERO
    hero_title: 'Decision-grade evidence for AI systems',
    hero_lead:
      'AI systems increasingly make or support high-stakes decisions. When a decision is challenged, organizations often find themselves without defensible evidence at the individual case level.',
    hero_claim:
      'Horizon explores how AI behavior can be made observable, reconstructible, and accountable without intervening in generation.',
    contact_btn: 'Get in touch',

    // PROBLEM
    phases_title: 'The problem',
    p1_title: 'When scrutiny focuses on a single decision',
    p1_text:
      'Most AI governance practices focus on models, metrics, and aggregate behavior. Audits, incidents, and disputes don’t ask for averages. They ask: "What happened here?"',
    p1_list_1: 'Monitoring shows trends, not facts',
    p1_list_2: 'Model evaluation cannot reconstruct the specific decision context',
    p1_list_3: 'Logs are fragmented and rarely audit-ready for third parties',
    p1_result: 'Reality',
    p1_result_text:
      'After-the-fact reconstruction is slow, fragile, and technically contested.',

    // HORIZON
    p2_title: 'Horizon',
    p2_text:
      'Horizon is built on a clear separation: evidence describes what actually happened; evaluation provides signals to support human judgment.',
    p2_list_1: 'Evidence is factual, untampered, and invariant',
    p2_list_2: 'Evaluation is indicative and evolves with organizational criteria',
    p2_list_3: 'Human judgment remains the final authority',
    p2_list_4: 'The evidence artefact, not the dashboard, becomes the object of audit',
    p2_note:
      'Horizon is not a monitoring tool, a model evaluator, or a runtime control system.',

    // CTA
    cta_title: 'Engage',
    cta1_title: 'Exploratory conversation',
    cta1_text:
      'A confidential discussion to compare current governance practices with what examining an individual AI decision actually requires.',
    cta1_deliverable: 'Goal',
    cta1_result: 'Identify risk areas and auditability gaps',
    cta1_btn: 'Book a conversation',

    cta2_title: 'Positioning note',
    cta2_text:
      'An in-depth framing document on the difference between signals (monitoring) and evidence, and what audit truly expects from AI systems.',
    cta2_deliverables: 'Content',
    cta2_result: 'Conceptual and technical alignment',
    cta2_btn: 'Request the note',

    cta3_title: 'Design partners',
    cta3_text:
      'For organizations operating high-stakes AI systems and interested in shaping what decision-grade evidence should mean in practice.',
    cta3_btn: 'Express interest',

    // CONTACT
    contact_title: 'Contact',
    contact_intro: 'For any request or confidential discussion:',
    contact_email: 'contact@asplenz.com',
    contact_or: 'or use the form below.',
    form_name: 'Name',
    form_email: 'Email',
    form_company: 'Company',
    form_message: 'Message',
    form_send: 'Send',
    form_sending: 'Sending…',
    form_sent: 'Message sent. We’ll get back to you shortly.',
    form_error: 'Error while sending',
    form_policy:
      'By submitting this form, you agree to be contacted regarding your request.',

    footer_rights: 'All rights reserved.'
  }
} as const;