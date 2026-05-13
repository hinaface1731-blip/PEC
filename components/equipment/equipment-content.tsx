"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Drill, Cpu, TestTube, Truck, ChevronRight, Check, Compass } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CTAForm } from "@/components/cta-form"
import { useLanguage } from "@/components/language-provider"
import Link from "next/link"
import Image from "next/image"

const equipmentCategories = [
  {
    id: "drilling",
    icon: Drill,
    titleRu: "Буровое оборудование",
    titleEn: "Drilling Equipment",
    descriptionRu: "Современные буровые установки для всех типов бурения",
    descriptionEn: "Modern drilling rigs for all types of drilling",
    items: [
      {
        name: "CS-1000",
        specs: ["Глубина бурения: до 1000 м", "Диаметр бурения: 60-121 мм", "Привод: дизельный"],
        specsEn: ["Drilling depth: up to 1000 m", "Drilling diameter: 60-121 mm", "Drive: diesel"],
        location: "Игарка",
        locationEn: "Igarka",
        count: 1,
        image: "/images/equipment/cs-1000.jpg"
      },
      {
        name: "Boyles C6",
        specs: ["Глубина бурения: до 300 м", "Диаметр: до 190 мм", "Привод: дизельный"],
        specsEn: ["Drilling depth: up to 300 m", "Diameter: up to 190 mm", "Drive: diesel"],
        location: "Игарка",
        locationEn: "Igarka",
        count: 1,
        image: "/images/equipment/boylesC6.jpg"
      },
      {
        name: "EGR-800",
        specs: ["Глубина бурения: до 800 м", "Диаметр: 60-121 мм", "Высокая производительность"],
        specsEn: ["Drilling depth: up to 800 m", "Diameter: 60-121 mm", "High performance"],
        location: "Игарка",
        locationEn: "Igarka",
        count: 1,
        image: "/images/equipment/egr800.png"
      },
      {
        name: "EPC-300",
        specs: ["Глубина бурения: до 300 м", "Диаметр: до 190 мм", "Компактный"],
        specsEn: ["Drilling depth: up to 300 m", "Diameter: up to 190 mm", "Compact"],
        location: "Игарка",
        locationEn: "Igarka",
        count: 1,
        image: "/images/equipment/epc300.png"
      },
      {
        name: "УРБ-110",
        specs: ["Глубина бурения: до 110 м", "Диаметр: до 450 мм", "Шарошечное бурение"],
        specsEn: ["Drilling depth: up to 110 m", "Diameter: up to 450 mm", "Rotary drilling"],
        location: "Игарка",
        locationEn: "Igarka",
        count: 1,
        image: "/images/equipment/urb-110.png"
      },
      {
        name: "УРБ-2Д3",
        specs: ["Глубина бурения: до 350 м", "Диаметр: до 450 мм", "Универсальный"],
        specsEn: ["Drilling depth: up to 350 m", "Diameter: up to 450 mm", "Universal"],
        location: "Игарка",
        locationEn: "Igarka",
        count: 1,
        image: "/images/equipment/urb2d3.jpg"
      },
      {
        name: "RS-90",
        specs: ["Глубина бурения: до 90 м", "Компактный", "Для сложных условий"],
        specsEn: ["Drilling depth: up to 90 m", "Compact", "For difficult conditions"],
        location: "Гусь",
        locationEn: "Gus",
        count: 2,
        image: "/images/equipment/rs-90.png"
      },
      {
        name: "S-15",
        specs: ["Глубина бурения: до 150 м", "Мобильный", "Полуавтоматический"],
        specsEn: ["Drilling depth: up to 150 m", "Mobile", "Semi-automatic"],
        location: "Встречная площадь / Вилюй",
        locationEn: "Vstrechnaya area / Vilyuy",
        count: 2,
        image: "/images/equipment/s-15.jpg"
      },
      {
        name: "Forward C6",
        specs: ["Глубина бурения: до 600 м", "Диаметр бурения: 60-121 мм", "Привод: дизельный"],
        specsEn: ["Drilling depth: up to 600 m", "Drilling diameter: 60-121 mm", "Drive: diesel"],
        location: "Лора",
        locationEn: "Lora",
        count: 2,
        image: "/images/equipment/forwardc6.jpg"
      },
      {
        name: "CS-14",
        specs: ["Глубина бурения: до 1400 м", "Диаметр: 60-121 мм", "Высокая мощность"],
        specsEn: ["Drilling depth: up to 1400 m", "Diameter: 60-121 mm", "High power"],
        location: "Таймыр",
        locationEn: "Taimyr",
        count: 1,
        image: "/images/equipment/cs-14.jpg"
      },
      {
        name: "BullDril-1200",
        specs: ["Глубина бурения: до 1200 м", "Диаметр: до 190 мм", "Высокая производительность"],
        specsEn: ["Drilling depth: up to 1200 m", "Diameter: up to 190 mm", "High performance"],
        location: "Таймыр",
        locationEn: "Taimyr",
        count: 1,
        image: "/images/equipment/bulldril-1200.jpg"
      },
      {
        name: "ST-20",
        specs: ["Глубина бурения: до 2000 м", "Диаметр: 60-121 мм", "Тяжёлый класс"],
        specsEn: ["Drilling depth: up to 2000 m", "Diameter: 60-121 mm", "Heavy duty"],
        location: "Марс",
        locationEn: "Mars",
        count: 1,
        image: "/images/equipment/st-20.jpg"
      },
      {
        name: "Christensen CT20",
        specs: ["Глубина бурения: до 2500 м", "Диаметр бурения: 60-121 мм", "Привод: дизельный"],
        specsEn: ["Drilling depth: up to 2500 m", "Drilling diameter: 60-121 mm", "Drive: diesel"],
        location: "Красноярск",
        locationEn: "Krasnoyarsk",
        count: 1,
        image: "/images/equipment/christensen-ct20.jpg"
      },
      {
        name: "ПБУ 1200Р",
        specs: ["Глубина бурения: до 1200 м", "Диаметр: до 190 мм", "Российское производство"],
        specsEn: ["Drilling depth: up to 1200 m", "Diameter: up to 190 mm", "Russian made"],
        location: "Красноярск",
        locationEn: "Krasnoyarsk",
        count: 2,
        image: "/images/equipment/pbu-1200.jpg"
      }
    ]
  },
  {
    id: "geophysics",
    icon: Cpu,
    titleRu: "Геофизическое оборудование",
    titleEn: "Geophysical Equipment",
    descriptionRu: "Высокоточные приборы для геофизических исследований",
    descriptionEn: "High-precision instruments for geophysical surveys",
    items: [
      {
        name: "Магнитометр MiniMag",
        nameEn: "MiniMag Magnetometer",
        specs: ["Точность: 0.1 нТл", "Частота измерений: до 5 Гц", "GPS синхронизация"],
        specsEn: ["Accuracy: 0.1 nT", "Sampling rate: up to 5 Hz", "GPS synchronization"],
        image: "/images/minimag.jpg",
        count: 4
      },
      {
        name: "ЗСБ комплект ЦИКЛ",
        nameEn: "TEM System CYKL",
        specs: ["Метод ЗСБ", "До 10000 каналов", "Телеметрическая система"],
        specsEn: ["TEM method", "Up to 10000 channels", "Telemetry system"],
        image: "/images/cikl8.jpg",
        count: 1
      },
      {
        name: "Электроразведочная станция АМТЗ NORD",
        nameEn: "AMT System NORD",
        specs: ["Метод АМТЗ", "Глубина исследований: до 500 м", "Автоматическая обработка"],
        specsEn: ["AMT method", "Survey depth: up to 500 m", "Automatic processing"],
        image: "/images/nord.jpg",
        count: 5
      },
      {
        name: "Электроразведочный комплект выполнения ВЭЗ, СГ-ВП и т.д.",
        nameEn: "Electrical Survey System VES, IP",
        specs: ["Метод ВЭЗ, СГ-ВП", "Глубина исследований: до 500 м", "Автоматическая обработка"],
        specsEn: ["VES, IP methods", "Survey depth: up to 500 m", "Automatic processing"],
        image: "/images/vp1000.jpg",
        count: 2
      },
      {
        name: "Электроразведочный комплект электротомографии",
        nameEn: "ERT System",
        specs: ["Метод томографии", "Глубина исследований: до 250 м", "Автоматическая обработка"],
        specsEn: ["ERT method", "Survey depth: up to 250 m", "Automatic processing"],
        image: "/images/tomography.jpg",
        count: 1
      },
      {
        name: "Комплект каротажный на поисковые скважины на руду КС, ПС, КМ, ГГК, ВП",
        nameEn: "Well Logging System",
        specs: ["Каротаж", "Глубина исследований: до 500 м", "Автоматическая обработка"],
        specsEn: ["Well logging", "Survey depth: up to 500 m", "Automatic processing"],
        image: "/images/pasha.jpg",
        count: 3
      },
      {
        name: "Высокоточные инклинометры для контроля проходки скважин",
        nameEn: "High-precision Inclinometers",
        specs: ["Гироскопические и магнитные", "Глубина исследований: до 500 м", "Автоматическая обработка"],
        specsEn: ["Gyroscopic and magnetic", "Survey depth: up to 500 m", "Automatic processing"],
        image: "/images/gyro.jpg",
        count: 12
      }
    ]
  },
  {
    id: "laboratory",
    icon: TestTube,
    titleRu: "Лабораторное оборудование",
    titleEn: "Laboratory Equipment",
    descriptionRu: "Аналитические приборы для исследования проб",
    descriptionEn: "Analytical instruments for sample analysis",
    items: [
      {
        name: "Атомно-абсорбционный спектрометр",
        nameEn: "Atomic Absorption Spectrometer",
        specs: ["Определение: Au, Ag, Cu, Pb, Zn", "Точность: до 0.001 г/т", "Автосамплер на 60 проб"],
        specsEn: ["Determination: Au, Ag, Cu, Pb, Zn", "Accuracy: up to 0.001 g/t", "60-sample autosampler"],
        image: "/images/HGA.png",
        count: 1
      },
      {
        name: "Рентгенофлуоресцентный анализатор",
        nameEn: "XRF Analyzer",
        specs: ["Элементы: от Na до U", "Время анализа: 2-5 мин", "Портативный вариант"],
        specsEn: ["Elements: from Na to U", "Analysis time: 2-5 min", "Portable version"],
        image: "/images/vanta.jpg",
        count: 6
      },
      {
        name: "Тринокулярный микроскоп Opto-Edu A15.1017-T поляризационный",
        nameEn: "Polarizing Trinocular Microscope",
        specs: ["Мультиэлементный анализ", "Оптическое увеличение 40-400 крат", "До 70 элементов"],
        specsEn: ["Multi-element analysis", "Optical magnification 40-400x", "Up to 70 elements"],
        image: "/images/micro.jpg",
        count: 2
      }
    ]
  },
  {
    id: "survey",
    icon: Compass,
    titleRu: "Маркшейдерское оборудование",
    titleEn: "Survey Equipment",
    descriptionRu: "Приборы для геодезических и маркшейдерских измерений",
    descriptionEn: "Instruments for geodetic and mine surveying",
    items: [
      {
        name: "GNSS-приёмник Trimble R12i",
        nameEn: "Trimble R12i GNSS Receiver",
        specs: ["RTK точность: 8 мм + 1 ppm", "GPS/ГЛОНАСС/Galileo/BeiDou", "IMU для измерения наклона"],
        specsEn: ["RTK accuracy: 8 mm + 1 ppm", "GPS/GLONASS/Galileo/BeiDou", "Tilt compensation IMU"],
        image: "/images/Trimble-R12i.png",
        count: 10
      },
      {
        name: "Электронный тахеометр Leica TS16",
        nameEn: "Leica TS16 Total Station",
        specs: ["Точность: 1\"", "Безотражательный дальномер: 1000 м", "Автофокус и сканер"],
        specsEn: ["Accuracy: 1\"", "Reflectorless range: 1000 m", "Autofocus and scanner"],
        image: "/images/leica_ts16_1.png",
        count: 8
      },
      {
        name: "GNSS приемник SOUTH Galaxy G9",
        nameEn: "SOUTH Galaxy G9 GNSS Receiver",
        specs: ["Высокая интегрированность", "Дальность: 130 м", "HDR камера"],
        specsEn: ["High integration", "Range: 130 m", "HDR camera"],
        image: "/images/g9.jpg",
        count: 3
      },
      {
        name: "GNSS приемник SOUTH Galaxy G1",
        nameEn: "SOUTH Galaxy G1 GNSS Receiver",
        specs: ["Точность: 0.3 мм/км", "Автоматическая запись", "Работа при -20°C"],
        specsEn: ["Accuracy: 0.3 mm/km", "Automatic recording", "Operation at -20°C"],
        image: "/images/south-galaxy-g1-001.jpg",
        count: 6
      },
      {
        name: "БПЛА для аэрофотосъёмки",
        nameEn: "UAV for Aerial Photography",
        specs: ["Размах крыла: 1.3 м", "Время полёта: 90 мин", "Камера 42 МП"],
        specsEn: ["Wingspan: 1.3 m", "Flight time: 90 min", "42 MP camera"],
        image: "/images/5DM47866_2x.jpg",
        count: 4
      }
    ]
  },
  {
    id: "transport",
    icon: Truck,
    titleRu: "Спецтехника и транспорт",
    titleEn: "Special Vehicles & Transport",
    descriptionRu: "Техника для работы в сложных условиях",
    descriptionEn: "Equipment for harsh environment operations",
    items: [
      {
        name: "Вездеход ТРЭКОЛ-39294",
        nameEn: "TREKOL-39294 All-terrain Vehicle",
        specs: ["Грузоподъемность: 600 кг", "Колеса низкого давления", "Работа при -50°C"],
        specsEn: ["Load capacity: 600 kg", "Low-pressure tires", "Operation at -50°C"],
        image: "/images/trekol.png",
        count: 8
      },
      {
        name: "Автомобиль повышенной проходимости",
        nameEn: "Off-road Vehicle",
        specs: ["Полный привод", "Грузоподъемность: 1.5 т", "Кунг для оборудования"],
        specsEn: ["4WD", "Load capacity: 1.5 t", "Equipment box body"],
        image: "/images/offroad.jpg",
        count: 20
      },
      {
        name: "Мобильный лагерь",
        nameEn: "Mobile Camp",
        specs: ["Вместимость: 20 человек", "Автономность: 30 дней", "Отопление/кондиционер"],
        specsEn: ["Capacity: 20 people", "Autonomy: 30 days", "Heating/AC"],
        image: "/images/camp.jpg",
        count: 5
      },
      {
        name: "Камаз",
        nameEn: "Kamaz Truck",
        specs: ["Грузоподъемность: 10 т", "Полный привод", "Работа при -40°C"],
        specsEn: ["Load capacity: 10 t", "4WD", "Operation at -40°C"],
        image: "/images/kamaz.jpg",
        count: 5
      },
      {
        name: "Каротажная станция",
        nameEn: "Logging Unit",
        specs: ["Каротаж скважин", "Автономность: 14 дней", "Лаборатория на борту"],
        specsEn: ["Well logging", "Autonomy: 14 days", "Onboard laboratory"],
        image: "/images/logging-station.jpg",
        count: 5
      },
      {
        name: "Бульдозер",
        nameEn: "Bulldozer",
        specs: ["Мощность: 300 л.с.", "Глубина подъема отвала: 1.5 м", "Работа при -50°C"],
        specsEn: ["Power: 300 HP", "Blade lift depth: 1.5 m", "Operation at -50°C"],
        image: "/images/bulldozer.jpg",
        count: 5
      },
      {
        name: "Экскаватор",
        nameEn: "Excavator",
        specs: ["Вместимость ковша: 2.5 м³", "Глубина копания: 5 м", "Дизельный двигатель"],
        specsEn: ["Bucket capacity: 2.5 m³", "Digging depth: 5 m", "Diesel engine"],
        image: "/images/excavator.jpg",
        count: 5
      },
      {
        name: "Погрузчик",
        nameEn: "Loader",
        specs: ["Грузоподъемность: 3.5 т", "Ковш 2 м³", "Полный привод"],
        specsEn: ["Load capacity: 3.5 t", "Bucket 2 m³", "4WD"],
        image: "/images/loader.jpg",
        count: 5
      }
    ]
  }
]

export function EquipmentContent() {
  const { t } = useLanguage()
  const [activeCategory, setActiveCategory] = useState("drilling")

  const currentCategory = equipmentCategories.find(c => c.id === activeCategory)

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-card overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/403783_original.jpg"
            alt={t("Оборудование Полярной Экспедиционной Компании", "Equipment of Polar Expedition Company")}
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
                {t('Оборудование', 'Equipment')}
              </span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {t('Современное оборудование', 'Modern Equipment')}
            </h1>
            
            <p className="text-xl text-white/90 leading-relaxed">
              {t(
                'Собственный парк техники и приборов мирового уровня для выполнения полного цикла геологоразведочных работ в любых условиях.',
                'Own fleet of world-class equipment for full-cycle geological exploration in any conditions.'
              )}
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
                      <span className="font-medium">{t(category.titleRu, category.titleEn)}</span>
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
                        {t(currentCategory.titleRu, currentCategory.titleEn)}
                      </h2>
                      <p className="text-muted-foreground">
                        {t(currentCategory.descriptionRu, currentCategory.descriptionEn)}
                      </p>
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
                            <Image
                              src={item.image}
                              alt={t(item.name, item.nameEn || item.name)}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-110"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              loading="lazy"
                            />
                            <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                              {item.count} {t('ед.', 'pcs')}
                            </div>
                            {item.location && (
                              <div className="absolute bottom-4 left-4 z-10 px-2 py-1 bg-black/60 backdrop-blur-sm text-white text-xs rounded-md flex items-center gap-1">
                                <span>{t(item.location, item.locationEn || item.location)}</span>
                              </div>
                            )}
                          </div>
                          
                          <div className="p-5">
                            <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                              {t(item.name, item.nameEn || item.name)}
                            </h3>
                            
                            <div className="space-y-2">
                              {(item.specs || []).map((spec, idx) => (
                                <div key={idx} className="flex items-start gap-2 text-sm">
                                  <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                                  <span className="text-muted-foreground">
                                    {t(spec, item.specsEn?.[idx] || spec)}
                                  </span>
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
              {t('Преимущества нашего оборудования', 'Equipment Advantages')}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('Регулярное обновление парка техники и строгий контроль качества', 'Regular fleet renewal and strict quality control')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { titleRu: "100% собственное", titleEn: "100% owned", descRu: "Весь парк оборудования в собственности компании", descEn: "All equipment is company-owned" },
              { titleRu: "Сертифицировано", titleEn: "Certified", descRu: "Ежегодная поверка и сертификация приборов", descEn: "Annual verification and certification" },
              { titleRu: "Современное", titleEn: "Modern", descRu: "Средний возраст оборудования — 3 года", descEn: "Average equipment age — 3 years" },
              { titleRu: "Резервирование", titleEn: "Redundancy", descRu: "Дублирование критически важного оборудования", descEn: "Critical equipment duplication" }
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
                  {t(benefit.titleRu, benefit.titleEn)}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {t(benefit.descRu, benefit.descEn)}
                </p>
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