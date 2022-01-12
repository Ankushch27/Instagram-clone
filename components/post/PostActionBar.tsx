import { IconButton } from '@components/ui'
import { useUI } from '@components/ui/uiContext'
import {
  BookmarkIcon,
  ChatIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from '@heroicons/react/outline'

const PostActionBar = () => {
  const { dispatch } = useUI()

  return (
    <div className="flex px-4 py-1">
      <IconButton className="-ml-2">
        <HeartIcon className="h-7 w-7" />
      </IconButton>
      <IconButton
        onClick={() => {
          dispatch({ type: 'SET_MODAL_VIEW', view: 'POST_VIEW' })
          dispatch({ type: 'OPEN_MODAL' })
        }}>
        <ChatIcon className="h-7 w-7" />
      </IconButton>
      <IconButton>
        <PaperAirplaneIcon className="h-7 w-7" />
      </IconButton>
      <IconButton className="ml-auto -mr-2">
        <BookmarkIcon className="h-7 w-7" />
      </IconButton>
    </div>
  )
}

export default PostActionBar
