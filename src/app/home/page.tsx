import { HeaderAuth } from '@/components/common/headerAuth'
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Codeflix - Home',
}
 
const HomeAuth = ()=>{
  return(
    <main>
      <HeaderAuth />
    </main>
  )
}

export default HomeAuth