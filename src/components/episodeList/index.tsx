import { CourseType, EpisodeType } from "@/services/courseService";
import styles from "./styles.module.scss";
import Link from "next/link";

interface props {
  episode: EpisodeType;
  course: CourseType;
}

const EpisodeList = ({ episode, course }: props) => {
  const handleSecondsToMin = (totalSeconds: number) => {
    const minutes = Math.floor(totalSeconds / 60);

    const seconds = totalSeconds % 60;

    function toString(num: number) {
      return num.toString().padStart(2, "0");
    }

    const result = `${toString(minutes)}:${toString(seconds)}`;

    return result;
  };
  return (
    <Link
      href={`/course/episode/${episode.order - 1}?courseId=${
        course.id
      }&episodeId=${episode.id}`}
    >
      <div className={styles.episodeCard}>
        <div className={styles.episodeOrderTime}>
          <p className={styles.episodeOrder}>Episodio N° {episode.order}</p>
          <p className={styles.episodeTime}>
            {handleSecondsToMin(episode.secondsLong)}
          </p>
        </div>

        <div className={styles.episodeTitleDescription}>
          <p className={styles.episodeTitle}>
            {episode.name}
            {episode.order}
          </p>
          <p className={styles.episodeDescription}>{episode.synopsis}</p>
        </div>
      </div>
    </Link>
  );
};

export default EpisodeList;
