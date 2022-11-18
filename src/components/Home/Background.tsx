import { Build } from '@/components/Home/Build'
import { Magic } from '@/components/Home/OurMagic'
import { OurMagicians } from '@/components/OurMagicians'
import { HomeWhatWeDo } from '@/components/Home/WeDo'

export function HomeBg() {
  return (
    <>
      <div className="relative bg-pinkPotion-300 bg-pinkHomeBg bg-cover bg-center bg-no-repeat p-10 sm:px-16 md:px-20 md:py-28 lg:px-44 xl:px-64">
        <Build />
      </div>
      <div className="bg-neutral-900 bg-homeBg bg-cover bg-center bg-no-repeat pb-16 bg-blend-darken md:pb-24">
        <Magic />
        <HomeWhatWeDo />
        <OurMagicians page="Home" />
      </div>
    </>
  )
}
