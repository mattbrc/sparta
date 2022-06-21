import SinglePost from '@components/Post/SinglePost'
import { Card } from '@components/UI/Card'
import { Modal } from '@components/UI/Modal'
import { PencilAltIcon } from '@heroicons/react/outline'
import { FC } from 'react'
import { useAppStore } from 'src/store'

import NewPost from '..'

const NewPostModal: FC = () => {
  const { showNewPostModal, setShowNewPostModal, setQuotedPub, quotedPub } =
    useAppStore()

  return (
    <>
      <button
        type="button"
        className="flex items-start"
        onClick={() => {
          setQuotedPub(null)
          setShowNewPostModal(!showNewPostModal)
        }}
      >
        <PencilAltIcon className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>
      <Modal
        title="New Post"
        icon={<PencilAltIcon className="w-5 h-5 text-brand" />}
        size="md"
        show={showNewPostModal}
        onClose={() => setShowNewPostModal(!showNewPostModal)}
      >
        {quotedPub ? (
          <Card className="mx-5 mt-5">
            <SinglePost post={quotedPub} showType={false} showActions={false} />
          </Card>
        ) : null}
        <NewPost hideCard />
      </Modal>
    </>
  )
}

export default NewPostModal
