import { HomeHero } from '../components/Home/Hero'
import { HomeRedirect } from '../components/Home/Redirect'

export default function Home() {
  return (
    <div className="bg-neutral-900 divide-y divide-neutral-800">
      <HomeHero />
      <HomeRedirect />
    </div>
  )
}
