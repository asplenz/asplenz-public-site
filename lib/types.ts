export type Language = 'en' | 'fr';

export interface PageContent {
  slug: string;
  title: string;
  content: string;
  rawContent: string;
}

export interface NavigationItem {
  slug: string;
  title: {
    en: string;
    fr: string;
  };
}

export interface NavigationSection {
  title: {
    en: string;
    fr: string;
  };
  items: NavigationItem[];
}

export interface ReadingPathItem {
  slug: string;
  title: {
    en: string;
    fr: string;
  };
}
