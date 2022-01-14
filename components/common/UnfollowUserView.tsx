import { useUI } from '@components/ui/uiContext'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import { FC } from 'react'
import { Avatar } from '.'

const UnfollowUserView: FC = () => {
  const {
    dispatch,
    state: { usernameToUnfollow, mutate },
  } = useUI()
  const { data: session } = useSession()

  const unfollowUser = async () => {
    await axios.put('/api/users/unfollow', {
      currentUsername: session?.user.username,
      usernameToUnfollow,
    })
    mutate && mutate()
    dispatch({ type: 'CLOSE_MODAL' })
  }

  return (
    <div className="divide-y">
      <div className="flex flex-col justify-center items-center gap-5 p-5">
        <Avatar height={100} width={100} />
        <div className="">{`Unfollow ${usernameToUnfollow} ?`}</div>
      </div>
      <button
        className="flex justify-center w-full p-4 text-sm font-bold text-red-500 hover:bg-neutral-100"
        onClick={() => unfollowUser()}>
        Unfollow
      </button>
      <button
        className="flex justify-center w-full p-4 text-sm hover:bg-neutral-100"
        onClick={() => dispatch({ type: 'CLOSE_MODAL' })}>
        Cancel
      </button>
    </div>
  )
}

export default UnfollowUserView
