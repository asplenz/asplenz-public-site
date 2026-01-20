'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import { Lang } from './content'

type LangContextType = {
  lang: Lang
  toggleLang: () => void
}

const LangContext = createContext<LangContextType | undefined>(undefined)

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en')

  const toggleLang = () => {
    setLang(prev => prev === 'en' ? 'fr' : 'en')
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
