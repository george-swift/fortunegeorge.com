import { CallToActionSection } from './cta'
import { FeaturedSection } from './featured'
import { HeroSection } from './hero'

export function meta() {
  return [{ title: 'Fortune George' }]
}

export default function Home() {
  return (
    <main className="grow -mt-px pt-[calc(10vmax_/_10)] w-full">
      <HeroSection />
      <FeaturedSection />
      <CallToActionSection />
    </main>
  )
}
