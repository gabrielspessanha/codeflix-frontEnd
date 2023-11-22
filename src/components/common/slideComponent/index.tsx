import { CourseType } from '@/services/courseService';
// @ts-ignore
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import SlideCard from '../slideCard';

interface Props {
  course: CourseType[];
}

const SlideComponent = ({ course }: Props) => {
  return (
    <div>
      <Splide options={{
        type: "loop",
        perPage: 4,
        perMove: 1,
        pagination: false
      }}>
        {course?.map((course) => (
          <SplideSlide key={course.id}>
            <SlideCard course={course} />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default SlideComponent;