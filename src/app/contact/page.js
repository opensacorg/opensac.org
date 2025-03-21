import Contact from './contact'
import AppNavbar from '@/components/layout/AppNavbar'
import MarginTop from '@/components/layout/MarginTop'
import AppFooter from '@/components/layout/AppFooter'

export default function ContactPage() {
  return (
    <>
      <AppNavbar fade={false} />
      <MarginTop />
      <Contact></Contact>
      <AppFooter />
    </>
  )
}
