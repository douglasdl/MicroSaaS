import FAQ from '@/app/components/landing-page/faq'
import Header from '@/app/components/landing-page/header'
import Hero from '@/app/components/landing-page/hero'
import Pricing from '@/app/components/landing-page/pricing'
import VideoExplanation from '@/app/components/landing-page/video-explanation'
import { getTextBySlug } from '@/app/server/get-text-by-slug'
import { notFound } from 'next/navigation'

interface LinkInBioProps {
  params: Promise<{
    socialMediaSlug: string
  }>
}

export default async function LinkInBio({ params }: LinkInBioProps) {
  const { socialMediaSlug } = await params

  const texts = await getTextBySlug(socialMediaSlug)

  if (!texts) {
    return notFound()
  }
  return (
    <div className="max-w-7xl mx-auto px-4 w-full">
      <Header />
      <Hero texts={texts} />
      <VideoExplanation />
      <Pricing />
      <FAQ />
    </div>
  )
}
