'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { Lang } from './content'

type LangContextType = {
  lang: Lang
  toggleLang: () => void
}

const LangContext = createContext<LangContextType | undefined>(undefined)

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en')
  const [mounted, setMounted] = useState(false)

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLang = localStorage.getItem('horizon-lang') as Lang | null
    if (savedLang && (savedLang === 'en' || savedLang === 'fr')) {
      setLang(savedLang)
    }
    setMounted(true)
  }, [])

  // Save language to localStorage when it changes
  useEffect(() => {
    if (mounted) {
      localStorage.setItem('horizon-lang', lang)
    }
  }, [lang, mounted])

  const toggleLang = () => {
    setLang(prev => prev === 'en' ? 'fr' : 'en')
  }

  // Don't render children until language is loaded from localStorage
  // This prevents flash of wrong language content
  if (!mounted) {
    return null
  }

  return (
    <LangContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  const context = useContext(LangContext)
  if (!context) {
    throw new Error('useLang must be used within a LangProvider')
  }
  return context
}
