import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Moon, Sun } from 'lucide-react'
import CleanMacLanguageSelector from './LanguageSelector'

export default function CleanMacNavbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const { t } = useTranslation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDarkMode(true)
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    if (!darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <>
      <CleanMacLanguageSelector />
      <nav className={`sticky top-0 z-[1000] transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-[30px] saturate-180 shadow-[0_4px_25px_rgba(0,0,0,0.1)]' 
          : 'bg-white/80 backdrop-blur-[30px] saturate-180 shadow-[0_4px_20px_rgba(0,0,0,0.08)]'
      }`}>
      <div className="max-w-[1200px] mx-auto px-5 py-[18px] flex justify-between items-center">
        <Link 
          to="/cleanmacapp" 
          className="flex items-center gap-3 text-[22px] font-bold text-gray-900 hover:scale-105 transition-transform duration-300"
        >
          <img 
            src="/images/cleanmac-logo.png" 
            alt="CleanMac App" 
            className="w-11 h-11 rounded-[10px] shadow-[0_2px_8px_rgba(0,0,0,0.1)] hover:rotate-[5deg] hover:scale-110 transition-transform duration-300"
          />
          <span>CleanMac App</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          <button
            onClick={() => scrollToSection('features')}
            className="text-gray-900 font-semibold text-[15px] relative py-1 hover:text-purple-600 transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-purple-600 after:to-pink-500 after:transition-all hover:after:w-full"
          >
            {t('cleanmac.nav_features')}
          </button>
          <button
            onClick={() => scrollToSection('comparisons')}
            className="text-gray-900 font-semibold text-[15px] relative py-1 hover:text-purple-600 transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-purple-600 after:to-pink-500 after:transition-all hover:after:w-full"
          >
            {t('cleanmac.nav_compare')}
          </button>
          <button
            onClick={() => scrollToSection('pricing')}
            className="text-gray-900 font-semibold text-[15px] relative py-1 hover:text-purple-600 transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-purple-600 after:to-pink-500 after:transition-all hover:after:w-full"
          >
            {t('cleanmac.nav_pricing')}
          </button>
          <button
            onClick={() => scrollToSection('download')}
            className="text-gray-900 font-semibold text-[15px] relative py-1 hover:text-purple-600 transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-purple-600 after:to-pink-500 after:transition-all hover:after:w-full"
          >
            {t('cleanmac.nav_download')}
          </button>
          <button
            onClick={() => scrollToSection('extension')}
            className="text-gray-900 font-semibold text-[15px] relative py-1 hover:text-purple-600 transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-purple-600 after:to-pink-500 after:transition-all hover:after:w-full"
          >
            {t('cleanmac.nav_extension')}
          </button>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <Sun className="w-5 h-5 text-yellow-500" />
            ) : (
              <Moon className="w-5 h-5 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <Sun className="w-5 h-5 text-yellow-500" />
            ) : (
              <Moon className="w-5 h-5 text-gray-700" />
            )}
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex flex-col gap-1.5 p-1.5"
            aria-label="Toggle navigation"
          >
            <span className={`w-6 h-0.5 bg-gray-900 rounded transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-gray-900 rounded transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-gray-900 rounded transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-[30px] border-t border-gray-200">
          <div className="max-w-6xl mx-auto px-5 py-4 space-y-3">
            <button
              onClick={() => scrollToSection('features')}
              className="block w-full text-left text-gray-900 font-semibold py-2 hover:text-purple-600 transition-colors"
            >
              {t('cleanmac.nav_features')}
            </button>
            <button
              onClick={() => scrollToSection('comparisons')}
              className="block w-full text-left text-gray-900 font-semibold py-2 hover:text-purple-600 transition-colors"
            >
              {t('cleanmac.nav_compare')}
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="block w-full text-left text-gray-900 font-semibold py-2 hover:text-purple-600 transition-colors"
            >
              {t('cleanmac.nav_pricing')}
            </button>
            <button
              onClick={() => scrollToSection('download')}
              className="block w-full text-left text-gray-900 font-semibold py-2 hover:text-purple-600 transition-colors"
            >
              {t('cleanmac.nav_download')}
            </button>
            <button
              onClick={() => scrollToSection('extension')}
              className="block w-full text-left text-gray-900 font-semibold py-2 hover:text-purple-600 transition-colors"
            >
              {t('cleanmac.nav_extension')}
            </button>
          </div>
        </div>
      )}
    </nav>
    </>
  )
}

