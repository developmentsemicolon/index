import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

export default function Extension() {
  const { t } = useTranslation()

  return (
    <section id="extension" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-5 max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            {t('cleanmac.extension_title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            {t('cleanmac.extension_subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              {t('cleanmac.extension_quick')}
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              {t('cleanmac.extension_desc')}
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✅</span>
                <span className="text-gray-700 dark:text-gray-300">
                  {t('cleanmac.extension_feature1')}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✅</span>
                <span className="text-gray-700 dark:text-gray-300">
                  {t('cleanmac.extension_feature2')}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✅</span>
                <span className="text-gray-700 dark:text-gray-300">
                  {t('cleanmac.extension_feature3')}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✅</span>
                <span className="text-gray-700 dark:text-gray-300">
                  {t('cleanmac.extension_feature4')}
                </span>
              </li>
            </ul>
            <motion.a
              href="https://chrome.google.com/webstore"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white rounded-xl font-semibold text-lg shadow-[0_4px_15px_rgba(102,126,234,0.4)] transition-all duration-300 hover:translate-y-[-2px] hover:shadow-[0_6px_20px_rgba(102,126,234,0.5)]"
              whileHover={{ y: -2 }}
            >
              <span>{t('cleanmac.extension_btn')}</span>
              <span className="text-lg">→</span>
            </motion.a>
          </motion.div>

          <motion.div
            className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-md">
              <div className="bg-gray-200 dark:bg-gray-700 px-4 py-2 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex-1 bg-white dark:bg-gray-800 rounded px-3 py-1 text-xs text-gray-600 dark:text-gray-400 text-center">
                  chrome://extensions
                </div>
              </div>
              <div className="p-8 text-center">
                <img
                  src="/images/cleanmac-logo.png"
                  alt={t('cleanmac.extension_preview')}
                  className="w-16 h-16 mx-auto mb-4 rounded-xl"
                />
                <p className="text-gray-900 dark:text-white font-semibold">{t('cleanmac.extension_name')}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

