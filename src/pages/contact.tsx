import { ReactElement, useRef } from 'react'
import Head from 'next/head'
import { ContactForm } from '@/components/Contact/Form'
import { ContactHero } from '@/components/Contact/Hero'
import { AppLayout } from '@/layouts/AppLayout'
import { NextPageWithLayout } from '@/pages/_app'

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
      <ContactForm ref={contactRef} />
    </>
  )
}

Contact.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>
}

export default Contact
