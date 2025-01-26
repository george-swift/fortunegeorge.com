import * as React from 'react'

import { cn } from '~/lib/utils'

interface InputProps extends React.ComponentProps<'input'> {
  label?: string
  helperText?: string
  wrapperClasses?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      wrapperClasses,
      type = 'text',
      className,
      label,
      helperText,
      id,
      required,
      ...props
    },
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
        <input
          id={id}
          type={type}
          className={cn(
            'block w-full bg-transparent rounded-lg px-3.5 py-2 text-base outline outline-1 -outline-offset-1 outline-foreground hover:bg-[hsla(var(--lightAccent-hsl),_0.25)] focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-foreground',
            { 'mt-2.5': label },
            className
          )}
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

Input.displayName = 'Input'

export { Input }
