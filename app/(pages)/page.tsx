import FAQ from '@/app/components/landing-page/faq'
import Header from '@/app/components/landing-page/header'
import Hero from '@/app/components/landing-page/hero'
import Pricing from '@/app/components/landing-page/pricing'
import VideoExplanation from '@/app/components/landing-page/video-explanation'
import { trackServerEvent } from '../lib/mixpanel'

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
