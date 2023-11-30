'use client'
import useSWR from 'swr';
import styles from '../../../styles/sildeCategory.module.scss';
import courseService from '@/services/courseService';
import SlideComponent from '@/components/common/slideComponent';

const FavoriteCategory = () => {
  const {data, error} = useSWR('/favorites', courseService.getFavCourses)

  if (error) return <div>falhou em carregar</div>
  if (!data) return <div>carregando...</div>
  
  return (
    <div>
      <p className={styles.titleCategory}>Minha lista: </p>
      {data.data.courses.lenght >= 1 ? (
        <SlideComponent course={data.data.courses}/>
      ): (
        <p className='text-center pt-3 h5'>
          <strong>Você não tem nenhum curso na lista</strong>
        </p>
      )}
    </div>
  )
}

export default FavoriteCategory