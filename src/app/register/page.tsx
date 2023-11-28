'use client'
import { Metadata } from "next";
import styles from "../../styles/registerLogin.module.scss";
import { HeaderGeneric } from "@/components/common/headerGeneric";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import { Footer } from "@/components/common/footer";


const Register = ()=>{
  
  return(
    <>
        <main className={styles.main}>
          <HeaderGeneric 
            logoUrl="/" 
            btnUrl="/login" 
            btnContent="Quero fazer login" 
          />
          <Container className="py-5">
            <p className={styles.formTitle}>
              <strong>Bem vindo(a) ao Codeflix</strong>
            </p>
            <Form className={styles.form}>
              <p className="text-center"><strong>Faça a sua conta!</strong></p>
              <FormGroup>
                <Label for="firstName" className={styles.label}>NOME</Label>
                <Input 
                  id="firstName" 
                  name="fisrtName" 
                  type="text" 
                  placeholder="Digite seu nome" 
                  required
                  maxLength={20}
                  className={styles.inputName}
                />
              </FormGroup>

              <FormGroup>
                <Label for="lastName" className={styles.label}>SOBRENOME</Label>
                <Input 
                  id="lastName" 
                  name="lastName" 
                  type="text" 
                  placeholder="Digite seu sobrenome" 
                  required
                  maxLength={20}
                  className={styles.inputName}
                />
              </FormGroup>

              <FormGroup>
                <Label for="phone" className={styles.label}>WHATSAPP / TELEGRAM</Label>
                <Input 
                  id="phone" 
                  name="phone" 
                  type="tel" 
                  placeholder="(xx) 9xxxx-xxxx"
                  data-mask="[-]+55 (00) 00000-0000" 
                  required
                  className={styles.input}
                />
              </FormGroup>

              <FormGroup>
                <Label for="email" className={styles.label}>E-MAIL</Label>
                <Input 
                  id="email" 
                  name="email" 
                  type="email" 
                  placeholder="Digite o seu email" 
                  required
                  className={styles.input}
                />
              </FormGroup>

              <FormGroup>
                <Label for="birth" className={styles.label}>DATA DE NASCIMENTO</Label>
                <Input 
                  id="birth" 
                  name="birth" 
                  type="date"
                  min="1930-01-01"
                  max="2023-01-01"
                  required
                  className={styles.input}
                />
              </FormGroup>

              <FormGroup>
                <Label for="password" className={styles.label}>SENHA</Label>
                <Input 
                  id="password" 
                  name="password" 
                  type="password" 
                  placeholder="Digite a sua senha (Min: 6 | Max: 20)"
                  minLength={6}
                  maxLength={20}
                  required
                  className={styles.input}
                />
              </FormGroup>

              <FormGroup>
                <Label for="password" className={styles.label}>CONFIRME SUA SENHA</Label>
                <Input 
                  id="password" 
                  name="password" 
                  type="password" 
                  placeholder="confirme sua senha"
                  minLength={6}
                  maxLength={20}
                  required
                  className={styles.input}
                />
              </FormGroup>
              
              <Button type="submit" outline className={styles.formBtn}>CADASTRAR</Button>

            </Form>
          </Container>
          <Footer />
        </main>
    </>
  )
    
}

export default Register;