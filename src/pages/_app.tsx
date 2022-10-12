import type { AppProps } from 'next/app'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import '../styles/globals.css'
import { useEffect } from 'react';
import TagManager from 'react-gtm-module';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-WLQQCZP' });
}, []);
  return (
    <div className="divide-y divide-neutral-800">
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default MyApp
