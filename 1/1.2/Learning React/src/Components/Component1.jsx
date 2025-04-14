import React from 'react'

const Component1 = ({counting,onClickHandler}) => {
  return (
    <div>
      <p>{counting}</p>
      <button onClick={onClickHandler}>Increment</button>
    </div>
  )
}

export default Component1
