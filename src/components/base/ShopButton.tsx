import classnames from 'classnames'
import Link from 'next/link'

interface ButtonProps {
  bgColor: string
  text: string
  url?: string
}

export function ShopButton({ bgColor, text, url }: ButtonProps) {
  const bgColors: { [key: string]: string } = {
    gray: 'bg-neutral-700',
    purple: 'bg-magicPurple-300',
  }

  return (
    <>
      {url ? (
        <Link href={url}>
          <button
            className={classnames(
              'py-7 px-20 hover:bg-opacity-70 m-[1px]',
              bgColors[bgColor]
            )}
          >
            <div className="uppercase sm:text-xl md:text-2xl text-center">
              <p>{text}</p>
            </div>
          </button>
        </Link>
      ) : (
        <button
          className={classnames(
            'py-7 px-20 hover:bg-opacity-70 m-[1px]',
            bgColors[bgColor]
          )}
        >
          <div className="uppercase sm:text-xl md:text-2xl text-center">
            <p>{text}</p>
          </div>
        </button>
      )}
    </>
  )
}
