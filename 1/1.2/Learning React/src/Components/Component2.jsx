import React from 'react'

const Component2 = ({counting,onClickHandler}) => {
  return (
    <div>
      <p>{counting}</p>
      <button onClick={onClickHandler}>Decrement</button>
    </div>
  )
}

export default Component2
