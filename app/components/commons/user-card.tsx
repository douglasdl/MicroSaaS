import {
  Facebook,
  Github,
  Icon,
  Instagram,
  Linkedin,
  Plus,
  Twitter,
} from 'lucide-react'
import { Button } from '../ui/button'

export function UserCard() {
  const icons = [Github, Instagram, Linkedin, Twitter, Plus]
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
          {icons.map((Icon, index) => (
            <button
              key={index}
              type="button"
              className="p-3 rounded-xl bg-[#1E1E1E] hover:bg-[#2E2E2E]"
            >
              <Icon />
            </button>
          ))}
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
