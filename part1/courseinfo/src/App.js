import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return <h1>{props.name}</h1>
}

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercise}
    </p>
  )
}

const Content = (props) => {
  return (
    <div>
      {props.parts.map(prop => <Part part={prop.part} exercise={prop.exercises}/>)}
    </div>
  )
}

const Total = (props) => {
  var sum = 0;
  for (var prop of props.parts){
    sum += prop.exercises;
  }
  console.log(props.parts);
  return (
    <p>Number of exercises {sum}</p>
  )
}

const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                part: 'Fundamentals of React',
                exercises: 10
            },
            {
                part: 'Using props to pass data',
                exercises: 7
            },
            {
                part: 'State of a component',
                exercises: 14
            },
        ]
    }
  
    return (
      <div>
        <Header name={course.name}/>
        <Content parts={course.parts}/>
        <Total parts={course.parts}/>
      </div>
    )
  }

export default App