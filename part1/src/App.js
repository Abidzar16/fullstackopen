import React, { useState } from 'react'

const StatisticLine = ({ counter, text }) => (
  <tr><th align='left'>{text}</th><td align='right'>{counter}</td></tr>
)

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const All = (good, neutral, bad) => {
  return good + neutral + bad
}

const Average = (good, neutral, bad) => {
  return ((good * 1 + neutral * 0 + bad * -1)/All(good, neutral, bad)).toFixed(2)
}

const Positive = (good, neutral, bad) => {
  return (((good)/All(good, neutral, bad) * 100)).toFixed(2) + " %"
}

const Statistics = ({good, neutral, bad}) => {
  if (good + bad + neutral === 0){
    return ( <p>No feedback given</p> )
  } else {
    return (
      <div>
        <table>
          <tbody>
            <StatisticLine counter={good} text="good"/>
            <StatisticLine counter={neutral} text="neutral"/>
            <StatisticLine counter={bad} text="bad"/>
            <StatisticLine counter={All(good, neutral, bad)} text="all"/>
            <StatisticLine counter={Average(good, neutral, bad)} text="average"/>
            <StatisticLine counter={Positive(good, neutral, bad)} text="positive"/>
          </tbody>
        </table>
      </div>
    )
  }
}

const Anecdotes = (anecdotes) => {
  return <p>{anecdotes[getRandomInt(anecdotes.length)]}</p>
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [selected, setSelected] = useState(0)

  const increaseByOneGood = () => setGood(good + 1)
  const increaseByOneNeutral = () => setNeutral(neutral + 1)
  const increaseByOneBad = () => setBad(bad + 1)

  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  return (
    <div>
      <h1>give feedback</h1>
      <Button
        onClick={increaseByOneGood}
        text='good'
      />
      <Button
        onClick={increaseByOneNeutral}
        text='neutral'
      />
      <Button
        onClick={increaseByOneBad}
        text='bad'
      />
      <br></br>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
      <p>{anecdotes[getRandomInt(anecdotes.length)]}</p>
    </div>
  )
}

export default App