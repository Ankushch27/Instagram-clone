import cn from 'classnames'
import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'

interface LinkProps extends NextLinkProps {
  activeClassName?: string
  className?: string
}

const Link: FC<LinkProps> = ({
  href,
  children,
  activeClassName = '',
  className,
  ...props
}) => {
  const { pathname } = useRouter()
  const isActive = pathname === href && activeClassName
  const linkClasses = cn(className, { [activeClassName]: isActive })

  return (
    <NextLink href={href}>
      <a className={linkClasses} {...props}>
        {children}
      </a>
    </NextLink>
  )
}

export default Link
