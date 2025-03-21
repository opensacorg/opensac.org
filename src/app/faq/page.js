import Faq from './faq'
import AppNavbar from '@/components/layout/AppNavbar'
import MarginTop from '@/components/layout/MarginTop'
import AppFooter from '@/components/layout/AppFooter'

export default function FaqPage() {
  return (
    <>
      <AppNavbar fade={false} />
      <MarginTop />
      <Faq />
      <AppFooter />
    </>
  )
}
