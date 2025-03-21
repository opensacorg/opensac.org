import Home from './home'
import AppNavbar from '@/components/layout/AppNavbar'
import MarginTop from '@/components/layout/MarginTop'
import AppFooter from '@/components/layout/AppFooter'

export default function HomePage() {
  return (
    <>
      <AppNavbar fade={true} />
      <MarginTop />
      <Home></Home>
      <AppFooter />
    </>
  )
}
