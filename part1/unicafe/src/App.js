import { useState } from 'react'

const Statistic = ({text, value}) => {
  return (
    <tr><td>{text} {value}</td></tr>
  )
}

const Statistics = (props) => {
  const {good, bad, neutral} = props;
  const all = good + neutral + bad;

  if (all === 0){
    return (
      <div>
        <h1> Statistics </h1>
        <p>No feedback given</p>
      </div>
    )
  }

  return (
    <div>
      <h1> Statistics </h1>
      <table>
          <tbody>
            <Statistic text="good" value={good} />
            <Statistic text="bad" value={bad} />
            <Statistic text="neutral" value={neutral} />
            <Statistic text="all" value={all} />
            <Statistic text="average" value={all/3} />
            <Statistic text="positive" value={good/all*100 + "%"} />
        </tbody>
      </table>
    </div>
  )
}

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => setGood(good + 1)
  const handleNeutralClick = () => setNeutral(neutral + 1)
  const handleBadClick = () => setBad(bad + 1)

  return (
    <div>
      <h1> Customer feedback </h1>
      <Button onClick={handleGoodClick} text={"good"}/>
      <Button onClick={handleNeutralClick} text={"neutral"}/>
      <Button onClick={handleBadClick} text={"bad"}/>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
