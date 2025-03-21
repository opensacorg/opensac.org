import Conduct from './conduct'
import AppNavbar from '@/components/layout/AppNavbar'
import MarginTop from '@/components/layout/MarginTop'
import AppFooter from '@/components/layout/AppFooter'

export default function ConductPage() {
  return (
    <>
      <AppNavbar fade={false} />
      <MarginTop />
      <Conduct></Conduct>
      <AppFooter />
    </>
  )
}
