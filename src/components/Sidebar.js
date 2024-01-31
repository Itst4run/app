import React from 'react'
import "./sidebar.css"
const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='nav'>
            <img src='/Logo.svg'/>
            <input type='text' placeholder='search'/>
        <a> <img src='./dashboard.svg' height="14px"/>Dashboard</a>
        <a><img src='./ustomer.svg' height="14px"/>Customers</a>
        <a><img src='./report.svg' height="14px"/>All reports</a>
        <a><img src='./onver.svg' height="14px"/>Geography</a> 
        <a><img src='./geo.svg' height="14px"/>Conversations</a>
        <a><img src='./deals.svg' height="14px"/>Deals</a>
        <a><img src='./export.svg' height="14px"/>Export</a>
        </div>
        <div className='settings'>
          <div className='admin'>
            <img src='Avatar.svg' height="45px" style={{marginBottom:"5px"}}/>
            <div className='admin-det'>
              <h3>Gustavo Xavier</h3>
              <p>Admin</p>
            </div>
          </div>
          <a><img src='./sett.svg' height="14px"/>Settings</a>
          <a><img src='./lgout.svg' height="14px"/>Logout</a>
        </div>
    </div>
  )
}

export default Sidebar