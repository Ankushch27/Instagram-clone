import { AppProps } from 'next/app'
import { FC } from 'react'
import 'styles/globals.css'

const NoLayout: FC = ({ children }) => <>{children}</>

const MyApp = ({ Component, pageProps }: AppProps) => {
  const Layout = (Component as any).Layout || NoLayout

  return (
    <Layout pageProps={pageProps}>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
