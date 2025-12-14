import { useEffect } from 'react'

type FaviconType = 'cleanmac' | 'default'

const cleanmacFavicons = [
  // Standard favicons
  { rel: 'icon', type: 'image/x-icon', href: '/cleanmacapp/favicon/favicon.ico' },
  { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/cleanmacapp/favicon/favicon-16x16.png' },
  { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/cleanmacapp/favicon/favicon-32x32.png' },
  { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/cleanmacapp/favicon/favicon-96x96.png' },
  
  // Apple Touch Icons
  { rel: 'apple-touch-icon', sizes: '57x57', href: '/cleanmacapp/favicon/apple-icon-57x57.png' },
  { rel: 'apple-touch-icon', sizes: '60x60', href: '/cleanmacapp/favicon/apple-icon-60x60.png' },
  { rel: 'apple-touch-icon', sizes: '72x72', href: '/cleanmacapp/favicon/apple-icon-72x72.png' },
  { rel: 'apple-touch-icon', sizes: '76x76', href: '/cleanmacapp/favicon/apple-icon-76x76.png' },
  { rel: 'apple-touch-icon', sizes: '114x114', href: '/cleanmacapp/favicon/apple-icon-114x114.png' },
  { rel: 'apple-touch-icon', sizes: '120x120', href: '/cleanmacapp/favicon/apple-icon-120x120.png' },
  { rel: 'apple-touch-icon', sizes: '144x144', href: '/cleanmacapp/favicon/apple-icon-144x144.png' },
  { rel: 'apple-touch-icon', sizes: '152x152', href: '/cleanmacapp/favicon/apple-icon-152x152.png' },
  { rel: 'apple-touch-icon', sizes: '180x180', href: '/cleanmacapp/favicon/apple-icon-180x180.png' },
  { rel: 'apple-touch-icon-precomposed', href: '/cleanmacapp/favicon/apple-icon-precomposed.png' },
  
  // Manifest and browserconfig
  { rel: 'manifest', href: '/cleanmacapp/favicon/manifest.json' },
]

const defaultFavicons = [
  { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
  { rel: 'alternate icon', href: '/favicon.svg' },
]

export function useFavicon(type: FaviconType) {
  useEffect(() => {
    const favicons = type === 'cleanmac' ? cleanmacFavicons : defaultFavicons
    const addedLinks: HTMLLinkElement[] = []
    const addedMetas: HTMLMetaElement[] = []

    // Remove existing favicon links that don't match the current type
    const existingLinks = document.head.querySelectorAll('link[rel*="icon"], link[rel="manifest"], link[rel="apple-touch-icon"], link[rel="apple-touch-icon-precomposed"]')
    existingLinks.forEach((link) => {
      const href = (link as HTMLLinkElement).href
      const isCleanmac = href.includes('/cleanmacapp/favicon/')
      const isDefault = href.includes('/favicon.svg')
      
      // Remove if it doesn't match the current type
      if (type === 'cleanmac' && !isCleanmac) {
        link.remove()
      } else if (type === 'default' && !isDefault) {
        link.remove()
      }
    })

    // Add new favicon links
    favicons.forEach((favicon) => {
      // Check if link already exists (check by href to avoid duplicates)
      const existingLink = Array.from(document.head.querySelectorAll('link')).find(
        (link) => {
          const linkHref = link.getAttribute('href')
          const linkRel = link.getAttribute('rel')
          return linkHref === favicon.href && linkRel === favicon.rel
        }
      )

      if (!existingLink) {
        const link = document.createElement('link')
        link.rel = favicon.rel
        if (favicon.type) link.type = favicon.type
        if (favicon.sizes) link.setAttribute('sizes', favicon.sizes)
        link.href = favicon.href
        document.head.appendChild(link)
        addedLinks.push(link)
      }
    })

    // Add Windows tile meta tags for CleanMac
    if (type === 'cleanmac') {
      const msTileColor = document.createElement('meta')
      msTileColor.name = 'msapplication-TileColor'
      msTileColor.content = '#8b5cf6'
      document.head.appendChild(msTileColor)
      addedMetas.push(msTileColor)

      const msTileImage = document.createElement('meta')
      msTileImage.name = 'msapplication-TileImage'
      msTileImage.content = '/cleanmacapp/favicon/ms-icon-144x144.png'
      document.head.appendChild(msTileImage)
      addedMetas.push(msTileImage)

      const msConfig = document.createElement('meta')
      msConfig.name = 'msapplication-config'
      msConfig.content = '/cleanmacapp/favicon/browserconfig.xml'
      document.head.appendChild(msConfig)
      addedMetas.push(msConfig)
    }

    // Cleanup function
    return () => {
      addedLinks.forEach((link) => {
        if (link.parentNode) {
          link.parentNode.removeChild(link)
        }
      })
      addedMetas.forEach((meta) => {
        if (meta.parentNode) {
          meta.parentNode.removeChild(meta)
        }
      })

      // Restore default favicon if switching away from cleanmac
      if (type === 'cleanmac') {
        defaultFavicons.forEach((favicon) => {
          const existingLink = document.head.querySelector(
            `link[rel="${favicon.rel}"][href="${favicon.href}"]`
          )
          if (!existingLink) {
            const link = document.createElement('link')
            link.rel = favicon.rel
            if (favicon.type) link.type = favicon.type
            link.href = favicon.href
            document.head.appendChild(link)
          }
        })
      }
    }
  }, [type])
}

