'use client'

import { type ReactNode } from 'react'
import { ThemeProvider } from './theme-provider'
import { LanguageProvider } from './language-provider'
import { Header } from './header'
import { Footer } from './footer'

interface PageLayoutProps {
  children: ReactNode
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  )
}
