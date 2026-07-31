export const locales = ['en', 'fr'] as const
export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = 'en'

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value)
}

import en from '@/messages/en.json'
import fr from '@/messages/fr.json'

const messages: Record<Locale, typeof en> = { en, fr }

export function t(locale: Locale) {
  return messages[locale]
}
