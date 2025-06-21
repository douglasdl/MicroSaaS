import type { RefObject } from 'react'
import { useEffect } from 'react'

export function useOnClickOutside(
  ref: RefObject<HTMLElement | null>,
  handler?: () => void
) {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      const target = event.target as HTMLElement

      if (!ref.current || ref.current.contains(target)) {
        return
      }

      if (handler) {
        handler()
      }
    }

    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)

    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [ref, handler])
}
