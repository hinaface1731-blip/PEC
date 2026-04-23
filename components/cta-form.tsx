'use client'

import { useState, useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useLanguage } from '@/components/language-provider'

const STORAGE_KEY = 'cta_form_data'

export function CTAForm() {
  const { t } = useLanguage()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  })
  
  const [errors, setErrors] = useState<Record<string, string>>({})

  // ✅ Восстанавливаем данные из localStorage при монтировании
  useEffect(() => {
    const savedData = localStorage.getItem(STORAGE_KEY)
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData)
        setFormData(parsed)
      } catch (e) {
        console.error('Failed to restore form data', e)
      }
    }
  }, [])

  // ✅ Сохраняем данные в localStorage при изменении
  useEffect(() => {
    if (formData.name || formData.phone || formData.email || formData.message) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
    }
  }, [formData])

  // ✅ Сброс формы при успешной отправке
  useEffect(() => {
    if (isSuccess) {
      localStorage.removeItem(STORAGE_KEY)
      setFormData({ name: '', phone: '', email: '', message: '' })
      const timer = setTimeout(() => setIsSuccess(false), 3000)
      return () => clearTimeout(timer)
    }
  }, [isSuccess])

  // ✅ Валидация
  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@([^\s@]+\.)+[^\s@]+$/
    return re.test(email)
  }

  const validatePhone = (phone: string) => {
    const re = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/
    return re.test(phone) || phone.length >= 10
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    const newErrors: Record<string, string> = {}
    
    if (!formData.name.trim()) {
      newErrors.name = t('Введите имя', 'Name is required')
    }
    if (!formData.phone.trim()) {
      newErrors.phone = t('Введите телефон', 'Phone is required')
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = t('Введите корректный номер телефона', 'Enter a valid phone number')
    }
    if (!formData.email.trim()) {
      newErrors.email = t('Введите email', 'Email is required')
    } else if (!validateEmail(formData.email)) {
      newErrors.email = t('Введите корректный email', 'Enter a valid email address')
    }
    if (!formData.message.trim()) {
      newErrors.message = t('Введите сообщение', 'Message is required')
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    
    setErrors({})
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/send-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      
      if (response.ok) {
        setIsSuccess(true)
        if (formRef.current) {
          formRef.current.reset()
        }
      }
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
      {isSuccess && (
        <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 text-center">
          <p className="text-green-500">✅ {t('Заявка отправлена!', 'Request sent!')}</p>
        </div>
      )}
      
      <div>
        <Input
          placeholder={t('Ваше имя *', 'Your name *')}
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className={errors.name ? 'border-red-500' : ''}
        />
        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
      </div>
      
      <div>
        <Input
          type="tel"
          placeholder={t('Телефон *', 'Phone *')}
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className={errors.phone ? 'border-red-500' : ''}
        />
        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
      </div>
      
      <div>
        <Input
          type="email"
          placeholder="Email *"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className={errors.email ? 'border-red-500' : ''}
        />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
      </div>
      
      <div>
        <Textarea
          placeholder={t('Сообщение *', 'Message *')}
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className={errors.message ? 'border-red-500' : ''}
        />
        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
      </div>
      
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? t('Отправка...', 'Sending...') : t('Отправить заявку', 'Send request')}
      </Button>
    </form>
  )
}