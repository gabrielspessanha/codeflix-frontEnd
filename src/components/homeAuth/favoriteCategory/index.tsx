'use client'
import useSWR from 'swr';
import styles from '../../../styles/sildeCategory.module.scss';
import courseService from '@/services/courseService';
import SlideComponent from '@/components/common/slideComponent';
import Loader from '@/components/common/loader';

const FavoriteCategory = () => {
  const {data, error} = useSWR('/favorites', courseService.getFavCourses)

  if (error) return <div>falhou em carregar</div>
  if (!data) return <Loader />
  console.log(data.data)
  return (
    <div>
      <p className={styles.titleCategory}>MINHA LISTA: </p>
      {data.data.courses.length >= 1 ? (
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