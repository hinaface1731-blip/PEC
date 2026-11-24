"use client"

import { useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Drill, Cpu, TestTube, Truck, ChevronRight, Check, Compass, type LucideIcon } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import Link from '@/components/localized-link'
import Image from "next/image"
import { FallbackImage } from "@/components/ui/fallback-image"
import { equipmentManufacturers } from "@/lib/equipment-manufacturers"
import { drawEquipmentPhoto, equipmentPhotoDisplay } from "@/lib/equipment-photo-display"
import { zolotinkaGoldRange } from "@/lib/zolotinka"

interface EquipmentCategory {
  id: string
  icon: LucideIcon
  titleRu: string
  titleEn: string
  descriptionRu: string
  descriptionEn: string
  items: (Pick<EquipmentPhotoProps, 'modelLinks'> & {
    name: string
    nameEn: string
    specs: string[]
    specsEn: string[]
    image: string
    imageAlt?: { ru: string; en: string }
    detailsHref?: string
  })[]
}

const equipmentCategories: EquipmentCategory[] = [
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
        nameEn: "CS-1000 Drilling Rig",
        specs: [
          "Наземное колонковое бурение, дизельный привод",
          "Для модификации P6L, расчётная глубина в сухой вертикальной скважине: 1 370 м (B), 1 070 м (N), 730 м (H), 400 м (P)",
        ],
        specsEn: [
          "Diesel-powered surface core drilling",
          "P6L variant rated depth in a dry vertical hole: 1,370 m (B), 1,070 m (N), 730 m (H), 400 m (P)",
        ],
        image: "/images/equipment/cs-1000.png"
      },
      {
        name: "Boyles C6",
        nameEn: "Boyles C6 Drill Rig",
        specs: [
          "Расчётная глубина в сухой вертикальной скважине со стандартными штангами: 1 211 м (N), 1 536 м (B)",
          "Максимальный крутящий момент: 7 602 Н·м",
          "Усилие подъёма системы подачи: 138 кН",
          "Угол бурения: 45–90°",
        ],
        specsEn: [
          "Rated depth in a dry vertical hole with standard rods: 1,211 m (N), 1,536 m (B)",
          "Maximum torque: 7,602 N·m",
          "Feed system pull force: 138 kN",
          "Drilling angle: 45–90°",
        ],
        image: "/images/equipment/boylesC6.png"
      },
      {
        name: "EGR EP800G",
        nameEn: "EGR EP800G Drill Rig",
        specs: [
          "Гидравлическая установка для колонкового бурения",
          "Глубина по каталогу: 200 м (PQ), 400 м (HTW), 800 м (NTW), 1 000 м (BTW)",
          "Диаметры скважины в том же порядке: 123, 96, 76 и 60 мм",
        ],
        specsEn: [
          "Hydraulic core drilling rig",
          "Catalog depth ratings: 200 m (PQ), 400 m (HTW), 800 m (NTW), 1,000 m (BTW)",
          "Corresponding hole diameters: 123, 96, 76 and 60 mm",
        ],
        image: "/images/equipment/egr-ep800g.webp"
      },
      {
        name: "EPC-300",
        nameEn: "EPC-300 Drill Rig",
        specs: ["Гидравлическая установка для колонкового бурения", "По каталогу EGR для EPC300G, глубина: 50 м (PQ), 100 м (HTW), 300 м (NTW), 400 м (BTW)"],
        specsEn: ["Hydraulic core drilling rig", "EGR depth ratings for the EPC300G: 50 m (PQ), 100 m (HTW), 300 m (NTW), 400 m (BTW)"],
        image: "/images/equipment/epc300.png"
      },
      {
        name: "УРБ-110",
        nameEn: "URB-110 Drill Rig",
        specs: [
          "Расчётная глубина: 1 400 м (BQ), 1 100 м (NQ), 800 м (HQ), 400 м (PQ)",
          "Гидравлический привод подачи и вращения",
          "Угол бурения: 45–95°",
        ],
        specsEn: [
          "Calculated drilling depth: 1,400 m (BQ), 1,100 m (NQ), 800 m (HQ), 400 m (PQ)",
          "Hydraulic feed and rotation",
          "Drilling angle: 45–95°",
        ],
        image: "/images/equipment/urb-110.png"
      },
      {
        name: "УРБ-2Д3",
        nameEn: "URB-2D3 Drill Rig",
        specs: [
          "Вращательное бурение вертикальных скважин",
          "По данным МОЗБТ для 2Д3М, глубина с промывкой: 300 м для структурных скважин, 100 м для геофизических",
          "Начальный диаметр при бурении с промывкой (2Д3М): 450 мм",
        ],
        specsEn: [
          "Rotary drilling of vertical boreholes",
          "MOZBT depth ratings for the 2D3M with circulation: 300 m for structural holes, 100 m for geophysical holes",
          "Starting hole diameter with circulation (2D3M): 450 mm",
        ],
        image: "/images/equipment/urb2d3.png"
      },
      {
        name: "RS-90",
        nameEn: "RS-90 Drill Rig",
        specs: ["Алмазное колонковое бурение", "Глубина по каталогу: 1 400 м (BWL), 1 200 м (NWL), 800 м (HWL), 475 м (PWL)"],
        specsEn: ["Diamond core drilling", "Catalog depth ratings: 1,400 m (BWL), 1,200 m (NWL), 800 m (HWL), 475 m (PWL)"],
        image: "/images/equipment/rs-90.png"
      },
      {
        name: "S-15",
        nameEn: "S-15 Drill Rig",
        specs: ["Расчётная глубина вертикального бурения в однородной породе: 1 200 м (N, ССК)"],
        specsEn: ["Rated depth for vertical wireline drilling in homogeneous rock: 1,200 m (N)"],
        image: "/images/equipment/s-15.png"
      },
      {
        name: "Forward C6",
        nameEn: "Forward C6 Drill Rig",
        specs: [
          "Расчётная глубина в вертикальной скважине с буровым раствором: 2 009 м (BQ), 1 534 м (NQ), 1 299 м (HQ), 980 м (PQ)",
          "Дизельный двигатель Cummins 6CTA8.3-C240: до 179 кВт",
        ],
        specsEn: [
          "Calculated vertical depth in a mud-filled hole: 2,009 m (BQ), 1,534 m (NQ), 1,299 m (HQ), 980 m (PQ)",
          "Cummins 6CTA8.3-C240 diesel engine: up to 179 kW",
        ],
        image: "/images/equipment/forwardC6.jpg"
      },
      {
        name: "Christensen CS14",
        nameEn: "Christensen CS14 Drill Rig",
        specs: [
          "Расчётная глубина в вертикальной скважине с водой при стандартных штангах: 1 550 м (B), 1 200 м (N), 800 м (H), 500 м (P)",
          "Усилие подъёма системы подачи: 138 кН",
        ],
        specsEn: ["Rated depth in a vertical water-filled hole with standard rods: 1,550 m (B), 1,200 m (N), 800 m (H), 500 m (P)", "Feed system pull force: 138 kN"],
        image: "/images/equipment/Christensen-CS14.png"
      },
      {
        name: "BULLDRILL 1200",
        nameEn: "BULLDRILL 1200 Drill Rig",
        specs: ["Наземное колонковое бурение для геологоразведки"],
        specsEn: ["Surface core drilling for mineral exploration"],
        image: "/images/equipment/bulldril-1200.png"
      },
      {
        name: "Буровая установка на автомобильном шасси",
        nameEn: "Truck-Mounted Drill Rig",
        specs: ["Мобильная установка для наземных буровых работ"],
        specsEn: ["Mobile rig for surface drilling"],
        image: "/images/equipment/st-20.png"
      },
      {
        name: "Christensen CT20",
        nameEn: "Christensen CT20 Drill Rig",
        specs: [
          "Расчётная глубина в заполненной водой скважине со стандартными штангами: 3 417 м (B), 2 694 м (N), 1 788 м (H), 1 092 м (P)",
          "Усилие подъёма системы подачи: 200 кН",
          "Максимальный крутящий момент: 8 150 Н·м",
        ],
        specsEn: [
          "Calculated depth in a water-filled hole with standard rods: 3,417 m (B), 2,694 m (N), 1,788 m (H), 1,092 m (P)",
          "Feed system pull force: 200 kN",
          "Maximum torque: 8,150 N·m",
        ],
        image: "/images/equipment/christensen-ct20.png"
      },
      {
        name: "ПБУ 1200Р",
        nameEn: "PBU 1200R Drill Rig",
        specs: [
          "Роторное бурение разведочных скважин",
          "Расчётная глубина: до 2 000 м",
          "Частота вращения ротора: 0–700 об/мин",
        ],
        specsEn: [
          "Rotary drilling of exploration boreholes",
          "Design drilling depth: up to 2,000 m",
          "Rotary speed: 0–700 rpm",
        ],
        image: "/images/equipment/pbu-1200.png",
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
        specs: [
          "Протонный магнитометр на эффекте Оверхаузера",
          "Диапазон измерения магнитного поля: 20 000–110 000 нТл",
          "Абсолютная погрешность: менее 0,2 нТл",
          "Минимальный цикл измерения: 0,2 с",
        ],
        specsEn: [
          "Overhauser-effect proton magnetometer",
          "Magnetic field range: 20,000–110,000 nT",
          "Absolute error: less than 0.2 nT",
          "Minimum measurement cycle: 0.2 s",
        ],
        image: "/images/equipment/minimag.png"
      },
      {
        name: "Комплект ЗСБ «Цикл-8»",
        nameEn: "Cycle-8 TEM System",
        specs: ["Зондирование становлением поля в ближней зоне (ЗСБ)", "Основные блоки: измеритель ЦЭИ-8, генератор тока и блок синхронизации"],
        specsEn: ["Near-zone transient electromagnetic sounding (TEM)", "Main components: TsEI-8 receiver, current transmitter and synchronization unit"],
        image: "/images/equipment/cikl8.png"
      },
      {
        name: "Электроразведочная станция АМТЗ NORD",
        nameEn: "AMT System NORD",
        specs: ["Аудиомагнитотеллурическое зондирование (АМТЗ)", "Пять измерительных каналов: два электрических и три магнитных"],
        specsEn: ["Audio-magnetotelluric sounding (AMT)", "Five measurement channels: two electric and three magnetic"],
        image: "/images/equipment/nord.png"
      },
      {
        name: "Электроразведочный комплект выполнения ВЭЗ, СГ-ВП.",
        nameEn: "Electrical Survey Systems",
        specs: ["Вертикальное электрическое зондирование (ВЭЗ)", "Срединный градиент с измерением вызванной поляризации (СГ-ВП)"],
        specsEn: ["Vertical electrical sounding (VES)", "Mid-gradient induced polarization (IP) surveys"],
        image: "/images/equipment/vp1000.jpg"
      },
      {
        name: "Электроразведочный комплект электротомографии",
        nameEn: "ERT System",
        specs: ["Электротомография по измерениям кажущегося удельного сопротивления на профиле"],
        specsEn: ["Electrical resistivity tomography using apparent resistivity measurements along a survey line"],
        image: "/images/equipment/tomography.png"
      },
      {
        name: "Комплект каротажный на поисковые скважины на руду КС, ПС, КМ, ГГК, ВП",
        nameEn: "Well Logging System",
        specs: [
          "Измерение кажущегося сопротивления (КС) и естественного потенциала (ПС)",
          "Кавернометрия (КМ), гамма-гамма-каротаж (ГГК) и каротаж вызванной поляризации (ВП)",
        ],
        specsEn: ["Apparent resistivity and spontaneous potential logging", "Caliper, gamma-gamma and induced polarization logging"],

        image: "/images/equipment/ingeo-logging-kit.webp",
      },
      {
        name: "Скважинные инклинометры",
        nameEn: "Borehole Inclinometers",
        specs: ["Контроль траектории скважины по зенитному углу и азимуту", "Гироскопический ИГТ-43: измерения при зенитных углах 0,5–70°"],
        specsEn: ["Borehole trajectory surveys using inclination and azimuth", "IGT-43 gyroscopic tool: inclination measurement range of 0.5–70°"],

        image: "/images/equipment/igt-43-kit.webp",
        imageAlt: { ru: "Гироскопический инклинометр ИГТ-43", en: "IGT-43 gyroscopic inclinometer" },
        modelLinks: [
          { name: "ИГТ-43", nameEn: "IGT-43", url: "https://m-geo.ru/equipment/geologicheskoe-oborudovanie/inklinometr-igt-43/" },
        ],
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
        name: "Полевая лаборатория «Золотинка»",
        nameEn: "Zolotinka Field Laboratory",
        specs: [
          "Определение золота в пробах горных пород и руд в полевых условиях",
          "Рентгенофлуоресцентный анализ после предварительного концентрирования золота",
          `Диапазон определения по методике НСАМ № 392-Х/РС (ред. 2019 г.): ${zolotinkaGoldRange.ru}`,
        ],
        specsEn: [
          "On-site determination of gold in rock and ore samples",
          "X-ray fluorescence analysis after gold preconcentration",
          `Determination range under NSAM Method No. 392-Kh/RS (2019 revision): ${zolotinkaGoldRange.en}`,
        ],
        image: "/images/equipment/zolotinka-lab-illustration.webp",
        imageAlt: {
          ru: "Оборудование полевой лаборатории «Золотинка»: муфельная печь, вытяжной шкаф и образцы породы",
          en: "Zolotinka field laboratory equipment: a muffle furnace, fume hood, and rock samples",
        },
        detailsHref: "/services/lab#zolotinka",
      },
      {
        name: "Рентгенофлуоресцентный анализатор Vanta",
        nameEn: "Vanta XRF Analyzer",
        specs: ["Ручной рентгенофлуоресцентный анализатор для элементного анализа", "Набор определяемых элементов зависит от модели и режима измерения"],
        specsEn: ["Handheld X-ray fluorescence analyzer for elemental analysis", "Detectable elements vary by model and test mode"],

        image: "/images/equipment/1530699564047_1.png",
        modelLinks: [
          { name: "Evident Vanta", nameEn: "Evident Vanta", url: "https://ims.evidentscientific.com/en/products/xrf-analyzers/vanta" },
        ],
      },
      {
        name: "Тринокулярный микроскоп Opto-Edu A15.1017-T поляризационный",
        nameEn: "Opto-Edu A15.1017-T Trinocular Polarizing Microscope",
        specs: ["Поляризационные наблюдения в проходящем свете", "Ахроматические объективы 4×, 10× и 40×, окуляр 10×"],
        specsEn: ["Transmitted-light polarized microscopy", "4×, 10× and 40× achromatic objectives, 10× eyepiece"],

        image: "/images/equipment/mircoscope.png"
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
        specs: [
          "Точность RTK (СКО) при базовой линии <30 км: 8 мм + 1 ppm в плане, 15 мм + 1 ppm по высоте",
          "672 канала GNSS",
          "Компенсация наклона вехи на основе IMU (Trimble TIP)",
        ],
        specsEn: [
          "Single-baseline RTK precision (<30 km, RMS): 8 mm + 1 ppm horizontal, 15 mm + 1 ppm vertical",
          "672 GNSS channels",
          "IMU-based pole tilt compensation (Trimble TIP)",
        ],

        image: "/images/equipment/trimble-r12i.png",
      },
      {
        name: "ГНСС-приёмник SOUTH Galaxy G9",
        nameEn: "SOUTH Galaxy G9 GNSS Receiver",
        specs: [
          "Режимы RTK и статических измерений",
          "Точность RTK по UHF (СКО): 8 мм + 1 ppm в плане, 15 мм + 1 ppm по высоте",
        ],
        specsEn: [
          "RTK and static survey modes",
          "UHF RTK precision (RMS): 8 mm + 1 ppm horizontal, 15 mm + 1 ppm vertical",
        ],
  
        image: "/images/equipment/south-galaxy-g9.png"
      },
      {
        name: "ГНСС-приёмник SOUTH Galaxy G1 Plus",
        nameEn: "SOUTH Galaxy G1 Plus GNSS Receiver",
        specs: [
          "Режимы RTK и статических измерений",
          "Компенсация наклона вехи на основе IMU",
        ],
        specsEn: [
          "RTK and static survey modes",
          "IMU-based pole tilt compensation",
        ],
        image: "/images/equipment/south-galaxy-g1-plus.webp",
      },
      {
        name: "ГНСС-приёмник PrinCe i35XR",
        nameEn: "PrinCe i35XR GNSS Receiver",
        specs: ["RTK-ровер с компенсацией наклона вехи", "Встроенный лазерный дальномер и камера для наведения"],
        specsEn: ["RTK rover with pole tilt compensation", "Integrated laser rangefinder and camera for aiming"],
        image: "/images/equipment/prince-i35xr.webp",
      },
      {
        name: "ГНСС-приёмник PrinCe iBase",
        nameEn: "PrinCe iBase GNSS Receiver",
        specs: ["Базовая станция для полевых работ в режиме RTK", "Встроенный УКВ-модем для передачи поправок"],
        specsEn: ["Base station for field RTK surveys", "Integrated UHF radio for transmitting corrections"],
        image: "/images/equipment/prince-ibase.webp",
      },
      {
        name: "Полевой контроллер SOUTH H6",
        nameEn: "SOUTH H6 Field Controller",
        specs: ["Полевой сбор данных на Android", "Сенсорный экран и физическая буквенно-цифровая клавиатура"],
        specsEn: ["Android field data collection", "Touchscreen and physical alphanumeric keypad"],
        image: "/images/equipment/south-h6.webp",
      },
      {
        name: "Полевой контроллер CHCNAV HCE620",
        nameEn: "CHCNAV HCE620 Field Controller",
        specs: ["Сбор данных полевой съёмки на Android", "Поддержка полевого ПО LandStar 8"],
        specsEn: ["Android field survey data collection", "Supports LandStar 8 field software"],
        image: "/images/equipment/chcnav-hce620.webp",
        imageAlt: { ru: "Полевой контроллер PrinCe HCE620", en: "PrinCe HCE620 field controller" },
        modelLinks: [
          { name: "Фото ПРИН", nameEn: "Photo by PRIN", url: "https://prin.ru/kontrollery/prince/kontroller_prince_hce620/" },
        ],
      },
      {
        name: "Внешний радиомодем SOUTH TRU35",
        nameEn: "SOUTH TRU35 External Radio Modem",
        specs: ["Передача RTK-поправок в диапазоне 410–470 МГц", "Настройка по Bluetooth"],
        specsEn: ["RTK correction transmission in the 410–470 MHz band", "Bluetooth configuration"],
        image: "/images/equipment/south-tru35.webp",
        modelLinks: [
          { name: "Геодетика", nameEn: "Geodetika", url: "https://geodetika.ru/product/radiomodem-tru35/" },
        ],
      },
      {
        name: "Внешний радиомодем PrinCe DL8",
        nameEn: "PrinCe DL8 External Radio Modem",
        specs: ["Диапазон частот: 410–470 МГц", "Шесть уровней мощности передатчика: от 5 до 35 Вт"],
        specsEn: ["Frequency range: 410–470 MHz", "Six transmitter power settings from 5 to 35 W"],
        image: "/images/equipment/prince-dl8.webp",
      },
      {
        name: "Лазерный дальномер RGK DL50",
        nameEn: "RGK DL50 Laser Distance Meter",
        specs: ["Измерение расстояний до 50 м", "Точность измерения расстояния ±2 мм", "Встроенный угломер"],
        specsEn: ["Measures distances up to 50 m", "Distance measurement accuracy of ±2 mm", "Built-in angle sensor"],
        image: "/images/equipment/rgk-dl50.webp",
      },
      {
        name: "Квадрокоптер DJI Mavic 4 Pro",
        nameEn: "DJI Mavic 4 Pro Drone",
        specs: ["Аэрофотосъёмка участков работ", "Основная камера Hasselblad с матрицей 4/3 CMOS и разрешением 100 Мп"],
        specsEn: ["Aerial photography of work sites", "Main Hasselblad camera with a 4/3 CMOS sensor and 100 MP resolution"],
        image: "/images/equipment/dji-mavic-4-pro.webp",
      },
      {
        name: "Квадрокоптер DJI Matrice 4E",
        nameEn: "DJI Matrice 4E Survey Drone",
        specs: ["Аэрофотосъёмка для картографирования с RTK-позиционированием", "Широкоугольная камера 20 Мп с механическим затвором"],
        specsEn: ["RTK-enabled aerial mapping", "20 MP wide-angle camera with a mechanical shutter"],
        image: "/images/equipment/dji-matrice-4e.webp",
        modelLinks: [
          { name: "Фото DJI", nameEn: "DJI photo", url: "https://www.mynewsdesk.com/uk/dji/images/matrice-4e-front-dot-png-3165564" },
        ],
      },
      {
        name: "Геодезические вехи",
        nameEn: "Survey Poles",
        specs: ["Установка геодезического отражателя или ГНСС-антенны над точкой съёмки"],
        specsEn: ["Hold a survey prism or GNSS antenna above a survey point"],
        image: "/images/equipment/survey-pole.webp",
        modelLinks: [
          { name: "Фото RGK", nameEn: "RGK photo", url: "https://www.rgk-tools.com/ru/catalog/aksessuary/gls20/" },
        ],
      },
      {
        name: "Трегеры",
        nameEn: "Tribrachs",
        specs: ["Крепление, центрирование и горизонтирование прибора над точкой"],
        specsEn: ["Mount, center and level an instrument above a survey point"],
        image: "/images/equipment/survey-tribrach.webp",
        modelLinks: [
          { name: "Фото Геодетики", nameEn: "Geodetika photo", url: "https://geodetika.ru/product/treger/" },
        ],
      },
      {
        name: "Геодезические штативы",
        nameEn: "Survey Tripods",
        specs: ["Устойчивая установка геодезических приборов и базовых станций"],
        specsEn: ["Provide stable support for survey instruments and base stations"],
        image: "/images/equipment/survey-tripod.webp",
        modelLinks: [
          { name: "Фото RGK", nameEn: "RGK photo", url: "https://www.rgk-tools.com/ru/catalog/Tripods/shtativ-rgk-sjw30/" },
        ],
      },
      {
        name: "Триподы для вех",
        nameEn: "Pole Tripods",
        specs: ["Удерживают геодезическую веху вертикально при измерениях"],
        specsEn: ["Hold a survey pole upright during measurements"],
        image: "/images/equipment/survey-pole-tripod.webp",
        modelLinks: [
          { name: "Фото CSP Forestry", nameEn: "CSP Forestry photo", url: "https://cspforestry.com/products/cst-berger-quick-release-prism-pole-tripod-67-4250" },
        ],
      },
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
        name: "Вездеходы ТРЭКОЛ-39294",
        nameEn: "TREKOL-39294 All-terrain Vehicle",
        specs: [
          "Колёсная формула 6×6",
          "Шины сверхнизкого давления",
          "Грузоподъёмность на слабонесущих грунтах и на плаву: 400 кг",
        ],
        specsEn: [
          "6×6 drive",
          "Ultra-low-pressure tires",
          "Load capacity on soft ground and afloat: 400 kg",
        ],
        image: "/images/equipment/trekol.png"
      },
      {
        name: "Автомобили повышенной проходимости",
        nameEn: "Off-road Vehicle",
        specs: ["Перевозка людей и грузов по бездорожью"],
        specsEn: ["Off-road transport of people and cargo"],

        image: "/images/equipment/vezdehod.png"
      },
      {
        name: "Водовозки",
        nameEn: "Water Trucks",
        specs: ["Доставка воды на участки работ"],
        specsEn: ["Water delivery to work sites"],

        image: "/images/equipment/vodovozka.png"
      },
      {
        name: "Каротажная станция «Кедр-05П»",
        nameEn: "Kedr-05P Borehole Logging Unit",
        specs: ["Наземная регистрация данных геофизических исследований скважин"],
        specsEn: ["Surface recording of borehole geophysical data"],

        image: "/images/equipment/karotazh.png",
        modelLinks: [
          { name: "Кедр-05П", nameEn: "Kedr-05P", url: "https://stsuz.com/logging-tools/laboratoriya-kompleksnaya-geofizicheskaya-kedr-05p/" },
        ],
      },
      {
        name: "Бульдозеры",
        nameEn: "Bulldozer",
        specs: ["Перемещение грунта отвалом и планировка площадок"],
        specsEn: ["Moving soil with a blade and grading work sites"],

        image: "/images/equipment/bulldozer.png"
      },
      {
        name: "Экскаваторы",
        nameEn: "Excavator",
        specs: ["Выемка и погрузка грунта при земляных работах"],
        specsEn: ["Excavation and loading of soil during earthworks"],

        image: "/images/equipment/excavator.jpg"
      },
      {
        name: "Погрузчики",
        nameEn: "Loader",
        specs: ["Погрузка и перемещение сыпучих материалов"],
        specsEn: ["Loading and moving loose materials"],

        image: "/images/equipment/pogruzchik.jpg"
      },
      {
        name: "Вахтовые автобусы",
        nameEn: "Crew Buses",
        specs: ["Перевозка вахтовых бригад до участков работ"],
        specsEn: ["Transporting shift crews to work sites"],

        image: "/images/equipment/vahtovka.png"
      }
    ]
  }
]

interface EquipmentPhotoProps {
  src: string
  alt: string
  modelLinks?: { name: string; nameEn: string; url: string }[]
}

function EquipmentPhoto({ src, alt, modelLinks = [] }: EquipmentPhotoProps) {
  const { t } = useLanguage()
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [drawnSrc, setDrawnSrc] = useState<string>()
  const display = equipmentPhotoDisplay[src]
  const showCanvas = drawnSrc === src
  const photoClass = "object-contain transition-transform duration-500 group-hover:scale-110"
  const manufacturer = equipmentManufacturers[src]
  const links = modelLinks.map(({ name, nameEn, url }) => ({
    name: t(name, nameEn), url, label: t(`Открыть «${name}»`, `Open ${nameEn}`),
  }))
  if (manufacturer) {
    const name = t(manufacturer.name, manufacturer.nameEn ?? manufacturer.name)
    links.push({ name, url: manufacturer.url, label: t(`Источник для «${alt}»: ${name}`, `Source for ${alt}: ${name}`) })
  }

  return (
    <div className="relative h-48 overflow-hidden">
      <FallbackImage
        src={src}
        alt={alt}
        fill
        className={showCanvas ? `${photoClass} opacity-0` : photoClass}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        loading="lazy"
        onLoad={display ? ({ currentTarget }) => {
          const canvas = canvasRef.current
          if (!canvas) return
          try {
            if (drawEquipmentPhoto(canvas, currentTarget, display)) setDrawnSrc(src)
          } catch {
            // Keep the original image when a browser cannot read its pixels.
          }
        } : undefined}
      />
      {display && (
        <canvas
          ref={canvasRef}
          aria-hidden="true"
          className={`pointer-events-none absolute inset-0 size-full ${photoClass}${showCanvas ? '' : ' invisible'}`}
        />
      )}
      {links.length > 0 && (
        <div className="pointer-events-none absolute inset-x-2 bottom-2 z-10 flex flex-wrap justify-end gap-1">
          {links.map(({ url, name, label }) => (
            <a
              key={url}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="pointer-events-auto rounded bg-black/65 px-2 py-1 text-xs leading-4 text-white transition-colors hover:bg-black/85 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              aria-label={label}
            >
              {name} <span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      )}
    </div>
  )
}

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
                {t('Техника', 'Equipment')}
              </span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {t('Современное оборудование', 'Modern Equipment')}
            </h1>
            
            <p className="text-xl text-white/90 leading-relaxed">
              {t(
                'Техника и приборы для бурения, геофизики, маркшейдерских работ и полевого анализа проб.',
                'Equipment for drilling, geophysical surveys, mine surveying, and on-site sample analysis.'
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
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
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
                          <EquipmentPhoto
                            src={item.image}
                            alt={item.imageAlt ? t(item.imageAlt.ru, item.imageAlt.en) : t(item.name, item.nameEn || item.name)}
                            modelLinks={item.modelLinks}
                          />
                          
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
                            {item.detailsHref && (
                              <Link
                                href={item.detailsHref}
                                className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
                              >
                                {t('О лаборатории', 'About the laboratory')}
                                <ChevronRight aria-hidden="true" className="size-4" />
                              </Link>
                            )}
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

    </div>
  )
}
