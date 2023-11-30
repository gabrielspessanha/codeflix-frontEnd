'use client'
import SlideComponent from '@/components/common/slideComponent'
import courseService from '@/services/courseService'
import React from 'react'
import useSWR from 'swr'
import styles from '../../../styles/sildeCategory.module.scss';
import { Container } from 'reactstrap'
import Loader from '@/components/common/loader'

const NewestCategory = () => {
  const {data, error} = useSWR('/newest', courseService.getNewestCourses, {
    revalidateOnFocus: false,
    refreshInterval: 30000
  })

  if (error) return <div>falhou em carregar</div>
  if (!data) return <Loader />
  return (
    <div className={styles.slideComponent}>
      <p className={styles.titleCategory}>LANÇAMENTOS</p>
      <SlideComponent course={data.data} />
    </div>
  )
}

export default NewestCategory