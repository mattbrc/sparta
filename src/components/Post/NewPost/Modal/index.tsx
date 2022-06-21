import { Modal } from '@components/UI/Modal'
import { PencilAltIcon } from '@heroicons/react/outline'
import { FC } from 'react'
import { useAppStore } from 'src/store'

import NewPost from '..'

const NewPostModal: FC = () => {
  const { showNewPostModal, setShowNewPostModal } = useAppStore()

  return (
    <>
      <button
        type="button"
        className="flex items-start"
        onClick={() => {
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
        <NewPost hideCard />
      </Modal>
    </>
  )
}

export default NewPostModal
