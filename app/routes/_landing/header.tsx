'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Link, NavLink, useLocation } from 'react-router'

import { Button } from '~/components/button'
import { Container } from '~/components/container'
import { cn, navigation } from '~/lib/utils'

export function Header() {
  const location = useLocation()

  const isServicesPage = location.pathname === '/services'

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <Container
      as="header"
      {...(isServicesPage && { 'data-section-theme': 'bright' })}
      className="bg-background p-[6vw] xl:py-[3vw] xl:px-[4vw]"
    >
      <nav aria-label="Global" className="flex items-center justify-between">
        <div className="flex lg:flex-1">
          <Link
            to="/"
            className="leading-[1.3em] mt-1 pt-[0.025em] tracking-[0.01rem] text-[calc(calc(.012_*_min(100vh,_900px))_+_1rem)] md:text-[calc(1.2vw_+_1rem)]"
          >
            Fortune George
          </Link>
        </div>
        <div className="flex lg:hidden">
          <Button
            variant="ghost"
            size="icon"
            className="items-start"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 36 24"
              strokeWidth={1}
              stroke="currentColor"
              aria-hidden="true"
              className="size-full"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M1.5 6h33m-33 10h33"
              />
            </svg>
          </Button>
        </div>
        <div className="hidden lg:flex lg:gap-x-[1.3vw]">
          {navigation.map(item => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) =>
                cn('py-[0.1em] text-base/[1.4em] text-foreground', {
                  'underline underline-offset-[.2em]': isActive
                })
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-overlay px-6 py-6 sm:max-w-sm">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="leading-[1.3em] mt-[5px] pt-[0.025em] tracking-[0.01rem] text-[calc(calc(.012_*_min(100vh,_900px))_+_1rem)] md:text-[calc(1.2vw_+_1rem)]"
            >
              Fortune George
            </Link>

            <Button
              variant="ghost"
              size="icon"
              className="items-start"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="currentColor"
                className="size-full"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </Button>
          </div>
          <div className="flex flex-col w-full min-h-full items-center justify-center gap-[3vw]">
            {navigation.map(item => (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) =>
                  cn('py-[0.1em] text-[8.5vmin] leading-none text-foreground', {
                    'underline underline-offset-[.2em]': isActive
                  })
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </DialogPanel>
      </Dialog>
    </Container>
  )
}
