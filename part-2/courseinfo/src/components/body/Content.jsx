import { Part } from "./";

const Content = ({ parts }) => {
  console.log("Todos los cursos: ", parts);
  return (
    <div>
      {parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
    </div>
  );
};

export default Content;
