import FavoriteCategory from '@/components/homeAuth/favoriteCategory'
import FeaturedCategory from '@/components/homeAuth/featuredCategory'
import FeaturedSection from '@/components/homeAuth/featuresSection'
import NewestCategory from '@/components/homeAuth/newestCategory'
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Codeflix - Home',
}
 
const HomeAuth = ()=>{
  return(
    <main>
      <FeaturedSection />
      <NewestCategory />
      <FavoriteCategory />
      <FeaturedCategory />
    </main>
  )
}

export default HomeAuth