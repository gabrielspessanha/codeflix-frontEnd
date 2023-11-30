'use client'
import courseService, { CourseType } from '@/services/courseService';
import styles from './styles.module.scss';
import useSWR from 'swr';
import { HeaderAuth } from '@/components/common/headerAuth';
import { Button, Container } from 'reactstrap';
import Link from 'next/link';


const FeaturedSection = () => {
  
  const {data, error} = useSWR('/featured', courseService.getFeaturedCourses, {
    revalidateOnFocus: false,
    refreshInterval: 30000
  })

  if (error) return <div>falhou em carregar</div>
  if (!data) return <div>carregando...</div>

  return (
    <>
      {data.data.map((course: CourseType)=>{
        return (
          <div style={{
              backgroundImage: `linear-gradient(to bottom, #6666661a, #151515), url(${process.env.NEXT_PUBLIC_BASEURL}/${course.thumbnailUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: "480px"
            }} key={course.id}>
            <HeaderAuth />
            <Container className='pt-4'>
              <p className={styles.title}>{course.name}</p>
              <p className={styles.description}>{course.synopsis}</p>
              <Link href={`/courses/${course.id}`}>
                <Button outline color='light' className={styles.button}>
                  ACESSE AGORA!
                  <img 
                    src="/buttonPlay.svg" 
                    alt="buttonImg"
                    className={styles.buttonImg}
                  />
                </Button>
              </Link>
            </Container>
          </div>
        )
      })[0]}
    </>
  )
}

export default FeaturedSection