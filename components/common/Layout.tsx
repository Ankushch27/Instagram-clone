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
import { Navbar } from '.'

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

  return (
    <div>
      <Navbar links={navLinks} />
      <main className="">{children}</main>
      <Modal>
        {modalView === 'POST_VIEW' && <PostSingleView />}
        {modalView === 'POST_OPTIONS_VIEW' && <PostOptionsView />}
      </Modal>
    </div>
  )
}

export default Layout
