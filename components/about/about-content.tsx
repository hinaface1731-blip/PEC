"use client"

import { motion } from "framer-motion"
import { Target, Eye, Award, Users, TrendingUp, Shield, MapPin, Calendar } from "lucide-react"
import { CTAForm } from "@/components/cta-form"
import { useLanguage } from "@/components/language-provider"
import Link from "next/link"
import Image from "next/image"

const milestones = [
  { year: "2008", titleRu: "Основание компании", titleEn: "Company Foundation", descRu: "Создание Полярной Экспедиционной Компании", descEn: "Establishment of Polar Expedition Company" },
  { year: "2009", titleRu: "Первый крупный контракт", titleEn: "First Major Contract", descRu: "Начало работы на золоторудных месторождениях", descEn: "Start of work at gold deposits" },
  { year: "2010", titleRu: "Расширение географии", titleEn: "Geographic Expansion", descRu: "Выход на дальний восток и крайний север", descEn: "Expansion to Far East and Far North" },
  { year: "2012", titleRu: "Собственная лаборатория", titleEn: "Own Laboratory", descRu: "Открытие аккредитованной аналитической лаборатории", descEn: "Opening of accredited analytical laboratory" },
  { year: "2016", titleRu: "Международные стандарты", titleEn: "International Standards", descRu: "Сертификация по ISO 9001 и JORC", descEn: "ISO 9001 and JORC certification" },
  { year: "2020", titleRu: "Цифровизация", titleEn: "Digitalization", descRu: "Внедрение цифровых технологий и 3D-моделирования", descEn: "Implementation of digital technologies and 3D modeling" },
  { year: "2024", titleRu: "Лидер отрасли", titleEn: "Industry Leader", descRu: "Более 200 выполненных проектов, 500+ сотрудников", descEn: "200+ completed projects, 500+ employees" }
]

const values = [
  {
    icon: Shield,
    titleRu: "Надежность",
    titleEn: "Reliability",
    descriptionRu: "Гарантируем качество работ и соблюдение сроков на каждом проекте",
    descriptionEn: "We guarantee work quality and deadlines on every project"
  },
  {
    icon: TrendingUp,
    titleRu: "Инновации",
    titleEn: "Innovation",
    descriptionRu: "Постоянно внедряем новые технологии и методы исследований",
    descriptionEn: "Constantly implementing new technologies and research methods"
  },
  {
    icon: Users,
    titleRu: "Профессионализм",
    titleEn: "Professionalism",
    descriptionRu: "Команда опытных специалистов с международной квалификацией",
    descriptionEn: "Team of experienced specialists with international qualifications"
  },
  {
    icon: Award,
    titleRu: "Качество",
    titleEn: "Quality",
    descriptionRu: "Работа по международным стандартам JORC и NI 43-101",
    descriptionEn: "Work in compliance with JORC and NI 43-101 international standards"
  }
]

export function AboutContent() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-card overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/company8.jpg"
            alt="О компании"
            fill
            priority
            className="object-cover"
            sizes="100vw"
            style={{ objectPosition: 'center 50%' }}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
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
    {t('О компании', 'About')}
  </span>
</div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {t('Полярная Экспедиционная Компания', 'Polar Expedition Company')}
            </h1>
            
            <p className="text-xl text-white/90 leading-relaxed">
              {t(
                'Более 15 лет мы помогаем недропользователям открывать и осваивать месторождения полезных ископаемых в России и за её пределами.',
                'For over 15 years, we have been helping subsoil users discover and develop mineral deposits in Russia and beyond.'
              )}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card p-8 md:p-10 rounded-2xl border border-border"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                {t('Наша миссия', 'Our Mission')}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {t(
                  'Обеспечивать недропользователей достоверной геологической информацией для принятия обоснованных инвестиционных решений, применяя передовые технологии и международные стандарты качества.',
                  'To provide subsoil users with reliable geological information for making informed investment decisions, applying advanced technologies and international quality standards.'
                )}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card p-8 md:p-10 rounded-2xl border border-border"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-primary" />
              </div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                {t('Наше видение', 'Our Vision')}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {t(
                  'Стать ведущей геологоразведочной компанией России, признанной за инновационный подход, высокое качество работ и вклад в устойчивое развитие минерально-сырьевой базы региона.',
                  'To become a leading exploration company in Russia, recognized for its innovative approach, high quality of work and contribution to the sustainable development of the region\'s mineral resource base.'
                )}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t('Наши ценности', 'Our Values')}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t(
                'Принципы, которыми мы руководствуемся в каждом проекте',
                'The principles we follow in every project'
              )}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-background p-6 rounded-2xl border border-border text-center"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    {t(value.titleRu, value.titleEn)}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {t(value.descriptionRu, value.descriptionEn)}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t('История компании', 'Company History')}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t(
                'Путь от небольшой команды энтузиастов до лидера отрасли',
                'The journey from a small team of enthusiasts to an industry leader'
              )}
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-0.5" />

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex items-center gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"} pl-12 md:pl-0`}>
                    <div className="bg-card p-6 rounded-2xl border border-border inline-block max-w-md">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span className="text-primary font-semibold">{milestone.year}</span>
                      </div>
                      <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                        {t(milestone.titleRu, milestone.titleEn)}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {t(milestone.descRu, milestone.descEn)}
                      </p>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full md:-translate-x-1.5 ring-4 ring-background" />

                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "15+", labelRu: "Лет опыта", labelEn: "Years of experience" },
              { value: "500+", labelRu: "Сотрудников", labelEn: "Employees" },
              { value: "200+", labelRu: "Проектов", labelEn: "Projects" },
              { value: "15+", labelRu: "Регионов работы", labelEn: "Regions of operation" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-primary-foreground/80">
                  {t(stat.labelRu, stat.labelEn)}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    
    </div>
  )
}