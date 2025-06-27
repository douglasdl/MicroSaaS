'use client'

import { AddCustomLinks } from '@/app/actions/add-custom-links'
import type { ProfileData } from '@/app/server/get-profile-data'
import { Plus } from 'lucide-react'
import { useParams, useRouter } from 'next/navigation'
import { startTransition, useState } from 'react'
import { Button } from '../../ui/button'
import { Modal } from '../../ui/modal'
import { TextInput } from '../../ui/text-input'

interface AddCustomLinkProps {
  profileData?: ProfileData
  disabled?: boolean
}

export function AddCustomLink({
  profileData,
  disabled = false,
}: AddCustomLinkProps) {
  const router = useRouter()
  const { profileId } = useParams()

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isSavingCustomLinks, setIsSavingCustomLinks] = useState(false)

  const [link1, setLink1] = useState({
    title: profileData?.link1?.title,
    url: profileData?.link1?.url,
  })
  const [link2, setLink2] = useState({
    title: profileData?.link2?.title,
    url: profileData?.link2?.url,
  })
  const [link3, setLink3] = useState({
    title: profileData?.link3?.title,
    url: profileData?.link3?.url,
  })

  function handleOpenModal() {
    if (disabled) return
    setIsModalOpen(true)
  }

  function handleCloseModal() {
    setIsModalOpen(false)
  }

  async function handleSaveCustomLinks() {
    setIsSavingCustomLinks(true)

    if (!profileId) return

    await AddCustomLinks({
      profileId: profileId as string,
      link1: { title: link1.title ?? '', url: link1.url ?? '' },
      link2: { title: link2.title ?? '', url: link2.url ?? '' },
      link3: { title: link3.title ?? '', url: link3.url ?? '' },
    })

    startTransition(() => {
      setIsModalOpen(false)
      setIsSavingCustomLinks(false)
      router.refresh()
    })
  }

  return (
    <>
      <Button variant="tertiary" onClick={handleOpenModal} disabled={disabled}>
        <Plus />
      </Button>
      <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
        <div className="bg-background-primary p-8 rounded-[20px] flex flex-col justify-between gap-10 w-[514px]">
          <p>Adicionar links personalizados</p>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="flex flex-col w-full">
                <p>Título do link</p>
                <TextInput
                  placeholder="Digite o título"
                  value={link1.title}
                  onChange={e => setLink1({ ...link1, title: e.target.value })}
                />
              </div>
              <div className="flex flex-col w-full">
                <p className="font-bold">Link</p>
                <TextInput
                  placeholder="Insira a URL"
                  value={link1.url}
                  onChange={e => setLink1({ ...link1, url: e.target.value })}
                />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex flex-col w-full">
                <p>Título do link</p>
                <TextInput
                  placeholder="Digite o título"
                  value={link2.title}
                  onChange={e => setLink2({ ...link2, title: e.target.value })}
                />
              </div>
              <div className="flex flex-col w-full">
                <p className="font-bold">Link</p>
                <TextInput
                  placeholder="Insira a URL"
                  value={link2.url}
                  onChange={e => setLink2({ ...link2, url: e.target.value })}
                />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex flex-col w-full">
                <p>Título do link</p>
                <TextInput
                  placeholder="Digite o título"
                  value={link3.title}
                  onChange={e => setLink3({ ...link3, title: e.target.value })}
                />
              </div>
              <div className="flex flex-col w-full">
                <p className="font-bold">Link</p>
                <TextInput
                  placeholder="Insira a URL"
                  value={link3.url}
                  onChange={e => setLink3({ ...link3, url: e.target.value })}
                />
              </div>
            </div>
          </div>
          <div className="flex gap-4 justify-end">
            <button
              type="button"
              className="font-bold text-white"
              onClick={handleCloseModal}
            >
              Voltar
            </button>
            <Button
              onClick={handleSaveCustomLinks}
              disabled={isSavingCustomLinks}
            >
              Salvar
            </Button>
          </div>
        </div>
      </Modal>
    </>
  )
}
