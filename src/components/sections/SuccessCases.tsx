import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { successCases } from '../../data/successCases'
import { ExternalLink } from 'lucide-react'
import { SuccessCase } from '../../data/successCases'

export default function SuccessCases() {
  const { t, i18n } = useTranslation()
  const currentLang = i18n.language as 'en' | 'pt' | 'es'

  const renderCaseContent = (caseItem: SuccessCase) => {
    const isInternal = caseItem.website.startsWith('/')

    return (
      <>
        {caseItem.featured && (
          <span className="absolute top-3 right-3 text-xs bg-primary-500 text-white px-2 py-1 rounded z-10 shadow-sm">
            Featured
          </span>
        )}

        <div className="flex flex-col items-center justify-between h-full gap-4">
          <div className="h-16 w-full flex items-center justify-center">
            {caseItem.id === 'goprimy' ? (
              <div className="flex items-center space-x-2 grayscale group-hover:grayscale-0 transition-all duration-300">
                <div className="w-9 h-9 bg-gradient-to-br from-emerald-500 via-emerald-600 to-emerald-700 rounded-lg flex items-center justify-center shadow-lg shadow-emerald-500/30">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5 text-white"
                  >
                    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
                    <path d="M5 3v4"></path>
                    <path d="M19 17v4"></path>
                    <path d="M3 5h4"></path>
                    <path d="M17 19h4"></path>
                  </svg>
                </div>
                <span className="text-lg font-bold text-slate-900 dark:text-slate-100 tracking-tight">
                  GoPrimy
                </span>
              </div>
            ) : (
              <>
                <img
                  src={caseItem.companyLogo}
                  alt={caseItem.companyName}
                  className="max-h-12 w-auto object-contain transition-all duration-300 grayscale group-hover:grayscale-0"
                  loading="lazy"
                />
                {caseItem.id === 'cleanmac' && (
                  <span className="text-lg font-bold text-slate-900 dark:text-slate-100 tracking-tight">
                    {' '} CleanMac App
                  </span>
                )}

                {caseItem.id === 'dalton' && (  
                  <span className="text-lg font-bold text-slate-900 dark:text-slate-100 tracking-tight">
                    {' '} &nbsp; Dalton
                  </span>
                )}
              </>
            )}
          </div>

          <p className="text-sm text-gray-600 dark:text-gray-400 text-center group-hover:text-primary-700 dark:group-hover:text-primary-400 transition-colors">
            {caseItem.description[currentLang]}
          </p>

          <div className="h-4 opacity-0 group-hover:opacity-100 transition-opacity">
            {!isInternal && (
              <ExternalLink className="w-4 h-4 text-primary-600 dark:text-primary-400" />
            )}
          </div>
        </div>
      </>
    )
  }

  return (
    <section id="cases" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{t('successCases.title')}</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('successCases.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {successCases.map((caseItem, index) => {
            const isInternalLink = caseItem.website.startsWith('/')
            const motionProps = {
              initial: { opacity: 0, y: 20 } as const,
              whileInView: { opacity: 1, y: 0 } as const,
              viewport: { once: true } as const,
              transition: { duration: 0.5, delay: index * 0.1 } as const,
            }

            const className =
              'group relative bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_16px_40px_rgba(99,102,241,0.15)] transition-all duration-300 border border-gray-100 dark:border-gray-800 hover:border-primary-500/70 dark:hover:border-primary-400/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900'

            if (isInternalLink) {
              return (
                <motion.div
                  key={caseItem.id}
                  {...motionProps}
                >
                  <Link
                    to={caseItem.website}
                    className={className}
                  >
                    {renderCaseContent(caseItem)}
                  </Link>
                </motion.div>
              )
            }

            return (
              <motion.a
                key={caseItem.id}
                href={caseItem.website}
                target="_blank"
                rel="noopener noreferrer"
                {...motionProps}
                className={className}
              >
                {renderCaseContent(caseItem)}
              </motion.a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
