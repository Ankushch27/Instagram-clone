import { UsernameText } from '@components/common'
import { IconButton } from '@components/ui'
import { HeartIcon } from '@heroicons/react/outline'

const Comment = () => {
  return (
    <div className="flex items-center gap-2 mb-1">
      <UsernameText username="abcxyz" />
      <div className="text-sm">comment</div>
      <IconButton className="ml-auto p-0">
        <HeartIcon className="h-4 w-4" />
      </IconButton>
    </div>
  )
}

export default Comment
