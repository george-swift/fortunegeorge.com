import { Link } from 'react-router'

import { buttonVariants } from '~/components/button'
import { Container } from '~/components/container'
import { cn } from '~/lib/utils'

export function CallToActionSection() {
  return (
    <>
      <Container
        as="section"
        className="[background:--accentToLightAccentGradient] -mt-px px-[6vw] pb-[6vw] xl:py-[3vw] xl:px-[4vw]"
      >
        <div className="grid grid-cols-1 py-10 gap-6 md:grid-cols-[160px,_1fr] lg:pt-20 lg:gap-40 xl:gap-56">
          <img
            src="/section-divider.png"
            alt=""
            className="w-24 h-14 lg:w-40 lg:h-24 object-cover"
          />
          <div className="flex flex-col w-full gap-10">
            <h2 className="whitespace-pre-wrap tracking-[.01rem] leading-[calc(1.3em_*_(1_+_(1_-_4)_/_25))] text-[calc(3_*_calc(.012_*_min(100vh,_900px))_+_1rem)] lg:text-[calc(2.5_*_1.2vw_+_1rem)] 2xl:text-[calc(3.5_*_1rem)]">
              Don’t worry about sounding professional.{' '}
              <span className="relative z-[5]">
                Sound like you.
                <svg
                  fill="none"
                  stroke="var(--backgroundColor)"
                  strokeWidth="0.1em"
                  strokeLinecap="square"
                  strokeLinejoin="bevel"
                  className="min-w-full hidden absolute z-[-1] -top-2 xl:block"
                >
                  <path
                    d="M 0,56.32 c 29.55,-0.2880000000000038 137.9,-2.112000000000009 197,-1.9200000000000017 c 59.10000000000002,0.19200000000000017 191.09000000000003,3.200000000000003 197,3.200000000000003 c 5.909999999999968,0 -104.41000000000003,-3.6799999999999855 -157.60000000000002,-3.200000000000003 c -53.19,0.4799999999999969 -191.08999999999997,5.631999999999998 -196.99999999999997,6.399999999999999 c -5.909999999999997,0.7680000000000007 116.22999999999999,-1.279999999999987 157.6,-1.279999999999994 c 41.370000000000005,0 118.20000000000005,0.607999999999997 118.20000000000005,1.279999999999994 c 0,0.671999999999997 -88.65000000000003,2.719999999999999 -118.20000000000005,3.200000000000003 c -29.55000000000001,0.480000000000004 -66.98000000000002,0 -78.80000000000001,0"
                    vectorEffect="non-scaling-stroke"
                    strokeDasharray="1223"
                    strokeDashoffset="2446"
                  ></path>
                </svg>
              </span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 pb-10 lg:pt-10 lg:grid-cols-2 lg:gap-28">
          <div className="relative h-[304px] max-lg:mx-auto [clip-path:url('#vertical-pills')] lg:h-[340px] xl:h-[482px] xl:min-w-[482px]">
            <svg className="absolute size-full inset-0 fill-[var(--accentToLightAccentGradient)]">
              <defs>
                <clipPath id="vertical-pills" clipPathUnits="objectBoundingBox">
                  <path d="M0.799,0 A0.201,0.302,0,0,0,0.649,0.1 A0.201,0.303,0,0,0,0.351,0.1 A0.201,0.303,0,0,0,0,0.303 V0.697 A0.201,0.303,0,0,0,0.351,0.9 A0.201,0.303,0,0,0,0.649,0.9 A0.201,0.303,0,0,0,1,0.697 V0.303 A0.201,0.303,0,0,0,0.799,0" />
                </clipPath>
              </defs>
            </svg>
            <img
              src="/home-office.jpg"
              alt="Stock photo of home office setup"
              className="w-full h-[304px] object-cover lg:h-[340px] xl:h-[482px] xl:min-w-[482px]"
            />
          </div>

          <div className="flex flex-col gap-10">
            <p className="text-[calc(0.6_*_calc(.012_*_min(100vh,_900px))_+_1rem)] lg:text-[calc(0.6_*_1.2vw_+_1rem)] 2xl:text-[calc(1.6_*_1rem)]">
              I care about long-term results, helping you bring in your target
              audience, engaging your users on-site, converting them to
              customers, and delighting them after their visit.
            </p>

            <Link
              to="/about"
              className="mt-3 underline underline-offset-2 lg:col-start-2"
            >
              Learn about how I work &gt;
            </Link>
          </div>
        </div>
      </Container>

      <Container
        as="section"
        data-section-theme="light-bold"
        className="bg-background px-[6vw] pt-[6vw] pb-[10vw] -mt-px xl:py-[3vw] xl:px-[4vw]"
      >
        <div className="grid grid-cols-1 gap-10 pb-10 md:grid-cols-2">
          <div className="flex flex-col gap-8">
            <h2 className="whitespace-pre-wrap tracking-[.01rem] leading-[calc(1.3em_*_(1_+_(1_-_4)_/_25))] text-[calc(3_*_calc(.012_*_min(100vh,_900px))_+_1rem)] lg:text-[calc(2.5_*_1.2vw_+_1rem)] 2xl:text-[calc(3.5_*_1rem)]">
              I’m obsessed with helping you reach your{' '}
              <span className="relative z-[5]">
                full potential.
                <svg
                  fill="none"
                  stroke="hsla(var(--darkAccent-hsl), 1)"
                  strokeWidth="0.1em"
                  strokeLinecap="square"
                  strokeLinejoin="bevel"
                  className="min-w-full hidden z-[-1] absolute right-0 -top-2 xl:block"
                >
                  <path
                    d="M 0,56.32 c 29.55,-0.2880000000000038 137.9,-2.112000000000009 197,-1.9200000000000017 c 59.10000000000002,0.19200000000000017 191.09000000000003,3.200000000000003 197,3.200000000000003 c 5.909999999999968,0 -104.41000000000003,-3.6799999999999855 -157.60000000000002,-3.200000000000003 c -53.19,0.4799999999999969 -191.08999999999997,5.631999999999998 -196.99999999999997,6.399999999999999 c -5.909999999999997,0.7680000000000007 116.22999999999999,-1.279999999999987 157.6,-1.279999999999994 c 41.370000000000005,0 118.20000000000005,0.607999999999997 118.20000000000005,1.279999999999994 c 0,0.671999999999997 -88.65000000000003,2.719999999999999 -118.20000000000005,3.200000000000003 c -29.55000000000001,0.480000000000004 -66.98000000000002,0 -78.80000000000001,0"
                    vectorEffect="non-scaling-stroke"
                    strokeDasharray="1223"
                    strokeDashoffset="2446"
                  />
                </svg>
              </span>
            </h2>

            <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-2">
              <div className="space-y-3">
                <p className="text-[calc(0.6_*_calc(.012_*_min(100vh,_900px))_+_1rem)] lg:text-[calc(0.6_*_1.2vw_+_1rem)] 2xl:text-[calc(1.6_*_1rem)]">
                  General Design
                </p>
                <div>
                  <p>Strategy development</p>
                  <p>Content design</p>
                </div>
              </div>
              <div className="space-y-3">
                <p className="text-[calc(0.6_*_calc(.012_*_min(100vh,_900px))_+_1rem)] lg:text-[calc(0.6_*_1.2vw_+_1rem)] 2xl:text-[calc(1.6_*_1rem)]">
                  Data & Analytics
                </p>
                <div>
                  <p>Research & reporting</p>
                  <p>Conversion optimization</p>
                </div>
              </div>
              <div className="space-y-3">
                <p className="text-[calc(0.6_*_calc(.012_*_min(100vh,_900px))_+_1rem)] lg:text-[calc(0.6_*_1.2vw_+_1rem)] 2xl:text-[calc(1.6_*_1rem)]">
                  SEO Optimization
                </p>
                <div>
                  <p>Keyword research</p>
                  <p>Content optimization</p>
                </div>
              </div>
              <div className="space-y-3">
                <p className="text-[calc(0.6_*_calc(.012_*_min(100vh,_900px))_+_1rem)] lg:text-[calc(0.6_*_1.2vw_+_1rem)] 2xl:text-[calc(1.6_*_1rem)]">
                  Digital Advertising
                </p>
                <div>
                  <p>Email & Social media</p>
                  <p>Ad Campaigns</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-[479px] md:mt-auto max-lg:mx-auto [clip-path:url('#horizontal-pills')] lg:h-[579px] xl:h-[818px]">
            <svg className="absolute size-full inset-0 fill-[var(--backgroundColor)]">
              <defs>
                <clipPath
                  id="horizontal-pills"
                  clipPathUnits="objectBoundingBox"
                >
                  <path d="M1,0.802 a0.302,0.201,0,0,0,-0.1,-0.15 a0.303,0.201,0,0,0,0,-0.299 A0.303,0.201,0,0,0,0.702,0.003 h-0.394 a0.303,0.201,0,0,0,-0.203,0.351 a0.303,0.201,0,0,0,0,0.299 a0.303,0.201,0,0,0,0.203,0.35 h0.394 a0.303,0.201,0,0,0,0.303,-0.201" />
                </clipPath>
              </defs>
            </svg>

            <img
              src="/cta-image.jpeg"
              alt="Stock photo of two content strategists"
              className="w-full h-[479px] object-cover lg:h-[579px] xl:h-[818px]"
            />
          </div>
        </div>

        <Link
          to="/contact"
          className={cn(
            buttonVariants(),
            'mx-auto flex w-fit h-14 px-14 rounded-full text-white'
          )}
        >
          Contact Me
        </Link>
      </Container>
    </>
  )
}
