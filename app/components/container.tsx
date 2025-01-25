import { cn } from '~/lib/utils'

export function Container({
  as: HTMLElement = 'div',
  className,
  children,
  ...props
}: {
  className?: string
  as?: React.HTMLElementType
  children: React.ReactNode
}) {
  return (
    <HTMLElement className={cn(className, 'px-6 lg:px-8')} {...props}>
      <div className="mx-auto max-w-2xl lg:max-w-8xl">{children}</div>
    </HTMLElement>
  )
}
