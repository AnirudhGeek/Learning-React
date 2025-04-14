import React from 'react'

const Weather = ({temperature}) => {
    if(temperature<15) return <h5>It's cold outside.</h5>
    else if(temperature<25) return <h5>It's nice outside</h5>
    else return <h5>It's hot outside!</h5>
}

export default Weather
