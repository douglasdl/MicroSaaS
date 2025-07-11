import { FirestoreAdapter } from '@auth/firebase-adapter'
import { Timestamp } from 'firebase-admin/firestore'
import NextAuth, { type DefaultSession } from 'next-auth'
import Google from 'next-auth/providers/google'
import { env } from '../env'
import { TRIAL_DAYS } from './config'
import { db, firebaseCert } from './firebase'

declare module 'next-auth' {
  interface Session {
    user: {
      createdAt: number
      isTrial: boolean
    } & DefaultSession['user']
  }

  interface User {
    createdAt: number
    isTrial?: boolean
    isSubscribed?: boolean
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: FirestoreAdapter({
    credential: firebaseCert,
  }),
  providers: [Google],
  events: {
    createUser: async ({ user }) => {
      if (!user.id) return

      await db.collection('users').doc(user.id).update({
        createdAt: Timestamp.now().toMillis(),
      })
    },
  },
  callbacks: {
    session({ session, user }) {
      return {
        ...session,
        user: {
          ...session.user,
          isTrial:
            new Date(user.createdAt).getTime() >
              new Date().getTime() - 1000 * 60 * 60 * 24 * TRIAL_DAYS || false,
        },
      }
    },
  },
})
