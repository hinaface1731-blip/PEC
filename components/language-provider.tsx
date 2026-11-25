// components/language-provider.tsx
'use client'

import { createContext, useCallback, useContext, type ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import { languageFromPath, localizedPath, type Language } from '@/lib/site-language'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (ru: string, en: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname() ?? '/'
  const language = languageFromPath(pathname)
  const handleSetLanguage = useCallback((lang: Language) => {
    if (lang === language) return
    const current = pathname + window.location.search + window.location.hash
    // Яндекс Карты выбирают язык при загрузке API для всего документа.
    window.location.assign(localizedPath(current, lang))
  }, [pathname, language])

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
