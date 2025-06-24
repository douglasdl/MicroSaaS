'use server'

import { auth } from '../lib/auth'
import { db } from '../lib/firebase'

export interface LinkProps {
  title: string
  url: string
}

interface AddCustomLinksProps {
  profileId: string
  link1: LinkProps
  link2: LinkProps
  link3: LinkProps
}

export async function AddCustomLinks({
  profileId,
  link1,
  link2,
  link3,
}: AddCustomLinksProps) {
  const session = await auth()

  if (!session) return

  try {
    return await db.collection('profiles').doc(profileId).update({
      link1,
      link2,
      link3,
    })
  } catch (error) {
    console.error(error)
  }
}
