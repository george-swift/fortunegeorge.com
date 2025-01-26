import * as React from 'react'

import { cn } from '~/lib/utils'

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<'textarea'>
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        'block w-full rounded-lg px-3.5 py-2 bg-transparent text-base outline outline-1 -outline-offset-1 outline-foreground hover:bg-[hsla(var(--lightAccent-hsl),_0.25)] focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-foreground',
        className
      )}
      rows={4}
      ref={ref}
      {...props}
    />
  )
})

Textarea.displayName = 'Textarea'

export { Textarea }
