import { useState } from "react";

const Button = ({ text, action }) => {
  console.log(action);
  return <button onClick={action}>{text}</button>;
};

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const increaseRatingEvent = (value, action) => {
  const increaser = () => {
    action(value + 1);
  };
  console.log(increaser);
  return increaser;
};

const Statistics = ({ good, bad, neutral }) => {
  const total = good + neutral + bad;
  const average = (good - bad) / total;
  const percent_positive = (good / total) * 100;

  if (total === 0) {
    return <div>No feedback given</div>;
  } else {
    return (
      <table>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={total} />
        <StatisticLine text="average" value={average} />
        <StatisticLine text="positive" value={percent_positive + " %"} />
      </table>
    );
  }
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" action={increaseRatingEvent(good, setGood)} />
      <Button
        text="neutral"
        action={increaseRatingEvent(neutral, setNeutral)}
      />
      <Button text="bad" action={increaseRatingEvent(bad, setBad)} />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
