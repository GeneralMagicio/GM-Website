import { ReactElement, ReactNode, useEffect } from 'react'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import TagManager from 'react-gtm-module'
import '@/styles/globals.css'
import { ReferenceProvider } from '@/hooks/useReference'
import { SubmitProvider } from '@/hooks/useSubmit'

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
      <SubmitProvider>{getLayout(<Component {...pageProps} />)}</SubmitProvider>
    </ReferenceProvider>
  )
}

export default MyApp
