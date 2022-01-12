import { IconButton } from '@components/ui'
import { EmojiHappyIcon } from '@heroicons/react/outline'

const CommentInput = () => {
  return (
    <div className="flex items-center px-4 py-1 border-t">
      <IconButton>
        <EmojiHappyIcon className="h-7 w-7 -ml-2" />
      </IconButton>
      <input
        type="text"
        placeholder="Add a comment..."
        className="w-full pl-2 border-none focus:ring-0"
      />
      <button className="text-sm font-bold text-blue-500 disabled:text-blue-200 disabled:cursor-default" disabled>
        Post
      </button>
    </div>
  )
}

export default CommentInput
