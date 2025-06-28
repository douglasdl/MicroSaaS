import { cert, getApps, initializeApp } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'
import { getStorage } from 'firebase-admin/storage'
import 'server-only'
import { env } from '@/app/env'

console.log(env)

// Certificate
const decodedKey = Buffer.from(
  env.FIREBASE_PRIVATE_KEY_BASE64 ??
    (() => {
      throw new Error('FIREBASE_PRIVATE_KEY_BASE64 is not defined')
    })(),
  'base64'
).toString('utf-8')

export const firebaseCert = cert({
  projectId: env.FIREBASE_PROJECT_ID,
  clientEmail: env.FIREBASE_CLIENT_EMAIL,
  privateKey: decodedKey,
})

// App Instance
if (!getApps().length) {
  initializeApp({
    credential: firebaseCert,
    storageBucket: env.FIREBASE_STORAGE_BUCKET,
  })
}

export const db = getFirestore()

export const storage = getStorage().bucket()

export async function getDownloadURLFromPath(path?: string) {
  if (!path) return

  const file = storage.file(path)

  const [url] = await file.getSignedUrl({
    action: 'read',
    expires: '03-01-2500', // Do not expires
  })

  return url
}
