import { type Stripe, loadStripe } from '@stripe/stripe-js'
import { useEffect, useState } from 'react'

interface CreateCheckoutProps {
  metadata: any
  isSubscription: boolean
}

export function useStripe() {
  const [stripe, setStripe] = useState<Stripe | null>(null)

  useEffect(() => {
    async function loadStripeAsync() {
      const stripeKey = process.env.NEXT_PUBLIC_STRIPE_PUB_KEY
      if (!stripeKey) return

      const stripeInstance = await loadStripe(stripeKey)
      setStripe(stripeInstance)
    }
    loadStripeAsync()
  }, [])

  async function createStripeCheckout({
    metadata,
    isSubscription,
  }: CreateCheckoutProps) {
    try {
      const response = await fetch('/api/stripe/create-checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ metadata, isSubscription }),
      })

      const data = await response.json()

      await stripe?.redirectToCheckout({
        sessionId: data.sessionId,
      })
    } catch (error) {
      console.error(error)
    }
  }

  return {
    createStripeCheckout,
  }
}
