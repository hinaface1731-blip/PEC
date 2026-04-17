"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Drill, Cpu, TestTube, Truck, ChevronRight, Check, Compass } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CTAForm } from "@/components/cta-form"
import Link from "next/link"

const equipmentCategories = [
  {
    id: "drilling",
    icon: Drill,
    title: "Буровое оборудование",
    description: "Современные буровые установки для всех типов бурения",
    items: [
      {
        name: "Буровая установка UDR-200",
        specs: ["Глубина бурения: до 2000 м", "Диаметр бурения: 46-152 мм", "Привод: дизельный/электрический"],
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
        count: 12
      },
      {
        name: "Станок колонкового бурения СКБ-5",
        specs: ["Глубина бурения: до 500 м", "Диаметр керна: 36-93 мм", "Мобильная установка"],
        image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80",
        count: 25
      },
      {
        name: "Установка роторного бурения URB-2A2",
        specs: ["Глубина бурения: до 300 м", "Диаметр: до 190 мм", "Высокая производительность"],
        image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600&q=80",
        count: 8
      }
    ]
  },
  {
    id: "geophysics",
    icon: Cpu,
    title: "Геофизическое оборудование",
    description: "Высокоточные приборы для геофизических исследований",
    items: [
      {
        name: "Магнитометр GSM-19T",
        specs: ["Точность: 0.1 нТл", "Частота измерений: до 5 Гц", "GPS синхронизация"],
        image: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=600&q=80",
        count: 15
      },
      {
        name: "Сейсмостанция Sercel 428XL",
        specs: ["24-битное АЦП", "До 10000 каналов", "Телеметрическая система"],
        image: "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?w=600&q=80",
        count: 4
      },
      {
        name: "Электроразведочная станция ИМВП",
        specs: ["Метод ВП-СГ", "Глубина исследований: до 500 м", "Автоматическая обработка"],
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
        count: 10
      }
    ]
  },
  {
    id: "laboratory",
    icon: TestTube,
    title: "Лабораторное оборудование",
    description: "Аналитические приборы для исследования проб",
    items: [
      {
        name: "Атомно-абсорбционный спектрометр",
        specs: ["Определение: Au, Ag, Cu, Pb, Zn", "Точность: до 0.001 г/т", "Автосамплер на 60 проб"],
        image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600&q=80",
        count: 3
      },
      {
        name: "Рентгенофлуоресцентный анализатор",
        specs: ["Элементы: от Na до U", "Время анализа: 2-5 мин", "Портативный вариант"],
        image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&q=80",
        count: 6
      },
      {
        name: "ICP-MS спектрометр",
        specs: ["Мультиэлементный анализ", "Предел обнаружения: ppb", "До 70 элементов"],
        image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=600&q=80",
        count: 2
      }
    ]
  },
  {
    id: "survey",
    icon: Compass,
    title: "Маркшейдерское оборудование",
    description: "Приборы для геодезических и маркшейдерских измерений",
    items: [
      {
        name: "GNSS-приёмник Trimble R12i",
        specs: ["RTK точность: 8 мм + 1 ppm", "GPS/ГЛОНАСС/Galileo/BeiDou", "IMU для измерения наклона"],
        image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&q=80",
        count: 10
      },
      {
        name: "Электронный тахеометр Leica TS16",
        specs: ["Точность: 1\"", "Безотражательный дальномер: 1000 м", "Автофокус и сканер"],
        image: "https://images.unsplash.com/photo-1508614999368-9260051292e5?w=600&q=80",
        count: 8
      },
      {
        name: "3D сканер Leica RTC360",
        specs: ["Скорость: 2 млн точек/сек", "Дальность: 130 м", "HDR камера"],
        image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&q=80",
        count: 3
      },
      {
        name: "Нивелир цифровой Trimble DINI",
        specs: ["Точность: 0.3 мм/км", "Автоматическая запись", "Работа при -20°C"],
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
        count: 6
      },
      {
        name: "БПЛА для аэрофотосъёмки",
        specs: ["Размах крыла: 1.3 м", "Время полёта: 90 мин", "Камера 42 МП"],
        image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=600&q=80",
        count: 4
      }
    ]
  },
  {
    id: "transport",
    icon: Truck,
    title: "Спецтехника и транспорт",
    description: "Техника для работы в сложных условиях",
    items: [
      {
        name: "Вездеход ТРЭКОЛ-39294",
        specs: ["Грузоподъемность: 600 кг", "Колеса низкого давления", "Работа при -50°C"],
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
        count: 8
      },
      {
        name: "Автомобиль повышенной проходимости",
        specs: ["Полный привод", "Грузоподъемность: 1.5 т", "Кунг для оборудования"],
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
        count: 20
      },
      {
        name: "Мобильный лагерь",
        specs: ["Вместимость: 20 человек", "Автономность: 30 дней", "Отопление/кондиционер"],
        image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600&q=80",
        count: 5
      }
    ]
  }
]

export function EquipmentContent() {
  const [activeCategory, setActiveCategory] = useState("drilling")

  const currentCategory = equipmentCategories.find(c => c.id === activeCategory)

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-card overflow-hidden">
        <div className="absolute inset-0">
          <img 
        src="/images/projects.jpg" 
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
            <div className="flex items-center gap-2 text-muted-foreground mb-4">
              <Link href="/" className="hover:text-primary text-white">Главная</Link>
              <span>/</span>
              <span className="text-white">Оборудование</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Современное оборудование
            </h1>
            
            <p className="text-xl text-white leading-relaxed">
              Собственный парк техники и приборов мирового уровня для выполнения 
              полного цикла геологоразведочных работ в любых условиях.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Equipment Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Category Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-2">
                {equipmentCategories.map((category) => {
                  const Icon = category.icon
                  return (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`w-full flex items-center gap-3 px-4 py-4 rounded-xl text-left transition-all ${
                        activeCategory === category.id
                          ? "bg-primary text-primary-foreground"
                          : "bg-card hover:bg-muted text-foreground"
                      }`}
                    >
                      <Icon className="w-5 h-5 flex-shrink-0" />
                      <span className="font-medium">{category.title}</span>
                      <ChevronRight className={`w-4 h-4 ml-auto transition-transform ${
                        activeCategory === category.id ? "rotate-90" : ""
                      }`} />
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Equipment Grid */}
            <div className="lg:col-span-4">
              <AnimatePresence mode="wait">
                {currentCategory && (
                  <motion.div
                    key={currentCategory.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="mb-8">
                      <h2 className="font-display text-2xl font-bold text-foreground mb-2">
                        {currentCategory.title}
                      </h2>
                      <p className="text-muted-foreground">{currentCategory.description}</p>
                    </div>

                    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                      {currentCategory.items.map((item, index) => (
                        <motion.div
                          key={item.name}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-all"
                        >
                          <div className="relative h-48 overflow-hidden">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute top-4 right-4 px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                              {item.count} ед.
                            </div>
                          </div>
                          
                          <div className="p-5">
                            <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                              {item.name}
                            </h3>
                            
                            <div className="space-y-2">
                              {item.specs.map((spec, idx) => (
                                <div key={idx} className="flex items-start gap-2 text-sm">
                                  <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                                  <span className="text-muted-foreground">{spec}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Преимущества нашего оборудования
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Регулярное обновление парка техники и строгий контроль качества
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "100% собственное", desc: "Весь парк оборудования в собственности компании" },
              { title: "Сертифицировано", desc: "Ежегодная поверка и сертификация приборов" },
              { title: "Современное", desc: "Средний возраст оборудования — 3 года" },
              { title: "Резервирование", desc: "Дублирование критически важного оборудования" }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-background p-6 rounded-2xl border border-border"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Check className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm">{benefit.desc}</p>
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
