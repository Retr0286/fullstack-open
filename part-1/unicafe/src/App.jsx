import { useState } from "react";

const Button = ({ smashAction, text }) => {
  return <button onClick={smashAction}>{text}</button>;
};

const StaticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}:</td>
      <td>{value}</td>
    </tr>
  );
};

const Statics = ({ good, neutral, bad, all, average, positive }) => {
  // console.log("Statics-------------");
  // console.log("good: ", good);
  // console.log("neutral: ", neutral);
  // console.log("bad: ", bad);
  // console.log("all: ", all);
  // console.log("average: ", average);

  return (
    <table>
      <thead>
        <tr>
          <td>
            <h2>Feedback</h2>
          </td>
        </tr>
      </thead>
      <tbody>
        <StaticLine text={"Good"} value={good} />
        <StaticLine text={"Neutral"} value={neutral} />
        <StaticLine text={"Bad"} value={bad} />
        <StaticLine text={"All"} value={all} />
        <StaticLine text={"Average"} value={average} />
        <StaticLine text={"Positive"} value={positive + "%"} />
      </tbody>
    </table>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);
  const [average, setAverage] = useState(0);

  const handleGoodButton = () => {
    const updatedGood = good + 1;
    setGood(updatedGood);
    const updatedAll = updatedGood + neutral + bad;
    setAll(updatedAll);
    calcAverage({ good: updatedGood, bad: bad, all: updatedAll });
  };

  const handleNeutralButton = () => {
    const updatedNeutral = neutral + 1;
    setNeutral(updatedNeutral);
    const updatedAll = good + updatedNeutral + bad;
    setAll(updatedAll);

    calcAverage({ good, bad, all: updatedAll });
  };

  const handleBadButton = () => {
    const updatedBad = bad + 1;
    setBad(updatedBad);
    const updatedAll = good + neutral + updatedBad;
    setAll(updatedAll);
    calcAverage({ good: good, bad: updatedBad, all: updatedAll });
  };

  const calcAverage = ({ good, bad, all }) => {
    // console.log("good: ", good);
    // console.log("bad: ", bad);

    const updatedAverage = good - bad;

    // console.log("updatedAverage: ", updatedAverage);

    if (all === 0) {
      return 0;
    } else {
      return setAverage(updatedAverage / all);
    }
  };

  return (
    <div>
      <h1>Give feedback</h1>

      <Button smashAction={handleGoodButton} text={"Good"} />
      <Button smashAction={handleNeutralButton} text={"Neutral"} />
      <Button smashAction={handleBadButton} text={"Bad"} />

      {all === 0 ? (
        <p>No feedback given</p>
      ) : (
        <Statics
          good={good}
          neutral={neutral}
          bad={bad}
          all={all}
          average={average}
          positive={(good / all) * 100}
        />
      )}
    </div>
  );
};

export default App;
