import CommentInput from './CommentInput'
import NumLikes from './NumLikes'
import PostActionBar from './PostActionBar'
import PostCaption from './PostCaption'
import PostComments from './PostComments'
import PostedAt from './PostedAt'
import PostHeader from './PostHeader'
import PostMedia from './PostMedia'

const PostSingleView = () => {
  return (
    <article className="flex mx-auto">
      <div className="grow">
        <PostMedia />
      </div>
      <div className="min-w-[400px]">
        <PostHeader />
        <div className="px-4">
          <PostCaption />
          <PostComments />
        </div>
        <PostActionBar />
        <NumLikes />
        <PostedAt />
        <CommentInput />
      </div>
    </article>
  )
}

export default PostSingleView
