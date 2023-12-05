"use client";
import { useSearchParams } from "next/navigation";
import styles from "../../../../styles/episodePlayer.module.scss";
import { HeaderGeneric } from "@/components/common/headerGeneric";
import { useEffect, useState } from "react";
import courseService, { CourseType } from "@/services/courseService";
import Loading from "@/app/loading";
import { Button, Container } from "reactstrap";
import ReactPlayer from "react-player";
import Link from "next/link";

const EpisodePlayer = ({ params }: { params: { id: string } }) => {
  const searchParams = useSearchParams();
  const [course, setCourse] = useState<CourseType>();
  const search = searchParams.get("courseId");
  const courseId = parseFloat(search!);
  const episodeOrder = parseFloat(params.id);

  const getCourse = async () => {
    const res = await courseService.getEpisodes(courseId);

    if (res.status === 200) {
      setCourse(res.data);
    }
  };

  useEffect(() => {
    getCourse();
  }, [courseId]);
  if (course?.episodes === undefined) return <Loading />;

  return (
    <main>
      <HeaderGeneric
        logoUrl="/home"
        btnContent={"Voltar para o curso"}
        btnUrl={`/course/${courseId}`}
      />
      <Container className="d-flex flex-column align-items-center gap-3 pt-3">
        <p className={styles.episodeTitle}>
          {course.episodes[episodeOrder].name}
        </p>
        {typeof window === "undefined" ? null : (
          <ReactPlayer
            className={styles.player}
            url={`${process.env.NEXT_PUBLIC_BASEURL}/episodes/stream?videoUrl=${
              course.episodes[episodeOrder].videoUrl
            }&token=${sessionStorage.getItem("codeflix-token")}`}
            controls
          />
        )}
        <div className={styles.episodeButtonDiv}>
          <Button
            className={styles.episodeButton}
            disabled={episodeOrder === 0 ? true : false}
          >
            {" "}
            <Link
              href={`/course/episode/${episodeOrder - 1}?courseId=${course.id}`}
            >
              <img
                src="/episode/iconArrowLeft.svg"
                alt="setaEsquerda"
                className={styles.arrowImg}
              />
            </Link>
          </Button>

          <Button
            className={styles.episodeButton}
            disabled={
              episodeOrder + 1 === course.episodes.length ? true : false
            }
          >
            <Link
              href={`/course/episode/${episodeOrder + 1}?courseId=${course.id}`}
            >
              <img
                src="/episode/iconArrowRight.svg"
                alt="setaDireita"
                className={styles.arrowImg}
              />
            </Link>
          </Button>
        </div>
        <p className="text-center py-4">
          {course.episodes[episodeOrder].synopsis}
        </p>
      </Container>
    </main>
  );
};

export default EpisodePlayer;
