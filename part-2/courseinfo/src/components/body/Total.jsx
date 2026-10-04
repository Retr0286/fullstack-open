const Total = ({ parts }) => {
  // console.log("Exercises: ", parts);
  const total = parts.reduce((acumulador, elementoActual) => {
    return acumulador + elementoActual.exercises;
  }, 0);

  return <b>Total of {total} exercises</b>;
};

export default Total;
