'use client'

import { useState } from "react"
import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock, Send, Building, Globe, Upload, FileText, CheckCircle, Briefcase, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import Image from "next/image"
import { YandexMap } from "@/components/yandex-map-v3"
import { useLanguage } from "@/components/language-provider"

const officeInfo = {
  city: "Красноярск",
  cityEn: "Krasnoyarsk",
  type: "Головной офис",
  typeEn: "Headquarters",
  address: "ул. Ленина, 84",
  addressEn: "84 Lenina St.",
  phone: "+7(391)205-15-84",
  email: "hr@polar-ec.ru",
  hours: "Пн–Пт: 10:00–18:00 (время красноярское, UTC+7)",
  hoursEn: "Mon–Fri: 10:00–18:00 (Krasnoyarsk time, UTC+7)",
  coordinates: [92.867583, 56.013528] as [number, number] // [долгота, широта]
}

const MAX_RESUME_SIZE_MB = 10

// Вакансии с подробным описанием
const vacancies = [
  {
    id: 1,
    titleRu: "-",
    titleEn: "-",
    locationRu: "-",
    locationEn: "-",
    experienceRu: "-",
    experienceEn: "-",
    salary: "-",
    employment: "-",
    employmentEn: "-",
    schedule: "-",
    scheduleEn: "-",
    requirementsRu: [
      
    ],
    requirementsEn: [
      
    ],
    dutiesRu: [
      
    ],
    dutiesEn: [
      
    ]
  },
]

// Карточки-заготовки без названия (например, "-") на сайте не показываем
const openVacancies = vacancies.filter((v) => v.titleRu.trim() && v.titleRu.trim() !== "-")

export default function ContactsContent() {
  const { t } = useLanguage()
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
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null
    if (file && file.size > MAX_RESUME_SIZE_MB * 1024 * 1024) {
      setError(t(`Файл слишком большой (максимум ${MAX_RESUME_SIZE_MB} МБ)`, `File is too large (max ${MAX_RESUME_SIZE_MB} MB)`))
      e.target.value = ''
      setSelectedFile(null)
      return
    }
    setError('')
    setSelectedFile(file)
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
      setError(t('Ошибка отправки. Попробуйте позже.', 'Failed to send. Please try again later.'))
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-card overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/career-hero.jpg"
            alt={t("Карьера в Полярной ЭК", "Career at Polar EC")}
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
              <div className="flex items-center gap-2 text-white/80 mb-4">
                <Link href="/" className="hover:text-white transition-colors">
                  {t('Главная', 'Home')}
                </Link>
                <span>/</span>
                <span className="text-white">
                  {t('Карьера', 'Career')}
                </span>
              </div>
              
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                {t('Присоединяйтесь к нашей команде', 'Join Our Team')}
              </h1>
              
              <p className="text-xl text-white/90 leading-relaxed">
                {t(
                  'Мы ищем талантливых специалистов в области геологии, геофизики и бурения. Отправьте нам своё резюме, и мы свяжемся с вами при открытии подходящей вакансии.',
                  'We are looking for talented specialists in geology, geophysics and drilling. Send us your resume and we will contact you when a suitable vacancy opens.'
                )}
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
                    {t(officeInfo.city, officeInfo.cityEn)}
                  </h3>
                  <p className="text-sm text-muted-foreground">{t(officeInfo.address, officeInfo.addressEn)}</p>
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
                  <span>{t(officeInfo.hours, officeInfo.hoursEn)}</span>
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
                  {t('Отправить резюме', 'Send Resume')}
                </h2>
                <p className="text-muted-foreground mb-8">
                  {t(
                    'Заполните форму и прикрепите файл с резюме. Мы рассмотрим вашу кандидатуру и свяжемся с вами.',
                    'Fill out the form and attach your resume. We will review your application and contact you.'
                  )}
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
                      {t('Резюме отправлено!', 'Resume Sent!')}
                    </h3>
                    <p className="text-muted-foreground">
                      {t(
                        'Спасибо за интерес к нашей компании. Мы свяжемся с вами при открытии подходящей вакансии.',
                        'Thank you for your interest in our company. We will contact you when a suitable vacancy opens.'
                      )}
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="fullName">{t('ФИО *', 'Full Name *')}</Label>
                      <Input
                        id="fullName"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder={t('Иванов Иван Иванович', 'Ivan Ivanov')}
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
                        <Label htmlFor="phone">{t('Телефон *', 'Phone *')}</Label>
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
                      <Label htmlFor="position">{t('Желаемая должность *', 'Desired Position *')}</Label>
                      <Input
                        id="position"
                        required
                        value={formData.position}
                        onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                        placeholder={t('Главный геолог / Геофизик / Инженер-буровик', 'Chief Geologist / Geophysicist / Drilling Engineer')}
                        className="bg-background"
                      />
                    </div>

                    <div>
                      <Label htmlFor="experience">{t('Опыт работы', 'Work Experience')}</Label>
                      <Textarea
                        id="experience"
                        rows={3}
                        value={formData.experience}
                        onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                        placeholder={t('Кратко опишите ваш опыт работы...', 'Briefly describe your work experience...')}
                        className="bg-background resize-none"
                      />
                    </div>

                    <div>
                      <Label htmlFor="resume">{t('Прикрепить резюме *', 'Attach Resume *')}</Label>
                      <div className="mt-2 flex items-center gap-4 flex-wrap">
                        <Input
                          id="resume"
                          type="file"
                          accept=".pdf,.doc,.docx"
                          required
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
                        {t(`Поддерживаемые форматы: PDF, DOC, DOCX (до ${MAX_RESUME_SIZE_MB} МБ)`, `Supported formats: PDF, DOC, DOCX (up to ${MAX_RESUME_SIZE_MB} MB)`)}
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
                          {t('Отправка...', 'Sending...')}
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          {t('Отправить резюме', 'Send Resume')}
                        </>
                      )}
                    </Button>

                    {error && (
                      <p className="text-red-500 text-sm text-center">{error}</p>
                    )}

                    <p className="text-xs text-muted-foreground text-center">
                      {t('Нажимая кнопку, вы соглашаетесь с', 'By clicking the button, you agree to the')}{" "}
                      <Link href="/privacy" className="text-primary hover:underline">
                        {t('политикой конфиденциальности', 'privacy policy')}
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
                  {t('Мы находимся здесь', 'We Are Located Here')}
                </h3>
                <YandexMap
                  points={[{
                    coordinates: officeInfo.coordinates,
                    title: `${t(officeInfo.city, officeInfo.cityEn)}, ${t(officeInfo.address, officeInfo.addressEn)}`,
                    color: '#2980b9',
                    size: 28,
                  }]}
                  center={officeInfo.coordinates}
                  zoom={15}
                  height={400}
                  styled={false}
                  className="rounded-xl shadow-none"
                />
                <div className="mt-4 text-center">
                  <a
                    href="https://yandex.ru/maps/?text=%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D1%8F%D1%80%D1%81%D0%BA%2C%20%D1%83%D0%BB%D0%B8%D1%86%D0%B0%20%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD%D0%B0%2C%2084"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline inline-flex items-center gap-1"
                  >
                    <MapPin className="w-4 h-4" />
                    {t('Открыть в Яндекс.Картах', 'Open in Yandex.Maps')}
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
              {t('Актуальные вакансии', 'Current Openings')}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('Присоединяйтесь к команде профессионалов. Мы ждём именно вас!', 'Join our team of professionals. We are waiting for you!')}
            </p>
          </motion.div>

          {openVacancies.length === 0 && (
            <p className="text-center text-muted-foreground max-w-xl mx-auto">
              {t(
                'Сейчас открытых вакансий нет. Отправьте резюме через форму выше — мы свяжемся с вами, когда появится подходящая позиция.',
                'There are no open positions right now. Send your resume using the form above and we will contact you when a suitable position opens.'
              )}
            </p>
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {openVacancies.map((vacancy, index) => (
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
                      {t(vacancy.titleRu, vacancy.titleEn)}
                    </h3>
                    <span className="text-lg font-bold text-primary whitespace-nowrap">
                      {vacancy.salary}
                    </span>
                  </div>
                  
                  {/* Информация о работе */}
                  <div className="space-y-2 mb-4 pb-4 border-b border-border">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>{t(vacancy.locationRu, vacancy.locationEn)}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 text-primary" />
                      <span>{t('Опыт:', 'Experience:')} {t(vacancy.experienceRu, vacancy.experienceEn)}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 pt-2">
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">
                        {t(vacancy.employment, vacancy.employmentEn)}
                      </span>
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">
                        {t(vacancy.schedule, vacancy.scheduleEn)}
                      </span>
                    </div>
                  </div>

                  {/* Требования (аккордеон) */}
                  <div className="mb-4">
                    <button
                      onClick={() => toggleDetails(vacancy.id)}
                      className="w-full flex items-center justify-between text-sm font-semibold text-foreground hover:text-primary transition-colors"
                    >
                      <span>{t('Требования', 'Requirements')}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${openDetails === vacancy.id ? 'rotate-180' : ''}`} />
                    </button>
                    {openDetails === vacancy.id && (
                      <div className="mt-3 space-y-2 pl-2">
                        {vacancy.requirementsRu.map((req, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 shrink-0" />
                            <span>{t(req, vacancy.requirementsEn[idx])}</span>
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
                      <span>{t('Обязанности', 'Responsibilities')}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${openDetails === vacancy.id + 100 ? 'rotate-180' : ''}`} />
                    </button>
                    {openDetails === vacancy.id + 100 && (
                      <div className="mt-3 space-y-2 pl-2">
                        {vacancy.dutiesRu.map((duty, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 shrink-0" />
                            <span>{t(duty, vacancy.dutiesEn[idx])}</span>
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
                    {t('Откликнуться', 'Apply Now')}
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