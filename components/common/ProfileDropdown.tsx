import { Link } from '@components/ui'
import { Menu } from '@headlessui/react'
import {
  BookmarkIcon,
  CogIcon,
  LogoutIcon,
  UserCircleIcon,
} from '@heroicons/react/outline'
import { FC } from 'react'
import { Avatar } from '.'

const ProfileDropdown: FC = () => {
  const menuItems = [
    { name: 'Profile', icon: UserCircleIcon, href: '/profile' },
    { name: 'Saved', icon: BookmarkIcon, href: '/profile/saved' },
    { name: 'Settings', icon: CogIcon, href: '#' },
  ]

  return (
    <Menu as="div" className="relative">
      <Menu.Button className="flex focus-visible:rounded-full">
        <Avatar />
      </Menu.Button>
      <Menu.Items
        className="absolute z-50 right-0 w-44 mt-3 p-1 bg-white rounded-md shadow-md
       ring-1 ring-black ring-opacity-5 focus:outline-none">
        {menuItems.map((item) => (
          <Menu.Item key={item.name}>
            {({ active }) => (
              <Link
                href={item.href}
                className={`${
                  active && 'bg-gray-100'
                } group flex gap-3 rounded-md items-center w-full px-2 py-2 text-sm`}>
                <item.icon className="h-5 w-5" />
                {item.name}
              </Link>
            )}
          </Menu.Item>
        ))}
        <Menu.Item>
          {({ active }) => (
            <button
              className={`${
                active && 'bg-gray-100'
              } group flex gap-3 rounded-md items-center w-full px-2 py-2 text-sm`}>
              <LogoutIcon className="h-5 w-5" />
              Log Out
            </button>
          )}
        </Menu.Item>
      </Menu.Items>
    </Menu>
  )
}

export default ProfileDropdown
