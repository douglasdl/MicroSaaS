import type { MetadataRoute } from 'next'
import { socialMedias } from './server/get-text-by-slug'

export default function sitemap(): MetadataRoute.Sitemap {
  const socialMediaEntries: MetadataRoute.Sitemap = socialMedias.map(media => ({
    url: `https://projectinbio.misemachi.jp/recursos/link-na-bio-para-${media}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: 0.5,
  }))

  const staticEntries: MetadataRoute.Sitemap = [
    {
      url: 'https://projectinbio.misemachi.jp/',
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]

  return [...staticEntries, ...socialMediaEntries]
}
