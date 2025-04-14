import React from 'react'

const Greeting2 = ({timeOfDay}) => {
  return (
    <div>
      {timeOfDay==="morning" ? <h5>Good Morning!</h5> : <h5>Good Afternoon!</h5>}
    </div>
  )
}

export default Greeting2
