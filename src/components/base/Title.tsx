interface TitleProps {
  children: React.ReactNode
}

export function Title({ children }: TitleProps) {
  return (
    <h1 className="uppercase font-bold text-white font-akira flex flex-col 2xl:text-8xl xl:text-7xl text-6xl 2xl:leading-[96px]">
      {children}
    </h1>
  )
}
