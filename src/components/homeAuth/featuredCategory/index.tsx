'use client'
import courseService from '@/services/courseService'
import React from 'react'
import useSWR from 'swr'
import styles from '../../../styles/sildeCategory.module.scss';
import SlideComponent from '@/components/common/slideComponent';
import Loader from '@/components/common/loader';

const FeaturedCategory = () => {
  const {data, error} = useSWR('/featured', courseService.getFeaturedCourses)

  if (error) return <div>falhou em carregar</div>
  if (!data) return <Loader />
  
  return (
    <div>
      <p className={styles.titleCategory}>EM DESTAQUE</p>
      <SlideComponent course={data.data} />
    </div>
  )
}

export default FeaturedCategory