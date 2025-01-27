import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

import {
  LinkedInIcon,
  MailIcon,
  MediumIcon,
  UpworkIcon
} from '~/components/icons'

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs))

export const navigation = [
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' }
]

export const socials = {
  Mail: { name: 'Mail', href: 'mailto:fortuneitok@gmail.com', icon: MailIcon },
  Linkedin: {
    name: 'Linkedin',
    href: 'https://www.linkedin.com/in/fortune-george-itok/',
    icon: LinkedInIcon
  },
  Medium: {
    name: 'Medium',
    href: 'https://medium.com/@fortunegeorge',
    icon: MediumIcon
  },
  Upwork: {
    name: 'Upwork',
    href: 'https://www.upwork.com/freelancers/~01300baf3645e47f9f?mp_source=share',
    icon: UpworkIcon
  }
}
