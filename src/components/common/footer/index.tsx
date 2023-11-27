import { Container } from "reactstrap"
import styles from './styles.module.scss';

export const Footer = () => {
  return (
    <Container className={ styles.footer}>
      <img 
      src="/codeflix.png" 
      alt="logoFooter" 
      className={styles.footerLogo} 
    />
      <a href="https://gabrielpessanha.netlify.app/" target={"blank"} className={styles.footerLink}>GabrielPessanha.com</a>
    </Container>
  )
}
