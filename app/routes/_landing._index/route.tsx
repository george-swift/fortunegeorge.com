import type { Route } from './+types/route'
import { CallToActionSection } from './cta'
import { FeaturedSection } from './featured'
import { HeroSection } from './hero'

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'New React Router App' },
    { name: 'description', content: 'Welcome to React Router!' }
  ]
}

export default function Home() {
  return (
    <main className="pt-[calc(10vmax_/_10)] w-full">
      <HeroSection />
      <FeaturedSection />
      <CallToActionSection />
    </main>
  )
}
