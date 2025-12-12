# Guia de SEO para /cleanmacapp

## Palavras-chave principais
- PT: clean my mac, limpar mac, limpar cache macOS, otimizar mac, alternativa cleanmymac, mac cleaner gratis, mac sem anúncios, limpeza macbook
- EN: clean my mac, cleanmymac alternative, mac cleaner, mac cache cleaner, speed up mac, macbook cleanup

## Estrutura recomendada de títulos
- H1: CleanMac App — alternativa ao CleanMyMac, limpeza em 1 clique
- H2: Benefícios/recursos, Comparativo, Preços, Download, Extensão, FAQ
- H3: Itens de prova social (downloads, países, avaliações), cards de recursos e comparativos

## Metatags (já aplicadas via `CleanMacApp.tsx`)
- title: “CleanMac App | alternativa CleanMyMac, limpar cache e otimizar macOS”
- description: destacar 1 clique, sem anúncios, Software, pagamento único
- keywords: clean my mac, cleanmymac alternative, otimizar mac, limpar cache macOS, mac cleaner, macbook lento
- og/twitter: usar logo em `/images/cleanmac-logo.png`, canonical `/cleanmacapp`

## Schema Markup
- `SoftwareApplication` com preço (1.00 USD), downloads (100k+), rating (4.9/5), OS macOS 12+, downloadUrl do GitHub.
- `FAQPage` reaproveitando perguntas do FAQ (segurança, Apple Silicon, assinatura).

## Conteúdo e copy
- Incluir termos “alternativa ao CleanMyMac” e “limpar cache do macOS” no hero e nas seções de prova social.
- Destacar diferenciais: sem anúncios, sem rastreamento, Software, pagamento único, extensão + app.
- Comparar explicitamente com OnyX, CCleaner, AppCleaner, BuhoCleaner, DaisyDisk, MacKeeper, iBoysoft, Avast (já no componente `Comparisons`).

## Links internos/externos
- Internos: navegação por âncora (features, comparisons, pricing, download, extension, faq).
- Externos úteis: GitHub do app, changelog/releases, loja da extensão (Chrome), página da Semicolon.
- Evitar links para concorrentes; apenas menções textuais.

## Performance / Core Web Vitals
- Manter imagens otimizadas (logo em PNG pequeno). Usar lazy para novas imagens/prints se adicionadas.
- Evitar scripts extras além do Stripe (já carregado sob demanda).
- Verificar CLS do hero com animações; manter alturas consistentes nos cards.

## Conteúdo recorrente
- Atualizar contador de downloads/países trimestralmente.
- Atualizar versão e preço no JSON-LD ao lançar nova release.
- Revisar FAQ se novos recursos forem adicionados.

## Backlinks sugeridos
- Fóruns/communities de macOS e desenvolvimento (Reddit r/mac, Hacker News em lançamentos).
- Diretórios de software macOS e blogs de produtividade (guest posts curtos com âncora “alternativa ao CleanMyMac”).

## Monitoramento
- Configurar Google Search Console e Bing Webmaster.
- Acompanhar CTR para queries “cleanmymac alternative”, “limpar mac”, “clean my mac free”.
- Medir conversão clique hero → download/compra; ajustar CTAs conforme resultados.

