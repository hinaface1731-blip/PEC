'use client'

import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '@/components/language-provider'
import type { GeophysicsCopy, GeophysicsMethod } from '@/lib/geophysics-methods'

type View = {
  title: GeophysicsCopy
  options: [GeophysicsCopy, GeophysicsCopy]
  explanations: [GeophysicsCopy, GeophysicsCopy]
}

const views: Record<GeophysicsMethod, View> = {
  electrical: {
    title: ['Как читать геоэлектрический разрез', 'Reading an electrical section'],
    options: [['Сопротивление', 'Resistivity'], ['Поляризуемость', 'Chargeability']],
    explanations: [
      ['На условном разрезе проводящая зона шире. Низкое сопротивление может быть связано, например, с обводнением, глинами или проводящими минералами.', 'In this example the conductive zone is wider. Low resistivity can reflect water saturation, clay, or conductive minerals.'],
      ['Повышенная поляризуемость занимает лишь часть проводящей зоны. Сопоставление двух разрезов помогает выбрать, где проверить геологическую гипотезу.', 'High chargeability overlaps only part of the conductive zone. Comparing both sections helps identify where to test a geological hypothesis.'],
    ],
  },
  magnetic: {
    title: ['Как высота меняет картину аномалии', 'How height changes a magnetic anomaly'],
    options: [['Ближе к поверхности', 'Near the surface'], ['Выше над поверхностью', 'Higher above the surface']],
    explanations: [
      ['На меньшей высоте сильнее видны короткие аномалии от локальных источников. На наземной съёмке также могут сильнее проявляться приповерхностные помехи.', 'Short-wavelength anomalies from local sources are more distinct close to the ground. Near-surface interference can also be more pronounced.'],
      ['С ростом высоты соседние локальные аномалии сглаживаются, а широкая аномалия остаётся различимой. Это схематичное сравнение одного поля на двух высотах.', 'At greater height, nearby local anomalies are smoothed while the broad anomaly remains visible. This shows the same schematic field at two heights.'],
    ],
  },
  logging: {
    title: ['Один интервал, два каротажных сигнала', 'One interval, two logging responses'],
    options: [['Гамма-каротаж', 'Gamma log'], ['Сопротивление', 'Resistivity log']],
    explanations: [
      ['В выделенном интервале естественная гамма-активность повышена. По одной кривой геологическую причину отклика установить трудно.', 'Natural gamma activity is higher in the highlighted interval. A single log rarely establishes the geological cause.'],
      ['В том же интервале сопротивление снижается. Совпадение границ на разных кривых помогает выделить интервал для сопоставления с керном.', 'Resistivity falls in the same interval. Agreement between boundaries on different logs helps identify where to compare the data with core.'],
    ],
  },
  software: {
    title: ['От измерений к профилю', 'From measurements to an interpreted profile'],
    options: [['Полевой ряд', 'Field readings'], ['После обработки', 'After processing']],
    explanations: [
      ['На широкую аномалию накладываются мелкие колебания и одиночный выброс. Сначала проверяют полевой журнал, повторы и соседние профили.', 'Small fluctuations and a single outlier are superimposed on a broad anomaly. Field notes, repeated readings, and adjacent lines are checked first.'],
      ['На условном обработанном профиле широкая аномалия сохранена. Исходные измерения сохраняют вместе с описанием исключений и поправок.', 'The broad anomaly is retained in the example processed profile. Raw measurements are kept alongside a record of exclusions and corrections.'],
    ],
  },
}

const gaussian = (value: number, center: number, width: number) =>
  Math.exp(-(((value - center) / width) ** 2))

function drawPlot(canvas: HTMLCanvasElement, method: GeophysicsMethod, alternate: boolean) {
  const ctx = canvas.getContext('2d')
  if (!ctx) return

  const width = canvas.width
  const height = canvas.height
  const margin = 24
  const plotWidth = width - 2 * margin
  const plotHeight = height - 2 * margin
  ctx.fillStyle = '#101a23'
  ctx.fillRect(0, 0, width, height)

  if (method === 'electrical') {
    const divisions = 140
    const rows = 66
    for (let row = 0; row < rows; row++) {
      const y = row / rows
      for (let column = 0; column < divisions; column++) {
        const x = column / divisions
        const body = alternate
          ? gaussian(x, 0.57, 0.12) * gaussian(y, 0.63, 0.21)
          : gaussian(x, 0.47, 0.23) * gaussian(y, 0.56, 0.29)
        const layers = 0.13 + 0.16 * y + 0.075 * Math.sin(18 * y + 7 * x)
        const intensity = Math.min(1, Math.round((layers + 0.73 * body) * 13) / 13)
        ctx.fillStyle = `hsl(${206 - 177 * intensity} 76% ${20 + 39 * intensity}%)`
        ctx.fillRect(margin + column * plotWidth / divisions, margin + row * plotHeight / rows, plotWidth / divisions + 0.5, plotHeight / rows + 0.5)
      }
    }
  } else {
    const logging = method === 'logging'
    if (logging) {
      ctx.fillStyle = '#c9975a35'
      ctx.fillRect(margin, margin + plotHeight * 0.41, plotWidth, plotHeight * 0.22)
    }
    ctx.beginPath()
    ctx.lineWidth = 3
    ctx.strokeStyle = alternate ? '#72d3ee' : '#ffad61'
    for (let index = 0; index <= 360; index++) {
      const x = index / 360
      let value: number
      if (method === 'magnetic') {
        value = alternate
          ? 0.22 + 0.33 * gaussian(x, 0.55, 0.2)
          : 0.22 + 0.25 * gaussian(x, 0.55, 0.22) + 0.3 * gaussian(x, 0.45, 0.045) + 0.34 * gaussian(x, 0.65, 0.05)
      } else if (logging) {
        const interval = gaussian(x, 0.52, 0.11)
        value = alternate ? 0.69 - 0.44 * interval + 0.06 * Math.sin(x * 70) : 0.32 + 0.45 * interval + 0.05 * Math.sin(x * 57)
      } else {
        const anomaly = 0.28 + 0.38 * gaussian(x, 0.62, 0.17)
        value = alternate ? anomaly : anomaly + 0.06 * Math.sin(x * 160) + 0.045 * Math.sin(x * 275) + 0.46 * gaussian(x, 0.29, 0.009)
      }
      const horizontal = margin + (logging ? value : x) * plotWidth
      const vertical = margin + (logging ? x : 1 - value) * plotHeight
      if (index === 0) ctx.moveTo(horizontal, vertical)
      else ctx.lineTo(horizontal, vertical)
    }
    ctx.stroke()
  }

  ctx.beginPath()
  ctx.lineWidth = 1
  ctx.strokeStyle = '#b3d4e86b'
  for (let index = 0; index <= 5; index++) {
    const x = margin + plotWidth * index / 5
    const y = margin + plotHeight * index / 5
    ctx.moveTo(x, margin)
    ctx.lineTo(x, height - margin)
    ctx.moveTo(margin, y)
    ctx.lineTo(width - margin, y)
  }
  ctx.stroke()
}

export function GeophysicsSectionViewer({ method }: { method: GeophysicsMethod }) {
  const { t } = useLanguage()
  const [selected, setSelected] = useState(0)
  const canvas = useRef<HTMLCanvasElement>(null)
  const { title, options, explanations } = views[method]

  useEffect(() => {
    if (canvas.current) drawPlot(canvas.current, method, selected === 1)
  }, [method, selected])

  return (
    <section aria-labelledby="section-viewer-title" className="min-w-0 rounded-3xl bg-[#101a23] p-4 text-white sm:p-7">
      <h2 id="section-viewer-title" className="text-xl font-bold sm:text-2xl">{t(...title)}</h2>
      <div role="group" aria-label={t('Показать на схеме', 'Select view')} className="my-4 flex flex-wrap gap-2">
        {options.map((option, index) => (
          <button key={option[1]} type="button" aria-pressed={selected === index} onClick={() => setSelected(index)}
            className="rounded-full border border-white/30 px-3 py-2 text-sm font-semibold text-white hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300 aria-pressed:border-white aria-pressed:bg-white aria-pressed:text-slate-900">
            {t(...option)}
          </button>
        ))}
      </div>
      <figure aria-label={t(...options[selected])}>
        <canvas ref={canvas} width={640} height={method === 'logging' ? 390 : 280} aria-hidden="true" className="block h-auto w-full rounded-xl bg-[#101a23]" />
        <figcaption className="flex flex-wrap justify-between gap-x-4 gap-y-1 px-2 text-xs text-slate-300">
          <span>{method === 'electrical' || method === 'logging' ? t('Глубина ↓', 'Depth ↓') : t('Относительный сигнал ↑', 'Relative response ↑')}</span>
          <span>{method === 'logging' ? t('Относительный сигнал →', 'Relative response →') : t('Вдоль профиля →', 'Along line →')}</span>
        </figcaption>
      </figure>
      {method === 'electrical' && (
        <div className="mt-4 flex flex-wrap items-center justify-between gap-2 px-2 text-xs text-slate-300">
          <span className="flex items-center gap-2">
            <span aria-hidden="true" className="size-3 rounded-sm bg-[#2468a2]" />
            {selected ? t('Низкая поляризуемость', 'Low chargeability') : t('Высокое сопротивление', 'High resistivity')}
          </span>
          <span className="flex items-center gap-2">
            <span aria-hidden="true" className="size-3 rounded-sm bg-[#ed9952]" />
            {selected ? t('Высокая поляризуемость', 'High chargeability') : t('Низкое сопротивление', 'Low resistivity')}
          </span>
        </div>
      )}
      <p className="mt-4 text-xs font-semibold text-slate-300">
        {t('Учебная схема на условных данных', 'Teaching diagram with synthetic data')}
      </p>
      <p aria-live="polite" className="mt-2 leading-relaxed text-slate-200">{t(...explanations[selected])}</p>
    </section>
  )
}
