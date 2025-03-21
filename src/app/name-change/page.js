import NameChange from './nameChange'
import AppNavbar from '@/components/layout/AppNavbar'
import MarginTop from '@/components/layout/MarginTop'
import AppFooter from '@/components/layout/AppFooter'

export default function NameChangePage() {
  return (
    <>
      <AppNavbar fade={false} />
      <MarginTop />
      <NameChange />
      <AppFooter />
    </>
  )
}
