import { Container, IconButton } from '@components/ui'
import { CogIcon } from '@heroicons/react/outline'
import { CheckIcon, UserIcon } from '@heroicons/react/solid'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { FC } from 'react'
import useSWR, { Fetcher } from 'swr'
import { Avatar, Layout, Loading, ProfileNavbar } from '.'

interface User {
  email: string
  fullName: string
  _id: string
  username: string
  followers: Array<string | null>
  following: Array<string | null>
  posts: Array<object | null>
}

const ProfileLayout: FC = ({ children }) => {
  const { data: session } = useSession()
  // console.log(session)
  const { asPath } = useRouter()
  const shouldfetch = asPath.includes('[profile]') ? false : true

  const getUser: Fetcher<User, string> = async (url) => {
    const { data } = await axios.get(url)
    return data
  }

  const {
    data: user,
    error,
    mutate,
  } = useSWR(shouldfetch ? `/api/users/${asPath}` : null, getUser)
  // console.log('User/error in swr', user, error)
  if (error) return <pre>An error occurred {JSON.stringify(error, null, 2)}</pre>
  if (!user) return <Loading />

  const { username, fullName, followers, following, posts } = user
  // console.log('following', data.following.length)

  const isLoggedInUserProfile = session && session.user.username === username
  const isFollowing = session && followers.includes(session.user.username)
  const isFollower = session && following.includes(session.user.username)

  const followUser = async () => {
    await axios.put('/api/users/follow', {
      currentUsername: session?.user.username,
      usernameToFollow: username,
    })
    mutate()
  }

  const unfollowUser = async () => {
    await axios.put('/api/users/unfollow', {
      currentUsername: session?.user.username,
      usernameToUnfollow: username,
    })
    mutate()
  }

  return (
    <Layout>
      <div className="">
        <div className="flex gap-24 px-20 py-8">
          <Avatar height={150} width={150} />
          <div className="flex flex-col gap-4">
            <div className="flex gap-4 items-center">
              <span className="text-3xl font-light">{username}</span>
              {isLoggedInUserProfile && (
                <>
                  <button className="px-2 py-1 border rounded text-sm font-semibold tracking-wide">
                    Edit Profile
                  </button>
                  <IconButton>
                    <CogIcon className="h-7 w-7" />
                  </IconButton>
                </>
              )}
              {!isLoggedInUserProfile && !isFollowing && (
                <button
                  className="px-2 py-1 bg-blue-500 rounded text-sm text-white font-semibold tracking-wide"
                  onClick={() => followUser()}>
                  {isFollower ? 'Follow Back' : 'Follow'}
                </button>
              )}
              {isFollowing && (
                <IconButton
                  className="!p-1 border rounded items-center"
                  onClick={() => unfollowUser()}>
                  <UserIcon className="h-5 w-5" />
                  <CheckIcon className="h-4 w-4" />
                </IconButton>
              )}
            </div>
            <div className="flex gap-8">
              <span>{posts.length} posts</span>
              <span>{followers.length} followers</span>
              <span>{following.length} following</span>
            </div>
            <div className="font-semibold">{fullName}</div>
          </div>
        </div>
        <ProfileNavbar />
        <Container>{children}</Container>
      </div>
    </Layout>
  )
}

export default ProfileLayout
