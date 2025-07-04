'use client'

import { DOMAIN } from '@/app/lib/config'
import { signIn } from 'next-auth/react'
import { useState } from 'react'
import { Button } from './button'
import { TextInput } from './text-input'

export default function CreateNow() {
  const [link, setLink] = useState('')

  return (
    <div className="absolute md:relative bottom-10 right-4 md:right-auto left-4 md:left-auto flex items-center gap-2 md:w-full mt-[10vh]">
      <span className="text-white text-xl">{DOMAIN}/</span>
      <TextInput
        placeholder="Seu link"
        value={link}
        onChange={e => setLink(e.target.value)}
      />
      <Button
        onClick={() => {
          signIn('google', {
            redirectTo: `/create?link=${link}`,
          })
        }}
      >
        Criar agora
      </Button>
    </div>
  )
}
