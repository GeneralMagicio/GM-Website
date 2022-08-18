import type { AppProps } from 'next/app'
import { Navbar } from '../components/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="divide-y divide-neutral-800">
      {/* <Navbar /> */}
      <Navbar />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
