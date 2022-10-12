import type { AppProps } from 'next/app'
import '../styles/globals.css'
import { ReactElement, ReactNode, useEffect } from 'react'
import TagManager from 'react-gtm-module'
import { NextPage } from 'next'
import { ReferenceProvider } from '../hooks/useReference'

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page)
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-WLQQCZP' })
  }, [])
  return (
    <ReferenceProvider>
      {getLayout(<Component {...pageProps} />)}
    </ReferenceProvider>
  )
}

export default MyApp
