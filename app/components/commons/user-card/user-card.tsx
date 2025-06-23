import { EditSocialLinks } from '@/app/components/commons/user-card/edit-social-links'
import { Button } from '@/app/components/ui/button'
import { Plus } from 'lucide-react'
import { icons } from './social-links'

interface UserCardProps {
  profileId?: string
}

export function UserCard({ profileId }: UserCardProps) {
  return (
    <div className="w-[348px] flex flex-col gap-5 items-center p-5 border border-white border-opacity-10 bg-[#121212] rounded-3xl text-white">
      <div className="size-48">
        <img
          className="rounded-full object-coverd w-full h-fulld"
          src="http://www.github.com/douglasdl.png"
          alt=""
        />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <div className="flex items-center gap-2">
          <h3 className="text-3xl font-bold min-w-0 overflow-hidden">
            Douglas Dias Leal
          </h3>
        </div>
        <p className="opacity-40">Mobile / Web / Games Apps developer.</p>
      </div>
      <div className="flex flex-col gap-2 w-full">
        <span className="uppercase text-xs font-medium">Links</span>
        <div className="flex gap-3">
          {icons.map(({ component: Icon, name }) => (
            <button
              key={name}
              type="button"
              className="p-3 rounded-xl bg-[#1E1E1E] hover:bg-[#2E2E2E]"
            >
              <Icon />
            </button>
          ))}
          {profileId && <EditSocialLinks />}
        </div>
      </div>
      <div className="flex flex-col gap-3 w-full h-[172px]">
        <div className="w-full flex flex-col items-center gap-3">
          <Button className="w-full">Template SaaS - Compre Agora</Button>
          <Button variant="tertiary">
            <Plus />
          </Button>
        </div>
      </div>
    </div>
  )
}
