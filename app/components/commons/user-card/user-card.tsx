'use client'

import { EditSocialLinks } from '@/app/components/commons/user-card/edit-social-links'
import { Button } from '@/app/components/ui/button'
import { formatUrl } from '@/app/lib/utils'
import type { ProfileData } from '@/app/server/get-profile-data'
import Link from 'next/link'
import { AddCustomLink } from './add-custom-link'
import { icons } from './social-links'

interface UserCardProps {
  profileData?: ProfileData
}

export function UserCard({ profileData }: UserCardProps) {
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
          {icons.map(({ component: Icon, name }) => {
            const key = name.toLowerCase()
            const url =
              profileData?.socialMedias?.[
                key as keyof typeof profileData.socialMedias
              ]
            if (!url) return null
            return (
              <Link
                href={`http://${url}`}
                target="_blank"
                key={name}
                className="p-3 rounded-xl bg-[#1E1E1E] hover:bg-[#2E2E2E]"
              >
                <Icon />
              </Link>
            )
          })}
          <EditSocialLinks socialMedias={profileData?.socialMedias} />
        </div>
      </div>
      <div className="flex flex-col gap-3 w-full min-h-[172px]">
        <div className="w-full flex flex-col items-center gap-3">
          {profileData?.link1 && (
            <Link
              href={formatUrl(profileData.link1.url)}
              target="_blank"
              className="w-full"
            >
              <Button className="w-full">{profileData?.link1?.title}</Button>
            </Link>
          )}
          {profileData?.link2 && (
            <Link
              href={formatUrl(profileData.link2.url)}
              target="_blank"
              className="w-full"
            >
              <Button className="w-full">{profileData?.link2?.title}</Button>
            </Link>
          )}
          {profileData?.link3 && (
            <Link
              href={formatUrl(profileData.link3.url)}
              target="_blank"
              className="w-full"
            >
              <Button className="w-full">{profileData?.link3?.title}</Button>
            </Link>
          )}
          <AddCustomLink profileData={profileData} />
        </div>
      </div>
    </div>
  )
}
