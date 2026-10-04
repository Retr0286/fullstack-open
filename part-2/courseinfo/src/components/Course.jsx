import { Header, Content, Total } from "./body";

const Course = ({ courses }) => {
  console.log("Todos los cursos:", courses);
  return (
    <div>
      <h1>Web development curriculum</h1>

      {/* Cuerpo de cada curso */}
      {courses.map((course) => (
        <div key={course.id}>
          <Header header={course.name} />
          <Content parts={course.parts} />
          <br />
          <Total parts={course.parts} />
        </div>
      ))}
    </div>
  );
};

export default Course;
