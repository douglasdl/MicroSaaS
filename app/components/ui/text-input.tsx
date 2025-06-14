import { cn } from '@/app/lib/utils'
import type { InputHTMLAttributes, ReactNode } from 'react'

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  children?: ReactNode
}

export function TextInput({ children, ...props }: TextInputProps) {
  return (
    <input
      className={cn(
        'w-full p-3 bg-background-secondary text-white placeholder:text-content-placeholder rounded-xl border border-transparent hover:border-border-secondary hover:text-content-body active:border-border-tertiary',
        props.className
      )}
      {...props}
    />
  )
}
