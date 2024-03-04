import React from 'react'
import './day.style.css'
const Day = ({day, percent}) => {
  return (
    <div className='day-details'>
        <div className='data'>
            <p>Productivity on {day}</p>
            <span>{percent}%</span>
        </div>
        <progress value={percent} max={100} />
    </div>
  )
}

export default Day