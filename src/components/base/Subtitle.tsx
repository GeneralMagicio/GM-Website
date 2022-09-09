import classnames from 'classnames'

interface SubtitleProps {
  children: React.ReactNode
  paddingBottom: boolean
  paddingTop: boolean
}

export function Subtitle({
  children,
  paddingBottom,
  paddingTop,
}: SubtitleProps) {
  return (
    <p
      className={classnames(
        'text-white flex flex-col xl:text-2xl md:leading-8',
        paddingBottom === true ? 'pb-8' : 'pb-0',
        paddingTop === true ? 'pt-3' : 'pt-0'
      )}
    >
      {children}
    </p>
  )
}
