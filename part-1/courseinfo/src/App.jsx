const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Part = (props) => {
  console.log("Part: ", props.data);
  return (
    <p>
      {props.data.name} {props.data.exercises}
    </p>
  );
};

const Content = (props) => {
  console.log("Content: ", props.content);
  return (
    <>
      <Part data={props.content[0]} />
      <Part data={props.content[1]} />
      <Part data={props.content[2]} />
    </>
  );
};

const Total = (props) => {
  // console.log(props.exercises);
  const total =
    props.exercises[0].exercises +
    props.exercises[1].exercises +
    props.exercises[2].exercises;
  return <p>Number of exercises: {total}</p>;
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <>
      <Header course={course.name} />
      <Content content={course.parts} />
      <Total exercises={course.parts} />
    </>
  );
};

export default App;
