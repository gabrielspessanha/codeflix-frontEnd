import { Metadata } from "next";
import styles from "../../styles/registerLogin.module.scss";
import Head from "next/head";
import { HeaderGeneric } from "@/components/common/headerGeneric";

export const metadata: Metadata = {
  title: 'Codeflix - Registro',
}

const Register = ()=>{
  
  return(
    <>
      <main>
        <HeaderGeneric logoUrl="/" btnUrl="/login" btnContent="Quero fazer login" />
      </main>
    </>
  )
    
}

export default Register;