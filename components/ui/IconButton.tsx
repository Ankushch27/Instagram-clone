import cn from 'classnames'
import { ButtonHTMLAttributes, FC } from 'react'

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
}

const IconButton: FC<IconButtonProps> = ({ children, className, ...rest }) => {
  return (
    <button className={cn('flex p-2 hover:opacity-60', className)} {...rest}>
      {children}
    </button>
  )
}

export default IconButton
