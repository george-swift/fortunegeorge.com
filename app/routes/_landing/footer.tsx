'use client'

import { NavLink } from 'react-router'

import { Container } from '~/components/container'
import { cn, navigation } from '~/lib/utils'

export function Footer() {
  const year = new Date().getFullYear()

  const socials = [
    {
      name: 'Mail',
      href: 'mailto:fortuneitok@gmail.com',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <title>Mail</title>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
          />
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/fortune-george-itok/',
      icon: (
        <svg
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="size-5"
        >
          <title>LinkedIn</title>
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      )
    },
    {
      name: 'Medium',
      href: 'https://medium.com/@fortunegeorge',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
          fillRule="evenodd"
          clipRule="evenodd"
          className="size-5"
        >
          <title>Medium</title>
          <path d="M2.846 6.887c.03-.295-.083-.586-.303-.784l-2.24-2.7v-.403h6.958l5.378 11.795 4.728-11.795h6.633v.403l-1.916 1.837c-.165.126-.247.333-.213.538v13.498c-.034.204.048.411.213.537l1.871 1.837v.403h-9.412v-.403l1.939-1.882c.19-.19.19-.246.19-.537v-10.91l-5.389 13.688h-.728l-6.275-13.688v9.174c-.052.385.076.774.347 1.052l2.521 3.058v.404h-7.148v-.404l2.521-3.058c.27-.279.39-.67.325-1.052v-10.608z" />
        </svg>
      )
    },
    {
      name: 'Upwork',
      href: 'https://www.upwork.com/freelancers/~01300baf3645e47f9f?mp_source=share',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-6"
          enableBackground="new 0 0 24 24"
          viewBox="0 0 24 24"
          fill="white"
        >
          <title>Upwork</title>
          <rect width="5.493" height=".134" x="1.75"></rect>
          <rect width="5.493" height=".134" x="16.757"></rect>
          <path d="M18.561,5.024c-2.539,0-4.51,1.648-5.31,4.362c-1.22-1.832-2.148-4.032-2.687-5.887H7.828v7.105c-0.002,1.405-1.141,2.543-2.547,2.545c-1.405-0.002-2.543-1.142-2.545-2.545V3.5H0v7.105c0,2.911,2.37,5.298,5.281,5.298c2.913,0,5.283-2.387,5.283-5.298V9.416c0.529,1.106,1.182,2.227,1.974,3.218L10.865,20.5h2.797l1.213-5.705c1.063,0.678,2.285,1.108,3.686,1.108c3,0,5.439-2.45,5.439-5.445C24,7.461,21.561,5.024,18.561,5.024z M18.561,13.157c-1.102,0-2.135-0.467-3.074-1.226l0.228-1.075l0.008-0.042c0.207-1.142,0.849-3.057,2.839-3.057c1.492,0,2.703,1.211,2.703,2.7C21.264,11.945,20.053,13.157,18.561,13.157z"></path>
        </svg>
      )
    }
  ]

  return (
    <Container
      as="footer"
      data-section-theme="black"
      className="min-h-[10vh] px-[6vw] pb-[6vw] pt-[10vw] xl:pb-[3vw] xl:pt-[7vw] xl:px-[4vw] bg-background text-foreground"
    >
      <div className="lg:grid lg:grid-cols-2 lg:gap-8">
        <div className="space-y-4">
          <div className="leading-[1.3em] tracking-[0.01rem] text-[calc(calc(.012_*_min(100vh,_900px))_+_1rem)]">
            Fortune George
          </div>
          <p className="text-balance text-sm/6">
            Fortune George is an independent digital marketing strategist and
            copywriter. He has helped several clients realize their online
            potential and is excited about an opportunity to help you reach
            yours.
          </p>
          <div className="flex gap-x-6 items-center">
            {socials.map(item => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only">{item.name}</span>
                {item.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-16 grid grid-cols-2 gap-8 lg:mt-0">
          <div className="lg:grid lg:grid-cols-2 lg:gap-6">
            <div className="lg:col-start-2">
              <h3>Site Map</h3>
              <ul role="list" className="mt-4 space-y-4">
                {navigation.map(item => (
                  <li key={item.name}>
                    <NavLink
                      to={item.href}
                      className={({ isActive }) =>
                        cn(
                          'py-[0.1em] decoration-1 underline-offset-[.2em] text-link underline',
                          { 'no-underline': isActive }
                        )
                      }
                    >
                      {item.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
        <p className="text-xs lg:text-sm/6">
          &copy; {year} Fortune George. All rights reserved.
        </p>
      </div>
    </Container>
  )
}
