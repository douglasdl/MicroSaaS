import { cn } from '@/app/lib/utils'
import type { ReactNode, TextareaHTMLAttributes } from 'react'

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  children?: ReactNode
}

export function TextArea({ children, ...props }: TextAreaProps) {
  return (
    <textarea
      {...props}
      className={cn(
        `w-full p-3 bg-background-secondary text-white placeholder:text-content-placeholder rounded-xl 
      border border-transparent hover:border-border-secondary hover:text-content-body active:border-border-tertiary`,
        props.className
      )}
    >
      {children}
    </textarea>
  )
}
