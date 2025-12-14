import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useFavicon } from '../hooks/useFavicon'
import CleanMacNavbar from '../components/cleanmac/Navbar'
import CleanMacFooter from '../components/cleanmac/Footer'

type Status = 'loading' | 'success' | 'error'

interface StripeSession {
  id: string
  payment_status: 'paid' | 'unpaid' | 'no_payment_required'
  status: 'complete' | 'open' | 'expired'
  error?: {
    message: string
  }
}

export default function CleanMacDownload() {
  const { t } = useTranslation()
  useFavicon('cleanmac')
  const [searchParams] = useSearchParams()
  const [status, setStatus] = useState<Status>('loading')
  const [errorMessage, setErrorMessage] = useState<string>('')

  const sessionId = useMemo(() => searchParams.get('session_id') || '', [searchParams])

  useEffect(() => {
    if (!sessionId) {
      setStatus('error')
      setErrorMessage(t('cleanmac.download_page_error_session_not_found'))
      return
    }

    const validatePayment = async () => {
      try {
        const workerUrl = `https://soft-morning-9b33.developmentsemicolon.workers.dev/?session_id=${encodeURIComponent(sessionId)}`
        const response = await fetch(workerUrl)

        if (!response.ok) {
          throw new Error(`${t('cleanmac.download_page_error_validation_failed')}: ${response.status}`)
        }

        const data: StripeSession = await response.json()
        // Verificar se há erro na resposta
        if (data.error) {
          setStatus('error')
          setErrorMessage(data.error.message || t('cleanmac.download_page_error_validation_failed'))
          return
        }

        // Verificar se o pagamento foi confirmado
        if (data.payment_status === 'paid' && data.status === 'complete') {
          setStatus('success')
          setErrorMessage('')
        } else {
          setStatus('error')
          setErrorMessage(t('cleanmac.download_page_error_payment_not_confirmed'))
        }
      } catch (error) {
        console.error('Erro ao validar pagamento:', error)
        setStatus('error')
        setErrorMessage(
          error instanceof Error
            ? error.message
            : t('cleanmac.download_page_error_server_connection')
        )
      }
    }

    validatePayment()
  }, [sessionId])

  const downloadUrlAppleSilicon = 'https://drive.google.com/file/d/1fL-IPAgVGCaLqaJuiHrfRXf_DqcSCHxw/view?usp=sharing'
  const downloadUrlIntel = 'https://drive.google.com/file/d/17lw_dSDHaILETqu7sJFPv261CQciW2D0/view?usp=sharing'

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
                : status === 'loading'
                ? t('cleanmac.download_page_validating')
                : t('cleanmac.download_page_subtitle_error')}
            </p>
            {status === 'error' && errorMessage && (
              <div className="mt-4 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
                <p className="text-sm text-red-800 dark:text-red-200 text-center">{errorMessage}</p>
              </div>
            )}
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

