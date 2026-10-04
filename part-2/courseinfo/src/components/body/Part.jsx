const Part = ({ part }) => {
  console.log("Parte individual:", part);
  return (
    <li>
      {part.name} {part.exercises}
    </li>
  );
};

export default Part;
