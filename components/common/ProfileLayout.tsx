import { Container, IconButton } from '@components/ui'
import { CogIcon } from '@heroicons/react/outline'
import { FC } from 'react'
import { Avatar, Layout } from '.'
import ProfileNavbar from './ProfileNavbar'

const ProfileLayout: FC = ({ children }) => {
  return (
    <Layout>
      <div className="">
        <div className="flex gap-24 px-20 py-8">
          <Avatar height={150} width={150} />
          <div className="flex flex-col gap-4">
            <div className="flex gap-4 items-center">
              <span className="text-3xl font-light">ankush</span>
              <button className="px-2 py-1 border rounded-md text-sm font-semibold tracking-wide">
                Edit Profile
              </button>
              <IconButton>
                <CogIcon className="h-7 w-7" />
              </IconButton>
            </div>
            <div className="flex gap-8">
              <span>0 posts</span>
              <span>0 followers</span>
              <span>0 following</span>
            </div>
            <div className="font-semibold">Ankush Chauhan</div>
          </div>
        </div>
        <ProfileNavbar />
        <Container>{children}</Container>
      </div>
    </Layout>
  )
}

export default ProfileLayout
