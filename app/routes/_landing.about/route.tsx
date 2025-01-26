import { Container } from '~/components/container'

export function meta() {
  return [
    { title: 'About - Fortune George' },
    { name: 'description', content: "Hi there. I'm Fortune George" }
  ]
}

export default function About() {
  return (
    <main className="grow w-full -mt-px [background:--accentToLightAccentGradient]">
      <Container
        as="section"
        className="px-[6vw] pb-[6vw] xl:py-[3vw] xl:px-[4vw]"
      >
        <div className="grid gap-10 -mt-px pt-4 lg:pt-36 lg:gap-20">
          <h1 className="max-w-4xl tracking-[.01rem] leading-[calc(1.3em_*_(1_+_(1_-_4)_/_25))] text-hero lg:text-[calc(2.5_*_1.2vw_+_1rem)] 2xl:text-[calc(3.5_*_1rem)]">
            A bold thinker, data-driven strategist, and creative storyteller{' '}
            <span className="relative whitespace-pre-wrap z-10">
              <span className="max-xl:bg-[hsla(var(--darkAccent-hsl),_1)]">
                bringing ideas to life.
              </span>{' '}
              <svg
                fill="none"
                stroke="hsla(var(--darkAccent-hsl), 1)"
                strokeWidth="0.1em"
                strokeLinecap="square"
                strokeLinejoin="bevel"
                className="hidden absolute left-[-5px] -top-8 z-[-1] opacity-100 scale-100 w-[768px] h-[93px] text-[67px] xl:block"
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
              alt="Two content strategists at work"
              className="size-full object-cover max-h-[600px]"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 mt-10 py-4 gap-6 md:grid-cols-[160px,_1fr] lg:mt-20 lg:gap-40 xl:gap-48">
          <img
            src="/images/section-divider.png"
            alt=""
            className="w-24 h-14 lg:w-40 lg:h-24 object-cover"
          />
          <div className="flex flex-col w-full gap-10">
            <h2 className="whitespace-pre-wrap tracking-[.01rem] leading-[calc(1.3em_*_(1_+_(1_-_2.5)_/_25))] text-[calc(1.5_*_calc(.012_*_min(100vh,_900px))_+_1rem)] lg:text-[calc(1.5_*_1.2vw_+_1rem)] xl:text-[calc(2.5_*_1rem)]">
              Every great story begins with a spark. Mine started with a passion
              for connecting people to ideas through digital channels.{' '}
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <p>
                My journey in digital marketing began with crafting social media
                ads for my family’s business as a teenager. That’s when I
                discovered the power of storytelling and data-driven
                decision-making to grow brands. After earning my degree and
                Google’s Digital Marketing and E-Commerce certification, I
                turned that passion into a career.
              </p>
              <p>
                I believe marketing is about empathy—understanding what people
                need and delivering it in meaningful ways. With a self-starter
                attitude and a love for problem-solving, I combine strategic
                thinking, creativity, and technical expertise to build campaigns
                that don’t just meet goals—they exceed them.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 pb-10 md:mt-12 md:grid-cols-2">
          <div className="flex flex-col gap-8 lg:ml-12 xl:mt-[10%] xl:ml-16">
            <div className="space-y-12">
              <div className="space-y-3">
                <p>
                  My process is simple: strategy first, execution second. I take
                  the time to understand your business, goals, and audience,
                  translating insights into tailored digital strategies. Whether
                  it’s increasing brand awareness, driving traffic, or
                  generating leads, I approach every project with a focus on
                  results and a commitment to creativity.
                </p>
              </div>
              <div className="space-y-3">
                <p>
                  Don’t worry about sounding professional. Sound like you. There
                  are over 1.5 billion websites out there, but your story is
                  what’s going to separate this one from the rest. If you read
                  the words back and don’t hear your own voice in your head,
                  it’s a good sign we still have more work to do.
                </p>
              </div>
            </div>
          </div>

          <div className="relative size-[304px] [clip-path:url('#rabbet')] mx-auto lg:size-[340px] xl:size-[482px]">
            <svg className="absolute size-full inset-0 fill-[var(--backgroundColor)]">
              <defs>
                <clipPath id="rabbet" clipPathUnits="objectBoundingBox">
                  <path d="M0.14,0 H0.86 V0.14 H1 V0.86 H0.86 V1 H0.14 V0.86 H0 V0.14 H0.14 Z" />
                </clipPath>
              </defs>
            </svg>
            <img
              src="/images/strategy.jpg"
              alt="Whiteboard with the word 'Audience' written on it"
              className="size-[304px] object-[0%] object-cover lg:size-[340px] xl:size-[482px]"
            />
          </div>
        </div>
      </Container>
    </main>
  )
}
