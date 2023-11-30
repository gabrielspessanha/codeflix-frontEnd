import { Metadata } from 'next/types';
import { HeaderAuth } from '@/components/common/headerAuth';
import Dashboard from '@/components/profile/dashboard';
import { Footer } from '@/components/common/footer';
import styles from '../../styles/profile.module.scss';

export const metadata: Metadata = {
  title: 'Codeflix - Meus dados',
}
const Profile = () => {
  return (
    <main>
      <div className={styles.header}>
        <HeaderAuth />
      </div>
      
      <Dashboard />

      <div className={styles.footer}>
        <Footer />
      </div>
    </main>
  )
}

export default Profile