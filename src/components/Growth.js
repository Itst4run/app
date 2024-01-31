import React from 'react'
import "./growth.css"
const Growth = () => {
  return (
    <div className='gr'>
      <div className='customer'>
        <div className='title'>
          <h2>Customers</h2>
          <select>
            <option>Sort by Newest</option>
          </select>
        </div>
        <div className='list'>
<img src='./asset/1.svg'/>
<img src='./asset/2.svg'/>
<img src='./asset/3.svg'/>
<img src='./asset/4.svg'/>
        </div>
        <a style={{color:"#734A00"}}>All customers <img src='./arrow.svg' height="10px" /></a>
      </div>
      <div className='growth'>
        <div>
<img src='./graph.svg'/>
        </div>
        <div className='det-box'>
          <div className='detail'>
            <p>Top month</p>
            <h2>November</h2>
            <span>2019</span>
          </div>
          <div className='detail'>
            <p>Top year</p>
            <h2>2023</h2>
            96k sold so far
          </div>
          <div className='detail'>
            <p>Top buyer</p>
            <img src='./mg.svg'/>
            <br />
              Maggie johnson
            
          
          </div>
        </div>
        </div>
    </div>
  )
}

export default Growth