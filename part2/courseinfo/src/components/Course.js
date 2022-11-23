import Header from "./Header";
import Content from "./Content";

function Course({ course }) {
  return (
    <div>
      <Header text={course.name} />
      <Content parts={course.parts} courseId={course.id} />
    </div>
  );
}

export default Course;
