import React from 'react'
import Growth from './Growth'
import HighLight from './HighLight'
import "./main.css"
import Other from './Other'
const Main = () => {
  return (
    <div className='main'>
        <HighLight/>
        <Growth/>
        <Other/>
    </div>
  )
}

export default Main