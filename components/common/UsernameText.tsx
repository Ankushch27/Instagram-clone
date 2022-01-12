import { Link } from '@components/ui'
import { FC } from 'react'

interface Username {
  username: string
}

const UsernameText: FC<Username> = ({ username }) => {
  return (
    <Link href="#" className="text-sm font-semibold hover:underline">
      {username}
    </Link>
  )
}

export default UsernameText
