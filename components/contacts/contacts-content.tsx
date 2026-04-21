"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock, Send, Building, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"

const offices = [
  {
    city: "Красноярск",
    type: "Головной офис",
    address: "ул. Ленина, 84",
    phone: "+7(391)205-15-84",
    email: "info@polar-ec.ru",
    hours: "Пн-Пт: 10:00 - 18:00"
  },
]

const departments = [
  { name: "Отдел продаж", email: "info@polar-ec.ru", phone: "+7 (391) 205-15-84" },
  { name: "Геологический отдел", email: "geo@polar-ec.ru", phone: "+7 (391) 205-15-85" },
  { name: "Геофизический отдел", email: "geofiz@polar-ec.ru", phone: "+7 (391) 205-15-86" },
  { name: "Маркшейдерский отдел", email: "mark@polar-ec.ru", phone: "+7 (391) 205-15-87" }
]

export function ContactsContent() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')
    
    try {
      const response = await fetch('/api/send-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          organization: formData.company,
          phone: formData.phone,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to send')
      }

      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({ name: "", company: "", email: "", phone: "", subject: "", message: "" })
      setTimeout(() => setIsSubmitted(false), 5000)
    } catch (err) {
      setError('Ошибка отправки. Попробуйте позже.')
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-card overflow-hidden">
        <div className="absolute inset-0">
          <img 
        src="/images/hero-contacts2.png" 
        alt="Контакты ПЭК"
        className="w-full h-f object-cover object-[center_80%]"
        style={{
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center 20%'  // ← Здесь точно сработает
  }}
            />
          
        </div>
        
        <div className="relative z-10 h-full flex items-center">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl"
      >
        {/* Хлебные крошки */}
        <div className="flex items-center gap-2 text-white/70 mb-4">
          <Link href="/" className="hover:text-white transition-colors">Главная</Link>
          <span>/</span>
          <span className="text-white">Контакты</span>
        </div>
        
        {/* Заголовок */}
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          Свяжитесь с нами
        </h1>
        
        {/* Описание */}
        <p className="text-xl text-white/90 leading-relaxed">
          Готовы обсудить ваш проект? Наши специалисты ответят на все вопросы 
          и помогут подобрать оптимальное решение.
        </p>
      </motion.div>
    </div>
  </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-card p-8 md:p-10 rounded-2xl border border-border">
                <h2 className="font-display text-2xl font-bold text-foreground mb-2">
                  Отправить заявку
                </h2>
                <p className="text-muted-foreground mb-8">
                  Заполните форму и мы свяжемся с вами в течение 24 часов
                </p>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-500/10 border border-green-500/30 rounded-xl p-6 text-center"
                  >
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="w-8 h-8 text-green-500" />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                      Заявка отправлена!
                    </h3>
                    <p className="text-muted-foreground">
                      Спасибо за обращение. Наш специалист свяжется с вами в ближайшее время.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Ваше имя *
                        </label>
                        <Input
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Иван Иванов"
                          className="bg-background"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Компания
                        </label>
                        <Input
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Название компании"
                          className="bg-background"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Email *
                        </label>
                        <Input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="email@company.com"
                          className="bg-background"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Телефон *
                        </label>
                        <Input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+7 (XXX) XXX-XX-XX"
                          className="bg-background"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Тема обращения
                      </label>
                      <Input
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="Запрос коммерческого предложения"
                        className="bg-background"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Сообщение *
                      </label>
                      <Textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Опишите ваш проект или задайте вопрос..."
                        className="bg-background resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin mr-2" />
                          Отправка...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Отправить заявку
                        </>
                      )}
                    </Button>

                    {error && (
                      <p className="text-red-500 text-sm text-center">{error}</p>
                    )}

                    <p className="text-xs text-muted-foreground text-center">
                      Нажимая кнопку, вы соглашаетесь с{" "}
                      <Link href="/privacy" className="text-primary hover:underline">
                        политикой конфиденциальности
                      </Link>
                    </p>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Quick Contacts */}
              <div className="grid gap-4">
                <a
                  href="tel:+7(391)205-15-84"
                  className="flex items-center gap-4 bg-card p-5 rounded-xl border border-border hover:border-primary/30 transition-colors group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Телефон</div>
                    <div className="font-medium text-foreground">+7(391)205-15-84</div>
                  </div>
                </a>
                <a
                  href="mailto:info@polar-ec.ru"
                  className="flex items-center gap-4 bg-card p-5 rounded-xl border border-border hover:border-primary/30 transition-colors group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Email</div>
                    <div className="font-medium text-foreground">info@polar-ec.ru</div>
                  </div>
                </a>
                <a
                  href="https://polar-ec.ru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-card p-5 rounded-xl border border-border hover:border-primary/30 transition-colors group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Globe className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Сайт</div>
                    <div className="font-medium text-foreground">www.polar-ec.ru</div>
                  </div>
                </a>
              </div>

              {/* Departments */}
              <div className="bg-card p-6 rounded-xl border border-border">
                <h3 className="font-display text-lg font-semibold text-foreground mb-4">
                  Отделы компании
                </h3>
                <div className="space-y-4">
                  {departments.map((dept) => (
                    <div key={dept.name} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pb-4 border-b border-border last:border-0 last:pb-0">
                      <div className="font-medium text-foreground">{dept.name}</div>
                      <div className="flex flex-col sm:items-end text-sm text-muted-foreground">
                        <a href={`mailto:${dept.email}`} className="hover:text-primary transition-colors">
                          {dept.email}
                        </a>
                        <a href={`tel:${dept.phone.replace(/\s/g, "")}`} className="hover:text-primary transition-colors">
                          {dept.phone}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="py-10 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Наш офис
            </h2>
          </motion.div>
          
          <div className="flex justify-center">
            {offices.map((office, index) => (
              <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-background p-6 rounded-2xl border border-border w-full max-w-2xl"
          >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Building className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      {office.city}
                    </h3>
                    <span className="text-xs text-primary">{office.type}</span>
                  </div>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{office.address}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                    <a href={`tel:${office.phone.replace(/\s/g, "")}`} className="text-foreground hover:text-primary transition-colors">
                      {office.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                    <a href={`mailto:${office.email}`} className="text-foreground hover:text-primary transition-colors">
                      {office.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                    <span className="text-muted-foreground">{office.hours}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      
    </div>
  )
}
