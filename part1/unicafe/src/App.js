import { useState } from "react";

const Heading = ({ text }) => {
  return <h1>{text}</h1>;
};

const Button = ({ text, handleClick }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const StatisticLine = ({ text, value }) => {
  return (
    <p>
      {text} {value}
    </p>
  );
};

const Statistic = ({ result }) => {
  const total = result.good + result.neutral + result.bad;
  const average = total === 0 ? 0 : (result.good * 1 + result.bad * -1) / total;
  const positive = total === 0 ? 0 : (result.good / total) * 100;

  if (total === 0) {
    return <p>No Feedback</p>;
  }

  return (
    <div>
      <StatisticLine text={"Good"} value={result.good} />
      <StatisticLine text={"Neutral"} value={result.neutral} />
      <StatisticLine text={"Bad"} value={result.bad} />
      <StatisticLine text={"All"} value={total} />
      <StatisticLine text={"average"} value={average} />
      <StatisticLine text={"positive"} value={`${positive} %`} />
    </div>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <Heading text="give feedback" />
      <Button text="good" handleClick={() => setGood(good + 1)} />
      <Button text="neutral" handleClick={() => setNeutral(neutral + 1)} />
      <Button text="bad" handleClick={() => setBad(bad + 1)} />
      <Heading text="statistics" />
      <Statistic result={{ good, neutral, bad }} />
    </div>
  );
};

export default App;
