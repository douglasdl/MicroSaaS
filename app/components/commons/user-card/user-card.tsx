import { EditSocialLinks } from '@/app/components/commons/user-card/edit-social-links'
import { Button } from '@/app/components/ui/button'
import { getDownloadURLFromPath } from '@/app/lib/firebase'
import { formatUrl } from '@/app/lib/utils'
import type { ProfileData } from '@/app/server/get-profile-data'
import Link from 'next/link'
import { AddCustomLink } from './add-custom-link'
import { EditUserCard } from './edit-user-card'
import { icons } from './social-links'

interface UserCardProps {
  profileData?: ProfileData
  isOwner?: boolean
}

export async function UserCard({
  profileData,
  isOwner = false,
}: UserCardProps) {
  return (
    <div className="w-64 md:w-[348px] flex flex-col gap-2 md:gap-5 items-center p-2 md:p-5 border border-white border-opacity-10 bg-[#121212] rounded-3xl text-white">
      <div className="size-24 md:size-48">
        <img
          className="rounded-full object-coverd w-full h-fulld"
          src={
            (await getDownloadURLFromPath(profileData?.imagePath)) ||
            'http://github.com/douglasdl.png'
          }
          alt={profileData?.name || 'Douglas Dias Leal'}
        />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <div className="flex items-center gap-2">
          <h3 className="text-xl md:text-3xl font-bold min-w-0 overflow-hidden">
            {profileData?.name || 'Douglas Dias Leal'}
          </h3>
          {isOwner && <EditUserCard profileData={profileData} />}
        </div>
        <p className="text-xs md:text-base opacity-40">
          {profileData?.description || 'Mobile / Web / Games Apps developer.'}
        </p>
      </div>
      <div className="flex flex-col gap-2 w-full">
        <span className="uppercase text-xs font-medium">Links</span>
        <div className="flex gap-1 md:gap-3">
          {!profileData
            ? icons.map(({ component: Icon, name }) => (
                <div
                  key={name}
                  className="p-1 md:p-3 size-12 flex items-center justify-center rounded-xl bg-[#1E1E1E] hover:bg-[#2E2E2E]"
                >
                  <Icon />
                </div>
              ))
            : icons.map(({ component: Icon, name }) => {
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
                    className="p-1 md:p-3 rounded-xl bg-[#1E1E1E] hover:bg-[#2E2E2E]"
                  >
                    <Icon />
                  </Link>
                )
              })}
          {isOwner && (
            <EditSocialLinks
              socialMedias={profileData?.socialMedias}
              disabled={!profileData}
            />
          )}
        </div>
      </div>
      <div className="flex flex-col gap-3 w-full min-h-[172px]">
        <div className="w-full flex flex-col items-center gap-3">
          {!profileData && <Button className="w-full">Portfolio</Button>}
          {profileData?.link1 && profileData?.link1.title !== '' && (
            <Link
              href={formatUrl(profileData.link1.url)}
              target="_blank"
              className="w-full"
            >
              <Button className="w-full">{profileData?.link1?.title}</Button>
            </Link>
          )}
          {profileData?.link2 && profileData?.link2.title !== '' && (
            <Link
              href={formatUrl(profileData.link2.url)}
              target="_blank"
              className="w-full"
            >
              <Button className="w-full">{profileData?.link2?.title}</Button>
            </Link>
          )}
          {profileData?.link3 && profileData?.link3.title !== '' && (
            <Link
              href={formatUrl(profileData.link3.url)}
              target="_blank"
              className="w-full"
            >
              <Button className="w-full">{profileData?.link3?.title}</Button>
            </Link>
          )}
          {isOwner && (
            <AddCustomLink profileData={profileData} disabled={!profileData} />
          )}
        </div>
      </div>
    </div>
  )
}
