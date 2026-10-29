import type { Metadata, Viewport } from 'next'
import { Manrope } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import { LanguageProvider } from '@/components/language-provider'
import './globals.css'

const manrope = Manrope({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-manrope',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://polar-ec.ru'),
  title: {
    default: 'Полярная Экспедиционная Компания',
    template: '%s — Полярная Экспедиционная Компания',
  },
  description: 'Геологоразведочная компания полного цикла. 18+ лет работы в Арктике и Сибири. Геология, геофизика, бурение, лаборатория.',
  keywords: 'геологоразведка, ГРР, бурение, геофизика, Арктика, Сибирь, геологические работы',
  openGraph: {
    title: 'Полярная Экспедиционная Компания',
    description: 'Геологоразведочная компания полного цикла. 18+ лет работы в Арктике и Сибири.',
    type: 'website',
    locale: 'ru_RU',
    siteName: 'Полярная Экспедиционная Компания',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Полярная Экспедиционная Компания',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Полярная Экспедиционная Компания',
    description: 'Геологоразведочная компания полного цикла. 18+ лет работы в Арктике и Сибири.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: [
      { url: '/favicon-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-48.png', sizes: '48x48', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
}

const themeInitScript = `try{var t=localStorage.getItem('pek-theme');document.documentElement.classList.toggle('dark',t==='dark')}catch(e){}`

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f8fafc' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0c0f' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        {/* Применяем сохранённую тему до первой отрисовки, чтобы не было «вспышки» светлой темы */}
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className={`${manrope.variable} font-sans antialiased`}>
        <ThemeProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}