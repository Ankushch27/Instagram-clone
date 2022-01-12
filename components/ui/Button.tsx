import cn from 'classnames'
import { ButtonHTMLAttributes, FC } from 'react'
import { Spinner } from '.'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  loading?: boolean
  disabled?: boolean
}

const Button: FC<ButtonProps> = ({ children, className, loading, disabled, ...rest }) => {
  const buttonClasses = cn(
    'flex justify-center bg-black text-white px-3 py-2 transition-all hover:opacity-70',
    {
      'opacity-50 cursor-default hover:opacity-50': disabled,
    },
    className
  )

  return (
    <button className={buttonClasses} disabled={disabled || loading} {...rest}>
      {loading && <Spinner />}
      {children}
    </button>
  )
}

export default Button
