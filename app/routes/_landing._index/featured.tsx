import { Container } from '~/components/container'

export function FeaturedSection() {
  return (
    <>
      <Container
        as="section"
        className="[background:--darkToLightAccentGradient] px-[6vw] pb-[6vw] xl:py-[3vw] xl:px-[4vw]"
      >
        <h2 className="text-center whitespace-pre-wrap tracking-[.01rem] leading-[calc(1.3em_*_(1_+_(1_-_2.5)_/_25))] text-hero lg:text-[calc(2.5_*_1.2vw_+_1rem)] xl:text-[calc(3_*_1rem)]">
          What I do
          <br />
          <span className="relative z-10">
            (and do well)
            <svg
              fill="none"
              stroke="var(--menuOverlayBackgroundColor)"
              strokeWidth="0.1em"
              strokeLinecap="square"
              strokeLinejoin="bevel"
              className="absolute left-3 -top-4 z-[-1] opacity-100 scale-100 text-[43px] lg:hidden"
            >
              <path
                d="M 0,51.92 c 21.15,-0.26550000000000296 98.7,-1.9470000000000027 141,-1.7700000000000031 c 42.30000000000001,0.1769999999999996 136.76999999999998,2.950000000000003 141,2.950000000000003 c 4.230000000000018,0 -74.73000000000002,-3.392499999999984 -112.80000000000001,-2.950000000000003 c -38.06999999999999,0.44249999999999545 -136.76999999999998,5.191999999999993 -141,5.899999999999999 c -4.229999999999997,0.7079999999999984 83.19,-1.1799999999999855 112.8,-1.1799999999999926 c 29.610000000000014,0 84.60000000000002,0.5604999999999905 84.60000000000002,1.1799999999999926 c 0,0.6195000000000022 -63.45000000000002,2.507499999999986 -84.60000000000002,2.950000000000003 c -21.150000000000006,0.44250000000000256 -47.94,0 -56.400000000000006,0"
                vectorEffect="non-scaling-stroke"
                strokeDasharray="876"
                strokeDashoffset="1752"
              />
            </svg>
            <svg
              fill="none"
              stroke="var(--menuOverlayBackgroundColor)"
              strokeWidth="0.1em"
              strokeLinecap="square"
              strokeLinejoin="bevel"
              className="hidden absolute min-w-[330px] left-4 -top-[30px] z-[-1] opacity-100 scale-100 text-[56px] lg:inline-flex"
            >
              <path
                d="M 0,67.76 c 27.525,-0.346500000000006 128.45,-2.540999999999997 183.5,-2.3100000000000023 c 55.05000000000001,0.23099999999999454 177.995,3.8499999999999943 183.5,3.8499999999999943 c 5.5049999999999955,0 -97.255,-4.427500000000023 -146.8,-3.8499999999999943 c -49.545000000000016,0.5775000000000006 -177.995,6.775999999999996 -183.5,7.699999999999989 c -5.504999999999999,0.9240000000000066 108.265,-1.539999999999992 146.8,-1.539999999999992 c 38.535,0 110.10000000000002,0.7314999999999969 110.10000000000002,1.539999999999992 c 0,0.8084999999999951 -82.57500000000002,3.2724999999999937 -110.10000000000002,3.8500000000000085 c -27.525000000000006,0.5775000000000006 -62.39,0 -73.4,0"
                vectorEffect="non-scaling-stroke"
                strokeDasharray="1205"
                strokeDashoffset="2410"
              ></path>
            </svg>
          </span>
        </h2>

        <div className="mt-10 lg:mt-20 grid grid-cols-1 gap-6 md:gap-28 xl:gap-56 md:grid-cols-2 *:leading-[calc(1.3em_*_(1_+_(1_-_1.6_/_25))]">
          <div className="max-w-[576px] overflow-hidden flex flex-col gap-3">
            <div className="relative size-[304px] max-lg:mx-auto [clip-path:url('#flower')] lg:size-[340px] xl:size-[482px]">
              <svg className="absolute size-full inset-0 fill-[var(--backgroundColor)]">
                <defs>
                  <clipPath id="flower" clipPathUnits="objectBoundingBox">
                    <path d="M0.622,0.852 C0.686,1.049,0.314,1.049,0.378,0.852 C0.119,1,-0.05,0.883,0.151,0.613 C-0.041,0.667,-0.041,0.333,0.151,0.387 C-0.05,0.117,0.119,-0.049,0.392,0.148 C0.314,-0.049,0.686,-0.049,0.622,0.148 C0.895,-0.049,1,0.117,0.863,0.387 C1.035,0.333,1.05,0.647,0.863,0.613 C1,0.883,0.895,1,0.622,0.852" />
                  </clipPath>
                </defs>
              </svg>
              <img
                src="/images/influencer.jpeg"
                alt="Headshot of an influencer"
                className="size-[304px] object-cover lg:size-[340px] xl:size-[482px]"
              />
            </div>
            <h3 className="text-[calc(0.6_*_calc(.012_*_min(100vh,_900px))_+_1rem)] lg:text-[calc(0.6_*_1.2vw_+_1rem)] 2xl:text-[calc(1.6_*_1rem)]">
              Help influencers target audiences for greater{' '}
              <span className="z-10 relative max-xl:underline max-xl:decoration-background">
                brand engagement
                <svg
                  className="hidden -top-2.5 -left-1 z-[-1] absolute xl:block"
                  fill="none"
                  stroke="var(--backgroundColor)"
                  strokeWidth="0.1em"
                  strokeLinecap="square"
                  strokeLinejoin="bevel"
                >
                  <path
                    d="M 0,34.92 c 1.625,-0.9750000000000014 3.25,-3.8999999999999986 6.5,-3.8999999999999986 c 3.25,0 3.25,3.8999999999999986 6.5,3.8999999999999986 c 3.25,0 3.25,-3.8999999999999986 6.5,-3.8999999999999986 c 3.25,0 3.25,3.8999999999999986 6.5,3.8999999999999986 c 3.25,0 3.25,-3.8999999999999986 6.5,-3.8999999999999986 c 3.25,0 3.25,3.8999999999999986 6.5,3.8999999999999986 c 3.25,0 3.25,-3.8999999999999986 6.5,-3.8999999999999986 c 3.25,0 3.25,3.8999999999999986 6.5,3.8999999999999986 c 3.25,0 3.25,-3.8999999999999986 6.5,-3.8999999999999986 c 3.25,0 3.25,3.8999999999999986 6.5,3.8999999999999986 c 3.25,0 3.25,-3.8999999999999986 6.5,-3.8999999999999986 c 3.25,0 3.25,3.8999999999999986 6.5,3.8999999999999986 c 3.25,0 3.25,-3.8999999999999986 6.5,-3.8999999999999986 c 3.25,0 3.25,3.8999999999999986 6.5,3.8999999999999986 c 3.25,0 3.25,-3.8999999999999986 6.5,-3.8999999999999986 c 3.25,0 3.25,3.8999999999999986 6.5,3.8999999999999986 c 3.25,0 3.25,-3.8999999999999986 6.5,-3.8999999999999986 c 3.25,0 3.25,3.8999999999999986 6.5,3.8999999999999986 c 3.25,0 3.25,-3.8999999999999986 6.5,-3.8999999999999986 c 3.25,0 3.25,3.8999999999999986 6.5,3.8999999999999986 c 3.25,0 3.25,-3.8999999999999986 6.5,-3.8999999999999986 c 3.25,0 3.25,3.8999999999999986 6.5,3.8999999999999986 c 3.25,0 3.25,-3.8999999999999986 6.5,-3.8999999999999986 c 3.25,0 3.25,3.8999999999999986 6.5,3.8999999999999986 c 3.25,0 3.25,-3.8999999999999986 6.5,-3.8999999999999986 c 3.25,0 3.25,3.8999999999999986 6.5,3.8999999999999986 c 3.25,0 3.25,-3.8999999999999986 6.5,-3.8999999999999986 c 3.25,0 3.25,3.8999999999999986 6.5,3.8999999999999986 c 3.25,0 3.25,-3.8999999999999986 6.5,-3.8999999999999986 c 3.25,0 3.25,3.8999999999999986 6.5,3.8999999999999986 c 3.25,0 3.25,-3.8999999999999986 6.5,-3.8999999999999986 c 3.25,0 3.25,3.8999999999999986 6.5,3.8999999999999986 c 3.25,0 3.25,-3.8999999999999986 6.5,-3.8999999999999986 c 3.25,0 3.25,3.8999999999999986 6.5,3.8999999999999986 c 3.25,0 3.25,-3.8999999999999986 6.5,-3.8999999999999986 c 3.25,0 3.25,3.8999999999999986 6.5,3.8999999999999986 c 3.25,0 3.25,-3.8999999999999986 6.5,-3.8999999999999986 c 3.25,0 3.25,3.8999999999999986 6.5,3.8999999999999986 c 3.25,0 3.25,-3.8999999999999986 6.5,-3.8999999999999986 c 3.25,0 3.25,3.8999999999999986 6.5,3.8999999999999986 c 3.25,0 3.25,-3.8999999999999986 6.5,-3.8999999999999986 c 3.25,0 3.25,3.8999999999999986 6.5,3.8999999999999986 c 3.25,0 3.25,-3.8999999999999986 6.5,-3.8999999999999986 c 3.25,0 3.25,3.8999999999999986 6.5,3.8999999999999986 c 3.25,0 3.25,-3.8999999999999986 6.5,-3.8999999999999986 c 3.25,0 4.875,2.924999999999997 6.5,3.8999999999999986"
                    vectorEffect="non-scaling-stroke"
                    strokeDasharray="363"
                    strokeDashoffset="726"
                  ></path>
                </svg>
              </span>
            </h3>
          </div>
          <div className="flex flex-col gap-3 md:mt-[28%]">
            <div className="relative w-[75%] min-h-[382px] max-h-[777px] max-lg:mx-auto [clip-path:url('#arched-window')] sm:w-full lg:w-[80%] lg:min-h-[512px] xl:min-h-[735px] xl:w-[87%]">
              <svg className="absolute size-full inset-0 fill-[var(--backgroundColor)]">
                <defs>
                  <clipPath
                    id="arched-window"
                    clipPathUnits="objectBoundingBox"
                  >
                    <path d="M0.495,0 A0.505,0.336,0,0,0,0,0.329 V1 H1 V0.329 A0.505,0.336,0,0,0,0.495,0" />
                  </clipPath>
                </defs>
              </svg>
              <img
                src="/images/disruptive-tech.jpg"
                alt="People trying out VR headset"
                className="w-full object-cover min-h-[382px] max-h-[777px] lg:min-h-[512px] xl:min-h-[735px]"
              />
            </div>
            <h3 className="text-[calc(0.6_*_calc(.012_*_min(100vh,_900px))_+_1rem)] lg:text-[calc(0.6_*_1.2vw_+_1rem)] 2xl:text-[calc(1.6_*_1rem)]">
              Brand positioning for{' '}
              <span className="relative z-10 lg:underline lg:decoration-background">
                disruptive startups
                <svg
                  fill="none"
                  stroke="var(--backgroundColor)"
                  strokeWidth="0.1em"
                  strokeLinecap="square"
                  strokeLinejoin="bevel"
                  className="absolute -top-1 z-[-1] min-w-full opacity-100 scale-100 text-[43px] lg:hidden"
                >
                  <path
                    d="M 0,26.4 c 14.924999999999999,-0.134999999999998 69.65,-0.9899999999999984 99.5,-0.8999999999999986 c 29.849999999999994,0.08999999999999986 96.51500000000001,1.5 99.5,1.5 c 2.984999999999985,0 -52.735000000000014,-1.7250000000000014 -79.60000000000001,-1.5 c -26.864999999999995,0.22499999999999787 -96.51499999999999,2.6400000000000006 -99.49999999999999,3 c -2.9849999999999994,0.35999999999999943 58.705,-0.5999999999999943 79.6,-0.5999999999999979 c 20.894999999999996,0 59.70000000000002,0.2849999999999966 59.70000000000002,0.5999999999999979 c 0,0.3150000000000013 -44.77500000000002,1.2750000000000057 -59.70000000000002,1.5 c -14.924999999999997,0.22499999999999787 -33.83,0 -39.800000000000004,0"
                    vectorEffect="non-scaling-stroke"
                    strokeDasharray="618"
                    strokeDashoffset="1236"
                  ></path>
                </svg>
              </span>
            </h3>
          </div>
        </div>
      </Container>

      <Container
        as="section"
        data-section-theme="bright"
        className="bg-background px-[6vw] py-[6vw] -mt-px xl:py-[3vw] xl:px-[4vw]"
      >
        <div className="grid md:grid-cols-[3fr_1fr] gap-20 xl:mt-8">
          <div className="space-y-3">
            <div className="rounded-[500px] overflow-hidden h-[200px] sm:h-[300px] lg:h-[364px] xl:h-[462px]">
              <img
                src="/images/conversion.jpeg"
                alt="User benefiting from friendly digital marketing"
                className="w-full object-cover h-[200px] sm:h-[300px] lg:h-[364px] xl:h-[462px]"
              />
            </div>

            <h3 className="max-w-xl text-[calc(0.6_*_calc(.012_*_min(100vh,_900px))_+_1rem)] lg:text-[calc(0.6_*_1.2vw_+_1rem)] lg:ml-12 2xl:text-[calc(1.6_*_1rem)]">
              Redefine conversions through intuitive,{' '}
              <span className="underline decoration-[hsla(var(--darkAccent-hsl),_1)]">
                user-friendly market research
              </span>
            </h3>
          </div>
        </div>
      </Container>
    </>
  )
}
