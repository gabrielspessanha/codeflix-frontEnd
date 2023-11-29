'use client'
import { HeaderGeneric } from '@/components/common/headerGeneric';
import styles from '../../styles/registerLogin.module.scss';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import { Footer } from '@/components/common/footer';
import { useRouter, useSearchParams } from 'next/navigation';
import { FormEvent, useEffect, useState } from 'react';
import ToastComponent from '@/components/common/toast';

const Login = ()=>{
  const router = useRouter()
  const [toastColor, setToastColor] = useState("")
  const [toastIsOpen, setToastIsOpen ] = useState(false)
  const [toastMessage, setToastMessage ] = useState("")
  const searchParams= useSearchParams()

  useEffect(()=>{
    if(sessionStorage.getItem('codeflix-token')){
      router.push('/home')
    }
  },[])
  
  useEffect(()=>{
    const registerSucess = searchParams.get("registred")
    if(registerSucess === "true"){
      setToastColor("bg-success")
      setToastIsOpen(true)
      setTimeout(()=>{
        setToastIsOpen(false)
      }, 1000 * 3)
      setToastMessage("Cadastro feito com sucesso")
    }
  },[searchParams.get("registred")])

  const handleLogin = async (event: FormEvent<HTMLFormElement>) =>{
    event.preventDefault();

    const formData = new FormData(event.currentTarget)
    const email = formData.get("email")!.toString();
    const password = formData.get("password")!.toString();
    const params = { email, password }
    
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params)
    }).then(res => res.json())

    if(response.login === false){
      setToastColor("bg-danger")
      setToastIsOpen(true)
      setTimeout(()=>{
        setToastIsOpen(false)
      }, 1000 * 3)
      setToastMessage(response.error)
    }else{
      sessionStorage.setItem('codeflix-token', response.token)
      router.push('/home')
    }
  }

  return(
    <main className={styles.main}>
      <HeaderGeneric logoUrl='/' btnUrl='/register' btnContent='Quero fazer parte'/>

      <Container className='py-5' >
        <p className={styles.formTitle}>Bem vindo(a) de volta!</p>
        <Form className={styles.form} onSubmit={handleLogin}>
          <p className='text-center'>
            <strong>Bem-vindo(a) ao CodeFlix</strong>
          </p>

          <FormGroup>
            <Label for="email" className={styles.label}>E-MAIL</Label>
            <Input 
              id='email' 
              name='email' 
              type='email' 
              placeholder='Qual o seu email?' 
              required 
              className={styles.input}
            />
          </FormGroup>

          <FormGroup>
            <Label 
              for="password" className={styles.label}>SENHA</Label>
            <Input 
              id='password' 
              name='password' 
              type='password' 
              placeholder='Digite a sua senha' 
              required 
              className={styles.input}
            />
          </FormGroup>

          <Button type='submit' outline className={styles.formBtn}>
            ENTRAR
          </Button>
        </Form>
        <ToastComponent 
            color={toastColor}
            isOpen={toastIsOpen} 
            message={toastMessage} 
          />
      </Container>
      <Footer />
    </main>
  )
}
export default Login 