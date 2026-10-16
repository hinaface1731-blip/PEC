'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '@/components/language-provider'
import { ArrowUpRight, MapPin, Calendar } from 'lucide-react'

const projects = [
  {
    image: '/images/Mars.jpg',
    titleRu: 'Марсианская площадь',
    titleEn: 'Marsian Site',
    clientRu: 'Полюс',
    clientEn: 'Polyus',
    year: '2024-2026',
    regionRu: 'Чукотка',
    regionEn: 'Chukotka',
    resultRu: 'Геологическое доизучение на 850 км², выявлено 7 перспективных участков',
    resultEn: 'Geological study of 850 km², 7 prospective areas identified',
  },
  {
    image: '/images/neven.JPG',
    titleRu: 'Месторождение Невенрекан',
    titleEn: 'Nevenrekan Site',
    clientRu: 'Полиметалл',
    clientEn: 'Polymetall',
    year: '2023-2025',
    regionRu: 'Магадан',
    regionEn: 'Magadan',
    resultRu: 'Оценочные поисковые работы на золоторудном объекте. Канавы и колонковое бурение. В ходе проведения геологоразведочных работ, получен прирост в объеме 350 тысяч тонн руды с запасом 5,4 тонн условного золота.',
    resultEn: 'Evaluation of prospecting works at the gold ore object. Trenches and core drilling. During the geological exploration, an increase in the volume of 350 thousand tons of ore with a reserve of 5.4 tons of conventional gold was obtained.',
  },
  {
    image: '/images/oper.JPG',
    titleRu: 'Участок Оперативный',
    titleEn: 'Operativniy Site',
    clientRu: 'Полюс',
    clientEn: 'Polyus',
    year: '2024',
    regionRu: 'Таймыр',
    regionEn: 'Tayimyr',
    resultRu: 'Доразведка флангов, 12 500 м бурения с выходом керна 96%',
    resultEn: 'Flank exploration, 12,500m drilling with 96% core recovery',
  },
  {
    image: '/images/vankor.jpg',
    titleRu: 'Ванкорское месторождение',
    titleEn: 'Vankor Field',
    clientRu: 'Роснефть',
    clientEn: 'Rosneft',
    year: '2023-2024',
    regionRu: 'Красноярский край',
    regionEn: 'Krasnoyarsk Region',
    resultRu: 'Рекультивация 45 га буровых площадок, восстановлено 38 га тундры',
    resultEn: 'Reclamation of 45 ha drilling sites, 38 ha of tundra restored',
  },
]

export function ProjectsSection() {
  return null
}
