import { Build } from './Build'
import { Magic } from './OurMagic'
import { HomeWhatWeDo } from './WeDo'

export function HomeBg() {
  return (
    <>
      <div className="relative bg-pinkHomeBg bg-cover bg-center bg-no-repeat bg-pinkPotion-300 px-16 md:px-32 py-10 md:py-28">
        <Build />
      </div>
      <div className="min-h-screen bg-homeBg bg-cover bg-center bg-no-repeat bg-blend-darken bg-neutral-900">
        <Magic />
        <HomeWhatWeDo />
      </div>
    </>
  )
}
