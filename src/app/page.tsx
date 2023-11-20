import Head from 'next/head'
import styles from '../styles/HomeNoAuth.module.scss'
import HeaderNoAuth from '../components/homeNoAuth/headerNoAuth'

const HomeNoAuth = ()=>{
  return (
    <>
      <main>
        <HeaderNoAuth />
      </main>
    </>
  )
}

export default HomeNoAuth