import Head from 'next/head'
import { ReactElement, useRef } from 'react'
import { ContactForm } from '../components/Contact/Form'
import { ContactHero } from '../components/Contact/Hero'
import { AppLayout } from '../layouts/AppLayout'
import { NextPageWithLayout } from './_app'

const Contact: NextPageWithLayout = () => {
  const contactRef = useRef<HTMLDivElement>(null)

  function handleScroll() {
    if (null !== contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <>
      <Head>
        <title>Contact Us | General Magic</title>
      </Head>
      <ContactHero handleScroll={handleScroll} />
      <div ref={contactRef}>
        <ContactForm />
      </div>
    </>
  )
}

Contact.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>
}

export default Contact
