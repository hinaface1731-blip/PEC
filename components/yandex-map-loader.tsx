'use client'

import { createContext, useContext, useEffect, useState, useRef, ReactNode } from 'react'

declare global {
  interface Window {
    ymaps?: any
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

interface YandexMapLoaderProps {
  apiKey: string
  children: ReactNode
}

export function YandexMapLoader({ apiKey, children }: YandexMapLoaderProps) {
  const [state, setState] = useState<YandexMapsContextType>({
    isReady: false,
    error: null,
    ymaps: null
  })

  const initialized = useRef(false)

  useEffect(() => {
    if (initialized.current) return
    initialized.current = true

    if (typeof window === 'undefined' || !apiKey) {
      if (!apiKey) {
        console.warn('[YandexMapLoader] API key is empty. Set NEXT_PUBLIC_YANDEX_MAPS_KEY in .env.local')
      }
      return
    }

    if (window.ymaps?.Map) {
      setState({ isReady: true, error: null, ymaps: window.ymaps })
      return
    }

    if ((window as any).__YANDEX_MAPS_INIT__) {
      const checkReady = setInterval(() => {
        if (window.ymaps?.Map) {
          clearInterval(checkReady)
          setState({ isReady: true, error: null, ymaps: window.ymaps })
        }
      }, 100)

      setTimeout(() => clearInterval(checkReady), 15000)
      return () => clearInterval(checkReady)
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

    console.log('[YandexMapLoader] Loading:', script.src)

    script.onload = () => {
      console.log('[YandexMapLoader] Script loaded')
      if (window.ymaps) {
        window.ymaps.ready(() => {
          console.log('[YandexMapLoader] API ready')
          setState({ isReady: true, error: null, ymaps: window.ymaps })
        })
      }
    }

    script.onerror = () => {
      console.error('[YandexMapLoader] Failed to load')
      setState({ isReady: false, error: 'Failed to load', ymaps: null })
    }

    document.head.appendChild(script)
  }, [apiKey])

  return (
    <YandexMapsContext.Provider value={state}>
      {children}
    </YandexMapsContext.Provider>
  )
}
