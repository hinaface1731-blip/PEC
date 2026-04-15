'use client'

import { useState } from 'react'
import { useLanguage } from './language-provider'
import { Send, CheckCircle, Loader2 } from 'lucide-react'

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
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
    } catch (err) {
      setError(t('Ошибка отправки. Попробуйте позже.', 'Failed to send. Please try later.'))
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  if (submitted) {
    return (
      <section className="section bg-[var(--bg2)]">
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
                  className="w-full px-4 py-3 bg-[var(--bg3)] border border-[var(--border)] rounded-xl text-[var(--text)] placeholder-[var(--muted2)] focus:outline-none focus:border-[var(--accent)] transition-colors"
                  placeholder={t('Иван Петров', 'John Smith')}
                />
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
                  className="w-full px-4 py-3 bg-[var(--bg3)] border border-[var(--border)] rounded-xl text-[var(--text)] placeholder-[var(--muted2)] focus:outline-none focus:border-[var(--accent)] transition-colors"
                  placeholder="+7 (___) ___-__-__"
                />
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
                  className="w-full px-4 py-3 bg-[var(--bg3)] border border-[var(--border)] rounded-xl text-[var(--text)] placeholder-[var(--muted2)] focus:outline-none focus:border-[var(--accent)] transition-colors"
                  placeholder="email@company.ru"
                />
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
                {t(
                  'Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности',
                  'By clicking the button, you agree to our privacy policy'
                )}
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
