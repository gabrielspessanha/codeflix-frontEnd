'use client'
import { Button, Col} from "reactstrap"
import styles from '../../../styles/profile.module.scss';
import { useRouter, useSearchParams } from "next/navigation";

const Dashboard = () => {
  const searchParams = useSearchParams()

  const search = searchParams.get('value')

  return (
    <Col md={4} className={styles.btnColumn}>
      <Button 
        className={styles.renderForm} 
        href="/profile?value=1"
        style={{color: search === '1'? '#FF0044' : 'white'}}
      >
        DADOS PESSOAIS
      </Button>
      <Button 
        className={styles.renderForm} 
        href="/profile/password?value=2"
        style={{color: search === '2'? '#FF0044' : 'white'}}
      >
        SENHA
      </Button>
    </Col>
  )       
}

export default Dashboard