import { ReactElement } from 'react'

interface ILayoutHero {
  children: ReactElement
}

export function LayoutHero({ children }: ILayoutHero) {
  return (
    <>
      <div className="relative h-[calc(100vh_-_108px)] min-h-[552px]">
        {children}
      </div>
    </>
  )
}
