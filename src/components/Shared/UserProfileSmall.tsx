import { Profile } from '@generated/types'
import { BadgeCheckIcon } from '@heroicons/react/solid'
import getAvatar from '@lib/getAvatar'
import isVerified from '@lib/isVerified'
import Link from 'next/link'
import React, { FC } from 'react'

import Slug from './Slug'

interface Props {
  profile: Profile
}

const UserProfileSmall: FC<Props> = ({ profile }) => {
  return (
    <div className="flex justify-between items-center">
      <Link href={`/u/${profile?.handle}`} prefetch={false}>
        <a href={`/u/${profile?.handle}`}>
          <div className="flex items-center space-x-2">
            <img
              src={getAvatar(profile)}
              loading="lazy"
              className="bg-gray-200 rounded-full border dark:border-gray-700/80"
              height={20}
              width={20}
              alt={profile?.handle}
            />
            <div className="flex gap-1 items-center max-w-sm truncate">
              <div className="text-sm">{profile?.name ?? profile?.handle}</div>
              {isVerified(profile?.id) && (
                <BadgeCheckIcon className="w-4 h-4 text-brand" />
              )}
            </div>
            <Slug className="text-xs" slug={profile?.handle} prefix="@" />
          </div>
        </a>
      </Link>
    </div>
  )
}

export default UserProfileSmall
