import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useFavicon } from '../hooks/useFavicon'
import CleanMacNavbar from '../components/cleanmac/Navbar'
import CleanMacFooter from '../components/cleanmac/Footer'

export default function CleanMacPrivacy() {
  const { t } = useTranslation()
  useFavicon('cleanmac')

  useEffect(() => {
    document.title = `${t('cleanmac.privacy_policy_title')} | ${t('cleanmac.app_name')}`
  }, [t])

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <CleanMacNavbar />
      <main className="py-16 px-5">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 dark:text-white">
            {t('cleanmac.privacy_policy_title')}
          </h1>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              <strong>{t('cleanmac.privacy_last_updated')}</strong> {t('cleanmac.privacy_last_updated_date')}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                {t('cleanmac.privacy_section1_title')}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                {t('cleanmac.privacy_section1_content')}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                {t('cleanmac.privacy_section2_title')}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                {t('cleanmac.privacy_section2_content')}
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li>{t('cleanmac.privacy_section2_item1')}</li>
                <li>{t('cleanmac.privacy_section2_item2')}</li>
                <li>{t('cleanmac.privacy_section2_item3')}</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                {t('cleanmac.privacy_section3_title')}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                {t('cleanmac.privacy_section3_content')}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                {t('cleanmac.privacy_section4_title')}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                {t('cleanmac.privacy_section4_content')}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                {t('cleanmac.privacy_section5_title')}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                {t('cleanmac.privacy_section5_content')}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                {t('cleanmac.privacy_section6_title')}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                {t('cleanmac.privacy_section6_content')}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                {t('cleanmac.privacy_section7_title')}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                {t('cleanmac.privacy_section7_content')}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                {t('cleanmac.privacy_contact_title')}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {t('cleanmac.privacy_contact_content')}
              </p>
            </section>
          </div>
        </div>
      </main>
      <CleanMacFooter />
    </div>
  )
}

