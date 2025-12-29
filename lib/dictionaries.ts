export type Locale = 'fr' | 'en';

export const dict = {
  fr: {
    brand: 'Asplenz',

    // HERO
    hero_title: 'Des preuves à valeur probante pour les systèmes d\'IA',
    hero_lead:
      'Face à un examen réglementaire portant sur une décision IA spécifique, pouvez-vous fournir les faits qui prouvent que la gouvernance a été respectée ?',
    hero_claim:
      'Horizon fournit des preuves conçues pour l\'audit, la défense juridique et la conformité réglementaire.',
    contact_btn: 'Entrer en contact',

    // PROBLEM
    phases_title: 'Le problème',
    p1_title: 'Quand une décision est contestée',
    p1_text:
      'La gouvernance de l\'IA se concentre généralement sur des métriques agrégées et la documentation des politiques. Mais lorsqu\'une décision est contestée par les régulateurs, les équipes juridiques ou l\'audit interne, les organisations ont besoin de preuves au niveau du cas individuel.',
    p1_list_1: 'Quel input a été fourni à l\'AI pour CETTE décision ?',
    p1_list_2: 'Quelles règles de gouvernance ont été évaluées pour CE cas ?',
    p1_list_3: 'Pouvez-vous reconstruire ce que l\'AI a produit ?',
    p1_result: 'Réalité',
    p1_result_text:
      'Les outils d\'observabilité traditionnels fournissent des logs et des tableaux de bord. Ils ne fournissent pas de preuves juridiquement opposables.',

    // HORIZON
    p2_title: 'Horizon',
    p2_text:
      'Horizon sépare la preuve (enregistrements factuels et immuables) de l\'évaluation (signaux interprétatifs).',
    p2_list_1: 'Les enregistrements de preuve sont conçus pour la vérification par des tiers',
    p2_list_2: 'Les enregistrements de preuve sont conçus pour les exigences institutionnelles',
    p2_list_3: 'Le jugement humain conserve l\'autorité finale',
    p2_list_4: 'Horizon fournit des preuves à valeur probante lorsque les décisions sont contestées',
    p2_note:
      'Horizon n\'est ni un outil de monitoring, ni un évaluateur de modèles.',

    // REGULATORY CONTEXT
    regulatory_title: 'Contexte réglementaire',
    regulatory_intro:
      'Les institutions financières opérant sous le règlement DORA doivent démontrer la gouvernance des systèmes ICT, y compris les systèmes d\'IA utilisés pour le scoring crédit, la détection de fraude et la gestion des risques.',
    reg1_title: 'DORA (Supervision continue)',
    reg1_text:
      'Les outils DORA génériques couvrent la résilience des infrastructures. Ils ne fournissent pas de traces d\'audit pour les décisions IA individuelles. Horizon complète votre stack de conformité avec des preuves pour les systèmes AI.',
    reg2_title: 'EU AI Act (Août 2026)',
    reg2_text:
      'Les organisations déployant des systèmes d\'IA à haut risque doivent se préparer pour le règlement européen sur l\'IA (effectif août 2026), qui exige la conservation d\'enregistrements au niveau des cas individuels.',
    regulatory_note:
      'Il ne s\'agit pas de conformité dictée par des échéances. Il s\'agit de construire des preuves de gouvernance durables qui résistent à l\'examen réglementaire, aujourd\'hui et à l\'avenir.',

    // CTA
    cta_title: 'Engager la discussion',
    cta1_title: 'Planifier une conversation',
    cta1_text:
      'Horizon est conçu pour les entreprises opérant des systèmes d\'IA à forts enjeux dans des secteurs réglementés.',
    cta1_deliverable: '30 minutes',
    cta1_result: 'discussion exploratoire',
    cta1_btn: 'Planifier une conversation',

    cta2_title: 'Aperçu technique',
    cta2_text:
      'Demandez la documentation détaillée sur la manière dont Horizon fournit des preuves conçues pour l\'audit.',
    cta2_deliverables: 'Accès par email',
    cta2_result: 'aperçu technique',
    cta2_btn: 'Demander l\'aperçu',

    cta3_title: 'Programme Design Partner',
    cta3_text:
      'Pour les praticiens institutionnels souhaitant définir ce que devrait signifier une preuve décisionnelle exploitable.',
    cta3_btn: 'Se renseigner sur le programme Design Partner',

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
    form_error: 'Erreur lors de l\'envoi',
    form_policy:
      'En soumettant ce formulaire, vous acceptez que vos informations soient utilisées pour vous recontacter.',

    footer_rights: 'Tous droits réservés.'
  },

  en: {
    brand: 'Asplenz',

    // HERO
    hero_title: 'Decision-grade evidence for AI systems',
    hero_lead:
      'When regulatory examination focuses on a specific AI decision, can you provide the facts that prove governance was followed?',
    hero_claim:
      'Horizon provides evidence designed for audit, legal defense, and regulatory compliance.',
    contact_btn: 'Get in touch',

    // PROBLEM
    phases_title: 'The problem',
    p1_title: 'When a decision is challenged',
    p1_text:
      'AI governance typically focuses on aggregate metrics and policy documentation. But when a decision is challenged by regulators, legal teams, or internal audit, organizations need case-level evidence.',
    p1_list_1: 'What input was provided to the AI for THIS decision?',
    p1_list_2: 'Which governance rules were evaluated for THIS case?',
    p1_list_3: 'Can you reconstruct what the AI produced?',
    p1_result: 'Reality',
    p1_result_text:
      'Traditional observability tools provide logs and dashboards. They don\'t provide legally defensible evidence.',

    // HORIZON
    p2_title: 'Horizon',
    p2_text:
      'Horizon separates evidence (factual, immutable records) from evaluation (interpretive signals).',
    p2_list_1: 'Evidence records are designed for third-party verification',
    p2_list_2: 'Evidence records are designed for institutional requirements',
    p2_list_3: 'Human judgment remains the final authority',
    p2_list_4: 'Horizon provides audit-grade evidence when decisions are challenged',
    p2_note:
      'Horizon is not a monitoring tool or model evaluator.',

    // REGULATORY CONTEXT
    regulatory_title: 'Regulatory context',
    regulatory_intro:
      'Financial institutions operating under DORA must demonstrate governance of ICT systems, including AI systems used for credit scoring, fraud detection, and risk management.',
    reg1_title: 'DORA (Ongoing supervision)',
    reg1_text:
      'Generic DORA compliance tools address infrastructure resilience. They don\'t provide audit trails for individual AI decisions. Horizon completes your compliance stack with evidence for AI systems.',
    reg2_title: 'EU AI Act (August 2026)',
    reg2_text:
      'Organizations deploying high-risk AI systems must prepare for the EU AI Act (effective August 2026), which requires case-level record-keeping.',
    regulatory_note:
      'This isn\'t about deadline-driven compliance. It\'s about building durable governance evidence that survives regulatory examination, today and in the future.',

    // CTA
    cta_title: 'Engage',
    cta1_title: 'Book a conversation',
    cta1_text:
      'Horizon is designed for enterprises operating high-stakes AI systems in regulated industries.',
    cta1_deliverable: '30-minute',
    cta1_result: 'exploratory discussion',
    cta1_btn: 'Book conversation',

    cta2_title: 'Technical overview',
    cta2_text:
      'Request detailed documentation on how Horizon provides evidence designed for audit.',
    cta2_deliverables: 'Email-gated',
    cta2_result: 'technical overview',
    cta2_btn: 'Request overview',

    cta3_title: 'Design partner inquiry',
    cta3_text:
      'For institutional practitioners interested in shaping what decision-grade evidence should mean in practice.',
    cta3_btn: 'Inquire about Design Partner program',

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
    form_sent: 'Message sent. We\'ll get back to you shortly.',
    form_error: 'Error while sending',
    form_policy:
      'By submitting this form, you agree to be contacted regarding your request.',

    footer_rights: 'All rights reserved.'
  }
} as const;
