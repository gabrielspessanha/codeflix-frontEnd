'use client'
import courseService, { CourseType } from "@/services/courseService"
import { useEffect, useState } from "react"
import { Button, Container } from "reactstrap"
import styles from '../../../styles/course.module.scss';
import EpisodeList from "@/components/episodeList";

export default function Page({ params }: { params: { id: string } }) {
  const [course, setCourse] = useState<CourseType>()
  const [liked, setLiked] = useState(false)
  const [favorited, setFavorited] = useState(false)


  const getCourse = async ()=>{
    if (typeof params.id !== 'string') return
    const res = await courseService.getEpisodes(params.id)

    
    if(res.status === 200){
      setCourse(res.data)
      setLiked(res.data.liked)
      setFavorited(res.data.favorited)
      console.log(liked , favorited)
    }
  }
  useEffect(()=>{
    getCourse()
  },[params.id])

  const handleLikeCourse = async ()=>{
    if(liked === true){
      await courseService.removeLike(params.id)
      setLiked(false)
    }else{
      await courseService.like(params.id)
      setLiked(true)
    }
  }

  const handleFavCourse = async ()=>{
    if( favorited === true){
      await courseService.removeFav(params.id)
      setFavorited(false)
    }else{
      await courseService.addToFav(params.id)
      setFavorited(true)
    }
  }
  
  return(
    <>
    <div style={{
      backgroundImage : `linear-gradient(to bottom, #6666661a, #151515), url(${process.env.NEXT_PUBLIC_BASEURL}/${course?.thumbnailUrl})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '550px'
    }}>
      
    </div>
    <Container className={styles.courseInfo}>
      <p className={styles.courseTitle}>{course?.name}</p>
      <p className={styles.courseDescription}>{course?.synopsis}</p>
      <Button 
        outline 
        className={styles.courseBtn} 
        disabled={course?.episodes?.length === 0? true : false}>
        ASSISTIR AGORA!
        <img 
          src="/buttonPlay.svg" 
          alt="buttonImg"
          className={styles.buttonImg}
        />
      </Button>
      <div className={styles.interactions}>
          {liked === true ? (
            <img 
              src='/course/iconLiked.svg'
              alt="likeImage" 
              className={styles.interactionsImages}
              onClick={handleLikeCourse}
            />
          ): (
            <img 
              src='/course/iconLike.svg'
              alt="likeImage" 
              className={styles.interactionsImages}
              onClick={handleLikeCourse}
            />
            )
          }
          
          {favorited === true ? (
            <img 
              src='/course/iconFavorited.svg'
              alt="likeImage" 
              className={styles.interactionsImages}
              onClick={handleFavCourse}
            />
          ): (
            <img 
              src='/course/iconAddFav.svg'
              alt="likeImage" 
              className={styles.interactionsImages}
              onClick={handleFavCourse}
            />
            )
          }

      </div>
    </Container>
    <Container className={styles.episodeInfo}>
      <p className={styles.episodeDivision}>EPISÓDIOS</p>
      <p className={styles.episodeLenght}>
        {course?.episodes?.length} episódios
      </p>
      {course?.episodes?.length === 0 ? (
        <p>Sem episódios no momento😔</p>
      ):(
        course?.episodes?.map((episode)=>(
          <EpisodeList key={episode.id} episode={episode} />
         ))
      )}
    </Container>
  </>
  ) 
}