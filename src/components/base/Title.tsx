interface TitleProps {
  children: React.ReactNode
}

export function Title({ children }: TitleProps) {
  return (
    <h1 className="flex w-fit flex-col font-akira text-[32px] font-bold uppercase text-white md:text-5xl lg:text-6xl xl:text-7xl xl:leading-[64px]">
      {children}
    </h1>
  )
}
