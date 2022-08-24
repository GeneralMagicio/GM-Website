import type { AppProps } from 'next/app'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="divide-y divide-neutral-800">
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default MyApp
