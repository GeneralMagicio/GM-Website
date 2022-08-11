import Image from 'next/image'
import gmLogo from '../../public/images/gmLogo.svg'

export function Navbar() {
  return (
    <div className="flex">
      <div>
        <Image src={gmLogo} alt="General Magic" />
      </div>
    </div>
  )
}
