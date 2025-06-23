'use client'

import createSocialLinks from '@/app/actions/create-social-links'
import { Plus } from 'lucide-react'
import { useParams, useRouter } from 'next/navigation'
import { startTransition, useState } from 'react'
import { Button } from '../../ui/button'
import { Modal } from '../../ui/modal'
import { TextInput } from '../../ui/text-input'
import { icons } from './social-links'

interface EditSocialLinksProps {
  title?: string
}

export function EditSocialLinks({ title }: EditSocialLinksProps) {
  const { profileId } = useParams()
  const router = useRouter()

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isSavingSocialLinks, setIsSavingSocialLinks] = useState(false)
  const [github, setGithub] = useState('')
  const [instagram, setInstagram] = useState('')
  const [linkedIn, setLinkedIn] = useState('')
  const [twitter, setTwitter] = useState('')

  const socialLinkStates: Record<
    string,
    { value: string; setter: (value: string) => void }
  > = {
    Github: { value: github, setter: setGithub },
    Instagram: { value: instagram, setter: setInstagram },
    Linkedin: { value: linkedIn, setter: setLinkedIn },
    Twitter: { value: twitter, setter: setTwitter },
  }

  function handleOpenModal() {
    setIsModalOpen(true)
  }

  function handleCloseModal() {
    setIsModalOpen(false)
  }

  async function handleAddSocialLinks() {
    if (!profileId) return

    await createSocialLinks({
      profileId: profileId as string,
      github,
      instagram,
      linkedin: linkedIn,
      twitter,
    })

    startTransition(() => {
      setIsModalOpen(false)
      setIsSavingSocialLinks(false)
      router.refresh()
    })
  }

  return (
    <>
      <button
        type="button"
        className="p-3 rounded-xl bg-[#1E1E1E] hover:bg-[#2E2E2E]"
        onClick={handleOpenModal}
      >
        <Plus />
      </button>
      <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
        <div className="bg-background-primary p-8 rounded-[20px] flex flex-col justify-between gap-10 w-[514px]">
          <p className="text-white font-bold text-xl">
            Adicionar redes sociais
          </p>
          <div className="flex flex-col gap-4">
            {icons.map(({ component: Icon, name }, index) => (
              <div key={index} className="flex items-center gap-2 w-full">
                <Icon />
                <TextInput
                  type="text"
                  placeholder={`Link ${name}`}
                  value={socialLinkStates[name]?.value ?? ''}
                  onChange={e => socialLinkStates[name]?.setter(e.target.value)}
                />
              </div>
            ))}
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
              onClick={handleAddSocialLinks}
              disabled={isSavingSocialLinks}
            >
              Salvar
            </Button>
          </div>
        </div>
      </Modal>
    </>
  )
}
