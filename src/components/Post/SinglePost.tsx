import UserProfile from '@components/Shared/UserProfile'
import { LensterPost } from '@generated/lenstertypes'
import getPublicationAttribute from '@lib/getPublicationAttribute'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import Link from 'next/link'
import React, { FC } from 'react'

import PostActions from './Actions'
import HiddenPost from './HiddenPost'
import PostBody from './PostBody'
import PostType from './Type'

dayjs.extend(relativeTime)

interface Props {
  post: LensterPost
  showType?: boolean
  showThread?: boolean
  showActions?: boolean
}

const SinglePost: FC<Props> = ({
  post,
  showType = true,
  showThread = false,
  showActions = true
}) => {
  const postType = post?.metadata?.attributes[0]?.value
  const quotedPub = getPublicationAttribute(
    post?.metadata?.attributes,
    'quotePubId'
  )

  return (
    <div className="p-5">
      {quotedPub}
      {showType && <PostType post={post} showThread={showThread} />}
      <div>
        <div className="flex justify-between pb-4 space-x-1.5">
          <UserProfile
            profile={
              postType === 'community' && !!post?.collectedBy?.defaultProfile
                ? post?.collectedBy?.defaultProfile
                : post?.__typename === 'Mirror'
                ? post?.mirrorOf?.profile
                : post?.profile
            }
          />
          <Link href={`/posts/${post?.id ?? post?.pubId}`} prefetch={false}>
            <a
              href={`/posts/${post?.id ?? post?.pubId}`}
              className="text-sm text-gray-500"
            >
              {dayjs(new Date(post?.createdAt)).fromNow()}
            </a>
          </Link>
        </div>
        <div className="ml-[53px]">
          {post?.hidden ? (
            <HiddenPost type={post?.__typename} />
          ) : (
            <>
              <PostBody post={post} />
              {showActions && <PostActions post={post} />}
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default SinglePost
