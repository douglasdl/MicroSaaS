import FAQ from '@/app/components/landing-page/faq'
import Header from '@/app/components/landing-page/header'
import Hero from '@/app/components/landing-page/hero'
import Pricing from '@/app/components/landing-page/pricing'
import VideoExplanation from '@/app/components/landing-page/video-explanation'
import type { Metadata } from 'next'
import { trackServerEvent } from '../lib/mixpanel'
import { getSEOTags } from '../lib/seo'

export const metadata: Metadata = getSEOTags({
  appName: 'ProjectInBio',
  appDescription:
    'ProjectInBio - Seus projetos e redes sociais em um único link',
  keywords: [
    'ProjectInBio',
    'projetos',
    'redes sociais',
    'sns',
    'link',
    'portifolio',
    'bio',
  ],
  appDomain: 'https://projectinbio.misemachi.jp',
  canonicalUrlRelative: '/',
})

export default function Home() {
  trackServerEvent('page_view', {
    page: 'home',
  })

  return (
    <div className="max-w-7xl mx-auto px-4 w-full">
      <Header />
      <Hero />
      <VideoExplanation />
      <Pricing />
      <FAQ />
    </div>
  )
}
