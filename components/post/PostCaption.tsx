import { UsernameText } from "@components/common"

const PostCaption = () => {
  return (
    <div className="flex gap-2 items-center mb-1">
      <UsernameText username="ankush" />
      <div className="text-sm">caption</div>
    </div>
  )
}

export default PostCaption
