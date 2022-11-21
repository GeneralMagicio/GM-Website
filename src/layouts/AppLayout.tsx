import React, { useEffect, useState } from 'react'
import type { ReactElement } from 'react'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ButtonUp } from '@/components/base/ButtonUp'

interface IAppLayout {
  children: ReactElement
}

export function AppLayout({ children }: IAppLayout) {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  return (
    <div className="relative">
      <div className="divide-y divide-neutral-800">
        <Navbar />
        {children}
        <Footer />
      </div>
      <ButtonUp isVisible={isVisible} onClick={scrollToTop} />
    </div>
  )
}
