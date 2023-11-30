import Loader from "@/components/common/loader";
import styles from '../styles/loading.module.scss';

export default function Loading() {
  return <main className={styles.containerLoader}><Loader /></main>
}