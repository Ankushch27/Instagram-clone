import Image from "next/image"
import dummy from 'public/dummy.jpg'

const PostMedia = () => {
  return (
    <div>
      <Image src={dummy} layout="responsive" priority />
    </div>
  )
}

export default PostMedia
