'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { Lang } from './content'

interface LangContextType {
  lang: Lang
  setLang: (lang: Lang) => void
  toggleLang: () => void
}

const LangContext = createContext<LangContextType | undefined>(undefined)

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en')

  useEffect(() => {
    const saved = localStorage.getItem('horizon-lang') as Lang | null
    if (saved && (saved === 'en' || saved === 'fr')) {
      setLang(saved)
    } else {
      // Detect browser language
      const browserLang = navigator.language.toLowerCase()
      if (browserLang.startsWith('fr')) {
        setLang('fr')
      }
    }
  }, [])

  const handleSetLang = (newLang: Lang) => {
    setLang(newLang)
    localStorage.setItem('horizon-lang', newLang)
  }

  const toggleLang = () => {
    const newLang = lang === 'en' ? 'fr' : 'en'
    handleSetLang(newLang)
  }

  return (
    <LangContext.Provider value={{ lang, setLang: handleSetLang, toggleLang }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  const context = useContext(LangContext)
  if (context === undefined) {
    throw new Error('useLang must be used within a LangProvider')
  }
  return context
}
