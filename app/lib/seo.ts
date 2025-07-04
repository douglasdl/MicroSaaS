import type { Metadata } from 'next'

interface SEOTagsProps {
  appName: string
  appDescription: string
  keywords: string[]
  appDomain: string
  canonicalUrlRelative: string
  extraTags?: Metadata
  locale?: string
}

export function getSEOTags({
  appName,
  appDescription,
  keywords,
  appDomain,
  canonicalUrlRelative,
  extraTags,
  locale,
}: SEOTagsProps): Metadata {
  return {
    title: appName,
    description: appDescription,
    keywords,
    applicationName: appName,
    metadataBase: new URL(appDomain),
    openGraph: {
      title: appName,
      description: appDescription,
      url: appDomain,
      siteName: appName,
      locale,
      type: 'website',
    },
    twitter: {
      title: appName,
      description: appDescription,
      card: 'summary_large_image',
      creator: '@douglasdiasleal',
    },
    alternates: {
      canonical: canonicalUrlRelative,
      languages: {
        pt: canonicalUrlRelative,
        en: canonicalUrlRelative,
        ja: canonicalUrlRelative,
      },
    },
    ...extraTags,
  }
}
