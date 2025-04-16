import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const BasicEffect = () => {
    const [change,setChange] = useState(0)
    useEffect(()=>{
        console.log("Change done!")
    },[])
  return (
    <div>
      <button onClick={()=>setChange(change+1)}>Change</button>
    </div>
  )
}

export default BasicEffect
