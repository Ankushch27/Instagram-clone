import { Container, Link, Logo } from '@components/ui'
import { useUI } from '@components/ui/uiContext'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
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
  const { data: session } = useSession()
  const router = useRouter()
  const { dispatch } = useUI()
  return (
    <header className="border-b border-gray-200">
      <Container className="flex justify-between items-center py-2">
        <div>
          <Logo />
        </div>
        <Searchbar />
        {session ? (
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
        ) : (
          <div className="flex gap-3">
            <button
              className="px-2 py-1 bg-blue-500 rounded text-sm text-white font-semibold tracking-wide"
              onClick={() => {
                dispatch({ type: 'SET_AUTH_VIEW', view: 'LOGIN_VIEW' })
                router.push('/')
              }}>
              Log In
            </button>
            <button
              className="px-2 py-1 rounded text-sm text-blue-500 font-semibold tracking-wide"
              onClick={() => {
                dispatch({ type: 'SET_AUTH_VIEW', view: 'SIGNUP_VIEW' })
                router.push('/')
              }}>
              Sign Up
            </button>
          </div>
        )}
      </Container>
    </header>
  )
}

export default Navbar
