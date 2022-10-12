import React from 'react'
import type { ReactElement } from 'react'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'

interface IAppLayout {
  children: ReactElement
}

export function AppLayout({ children }: IAppLayout) {
  return (
    <div className="divide-y divide-neutral-800">
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}
