import Head from 'next/head'
import { useRef } from 'react'
import { ContactForm } from '../components/Contact/Form'
import { ContactHero } from '../components/Contact/Hero'

export default function Contact() {
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
