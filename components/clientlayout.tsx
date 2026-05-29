'use client'

import { ThemeProvider } from '@/components/theme-provider'
import { LanguageProvider } from '@/components/language-provider'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { YandexMapScript } from '@/components/yandex-map-script'
import { Analytics } from '@vercel/analytics/next'

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <YandexMapScript />
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </LanguageProvider>
    </ThemeProvider>
  )
}