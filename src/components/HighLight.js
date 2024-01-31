import React from 'react'
import "./highlight.css"
const HighLight = () => {
  return (
    <div className='highlights'>
        <div className='data'>
          <h3>Revenues</h3>
          <div>
          <h1>15% <img src='./arrow_up.svg' height="30px"/></h1>
          <p>Increase compared to the last week.</p>
          </div>
         
          <a style={{color:"#734A00"}}>Revenues report <img src='./arrow.svg' height="10px" /></a>
          </div>
          <div className='data'>
          <h3>Lost deals</h3>
          <div>
          <h1>4% </h1>
          <p>You closed 96 out of 100 deals</p>
          </div>
         
          <a style={{color:"#734A00"}}>All deals <img src='./arrow.svg' height="10px" /></a>
          </div>
        

        <div className='meter'>
          
          <h3>Quarter goal</h3>
          <img src='./meter.svg' height="80px"/>
          <a style={{color:"#734A00"}}>All goals <img src='./arrow.svg' height="10px" /></a>
          </div>
    </div>
  )
}

export default HighLight