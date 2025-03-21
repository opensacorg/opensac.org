import Donate from './donate'
import AppNavbar from '@/components/layout/AppNavbar'
import MarginTop from '@/components/layout/MarginTop'
import AppFooter from '@/components/layout/AppFooter'

export default function DonatePage() {
  return (
    <>
      <AppNavbar fade={false} />
      <MarginTop />
      <Donate></Donate>
      <AppFooter />
    </>
  )
}
