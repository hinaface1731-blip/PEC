'use client'

import { useState, useEffect } from 'react'
import { useLanguage } from './language-provider'
import { Send, CheckCircle, Loader2 } from 'lucide-react'
import Link from 'next/link'

const STORAGE_KEY = 'cta_form_data'

interface CTAFormProps {
  serviceName?: string
}

export function CTAForm({ serviceName }: CTAFormProps) {
  const { t } = useLanguage()
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    phone: '',
    email: '',
    subject: serviceName || '',
    message: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  // Восстанавливаем данные из localStorage
  useEffect(() => {
    const savedData = localStorage.getItem(STORAGE_KEY)
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData)
        setFormData(prev => ({ ...prev, ...parsed }))
      } catch (e) {
        console.error('Failed to restore form data', e)
      }
    }
  }, [])

  // Сохраняем данные в localStorage
  useEffect(() => {
    if (formData.name || formData.organization || formData.phone || formData.email || formData.message) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        name: formData.name,
        organization: formData.organization,
        phone: formData.phone,
        email: formData.email,
        message: formData.message,
      }))
    }
  }, [formData])

  // Валидация email
  const validateEmail = (email: string) => {
    if (!email) return true // email не обязателен
    const re = /^[^\s@]+@([^\s@]+\.)+[^\s@]+$/
    return re.test(email)
  }

  // Валидация телефона
  const validatePhone = (phone: string) => {
    const digitsOnly = phone.replace(/\D/g, '')
    if (digitsOnly.length < 10 || digitsOnly.length > 11) return false
    const firstDigit = digitsOnly[0]
    if (digitsOnly.length === 11 && firstDigit !== '7' && firstDigit !== '8') return false
    if (digitsOnly.length === 10 && firstDigit !== '9') return false
    return true
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    // Очищаем ошибку для этого поля при вводе
    if (errors[e.target.name]) {
      setErrors(prev => ({ ...prev, [e.target.name]: '' }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Валидация
    const newErrors: Record<string, string> = {}
    
    if (!formData.name.trim()) {
      newErrors.name = t('Введите ваше имя', 'Please enter your name')
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = t('Введите номер телефона', 'Please enter your phone number')
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = t('Введите корректный номер телефона', 'Enter a valid phone number')
    }
    
    if (formData.email && !validateEmail(formData.email)) {
      newErrors.email = t('Введите корректный email', 'Enter a valid email address')
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    
    setIsLoading(true)
    setError('')

    try {
      const response = await fetch('/api/send-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to send')
      }

      setSubmitted(true)
      localStorage.removeItem(STORAGE_KEY)
    } catch (err) {
      setError(t('Ошибка отправки. Попробуйте позже.', 'Failed to send. Please try later.'))
    } finally {
      setIsLoading(false)
    }
  }

  if (submitted) {
    return (
      <section className="section bg-[var(--bg2)]" id="cta">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[var(--accent-glow)] flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-[var(--accent)]" />
            </div>
            <h2 className="text-3xl font-bold text-[var(--text)] mb-4">
              {t('Заявка отправлена!', 'Request Sent!')}
            </h2>
            <p className="text-[var(--muted)]">
              {t(
                'Наши специалисты свяжутся с вами в течение рабочего дня.',
                'Our specialists will contact you within one business day.'
              )}
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="section bg-[var(--bg2)]" id="cta">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--text)] mb-4">
              {t('Запросить коммерческое предложение', 'Request a Quote')}
            </h2>
            <p className="text-[var(--muted)] max-w-2xl mx-auto">
              {t(
                'Оставьте заявку, и наши специалисты подготовят индивидуальное предложение для вашего проекта',
                'Leave a request and our specialists will prepare a customized proposal for your project'
              )}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="card p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[var(--text)] mb-2">
                  {t('Имя *', 'Name *')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-[var(--bg3)] border ${errors.name ? 'border-red-500' : 'border-[var(--border)]'} rounded-xl text-[var(--text)] placeholder-[var(--muted2)] focus:outline-none focus:border-[var(--accent)] transition-colors`}
                  placeholder={t('Иван Петров', 'John Smith')}
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="organization" className="block text-sm font-medium text-[var(--text)] mb-2">
                  {t('Организация', 'Organization')}
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[var(--bg3)] border border-[var(--border)] rounded-xl text-[var(--text)] placeholder-[var(--muted2)] focus:outline-none focus:border-[var(--accent)] transition-colors"
                  placeholder={t('ООО «Компания»', 'Company LLC')}
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-[var(--text)] mb-2">
                  {t('Телефон *', 'Phone *')}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-[var(--bg3)] border ${errors.phone ? 'border-red-500' : 'border-[var(--border)]'} rounded-xl text-[var(--text)] placeholder-[var(--muted2)] focus:outline-none focus:border-[var(--accent)] transition-colors`}
                  placeholder="+7 (___) ___-__-__"
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[var(--text)] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-[var(--bg3)] border ${errors.email ? 'border-red-500' : 'border-[var(--border)]'} rounded-xl text-[var(--text)] placeholder-[var(--muted2)] focus:outline-none focus:border-[var(--accent)] transition-colors`}
                  placeholder="email@company.ru"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              {serviceName && (
                <div className="md:col-span-2">
                  <label htmlFor="subject" className="block text-sm font-medium text-[var(--text)] mb-2">
                    {t('Тема', 'Subject')}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[var(--bg3)] border border-[var(--border)] rounded-xl text-[var(--text)] placeholder-[var(--muted2)] focus:outline-none focus:border-[var(--accent)] transition-colors"
                  />
                </div>
              )}

              <div className="md:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium text-[var(--text)] mb-2">
                  {t('Сообщение', 'Message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[var(--bg3)] border border-[var(--border)] rounded-xl text-[var(--text)] placeholder-[var(--muted2)] focus:outline-none focus:border-[var(--accent)] transition-colors resize-none"
                  placeholder={t('Опишите ваш проект или задачу...', 'Describe your project or task...')}
                />
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-sm text-[var(--muted2)]">
                {t('Нажимая кнопку, вы соглашаетесь с', 'By clicking the button, you agree to the')}{' '}
                <Link href="/privacy" className="text-[var(--accent)] hover:underline">
                  {t('политикой конфиденциальности', 'privacy policy')}
                </Link>
              </p>
              <button type="submit" className="btn btn-primary" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    {t('Отправка...', 'Sending...')}
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    {t('Запросить КП', 'Request Quote')}
                  </>
                )}
              </button>
            </div>
            {error && <p className="text-red-500 text-sm mt-4 text-center">{error}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}