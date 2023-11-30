'use client'
import categoriesService, { CategoryType } from '@/services/categoriesService'
import React from 'react'
import useSWR from 'swr'

import styles from '../../../styles/sildeCategory.module.scss';
import ListCategoriesSlide from '../listCategoriesSlide';

const ListCategories = () => {
  const {data, error} = useSWR('/listCategories', categoriesService.getCategories)

  if (error) return <div>falhou em carregar</div>
  if (!data) return <div>carregando...</div>
  
  return (
    <>
      {data.data.categories?.map((category: CategoryType) => (
        <ListCategoriesSlide 
          key={category.id} 
          categoryId={category.id} 
          categoryName={category.name}
        />
      ))}
    </>
  )
}

export default ListCategories