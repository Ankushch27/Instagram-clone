import { Container, Link } from '@components/ui'
import { BookmarkIcon, PlayIcon, TagIcon, ViewGridIcon } from '@heroicons/react/outline'
import { FC } from 'react'

const ProfileNavbar: FC = () => {
  const links = [
    { name: 'Posts', href: '/profile', icon: ViewGridIcon },
    { name: 'Videos', href: '/profile/channel', icon: PlayIcon },
    { name: 'Saved', href: '/profile/saved', icon: BookmarkIcon },
    { name: 'Tagged', href: '/profile/tagged', icon: TagIcon },
  ]
  
  return (
    <header className="border-t">
      <Container className="flex justify-center">
        <nav>
          <ul className="flex gap-16">
            {links?.map((l, id) => (
              <li key={id}>
                <Link
                  href={l.href}
                  className="flex items-center gap-2 text-gray-400 text-sm font-medium py-4"
                  activeClassName="border-t border-gray-800 text-gray-800 -mt-px">
                  <l.icon className="h-4 w-4" />
                  <span className="uppercase">{l.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default ProfileNavbar
