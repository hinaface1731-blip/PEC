'use client'

import { createContext, useContext, useEffect, useState } from 'react'

interface YandexMapsV3ContextType {
  isReady: boolean
  ymaps3: any | null
}

const YandexMapsV3Context = createContext<YandexMapsV3ContextType>({
  isReady: false,
  ymaps3: null,
})

export function YandexMapsV3Provider({ children }: { children: React.ReactNode }) {
  const [isReady, setIsReady] = useState(false)
  const [ymaps3, setYmaps3] = useState<any>(null)

  useEffect(() => {
    if (window.ymaps3) {
      window.ymaps3.ready().then(() => {
        setYmaps3(window.ymaps3)
        setIsReady(true)
      })
      return
    }

    const script = document.createElement('script')
    script.src = `https://api-maps.yandex.ru/v3/?apikey=${process.env.NEXT_PUBLIC_YANDEX_MAPS_API_KEY}&lang=ru_RU`
    script.async = true
    script.onload = () => {
      window.ymaps3.ready().then(() => {
        setYmaps3(window.ymaps3)
        setIsReady(true)
      })
    }
    document.head.appendChild(script)
  }, [])

  return (
    <YandexMapsV3Context.Provider value={{ isReady, ymaps3 }}>
      {children}
    </YandexMapsV3Context.Provider>
  )
}

export const useYandexMapsV3 = () => useContext(YandexMapsV3Context)