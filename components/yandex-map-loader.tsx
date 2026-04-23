'use client'

import { createContext, useContext, useEffect, useState, useRef, ReactNode } from 'react'

declare global {
  interface Window {
    ymaps?: any
    __YANDEX_MAPS_INIT__?: boolean
  }
}

interface YandexMapsContextType {
  isReady: boolean
  error: string | null
  ymaps: any
}

const YandexMapsContext = createContext<YandexMapsContextType>({
  isReady: false,
  error: null,
  ymaps: null
})

export function useYandexMapsContext() {
  return useContext(YandexMapsContext)
}

// ✅ Убираем apiKey из пропсов — читаем напрямую из env
export function YandexMapLoader({ children }: { children: ReactNode }) {
  const [state, setState] = useState<YandexMapsContextType>({
    isReady: false,
    error: null,
    ymaps: null
  })

  const initialized = useRef(false)
  const apiKey = process.env.NEXT_PUBLIC_YANDEX_MAPS_API_KEY

  useEffect(() => {
    if (initialized.current) return
    initialized.current = true

    if (typeof window === 'undefined') return

    if (!apiKey) {
      console.error('[YandexMapLoader] API key is missing! Add NEXT_PUBLIC_YANDEX_MAPS_API_KEY to .env.local')
      setState({ isReady: false, error: 'API key missing', ymaps: null })
      return
    }

    if (window.ymaps?.Map) {
      setState({ isReady: true, error: null, ymaps: window.ymaps })
      return
    }

    let checkInterval: NodeJS.Timeout
    let timeoutId: NodeJS.Timeout

    if ((window as any).__YANDEX_MAPS_INIT__) {
      checkInterval = setInterval(() => {
        if (window.ymaps?.Map) {
          clearInterval(checkInterval)
          clearTimeout(timeoutId)
          setState({ isReady: true, error: null, ymaps: window.ymaps })
        }
      }, 100)

      timeoutId = setTimeout(() => clearInterval(checkInterval), 15000)
      
      return () => {
        clearInterval(checkInterval)
        clearTimeout(timeoutId)
      }
    }

    ;(window as any).__YANDEX_MAPS_INIT__ = true

    const oldScript = document.querySelector('script[src*="api-maps.yandex.ru"]')
    if (oldScript) {
      oldScript.remove()
      delete (window as any).ymaps
    }

    const script = document.createElement('script')
    script.src = `https://api-maps.yandex.ru/2.1/?apikey=${apiKey}&lang=ru_RU`
    script.async = true

    script.onload = () => {
      if (window.ymaps) {
        window.ymaps.ready(() => {
          setState({ isReady: true, error: null, ymaps: window.ymaps })
        })
      }
    }

    script.onerror = () => {
      console.error('[YandexMapLoader] Failed to load script')
      setState({ isReady: false, error: 'Failed to load Yandex Maps API', ymaps: null })
    }

    document.head.appendChild(script)
  }, [apiKey])

  return (
    <YandexMapsContext.Provider value={state}>
      {children}
    </YandexMapsContext.Provider>
  )
}