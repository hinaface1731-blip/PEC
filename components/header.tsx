'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { useTheme } from './theme-provider'
import { useLanguage } from './language-provider'
import { Sun, Moon, Menu, X, ChevronDown, Snowflake } from 'lucide-react'
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

const navItems = [
  { href: '/about', ru: 'О компании', en: 'About' },
  { href: '/projects', ru: 'Проекты', en: 'Projects' },
  { href: '/equipment', ru: 'Техника', en: 'Equipment' },
  { href: '/contacts', ru: 'Контакты', en: 'Contacts' },
]

export function Header() {
  const { theme, toggleTheme } = useTheme()
  const { language, toggleLanguage, t } = useLanguage()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setServicesOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setServicesOpen(false)
    }, 150)
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return (
    <header className="sticky top-0 z-50 h-[78px] border-b border-[var(--border)] bg-[var(--bg)]/80 backdrop-blur-xl">
      <nav className="h-full max-w-7xl mx-auto px-6 grid grid-cols-[auto_1fr_auto] items-center gap-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-[var(--text)] hover:text-[var(--accent)] transition-colors">
          <Snowflake className="w-8 h-8 text-[var(--accent)]" />
          <span className="font-[family-name:var(--font-heading)] font-semibold text-xl tracking-tight">
            {t('ПЭК', 'PEC')}
          </span>
        </Link>

        {/* Desktop Navigation */}
<div className="hidden lg:flex items-center justify-center gap-1">
  {/* О компании - первый */}
  <Link
    href="/about"
    className="px-4 py-2 text-[var(--text)] hover:text-[var(--accent)] transition-colors rounded-lg hover:bg-[var(--bg3)]"
  >
    {t('О компании', 'About')}
  </Link>

  {/* Услуги Dropdown - второй */}
  <div
    ref={dropdownRef}
    className="relative"
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
  >
    <button className="flex items-center gap-1 px-4 py-2 text-[var(--text)] hover:text-[var(--accent)] transition-colors rounded-lg hover:bg-[var(--bg3)]">
      {t('Услуги', 'Services')}
      <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
    </button>

    {servicesOpen && (
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.2 }}
        className="absolute top-full left-0 mt-2 min-w-[280px] bg-[var(--bg2)]/95 backdrop-blur-xl border border-[var(--border)] rounded-2xl shadow-xl overflow-hidden"
      >
        <div className="py-2">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="block px-5 py-3 text-[var(--text)] hover:text-[var(--accent)] hover:bg-[var(--bg3)] transition-all hover:translate-x-1"
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

  {/* Остальные пункты - Проекты, Техника, Контакты */}
  {navItems.filter(item => item.href !== '/about').map((item) => (
    <Link
      key={item.href}
      href={item.href}
      className="px-4 py-2 text-[var(--text)] hover:text-[var(--accent)] transition-colors rounded-lg hover:bg-[var(--bg3)]"
    >
      {t(item.ru, item.en)}
    </Link>
  ))}
</div>

        {/* Right side controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleLanguage}
            className="px-3 py-2 text-sm font-medium text-[var(--muted)] hover:text-[var(--text)] transition-colors rounded-lg hover:bg-[var(--bg3)]"
          >
            {language === 'ru' ? 'EN' : 'RU'}
          </button>

          <button
            onClick={toggleTheme}
            className="p-2 text-[var(--muted)] hover:text-[var(--text)] transition-colors rounded-lg hover:bg-[var(--bg3)]"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[var(--muted)] hover:text-[var(--text)] transition-colors rounded-lg hover:bg-[var(--bg3)]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden absolute top-[78px] left-0 right-0 bg-[var(--bg)]/95 backdrop-blur-xl border-b border-[var(--border)] overflow-hidden"
          >
            <div className="px-6 py-4 space-y-2 max-h-[calc(100vh-78px)] overflow-y-auto">
              {/* Mobile Services Dropdown */}
              <div>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="flex items-center justify-between w-full px-4 py-3 text-[var(--text)] hover:text-[var(--accent)] transition-colors rounded-lg hover:bg-[var(--bg3)]"
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
                      transition={{ duration: 0.2 }}
                      className="pl-4 overflow-hidden"
                    >
                      <div className="space-y-1 py-2">
                        {services.map((service) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block px-4 py-2 text-[var(--muted)] hover:text-[var(--accent)] transition-colors rounded-lg"
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

              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 text-[var(--text)] hover:text-[var(--accent)] transition-colors rounded-lg hover:bg-[var(--bg3)]"
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
