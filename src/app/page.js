import AppNavbar from '@/components/layout/AppNavbar'
import Home from './home/home'
import MarginTop from '@/components/layout/MarginTop'
import AppFooter from '@/components/layout/AppFooter'

export default function DefaultPage() {
  return (
    <div className="">
      <AppNavbar fade={true} />
      <MarginTop />
      <Home />
      <AppFooter />
    </div>
  )
}
