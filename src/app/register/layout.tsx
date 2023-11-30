import { Footer } from "@/components/common/footer"
import { HeaderGeneric } from "@/components/common/headerGeneric"
import { Metadata } from "next/types"
import styles from '../../styles/registerLogin.module.scss';

export const metadata: Metadata = {
  title: 'Codeflix - Register',
}
 
export default function layout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <main className={styles.main}>
      <HeaderGeneric 
        logoUrl="/" 
        btnUrl="/login" 
        btnContent="Quero fazer login" 
      />
      {children}
      <Footer />
    </main>
  )
}