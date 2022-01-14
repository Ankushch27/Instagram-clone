import { PostOptionsView, PostSingleView } from '@components/post'
import { Modal } from '@components/ui'
import { useUI } from '@components/ui/uiContext'
import {
  HeartIcon,
  HomeIcon,
  InboxIcon,
  PaperAirplaneIcon,
} from '@heroicons/react/outline'
import { FC } from 'react'
import { Navbar, UnfollowUserView } from '.'

const navLinks = [
  { href: '/', icon: HomeIcon },
  { href: '#', icon: InboxIcon },
  { href: '#', icon: PaperAirplaneIcon },
  { href: '#', icon: HeartIcon },
]

const Layout: FC = ({ children }) => {
  const {
    state: { modalView },
  } = useUI()

  const getModalView = () => {
    switch (modalView) {
      case 'POST_VIEW':
        return <PostSingleView />
      case 'POST_OPTIONS_VIEW':
        return <PostOptionsView />
      case 'UNFOLLOW_USER_VIEW':
        return <UnfollowUserView />
    }
  }

  return (
    <div>
      <Navbar links={navLinks} />
      <main className="">{children}</main>
      <Modal>{getModalView()}</Modal>
    </div>
  )
}

export default Layout
