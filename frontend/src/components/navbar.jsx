import React from 'react'
import '../styles/navbar.css'

const Navbar = () => {
  return (
    <section className='navbar'>
    <div className='nav-items'>
    <p className='logo colored'>Vincent.AI</p>
      <ul className='nav-list'>
        <li>About</li>
        <li>Features</li>
        <li>Pricing</li>
        <li><button className='sign-up'>Sign up</button></li>
      </ul>
    </div>
    </section>
  )
}

export default Navbar
