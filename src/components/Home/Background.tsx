import { Build } from './Build'
import { Magic } from './OurMagic'
import { HomeWhatWeDo } from './WeDo'

export function HomeBg() {
  return (
    <>
      <div className="relative bg-homeBg bg-cover bg-center bg-no-repeat bg-blend-darken bg-pinkPotion-300 xl:pl-[240px] xl:pr-[400px] px-16 py-10 md:py-28">
        <Build />
      </div>
      <div className="min-h-screen bg-homeBg bg-cover bg-center bg-no-repeat bg-blend-darken bg-neutral-900">
        <Magic />
        <HomeWhatWeDo />
      </div>
    </>
  )
}
