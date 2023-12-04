'use client'
import courseService, { CourseType } from "@/services/courseService"
import { useEffect, useState } from "react"

export default function Page({ params }: { params: { id: string } }) {
  const [course, setCourse] = useState<CourseType>()

  const getCourse = async ()=>{
    const res = await courseService.getEpisodes(params.id)

    if(res.status === 200){
      setCourse(res.data)
    }
  }

  useEffect(()=>{
    getCourse()
  },[params.id])
  return(
    <div>
      <p>{course?.name}</p>
    </div>
  ) 
}