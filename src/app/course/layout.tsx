"use client";
import styles from "../../styles/course.module.scss";
import { useEffect, useState } from "react";
import Loading from "../loading";
import { useRouter } from "next/navigation";

export default function layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!sessionStorage.getItem("codeflix-token")) {
      router.push("/login");
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <Loading />;
  }

  return <main className={styles.main}>{children}</main>;
}
