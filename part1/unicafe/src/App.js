import { useState } from 'react'

const Button = ({text, action}) => {
        console.log(action)
        return <button onClick={action}>{text}</button>
}

const StatisticsRow = ({text, value}) => {
        return <div>{text} {value}</div>
}

const increaseRatingEvent = (value, action) => {
        const increaser = () => {
                action(value +1)
        }
        console.log(increaser)
        return increaser
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" action={increaseRatingEvent(good, setGood)} />
      <Button text="neutral" action={increaseRatingEvent(neutral, setNeutral)} />
      <Button text="bad" action={increaseRatingEvent(bad, setBad)} />
      <h1>statistics</h1>
      <StatisticsRow text="good" value={good} />
      <StatisticsRow text="neutral" value={neutral} />
      <StatisticsRow text="bad" value={bad} />
    </div>
  )
}

export default App
