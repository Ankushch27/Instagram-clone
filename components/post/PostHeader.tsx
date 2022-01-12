import { Avatar, UsernameText } from '@components/common'
import { IconButton, Link } from '@components/ui'
import { useUI } from '@components/ui/uiContext'
import { DotsHorizontalIcon } from '@heroicons/react/outline'

const PostHeader = () => {
  const { dispatch } = useUI()

  return (
    <header className="flex justify-between pl-4 pr-2 py-3">
      <div className="flex items-center gap-3">
        <Link href="#" className="flex">
          <Avatar height={32} width={32} />
        </Link>
        <div className="">
          <UsernameText username="ankush" />
        </div>
      </div>
      <IconButton
        onClick={() => {
          dispatch({ type: 'SET_MODAL_VIEW', view: 'POST_OPTIONS_VIEW' })
          dispatch({ type: 'OPEN_MODAL' })
        }}>
        <DotsHorizontalIcon className="h-6 w-6" />
      </IconButton>
    </header>
  )
}

export default PostHeader
