import styles from '../../styles/search.module.scss';
import { HeaderAuth } from "@/components/common/headerAuth";
import { Metadata } from 'next/types';
import { Footer } from '@/components/common/footer';

export const metadata: Metadata = {
  title: 'Codeflix - Pesquisa',
}
 
export default function layout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <main className={styles.main}>
      <div className={styles.headerFooterBg}>
        <HeaderAuth />
      </div>

      {children}

      <div className={styles.headerFooterBg}>
        <Footer />
      </div>
    </main>
  )
}