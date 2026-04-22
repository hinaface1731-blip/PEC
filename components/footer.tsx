'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from './language-provider'
import { Phone, Mail, MapPin } from 'lucide-react'

const services = [
  { href: '/services/geological', ru: 'Геологические работы', en: 'Geological Works' },
  { href: '/services/geophysics', ru: 'Геофизические работы', en: 'Geophysical Works' },
  { href: '/services/drilling', ru: 'Буровые работы', en: 'Drilling Works' },
  { href: '/services/survey', ru: 'Маркшейдерские работы', en: 'Survey Works' },
  { href: '/services/lab', ru: 'Лабораторные исследования', en: 'Laboratory Research' },
  { href: '/services/consulting', ru: 'Проектирование и консалтинг', en: 'Design & Consulting' },
  { href: '/services/ecology', ru: 'Экология и рекультивация', en: 'Ecology & Reclamation' },
]

const company = [
  { href: '/about', ru: 'О компании', en: 'About Us' },
  { href: '/projects', ru: 'Проекты', en: 'Projects' },
  { href: '/equipment', ru: 'Техника', en: 'Equipment' },
  { href: '/contacts', ru: 'Контакты', en: 'Contacts' },
]

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-[var(--bg2)] border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo & Description - колонка 1 */}
          <div className="space-y-1">
            <Link href="/" className="inline-block">
              <Image
  src="/images/logo.png"
  alt={t('ПЭК', 'PEC')}
  width={150}
  height={60}   // ← изменили на 60, чтобы соответствовать пропорциям
  className="object-contain"
  loading="eager"
  priority
/>
            </Link>
            <p className="text-[var(--muted)] text-sm leading-relaxed">
              {t(
                'Полярная Экспедиционная Компания — геологоразведка полного цикла в Арктике и Сибири с 2009 года.',
                'Polar Expedition Company — full-cycle geological exploration in the Arctic and Siberia since 2009.'
              )}
            </p>
            <div className="space-y-2 text-sm">
              <a href="tel:+73912051584" className="flex items-center gap-2 text-[var(--muted)] hover:text-[var(--accent)] transition-colors">
                <Phone className="w-4 h-4" />
                +7 (391) 205‑15‑84
              </a>
              <a href="mailto:info@polar-ec.ru" className="flex items-center gap-2 text-[var(--muted)] hover:text-[var(--accent)] transition-colors">
                <Mail className="w-4 h-4" />
                info@polar-ec.ru
              </a>
              <p className="flex items-start gap-2 text-[var(--muted)]">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>{t('г. Красноярск, ул. Ленина, 84', 'Krasnoyarsk, Lenina St., 84')}</span>
              </p>
            </div>
          </div>

          {/* Services - колонка 2 */}
          <div>
            <h4 className="font-semibold text-[var(--text)] mb-4">
              {t('Услуги', 'Services')}
            </h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-sm text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
                  >
                    {t(service.ru, service.en)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company - колонка 3 */}
          <div>
            <h4 className="font-semibold text-[var(--text)] mb-4">
              {t('Компания', 'Company')}
            </h4>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
                  >
                    {t(item.ru, item.en)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Licenses - колонка 4 */}
          <div>
            <h4 className="font-semibold text-[var(--text)] mb-4">
              {t('Лицензии', 'Licenses')}
            </h4>
            <ul className="space-y-2">
              <li className="text-sm text-[var(--muted)]">
                {t('Лицензия Роснедр № КРР 03707 БП', 'Rosnedra License No. КРР 03707 BP')}
              </li>
              <li className="text-sm text-[var(--muted)]">
                {t('Свидетельство СРО № 1234-2024', 'SRO Certificate No. 1234-2024')}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-[var(--border)] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[var(--muted2)]">
            © 2026 {t('ООО «ПЭК». Все права защищены.', 'LLC "PEC". All rights reserved.')}
          </p>
          <div className="flex items-center gap-6 text-sm">
            <Link href="/privacy" className="text-[var(--muted2)] hover:text-[var(--accent)] transition-colors">
              {t('Политика конфиденциальности', 'Privacy Policy')}
            </Link>
            <Link href="/sitemap" className="text-[var(--muted2)] hover:text-[var(--accent)] transition-colors">
              {t('Карта сайта', 'Sitemap')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}