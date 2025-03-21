import { githubOwner } from '@/constants'
import Projects from './projects'
import AppNavbar from '@/components/layout/AppNavbar'
import MarginTop from '@/components/layout/MarginTop'
import AppFooter from '@/components/layout/AppFooter'

export default function Page() {
  return (
    <>
      <AppNavbar fade={false} />
      <MarginTop />
      <Projects githubOwner={githubOwner}></Projects>
      <AppFooter />
    </>
  )
}
