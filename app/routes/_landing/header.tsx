import { Link, NavLink, useLocation } from 'react-router'

import { Button } from '~/components/button'
import { Container } from '~/components/container'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '~/components/dialog'
import { Bars2Icon, CloseIcon } from '~/components/icons'
import { cn, navigation } from '~/lib/utils'

const MobileNav = () => (
  <div className="flex lg:hidden">
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" className="items-start">
          <span className="sr-only">Open menu</span>
          <Bars2Icon />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            <Link to="/" className=" mt-[5px] pt-[0.025em]">
              Fortune George
            </Link>
          </DialogTitle>

          <DialogClose asChild>
            <Button variant="ghost" size="icon" className="items-start">
              <span className="sr-only">Close menu</span>
              <CloseIcon />
            </Button>
          </DialogClose>
        </DialogHeader>
        <div className="flex flex-col w-full min-h-full items-center justify-center gap-[3vw]">
          {navigation.map(item => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) =>
                cn(
                  'py-[0.1em] text-[8.5vmin] leading-none text-foreground sm:text-[5vmin]',
                  {
                    'underline underline-offset-[.2em]': isActive
                  }
                )
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  </div>
)

const DesktopNav = () => (
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
)

export function Header() {
  const location = useLocation()

  return (
    <Container
      as="header"
      {...(location.pathname !== '/' && { 'data-section-theme': 'bright' })}
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
        <MobileNav />
        <DesktopNav />
      </nav>
    </Container>
  )
}
