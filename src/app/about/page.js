import About from './about'
import AppNavbar from '@/components/layout/AppNavbar'
import MarginTop from '@/components/layout/MarginTop'
import AppFooter from '@/components/layout/AppFooter'

export default function AboutPage() {
  return (
    <>
      <AppNavbar fade={false} />
      <MarginTop />
      <About></About>
      <AppFooter />
    </>
  )
}
