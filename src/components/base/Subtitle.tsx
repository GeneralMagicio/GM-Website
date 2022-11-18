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
        'flex w-fit flex-col text-sm text-white sm:text-base md:leading-8 xl:text-2xl',
        paddingBottom === true ? 'pb-8' : 'pb-0',
        paddingTop === true ? 'pt-3' : 'pt-0'
      )}
    >
      {children}
    </p>
  )
}
