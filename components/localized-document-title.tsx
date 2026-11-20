'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { useLanguage } from './language-provider'

const company = 'Polar Expedition Company'

const englishTitles: Record<string, string> = {
  '/': company,
  '/about': 'About the Company',
  '/contacts': 'Careers and Contacts',
  '/equipment': 'Equipment',
  '/investors': 'Investors – Taimyr Copper',
  '/privacy': 'Privacy Policy',
  '/projects': 'Projects',
  '/services': 'Services',
  '/services/consulting': 'Exploration Design & Consulting',
  '/services/drilling': 'Drilling Services',
  '/services/ecology': 'Environmental Services & Reclamation',
  '/services/geological': 'Geological Services',
  '/services/geophysics': 'Geophysical Services',
  '/services/geophysics/electrical': 'Electrical and Electromagnetic Surveys',
  '/services/geophysics/logging': 'Borehole Geophysical Logging',
  '/services/geophysics/magnetic': 'Magnetic Surveys',
  '/services/geophysics/software': 'Geophysical Data Processing Software',
  '/services/lab': 'Laboratory Testing',
  '/services/logistics': 'Logistics & Supply',
  '/services/mining': 'Mining Services',
  '/services/survey': 'Mine Surveying',
}

export function LocalizedDocumentTitle() {
  const { language } = useLanguage()
  const pathname = usePathname()

  useEffect(() => {
    const notFound = Boolean(document.querySelector('[data-page-not-found]'))
    if (language === 'ru' && !notFound) return

    const pageTitle = notFound
      ? (language === 'en' ? 'Page Not Found' : 'Страница не найдена')
      : englishTitles[pathname]
    if (!pageTitle) return

    const brand = language === 'en' ? company : 'Полярная Экспедиционная Компания'
    const localizedTitle = pathname === '/' ? brand : `${pageTitle} — ${brand}`
    let originalTitle = document.title

    const updateTitle = () => {
      if (document.title === localizedTitle) return
      originalTitle = document.title
      document.title = localizedTitle
    }

    // Next can stream the route title after the client has rendered.
    const observer = new MutationObserver(updateTitle)
    observer.observe(document.head, { subtree: true, childList: true, characterData: true })
    updateTitle()

    return () => {
      observer.disconnect()
      if (document.title === localizedTitle) document.title = originalTitle
    }
  }, [language, pathname])

  return null
}
