'use client'
import { Container, Form, Input } from 'reactstrap';
import styles from './styles.module.scss';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Modal from 'react-modal'
import { useRouter } from 'next/navigation';
import ReactModal from 'react-modal';
import profileService from '@/services/profileService';



export const HeaderAuth = ()=>{
  const [initials, setInitials] = useState("")

  useEffect(()=>{
    ReactModal.setAppElement('#main');
    profileService.fetchCurrent().then((user)=>{
      const firstNameInitial = user.firstName.slice(0,1)
      const lastNameInitial = user.lastName.slice(0,1)
      setInitials(firstNameInitial + lastNameInitial)
    })
  },[])
  
  const router = useRouter()
  const [modalOpen, setModalIsOpen] = useState(false);

  const handleOpenModal = ()=>{
    setModalIsOpen(true)
  };
  const handleCloseModal = ()=>{
    setModalIsOpen(false)
  }
  const handleLogout = ()=>{
    sessionStorage.removeItem('codeflix-token')
    router.push('/')
  }
  return(
    <Container className={styles.nav} id='main'>
      <Link href="/home">
        <img 
          src="/codeflix.png" 
          alt="logoCodeflix"
          className={styles.imgLogoNav}
        />
      </Link>
      <div className='d-flex align-items-center'>
        <Form>
          <Input name='search' type="search" placeholder="Pesquisar" className={styles.input} />
        </Form>
        <img 
          src="/homeAuth/iconSearch.svg"
          alt="lupaHeader" 
          className={styles.searchImg} 
        />
        <p className={styles.userProfile} onClick={handleOpenModal}>
          {initials}
        </p>
      </div>
        <Modal 
          isOpen={modalOpen} 
          onRequestClose={handleCloseModal} 
          shouldCloseOnEsc={true}
          className={styles.modal}
          overlayClassName={styles.overlayModal}
        >
          <Link href='/profile'>
            <p className={styles.modalLink}>Meus Dados</p>
          </Link>
          <p className={styles.modalLink} onClick={handleLogout}>
            Sair
          </p>
      </Modal>
    </Container>
  )
}