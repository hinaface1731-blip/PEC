'use client'

import { useLanguage } from '@/components/language-provider'
import { 
  Mountain, Radio, Drill, Compass, FlaskConical, FileText, Leaf, 
  Pickaxe, Truck, ArrowRight 
} from 'lucide-react'
import { motion } from 'framer-motion'

const steps = [
  { icon: FileText, labelRu: 'Проектирование', labelEn: 'Design' },
  { icon: Mountain, labelRu: 'Геология', labelEn: 'Geology' },
  { icon: Radio, labelRu: 'Геофизика', labelEn: 'Geophysics' },
  { icon: Drill, labelRu: 'Бурение', labelEn: 'Drilling' },
  { icon: Pickaxe, labelRu: 'Горные работы', labelEn: 'Mining' },
  { icon: Compass, labelRu: 'Маркшейдерия', labelEn: 'Surveying' },
  { icon: Truck, labelRu: 'Логистика', labelEn: 'Logistics' },
  { icon: FlaskConical, labelRu: 'Лаборатория', labelEn: 'Laboratory' },
  { icon: Leaf, labelRu: 'Экология', labelEn: 'Ecology' },
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
            className="text-3xl lg:text-4xl font-bold text-foreground mb-4"
          >
            {t('Полный цикл ГРР', 'Full GRR Cycle')}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            {t(
              'Все этапы геологоразведочных работ выполняются собственными силами без привлечения субподрядчиков',
              'All stages of geological exploration are performed in-house without subcontractors'
            )}
          </motion.p>
        </div>

        {/* Desktop Flow — горизонтальная схема */}
        <div className="hidden lg:flex items-center justify-between gap-2 overflow-x-auto pb-4">
          {steps.map((step, index) => (
            <div key={step.labelRu} className="flex items-center flex-shrink-0">
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
                <span className="text-sm text-foreground font-medium text-center max-w-[80px]">
                  {t(step.labelRu, step.labelEn)}
                </span>
              </motion.div>
              {index < steps.length - 1 && (
                <ArrowRight className="w-5 h-5 text-[var(--muted2)] mx-2 mt-[-24px] flex-shrink-0" />
              )}
            </div>
          ))}
        </div>

        {/* Mobile Grid — сетка 2x5 с прокруткой */}
        <div className="lg:hidden overflow-x-auto pb-4">
          <div className="flex gap-4 min-w-max px-2">
            {steps.map((step, index) => (
              <motion.div
                key={step.labelRu}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                className="flex flex-col items-center p-4 rounded-xl bg-[var(--bg3)] border border-[var(--border)] w-24"
              >
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-[var(--accent-glow)] flex items-center justify-center mb-2">
                    <step.icon className="w-6 h-6 text-[var(--accent)]" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-[var(--accent)] text-white text-[10px] font-bold flex items-center justify-center">
                    {index + 1}
                  </div>
                </div>
                <span className="text-xs text-muted-foreground mb-1">{index + 1}</span>
                <span className="text-xs text-foreground font-medium text-center">
                  {t(step.labelRu, step.labelEn)}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 p-6 rounded-2xl bg-[var(--accent-glow)] border border-[var(--accent)]/20 text-center"
        >
          <p className="text-foreground font-medium">
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