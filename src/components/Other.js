import React from 'react'
import "./other.css"
const Other = () => {
  return (
    <div className='other'>
        <div className='chats'>
     <h2>chats</h2>
     <p>2 unread messages</p>
     <div className='inb'>
     <img src='./1.svg'/>
     <img src='./2.svg'/>
     <img src='./3.svg'/>
     <img src='./4.svg'/>
     </div>

        </div>
        <div className='top'>
<h2>Top states</h2>
<div>
        <img src='./ny.svg'/>
        <img src='./ma.svg'/>
        <img src='./nh.svg'/>
        <img src='./or.svg'/>
</div>
        </div>
        <div className='deals'>
<h2>New deals</h2>
<div className='cluster'>
        <div>
        <img src='./fruit.svg'/>
        <img src='./marshal.svg'/>
        <img src='./ccnt.svg'/>
        </div>

        <div>
                 <img src='./jaona.svg'/>
                 <img src='./vegan.svg'/>
                 
        </div>

        <div>
        <img src='./organic.svg'/>
        <img src='./traget.svg'/>
        <img src='./morello.svg'/>
        </div>
</div>
        </div>
    </div>
  )
}

export default Other