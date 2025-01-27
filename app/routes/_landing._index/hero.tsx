import { Link } from 'react-router'

import { Container } from '~/components/container'

export function HeroSection() {
  return (
    <Container
      as="section"
      className="px-[6vw] pb-[6vw] xl:py-[3vw] xl:px-[4vw]"
    >
      <div className="grid gap-10 pt-4 lg:pt-36 lg:gap-20">
        <h1 className="max-w-4xl tracking-[.01rem] leading-[calc(1.3em_*_(1_+_(1_-_4)_/_25))] text-hero lg:text-[calc(2.5_*_1.2vw_+_1rem)] 2xl:text-[calc(3.5_*_1rem)]">
          I’m a digital marketing professional focused on{' '}
          <span className="relative whitespace-pre-wrap z-10">
            <span className="max-lg:bg-[var(--menuOverlayBackgroundColor)]">
              strategy
            </span>{' '}
            and{' '}
            <span className="max-lg:bg-[var(--menuOverlayBackgroundColor)]">
              copywriting.
            </span>
            <svg
              fill="none"
              stroke="var(--menuOverlayBackgroundColor)"
              strokeWidth="0.1em"
              strokeLinecap="square"
              strokeLinejoin="bevel"
              className="hidden absolute left-[-5px] -top-8 z-[-1] opacity-100 scale-100 w-[808px] h-[93px] text-[67px] lg:block"
            >
              <path
                d="M 0,81.84 c 60.59999999999999,-0.41849999999999454 282.8,-3.068999999999974 404,-2.7900000000000063 c 121.20000000000005,0.27899999999999636 391.88,4.650000000000006 404,4.650000000000006 c 12.120000000000005,0 -214.12,-5.347500000000011 -323.20000000000005,-4.650000000000006 c -109.08000000000004,0.6974999999999909 -391.87999999999994,8.183999999999997 -403.99999999999994,9.299999999999997 c -12.11999999999999,1.1159999999999997 238.35999999999996,-1.859999999999971 323.2,-1.8599999999999852 c 84.84000000000003,0 242.4000000000001,0.8834999999999837 242.4000000000001,1.8599999999999852 c 0,0.9765000000000015 -181.80000000000007,3.9525000000000006 -242.4000000000001,4.650000000000006 c -60.60000000000002,0.6975000000000051 -137.36,0 -161.60000000000002,0"
                vectorEffect="non-scaling-stroke"
                strokeDasharray="2507"
                strokeDashoffset="5014"
              />
            </svg>
          </span>
        </h1>
        <div className="w-full h-full min-h-48 max-h-[600px] bg-slate-50 rounded-[60px] [-webkit-mask-image:-webkit-radial-gradient(white,_black)]">
          <img
            src="/images/hero-image.jpg"
            alt="Content strategists at work"
            className="size-full object-cover max-h-[600px]"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 mt-10 py-4 gap-6 md:grid-cols-[160px,_1fr] lg:mt-20 lg:gap-40 xl:gap-56">
        <img
          src="/images/section-divider.png"
          alt=""
          className="w-24 h-14 lg:w-40 lg:h-24 object-cover"
        />
        <div className="flex flex-col w-full gap-10">
          <h2 className="whitespace-pre-wrap tracking-[.01rem] leading-[calc(1.3em_*_(1_+_(1_-_2.5)_/_25))] text-[calc(1.5_*_calc(.012_*_min(100vh,_900px))_+_1rem)] lg:text-[calc(1.5_*_1.2vw_+_1rem)] xl:text-[calc(2.5_*_1rem)]">
            It all begins with an idea. Maybe you want to launch a business.
            Maybe you want your brand to mean{' '}
            <span className="py-px bg-[var(--menuOverlayBackgroundColor)]">
              something more.
            </span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <p>
              Don’t worry about sounding professional. Sound like you. There are
              over 1.5 billion websites out there, but your story is what’s
              going to separate this one from the rest. If you read the words
              back and don’t hear your own voice in your head, it’s a good sign
              we still have more work to do.
            </p>
            <p>
              Your authenticity is your strongest asset. People don’t connect
              with faceless brands—they connect with the humans behind them.
              Whether it’s the tone, style, or message; when your personality
              shines through, that’s when the magic happens, and your audience
              will notice.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <Link
              to="/about"
              className="mt-3 underline underline-offset-2 lg:col-start-2"
            >
              Learn about how I work &gt;
            </Link>
          </div>
        </div>
      </div>
    </Container>
  )
}
