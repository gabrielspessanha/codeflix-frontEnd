import { HeaderAuth } from '@/components/common/headerAuth'
import FeaturedSection from '@/components/homeAuth/featuresSection'
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Codeflix - Home',
}
 
const HomeAuth = ()=>{
  return(
    <main>
      <FeaturedSection />
    </main>
  )
}

export default HomeAuth