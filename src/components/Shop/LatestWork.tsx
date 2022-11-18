import Image from 'next/image'
import ENSlogo from 'public/images/logo/ENSlogo.svg'

export function LatestWork() {
  return (
    <div className="flex flex-col items-center justify-center md:flex-row md:justify-start">
      <h3 className="uppercase tracking-[4px] md:mr-5">
        Look at our latest work
      </h3>
      <a href="https://ensmerchshop.xyz/"
        target="_blank"
        rel="noreferrer">
        <button className="flex w-fit items-center border border-white bg-neutral-900 p-4 hover:bg-neutral-900/70 md:px-6">
          <div className="w-fit">
            <p className="font-akira text-xs tracking-[1px] md:text-sm">
              Swag shop for
            </p>
          </div>
          <div className="mx-3 w-fit">
            <svg
              width="25"
              height="16"
              viewBox="0 0 25 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.6195 8.08259C24.6095 7.82831 24.5048 7.53434 24.3304 7.34901L18.64 1.30287C18.2545 0.956311 17.515 0.813418 17.0841 1.21406C16.6596 1.60875 16.6723 2.37384 17.095 2.77L21.096 7.01563L1.50254 7.01563C0.91336 7.01563 0.435547 7.49343 0.435547 8.08263C0.435547 8.67183 0.913341 9.14962 1.50254 9.14962L21.096 9.14962L17.095 13.3952C16.7308 13.7599 16.6636 14.5523 17.0841 14.9512C17.5043 15.3503 18.2701 15.2228 18.64 14.8621L24.3304 8.816C24.5252 8.6091 24.6199 8.36623 24.6195 8.08242V8.08259Z"
                fill="#ffff"
              />
            </svg>
          </div>
          <div className="w-fit">
            <Image src={ENSlogo} alt="ENS" />
          </div>
        </button>
      </a>
    </div>
  )
}
