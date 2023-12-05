"use client";
import { useSearchParams } from "next/navigation";
import styles from "../../../../styles/episodePlayer.module.scss";
import { HeaderGeneric } from "@/components/common/headerGeneric";
import { useEffect, useRef, useState } from "react";
import courseService, { CourseType } from "@/services/courseService";
import Loading from "@/app/loading";
import { Button, Container } from "reactstrap";
import ReactPlayer from "react-player";
import Link from "next/link";
import watchEpisodeService from "@/services/episodeService";

const EpisodePlayer = ({ params }: { params: { id: string } }) => {
  const searchParams = useSearchParams();
  const [course, setCourse] = useState<CourseType>();
  const [isReady, setIsReady] = useState(false);
  const searchCourseId = searchParams.get("courseId");
  const searchEpisodeId = searchParams.get("episodeId");

  const courseId = parseFloat(searchCourseId!);
  const episodeId = parseFloat(searchEpisodeId!);

  const episodeOrder = parseFloat(params.id);

  const [getEpisodeTime, setGetEpisodeTime] = useState(0);
  const [episodeTime, setEpisodeTime] = useState(0);

  const playerRef = useRef<ReactPlayer>(null);

  const handleGetEpisodeTime = async () => {
    const res = await watchEpisodeService.getWatchTime(episodeId);
    if (res.data !== null) {
      setGetEpisodeTime(res.data.seconds);
    }
  };

  const handleSetPlayerTime = async () => {
    await watchEpisodeService.setWatchTime({
      episodeId,
      seconds: Math.round(episodeTime),
    });
  };

  useEffect(() => {
    handleGetEpisodeTime();
  }, [episodeId]);

  const getCourse = async () => {
    const res = await courseService.getEpisodes(courseId);

    if (res.status === 200) {
      setCourse(res.data);
    }
  };

  useEffect(() => {
    getCourse();
  }, [courseId]);

  const handlePlayerTime = () => {
    playerRef.current?.seekTo(getEpisodeTime);
    setIsReady(true);
  };

  if (course?.episodes === undefined) return <Loading />;

  if (isReady === true) {
    setTimeout(() => {
      handleSetPlayerTime();
    }, 1000 * 3);
  }

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
            ref={playerRef}
            onStart={handlePlayerTime}
            onProgress={(progress) => {
              setEpisodeTime(progress.playedSeconds);
            }}
          />
        )}
        <div className={styles.episodeButtonDiv}>
          <Button
            className={styles.episodeButton}
            disabled={episodeOrder === 0 ? true : false}
          >
            {" "}
            <Link
              href={`/course/episode/${episodeOrder - 1}?courseId=${
                course.id
              }&episodeId=${episodeId}`}
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
              href={`/course/episode/${episodeOrder + 1}?courseId=${
                course.id
              }&episodeId=${episodeId}`}
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
