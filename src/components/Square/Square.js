import React from 'react'
import './Square.css'

function Square({back, front, position, boxPicked, show}) {

    
  return (
    <div className="square-container">
        <img src={show? front : back}  alt={front}
        onClick={()=>boxPicked(position)} />
    </div>
  )
}

export default Square