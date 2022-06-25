import { GridItemEight, GridLayout } from '@components/GridLayout'
import Footer from '@components/Shared/Footer'
import PostsShimmer from '@components/Shared/Shimmer/PostsShimmer'
import SEO from '@components/utils/SEO'
import { NextPage } from 'next'
import dynamic from 'next/dynamic'
import React from 'react'
import { usePersistStore } from 'src/store'

import Hero from './Hero'

const HomeFeed = dynamic(() => import('./Feed'), {
  loading: () => <PostsShimmer />
})
const ExploreFeed = dynamic(() => import('@components/Explore/Feed'), {
  loading: () => <PostsShimmer />
})

const Home: NextPage = () => {
  const { currentUser } = usePersistStore()

  return (
    <>
      <SEO />
      {!currentUser && <Hero />}
      <GridLayout>
        <GridItemEight className="space-y-5">
          {currentUser ? <HomeFeed /> : <ExploreFeed />}
          <Footer />
        </GridItemEight>
      </GridLayout>
    </>
  )
}

export default Home
