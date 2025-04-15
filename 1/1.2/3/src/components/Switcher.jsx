import React, { useState } from 'react'

const Switcher = () => {
    const [sw,setSw] = useState(false)
  return (
    <div>
        {sw?(<div style={{height:"100%", backgroundColor:"black", color:"white"}}>Dark</div>):(<div style={{height:"100%", backgroundColor:"white", color:"black"}}>Light</div>)} 
        <br/>
        <input type='text' key={sw?"Dark":"Light"}/>
          {/* we are using key here to make the input field unique everytime we switch */}
        <button onClick={()=>setSw(s=>!s)}>Switch</button>

    </div>
  )
}

export default Switcher
