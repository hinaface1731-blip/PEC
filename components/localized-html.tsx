'use client'

import { usePathname } from 'next/navigation'
import { languageFromPath } from '@/lib/site-language'

export function LocalizedHtml({ children }: { children: React.ReactNode }) {
  const language = languageFromPath(usePathname() ?? '/')
  return (
    <html lang={language} suppressHydrationWarning data-scroll-behavior="smooth">
      {children}
    </html>
  )
}
