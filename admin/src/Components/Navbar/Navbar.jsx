import React from 'react'
import './Navbar.css'
import navlogo from '../../assets/tt_logo.jpeg'
import navProfile from '../../assets/admin_logo1.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='nav-logo'><img src={navlogo} alt="" className="tt_logo" /></div>
        <div className='nav-profile'><img src={navProfile} alt="" className="admin_logo1" />
        </div>


    </div>
  )
}

export default Navbar