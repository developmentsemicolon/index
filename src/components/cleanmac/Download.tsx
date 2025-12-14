import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

export default function Download() {
  const { t } = useTranslation()

  return (
    <section id="download" className="py-[100px] px-5 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          className="text-center mb-[60px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[42px] font-bold mb-4 text-gray-900">
            {t('cleanmac.download_title')}
          </h2>
        </motion.div>

        <motion.div
          className="relative bg-white rounded-[28px] px-10 py-[60px] text-center shadow-[0_20px_60px_rgba(0,0,0,0.12)] max-w-[750px] mx-auto mb-10 border border-gray-200 overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Gradient border top */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600"></div>
          
          {/* Free Download Badge */}
          <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-[20px] text-xs font-semibold mb-5 uppercase tracking-wider">
            {t('cleanmac.download_free_badge')}
          </div>
          
          <div>
            <img
              src="/images/cleanmac-logo.png"
              alt={t('cleanmac.app_name')}
              className="w-[100px] h-[100px] mx-auto mb-[30px] rounded-[20px]"
            />
            <h3 className="text-[32px] font-bold mb-5 text-gray-900">{t('cleanmac.download_macos_app')}</h3>
            
            {/* Compatibility badges */}
            <div className="flex gap-2.5 justify-center mb-[30px]">
              <span className="px-4 py-2 bg-[rgba(139,92,246,0.1)] text-purple-600 rounded-[20px] text-[13px] font-semibold border border-[rgba(139,92,246,0.2)]">
                ✓ <span>{t('cleanmac.download_intel')}</span>
              </span>
              <span className="px-4 py-2 bg-[rgba(139,92,246,0.1)] text-purple-600 rounded-[20px] text-[13px] font-semibold border border-[rgba(139,92,246,0.2)]">
                ✓ <span>{t('cleanmac.download_silicon')}</span>
              </span>
            </div>
            
            {/* Download buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="https://buy.stripe.com/test_aFa5kC99j6YT5Zt7w25Vu00"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-[18px] bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-xl font-semibold text-lg shadow-[0_4px_15px_rgba(139,92,246,0.4)] transition-all duration-300 hover:translate-y-[-2px] hover:shadow-[0_6px_20px_rgba(139,92,246,0.5)]"
                whileHover={{ y: -2 }}
              >
                <span>{t('cleanmac.download_silicon')}</span>
                <span className="text-lg">↓</span>
              </motion.a>
              <motion.a
                href="https://buy.stripe.com/test_aFa5kC99j6YT5Zt7w25Vu00"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-[18px] bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-xl font-semibold text-lg shadow-[0_4px_15px_rgba(139,92,246,0.4)] transition-all duration-300 hover:translate-y-[-2px] hover:shadow-[0_6px_20px_rgba(139,92,246,0.5)]"
                whileHover={{ y: -2 }}
              >
                <span>{t('cleanmac.download_intel')}</span>
                <span className="text-lg">↓</span>
              </motion.a>
            </div>
            
            {/* Note */}
            <p className="mt-5 text-sm text-gray-600 italic">
              {t('cleanmac.download_note')}
            </p>

            {/* Social proof */}
            <div className="mt-8 text-left">
              <div className="text-sm font-semibold text-gray-800 mb-3 uppercase tracking-wide">
                {t('cleanmac.download_trust_title')}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-left"
                  >
                    <div className="text-lg font-bold text-gray-900">
                      {t(`cleanmac.download_trust_stat${item}`)}
                    </div>
                    <div className="text-xs text-gray-500">
                      {t(item === 1 ? 'cleanmac.hero_badge_downloads_sub' : item === 2 ? 'cleanmac.hero_badge_security_sub' : 'cleanmac.hero_badge_rating_sub')}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Already Installed Card */}
        <motion.div
          className="bg-white rounded-3xl px-10 py-[50px] text-center shadow-[0_10px_40px_rgba(0,0,0,0.1)] max-w-[600px] mx-auto border border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-[28px] font-bold mb-5 text-gray-900">
            {t('cleanmac.download_already')}
          </h3>
          <motion.a
            href="clearmac://run"
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl font-semibold shadow-[0_4px_15px_rgba(255,107,157,0.4)] transition-all duration-300 hover:translate-y-[-2px] hover:shadow-[0_6px_20px_rgba(255,107,157,0.5)]"
            whileHover={{ y: -2 }}
          >
            <span>{t('cleanmac.download_run')}</span>
            <span className="text-lg">▶</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

