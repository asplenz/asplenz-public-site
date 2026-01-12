import { NavigationSection, ReadingPathItem, Language } from './types';

/**
 * Navigation structure following the menu organization
 */
export const navigationSections: NavigationSection[] = [
  {
    title: {
      en: 'I. INFRASTRUCTURE',
      fr: 'I. INFRASTRUCTURE',
    },
    items: [
      {
        slug: 'evidence-infrastructure',
        title: {
          en: 'Evidence Infrastructure',
          fr: 'Infrastructure de preuve',
        },
      },
      {
        slug: 'evidence-vs-reconstruction',
        title: {
          en: 'Evidence vs Reconstruction',
          fr: 'Preuve vs Reconstruction',
        },
      },
      {
        slug: 'illustrative-scenario',
        title: {
          en: 'Illustrative scenario',
          fr: 'Scénario illustratif',
        },
      },
    ],
  },
  {
    title: {
      en: 'II. MECHANISM: HORIZON',
      fr: 'II. MÉCANISME : HORIZON',
    },
    items: [
      {
        slug: 'horizon-technical-capabilities',
        title: {
          en: 'Horizon: Technical Capabilities',
          fr: 'Horizon: Capacités Techniques',
        },
      },
      {
        slug: 'automated-decisions',
        title: {
          en: 'Automated Decisions',
          fr: 'Décisions Automatisées',
        },
      },
      {
        slug: 'institutional-contexts',
        title: {
          en: 'Institutional Contexts',
          fr: 'Contextes Institutionnels',
        },
      },
    ],
  },
  {
    title: {
      en: 'III. GOVERNANCE',
      fr: 'III. GOUVERNANCE',
    },
    items: [
      {
        slug: 'principles-boundaries',
        title: {
          en: 'Principles & Boundaries',
          fr: 'Principes & Limites',
        },
      },
      {
        slug: 'clarifications',
        title: {
          en: 'Clarifications',
          fr: 'Clarifications',
        },
      },
    ],
  },
  {
    title: {
      en: 'IV. ENGAGEMENT',
      fr: 'IV. ENGAGEMENT',
    },
    items: [
      {
        slug: 'horizon-availability',
        title: {
          en: 'Horizon Availability',
          fr: 'Disponibilité de Horizon',
        },
      },
      {
        slug: 'contact',
        title: {
          en: 'Engagement & Contact',
          fr: 'Engagement & Contact',
        },
      },
    ],
  },
];

/**
 * Reading path order
 */
export const readingPath: ReadingPathItem[] = [
  {
    slug: 'home',
    title: { en: 'Home', fr: 'Accueil' },
  },
  {
    slug: 'evidence-infrastructure',
    title: { en: 'Evidence Infrastructure', fr: 'Infrastructure de preuve' },
  },
  {
    slug: 'evidence-vs-reconstruction',
    title: { en: 'Evidence vs Reconstruction', fr: 'Preuve vs Reconstruction' },
  },
  {
    slug: 'illustrative-scenario',
    title: { en: 'Illustrative scenario', fr: 'Scénario illustratif' },
  },
  {
    slug: 'horizon-technical-capabilities',
    title: { en: 'Horizon: Technical Capabilities', fr: 'Horizon: Capacités Techniques' },
  },
  {
    slug: 'automated-decisions',
    title: { en: 'Automated Decisions', fr: 'Décisions Automatisées' },
  },
  {
    slug: 'institutional-contexts',
    title: { en: 'Institutional Contexts', fr: 'Contextes Institutionnels' },
  },
  {
    slug: 'principles-boundaries',
    title: { en: 'Principles & Boundaries', fr: 'Principes & Limites' },
  },
  {
    slug: 'clarifications',
    title: { en: 'Clarifications', fr: 'Clarifications' },
  },
  {
    slug: 'horizon-availability',
    title: { en: 'Horizon Availability', fr: 'Disponibilité de Horizon' },
  },
  {
    slug: 'contact',
    title: { en: 'Engagement & Contact', fr: 'Engagement & Contact' },
  },
];

/**
 * Get next page in reading path
 */
export function getNextInReadingPath(
  currentSlug: string
): ReadingPathItem | null {
  const currentIndex = readingPath.findIndex(item => item.slug === currentSlug);
  if (currentIndex === -1 || currentIndex === readingPath.length - 1) {
    return null;
  }
  return readingPath[currentIndex + 1];
}

/**
 * Get all navigation items flattened
 */
export function getAllNavigationItems() {
  return navigationSections.flatMap(section => section.items);
}

/**
 * Find navigation item by slug
 */
export function getNavigationItemBySlug(slug: string) {
  return getAllNavigationItems().find(item => item.slug === slug);
}
