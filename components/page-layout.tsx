'use client'

import { type ReactNode, useEffect, useState } from 'react'
import { ThemeProvider } from './theme-provider'
import { LanguageProvider } from './language-provider'
import { Header } from './header'
import { Footer } from './footer'

interface PageLayoutProps {
  children: ReactNode
}

// Глобальная загрузка Яндекс Карт один раз
function YandexMapsScript() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    // Если уже загружено — выходим
    if (typeof window !== 'undefined' && window.ymaps) {
      setLoaded(true)
      return
    }

    // Если скрипт уже в DOM — ждём загрузки
    const existingScript = document.querySelector('script[src*="api-maps.yandex.ru"]')
    if (existingScript) {
      const check = setInterval(() => {
        if (window.ymaps) {
          clearInterval(check)
          setLoaded(true)
        }
      }, 100)
      setTimeout(() => clearInterval(check), 10000)
      return () => clearInterval(check)
    }

    // Загружаем скрипт
    const script = document.createElement('script')
    script.src = 'https://api-maps.yandex.ru/2.1/?apikey=b14c1be4-5b7c-444a-b7b4-05a0bfc3ab10&lang=ru_RU'
    script.async = true
    script.onload = () => {
      if (window.ymaps) {
        window.ymaps.ready(() => setLoaded(true))
      }
    }
    document.head.appendChild(script)
  }, [])

  return null
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <YandexMapsScript />
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  )
}