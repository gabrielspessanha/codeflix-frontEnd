'use client'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import styles from '../../../styles/profile.module.scss';

const UserForm = () =>{
  return(
    <Form className={styles.form}>
      <div className={styles.formName}>
        <p className={styles.nameAbbreviation}>NT</p>
        <p className={styles.userName}>NAME TEST</p>
      </div>

      <div className={styles.memberTime}>
        <img 
          src="/profile/iconUserAccount.svg" 
          alt="iconProfile" 
          className={styles.memberTimeImg}
        />
        <p className={styles.memberTimeText}>
          Menbro desde <br/> 23 de feveireiro de 2003
        </p>
      </div>

      <hr />

      <div className={styles.inputFlexDiv}>
        <FormGroup>
          <Label className={styles.label}  for='firstName'>NOME</Label>
          <Input 
            name='firstName'
            type='text'
            id='firstName'
            placeholder='Digite o seu primeiro nome'
            required
            maxLength={20}
            className={styles.inputFlex}
            value={'name'}
          />
        </FormGroup>

        <FormGroup>
          <Label className={styles.label}  for='lastName'>NOME</Label>
          <Input 
            name='lastName'
            type='text'
            id='lastName'
            placeholder='Digite o seu último nome'
            required
            maxLength={20}
            className={styles.inputFlex}
            value={'test'}
          />
        </FormGroup>
      </div>

      <div className={styles.inputNormalDiv}>
        <FormGroup>
          <Label className={styles.label}  for='phone'>WHATSAPP / TELEGRAM</Label>
          <Input 
            name='phone'
            type='tel'
            id='phone'
            placeholder='(xx) 9xxxxx-xxxx'
            required
            className={styles.input}
            value={'+55 (21) 999999-9999'}
          />
        </FormGroup>

        <FormGroup>
          <Label className={styles.label} for='email'>E-MAIL</Label>
          <Input 
            name='email'
            type='email'
            id='email'
            placeholder='Digite seu email'
            required
            className={styles.input}
            value={'teste@gmail.com'}
          />
        </FormGroup>

        <Button className={styles.formBtn} outline type="submit">
          Salvar Alterações
        </Button>
      </div>
      
    </Form>
  )
}

export default UserForm