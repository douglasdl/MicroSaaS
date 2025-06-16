import { cn } from '@/app/lib/utils'
import type { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'link'
  children?: ReactNode
}

export function Button({
  variant = 'primary',
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        'p-3 text-white rounded-xl font-bold whitespace-nowrap hover:opacity-95 disabled:opacity-70',
        variant === 'primary' && 'bg-accent-purple',
        variant === 'secondary' && 'bg-background-tertiary',
        variant === 'tertiary' && 'bg-[#1e1e1e] hover:bg-[#2e2e2e]',
        variant === 'ghost' && 'border-border-primary border',
        variant === 'link' && 'text-accent-green p-0 hover:underline',
        props.className
      )}
    >
      {children}
    </button>
  )
}
