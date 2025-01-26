import * as React from 'react'

import { cn } from '~/lib/utils'

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<'input'>>(
  ({ className, type = 'text', ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'block w-full bg-transparent rounded-lg px-3.5 py-2 text-base outline outline-1 -outline-offset-1 outline-foreground hover:bg-[hsla(var(--lightAccent-hsl),_0.25)] focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-foreground',
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)

Input.displayName = 'Input'

export { Input }
