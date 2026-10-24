// components/language-provider.tsx
'use client'

import { createContext, useCallback, useContext, useState, useEffect, ReactNode } from 'react'

type Language = 'ru' | 'en'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (ru: string, en: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('ru')

  useEffect(() => {
    try {
      const saved = localStorage.getItem('language')
      if (saved === 'ru' || saved === 'en') {
        setLanguage(saved)
      }
    } catch {}
  }, [])

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  const handleSetLanguage = useCallback((lang: Language) => {
    setLanguage(lang)
    try {
      localStorage.setItem('language', lang)
    } catch {}
  }, [])

  // Стабильная ссылка на t, чтобы эффекты, зависящие от неё, не перезапускались на каждом рендере
  const t = useCallback((ru: string, en: string) => (language === 'ru' ? ru : en), [language])

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}