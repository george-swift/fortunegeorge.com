import { Toaster } from 'react-hot-toast'
import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from 'react-router'

import stylesheet from '~/styles/index.css?url'

import type { Route } from './+types/root'

export const links: Route.LinksFunction = () => [
  {
    rel: 'icon',
    href: '/favicon/favicon.ico'
  },
  {
    rel: 'icon',
    href: '/favicon/favicon-16x16.png',
    sizes: '16x16',
    type: 'image/png'
  },
  {
    rel: 'icon',
    href: '/favicon/favicon-32x32.png',
    sizes: '32x32',
    type: 'image/png'
  },
  {
    rel: 'apple-touch-icon',
    href: '/favicon/apple-touch-icon.png',
    type: 'image/png'
  },
  {
    rel: 'android-chrome',
    href: '/favicon/android-chrome-192x192.png',
    sizes: '192x192',
    type: 'image/png'
  },
  {
    rel: 'android-chrome',
    href: '/favicon/android-chrome-512x512.png',
    sizes: '512x512',
    type: 'image/png'
  },
  { rel: 'manifest', href: '/favicon/site.webmanifest' },
  { rel: 'stylesheet', href: stylesheet }
]

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="og:title" content="Fortune George" />
        <meta
          name="og:description"
          content="Fortune George is a digital marketing expert specializing in content strategy, SEO optimization, Google Ads, and social media campaigns."
        />
        <meta name="og:url" content="https://www.fortunegeorge.com" />
        <meta name="og:site_name" content="Fortune George" />
        <meta name="og:locale" content="en_US" />
        <meta name="og:type" content="website" />
        <meta
          name="og:image"
          content="https://www.fortunegeorge.com/images/og.png"
        />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <Toaster />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return <Outlet />
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = 'Oops!'
  let details = 'An unexpected error occurred.'
  let stack: string | undefined

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? '404' : 'Error'
    details =
      error.status === 404
        ? 'The requested page could not be found.'
        : error.statusText || details
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message
    stack = error.stack
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  )
}
