import { FC } from 'react'

const Searchbar: FC = () => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        className="py-1 rounded-[3px] border-gray-200 focus:ring-0 focus:border-gray-200"
      />
    </div>
  )
}

export default Searchbar
