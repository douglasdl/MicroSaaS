'use client'

import { useStripe } from '@/app/hooks/useStripe'
import { Button } from '../ui/button'

export function PortalButton() {
  const { handleCreateStripePortal } = useStripe()
  return (
    <Button variant="ghost" onClick={handleCreateStripePortal}>
      Portal
    </Button>
  )
}
