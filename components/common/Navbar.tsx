import { Container, Link, Logo } from '@components/ui'
import { FC } from 'react'
import { ProfileDropdown, Searchbar } from '.'

interface Link {
  href: string
  icon: any
}
interface NavbarProps {
  links?: Link[]
}

const Navbar: FC<NavbarProps> = ({ links }) => {
  return (
    <header className="border-b border-gray-200">
      <Container className="flex justify-between items-center py-2">
        <div>
          <Logo />
        </div>
        <Searchbar />
        <nav>
          <ul className="flex gap-6">
            {links?.map((l, id) => (
              <li key={id}>
                <Link href={l.href} activeClassName="text-red-500">
                  <l.icon className="h-7 w-7" />
                </Link>
              </li>
            ))}
            <ProfileDropdown />
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Navbar
