'use client'
import { HeaderAuth } from '@/components/common/headerAuth'
import courseService, { CourseType } from '@/services/courseService'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

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
    <main>
      <HeaderAuth />
      {searchResult?.map((course)=>(
        <div key={course.id}>
          <p>{course.name}</p>
        </div>
      ))}
    </main>
  )
}
export default Search
