"use client"

import { motion } from "framer-motion"
import { Target, Eye, Award, Users, TrendingUp, Shield, MapPin, Calendar } from "lucide-react"
import { CTAForm } from "@/components/cta-form"
import Link from "next/link"

const milestones = [
  { year: "1998", title: "Основание компании", desc: "Создание ПЭК" },
  { year: "2003", title: "Первый крупный контракт", desc: "Начало работы на золоторудных месторождениях" },
  { year: "2008", title: "Расширение географии", desc: "Выход на дальний восток и крайний север" },
  { year: "2012", title: "Собственная лаборатория", desc: "Открытие аккредитованной аналитической лаборатории" },
  { year: "2016", title: "Международные стандарты", desc: "Сертификация по ISO 9001 и JORC" },
  { year: "2020", title: "Цифровизация", desc: "Внедрение цифровых технологий и 3D-моделирования" },
  { year: "2024", title: "Лидер отрасли", desc: "Более 200 выполненных проектов, 500+ сотрудников" }
]

const team = [
  {
    name: "Калмыков Иван Валерьевич",
    position: "Генеральный директор",
    experience: "30+ лет",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80"
  },
  {
    name: "Черненко Наталья Ярославовна",
    position: "Главный геолог",
    experience: "25+ лет",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80"
  },
  {
    name: "Петров Андрей Викторович",
    position: "Технический директор",
    experience: "20+ лет",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80"
  },
  {
    name: "Юсупова Дилором Рахимовна",
    position: "Директор по развитию",
    experience: "18+ лет",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80"
  }
]

const values = [
  {
    icon: Shield,
    title: "Надежность",
    description: "Гарантируем качество работ и соблюдение сроков на каждом проекте"
  },
  {
    icon: TrendingUp,
    title: "Инновации",
    description: "Постоянно внедряем новые технологии и методы исследований"
  },
  {
    icon: Users,
    title: "Профессионализм",
    description: "Команда опытных специалистов с международной квалификацией"
  },
  {
    icon: Award,
    title: "Качество",
    description: "Работа по международным стандартам JORC и NI 43-101"
  }
]

export function AboutContent() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-card overflow-hidden">
        <div className="absolute inset-0 ">
          <img 
        src="/images/compashka.jpg" 
        alt="Контакты ПЭК"
        className="w-full h-f object-cover object-[center_80%]"
        style={{
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center 50%'  // ← Здесь точно сработает
  }}
            />
          
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-2 text-white mb-4">
              <Link href="/" className="hover:text-primary text-white">Главная</Link>
              <span>/</span>
              <span className="text-white">О компании</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              О компании ПЭК
            </h1>
            
            <p className="text-xl text-white leading-relaxed">
              Более 25 лет мы помогаем недропользователям открывать и осваивать 
              месторождения полезных ископаемых в Центральной Азии и за её пределами.
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
                Наша миссия
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Обеспечивать недропользователей достоверной геологической информацией 
                для принятия обоснованных инвестиционных решений, применяя передовые 
                технологии и международные стандарты качества.
              </p>
            </motion.div>

           <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card p-8 md:p-10 rounded-2xl border border-border"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-primary" />
              </div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                Наше видение
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Стать ведущей геологоразведочной компанией Центральной Азии, 
                признанной за инновационный подход, высокое качество работ 
                и вклад в устойчивое развитие минерально-сырьевой базы региона.
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
              Наши ценности
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Принципы, которыми мы руководствуемся в каждом проекте
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
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
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
              История компании
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Путь от небольшой команды энтузиастов до лидера отрасли
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
                        {milestone.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">{milestone.desc}</p>
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

      {/* Team */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Руководство компании
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Опытная команда профессионалов с многолетним стажем в геологоразведке
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-background rounded-2xl overflow-hidden border border-border"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded-full">
                      Опыт: {member.experience}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">{member.position}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "25+", label: "Лет опыта" },
              { value: "500+", label: "Сотрудников" },
              { value: "200+", label: "Проектов" },
              { value: "15", label: "Стран" }
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
                <div className="text-primary-foreground/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTAForm />
    </div>
  )
}
