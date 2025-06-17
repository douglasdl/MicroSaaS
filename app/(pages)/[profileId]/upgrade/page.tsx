import Header from '@/app/components/landing-page/header'
import { Button } from '@/app/components/ui/button'

interface UpgradePageProps {
  params: Promise<{ profileId: string }>
}

export default async function UpgradePage({ params }: UpgradePageProps) {
  const { profileId } = await params
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-4">
      <Header />
      <h2 className="text-2xl font-bold">Escolha o plano</h2>
      <div className="flex gap-4">
        <Button>R$9,90 /mês</Button>
        <Button>R$99,90 Vitalício</Button>
      </div>
    </div>
  )
}
