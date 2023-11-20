import Head from 'next/head'
import styles from '../styles/HomeNoAuth.module.scss'
import HeaderNoAuth from '../components/homeNoAuth/headerNoAuth'
import PresentationSection from '@/components/homeNoAuth/presentationSection'

const HomeNoAuth = ()=>{
  return (
    <>
      <main>
        <div className={styles.sectionBackground}>
          <HeaderNoAuth />
          <PresentationSection />
        </div>
      </main>
    </>
  )
}

export default HomeNoAuth