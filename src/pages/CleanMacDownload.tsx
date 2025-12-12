import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import CleanMacNavbar from '../components/cleanmac/Navbar'
import CleanMacFooter from '../components/cleanmac/Footer'

type Status = 'loading' | 'success' | 'error'

export default function CleanMacDownload() {
  const { t } = useTranslation()
  const [searchParams] = useSearchParams()
  const [status, setStatus] = useState<Status>('loading')

  const sessionId = useMemo(() => searchParams.get('session_id') || '', [searchParams])

  useEffect(() => {
    if (!sessionId) {
      setStatus('error')
      return
    }
    // Sem validação serverless: apenas confirma presença do session_id.
    setStatus('success')
  }, [sessionId])

  const downloadUrlAppleSilicon = 'https://drive.google.com/file/d/1Yx8xj3LVSjJXyndzeEOxH1VJiOrOQ1g1/view?usp=sharing'
  const downloadUrlIntel = 'https://drive.google.com/file/d/1os2RTMFqpP9n-gsM8IMYdXsavBSHPPXi/view?usp=sharing'

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <CleanMacNavbar />

      <main className="py-16 px-5">
        <div className="max-w-[1100px] mx-auto">
          <header className="text-center mb-12">
            <p className="text-sm font-semibold text-primary-600 uppercase tracking-[0.2em] mb-3">
              CleanMac App
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('cleanmac.download_page_title')}</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              {status === 'success'
                ? t('cleanmac.download_page_subtitle_success')
                : t('cleanmac.download_page_subtitle_error')}
            </p>
          </header>

          <section className="grid gap-6 md:grid-cols-2">
            <DownloadCard
              title={t('cleanmac.download_page_apple_silicon_title')}
              description={t('cleanmac.download_page_apple_silicon_desc')}
              href={downloadUrlAppleSilicon}
              disabled={status !== 'success'}
            />
            <DownloadCard
              title={t('cleanmac.download_page_intel_title')}
              description={t('cleanmac.download_page_intel_desc')}
              href={downloadUrlIntel}
              disabled={status !== 'success'}
            />
          </section>

          {status === 'success' && sessionId && (
            <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl">
              <p className="text-sm text-blue-800 dark:text-blue-200 text-center">
                {t('cleanmac.download_page_password_note')}
              </p>
            </div>
          )}
        </div>
      </main>

      <CleanMacFooter />
    </div>
  )
}

type DownloadCardProps = {
  title: string
  description: string
  href: string
  disabled?: boolean
}

function DownloadCard({ title, description, href, disabled }: DownloadCardProps) {
  const { t } = useTranslation()
  return (
    <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-[0_16px_40px_rgba(15,23,42,0.08)] p-8 flex flex-col gap-4">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600" />
      <div className="mt-2">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{description}</p>
      </div>
      <button
        className={`mt-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-all duration-200 ${
          disabled
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-gradient-to-r from-purple-600 to-pink-500 shadow-[0_10px_30px_rgba(139,92,246,0.35)] hover:shadow-[0_14px_36px_rgba(139,92,246,0.45)] hover:-translate-y-[2px]'
        }`}
        onClick={() => {
          if (disabled) return
          window.open(href, '_blank', 'noopener,noreferrer')
        }}
        disabled={disabled}
      >
        <span>{t('cleanmac.download_page_btn')}</span>
        <span aria-hidden="true">↓</span>
      </button>
    </div>
  )
}

