import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

const benefits = [
  { title: 'comparisons_benefit1_title', desc: 'comparisons_benefit1_desc' },
  { title: 'comparisons_benefit2_title', desc: 'comparisons_benefit2_desc' },
  { title: 'comparisons_benefit3_title', desc: 'comparisons_benefit3_desc' },
  { title: 'comparisons_benefit4_title', desc: 'comparisons_benefit4_desc' },
]

export default function Comparisons() {
  const { t } = useTranslation()

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="comparisons" className="py-24 px-5 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t('cleanmac.comparisons_title')}
          </h2>
          
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="flex items-start gap-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl px-5 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.06)]"
            >
              <div className="mt-1 text-2xl">✨</div>
              <div>
                <div className="text-lg font-semibold text-gray-900 dark:text-white">{t(`cleanmac.${benefit.title}`)}</div>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-1 leading-relaxed">
                  {t(`cleanmac.${benefit.desc}`)}
                </p>
              </div>
            </div>
          ))}
        </motion.div>


        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-gray-700 dark:text-gray-200 mb-4 font-medium">
            {t('cleanmac.comparisons_choice_title')}
          </p>
          <button
            onClick={() => scrollToSection('download')}
            className="inline-flex items-center gap-2 px-10 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold shadow-[0_10px_30px_rgba(139,92,246,0.35)] hover:-translate-y-1 transition-all duration-300"
          >
            {t('cleanmac.comparisons_cta')}
            <span className="text-lg">↓</span>
          </button>
        </motion.div>
      </div>
    </section>
  )
}

