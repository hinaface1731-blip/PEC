'use client'

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock, Send, Building, Globe, Upload, FileText, CheckCircle, Briefcase, ChevronDown } from "lucide-react"
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
  email: "hr@polar-ec.ru",
  hours: "Пн-Пт: 10:00 - 18:00",
  coordinates: [56.013528, 92.867583] as [number, number]
}

// Вакансии с подробным описанием
const vacancies = [
  {
    id: 1,
    titleRu: "Главный геолог",
    titleEn: "Chief Geologist",
    locationRu: "Красноярск",
    locationEn: "Krasnoyarsk",
    experienceRu: "от 5 лет",
    experienceEn: "5+ years",
    salary: "от 150 000 ₽",
    employment: "Полная занятость",
    schedule: "5/2",
    requirementsRu: [
      "Высшее геологическое образование",
      "Опыт руководства геологическими проектами от 3 лет",
      "Знание ГКЗ и JORC стандартов",
      "Уверенное владение Micromine, Surpac",
      "Опыт работы в Арктике/Сибири приветствуется"
    ],
    requirementsEn: [
      "Higher geological education",
      "3+ years of experience managing geological projects",
      "Knowledge of GKZ and JORC standards",
      "Proficiency in Micromine, Surpac",
      "Experience in Arctic/Siberia is a plus"
    ],
    dutiesRu: [
      "Руководство геологическими проектами",
      "Подготовка отчётов ГКЗ/ТКЗ",
      "Координация полевых работ",
      "Взаимодействие с недропользователями"
    ],
    dutiesEn: [
      "Management of geological projects",
      "Preparation of GKZ/TKZ reports",
      "Coordination of field work",
      "Interaction with subsoil users"
    ]
  },
  {
    id: 2,
    titleRu: "Геофизик",
    titleEn: "Geophysicist",
    locationRu: "Красноярск / Вахта",
    locationEn: "Krasnoyarsk / Rotation",
    experienceRu: "от 3 лет",
    experienceEn: "3+ years",
    salary: "от 120 000 ₽",
    employment: "Полная занятость",
    schedule: "Вахта / 5/2",
    requirementsRu: [
      "Высшее геофизическое образование",
      "Опыт полевых работ от 2 лет",
      "Знание методов АМТЗ, ЗСБ, ВП",
      "Навыки обработки данных (Oasis Montaj, Zond)",
      "Готовность к вахтовому методу"
    ],
    requirementsEn: [
      "Higher geophysical education",
      "2+ years of field work experience",
      "Knowledge of AMT, TEM, IP methods",
      "Data processing skills (Oasis Montaj, Zond)",
      "Ready for rotational work"
    ],
    dutiesRu: [
      "Проведение полевых геофизических работ",
      "Первичная обработка и интерпретация данных",
      "Составление отчётной документации",
      "Настройка и калибровка оборудования"
    ],
    dutiesEn: [
      "Field geophysical surveys",
      "Data processing and interpretation",
      "Report documentation preparation",
      "Equipment setup and calibration"
    ]
  },
  {
    id: 3,
    titleRu: "Инженер-буровик",
    titleEn: "Drilling Engineer",
    locationRu: "Вахта",
    locationEn: "Rotation",
    experienceRu: "от 3 лет",
    experienceEn: "3+ years",
    salary: "от 130 000 ₽",
    employment: "Полная занятость",
    schedule: "Вахта",
    requirementsRu: [
      "Профильное образование",
      "Опыт колонкового бурения от 3 лет",
      "Знание технологии ССК",
      "Навыки руководства буровой бригадой",
      "Готовность к работе в сложных климатических условиях"
    ],
    requirementsEn: [
      "Specialized education",
      "3+ years of core drilling experience",
      "Knowledge of SSK technology",
      "Drilling crew management skills",
      "Ready to work in harsh climate conditions"
    ],
    dutiesRu: [
      "Организация и контроль буровых работ",
      "Ведение буровой документации",
      "Контроль выхода керна",
      "Обеспечение соблюдения ТБ"
    ],
    dutiesEn: [
      "Drilling operations organization and control",
      "Drilling documentation maintenance",
      "Core recovery control",
      "Safety compliance ensuring"
    ]
  },
  {
    id: 4,
    titleRu: "Маркшейдер",
    titleEn: "Surveyor",
    locationRu: "Красноярск / Вахта",
    locationEn: "Krasnoyarsk / Rotation",
    experienceRu: "от 3 лет",
    experienceEn: "3+ years",
    salary: "от 120 000 ₽",
    employment: "Полная занятость",
    schedule: "5/2 / Вахта",
    requirementsRu: [
      "Высшее горное образование",
      "Опыт работы от 3 лет",
      "Навыки работы с GNSS-оборудованием",
      "Знание Nanosoft, КРЕДО-Диалог",
      "Аттестация в Ростехнадзоре приветствуется"
    ],
    requirementsEn: [
      "Higher mining education",
      "3+ years of experience",
      "GNSS equipment skills",
      "Knowledge of Nanosoft, CREDO-Dialog",
      "Rostechnadzor certification is a plus"
    ],
    dutiesRu: [
      "Геодезическое обеспечение горных работ",
      "Создание опорных сетей",
      "Топографическая съёмка",
      "Подготовка маркшейдерской документации"
    ],
    dutiesEn: [
      "Geodetic support of mining operations",
      "Control network creation",
      "Topographic surveying",
      "Survey documentation preparation"
    ]
  },
  {
    id: 5,
    titleRu: "Программист ГИС",
    titleEn: "GIS Programmer",
    locationRu: "Красноярск",
    locationEn: "Krasnoyarsk",
    experienceRu: "от 2 лет",
    experienceEn: "2+ years",
    salary: "от 100 000 ₽",
    employment: "Полная занятость",
    schedule: "5/2",
    requirementsRu: [
      "Опыт работы с QGIS, ArcGIS от 2 лет",
      "Знание Python, SQL",
      "Навыки автоматизации процессов",
      "Опыт работы с геологическими базами данных",
      "Понимание геоинформатики"
    ],
    requirementsEn: [
      "2+ years of experience with QGIS, ArcGIS",
      "Knowledge of Python, SQL",
      "Process automation skills",
      "Experience with geological databases",
      "Understanding of geoinformatics"
    ],
    dutiesRu: [
      "Разработка и поддержка ГИС-проектов",
      "Автоматизация геологических расчетов",
      "Создание карт и 3D-моделей",
      "Интеграция данных из различных источников"
    ],
    dutiesEn: [
      "GIS projects development and support",
      "Automation of geological calculations",
      "Creation of maps and 3D models",
      "Data integration from various sources"
    ]
  },
  {
    id: 6,
    titleRu: "Лаборант-аналитик",
    titleEn: "Laboratory Analyst",
    locationRu: "Красноярск",
    locationEn: "Krasnoyarsk",
    experienceRu: "от 1 года",
    experienceEn: "1+ year",
    salary: "от 60 000 ₽",
    employment: "Полная занятость",
    schedule: "5/2",
    requirementsRu: [
      "Среднее специальное или высшее химическое образование",
      "Опыт работы в лаборатории от 1 года",
      "Навыки работы с ICP-MS, XRF",
      "Аккуратность и внимательность",
      "Знание методик пробоподготовки"
    ],
    requirementsEn: [
      "Secondary specialized or higher chemical education",
      "1+ year of laboratory experience",
      "Skills with ICP-MS, XRF",
      "Accuracy and attentiveness",
      "Knowledge of sample preparation methods"
    ],
    dutiesRu: [
      "Проведение химических анализов проб",
      "Ведение журналов и протоколов",
      "Подготовка проб к анализу",
      "Контроль качества результатов"
    ],
    dutiesEn: [
      "Chemical analysis of samples",
      "Maintenance of logs and protocols",
      "Sample preparation for analysis",
      "Quality control of results"
    ]
  }
]

export default function ContactsContent() {
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
  const [activeVacancy, setActiveVacancy] = useState("")
  const [openDetails, setOpenDetails] = useState<number | null>(null)
  
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

  const handleVacancyClick = (titleRu: string) => {
    setActiveVacancy(titleRu)
    setFormData(prev => ({ ...prev, position: titleRu }))
    document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' })
  }

  const toggleDetails = (id: number) => {
    setOpenDetails(openDetails === id ? null : id)
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
      setActiveVacancy("")
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
            alt="Карьера в ПЭК"
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
                Присоединяйтесь к команде ПЭК
              </h1>
              
              <p className="text-xl text-white/90 leading-relaxed">
                Мы ищем талантливых специалистов в области геологии, геофизики, бурения и IT.
                Отправьте нам своё резюме, и мы свяжемся с вами при открытии подходящей вакансии.
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
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div id="application-form" className="bg-card p-8 md:p-10 rounded-2xl border border-border">
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

      {/* Vacancies Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Briefcase className="w-6 h-6 text-primary" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Актуальные вакансии
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Присоединяйтесь к команде профессионалов. Мы ждём именно вас!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vacancies.map((vacancy, index) => (
              <motion.div
                key={vacancy.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-background rounded-2xl border border-border overflow-hidden hover:border-primary/30 transition-all group"
              >
                <div className="p-6">
                  {/* Заголовок и зарплата */}
                  <div className="flex justify-between items-start gap-4 mb-3">
                    <h3 className="font-display text-xl font-semibold text-foreground">
                      {vacancy.titleRu}
                    </h3>
                    <span className="text-lg font-bold text-primary whitespace-nowrap">
                      {vacancy.salary}
                    </span>
                  </div>
                  
                  {/* Информация о работе */}
                  <div className="space-y-2 mb-4 pb-4 border-b border-border">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>{vacancy.locationRu}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 text-primary" />
                      <span>Опыт: {vacancy.experienceRu}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 pt-2">
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">
                        {vacancy.employment}
                      </span>
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">
                        {vacancy.schedule}
                      </span>
                    </div>
                  </div>

                  {/* Требования (аккордеон) */}
                  <div className="mb-4">
                    <button
                      onClick={() => toggleDetails(vacancy.id)}
                      className="w-full flex items-center justify-between text-sm font-semibold text-foreground hover:text-primary transition-colors"
                    >
                      <span>Требования</span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${openDetails === vacancy.id ? 'rotate-180' : ''}`} />
                    </button>
                    {openDetails === vacancy.id && (
                      <div className="mt-3 space-y-2 pl-2">
                        {vacancy.requirementsRu.map((req, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 shrink-0" />
                            <span>{req}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Обязанности (аккордеон) */}
                  <div className="mb-5">
                    <button
                      onClick={() => toggleDetails(vacancy.id + 100)}
                      className="w-full flex items-center justify-between text-sm font-semibold text-foreground hover:text-primary transition-colors"
                    >
                      <span>Обязанности</span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${openDetails === vacancy.id + 100 ? 'rotate-180' : ''}`} />
                    </button>
                    {openDetails === vacancy.id + 100 && (
                      <div className="mt-3 space-y-2 pl-2">
                        {vacancy.dutiesRu.map((duty, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 shrink-0" />
                            <span>{duty}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Кнопка отклика */}
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-white transition-colors"
                    onClick={() => handleVacancyClick(vacancy.titleRu)}
                  >
                    Откликнуться
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}