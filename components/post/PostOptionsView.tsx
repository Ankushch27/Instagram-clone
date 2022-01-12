const options = [
  { name: 'Unfollow' },
  { name: 'Go to post' },
  { name: 'Copy link' },
  { name: 'Cancel' },
]

const PostOptionsView = () => {
  return (
    <div className="divide-y">
      {options.map((item) => (
        <button
          key={item.name}
          className={`flex justify-center w-full px-2 py-4 text-sm`}>
          {item.name}
        </button>
      ))}
    </div>
  )
}

export default PostOptionsView
