import Image from 'next/image'
import avatar from 'public/avatar.jpg'
import { FC } from 'react'

interface AvatarProps {
  src?: string
  height?: number
  width?: number
}

const Avatar: FC<AvatarProps> = ({ src, height = '28', width = '28' }) => {
  return (
    <Image
      src={src || avatar}
      className="rounded-full"
      height={height}
      width={width}
      objectFit="contain"
    />
  )
}

export default Avatar
