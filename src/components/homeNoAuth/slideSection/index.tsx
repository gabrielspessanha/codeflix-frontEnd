import courseService, { CourseType } from '@/services/courseService';
import styles from './styles.module.scss';
import { Button, Container } from 'reactstrap';
import SlideComponent from '@/components/common/slideComponent';
import Link from 'next/link';
import { BtnRegister } from '../btnRegister';

interface Props {
  newestCourses: CourseType[];
}

const SlideSection = async () =>{
  const response = await courseService.getNewestCourses()
  const course = response?.data

  if(course){
    return(
      <>
        <Container className="d-flex flex-column align-items-center py-5">
          <p className={styles.sectionTitle}>AULAS JÁ DISPONIVEIS</p>
          <SlideComponent course={course} />
          <BtnRegister />
        </Container>
      </>
    )
  }else{
      <>
        <Container className="d-flex flex-column align-items-center py-5">
          <p className={styles.sectionTitle}>SEM AULAS DISPONIVEIS</p>
        </Container>
      </>
  }
  
}

export default SlideSection