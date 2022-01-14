import { Container, Link } from '@components/ui'
import { BookmarkIcon, PlayIcon, TagIcon, ViewGridIcon } from '@heroicons/react/outline'
import { useSession } from 'next-auth/react'
import { FC } from 'react'

const ProfileNavbar: FC = () => {
  const { data: session } = useSession()
  const username = session?.user.username

  const links = [
    { name: 'Posts', href: `/${username}`, icon: ViewGridIcon },
    { name: 'Videos', href: `/${username}/channel`, icon: PlayIcon },
    { name: 'Saved', href: `/${username}/saved`, icon: BookmarkIcon },
    { name: 'Tagged', href: `/${username}/tagged`, icon: TagIcon },
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
