import { HeaderAuth } from "@/components/common/headerAuth"
import { Metadata } from "next/types"
import styles from '../../styles/course.module.scss'
import { Container } from "reactstrap"
import { Footer } from "@/components/common/footer"


export const metadata: Metadata = {
  title: 'Codeflix - Meus Dados',
}
 
export default function layout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <HeaderAuth />
      </div>
      <Container className={styles.courseContainer}>
        {children}
      </Container>
    <Footer />
  </main>
  )
}