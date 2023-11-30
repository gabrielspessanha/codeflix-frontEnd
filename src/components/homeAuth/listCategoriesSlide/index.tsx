import SlideComponent from "@/components/common/slideComponent";
import styles from '../../../styles/sildeCategory.module.scss';
import categoriesService from "@/services/categoriesService"
import useSWR from "swr"

interface props {
  categoryId: number;
  categoryName: string;

}

const ListCategoriesSlide = ({categoryId, categoryName}: props) => {

  const {data, error} = useSWR(`/categoriesCourses/${categoryId}`, ()=> categoriesService.getCourses(categoryId))

  if (error) return <div>falhou em carregar</div>
  if (!data) return <div>carregando...</div>

  return (
    <>
      <p className={styles.titleCategory}>{categoryName}</p>
      <SlideComponent course={data.data.courses} />
    </>
    
   
  )
}

export default ListCategoriesSlide