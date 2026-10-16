"use client"

import { motion } from "framer-motion"
import { Target, Eye, Award, Users, TrendingUp, Shield, MapPin, Calendar } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import Link from "next/link"
import Image from "next/image"

const milestones = [
  {
    year: "2008",
    titleRu: "Основание компании",
    titleEn: "Company foundation",
    descRu: "Создание Полярной Экспедиционной Компании",
    descEn: "Establishment of Polar Expedition Company",
  },
]

const values = [
  {
    icon: Shield,
    titleRu: "Надежность",
    titleEn: "Reliability",
    descriptionRu: "Учитываем требования проекта, качество работ и согласованные сроки",
    descriptionEn: "We consider project requirements, work quality and agreed deadlines"
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
    descriptionRu: "Профессиональный подход к организации полевых и камеральных работ",
    descriptionEn: "A professional approach to fieldwork and office-based work"
  },
  {
    icon: Award,
    titleRu: "Качество",
    titleEn: "Quality",
    descriptionRu: "Подбор методик и требований к отчётности под задачи проекта",
    descriptionEn: "Methods and reporting requirements are selected for each project"
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
                'С 2008 года мы помогаем недропользователям открывать и осваивать месторождения полезных ископаемых в России.',
                'Since 2008, we have been helping subsoil users discover and develop mineral deposits in Russia.'
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



    
    </div>
  )
}