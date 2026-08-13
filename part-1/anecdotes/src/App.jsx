import { useState } from "react";

const AnecdoteOfTheDay = ({ selected, anecdotes, votes }) => {
  return (
    <div>
      <h2>Anecdote of the Day</h2>
      <i>'{anecdotes[selected]}'</i>
      <p>Has {votes[selected]} votes</p>
    </div>
  );
};

const AnecdoteWithMoreVotes = ({ anecdotes, votes }) => {
  // console.log("Todos los votos: ", votes);
  const mostVotes = votes.indexOf(Math.max(...votes));

  // console.log("Prueba de mayor votos: ", mostVotes);

  return (
    <div>
      <h2>Anecdote with most votes</h2>
      <i>'{anecdotes[mostVotes]}'</i>
      <p>With {votes[mostVotes]} votes</p>
    </div>
  );
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0)); // Crea un arreglo con valores de 0 con la longitud exacta de las anecdotas.

  const randomAnecdote = () => {
    const random = Math.floor(Math.random() * anecdotes.length); // Crea un numero aleatorio no mayor a la longitud del arreglo
    setSelected(random);

    console.log("Estado de los votos: ", votes);
  };

  const addVote = () => {
    const copy = [...votes];
    copy[selected] += 1;
    setVotes(copy);
  };

  return (
    <div>
      <AnecdoteOfTheDay
        selected={selected}
        anecdotes={anecdotes}
        votes={votes}
      />
      <div>
        <button onClick={addVote}>Vote</button>{" "}
        <button onClick={randomAnecdote}>Next anecdote</button>
      </div>
      <AnecdoteWithMoreVotes anecdotes={anecdotes} votes={votes} />
    </div>
  );
};

export default App;
