'use client'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import styles from '../../../styles/profile.module.scss';

const Password = () => {
  return (
    <Form className={styles.form}>
      <div className={styles.inputNormalDiv}>
        <FormGroup>
          <Label className={styles.label} for="currentPassword">SENHA ATUAL</Label>
          <Input 
            name="currentPassword"
            type="password"
            id="currentPassword"
            placeholder="*********"
            required
            minLength={6}
            maxLength={12}
            className={styles.input}
          />
        </FormGroup>
      </div>

      <div className={styles.inputFlexDiv}>
        <FormGroup>
          <Label className={styles.label} for="newPassword">NOVA SENHA</Label>
          <Input 
            name="newPassword"
            type="password"
            id="newPassword"
            placeholder="*********"
            required
            minLength={6}
            maxLength={12}
            className={styles.inputFlex}
          />
        </FormGroup>

        <FormGroup>
          <Label className={styles.label} for="confirmPassword">CONFIRMAR NOVA SENHA</Label>
          <Input 
            name="confirmPassword"
            type="password"
            id="confirmPassword"
            placeholder="*********"
            required
            minLength={6}
            maxLength={12}
            className={styles.inputFlex}
          />
        </FormGroup>
      </div>
      <Button className={styles.formBtn} outline>
          Salvar Alterações
        </Button>
    </Form>
  )
}

export default Password