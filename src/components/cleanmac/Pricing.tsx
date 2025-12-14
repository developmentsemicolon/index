import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { useEffect } from 'react'

const STRIPE_PAYMENT_LINK = 'https://buy.stripe.com/test_aFa5kC99j6YT5Zt7w25Vu00'

export default function Pricing() {
  const { t } = useTranslation()

  useEffect(() => {
    // Load Stripe script
    const script = document.createElement('script')
    script.src = 'https://js.stripe.com/v3/'
    script.async = true
    document.head.appendChild(script)

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script)
      }
    }
  }, [])

  const handleBuyNow = () => {
    if (STRIPE_PAYMENT_LINK && STRIPE_PAYMENT_LINK.includes('buy.stripe.com')) {
      window.location.href = STRIPE_PAYMENT_LINK
    } else {
      alert(t('cleanmac.pricing_payment_setup_error'))
    }
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="pricing" className="py-[100px] px-5 bg-gradient-to-b from-gray-50 to-[#f0f0f5]">
      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          className="text-center mb-[60px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 font-semibold text-sm border border-purple-200 shadow-sm mb-4">
            {t('cleanmac.pricing_trust_badge')}
          </div>
          <h2 className="text-[42px] font-bold mb-4 text-gray-900">
            {t('cleanmac.pricing_title')}
          </h2>
          <p className="text-lg text-gray-600">
            {t('cleanmac.pricing_subtitle')}
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-gray-200 bg-white px-4 py-3 text-center shadow-[0_10px_25px_rgba(0,0,0,0.05)]"
            >
              <div className="text-base font-semibold text-gray-800">
                {t(`cleanmac.pricing_trust_stat${item}`)}
              </div>
            </div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] max-w-[800px] mx-auto mt-[50px]">
          {/* Free Plan */}
          <motion.div
            className="group bg-white rounded-3xl p-10 text-center shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-gray-200 relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ 
              y: -5, 
              scale: 1.02,
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.12)'
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                {t('cleanmac.pricing_free_title')}
              </h3>
              <div className="mb-2.5">
                <span className="text-[48px] font-extrabold text-purple-600">
                  {t('cleanmac.pricing_free_price')}
                </span>
                <span className="text-base opacity-80 text-gray-600">/{t('cleanmac.pricing_forever')}</span>
              </div>
              <p className="text-sm opacity-80 text-gray-600">
                {t('cleanmac.pricing_free_desc')}
              </p>
            </div>
            <ul className="list-none mb-8 text-left">
              <li className="py-3 border-b border-black/5 flex items-center gap-2.5">
                <span className="text-green-500 font-bold">✓</span>
                <span className="text-gray-700">
                  {t('cleanmac.pricing_free_feature1')}
                </span>
              </li>
              <li className="py-3 border-b border-black/5 flex items-center gap-2.5">
                <span className="text-green-500 font-bold">✓</span>
                <span className="text-gray-700">
                  {t('cleanmac.pricing_free_feature2')}
                </span>
              </li>
              <li className="py-3 border-b border-black/5 flex items-center gap-2.5">
                <span className="text-green-500 font-bold">✓</span>
                <span className="text-gray-700">
                  {t('cleanmac.pricing_free_feature3')}
                </span>
              </li>
            </ul>
            <button
              onClick={() => scrollToSection('extension')}
              className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-8 bg-transparent text-purple-600 rounded-xl font-semibold border-2 border-purple-600 transition-all duration-300 hover:bg-purple-600 hover:text-white hover:translate-y-[-2px]"
            >
              {t('cleanmac.pricing_free_btn')}
            </button>
          </motion.div>

          {/* Pro Plan */}
          <motion.div
            className="group bg-gradient-to-br from-pink-500 via-purple-600 via-blue-600 to-purple-800 rounded-3xl p-10 text-center text-white border-none relative shadow-[0_20px_60px_rgba(139,92,246,0.3)]"
            style={{
              backgroundSize: '200% 200%',
              animation: 'gradientShift 10s ease infinite',
            }}
            initial={{ opacity: 0, y: 20, scale: 1 }}
            whileInView={{ opacity: 1, y: 0, scale: 1.05 }}
            whileHover={{ 
              scale: 1.08,
              y: -5,
              boxShadow: '0 25px 70px rgba(139, 92, 246, 0.4)'
            }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.6, 
              delay: 0.2,
              ease: 'easeOut'
            }}
          >
            <div className="absolute top-[-12px] left-1/2 -translate-x-1/2 bg-gradient-to-r from-pink-500 to-pink-300 text-white px-5 py-1.5 rounded-[20px] text-xs font-bold uppercase tracking-wider shadow-[0_4px_15px_rgba(255,107,157,0.4)]">
              {t('cleanmac.pricing_popular')}
            </div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 text-white">
                {t('cleanmac.pricing_pro_title')}
              </h3>
              <div className="mb-2.5">
                <span className="text-[48px] font-extrabold text-white">
                  {t('cleanmac.pricing_pro_price')}
                </span>
                <span className="text-base opacity-80 text-white">/{t('cleanmac.pricing_one_time')}</span>
              </div>
              <p className="text-sm opacity-80 text-white">
                {t('cleanmac.pricing_pro_desc')}
              </p>
            </div>
            <ul className="list-none mb-8 text-left">
              <li className="py-3 border-b border-white/10 flex items-center gap-2.5">
                <span className="text-[#a0ffa0] font-bold">✓</span>
                <span className="text-white/90">
                  {t('cleanmac.pricing_pro_feature1')}
                </span>
              </li>
              <li className="py-3 border-b border-white/10 flex items-center gap-2.5">
                <span className="text-[#a0ffa0] font-bold">✓</span>
                <span className="text-white/90">
                  {t('cleanmac.pricing_pro_feature2')}
                </span>
              </li>
              <li className="py-3 border-b border-white/10 flex items-center gap-2.5">
                <span className="text-[#a0ffa0] font-bold">✓</span>
                <span className="text-white/90">
                  {t('cleanmac.pricing_pro_feature3')}
                </span>
              </li>
              <li className="py-3 border-b border-white/10 flex items-center gap-2.5">
                <span className="text-[#a0ffa0] font-bold">✓</span>
                <span className="text-white/90">
                  {t('cleanmac.pricing_pro_feature4')}
                </span>
              </li>
              <li className="py-3 border-b border-white/10 flex items-center gap-2.5">
                <span className="text-[#a0ffa0] font-bold">✓</span>
                <span className="text-white/90">
                  {t('cleanmac.pricing_pro_feature5')}
                </span>
              </li>
            </ul>
            <button
              onClick={handleBuyNow}
              className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-8 bg-white/25 backdrop-blur-[10px] text-white rounded-xl font-semibold border-2 border-white/40 transition-all duration-300 hover:bg-white/35 hover:translate-y-[-3px] hover:scale-[1.02] hover:shadow-[0_8px_30px_rgba(139,92,246,0.5)]"
            >
              {t('cleanmac.pricing_pro_btn')}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

