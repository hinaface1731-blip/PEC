'use client'

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock, Send, Building, Globe, Upload, FileText, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import Image from "next/image"
import { useYandexMapsContext } from "@/components/yandex-map-loader"

const officeInfo = {
  city: "Красноярск",
  type: "Головной офис",
  address: "ул. Ленина, 84",
  phone: "+7(391)205-15-84",
  email: "ok@polar-ec.ru",
  hours: "Пн-Пт: 10:00 - 18:00",
  coordinates: [56.013528, 92.867583] as [number, number]
}

export function ContactsContent() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    message: ""
  })
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')
  
  const mapRef = useRef<HTMLDivElement>(null)
  const { isReady, ymaps } = useYandexMapsContext()

  // Инициализация карты
  useEffect(() => {
    if (!isReady || !ymaps || !mapRef.current) return

    let map: any = null

    try {
      map = new ymaps.Map(mapRef.current, {
        center: officeInfo.coordinates,
        zoom: 15,
        controls: ['zoomControl', 'fullscreenControl'],
      })

      // Маркер офиса
      const placemark = new ymaps.Placemark(
        officeInfo.coordinates,
        {
          hintContent: officeInfo.city,
          balloonContent: `
            <div style="padding: 10px; font-family: sans-serif;">
              <strong>🏢 ${officeInfo.city}</strong><br/>
              📍 ${officeInfo.address}<br/>
              📞 ${officeInfo.phone}<br/>
              ✉️ ${officeInfo.email}
            </div>
          `,
        },
        { preset: 'islands#blueIcon' }
      )
      map.geoObjects.add(placemark)
    } catch (err) {
      console.error('Ошибка инициализации карты:', err)
    }

    return () => {
      if (map) {
        map.destroy()
        map = null
      }
    }
  }, [isReady, ymaps])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0])
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')
    
    try {
      const formDataToSend = new FormData()
      formDataToSend.append('fullName', formData.fullName)
      formDataToSend.append('email', formData.email)
      formDataToSend.append('phone', formData.phone)
      formDataToSend.append('position', formData.position)
      formDataToSend.append('experience', formData.experience)
      formDataToSend.append('message', formData.message)
      if (selectedFile) {
        formDataToSend.append('resume', selectedFile)
      }

      const response = await fetch('/api/send-resume', {
        method: 'POST',
        body: formDataToSend,
      })

      if (!response.ok) {
        throw new Error('Failed to send')
      }

      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({ fullName: "", email: "", phone: "", position: "", experience: "", message: "" })
      setSelectedFile(null)
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
          <Image
            src="/images/hero-contacts2.png"
            alt="Контакты ПЭК"
            fill
            priority
            className="object-cover"
            sizes="100vw"
            style={{ objectPosition: 'center 20%' }}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <div className="flex items-center gap-2 text-white/70 mb-4">
                <Link href="/" className="hover:text-white transition-colors">Главная</Link>
                <span>/</span>
                <span className="text-white">Карьера</span>
              </div>
              
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Работа в ПЭК
              </h1>
              
              <p className="text-xl text-white/90 leading-relaxed">
                Присоединяйтесь к команде профессионалов! Отправьте нам своё резюме,
                и мы свяжемся с вами при открытии подходящей вакансии.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Карточка офиса */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card p-6 rounded-2xl border border-border mb-8"
          >
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Building className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {officeInfo.city}
                  </h3>
                  <p className="text-sm text-muted-foreground">{officeInfo.address}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="w-4 h-4 text-primary" />
                  <a href={`tel:${officeInfo.phone.replace(/\s/g, "")}`} className="hover:text-primary transition-colors">
                    {officeInfo.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="w-4 h-4 text-primary" />
                  <a href={`mailto:${officeInfo.email}`} className="hover:text-primary transition-colors">
                    {officeInfo.email}
                  </a>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>{officeInfo.hours}</span>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-card p-8 md:p-10 rounded-2xl border border-border">
                <h2 className="font-display text-2xl font-bold text-foreground mb-2">
                  Отправить резюме
                </h2>
                <p className="text-muted-foreground mb-8">
                  Заполните форму и прикрепите файл с резюме. Мы рассмотрим вашу кандидатуру и свяжемся с вами.
                </p>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-500/10 border border-green-500/30 rounded-xl p-6 text-center"
                  >
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-500" />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                      Резюме отправлено!
                    </h3>
                    <p className="text-muted-foreground">
                      Спасибо за интерес к нашей компании. Мы свяжемся с вами при открытии подходящей вакансии.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="fullName">ФИО *</Label>
                      <Input
                        id="fullName"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Иванов Иван Иванович"
                        className="bg-background"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="ivanov@example.com"
                          className="bg-background"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Телефон *</Label>
                        <Input
                          id="phone"
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
                      <Label htmlFor="position">Желаемая должность *</Label>
                      <Input
                        id="position"
                        required
                        value={formData.position}
                        onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                        placeholder="Главный геолог / Геофизик / Инженер-буровик"
                        className="bg-background"
                      />
                    </div>

                    <div>
                      <Label htmlFor="experience">Опыт работы</Label>
                      <Textarea
                        id="experience"
                        rows={3}
                        value={formData.experience}
                        onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                        placeholder="Кратко опишите ваш опыт работы..."
                        className="bg-background resize-none"
                      />
                    </div>

                    <div>
                      <Label htmlFor="resume">Прикрепить резюме *</Label>
                      <div className="mt-2 flex items-center gap-4 flex-wrap">
                        <Input
                          id="resume"
                          type="file"
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileChange}
                          className="flex-1 bg-background"
                        />
                        {selectedFile && (
                          <span className="text-sm text-muted-foreground flex items-center gap-1">
                            <FileText className="w-4 h-4" />
                            {selectedFile.name}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        Поддерживаемые форматы: PDF, DOC, DOCX
                      </p>
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
                          Отправить резюме
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

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-card p-6 rounded-2xl border border-border h-full">
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                  Мы находимся здесь
                </h3>
                <div
                  ref={mapRef}
                  className="rounded-xl overflow-hidden"
                  style={{ width: '100%', height: '400px' }}
                >
                  {!isReady && (
                    <div className="w-full h-full flex items-center justify-center bg-muted">
                      <span className="text-muted-foreground">Загрузка карты...</span>
                    </div>
                  )}
                </div>
                <div className="mt-4 text-center">
                  <a
                    href="https://maps.yandex.ru/?text=Красноярск, улица Ленина, 84"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline inline-flex items-center gap-1"
                  >
                    <MapPin className="w-4 h-4" />
                    Открыть в Яндекс.Картах
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Open Positions (краткий список) */}
      <section className="py-12 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground text-center mb-8">
            Мы ищем специалистов
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {['Геологи', 'Геофизики', 'Инженеры-буровики', 'Маркшейдеры', 'Лаборанты', 'Программисты ГИС'].map((position, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-background border border-border rounded-full text-sm text-foreground"
              >
                {position}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}