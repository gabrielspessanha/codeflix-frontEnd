'use client'
import styles from "../../styles/registerLogin.module.scss";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import { FormEvent, useEffect, useState } from 'react'
import { useRouter } from "next/navigation";
import ToastComponent from "@/components/common/toast";

const Register = ()=>{
  const router = useRouter()
  const [toastIsOpen, setToastIsOpen ] = useState(false)
  const [toastMessage, setToastMessage ] = useState("")

  useEffect(()=>{
    if(sessionStorage.getItem('codeflix-token')){
      router.push('/home')
    }
  },[])

  const handleRegister = async (event: FormEvent<HTMLFormElement>) =>{
    
    event.preventDefault();

    const formData = new FormData(event.currentTarget)
    const firstName = formData.get("firstName")!.toString()
    const lastName = formData.get("lastName")!.toString()
    const phone = formData.get("phone")!.toString()
    const birth = formData.get("birth")!.toString()
    const email = formData.get("email")!.toString()
    const password = formData.get("password")!.toString()
    const confirmPassword = formData.get("confirmPassword")!.toString()

    const params = {
      firstName,
      lastName,
      phone,
      birth,
      email,
      password,
    }

    if(password != confirmPassword){
      setToastIsOpen(true)
      setTimeout(()=>{
        setToastIsOpen(false)
      }, 1000 * 3)
      setToastMessage("Senha e confirmação diferentes")
      return
    }
    const res = await fetch("http://localhost:3000/auth/register",{
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(params)
    })

    const{ status } = await res
    const data = await res.json()
    
    if(status === 201){
      router.push("/login?registred=true")
    }else{
      setToastIsOpen(true)
      setTimeout(()=>{
        setToastIsOpen(false)
      }, 1000 * 3)
      setToastMessage(data.message)
    }
    
  }

  return(
       <>
          <Container className="py-5">
            <p className={styles.formTitle}>
              <strong>Bem vindo(a) ao Codeflix</strong>
            </p>
            <Form className={styles.form} onSubmit={handleRegister}>
              <p className="text-center"><strong>Faça a sua conta!</strong></p>
              <FormGroup>
                <Label for="firstName" className={styles.label}>NOME</Label>
                <Input 
                  id="firstName" 
                  name="firstName" 
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
                <Label for="confirmPassword" className={styles.label}>CONFIRME SUA SENHA</Label>
                <Input 
                  id="confirmPassword" 
                  name="confirmPassword" 
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
          <ToastComponent 
            color="bg-danger" 
            isOpen={toastIsOpen} 
            message={toastMessage} 
          />
        </>
      )
    
}

export default Register;