"use client";
import { Footer } from "@/components/common/footer";
import styles from "../../styles/profile.module.scss";
import { HeaderAuth } from "@/components/common/headerAuth";
import { Container, Row } from "reactstrap";
import Dashboard from "@/components/profile/dashboard";
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
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <HeaderAuth />
      </div>
      <Container className={styles.gridContainer}>
        <p className={styles.title}>Minha conta</p>
        <Row className="pt-3 pb-5">
          <Dashboard />

          {children}
        </Row>
      </Container>
      <Footer />
    </main>
  );
}
