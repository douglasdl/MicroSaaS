'use client'

import { Modal } from '@/app/components/ui/modal'
import { Plus } from 'lucide-react'
import { useState } from 'react'

interface NewProjectProps {
  profileId: string
}

export function NewProject({ profileId }: NewProjectProps) {
  const [isOpen, setIsOpen] = useState(true)

  function handleOpenModal() {
    setIsOpen(true)
  }
  return (
    <>
      <button
        type="button"
        className="w-[340px] h-[132px] rounded-[20px] bg-background-secondary flex items-center justify-center gap-2 hover:border border-dashed border-border-secondary"
        onClick={handleOpenModal}
      >
        <Plus className="size-10 text-accent-green" />
        <span>Novo Projeto</span>
      </button>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        Hello
      </Modal>
    </>
  )
}
