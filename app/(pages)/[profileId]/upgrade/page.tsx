import Header from '@/app/components/landing-page/header'
import type { Metadata } from 'next'
import { PlanButtons } from './plan-buttons'

export const metadata: Metadata = {
  title: 'ProjectInBio - Upgrade',
  description: 'ProjectInBio - A plataforma de gestão de projetos',
}

interface UpgradePageProps {
  params: Promise<{ profileId: string }>
}

export default async function UpgradePage({ params }: UpgradePageProps) {
  const { profileId } = await params
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-4">
      <Header />
      <h2 className="text-2xl font-bold">Escolha o plano</h2>
      <PlanButtons />
    </div>
  )
}
