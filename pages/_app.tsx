import { AppProps } from 'next/app'
import Head from 'next/head'
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
      <Layout pageProps={pageProps}>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
