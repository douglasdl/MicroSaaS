import { FirestoreAdapter } from '@auth/firebase-adapter'
import NextAuth from 'next-auth'
import Google from 'next-auth/providers/google'
import { env } from '../env'
import { firebaseCert } from './firebase'

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: FirestoreAdapter({
    credential: firebaseCert,
  }),
  providers: [Google],
  events: {},
  callbacks: {},
})
