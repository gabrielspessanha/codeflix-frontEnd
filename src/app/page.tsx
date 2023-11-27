import styles from '../styles/HomeNoAuth.module.scss'
import HeaderNoAuth from '../components/homeNoAuth/headerNoAuth'
import PresentationSection from '@/components/homeNoAuth/presentationSection'
import CardsSection from '@/components/homeNoAuth/cardsSection'
import SlideSection from '@/components/homeNoAuth/slideSection'
import api from '@/services/api'
import courseService from '@/services/courseService'
import { Footer } from '@/components/common/footer'


export const revalidate = 3600 * 24

const HomeNoAuth = async () =>{
  
  return (
    <>
      <main>
        <div className={styles.sectionBackground}>
          <HeaderNoAuth />
          <PresentationSection />
        </div>
        <CardsSection />
        <SlideSection />
        <Footer />
      </main>
    </>
  )
};

export default HomeNoAuth