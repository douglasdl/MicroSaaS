'use server'

import { auth } from '../lib/auth'
import { db } from '../lib/firebase'

export async function verifyLink(link: string) {
  const session = await auth()
  if (!session?.user) return

  const snapshot = await db.collection('profiles').doc(link).get()

  return snapshot.exists
}
