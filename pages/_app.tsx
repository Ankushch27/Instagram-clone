import { UIProvider } from '@components/ui/uiContext'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { SessionProvider } from 'next-auth/react'
import { FC } from 'react'
import 'styles/globals.css'

const NoLayout: FC = ({ children }) => <>{children}</>

const MyApp = ({ Component, pageProps }: AppProps) => {
  const Layout = (Component as any).Layout || NoLayout

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Grand+Hotel&display=swap"
        />
      </Head>
      <SessionProvider session={pageProps.session}>
        <UIProvider>
          <Layout pageProps={pageProps}>
            <Component {...pageProps} />
          </Layout>
        </UIProvider>
      </SessionProvider>
    </>
  )
}

export default MyApp
