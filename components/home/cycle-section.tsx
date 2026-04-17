'use client'

import { useLanguage } from '@/components/language-provider'
import { Mountain, Radio, Drill, Compass, FlaskConical, FileText, Leaf, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

const steps = [
  { icon: FileText, labelRu: 'Проектирование', labelEn: 'Design' },      // 1. Планирование
  { icon: Mountain, labelRu: 'Геология', labelEn: 'Geology' },           // 2. Изучение
  { icon: Radio, labelRu: 'Геофизика', labelEn: 'Geophysics' },         // 3. Поиск
  { icon: Drill, labelRu: 'Бурение', labelEn: 'Drilling' },             // 4. Подтверждение
  { icon: FlaskConical, labelRu: 'Лаборатория', labelEn: 'Laboratory' }, // 5. Анализ
  { icon: Compass, labelRu: 'Маркшейдерия', labelEn: 'Surveying' },     // 6. Подсчёт запасов
  { icon: Leaf, labelRu: 'Экология', labelEn: 'Ecology' },              // 7. Завершение
]

export function CycleSection() {
  const { t } = useLanguage()

  return (
    <section className="section bg-[var(--bg2)]">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl font-bold text-(--text) mb-4"
          >
            {t('Полный цикл ГРР', 'Full GRR Cycle')}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[var(--muted)] max-w-2xl mx-auto"
          >
            {t(
              'Все этапы геологоразведочных работ выполняются собственными силами без привлечения субподрядчиков',
              'All stages of geological exploration are performed in-house without subcontractors'
            )}
          </motion.p>
        </div>

        {/* Desktop Flow */}
        <div className="hidden lg:flex items-center justify-between gap-2">
          {steps.map((step, index) => (
            <div key={step.labelRu} className="flex items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="flex flex-col items-center"
              >
                <div className="w-20 h-20 rounded-2xl bg-[var(--bg3)] border border-[var(--border)] flex items-center justify-center mb-3 hover:border-[var(--accent)] hover:bg-[var(--accent-glow)] transition-all cursor-default group">
                  <step.icon className="w-8 h-8 text-[var(--muted)] group-hover:text-[var(--accent)] transition-colors" />
                </div>
                <span className="text-sm text-(--text) font-medium text-center">
                  {t(step.labelRu, step.labelEn)}
                </span>
              </motion.div>
              {index < steps.length - 1 && (
                <ArrowRight className="w-5 h-5 text-[var(--muted2)] mx-2 mt-[-24px]" />
              )}
            </div>
          ))}
        </div>

        {/* Mobile Grid */}
        <div className="lg:hidden grid grid-cols-2 sm:grid-cols-3 gap-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.labelRu}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              className="flex flex-col items-center p-4 rounded-xl bg-[var(--bg3)] border border-[var(--border)]"
            >
              <div className="w-12 h-12 rounded-xl bg-[var(--accent-glow)] flex items-center justify-center mb-2">
                <step.icon className="w-6 h-6 text-[var(--accent)]" />
              </div>
              <span className="text-xs text-[var(--muted2)] mb-1">{index + 1}</span>
              <span className="text-sm text-(--text) font-medium text-center">
                {t(step.labelRu, step.labelEn)}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 p-6 rounded-2xl bg-[var(--accent-glow)] border border-[var(--accent)]/20 text-center"
        >
          <p className="text-(--text) font-medium">
            {t(
              'Комплексный подход гарантирует качество и сроки выполнения работ',
              'An integrated approach guarantees quality and timely completion'
            )}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
