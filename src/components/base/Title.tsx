interface TitleProps {
  children: React.ReactNode
}

export function Title({ children }: TitleProps) {
  return (
    <h1 className="uppercase font-bold text-white font-akira flex flex-col xl:text-7xl lg:text-6xl md:text-5xl text-[32px] xl:leading-[64px]">
      {children}
    </h1>
  )
}
