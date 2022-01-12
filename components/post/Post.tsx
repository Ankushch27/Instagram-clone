import CommentInput from './CommentInput'
import NumLikes from './NumLikes'
import PostActionBar from './PostActionBar'
import PostCaption from './PostCaption'
import PostComments from './PostComments'
import PostedAt from './PostedAt'
import PostHeader from './PostHeader'
import PostMedia from './PostMedia'

const Post = () => {
  return (
    <article className="max-w-xl mx-auto my-8 border">
      <PostHeader />
      <PostMedia />
      <PostActionBar />
      <NumLikes />
      <div className="px-4">
        <PostCaption />
        <PostComments />
      </div>
      <PostedAt />
      <CommentInput />
    </article>
  )
}

export default Post
