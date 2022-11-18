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
              'm-[1px] py-3 px-10 hover:bg-opacity-70 lg:py-7 lg:px-20',
              bgColors[bgColor]
            )}
          >
            <div className="text-center text-xs uppercase lg:text-2xl">
              <p>{text}</p>
            </div>
          </button>
        </Link>
      ) : (
        <button
          className={classnames(
            'm-[1px] py-3 px-10 hover:bg-opacity-70 lg:py-7 lg:px-20',
            bgColors[bgColor]
          )}
        >
          <div className="text-center text-xs uppercase lg:text-2xl">
            <p>{text}</p>
          </div>
        </button>
      )}
    </>
  )
}
