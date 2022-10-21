import Image, { StaticImageData } from 'next/image'
import defaultUser from 'public/images/members/default.png'

export interface OurMagiciansCardProps {
  name: string
  role: string
  image?: StaticImageData | string
}

export function OurMagiciansCard({ name, role, image }: OurMagiciansCardProps) {
  return (
    <div className="max-w-[345px]">
      <Image src={image ? image : defaultUser} alt={name} />
      <h2 className="font-akira text-[10px] md:text-[26px]">{name}</h2>
      <p className="uppercase text-[7px] md:text-base">{role}</p>
    </div>
  )
}
