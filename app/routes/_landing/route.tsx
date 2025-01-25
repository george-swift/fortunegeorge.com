import { Outlet } from 'react-router'

import { Footer } from './footer'
import { Header } from './header'

export default function LandingPageLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
