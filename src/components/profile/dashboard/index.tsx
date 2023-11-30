'use client'
import { Button, Col, Container, Row } from "reactstrap"
import styles from '../../../styles/profile.module.scss';
import UserForm from "../user";

const Dashboard = () => {
  return (
    <Container className='py-5'>
        <p className={styles.title}>Minha conta</p>
        <Row className='pt-3 pb-5'>
          <Col md={4} className={styles.btnColumn}>
            <Button className={styles.renderForm}>DADOS PESSOAIS</Button>
            <Button className={styles.renderForm}>SENHA</Button>
          </Col>

          <Col md>
            <UserForm />
          </Col>
        </Row>
        
    </Container>
  )
}

export default Dashboard