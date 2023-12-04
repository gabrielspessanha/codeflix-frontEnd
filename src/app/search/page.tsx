'use client'
import { HeaderAuth } from '@/components/common/headerAuth'
import courseService, { CourseType } from '@/services/courseService'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import styles from '../../styles/search.module.scss'
import { Container } from 'reactstrap'
import SearchCard from '@/components/searchCard'

const Search = () => {
  const searchParams = useSearchParams()
  const searchName: any = searchParams.get('name')
  const [searchResult, setSearchResult] = useState<CourseType[]>([])
  
  const searchCourses = async ()=>{
      const res = await courseService.getSearch(searchName)
      setSearchResult(res.data.Courses)
  };
  useEffect( ()=> {
    searchCourses()
  }, [searchName])

  return (
    <>
      {searchResult.length >= 1 ?
      <Container className='d-flex flex-wrap justify-content-center gap-5 py-4'>
        {searchResult?.map((course)=>(
          <SearchCard key={course.id} course={course} />
        ))}
      </Container>
      :(
        <p className={styles.noSearchText}>Nenhum resultado encontrado</p>
      )}
    </>
  )
}
export default Search
