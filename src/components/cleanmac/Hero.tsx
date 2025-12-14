import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

export default function Hero() {
  const { t } = useTranslation()
  const particlesRef = useRef<HTMLDivElement>(null)
  const trustBadges = [
    { title: t('cleanmac.hero_badge_downloads'), subtitle: t('cleanmac.hero_badge_downloads_sub') },
    { title: t('cleanmac.hero_badge_rating'), subtitle: t('cleanmac.hero_badge_rating_sub') },
    { title: t('cleanmac.hero_badge_security'), subtitle: t('cleanmac.hero_badge_security_sub') },
  ]
  const stats = [
    { value: '100k+', label: t('cleanmac.stat_downloads') },
    { value: '4.9/5', label: t('cleanmac.stat_rating') },
    { value: '30+', label: t('cleanmac.stat_countries') },
  ]

  useEffect(() => {
    if (!particlesRef.current) return

    const particleCount = 50
    const container = particlesRef.current

    // Clear existing particles
    container.innerHTML = ''

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div')
      const size = Math.random() * 4 + 2
      const x = Math.random() * 100
      const duration = Math.random() * 20 + 10
      const delay = Math.random() * 10

      particle.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: rgba(255, 255, 255, ${Math.random() * 0.3 + 0.1});
        border-radius: 50%;
        left: ${x}%;
        bottom: -10px;
        animation: floatUp ${duration}s linear ${delay}s infinite;
        pointer-events: none;
      `

      container.appendChild(particle)
    }

    // Add animation keyframes
    const style = document.createElement('style')
    style.textContent = `
      @keyframes floatUp {
        0% {
          transform: translateY(0) translateX(0);
          opacity: 0;
        }
        10% {
          opacity: 1;
        }
        90% {
          opacity: 1;
        }
        100% {
          transform: translateY(-100vh) translateX(${Math.random() * 100 - 50}px);
          opacity: 0;
        }
      }
    `
    document.head.appendChild(style)

    return () => {
      style.remove()
    }
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-500 via-purple-600 via-blue-600 to-purple-800 bg-[length:400%_400%] animate-[gradientShift_20s_ease_infinite] text-white text-center px-5 py-32 pt-32">
      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(2deg); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(10px); }
        }
      `}</style>
      
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-radial from-pink-500/30 via-transparent to-transparent pointer-events-none animate-pulse" />
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none overflow-hidden" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-5 py-2 mb-8 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-sm font-semibold">
            {t('cleanmac.hero_badge')}
          </div>
        </motion.div>

        <motion.img
          src="/images/cleanmac-logo.png"
          alt={t('cleanmac.app_name')}
          className="w-36 h-36 mx-auto mb-8 rounded-3xl shadow-2xl animate-[float_4s_ease-in-out_infinite]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />

        <motion.h1
          className="text-6xl md:text-7xl font-extrabold mb-5 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
            {t('cleanmac.hero_title')}
          </span>
        </motion.h1>

        <motion.p
          className="text-2xl md:text-3xl mb-6 text-white/80 font-medium"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {t('cleanmac.hero_subtitle')}
        </motion.p>

        <motion.p
          className="text-lg md:text-xl mb-12 text-white/70 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {t('cleanmac.hero_description')}
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          {trustBadges.map((badge) => (
            <div
              key={badge.title}
              className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-6 py-4 text-left shadow-[0_12px_30px_rgba(0,0,0,0.18)]"
            >
              <div className="text-lg font-semibold text-white">{badge.title}</div>
              <div className="text-sm text-white/70 mt-1">{badge.subtitle}</div>
            </div>
          ))}
        </motion.div>

        <motion.div
          className="flex gap-5 justify-center flex-wrap mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <button
            onClick={() => scrollToSection('pricing')}
            className="relative inline-flex items-center gap-2.5 px-10 py-5 bg-white/25 backdrop-blur-[15px] text-white text-lg font-semibold rounded-xl border-2 border-white/40 shadow-[0_8px_25px_rgba(0,0,0,0.3)] hover:bg-white/35 hover:translate-y-[-3px] hover:scale-[1.02] hover:shadow-[0_12px_35px_rgba(0,0,0,0.4)] hover:border-white/50 transition-all duration-300 overflow-hidden group"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></span>
            <span>{t('cleanmac.hero_btn_download')}</span>
            <span className="text-lg">↓</span>
          </button>
          <button
            onClick={() => scrollToSection('extension')}
            className="relative inline-flex items-center gap-2.5 px-10 py-5 bg-white/15 backdrop-blur-[15px] text-white text-lg font-semibold rounded-xl border-2 border-white/30 hover:bg-white/25 hover:translate-y-[-3px] hover:scale-[1.02] hover:shadow-[0_8px_25px_rgba(0,0,0,0.3)] hover:border-white/40 transition-all duration-300 overflow-hidden group"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></span>
            <span>{t('cleanmac.hero_btn_extension')}</span>
            <span className="text-lg">→</span>
          </button>
        </motion.div>

        <motion.div
          className="text-white/80 text-sm mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          {t('cleanmac.hero_chipset')}
        </motion.div>

        <motion.div
          className="flex gap-12 justify-center flex-wrap mt-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl font-extrabold mb-1 drop-shadow-md">{stat.value}</div>
              <div className="text-sm text-white/70 uppercase tracking-wider max-w-[120px]">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 text-2xl animate-[bounce_2s_infinite]">
        ↓
      </div>
    </section>
  )
}

