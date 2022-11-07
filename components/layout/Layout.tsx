import { ReactNode } from 'react'
import Footer from './Footer'
import HeaderNavigation from './NavigationBar'

/** */
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <HeaderNavigation />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
