import { Build } from '@/components/Home/Build'
import { Magic } from '@/components/Home/OurMagic'
import { OurMagicians } from '@/components/OurMagicians'
import { HomeWhatWeDo } from '@/components/Home/WeDo'

export function HomeBg() {
  return (
    <>
      <div className="relative bg-pinkHomeBg bg-cover bg-center bg-no-repeat bg-pinkPotion-300 px-10 sm:px-16 md:px-20 lg:px-44 xl:px-64 py-10 md:py-28">
        <Build />
      </div>
      <div className="bg-homeBg bg-cover bg-center bg-no-repeat bg-blend-darken bg-neutral-900 md:pb-24 pb-16">
        <Magic />
        <HomeWhatWeDo />
        <OurMagicians page="Home" />
      </div>
    </>
  )
}
