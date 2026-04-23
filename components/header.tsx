'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { useTheme } from './theme-provider'
import { useLanguage } from './language-provider'
import { Sun, Moon, Menu, X, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const services = [
  { href: '/services/geological', ru: 'Геологические работы', en: 'Geological Works' },
  { href: '/services/geophysics', ru: 'Геофизические работы', en: 'Geophysical Works' },
  { href: '/services/drilling', ru: 'Буровые работы', en: 'Drilling Works' },
  { href: '/services/survey', ru: 'Маркшейдерские работы', en: 'Survey Works' },
  { href: '/services/lab', ru: 'Лабораторные исследования', en: 'Laboratory Research' },
  { href: '/services/consulting', ru: 'Проектирование и консалтинг', en: 'Design & Consulting' },
  { href: '/services/ecology', ru: 'Экология и рекультивация', en: 'Ecology & Reclamation' },
]

// ✅ Убрали 'О компании' из navItems (она уже есть отдельно)
const navItems = [
  { href: '/projects', ru: 'Проекты', en: 'Projects' },
  { href: '/equipment', ru: 'Техника', en: 'Equipment' },
  { href: '/contacts', ru: 'Контакты', en: 'Contacts' },
]

export function Header() {
  const pathname = usePathname()
  const { theme, toggleTheme } = useTheme()
  const { language, setLanguage, t } = useLanguage()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const isActive = (href: string) => {
    if (href === '/') return pathname === href
    return pathname.startsWith(href)
  }

  // Закрытие мобильного меню при клике вне
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false)
        setMobileServicesOpen(false)
      }
    }

    if (mobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  // Закрытие при смене роута
  useEffect(() => {
    setMobileMenuOpen(false)
    setMobileServicesOpen(false)
  }, [pathname])

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setServicesOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setServicesOpen(false), 150)
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  return (
    <header className="sticky top-0 z-50 h-[78px] border-b border-[var(--border)] bg-[var(--bg)]/80 backdrop-blur-xl">
      <nav className="h-full max-w-7xl mx-auto px-6 grid grid-cols-[auto_1fr_auto] items-center gap-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
        
<Image
  src="/images/logo.png"
  alt={t('ПЭК', 'PEC')}
  width={150}
  height={60}
  className="object-contain dark:brightness-0 dark:invert"
  priority
/>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-center gap-1">
          {/* О компании - отдельно, первая */}
          <Link
            href="/about"
            className={`px-4 py-2 rounded-lg transition-colors hover:bg-[var(--bg3)] ${
              isActive('/about')
                ? 'text-[var(--accent)]'
                : 'text-[var(--text)] hover:text-[var(--accent)]'
            }`}
          >
            {t('О компании', 'About')}
          </Link>

          {/* Услуги Dropdown */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className={`flex items-center gap-1 px-4 py-2 rounded-lg transition-colors hover:bg-[var(--bg3)] ${
                isActive('/services')
                  ? 'text-[var(--accent)]'
                  : 'text-[var(--text)] hover:text-[var(--accent)]'
              }`}
            >
              {t('Услуги', 'Services')}
              <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>

            {servicesOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-full left-0 mt-2 min-w-[280px] bg-[var(--bg2)]/95 backdrop-blur-xl border border-[var(--border)] rounded-2xl shadow-xl overflow-hidden"
              >
                <div className="py-2">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className={`block px-5 py-3 transition-all hover:translate-x-1 ${
                        isActive(service.href)
                          ? 'text-[var(--accent)] bg-[var(--accent-glow)]'
                          : 'text-[var(--text)] hover:text-[var(--accent)] hover:bg-[var(--bg3)]'
                      }`}
                    >
                      {t(service.ru, service.en)}
                    </Link>
                  ))}
                  <div className="border-t border-[var(--border)] mt-2 pt-2">
                    <Link
                      href="/services"
                      className="block px-5 py-3 font-semibold text-[var(--accent)] hover:bg-[var(--accent-glow)] transition-all"
                    >
                      {t('Все услуги →', 'All Services →')}
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Остальные пункты (без О компании) */}
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`px-4 py-2 rounded-lg transition-colors hover:bg-[var(--bg3)] ${
                isActive(item.href)
                  ? 'text-[var(--accent)]'
                  : 'text-[var(--text)] hover:text-[var(--accent)]'
              }`}
            >
              {t(item.ru, item.en)}
            </Link>
          ))}
        </div>

        {/* Right side controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setLanguage(language === 'ru' ? 'en' : 'ru')}
            className="px-3 py-2 text-sm font-medium text-[var(--muted)] hover:text-[var(--text)] transition-colors rounded-lg hover:bg-[var(--bg3)]"
          >
            {language === 'ru' ? 'EN' : 'RU'}
          </button>

          <button
            onClick={toggleTheme}
            className="p-2 text-[var(--muted)] hover:text-[var(--text)] transition-colors rounded-lg hover:bg-[var(--bg3)]"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[var(--muted)] hover:text-[var(--text)] transition-colors rounded-lg hover:bg-[var(--bg3)]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            ref={mobileMenuRef}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden absolute top-[78px] left-0 right-0 bg-[var(--bg)]/95 backdrop-blur-xl border-b border-[var(--border)] overflow-hidden"
          >
            <div className="px-6 py-4 space-y-2 max-h-[calc(100vh-78px)] overflow-y-auto">
              {/* О компании в мобильном меню */}
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg ${
                  isActive('/about')
                    ? 'text-[var(--accent)] bg-[var(--accent-glow)]'
                    : 'text-[var(--text)] hover:bg-[var(--bg3)]'
                }`}
              >
                {t('О компании', 'About')}
              </Link>

              {/* Услуги Dropdown в мобильном меню */}
              <div>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className={`flex items-center justify-between w-full px-4 py-3 rounded-lg ${
                    isActive('/services')
                      ? 'text-[var(--accent)] bg-[var(--accent-glow)]'
                      : 'text-[var(--text)] hover:bg-[var(--bg3)]'
                  }`}
                >
                  {t('Услуги', 'Services')}
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-4 overflow-hidden"
                    >
                      <div className="space-y-1 py-2">
                        {services.map((service) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className={`block px-4 py-2 rounded-lg ${
                              isActive(service.href)
                                ? 'text-[var(--accent)] bg-[var(--accent-glow)]'
                                : 'text-[var(--muted)] hover:text-[var(--accent)]'
                            }`}
                          >
                            {t(service.ru, service.en)}
                          </Link>
                        ))}
                        <Link
                          href="/services"
                          onClick={() => setMobileMenuOpen(false)}
                          className="block px-4 py-2 font-semibold text-[var(--accent)]"
                        >
                          {t('Все услуги →', 'All Services →')}
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Остальные пункты мобильного меню */}
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg ${
                    isActive(item.href)
                      ? 'text-[var(--accent)] bg-[var(--accent-glow)]'
                      : 'text-[var(--text)] hover:bg-[var(--bg3)]'
                  }`}
                >
                  {t(item.ru, item.en)}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}