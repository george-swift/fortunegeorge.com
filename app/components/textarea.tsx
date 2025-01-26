import * as React from 'react'

import { cn } from '~/lib/utils'

interface TextareaProps extends React.ComponentProps<'textarea'> {
  label?: string
  helperText?: string
  wrapperClasses?: string
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    { wrapperClasses, className, label, helperText, id, required, ...props },
    ref
  ) => {
    return (
      <div className={cn(wrapperClasses)}>
        {label && (
          <label htmlFor={id} className="block text-sm/6">
            {label}
            {required && ' (required)'}
          </label>
        )}
        <textarea
          id={id}
          className={cn(
            'block w-full rounded-lg px-3.5 py-2 bg-transparent text-base outline outline-1 -outline-offset-1 outline-foreground hover:bg-[hsla(var(--lightAccent-hsl),_0.25)] focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-foreground',
            { 'mt-2.5': label },
            className
          )}
          rows={4}
          ref={ref}
          required={required}
          {...props}
        />
        {helperText && (
          <p className="mt-2 text-sm text-red-600">{helperText}</p>
        )}
      </div>
    )
  }
)

Textarea.displayName = 'Textarea'

export { Textarea }
