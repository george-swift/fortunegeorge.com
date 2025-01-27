'use client'

import { NavLink } from 'react-router'

import { Container } from '~/components/container'
import { cn, navigation, socials } from '~/lib/utils'

export function Footer() {
  const contact = Object.values(socials)

  const year = new Date().getFullYear()

  return (
    <Container
      as="footer"
      data-section-theme="black"
      className="min-h-[10vh] px-[6vw] pb-[6vw] pt-[10vw] xl:pb-[3vw] xl:pt-[7vw] xl:px-[4vw] bg-background text-foreground"
    >
      <div className="lg:grid lg:grid-cols-2 lg:gap-8">
        <div className="space-y-4">
          <div className="leading-[1.3em] tracking-[0.01rem] text-[calc(calc(.012_*_min(100vh,_900px))_+_1rem)] md:text-[calc(1.2vw_+_1rem)]">
            Fortune George
          </div>
          <p className="text-balance text-sm/6">
            Fortune George is an independent digital marketing strategist and
            copywriter. He has helped several clients realize their online
            potential and is excited about an opportunity to help you reach
            yours.
          </p>
          <div className="flex gap-x-6 items-center">
            {contact.map(item => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon />
              </a>
            ))}
          </div>
        </div>
        <div className="mt-16 grid grid-cols-2 gap-8 lg:mt-0">
          <div className="lg:grid lg:grid-cols-2 lg:gap-6">
            <div className="lg:col-start-2">
              <ul className="mt-4 space-y-4">
                {navigation.map(item => (
                  <li key={item.name}>
                    <NavLink
                      to={item.href}
                      className={({ isActive }) =>
                        cn('py-[0.1em] decoration-1 text-link', {
                          'underline underline-offset-[.2em]': isActive
                        })
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
