import FavoriteCategory from '@/components/homeAuth/favoriteCategory'
import FeaturedCategory from '@/components/homeAuth/featuredCategory'
import FeaturedSection from '@/components/homeAuth/featuresSection'
import ListCategories from '@/components/homeAuth/listCategories'
import NewestCategory from '@/components/homeAuth/newestCategory'

const HomeAuth = ()=>{
  return(
    <main>
      <FeaturedSection />
      <NewestCategory />
      <FavoriteCategory />
      <FeaturedCategory />
      <ListCategories />
    </main>
  )
}

export default HomeAuth