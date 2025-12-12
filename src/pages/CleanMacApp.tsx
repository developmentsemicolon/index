import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import CleanMacNavbar from '../components/cleanmac/Navbar'
import CleanMacFooter from '../components/cleanmac/Footer'
import Hero from '../components/cleanmac/Hero'
import Features from '../components/cleanmac/Features'
import Comparisons from '../components/cleanmac/Comparisons'
import Pricing from '../components/cleanmac/Pricing'
import Download from '../components/cleanmac/Download'
import Extension from '../components/cleanmac/Extension'
import FAQ from '../components/cleanmac/FAQ'

export default function CleanMacApp() {
  const { t } = useTranslation()

  useEffect(() => {
    const origin = window?.location?.origin || 'https://cleanmac.app'
    const pageUrl = `${origin}/cleanmacapp`
    const title = 'CleanMac App | alternativa CleanMyMac, limpar cache e otimizar macOS'
    const description =
      'CleanMac App é uma alternativa rápida e transparente ao CleanMyMac: limpa caches, logs, arquivos temporários e navegador em 1 clique. Sem anúncios, sem rastreamento e com pagamento único.'
    const keywords =
      'clean my mac, cleanmymac alternative, otimizar mac, limpar mac, limpar cache macOS, mac cleaner, limpar armazenamento mac, macbook lento, limpar navegador mac'

    const upsertMeta = (attr: 'name' | 'property', key: string, content: string) => {
      let tag = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
      if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute(attr, key)
        document.head.appendChild(tag)
      }
      tag.setAttribute('content', content)
    }

    const upsertLink = (rel: string, href: string) => {
      let link = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`)
      if (!link) {
        link = document.createElement('link')
        link.setAttribute('rel', rel)
        document.head.appendChild(link)
      }
      link.setAttribute('href', href)
    }

    document.title = title
    upsertMeta('name', 'description', description)
    upsertMeta('name', 'keywords', keywords)
    upsertMeta('name', 'robots', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1')
    upsertMeta('property', 'og:title', title)
    upsertMeta('property', 'og:description', description)
    upsertMeta('property', 'og:type', 'website')
    upsertMeta('property', 'og:url', pageUrl)
    upsertMeta('property', 'og:image', `${origin}/images/cleanmac-logo.png`)
    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:title', title)
    upsertMeta('name', 'twitter:description', description)
    upsertMeta('name', 'twitter:image', `${origin}/images/cleanmac-logo.png`)
    upsertLink('canonical', pageUrl)

    const softwareLd = {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'CleanMac App',
      applicationCategory: 'UtilitiesApplication',
      operatingSystem: 'macOS 12+',
      offers: {
        '@type': 'Offer',
        price: '1.00',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        ratingCount: '120000',
      },
      downloadUrl: 'https://buy.stripe.com/test_aFa5kC99j6YT5Zt7w25Vu00',
      softwareVersion: '1.0.0',
      image: `${origin}/images/cleanmac-logo.png`,
      description,
      publisher: {
        '@type': 'Organization',
        name: 'SemicolonDevelopment',
      },
      inLanguage: 'pt-BR',
      url: pageUrl,
    }

    const faqPairs = [
      { question: t('cleanmac.faq_q1'), answer: t('cleanmac.faq_a1') },
      { question: t('cleanmac.faq_q2'), answer: t('cleanmac.faq_a2') },
      { question: t('cleanmac.faq_q3'), answer: t('cleanmac.faq_a3') },
    ]

    const faqLd = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqPairs.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    }

    const upsertLdJson = (id: string, payload: object) => {
      let script = document.getElementById(id) as HTMLScriptElement | null
      if (!script) {
        script = document.createElement('script')
        script.id = id
        script.type = 'application/ld+json'
        document.head.appendChild(script)
      }
      script.textContent = JSON.stringify(payload)
    }

    upsertLdJson('ld-software-cleanmac', softwareLd)
    upsertLdJson('ld-faq-cleanmac', faqLd)
  }, [t])

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <CleanMacNavbar />
      <main>
        <Hero />
        <Features />
        <Comparisons />
        <Pricing />
        <Download />
        <Extension />
        <FAQ />
      </main>
      <CleanMacFooter />
    </div>
  )
}

