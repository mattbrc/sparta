import { useQuery } from '@apollo/client'
import UserProfileSmall from '@components/Shared/UserProfileSmall'
import { Card } from '@components/UI/Card'
import consoleLog from '@lib/consoleLog'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import Link from 'next/link'
import React, { FC } from 'react'
import { ZERO_ADDRESS } from 'src/constants'
import { usePersistStore } from 'src/store'

import { POST_QUERY } from '.'
import HiddenPost from './HiddenPost'
import PostBody from './PostBody'

dayjs.extend(relativeTime)

interface Props {
  quotePubId: string
}

const QuotePost: FC<Props> = ({ quotePubId }) => {
  const { currentUser } = usePersistStore()
  const { data, loading, error } = useQuery(POST_QUERY, {
    variables: {
      request: { publicationId: quotePubId },
      followRequest: {
        followInfos: {
          followerAddress: currentUser?.ownedBy ?? ZERO_ADDRESS,
          profileId: quotePubId?.toString().split('-')[0]
        }
      },
      reactionRequest: currentUser ? { profileId: currentUser?.id } : null
    },
    skip: !quotePubId,
    onCompleted() {
      consoleLog(
        'Query',
        '#8b5cf6',
        `Fetched quote publication details Publication:${quotePubId}`
      )
    }
  })

  console.log(data)

  const post = data?.publication
  const postType = post?.metadata?.attributes[0]?.value

  return (
    <Link href={`/posts/${post?.id ?? post?.pubId}`} prefetch={false}>
      <a href={`/posts/${post?.id ?? post?.pubId}`}>
        <Card className="mt-5 p-5">
          <div className="flex items-center space-x-2 pb-2">
            <UserProfileSmall
              profile={
                postType === 'community' && !!post?.collectedBy?.defaultProfile
                  ? post?.collectedBy?.defaultProfile
                  : post?.__typename === 'Mirror'
                  ? post?.mirrorOf?.profile
                  : post?.profile
              }
            />
            <span>·</span>
            <span className="text-sm text-gray-500">
              {dayjs(new Date(post?.createdAt)).fromNow()}
            </span>
          </div>
          <div>
            {post?.hidden ? (
              <HiddenPost type={post?.__typename} />
            ) : (
              <PostBody post={post} />
            )}
          </div>
        </Card>
      </a>
    </Link>
  )
}

export default QuotePost
