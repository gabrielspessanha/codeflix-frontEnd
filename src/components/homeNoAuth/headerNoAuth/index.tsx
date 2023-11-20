'use client'
import Link from 'next/link'
import styles  from './styles.module.scss'
import { Container, Button} from 'reactstrap'

const HeaderNoAuth = ()=>{
  return (
    <>
      <div className={styles.ctaSection}>
        <img src="/homeNoAuth/logoCta.png" alt="logoCta" className={styles.imgCta} />
        <p>Se cadastre para ter acesso aos cursos</p>
        <img src="/homeNoAuth/logoCta.png" alt="logoCta" className={styles.imgCta} />
      </div>
      <Container className={styles.nav}>
        <img 
          src='/codeflix.png' 
          alt='logoCodeflix' 
          className={styles.imgLogoNav} 
        />
        <div>
          <Link href="/login">
            <Button outline className={styles.navBtn}>
              Entrar
            </Button>
          </Link>

          <Link href="/register">
            <Button outline className={styles.navBtn}>
              Me inscrever
            </Button>
          </Link>

        </div>
      </Container>
    </>
  )
  
}

export default HeaderNoAuth