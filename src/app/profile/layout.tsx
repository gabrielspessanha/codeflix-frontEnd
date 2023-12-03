import { Footer } from "@/components/common/footer"
import { Metadata } from "next/types"
import styles from '../../styles/profile.module.scss';
import { HeaderAuth } from "@/components/common/headerAuth";
import { Container, Row } from "reactstrap";
import Dashboard from "@/components/profile/dashboard";

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
      <Container className={styles.gridContainer}>
        <p className={styles.title}>Minha conta</p>
        <Row className='pt-3 pb-5'>
          <Dashboard />

          {children}
        </Row>
    </Container>
    <Footer />
  </main>
  )
}