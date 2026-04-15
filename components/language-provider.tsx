'use client'

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

type Language = 'ru' | 'en'

interface LanguageContextType {
  language: Language
  toggleLanguage: () => void
  t: (ru: string, en: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('ru')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('pek-lang') as Language | null
      if (stored) {
        setLanguage(stored)
      }
    }
  }, [])

  const toggleLanguage = () => {
    const newLang = language === 'ru' ? 'en' : 'ru'
    setLanguage(newLang)
    if (typeof window !== 'undefined') {
      localStorage.setItem('pek-lang', newLang)
    }
  }

  const t = (ru: string, en: string) => (language === 'ru' ? ru : en)

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
