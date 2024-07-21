"use client";
import courseService, { CourseType } from "@/services/courseService";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "../../styles/search.module.scss";
import { Container } from "reactstrap";
import SearchCard from "@/components/searchCard";
import Loading from "../loading";

const Search = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();
  const searchName: any = searchParams.get("name");
  const [searchResult, setSearchResult] = useState<CourseType[]>([]);

  const searchCourses = async () => {
    const res = await courseService.getSearch(searchName);
    setSearchResult(res.data.Courses);
  };

  useEffect(() => {

    if (!sessionStorage.getItem("codeflix-token")) {
      router.push("/login");
    } else {
      setLoading(false);
    }
  }, []);
  
  useEffect(() => {
    searchCourses();
  }, [searchName]);

  if (loading) {
    return <Loading />;
  }


  return (
    <>
      {searchResult.length >= 1 ? (
        <div className={styles.searchContainer}>
          <Container className="d-flex flex-wrap justify-content-center gap-5 py-4">
            {searchResult?.map((course) => (
              <SearchCard key={course.id} course={course} />
            ))}
          </Container>
        </div>
      ) : (
        <div className={styles.searchContainer}>
          <p className={styles.noSearchText}>Nenhum resultado encontrado</p>
        </div>
      )}
    </>
  );
};
export default Search;
