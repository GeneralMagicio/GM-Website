interface SubtitleProps {
  children: React.ReactNode
}

export function Subtitle({ children }: SubtitleProps) {
  return (
    <p className=" text-white flex flex-col text-2xl leading-8 pt-3 pb-8">
      {children}
    </p>
  )
}
