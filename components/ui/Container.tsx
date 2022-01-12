import cn from 'classnames'
import { FC } from 'react'

interface ContainerProps {
  children?: any
  className?: string
  clean?: boolean
}

const Container: FC<ContainerProps> = ({ children, className, clean }) => {
  const containerClasses = cn(className, { 'mx-auto max-w-5xl px-6': !clean })

  return <div className={containerClasses}>{children}</div>
}

export default Container
