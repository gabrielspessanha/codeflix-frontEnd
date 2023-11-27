'use client'
import Link from "next/link";
import { Button } from "reactstrap";
import styles from './styles.module.scss';

export function BtnRegister(){
  return(
    <Link href="/register">
          <Button outline color='light' className={styles.slideSectionBtn}>
            Se cadastre para acessar!
          </Button>
    </Link>
  )
}