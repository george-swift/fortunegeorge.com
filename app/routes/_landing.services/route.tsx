import { Link } from 'react-router'

import { buttonVariants } from '~/components/button'
import { Container } from '~/components/container'
import { cn } from '~/lib/utils'

import type { Route } from '../../+types/root'

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'New React Router App' },
    { name: 'description', content: 'Welcome to React Router!' }
  ]
}

export default function Home() {
  return (
    <main className="[background:--accentToLightAccentGradient] w-full">
      <Container
        as="section"
        className="px-[6vw] pb-[6vw] xl:py-[3vw] xl:px-[4vw]"
      >
        <div className="-mt-px grid grid-cols-1 py-4 gap-6 md:grid-cols-[160px,_1fr] lg:gap-40 xl:gap-56">
          <img
            src="/section-divider.png"
            alt=""
            className="w-24 h-14 lg:w-40 lg:h-24 object-cover"
          />
          <div className="flex flex-col w-full gap-10">
            <h1 className="max-w-4xl tracking-[.01rem] leading-[calc(1.3em_*_(1_+_(1_-_4)_/_25))] text-[calc(3_*_calc(.012_*_min(100vh,_900px))_+_1rem)] lg:text-[calc(2.5_*_1.2vw_+_1rem)] 2xl:text-[calc(3.5_*_1rem)]">
              I fuse brand identity with tailored digital marketing to create{' '}
              <span className="underline decoration-[hsla(var(--darkAccent-hsl),_1)]">
                growth-driven
              </span>{' '}
              solutions for you.
            </h1>

            <div className="rounded-[60px] overflow-hidden">
              <img
                src="/hero-image-services.jpg"
                alt="Stock photo of two digital marketers"
                className="size-full min-h-[200px] max-h-[512px] object-cover sm:h-[330px] lg:h-[395px] xl:h-auto xl:min-h-[500px]"
              />
            </div>

            <h2 className="whitespace-pre-wrap tracking-[.01rem] mt-5 leading-[calc(1.3em_*_(1_+_(1_-_2.5)_/_25))] text-[calc(1.5_*_calc(.012_*_min(100vh,_900px))_+_1rem)] lg:text-[calc(1.5_*_1.2vw_+_1rem)] xl:text-[calc(2.5_*_1rem)]">
              Ready to stand out? It all begins with an idea. Here are just a
              few of the services I provide for your business.
            </h2>

            <div className="space-y-8">
              <div className="space-y-3">
                <h3 className="text-[calc(0.6_*_calc(.012_*_min(100vh,_900px))_+_1rem)] lg:text-[calc(0.6_*_1.2vw_+_1rem)] 2xl:text-[calc(1.6_*_1rem)]">
                  General Design
                </h3>
                <p>
                  Every great idea starts with a vision. Whether you're building
                  a brand, sharing a creative passion, or turning a dream into
                  reality, I craft compelling designs that tell your story and
                  capture attention online.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-[calc(0.6_*_calc(.012_*_min(100vh,_900px))_+_1rem)] lg:text-[calc(0.6_*_1.2vw_+_1rem)] 2xl:text-[calc(1.6_*_1rem)]">
                  Content Marketing
                </h3>
                <p>
                  Great content isn’t just created; it’s crafted to inspire
                  action. I design content strategies that align with your
                  goals, engaging your audience with impactful storytelling and
                  delivering measurable results.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-[calc(0.6_*_calc(.012_*_min(100vh,_900px))_+_1rem)] lg:text-[calc(0.6_*_1.2vw_+_1rem)] 2xl:text-[calc(1.6_*_1rem)]">
                  Digital Advertising
                </h3>
                <p>
                  Ready to make your mark? From eye-catching social campaigns to
                  precision-targeted Google Ads, I create strategies that turn
                  concepts into conversions, helping you connect with your
                  audience and grow your business.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-[calc(0.6_*_calc(.012_*_min(100vh,_900px))_+_1rem)] lg:text-[calc(0.6_*_1.2vw_+_1rem)] 2xl:text-[calc(1.6_*_1rem)]">
                  SEO Optimization
                </h3>
                <p>
                  Visibility is everything in the digital world. Through
                  tailored keyword strategies and on-page optimization, I ensure
                  your brand stands out, ranks higher, and reaches the audience
                  it deserves.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-[calc(0.6_*_calc(.012_*_min(100vh,_900px))_+_1rem)] lg:text-[calc(0.6_*_1.2vw_+_1rem)] 2xl:text-[calc(1.6_*_1rem)]">
                  Email & Social Media Marketing
                </h3>
                <p>
                  Your audience is everywhere—are you? From dynamic email
                  campaigns to engaging social media strategies, I help you
                  build connections, nurture leads, and drive growth across
                  every channel.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-[calc(0.6_*_calc(.012_*_min(100vh,_900px))_+_1rem)] lg:text-[calc(0.6_*_1.2vw_+_1rem)] 2xl:text-[calc(1.6_*_1rem)]">
                  Data & Analytics
                </h3>
                <p>
                  The key to success lies in understanding. By transforming
                  complex data into actionable insights, I empower you to make
                  informed decisions that fuel growth, improve performance, and
                  maximize ROI.
                </p>
              </div>
            </div>
          </div>
        </div>

        <Link
          to="/contact"
          className={cn(
            buttonVariants(),
            'mx-auto mt-20 mb-10 flex w-fit h-14 px-14 rounded-full text-white'
          )}
        >
          Contact Me
        </Link>
      </Container>
    </main>
  )
}
