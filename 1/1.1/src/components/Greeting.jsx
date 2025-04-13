import React from 'react'
const greet = "Greetings of the day"
const date = new Date()

function Greeting() {
  return (
    <div>
      <h1>{greet}</h1>
      <p>Date : {date.getDate()}</p>
    </div>
  )
}

export default Greeting