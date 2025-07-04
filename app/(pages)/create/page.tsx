import Header from '@/app/components/landing-page/header'
import { trackServerEvent } from '@/app/lib/mixpanel'
import { Rocket } from 'lucide-react'
import type { Metadata } from 'next'
import CreateLinkForm from './create-link-form'

export const metadata: Metadata = {
  title: 'ProjectInBio - Criar',
  description: 'ProjectInBio - A plataforma de gestão de projetos',
}

export default function CreatePage() {
  trackServerEvent('page_view', {
    page: 'create',
  })
  return (
    <div>
      <Header />
      <div className="h-screen flex flex-col gap-10 items-center justify-center max-w-xl mx-auto">
        <div className="flex items-center gap-4">
          <h1 className="text-4xl font-bold text-white">Escolha seu link</h1>
          <Rocket className="size-10" />
        </div>
        <CreateLinkForm />
      </div>
    </div>
  )
}
