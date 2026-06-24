// const Hello = (props) => {
//   console.log(props);
//   return (
//     <div>
//       <p>
//         Hello {props.name}, you are {props.age} years old
//       </p>
//     </div>
//   );
// };

const App = () => {
  // const now = new Date();
  // const a = 10;
  // const b = 20;
  // console.log(now, a + b);

  // const name = "Fernando";
  // const age = 23;

  const friends = ["Peter", "Martha"];

  return (
    <div>
      <p>{friends}</p>
    </div>
  );
};

export default App;
